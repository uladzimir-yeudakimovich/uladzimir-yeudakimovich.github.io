const cacheName = 'V1';

const filesToCache = [
  '/',
  '/main.js',
  '/polyfills.2f4a59095805af02bd79.js',
  '/runtime.a66f828dca56eeb90e02.js',
  '/styles.34c57ab7888ec1573f9c.css',
  '/bootstrap.min.css',
  '/src/assets/images/logo_phone.jpg',
  '/src/assets/images/logo_laptop.jpg',
  '/src/assets/images/logo_tablet.jpg',
  '/src/assets/images/react/app_laptop1.jpg',
  '/src/assets/images/react/app_laptop2.jpg',
  '/src/assets/images/react/app_laptop3.jpg',
  '/src/assets/images/react/app_laptop4.jpg',
  '/src/assets/images/react/app_laptop5.jpg',
  // '/src/assets/images/b3_laptop1.jpg',
  // '/src/assets/images/b3_laptop2.jpg',
  // '/src/assets/images/b3_laptop3.jpg',
  // '/src/assets/images/b3_laptop4.jpg',
  // '/src/assets/images/b3_laptop5.jpg',
  // '/src/assets/images/b4_laptop1.jpg',
  // '/src/assets/images/b4_laptop2.jpg',
  // '/src/assets/images/b4_laptop3.jpg',
  // '/src/assets/images/b4_laptop4.jpg',
  // '/src/assets/images/b4_laptop5.jpg',
  '/src/assets/images/chat/chat_laptop1.jpg',
  '/src/assets/images/chat/chat_laptop2.jpg',
  '/src/assets/images/chat/chat_laptop3.jpg',
  '/src/assets/images/chat/chat_laptop4.jpg',
  '/src/assets/images/chat/chat_laptop5.jpg',
  '/src/assets/images/currency/currency_laptop1.jpg',
  '/src/assets/images/currency/currency_laptop2.jpg',
  '/src/assets/images/currency/currency_laptop3.jpg',
  '/src/assets/images/currency/currency_laptop4.jpg',
  '/src/assets/images/currency/currency_laptop5.jpg',
  '/src/assets/images/game/game_laptop1.jpg',
  '/src/assets/images/game/game_laptop2.jpg',
  '/src/assets/images/game/game_laptop3.jpg',
  '/src/assets/images/game/game_laptop4.jpg',
  '/src/assets/images/game/game_laptop5.jpg',
  '/src/assets/images/match/match_laptop1.jpg',
  '/src/assets/images/match/match_laptop2.jpg',
  '/src/assets/images/match/match_laptop3.jpg',
  '/src/assets/images/match/match_laptop4.jpg',
  '/src/assets/images/match/match_laptop5.jpg',
  '/src/assets/images/restaurant/restaurant_laptop1.jpg',
  '/src/assets/images/restaurant/restaurant_laptop2.jpg',
  '/src/assets/images/restaurant/restaurant_laptop3.jpg',
  '/src/assets/images/restaurant/restaurant_laptop4.jpg',
  '/src/assets/images/restaurant/restaurant_laptop5.jpg',
  '/src/assets/images/site/site_laptop1.jpg',
  '/src/assets/images/site/site_laptop2.jpg',
  '/src/assets/images/site/site_laptop3.jpg',
  '/src/assets/images/site/site_laptop4.jpg',
  '/src/assets/images/site/site_laptop5.jpg',
  '/src/assets/images/social/social_laptop1.jpg',
  '/src/assets/images/social/social_laptop2.jpg',
  '/src/assets/images/social/social_laptop3.jpg',
  '/src/assets/images/social/social_laptop4.jpg',
  '/src/assets/images/social/social_laptop5.jpg',
  '/src/assets/icons/apple-icon-57x57.png',
  '/src/assets/icons/apple-icon-60x60.png',
  '/src/assets/icons/apple-icon-72x72.png',
  '/src/assets/icons/apple-icon-76x76.png',
  '/src/assets/icons/apple-icon-144x144.png',
  '/src/assets/icons/apple-icon-120x120.png',
  '/src/assets/icons/apple-icon-114x114.png',
  '/src/assets/icons/apple-icon-152x152.png',
  '/src/assets/icons/apple-icon-180x180.png',
  '/src/assets/icons/android-icon-192x192.png',
  '/src/assets/icons/favicon-16x16.png',
  '/src/assets/icons/favicon-32x32.png',
  '/src/assets/icons/favicon-96x96.png'
]

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName)
    .then(function(cache) {
      console.info('[sw.js] cached all files');
      return cache.addAll(filesToCache);
    })
  );
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      if (response) {return response
      } else {
        let reqCopy = event.request.clone();
        return fetch(reqCopy, {credentials: 'include'})
        .then(function(response) {
          if(!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          let resCopy = response.clone();
          caches.open(cacheName)
          .then(function(cache) {
            return cache.put(reqCopy, resCopy);
          });
          return response;
        })
      }
    })
  );
});
