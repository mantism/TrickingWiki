"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["mantism.github.io/TrickingWiki/index.html","4b9967aef38e5454547f18a2a773af56"],["mantism.github.io/TrickingWiki/static/css/main.f5e3cbde.css","e26151185baf5c5ab003a9138f60f857"],["mantism.github.io/TrickingWiki/static/js/main.ec3e1978.js","6412d1524f8df1e8bf8b16afac8f0cc8"],["mantism.github.io/TrickingWiki/static/media/gainer-sprite32.1cd3a048.svg","1cd3a048e118eb74f3176d591093790d"],["mantism.github.io/TrickingWiki/static/media/gainer-sprite64.47272ec6.svg","47272ec6833292dc8547577735f3fc35"],["mantism.github.io/TrickingWiki/static/media/nodes32.d5cb3348.svg","d5cb33487bc8afb3b0b2d74c3a5bd57e"],["mantism.github.io/TrickingWiki/static/media/nodes64.cf0bd28b.svg","cf0bd28b0cfae06433262ba673897a41"],["mantism.github.io/TrickingWiki/static/media/piechart32.dc07ec80.svg","dc07ec80cfc19c304568431a6e56f7b6"],["mantism.github.io/TrickingWiki/static/media/piechart64.82bef33b.svg","82bef33bfeb99cfdbc78429b156a03cd"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,i){var r=new URL(e);return i&&r.pathname.match(i)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],i=new URL(t,self.location),r=createCacheKey(i,hashParamName,n,/\.\w{8}\./);return[i.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var i=new Request(n,{credentials:"same-origin"});return fetch(i).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("mantism.github.io/TrickingWiki/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});