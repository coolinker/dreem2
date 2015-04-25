/*
 The MIT License (see LICENSE)
 Copyright (C) 2014-2015 Teem2 LLC
*/

// using the node-hue-api found here:  https://github.com/peter-murray/node-hue-api

define(function(require, exports, module)
{
	var node = require("$CLASSES/node")
	var teem = require("$CLASSES/teem")
// do not reload the hue module - 
	try
	{
		var Hue = define.huebaseOnce || (define.huebaseOnce = require("node-hue-api"))
		var HueApi = Hue.HueApi;
		var LightState = Hue.lightState;
		var SerialPort = serialPortModule.SerialPort
	}
	catch(e){}
	
	var displayResult = function(result) 
	{
		console.log("result: " + JSON.stringify(result, null, 2));
	};

	var displayError = function(err) 
	{
		console.error("error: " + err);
	};
	
	return node.extend("huebase", function()
	{
		this.attribute("init", "event");
		this.setLight = function(id, r,g,b)
		{
			console.log(id,r,g,b);
			if (this.apiObject == undefined) 
			{
			console.log("test");
			return;
			}
			var state  =  LightState.create();
			this.apiObject.setLightState(id, state.on().transitiontime(0).hsl(r,g,b)).fail(displayError).done();
		}
		this.init = function() 
		{				
			console.color('~br~Hue~~ object started on server\n')	
			
			Hue.nupnpSearch(function(err, result) 
			{
				for(r in result)
				{
					if (result[r].id == this.id)
					{
						if (this.username != undefined)
						{
							var state  =  LightState.create();
							this.apiObject =  new HueApi(result[r].ipaddress, this.username);
							this.apiObject.searchForNewLights().then(displayResult).done();
							this.apiObject.lights().then(displayResult).done();
							this.apiObject.setLightState(1, state.on().transitiontime(0).hue(0).sat(255)).fail(displayError).done();
							return;
							this.apiObject.setLightState(2, state.on().transitiontime(0).hue(0).sat(255)).fail(displayError).done();
							return;
						}
					}
				}
			}.bind(this));
		}
	})
})