Ext.data.JsonP.dr_floatingpanel({"tagname":"class","name":"dr.floatingpanel","autodetected":{},"files":[{"filename":"floatingpanel.js","href":"floatingpanel.html#dr-floatingpanel"}],"members":[{"name":"hideonblur","tagname":"attribute","owner":"dr.floatingpanel","id":"attribute-hideonblur","meta":{}},{"name":"hideonmousedown","tagname":"attribute","owner":"dr.floatingpanel","id":"attribute-hideonmousedown","meta":{}},{"name":"hideonwheel","tagname":"attribute","owner":"dr.floatingpanel","id":"attribute-hideonwheel","meta":{}},{"name":"ignoreownerforhideonblur","tagname":"attribute","owner":"dr.floatingpanel","id":"attribute-ignoreownerforhideonblur","meta":{}},{"name":"ignoreownerforhideonmousedown","tagname":"attribute","owner":"dr.floatingpanel","id":"attribute-ignoreownerforhideonmousedown","meta":{}},{"name":"owner","tagname":"attribute","owner":"dr.floatingpanel","id":"attribute-owner","meta":{}},{"name":"panelid","tagname":"attribute","owner":"dr.floatingpanel","id":"attribute-panelid","meta":{}},{"name":"","tagname":"property","owner":"dr.floatingpanel","id":"property-","meta":{"private":true}},{"name":"doLostFocus","tagname":"method","owner":"dr.floatingpanel","id":"method-doLostFocus","meta":{}},{"name":"doMouseDownOutside","tagname":"method","owner":"dr.floatingpanel","id":"method-doMouseDownOutside","meta":{}},{"name":"doWheelOutside","tagname":"method","owner":"dr.floatingpanel","id":"method-doWheelOutside","meta":{}},{"name":"focus","tagname":"method","owner":"dr.floatingpanel","id":"method-focus","meta":{}},{"name":"getFirstFocusableDescendant","tagname":"method","owner":"dr.floatingpanel","id":"method-getFirstFocusableDescendant","meta":{}},{"name":"hide","tagname":"method","owner":"dr.floatingpanel","id":"method-hide","meta":{}},{"name":"isShown","tagname":"method","owner":"dr.floatingpanel","id":"method-isShown","meta":{}},{"name":"restoreFocus","tagname":"method","owner":"dr.floatingpanel","id":"method-restoreFocus","meta":{}},{"name":"show","tagname":"method","owner":"dr.floatingpanel","id":"method-show","meta":{}},{"name":"updateLocation","tagname":"method","owner":"dr.floatingpanel","id":"method-updateLocation","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-dr.floatingpanel","short_doc":"A panel that floats above everything else. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/floatingpanel.html#dr-floatingpanel' target='_blank'>floatingpanel.js</a></div></pre><div class='doc-contents'><p>A panel that floats above everything else.</p>\n\n<p>Configured as visible false since panels will always begin by not being\nseen.</p>\n\n<p>Configured as focusable true and focuscage true to ensure the focus\nstarts and ends with the panel</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-attribute'>Attributes</h3><div class='subsection'><div id='attribute-hideonblur' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.floatingpanel'>dr.floatingpanel</span><br/><a href='source/floatingpanel.html#dr-floatingpanel-attribute-hideonblur' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.floatingpanel-attribute-hideonblur' class='name expandable'>hideonblur</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'><p>If true this panel will be hidden when a focus traverses outside the panel.</p>\n</div><div class='long'><p>If true this panel will be hidden when a focus traverses outside the panel.</p>\n</div></div></div><div id='attribute-hideonmousedown' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.floatingpanel'>dr.floatingpanel</span><br/><a href='source/floatingpanel.html#dr-floatingpanel-attribute-hideonmousedown' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.floatingpanel-attribute-hideonmousedown' class='name expandable'>hideonmousedown</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'><p>If true this panel will be hidden when a mousedown occurs outside the panel.</p>\n</div><div class='long'><p>If true this panel will be hidden when a mousedown occurs outside the panel.</p>\n</div></div></div><div id='attribute-hideonwheel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.floatingpanel'>dr.floatingpanel</span><br/><a href='source/floatingpanel.html#dr-floatingpanel-attribute-hideonwheel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.floatingpanel-attribute-hideonwheel' class='name expandable'>hideonwheel</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'><p>If true this panel will be hidden when a wheel event occurs.</p>\n</div><div class='long'><p>If true this panel will be hidden when a wheel event occurs.</p>\n</div></div></div><div id='attribute-ignoreownerforhideonblur' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.floatingpanel'>dr.floatingpanel</span><br/><a href='source/floatingpanel.html#dr-floatingpanel-attribute-ignoreownerforhideonblur' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.floatingpanel-attribute-ignoreownerforhideonblur' class='name expandable'>ignoreownerforhideonblur</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'><p>If true the owner view will also be ignored for blur events.</p>\n</div><div class='long'><p>If true the owner view will also be ignored for blur events.</p>\n</div></div></div><div id='attribute-ignoreownerforhideonmousedown' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.floatingpanel'>dr.floatingpanel</span><br/><a href='source/floatingpanel.html#dr-floatingpanel-attribute-ignoreownerforhideonmousedown' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.floatingpanel-attribute-ignoreownerforhideonmousedown' class='name expandable'>ignoreownerforhideonmousedown</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'><p>If true the owner view will also be ignored for mousedown events.</p>\n</div><div class='long'><p>If true the owner view will also be ignored for mousedown events.</p>\n</div></div></div><div id='attribute-owner' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.floatingpanel'>dr.floatingpanel</span><br/><a href='source/floatingpanel.html#dr-floatingpanel-attribute-owner' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.floatingpanel-attribute-owner' class='name expandable'>owner</a> : dr.floatingpanelanchor<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The anchor that currently \"owns\" this panel.</p>\n</div><div class='long'><p>The anchor that currently \"owns\" this panel.</p>\n</div></div></div><div id='attribute-panelid' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.floatingpanel'>dr.floatingpanel</span><br/><a href='source/floatingpanel.html#dr-floatingpanel-attribute-panelid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.floatingpanel-attribute-panelid' class='name expandable'>panelid</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The unique ID for this panel instance.</p>\n</div><div class='long'><p>The unique ID for this panel instance.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.floatingpanel'>dr.floatingpanel</span><br/><a href='source/floatingpanel.html#dr-floatingpanel-property-' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.floatingpanel-property-' class='name expandable'></a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-doLostFocus' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.floatingpanel'>dr.floatingpanel</span><br/><a href='source/floatingpanel.html#dr-floatingpanel-method-doLostFocus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.floatingpanel-method-doLostFocus' class='name expandable'>doLostFocus</a>( <span class='pre'></span> ) : void<span class=\"signature\"></span></div><div class='description'><div class='short'>Called when focus moves out of the floating panel. ...</div><div class='long'><p>Called when focus moves out of the floating panel. Hides the\nfloating panel by default.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-doMouseDownOutside' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.floatingpanel'>dr.floatingpanel</span><br/><a href='source/floatingpanel.html#dr-floatingpanel-method-doMouseDownOutside' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.floatingpanel-method-doMouseDownOutside' class='name expandable'>doMouseDownOutside</a>( <span class='pre'></span> ) : void<span class=\"signature\"></span></div><div class='description'><div class='short'>Called when a mousedown occurs outside the floating panel. ...</div><div class='long'><p>Called when a mousedown occurs outside the floating panel. The default\nbehavior is to hide the panel. This gives subclasses a chance to\nprovide different behavior.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-doWheelOutside' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.floatingpanel'>dr.floatingpanel</span><br/><a href='source/floatingpanel.html#dr-floatingpanel-method-doWheelOutside' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.floatingpanel-method-doWheelOutside' class='name expandable'>doWheelOutside</a>( <span class='pre'></span> ) : void<span class=\"signature\"></span></div><div class='description'><div class='short'>Called when a wheel occurs outside the floating panel. ...</div><div class='long'><p>Called when a wheel occurs outside the floating panel. The default\nbehavior is to hide the panel. This gives subclasses a chance to\nprovide different behavior.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-focus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.floatingpanel'>dr.floatingpanel</span><br/><a href='source/floatingpanel.html#dr-floatingpanel-method-focus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.floatingpanel-method-focus' class='name expandable'>focus</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>@overrides dr.view\nIntercepts focus on this panel and refocuses to the \"best\" view. ...</div><div class='long'><p>@overrides <a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a>\nIntercepts focus on this panel and refocuses to the \"best\" view.\nWhen focus enters the panel we give focus to the first focusable\ndescendant of the panel. When leaving we ask the panel anchor\nwhere to give focus.</p>\n</div></div></div><div id='method-getFirstFocusableDescendant' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.floatingpanel'>dr.floatingpanel</span><br/><a href='source/floatingpanel.html#dr-floatingpanel-method-getFirstFocusableDescendant' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.floatingpanel-method-getFirstFocusableDescendant' class='name expandable'>getFirstFocusableDescendant</a>( <span class='pre'></span> ) : <a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the view to give focus to when this panel gets focus. ...</div><div class='long'><p>Gets the view to give focus to when this panel gets focus. Should be\na descendant of the floating panel or the panel itself. Returns this\nfloating panel by default.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a></span><div class='sub-desc'><p>The view to give focus to.</p>\n</div></li></ul></div></div></div><div id='method-hide' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.floatingpanel'>dr.floatingpanel</span><br/><a href='source/floatingpanel.html#dr-floatingpanel-method-hide' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.floatingpanel-method-hide' class='name expandable'>hide</a>( <span class='pre'>ignoreRestoreFocus</span> ) : void<span class=\"signature\"></span></div><div class='description'><div class='short'>Hides the floating panel for the provided dr.floatingpanelanchor. ...</div><div class='long'><p>Hides the floating panel for the provided dr.floatingpanelanchor.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ignoreRestoreFocus</span> : Boolean<div class='sub-desc'><p>Optional If true the restoreFocus\nmethod will not be called. Defaults to undefined which is equivalent to\nfalse.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isShown' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.floatingpanel'>dr.floatingpanel</span><br/><a href='source/floatingpanel.html#dr-floatingpanel-method-isShown' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.floatingpanel-method-isShown' class='name expandable'>isShown</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Determines if this floating panel is being \"shown\" or not. ...</div><div class='long'><p>Determines if this floating panel is being \"shown\" or not. Typically\nthis means the floating panel is visible.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if this panel is shown, otherwise false.</p>\n</div></li></ul></div></div></div><div id='method-restoreFocus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.floatingpanel'>dr.floatingpanel</span><br/><a href='source/floatingpanel.html#dr-floatingpanel-method-restoreFocus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.floatingpanel-method-restoreFocus' class='name expandable'>restoreFocus</a>( <span class='pre'></span> ) : void<span class=\"signature\"></span></div><div class='description'><div class='short'>Sends the focus back to the owner. ...</div><div class='long'><p>Sends the focus back to the owner. Can be overridden to\nsend the focus elsewhere.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-show' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.floatingpanel'>dr.floatingpanel</span><br/><a href='source/floatingpanel.html#dr-floatingpanel-method-show' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.floatingpanel-method-show' class='name expandable'>show</a>( <span class='pre'>panelAnchor</span> ) : void<span class=\"signature\"></span></div><div class='description'><div class='short'>Shows the floating panel for the provided dr.floatingpanelanchor. ...</div><div class='long'><p>Shows the floating panel for the provided dr.floatingpanelanchor.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>panelAnchor</span> : dr.floatingpanelanchor<div class='sub-desc'><p>The floating panel anchor\nto show the panel for.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-updateLocation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.floatingpanel'>dr.floatingpanel</span><br/><a href='source/floatingpanel.html#dr-floatingpanel-method-updateLocation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.floatingpanel-method-updateLocation' class='name expandable'>updateLocation</a>( <span class='pre'>panelAnchor</span> ) : void<span class=\"signature\"></span></div><div class='description'><div class='short'>Updates the x and y position of the floating panel for the provided\nfloating panel anchor. ...</div><div class='long'><p>Updates the x and y position of the floating panel for the provided\nfloating panel anchor.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>panelAnchor</span> : dr.floatingpanelanchor<div class='sub-desc'><p>The floating panel anchor\nto update the location for.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});