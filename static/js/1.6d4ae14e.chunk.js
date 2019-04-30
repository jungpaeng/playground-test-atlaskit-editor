(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1017:function(e,t,n){"use strict";var i=n(1),r=n(917),o=function(){function e(){this.emitter=new r.EventEmitter2({wildcard:!0})}return e.prototype.once=function(e,t){this.emitter.once(e,t)},e.prototype.on=function(e,t){this.emitter.on(e,t)},e.prototype.onAny=function(e){this.emitter.onAny(e)},e.prototype.addListener=function(e,t){this.emitter.addListener(e,t)},e.prototype.off=function(e,t){this.emitter.off(e,t)},e.prototype.removeListener=function(e,t){this.emitter.removeListener(e,t)},e.prototype.removeAllListeners=function(e){void 0===e?this.emitter.removeAllListeners():this.emitter.removeAllListeners(e)},e.prototype.emit=function(e,t){return this.emitter.emit(e,t)},e}();n.d(t,"a",function(){return s});var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i.__extends(t,e),t.prototype.emitUploadsStart=function(e){this.emit("uploads-start",{files:e})},t.prototype.emitUploadProgress=function(e,t){this.emit("upload-status-update",{file:e,progress:t})},t.prototype.emitUploadPreviewUpdate=function(e,t){this.emit("upload-preview-update",{file:e,preview:t})},t.prototype.emitUploadProcessing=function(e){this.emit("upload-processing",{file:e})},t.prototype.emitUploadEnd=function(e,t){this.emit("upload-end",{file:e,public:t})},t.prototype.emitUploadError=function(e,t){this.emit("upload-error",{file:e,error:t})},t}(o)},552:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"c",function(){return s});var i=n(1);function r(e,t){return i.__awaiter(this,void 0,void 0,function(){var n,r;return i.__generator(this,function(i){switch(i.label){case 0:return n={file:e},(r=t)?[3,2]:[4,(o=e,new Promise(function(e,t){var n=new FileReader;n.addEventListener("load",function(){var i=n.result;"string"===typeof i?e(i):null===i&&t()}),n.addEventListener("error",t),n.readAsDataURL(o)}))];case 1:r=i.sent(),i.label=2;case 2:return[2,(n.src=r,n)]}var o})})}function o(e){return new Promise(function(t,n){var i=new FileReader;i.addEventListener("load",function(){var e=new Uint8Array(i.result);t(e)}),i.addEventListener("error",n),i.readAsArrayBuffer(e)})}function s(e){return new Promise(function(t,n){var i=new Image;i.src=e,i.onload=function(){t(i)},i.onerror=n})}},564:function(e,t,n){"use strict";var i,r,o=n(1);!function(e){e.JPEG="image/jpeg",e.PNG="image/png"}(i||(i={})),function(e){e.XResolution="XResolution",e.YResolution="YResolution",e.Orientation="Orientation"}(r||(r={}));var s,a={"top-left":1,"top-right":2,"bottom-right":3,"bottom-left":4,"left-top":5,"right-top":6,"right-bottom":7,"left-bottom":8},l=r.XResolution,c=r.YResolution;function u(e){var t=this;return new Promise(function(i,r){return o.__awaiter(t,void 0,void 0,function(){var t;return o.__generator(this,function(o){switch(o.label){case 0:return s?[3,2]:[4,n.e(192).then(n.t.bind(null,1406,7))];case 1:t=o.sent(),s=t.default||t,o.label=2;case 2:return s.parseMetaData(e,function(e){try{var t=e&&e.exif?e.exif.getAll():{};Object.keys(t).forEach(function(e){var n=t[e];"object"===typeof n&&(e===l||e===c)&&"numerator"in n&&(t[e]=n.numerator),"number"===typeof t[e]&&(t[e]=""+t[e])}),i(t)}catch(n){r(n)}}),[2]}})})})}var f,h=n(552);function p(e){return o.__awaiter(this,void 0,void 0,function(){var t,i;return o.__generator(this,function(r){switch(r.label){case 0:return f?[3,2]:[4,n.e(209).then(n.t.bind(null,1405,7))];case 1:t=r.sent(),f=t.default||t,r.label=2;case 2:return[4,Object(h.a)(e)];case 3:return i=r.sent(),[4,d(f(i))];case 4:return[2,r.sent()]}})})}function d(e){return o.__awaiter(this,void 0,void 0,function(){var t,n,i,r,s,a,l;return o.__generator(this,function(o){for(t="",n={},i=0;i<e.length&&"IEND"!==(r=e[i]).name;++i)"iTXt"===r.name&&(t=String.fromCharCode.apply(null,r.data)),"pHYs"===r.name&&(s=new DataView(r.data.buffer),1===s.getUint8(8)&&(a=s.getUint32(0),l=s.getUint32(4),n={PixelPerUnitX:a,PixelPerUnitY:l}));return[2,{iTXt:t,pHYs:n}]})})}function v(e){return o.__awaiter(this,void 0,void 0,function(){var t,n,r,s;return o.__generator(this,function(a){switch(a.label){case 0:t=e.type,a.label=1;case 1:return a.trys.push([1,6,,7]),t!==i.PNG?[3,3]:[4,p(e)];case 2:return n=a.sent(),r=n.iTXt,s=n.pHYs,[2,o.__assign({},function(e){var t={},n=e.match(/<(tiff|exif):.+>/gi);return n&&n.forEach(function(e){var n=e.match(/<(tiff|exif):([^>]+)>([^<]+)/i);if(n){var i=n[2];t[i]=n[3]}}),t}(r),s)];case 3:return e.type!==i.JPEG?[3,5]:[4,u(e)];case 4:return[2,a.sent()];case 5:return[3,7];case 6:return a.sent(),[3,7];case 7:return[2,null]}})})}var m=n(890);n.d(t,"a",function(){return w}),n.d(t,"b",function(){return P});var y=r.Orientation,_=r.XResolution,g=72;function w(e){return o.__awaiter(this,void 0,void 0,function(){var t,n,i,r;return o.__generator(this,function(o){switch(o.label){case 0:return[4,U(e)];case 1:return(t=o.sent())?(n=t.width,i=t.height,r=t.tags,[2,{scaleFactor:function(e,t){var n=function(e){try{var t=e.name.trim().match(/@([0-9\.]+)x\.[a-z]{3}$/);if(t)return parseFloat(t[1])}catch(n){}return null}(e);return null!==n?n:t?"number"===typeof t.PixelPerUnitX?Math.round(.0254*t.PixelPerUnitX)/g:F(t,_,g)/g:1}(e.file,r),width:n,height:i}]):[2,null]}})})}var b=function(e){if(e&&e[y]){var t=e[y];if(t){var n=parseInt(t,10);return isNaN(n)?a[t]:n}}return 1};function P(e){return o.__awaiter(this,void 0,void 0,function(){var t;return o.__generator(this,function(n){switch(n.label){case 0:return[4,v(e)];case 1:return t=n.sent(),[2,b(t)]}})})}function F(e,t,n){try{var i=parseFloat(""+e[t]);if(!isNaN(i))return i}catch(r){}return n}function U(e){return o.__awaiter(this,void 0,void 0,function(){var t,n,i,r,s,a,l,c,u,f,p;return o.__generator(this,function(o){switch(o.label){case 0:return t=e.file,n=e.src,i=t.type,r=0,s=0,[4,v(t)];case 1:if((a=o.sent())&&a.PixelXDimension&&(r=F(a,"PixelXDimension",0)),a&&a.PixelXDimension&&(s=F(a,"PixelYDimension",0)),0!==r||0!==s)return[3,6];l=void 0,o.label=2;case 2:return o.trys.push([2,4,,5]),[4,Object(h.c)(n)];case 3:return l=o.sent(),[3,5];case 4:return o.sent(),[2,null];case 5:c=l.naturalWidth,u=l.naturalHeight,r=c,s=u,o.label=6;case 6:return f=b(a),p=Object(m.b)(f),[2,{type:i,width:p?s:r,height:p?r:s,tags:a}]}})})}},888:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var i="recents"},890:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o});var i={1:"none",2:"rotateY(180deg)",3:"rotate(180deg)",4:"rotate(180deg) rotateY(180deg)",5:"rotate(270deg) rotateY(180deg)",6:"rotate(90deg)",7:"rotate(90deg) rotateY(180deg)",8:"rotate(270deg)"},r=function(e){return e>=5},o=function(e){return i[e]}},892:function(e,t,n){"use strict";var i=n(1),r=n(1017),o=n(551),s=n.n(o),a=n(877),l=n(956),c=n(962),u=n(917),f=n(408),h=n(888),p=n(958),d=n(552),v=n(564);var m=n(959),y=n(961),_=n(921),g=n.n(_),w=function(){function e(e,t,n){var r=this;this.tenantContext=e,this.tenantUploadParams=t,this.shouldCopyFileToRecents=n,this.emit=function(e,t){r.emitter.emit(e,t)},this.onFileSuccess=function(e,t){return i.__awaiter(r,void 0,void 0,function(){var n,r,o=this;return i.__generator(this,function(i){return n=e.mediaFile,this.copyFileToUsersCollection(t).catch(console.log),this.emit("file-converting",{file:n}),r={id:t},this.emit("file-converted",{file:n,public:r}),e.cancel=function(){o.releaseCancellableFile(n)},[2]})})},this.onFileProgress=function(e,t){var n=e.mediaFile,i=e.file.size,o=new m.a(i,i*t,n.creationDate,Date.now());r.emit("file-uploading",{file:n,progress:o.toJSON()})},this.onFileError=function(e,t,n){if(r.releaseCancellableFile(e),"canceled"!==n){var i=n instanceof Error?n.message:n;r.emit("file-upload-error",{file:e,error:{fileId:e.id,description:i,name:t}})}},this.emitter=new u.EventEmitter2,this.cancellableFilesUploads={};var o=e.config,s=o.authProvider,c=o.userAuthProvider;this.tenantMediaStore=new l.a({authProvider:s}),c&&(this.userMediaStore=new l.a({authProvider:c}),this.userContext=a.a.create({userAuthProvider:c,authProvider:c}))}return e.prototype.setUploadParams=function(e){this.tenantUploadParams=e},e.prototype.createUploadController=function(){return new c.a},e.prototype.addFiles=function(e){this.addFilesWithSource(e.map(function(e){return{file:e,source:y.a.LocalUpload}}))},e.prototype.addFilesWithSource=function(e){var t=this;if(0!==e.length){var n=Date.now(),r=this.userContext,o=this.tenantContext,l=this.shouldCopyFileToRecents,c=l?o:r,u=l?this.tenantUploadParams.collection:h.a;if(c){for(var p=[],d=0;d<e.length;d++)p.push({fileId:s()(),occurrenceKey:s()(),collection:u});var v=c.file.touchFiles(p,u),m=e.map(function(e,r){var o,h,d=e.file,m=e.source,y=p[r],_=y.fileId,g=y.occurrenceKey,w=v.then(function(e){var t=e.created.find(function(e){return e.fileId===_});if(!t)throw new Error("Cant retrieve uploadId from result of touch endpoint call");return t.uploadId}),b={collection:u,content:d,name:d.name,mimeType:d.type},P={id:_,occurrenceKey:g,deferredUploadId:w},F=t.createUploadController(),U=c.file.upload(b,F,P),L=Promise.resolve(_);if(!l){var x=s()(),T={collection:t.tenantUploadParams.collection,occurrenceKey:x};L=t.tenantMediaStore.createFile(T).then(function(e){return e.data.id}),o=Promise.resolve(_),h=Promise.resolve(g)}var k={id:_,upfrontId:L,userUpfrontId:o,userOccurrenceKey:h,name:d.name,size:d.size,creationDate:n,type:d.type,occurrenceKey:g},E={mediaFile:k,file:d,source:m,cancel:function(){F.abort()}},O=U.subscribe({next:function(e){"uploading"===e.status&&t.onFileProgress(E,e.progress),"processing"===e.status&&(O.unsubscribe(),t.onFileSuccess(E,_))},error:function(e){t.onFileError(k,"upload_fail",e)}});return t.cancellableFilesUploads[_]=E,a.b.set(_,U),L.then(function(e){var t=U.pipe(Object(f.map)(function(t){return i.__assign({},t,{id:e})}));a.b.set(e,t)}),E}),y=m.map(function(e){return e.mediaFile});this.emit("files-added",{files:y}),this.emitPreviews(m)}}},e.prototype.cancel=function(e){var t=this;if(e){var n=this.cancellableFilesUploads[e];n&&n.cancel&&n.cancel()}else Object.keys(this.cancellableFilesUploads).forEach(function(e){var n=t.cancellableFilesUploads[e];n.cancel&&n.cancel()})},e.prototype.on=function(e,t){this.emitter.on(e,t)},e.prototype.off=function(e,t){this.emitter.off(e,t)},e.prototype.emitPreviews=function(e){var t=this;e.forEach(function(e){var n=e.file,r=e.mediaFile,o=e.source,s=t.getMediaTypeFromFile(n);"image"===s?function(e,t){return i.__awaiter(this,void 0,void 0,function(){var n,r,o,s,a;return i.__generator(this,function(i){switch(i.label){case 0:return[4,Object(d.b)(e)];case 1:return n=i.sent(),[4,Object(v.a)(n)];case 2:return null===(r=i.sent())?[2,{file:e}]:(o=r.width,s=r.height,a=r.scaleFactor,[2,{file:e,dimensions:{width:o,height:s},scaleFactor:t||a}])}})})}(n,o===y.a.PastedScreenshot?window.devicePixelRatio:void 0).then(function(e){t.emit("file-preview-update",{file:r,preview:e})}):function(e,t){return new Promise(function(n,r){return i.__awaiter(void 0,void 0,void 0,function(){var o,s,a,l,c;return i.__generator(this,function(i){switch(i.label){case 0:return o=URL.createObjectURL(e),"image"!==t?[3,1]:((s=new Image).src=o,s.onload=function(){var t={width:s.width,height:s.height},i={file:e,dimensions:t,scaleFactor:1};URL.revokeObjectURL(o),n(i)},s.onerror=r,[3,4]);case 1:return"video"!==t?[3,3]:[4,(a=new g.a(e)).getDimensions()];case 2:return l=i.sent(),c={file:e,dimensions:l,scaleFactor:1},a.end(),n(c),[3,4];case 3:n({file:e}),i.label=4;case 4:return[2]}})})})}(n,s).then(function(e){t.emit("file-preview-update",{file:r,preview:e})})})},e.prototype.getMediaTypeFromFile=function(e){var t=e.type;return Object(a.c)(t)},e.prototype.releaseCancellableFile=function(e){delete this.cancellableFilesUploads[e.id]},e.prototype.copyFileToUsersCollection=function(e){var t=this.shouldCopyFileToRecents,n=this.userMediaStore,r=this.tenantUploadParams;if(!t||!n)return Promise.resolve();var o=r.collection;return(0,this.tenantContext.config.authProvider)({collectionName:o}).then(function(t){var r={sourceFile:{id:e,collection:o,owner:i.__assign({},Object(p.a)(t))}},s={collection:h.a};return n.copyFileWithToken(r,s)})},e}();n.d(t,"a",function(){return b});var b=function(e){function t(t,n){var i=e.call(this)||this;i.onFilesAdded=function(e){var t=e.files;i.emitUploadsStart(t)},i.onFilePreviewUpdate=function(e){var t=e.file,n=e.preview;i.emitUploadPreviewUpdate(t,n)},i.onFileUploading=function(e){var t=e.file,n=e.progress;i.emitUploadProgress(t,n)},i.onFileConverting=function(e){var t=e.file;i.emitUploadProcessing(t)},i.onFileConverted=function(e){i.emitUploadEnd(e.file,e.public)},i.onUploadError=function(e){var t=e.file,n=e.error;i.emitUploadError(t,n)};var r=n.uploadParams;i.context=t;var o=n.shouldCopyFileToRecents,s=void 0===o||o;return i.uploadService=new w(i.context,r,s),i.config=n,i.uploadService.on("files-added",i.onFilesAdded),i.uploadService.on("file-preview-update",i.onFilePreviewUpdate),i.uploadService.on("file-uploading",i.onFileUploading),i.uploadService.on("file-converting",i.onFileConverting),i.uploadService.on("file-converted",i.onFileConverted),i.uploadService.on("file-upload-error",i.onUploadError),i}return i.__extends(t,e),t.prototype.cancel=function(e){this.uploadService.cancel(e)},t.prototype.setUploadParams=function(e){this.uploadService.setUploadParams(e)},t}(r.a)},917:function(e,t,n){(function(i){var r;!function(o){var s=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},a=10;function l(){this._events={},this._conf&&c.call(this,this._conf)}function c(e){e?(this._conf=e,e.delimiter&&(this.delimiter=e.delimiter),this._maxListeners=e.maxListeners!==o?e.maxListeners:a,e.wildcard&&(this.wildcard=e.wildcard),e.newListener&&(this.newListener=e.newListener),e.verboseMemoryLeak&&(this.verboseMemoryLeak=e.verboseMemoryLeak),this.wildcard&&(this.listenerTree={})):this._maxListeners=a}function u(e,t){var n="(node) warning: possible EventEmitter memory leak detected. "+e+" listeners added. Use emitter.setMaxListeners() to increase limit.";if(this.verboseMemoryLeak&&(n+=" Event name: "+t+"."),"undefined"!==typeof i&&i.emitWarning){var r=new Error(n);r.name="MaxListenersExceededWarning",r.emitter=this,r.count=e,i.emitWarning(r)}else console.error(n),console.trace&&console.trace()}function f(e){this._events={},this.newListener=!1,this.verboseMemoryLeak=!1,c.call(this,e)}function h(e,t,n,i){if(!n)return[];var r,o,s,a,l,c,u,f=[],p=t.length,d=t[i],v=t[i+1];if(i===p&&n._listeners){if("function"===typeof n._listeners)return e&&e.push(n._listeners),[n];for(r=0,o=n._listeners.length;r<o;r++)e&&e.push(n._listeners[r]);return[n]}if("*"===d||"**"===d||n[d]){if("*"===d){for(s in n)"_listeners"!==s&&n.hasOwnProperty(s)&&(f=f.concat(h(e,t,n[s],i+1)));return f}if("**"===d){for(s in(u=i+1===p||i+2===p&&"*"===v)&&n._listeners&&(f=f.concat(h(e,t,n,p))),n)"_listeners"!==s&&n.hasOwnProperty(s)&&("*"===s||"**"===s?(n[s]._listeners&&!u&&(f=f.concat(h(e,t,n[s],p))),f=f.concat(h(e,t,n[s],i))):f=s===v?f.concat(h(e,t,n[s],i+2)):f.concat(h(e,t,n[s],i)));return f}f=f.concat(h(e,t,n[d],i+1))}if((a=n["*"])&&h(e,t,a,i+1),l=n["**"])if(i<p)for(s in l._listeners&&h(e,t,l,p),l)"_listeners"!==s&&l.hasOwnProperty(s)&&(s===v?h(e,t,l[s],i+2):s===d?h(e,t,l[s],i+1):((c={})[s]=l[s],h(e,t,{"**":c},i+1)));else l._listeners?h(e,t,l,p):l["*"]&&l["*"]._listeners&&h(e,t,l["*"],p);return f}f.EventEmitter2=f,f.prototype.delimiter=".",f.prototype.setMaxListeners=function(e){e!==o&&(this._maxListeners=e,this._conf||(this._conf={}),this._conf.maxListeners=e)},f.prototype.event="",f.prototype.once=function(e,t){return this._once(e,t,!1)},f.prototype.prependOnceListener=function(e,t){return this._once(e,t,!0)},f.prototype._once=function(e,t,n){return this._many(e,1,t,n),this},f.prototype.many=function(e,t,n){return this._many(e,t,n,!1)},f.prototype.prependMany=function(e,t,n){return this._many(e,t,n,!0)},f.prototype._many=function(e,t,n,i){var r=this;if("function"!==typeof n)throw new Error("many only accepts instances of Function");function o(){return 0===--t&&r.off(e,o),n.apply(this,arguments)}return o._origin=n,this._on(e,o,i),r},f.prototype.emit=function(){this._events||l.call(this);var e=arguments[0];if("newListener"===e&&!this.newListener&&!this._events.newListener)return!1;var t,n,i,r,o,s=arguments.length;if(this._all&&this._all.length){if(o=this._all.slice(),s>3)for(t=new Array(s),r=0;r<s;r++)t[r]=arguments[r];for(i=0,n=o.length;i<n;i++)switch(this.event=e,s){case 1:o[i].call(this,e);break;case 2:o[i].call(this,e,arguments[1]);break;case 3:o[i].call(this,e,arguments[1],arguments[2]);break;default:o[i].apply(this,t)}}if(this.wildcard){o=[];var a="string"===typeof e?e.split(this.delimiter):e.slice();h.call(this,o,a,this.listenerTree,0)}else{if("function"===typeof(o=this._events[e])){switch(this.event=e,s){case 1:o.call(this);break;case 2:o.call(this,arguments[1]);break;case 3:o.call(this,arguments[1],arguments[2]);break;default:for(t=new Array(s-1),r=1;r<s;r++)t[r-1]=arguments[r];o.apply(this,t)}return!0}o&&(o=o.slice())}if(o&&o.length){if(s>3)for(t=new Array(s-1),r=1;r<s;r++)t[r-1]=arguments[r];for(i=0,n=o.length;i<n;i++)switch(this.event=e,s){case 1:o[i].call(this);break;case 2:o[i].call(this,arguments[1]);break;case 3:o[i].call(this,arguments[1],arguments[2]);break;default:o[i].apply(this,t)}return!0}if(!this._all&&"error"===e)throw arguments[1]instanceof Error?arguments[1]:new Error("Uncaught, unspecified 'error' event.");return!!this._all},f.prototype.emitAsync=function(){this._events||l.call(this);var e=arguments[0];if("newListener"===e&&!this.newListener&&!this._events.newListener)return Promise.resolve([!1]);var t,n,i,r,o,s=[],a=arguments.length;if(this._all){if(a>3)for(t=new Array(a),r=1;r<a;r++)t[r]=arguments[r];for(i=0,n=this._all.length;i<n;i++)switch(this.event=e,a){case 1:s.push(this._all[i].call(this,e));break;case 2:s.push(this._all[i].call(this,e,arguments[1]));break;case 3:s.push(this._all[i].call(this,e,arguments[1],arguments[2]));break;default:s.push(this._all[i].apply(this,t))}}if(this.wildcard){o=[];var c="string"===typeof e?e.split(this.delimiter):e.slice();h.call(this,o,c,this.listenerTree,0)}else o=this._events[e];if("function"===typeof o)switch(this.event=e,a){case 1:s.push(o.call(this));break;case 2:s.push(o.call(this,arguments[1]));break;case 3:s.push(o.call(this,arguments[1],arguments[2]));break;default:for(t=new Array(a-1),r=1;r<a;r++)t[r-1]=arguments[r];s.push(o.apply(this,t))}else if(o&&o.length){if(o=o.slice(),a>3)for(t=new Array(a-1),r=1;r<a;r++)t[r-1]=arguments[r];for(i=0,n=o.length;i<n;i++)switch(this.event=e,a){case 1:s.push(o[i].call(this));break;case 2:s.push(o[i].call(this,arguments[1]));break;case 3:s.push(o[i].call(this,arguments[1],arguments[2]));break;default:s.push(o[i].apply(this,t))}}else if(!this._all&&"error"===e)return arguments[1]instanceof Error?Promise.reject(arguments[1]):Promise.reject("Uncaught, unspecified 'error' event.");return Promise.all(s)},f.prototype.on=function(e,t){return this._on(e,t,!1)},f.prototype.prependListener=function(e,t){return this._on(e,t,!0)},f.prototype.onAny=function(e){return this._onAny(e,!1)},f.prototype.prependAny=function(e){return this._onAny(e,!0)},f.prototype.addListener=f.prototype.on,f.prototype._onAny=function(e,t){if("function"!==typeof e)throw new Error("onAny only accepts instances of Function");return this._all||(this._all=[]),t?this._all.unshift(e):this._all.push(e),this},f.prototype._on=function(e,t,n){if("function"===typeof e)return this._onAny(e,t),this;if("function"!==typeof t)throw new Error("on only accepts instances of Function");return this._events||l.call(this),this.emit("newListener",e,t),this.wildcard?(function(e,t){for(var n=0,i=(e="string"===typeof e?e.split(this.delimiter):e.slice()).length;n+1<i;n++)if("**"===e[n]&&"**"===e[n+1])return;for(var r=this.listenerTree,s=e.shift();s!==o;){if(r[s]||(r[s]={}),r=r[s],0===e.length)return r._listeners?("function"===typeof r._listeners&&(r._listeners=[r._listeners]),r._listeners.push(t),!r._listeners.warned&&this._maxListeners>0&&r._listeners.length>this._maxListeners&&(r._listeners.warned=!0,u.call(this,r._listeners.length,s))):r._listeners=t,!0;s=e.shift()}return!0}.call(this,e,t),this):(this._events[e]?("function"===typeof this._events[e]&&(this._events[e]=[this._events[e]]),n?this._events[e].unshift(t):this._events[e].push(t),!this._events[e].warned&&this._maxListeners>0&&this._events[e].length>this._maxListeners&&(this._events[e].warned=!0,u.call(this,this._events[e].length,e))):this._events[e]=t,this)},f.prototype.off=function(e,t){if("function"!==typeof t)throw new Error("removeListener only takes instances of Function");var n,i=[];if(this.wildcard){var r="string"===typeof e?e.split(this.delimiter):e.slice();i=h.call(this,null,r,this.listenerTree,0)}else{if(!this._events[e])return this;n=this._events[e],i.push({_listeners:n})}for(var a=0;a<i.length;a++){var l=i[a];if(n=l._listeners,s(n)){for(var c=-1,u=0,f=n.length;u<f;u++)if(n[u]===t||n[u].listener&&n[u].listener===t||n[u]._origin&&n[u]._origin===t){c=u;break}if(c<0)continue;return this.wildcard?l._listeners.splice(c,1):this._events[e].splice(c,1),0===n.length&&(this.wildcard?delete l._listeners:delete this._events[e]),this.emit("removeListener",e,t),this}(n===t||n.listener&&n.listener===t||n._origin&&n._origin===t)&&(this.wildcard?delete l._listeners:delete this._events[e],this.emit("removeListener",e,t))}return function e(t){if(t!==o){var n=Object.keys(t);for(var i in n){var r=n[i],s=t[r];s instanceof Function||"object"!==typeof s||null===s||(Object.keys(s).length>0&&e(t[r]),0===Object.keys(s).length&&delete t[r])}}}(this.listenerTree),this},f.prototype.offAny=function(e){var t,n=0,i=0;if(e&&this._all&&this._all.length>0){for(n=0,i=(t=this._all).length;n<i;n++)if(e===t[n])return t.splice(n,1),this.emit("removeListenerAny",e),this}else{for(n=0,i=(t=this._all).length;n<i;n++)this.emit("removeListenerAny",t[n]);this._all=[]}return this},f.prototype.removeListener=f.prototype.off,f.prototype.removeAllListeners=function(e){if(0===arguments.length)return!this._events||l.call(this),this;if(this.wildcard)for(var t="string"===typeof e?e.split(this.delimiter):e.slice(),n=h.call(this,null,t,this.listenerTree,0),i=0;i<n.length;i++){n[i]._listeners=null}else this._events&&(this._events[e]=null);return this},f.prototype.listeners=function(e){if(this.wildcard){var t=[],n="string"===typeof e?e.split(this.delimiter):e.slice();return h.call(this,t,n,this.listenerTree,0),t}return this._events||l.call(this),this._events[e]||(this._events[e]=[]),s(this._events[e])||(this._events[e]=[this._events[e]]),this._events[e]},f.prototype.eventNames=function(){return Object.keys(this._events)},f.prototype.listenerCount=function(e){return this.listeners(e).length},f.prototype.listenersAny=function(){return this._all?this._all:[]},(r=function(){return f}.call(t,n,t,e))===o||(e.exports=r)}()}).call(this,n(296))},921:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(r,o){function s(e){try{l(i.next(e))}catch(t){o(t)}}function a(e){try{l(i.throw(e))}catch(t){o(t)}}function l(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(s,a)}l((i=i.apply(e,t||[])).next())})},r=this&&this.__generator||function(e,t){var n,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,i&&(r=i[2&o[0]?"return":o[0]?"throw":"next"])&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[0,r.value]),o[0]){case 0:case 1:r=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,i=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){s.label=o[1];break}if(6===o[0]&&s.label<r[1]){s.label=r[1],r=o;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(o);break}r[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(a){o=[6,a],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};Object.defineProperty(t,"__esModule",{value:!0});var o="undefined"!==typeof navigator&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent),s=function(){function e(e){var t=this;this.loadVideo=function(e){return void 0===e&&(e=0),new Promise(function(n){var i=document.createElement("video");if(i.preload="metadata",i.src=t.videoUrl,i.muted=!0,0===e)i.play();else{if("number"===typeof e)i.currentTime=e;else if("string"===typeof e){var r=i.duration;i.currentTime=t.getSmartTime(e,r)}o&&i.play()}i.addEventListener("timeupdate",function e(){i.removeEventListener("timeupdate",e),i.pause(),n(i)})})},this.getDimensions=function(){return i(t,void 0,void 0,function(){var e;return r(this,function(t){switch(t.label){case 0:return[4,this.loadVideo()];case 1:return[2,{width:(e=t.sent()).videoWidth,height:e.videoHeight}]}})})};var n=URL.createObjectURL(e);this.videoUrl=n}return e.prototype.takeSnapshot=function(e){return i(this,void 0,void 0,function(){var t,n,i;return r(this,function(r){switch(r.label){case 0:return[4,this.loadVideo(e)];case 1:if(t=r.sent(),(n=document.createElement("canvas")).width=t.videoWidth,n.height=t.videoHeight,!(i=n.getContext("2d")))throw new Error("error creating canvas context");return i.drawImage(t,0,0,n.width,n.height),[2,n.toDataURL()]}})})},e.prototype.end=function(){this.revoke()},e.prototype.revoke=function(){URL.revokeObjectURL(this.videoUrl)},e.prototype.getSmartTime=function(e,t){return void 0===t&&(t=0),{start:0,middle:t/2,end:t}[e]},e}();t.default=s},958:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var i=n(877);function r(e){return Object(i.d)(e)?{id:e.clientId,token:e.token,baseUrl:e.baseUrl}:e}},959:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var i=n(960),r=function(){function e(t,n,r,o){this.size=t,this.progress=n,this.startTime=r,this.measureTime=o,e.isValidSize(t)?e.isValidProgress(t,n)?e.isValidStartTime(r)?e.isValidMeasureTime(r,o)?(this.size=t,this.progress=n,this.startTime=r,this.measureTime=o):Object(i.a)("wrong_measure_time","The progress measure time has incorrect format."):Object(i.a)("wrong_start_time","The progress start time has incorrect format."):Object(i.a)("wrong_progress","The progress format is incorrect."):Object(i.a)("wrong_file_size","Passed file size is incorrect.")}return Object.defineProperty(e.prototype,"absolute",{get:function(){return this.progress},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"portion",{get:function(){return this.progress/this.size},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"max",{get:function(){return this.size},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"overallTime",{get:function(){return(this.measureTime-this.startTime)/this.portion},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"expectedFinishTime",{get:function(){return this.startTime+this.overallTime},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"timeLeft",{get:function(){return this.expectedFinishTime-this.measureTime},enumerable:!0,configurable:!0}),e.prototype.toJSON=function(){return{absolute:this.absolute,portion:this.portion,max:this.max,overallTime:this.overallTime,expectedFinishTime:this.expectedFinishTime,timeLeft:this.timeLeft}},e.isValidSize=function(e){return"number"===typeof e&&e>0},e.isValidProgress=function(t,n){return e.isValidSize(t)&&"number"===typeof n&&n>=0&&n<=t},e.isValidStartTime=function(e){return"number"===typeof e&&e>0},e.isValidMeasureTime=function(t,n){return e.isValidStartTime(t)&&"number"===typeof n&&n>=t},e}()},960:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var i=function(e,t){var n=e+": "+(t||"")+" \n "+(Error().stack||"");console.error(n)}},961:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var i;!function(e){e[e.PastedFile=0]="PastedFile",e[e.PastedScreenshot=1]="PastedScreenshot",e[e.LocalUpload=2]="LocalUpload"}(i||(i={}))},962:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var i=function(){function e(){}return e.prototype.setAbort=function(e){this.abortFunction=e},e.prototype.abort=function(){this.abortFunction&&this.abortFunction()},e}()}}]);
//# sourceMappingURL=1.6d4ae14e.chunk.js.map