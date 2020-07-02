const VERSION = "v1";

const CACHE_FILES = [
  "./index.html",
  "./404.html",
  "./js/main.js",
  "./js/jquery-2.2.0.min.js",
  "./css/style.css",
  "./images/1.jpg",
  "./images/avatar.jpg",
  "./images/avatar.gif",
  "./images/blog_bg.jpg",
  "./images/crab.gif",
  "./images/github_bg.jpg",
  "./images/header-bg.jpg",
  "./images/header-bg-sm.jpg",
  "./images/jianshu_bg.jpg",
  "./images/juejin_bg.jpg",
  "./images/weibo_bg.jpg",
  "http://qiniu.huzerui.com/home/crab.gif",
  "http://qiniu.huzerui.com/home/header-bg.jpg",
  "http://at.alicdn.com/t/font_335776_erbsljyft5b.css"
];

// 缓存
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(VERSION).then(function (cache) {
      return cache.addAll(CACHE_FILES);
    })
  );
});

// 缓存更新
self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          // 如果当前版本和缓存版本不一致
          if (cacheName !== VERSION) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// 捕获请求并返回缓存数据
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches
      .match(event.request)
      .catch(function () {
        return fetch(event.request);
      })
      .then(function (response) {
        caches.open(VERSION).then(function (cache) {
          cache.put(event.request, response);
        });
        return response.clone();
      })
      .catch(function () {
        return caches.match("");
      })
  );
});
