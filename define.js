/*
 The MIT License (MIT) (see LICENSE)
 Copyright (C) 2014-2015 Teem2 LLC

 Micro AMD module loader for browser and node.js
*/

(function(config_define){

	// the main define function
	function define(factory){
		if(arguments.length == 2){ // precompiled version
			define.factory[factory] = arguments[1]
			return
		}
		define.last_factory = factory // store for the script tag
		// continue calling
		if(define.define) define.define(factory)
	}
	
	// prototyping
	//define.amd = true

	// default config variables
	define.ROOT = ''
	define.CLASSES = "$ROOT/classes"
	define.CORE = "$ROOT/core"
	define.LIB = "$ROOT/lib"
	define.EXTLIB = "/_extlib_"
	define.COMPOSITIONS = "$ROOT/compositions"
	define.BUILD = "$ROOT/build"
	define.SPRITE = "$ROOT/lib/dr/sprite_browser"
	
	// copy configuration onto define
	if(typeof config_define == 'object') for(var key in config_define){
		define[key] = config_define[key]
	}

	define.filePath = function(file){
		if(!file) return ''
		file = file.replace(/\.\//g, '')
		var m = file.match(/([\s\S]*)\/[^\/]*$/)
		return m ? m[1] : ''
	}

	define.cleanPath = function(path){
		return path.replace(/^\/+/,'/').replace(/([^:])\/+/g,'$1/')
	}

	define.joinPath = function(base, relative){
		if(relative.charAt(0) != '.'){ // relative is already absolute
			if(relative.charAt(0) == '/' || relative.indexOf(':') != -1){
				return relative
			}
			var path = base + '/' + relative
			return define.cleanPath(path)
		}
		base = base.split(/\//)
		relative = relative.replace(/\.\.\//g,function(){ base.pop(); return ''}).replace(/\.\//g, '')
		return define.cleanPath(base.join('/') + '/' + relative)
	}

	// expand define variables
	define.expandVariables = function(str){
		return define.cleanPath(str.replace(/\$([^\/$]*)/g, function(all, lut){
			if(!(lut in define)) throw new Error("Cannot find $" + lut + " used in require")
			return define.expandVariables(define[lut])
		}))
	}

	define.findRequires = function(str){
		var req = []
		// bail out if we redefine require
		if(str.match(/function\s+require/) || str.match(/var\s+require/)){
			return req
		}
		str.replace(/\/\*[\s\S]*?\*\//g,'').replace(/\/\/[^\n]/g,'').replace(/require\s*\(\s*["']([^"']+)["']\s*\)/g, function(m, path){
			req.push(path)
		})
		return req
	}

	define.localRequire = function(base_path){
		function require(dep_path){
			abs_path = define.joinPath(base_path, define.expandVariables(dep_path))
			if(abs_path.lastIndexOf('.js') !== abs_path.length - 3) abs_path = abs_path + '.js'
			// lets look it up
			var module = define.module[abs_path]
			if(module) return module.exports

			// otherwise lets initialize the module
			var factory = define.factory[abs_path]
			module = {exports:{}, id:abs_path, filename:abs_path}
			define.module[abs_path] = module

			if(factory === null) return null // its not an AMD module, but accept that
			if(!factory) throw new Error("Cannot find factory for module:" + abs_path)

			// call the factory
			var ret = factory.call(module.exports, define.localRequire(define.filePath(abs_path)), module.exports, module)
			if(ret !== undefined) module.exports = ret
			return module.exports
		}
		return require
	}

	// storage structures
	define.module = {}
	define.factory = {}

	// the environment we are in
	if(typeof window !== 'undefined') define.env = 'browser'
	else if (typeof process !== 'undefined') define.env = 'nodejs'
	else define.env = 'v8'

	if(define.packaged){
		define.localRequire = function(base_path){
			function require(dep_path){
				if(dep_path.charAt(0) === '$')
					var abs_path = dep_path
				else
					var abs_path = define.joinPath(base_path, dep_path)

				if(abs_path.lastIndexOf('.js') !== abs_path.length - 3) abs_path = abs_path + '.js'
				// lets look it up
				var module = define.module[abs_path]
				//console.log(Object.keys(define.module).join(','));
				if(module) 
				{
					return module.exports
				}
			
				// otherwise lets initialize the module
				var factory = define.factory[abs_path]
				module = {exports:{}, id:abs_path, filename:abs_path}
				define.module[abs_path] = module

				if(factory === null) return null // its not an AMD module, but accept that
				if(!factory) throw new Error("Cannot find factory for module:" + abs_path)

				// call the factory
				var ret = factory.call(module.exports, define.localRequire(define.filePath(abs_path)), module.exports, module)
				if(ret !== undefined) module.exports = ret
				return module.exports
			}
			return require
		}

		define.require = define.localRequire('')
		return define
	}
	else if(typeof window !== 'undefined')(function(){ // browser implementation
		// if define was already defined use it as a config store
		define.ROOT = location.origin
		define.environment == 'browser|modules'
		// storage structures
		define.script_tags = {}

		// the require function passed into the factory is local
		
		
		var app_root = define.filePath(window.location.href)

		function startMain(){
			// lets find our main and execute the factory
			var main_mod = define.expandVariables(define.MAIN)

			var factory = define.factory[main_mod]
			if(!factory) throw new Error("Cannot find main: " + main_mod)

			// lets boot up
			var module = {exports:{}, id:main_mod, filename:main_mod}
			define.module[main_mod] = module
			var ret = factory(define.localRequire(define.filePath(main_mod)), module.exports, module)
			if(ret !== undefined) module.exports = ret
			if(define.onMain) define.onMain(module.exports)
		}

		// the main dependency download queue counter
		var downloads = 0

		// insert by script tag
		function insertScriptTag(script_url, from_file){
			var script = document.createElement('script')
			var base_path = define.filePath(script_url)

			script.type = 'text/javascript'
			script.src = script_url
			define.script_tags[script_url] = script
				
			downloads++
			function onLoad(){
				// pull out the last factor
				var factory = define.factory[script_url] = define.last_factory || null
				define.last_factory = undefined
				// parse the function for other requires
				if(factory) define.findRequires(factory.toString()).forEach(function(path){
					// Make path absolute and process variables
					var dep_path = define.joinPath(base_path, define.expandVariables(path))

					// automatic .js appending if not given
					if(dep_path.indexOf(".js") != dep_path.length -3) dep_path += '.js'
					// load it
					if(!define.script_tags[dep_path]) insertScriptTag(dep_path, script_url)
				})
				if(!--downloads) startMain() // no more deps
			}
			script.onerror = function(){ console.error("Error loading " + script.src + " from " + from_file) }
			script.onload = onLoad
			script.onreadystatechange = function(){
				if(s.readyState == 'loaded' || s.readyState == 'complete') onLoad()
			}
			document.getElementsByTagName('head')[0].appendChild(script)
		}

		// make it available globally
		window.define = define

		// boot up using the MAIN property
		if(define.MAIN){
			insertScriptTag(define.expandVariables(define.MAIN), window.location.href)
		}
		window.out = console.log.bind(console)

		var backoff = 1
		define.autoreloadConnect = function(){

			if(this.reload_socket){
				this.reload_socket.onclose = undefined
				this.reload_socket.onerror = undefined
				this.reload_socket.onmessage = undefined
				this.reload_socket.onopen = undefined
				this.reload_socket.close()
				this.reload_socket = undefined
			}
			this.reload_socket = new WebSocket('ws://' + location.host)

			this.reload_socket.onopen = function(){
				backoff = 1
			}

			this.reload_socket.onerror = function(){
			}

			this.reload_socket.onclose = function(){
				if((backoff*=2) > 1000) backoff = 1000
				setTimeout(function(){ define.autoreloadConnect() }, backoff)
			}

			this.reload_socket.onmessage = function(event){
				var msg = JSON.parse(event.data)
				if (msg.type === 'filechange') {
					location.href = location.href  // reload on filechange
				}
				else if (msg.type === 'close') {
					window.close() // close the window
				} 
				else if (msg.type === 'delay') { // a delay refresh message
					console.log('Got delay refresh from server!');
					setTimeout(function() {
						location.href = location.href
					}, 1500)
				}
			}
		}
		define.autoreloadConnect()
	})()
	else (function(){ // nodeJS implementation
		module.exports = global.define = define
		define.environment = 'node'

		define.ROOT = define.filePath(module.filename.replace(/\\/g,'/'))

		var Module = require("module")
		var modules = []
		var _compile = module.constructor.prototype._compile

		// hook compile to keep track of module objects
		module.constructor.prototype._compile = function(content, filename){  
			modules.push(this)
			try {
				return _compile.call(this, content, filename)
			}
			finally {
				modules.pop()
			}
		}

		define.define = function(factory) {

			if(factory instanceof Array) throw new Error("injects-style not supported")

			var module = modules[modules.length - 1] || require.main

			// store module and factory just like in the other envs
			define.module[module.filename] = module
			define.factory[module.filename] = factory

			function localRequire(name) {
				if(arguments.length != 1) throw new Error("Unsupported require style")

				name = define.expandVariables(name)
				var full_name = Module._resolveFilename(name, module)

				if (full_name instanceof Array) full_name = full_name[0]

				if(define.onRequire && full_name.charAt(0) == '/'){
					define.onRequire(full_name)
				}

				return require(full_name)
			}

			localRequire.clearCache = function(name)
			{
				Module._cache = {}
			}
			
			if (typeof factory !== "function") return module.exports = factory
						
			var ret = factory.call(module.exports, localRequire, module.exports, module)
			if(ret !== undefined) module.exports = ret
		}

		global.define.require = require
		global.define.module = {}
		global.define.factory = {}
		// fetch a new require for the main module and return that
		
		define.define(function(require)
		{
			module.exports = require
		})
	})()
})(typeof define !== 'undefined' && define)

if(typeof console === 'undefined')
{
	var console = 
	{
		log: function()
		{
			var out = ''
			for(var i = 0;i<arguments.length;i++)
			{
				if(i) out += ', '
				out += arguments[i]
			}
			out += '\n'
			log(out)
		},
		dir: function()
		{
			var out = ''
			for(var i = 0;i<arguments.length;i++)
			{
				if(i) out += ', '
				out += arguments[i]
			}
			out += '\n'
			log(out)
		},
		warn: function()
		{
			var out = ''
			for(var i = 0;i<arguments.length;i++)
			{
				if(i) out += ', '
				out += arguments[i]
			}
			out += '\n'
			log(out)
		}
	}
}
Math.flow = function(arg){
	console.log('flow', arg)
	return arg
}