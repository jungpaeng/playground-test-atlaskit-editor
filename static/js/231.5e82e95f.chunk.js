(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{1397:function(e,r,t){"use strict";t.r(r),t.d(r,"WorkerHasher",function(){return i});var o=t(549),a=t.n(o),s=t(1001),n=t.n(s),i=function(){function e(e){this.workers=[],this.jobs={};for(var r=0;r<e;++r)this.workers.push(this.createWorker())}return e.prototype.hash=function(e){return this.calculateHashInWorker(e)},e.prototype.createWorker=function(){var e=this,r=n.a.createWorker(),t={worker:r,activeJobs:0};return r.addEventListener("message",function(r){e.handleWorkerMessage(r,t)}),t},e.prototype.handleWorkerMessage=function(e,r){var t=e.data.id;if(this.jobs[t]){var o=this.jobs[t],a=o.resolve,s=o.reject;delete this.jobs[t],r.activeJobs--,e.data.error?s(e.data.error):a(e.data.hash)}},e.prototype.calculateHashInWorker=function(e){var r=this,t=a()();return new Promise(function(o,a){r.jobs[t]={resolve:o,reject:a};var s=r.getMostRelaxedWorker();r.dispatch(t,s,e)})},e.prototype.dispatch=function(e,r,t){r.activeJobs++;var o=r.worker;if(navigator.userAgent.indexOf("Safari")>-1&&-1===navigator.userAgent.indexOf("Chrome")){var a=new FileReader;return a.onload=function(){o.postMessage({id:e,data:a.result})},void a.readAsBinaryString(t)}o.postMessage({id:e,data:t})},e.prototype.getMostRelaxedWorker=function(){return this.workers.reduce(function(e,r){return r.activeJobs<e.activeJobs?r:e},this.workers[0])},e}()}}]);
//# sourceMappingURL=231.5e82e95f.chunk.js.map