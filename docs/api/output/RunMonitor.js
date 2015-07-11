Ext.data.JsonP.RunMonitor({"tagname":"class","name":"RunMonitor","autodetected":{},"files":[{"filename":"rpcmulti.js","href":"rpcmulti.html#RunMonitor"},{"filename":"rpcproxy.js","href":"rpcproxy.html#RunMonitor"},{"filename":"runmonitor.js","href":"runmonitor.html#RunMonitor"},{"filename":"runmonitor.js","href":"runmonitor.html#RunMonitor"}],"members":[{"name":"restart_delay","tagname":"attribute","owner":"RunMonitor","id":"attribute-restart_delay","meta":{}},{"name":"constructor","tagname":"method","owner":"RunMonitor","id":"method-constructor","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-RunMonitor","extends":null,"singleton":null,"private":null,"mixins":[],"requires":[],"uses":[],"short_doc":"RunMonitor class executes ourselves as a subprocess, receives the dependency file names\nfrom the child process and ma...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/rpcmulti.html#RunMonitor' target='_blank'>rpcmulti.js</a></div><div class='dependency'><a href='source/rpcproxy.html#RunMonitor' target='_blank'>rpcproxy.js</a></div><div class='dependency'><a href='source/runmonitor.html#RunMonitor' target='_blank'>runmonitor.js</a></div><div class='dependency'><a href='source/runmonitor.html#RunMonitor' target='_blank'>runmonitor.js</a></div></pre><div class='doc-contents'><p>RunMonitor class executes ourselves as a subprocess, receives the dependency file names\nfrom the child process and manages restart/killing when files change</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-attribute'>Attributes</h3><div class='subsection'><div id='attribute-restart_delay' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RunMonitor'>RunMonitor</span><br/><a href='source/runmonitor.html#RunMonitor-attribute-restart_delay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RunMonitor-attribute-restart_delay' class='name expandable'>restart_delay</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>When in infinite restart loop, wait atleast this long (ms) ...</div><div class='long'><p>When in infinite restart loop, wait atleast this long (ms)</p>\n<p>Defaults to: <code>1000</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RunMonitor'>RunMonitor</span><br/><a href='source/runmonitor.html#RunMonitor-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/RunMonitor-method-constructor' class='name expandable'>RunMonitor</a>( <span class='pre'>argv</span> ) : <a href=\"#!/api/RunMonitor\" rel=\"RunMonitor\" class=\"docClass\">RunMonitor</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Parses the arguments ...</div><div class='long'><p>Parses the arguments</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>argv</span> : Array<div class='sub-desc'><p>Pass process.argv</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/RunMonitor\" rel=\"RunMonitor\" class=\"docClass\">RunMonitor</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});