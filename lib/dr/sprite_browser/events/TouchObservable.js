/**
 * Copyright (c) 2015 Teem2 LLC
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/** Generates Touch Events and passes them on to one or more event observers.
    Also provides the capability to capture contextmenu events and mouse
    wheel events.
    
    Requires: dr.sprite.PlatformObservable callSuper mixin.
*/
define(function(require, exports, module) {
    var dr = require('$LIB/dr/dr.js'),
        JS = require('$LIB/jsclass.js'),
        sprite = require('$SPRITE/sprite.js');
    require('./PlatformObservable.js');
    
    module.exports = sprite.TouchObservable = new JS.Module('sprite.TouchObservable', {
        // Class Methods and Attributes ////////////////////////////////////////////
        extend: {
            /** A map of supported mouse event types. */
            EVENT_TYPES:{
                ontouchstart:true,
                ontouchend:true,
                ontouchmove:true
            },
            
            /** Gets the touch coordinates from the provided event.
                @param platformEvent:domEvent
                @returns object: An object with 'x' and 'y' keys containing the
                    x and y mouse position. */
            getMouseFromEvent: function(platformEvent) {
                return {x:platformEvent.targetTouches[0].pageX, y:platformEvent.targetTouches[0].pageY};
            },
            
            getMouseFromEventRelativeToView: function(platformEvent, view) {
                var viewPos = view.getAbsolutePosition(),
                    pos = this.getMouseFromEvent(platformEvent);
                pos.x -= viewPos.x;
                pos.y -= viewPos.y;
                return pos;
            }
        },
        
        // converts a native event to a sanatized object to prevent leaky abstractions
        coerceNativeTouchEvent: function(event) {
            var t = event.target;
            var view = null;

            while (t !== document) {
              if (t.$view) {
                // don't prevent bubbling for mouseup events
                view = t.$view;
                break
              }
              t = t.parentNode;
            }

            if (event.type==="touchend") {
                return {type:'on' + event.type, view:view, rawtarget:event.target, targetTouches:event.targetTouches}
            }

            var pos = sprite.TouchObservable.getMouseFromEventRelativeToView(event, view);
            return {type:'on' + event.type, view:view, rawtarget:event.target, targetTouches:event.targetTouches, 
                x:pos.x, y:pos.y,
                pageX:event.targetTouches[0].pageX, pageY:event.targetTouches[0].pageY};
        },

        // Methods /////////////////////////////////////////////////////////////////
        /** @overrides dr.sprite.PlatformObservable */
        createPlatformMethodRef: function(platformObserver, methodName, type) {
            return this.createStandardPlatformMethodRef(
                platformObserver, methodName, type, sprite.TouchObservable, 
                true, // Prevent default for all mouse event except wheel since we want the browser to scroll for us.
                this.coerceNativeTouchEvent
            ) || this.callSuper(platformObserver, methodName, type);
        }
    });
});
