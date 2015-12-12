Ext.data.JsonP.dr_editor_orderundoable({"tagname":"class","name":"dr.editor.orderundoable","autodetected":{},"files":[{"filename":"orderundoable.js","href":"orderundoable.html#dr-editor-orderundoable"}],"extends":"dr.editor.undoable","members":[{"name":"done","tagname":"attribute","owner":"dr.editor.undoable","id":"attribute-done","meta":{"readonly":true}},{"name":"newprevsibling","tagname":"attribute","owner":"dr.editor.orderundoable","id":"attribute-newprevsibling","meta":{}},{"name":"oldprevsibling","tagname":"attribute","owner":"dr.editor.orderundoable","id":"attribute-oldprevsibling","meta":{}},{"name":"redodescription","tagname":"attribute","owner":"dr.editor.undoable","id":"attribute-redodescription","meta":{}},{"name":"target","tagname":"attribute","owner":"dr.editor.orderundoable","id":"attribute-target","meta":{}},{"name":"undodescription","tagname":"attribute","owner":"dr.editor.undoable","id":"attribute-undodescription","meta":{}},{"name":"deserialize","tagname":"method","owner":"dr.editor.orderundoable","id":"method-deserialize","meta":{}},{"name":"getRedoDescription","tagname":"method","owner":"dr.editor.undoable","id":"method-getRedoDescription","meta":{}},{"name":"getUndoDescription","tagname":"method","owner":"dr.editor.undoable","id":"method-getUndoDescription","meta":{}},{"name":"retrieveById","tagname":"method","owner":"dr.editor.undoable","id":"method-retrieveById","meta":{}},{"name":"serialize","tagname":"method","owner":"dr.editor.orderundoable","id":"method-serialize","meta":{}},{"name":"undo","tagname":"method","owner":"dr.editor.undoable","id":"method-undo","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-dr.editor.orderundoable","component":false,"superclasses":["dr.eventable","dr.editor.undoable"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>dr.eventable<div class='subclass '><a href='#!/api/dr.editor.undoable' rel='dr.editor.undoable' class='docClass'>dr.editor.undoable</a><div class='subclass '><strong>dr.editor.orderundoable</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/orderundoable.html#dr-editor-orderundoable' target='_blank'>orderundoable.js</a></div></pre><div class='doc-contents'><p>An undoable that updates the lexical order of a view.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-attribute'>Attributes</h3><div class='subsection'><div id='attribute-done' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.editor.undoable' rel='dr.editor.undoable' class='defined-in docClass'>dr.editor.undoable</a><br/><a href='source/undoable.html#dr-editor-undoable-attribute-done' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.editor.undoable-attribute-done' class='name expandable'>done</a> : Boolean<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>Indicates if this undoable is in the \"done\" or \"undone\" state. ...</div><div class='long'><p>Indicates if this undoable is in the \"done\" or \"undone\" state.\nUndoables begin in the undone state.</p>\n</div></div></div><div id='attribute-newprevsibling' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.editor.orderundoable'>dr.editor.orderundoable</span><br/><a href='source/orderundoable.html#dr-editor-orderundoable-attribute-newprevsibling' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.editor.orderundoable-attribute-newprevsibling' class='name expandable'>newprevsibling</a> : expression<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The view the target view ends up in front of.</p>\n</div><div class='long'><p>The view the target view ends up in front of.</p>\n</div></div></div><div id='attribute-oldprevsibling' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.editor.orderundoable'>dr.editor.orderundoable</span><br/><a href='source/orderundoable.html#dr-editor-orderundoable-attribute-oldprevsibling' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.editor.orderundoable-attribute-oldprevsibling' class='name expandable'>oldprevsibling</a> : expression<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The view the target view begins in front of.</p>\n</div><div class='long'><p>The view the target view begins in front of.</p>\n</div></div></div><div id='attribute-redodescription' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.editor.undoable' rel='dr.editor.undoable' class='defined-in docClass'>dr.editor.undoable</a><br/><a href='source/undoable.html#dr-editor-undoable-attribute-redodescription' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.editor.undoable-attribute-redodescription' class='name expandable'>redodescription</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>A human readable representation of the undoable. ...</div><div class='long'><p>A human readable representation of the undoable. The description\nshould describe what will be done/redone when the undoable is\nexecuted.</p>\n</div></div></div><div id='attribute-target' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.editor.orderundoable'>dr.editor.orderundoable</span><br/><a href='source/orderundoable.html#dr-editor-orderundoable-attribute-target' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.editor.orderundoable-attribute-target' class='name expandable'>target</a> : dr.AccessorSupport<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The target object that will be moved.</p>\n</div><div class='long'><p>The target object that will be moved.</p>\n</div></div></div><div id='attribute-undodescription' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.editor.undoable' rel='dr.editor.undoable' class='defined-in docClass'>dr.editor.undoable</a><br/><a href='source/undoable.html#dr-editor-undoable-attribute-undodescription' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.editor.undoable-attribute-undodescription' class='name expandable'>undodescription</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>A human readable representation of the undoable. ...</div><div class='long'><p>A human readable representation of the undoable. The description\nshould describe what will be undone when the undoable is\nexecuted.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-deserialize' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.editor.orderundoable'>dr.editor.orderundoable</span><br/><a href='source/orderundoable.html#dr-editor-orderundoable-method-deserialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.editor.orderundoable-method-deserialize' class='name expandable'>deserialize</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>@overrides ...</div><div class='long'><p>@overrides</p>\n<p>Overrides: <a href=\"#!/api/dr.editor.undoable-method-deserialize\" rel=\"dr.editor.undoable-method-deserialize\" class=\"docClass\">dr.editor.undoable.deserialize</a></p></div></div></div><div id='method-getRedoDescription' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.editor.undoable' rel='dr.editor.undoable' class='defined-in docClass'>dr.editor.undoable</a><br/><a href='source/undoable.html#dr-editor-undoable-method-getRedoDescription' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.editor.undoable-method-getRedoDescription' class='name expandable'>getRedoDescription</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets a human readable description of this undoable for use when it\ncan be done. ...</div><div class='long'><p>Gets a human readable description of this undoable for use when it\ncan be done.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The human readable string.</p>\n</div></li></ul></div></div></div><div id='method-getUndoDescription' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.editor.undoable' rel='dr.editor.undoable' class='defined-in docClass'>dr.editor.undoable</a><br/><a href='source/undoable.html#dr-editor-undoable-method-getUndoDescription' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.editor.undoable-method-getUndoDescription' class='name expandable'>getUndoDescription</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets a human readable description of this undoable for use when it\ncan be undone. ...</div><div class='long'><p>Gets a human readable description of this undoable for use when it\ncan be undone.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The human readable string.</p>\n</div></li></ul></div></div></div><div id='method-retrieveById' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.editor.undoable' rel='dr.editor.undoable' class='defined-in docClass'>dr.editor.undoable</a><br/><a href='source/undoable.html#dr-editor-undoable-method-retrieveById' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.editor.undoable-method-retrieveById' class='name expandable'>retrieveById</a>( <span class='pre'>id</span> ) : Node<span class=\"signature\"></span></div><div class='description'><div class='short'>Used by previewer clients during deserialization to get a node from the\ntree that has the provided ID. ...</div><div class='long'><p>Used by previewer clients during deserialization to get a node from the\ntree that has the provided ID.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : String<div class='sub-desc'><p>The id to get the node for.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Node</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-serialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.editor.orderundoable'>dr.editor.orderundoable</span><br/><a href='source/orderundoable.html#dr-editor-orderundoable-method-serialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.editor.orderundoable-method-serialize' class='name expandable'>serialize</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>@overrides ...</div><div class='long'><p>@overrides</p>\n<p>Overrides: <a href=\"#!/api/dr.editor.undoable-method-serialize\" rel=\"dr.editor.undoable-method-serialize\" class=\"docClass\">dr.editor.undoable.serialize</a></p></div></div></div><div id='method-undo' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.editor.undoable' rel='dr.editor.undoable' class='defined-in docClass'>dr.editor.undoable</a><br/><a href='source/undoable.html#dr-editor-undoable-method-undo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.editor.undoable-method-undo' class='name expandable'>undo</a>( <span class='pre'>callback</span> ) : this<span class=\"signature\"></span></div><div class='description'><div class='short'>Rolls forward this undoable if it is in the undone state. ...</div><div class='long'><p>Rolls forward this undoable if it is in the undone state. Sets the \"done\"\nattribute to true if successfull.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>An optional function that will be executed if\nredo succeeds. The undoable is passed in as an argument to the callback.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>this</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});