/* Copyright 2015-2016 Teem2 LLC. Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing,
 software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 either express or implied. See the License for the specific language governing permissions and limitations under the License.*/

/**
 * @class Eventable {Core Dreem}
 * @extends Module
 * 
 * The baseclass used by everything in dreem. Adds higher level event APIs.
 *
 * An object that provides accessors, events and simple lifecycle management.
 * Useful as a light weight alternative to dr.Node when parent child
 * relationships are not needed.
 *
 * @attribute {Boolean} initing Set to true during initialization and then false
 * when initialization is complete.
 * @readonly
 *
 * @attribute {Boolean} inited Set to true after this Eventable has completed
 * initializing
 * @readonly
 */
define(function(require, exports, module) {
    var dr = require('$LIB/dr/dr.js'),
        JS = require('$LIB/jsclass.js');
    
    module.exports = dr.Eventable = new JS.Class('Eventable', {
        include: [
            require('$LIB/dr/AccessorSupport.js'), 
            require('$LIB/dr/Destructible.js'), 
            require('$LIB/dr/events/Observable.js'), 
            require('$LIB/dr/events/Observer.js')
        ],
        
        // Constructor /////////////////////////////////////////////////////////////
        /** The standard JSClass initializer function.
            @param attrs:object (Optional) A map of attribute names and values.
            @param mixins:array (Optional) a list of mixins to be added onto
                the new instance.
            @returns void */
        initialize: function(attrs, mixins) {
            if (mixins) {
                var i = 0, len = mixins.length, mixin;
                for (; len > i;) {
                    mixin = mixins[i++];
                    if (mixin) {
                        this.extend(mixin);
                    } else {
                        sprite.console.warn("Undefined mixin in initialization of: " + this.klass.__displayName);
                    }
                }
                
                // Pull in default attrs from mixins
                var mixinAttrs = {};
                dr.maker.doMixinExtension(mixinAttrs, mixins);
                attrs = dr.extend(mixinAttrs, attrs);
            }
            
            this.inited = false;
            this.initing = true;
            this.$textcontent = '';
            
            var defaultKlassAttrValues = this.klass.defaultAttrValues;
            if (defaultKlassAttrValues) attrs = dr.extend({}, defaultKlassAttrValues, attrs);
            
            this.init(attrs || {});
        },
        
        
        // Life Cycle //////////////////////////////////////////////////////////////
        /** Called during initialization. Calls setter methods and lastly, sets 
            inited to true and initing to false. Subclasses must callSuper.
            @param attrs:object A map of attribute names and values.
            @returns void */
        init: function(attrs) {
            var CONSTRAINTS = dr.AccessorSupport.CONSTRAINTS;
            CONSTRAINTS.incrementLockCount();
            
            this.setAttributes(attrs);
            
            CONSTRAINTS.decrementLockCount();
            
            this.initing = false;
            this.inited = true;
        },
        
        /** @overrides dr.Destructible. */
        destroy: function() {
            this.stopListeningToAllObservables();
            this.detachAllObservers();
            
            this.callSuper();
        }
    });
});
