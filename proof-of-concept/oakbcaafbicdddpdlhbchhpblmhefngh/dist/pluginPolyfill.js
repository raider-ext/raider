(()=>{"use strict";class e{constructor(e){if(this.__mimeTypes=[],this.__namedMimeTypes={},e)for(let i=0;i<e.length;i++)this.install(e[i])}install(e){const i=this.__mimeTypes.length;this.__mimeTypes.push(e),this.__namedMimeTypes[e.type]=e,this[e.type]=e,this[i]=e}item(e){return this.__mimeTypes[e>>>0]}namedItem(e){return this.__namedMimeTypes[e]}get length(){return this.__mimeTypes.length}[Symbol.iterator](){return this.__mimeTypes[Symbol.iterator]()}}class i{constructor(e){this.__plugins=[],this.__namedPlugins={};for(let i=0;i<e.length;i++)this.install(e[i])}install(e){const i=this.__plugins.length;this.__plugins.push(e),this.__namedPlugins[e.name]=e,this[e.name]=e,this[i]=e}item(e){return this.__plugins[e>>>0]}namedItem(e){return this.__namedPlugins[e]}refresh(){}[Symbol.iterator](){return this.__plugins[Symbol.iterator]()}get length(){return this.__plugins.length}}const t=new class extends e{constructor(e,i,t){super(),this.name=e,this.description=i,this.filename=t}}("Shockwave Flash","Shockwave Flash 32.0 r0","ruffle.js");t.install({type:"application/futuresplash",description:"Shockwave Flash",suffixes:"spl",enabledPlugin:t}),t.install({type:"application/x-shockwave-flash",description:"Shockwave Flash",suffixes:"swf",enabledPlugin:t}),t.install({type:"application/x-shockwave-flash2-preview",description:"Shockwave Flash",suffixes:"swf",enabledPlugin:t}),t.install({type:"application/vnd.adobe.flash.movie",description:"Shockwave Flash",suffixes:"swf",enabledPlugin:t}),function(t){"install"in navigator.plugins&&navigator.plugins.install||Object.defineProperty(navigator,"plugins",{value:new i(navigator.plugins),writable:!1}),navigator.plugins.install(t),!(t.length>0)||"install"in navigator.mimeTypes&&navigator.mimeTypes.install||Object.defineProperty(navigator,"mimeTypes",{value:new e(navigator.mimeTypes),writable:!1});const s=navigator.mimeTypes;for(let e=0;e<t.length;e+=1)s.install(t[e])}(t)})();