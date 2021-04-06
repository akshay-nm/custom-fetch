var CustomFetch;(()=>{var e={352:e=>{function r(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}e.exports=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var t=e.method,o=e.headers,n=e.body,i=e.mode,l=e.credentials,c=e.cache,u=e.redirect,a=e.referrer,s=e.integrity,d=r(e,["method","headers","body","mode","credentials","cache","redirect","referrer","integrity"]),f=d.url,m=d.timeoutDuration,h=r(d,["url","timeoutDuration"]);Object.keys(h).length>0&&console.log("Custom fetch: Ignoring unsupported options:",h);var g={method:t,headers:o,body:n,mode:i,credentials:l,cache:c,redirect:u,referrer:a,integrity:s},b={};return b.controller=new window.AbortController,g.signal=b.controller.signal,b.request=new window.Request(f,g),b.timeout=null,b.abort=function(){return new Promise((function(e){b.timeout&&clearTimeout(b.timeout),b.controller.signal.aborted||b.controller.abort(),e(b.controller.signal.aborted)}))},b.send=function(){return b.timeout=setTimeout((function(){b.controller.abort()}),m),window.fetch(b.request)},b}catch(e){throw console.log("Error:",e),Error("Could not initialise the fetch: ",e.message)}}}},r={},t=function t(o){var n=r[o];if(void 0!==n)return n.exports;var i=r[o]={exports:{}};return e[o](i,i.exports,t),i.exports}(352);CustomFetch=t})();