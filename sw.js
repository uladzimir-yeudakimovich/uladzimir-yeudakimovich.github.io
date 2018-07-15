self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/bundle.js',
        '/index.html',
        '/images/logo_phone.jpg',
        '/images/logo_laptop.jpg',
        '/images/logo_desktop.jpg',
        '/images/logo_tablet.jpg',
        '/images/app_laptop1.jpg',
        '/images/app_laptop2.jpg',
        '/images/app_laptop3.jpg',
        '/images/app_laptop4.jpg',
        '/images/app_laptop5.jpg',
        '/images/app_phone1.jpg',
        '/images/app_phone2.jpg',
        '/images/app_phone3.jpg',
        '/images/app_phone4.jpg',
        '/images/app_phone5.jpg',
        '/images/app_tablet1.jpg',
        '/images/app_tablet2.jpg',
        '/images/app_tablet3.jpg',
        '/images/app_tablet4.jpg',
        '/images/app_tablet5.jpg',
        '/images/b3_laptop1.jpg',
        '/images/b3_laptop2.jpg',
        '/images/b3_laptop3.jpg',
        '/images/b3_laptop4.jpg',
        '/images/b3_laptop5.jpg',
        '/images/b3_phone1.jpg',
        '/images/b3_phone2.jpg',
        '/images/b3_phone3.jpg',
        '/images/b3_phone4.jpg',
        '/images/b3_phone5.jpg',
        '/images/b3_tablet1.jpg',
        '/images/b3_tablet2.jpg',
        '/images/b3_tablet3.jpg',
        '/images/b3_tablet4.jpg',
        '/images/b3_tablet5.jpg',
        '/images/b4_laptop1.jpg',
        '/images/b4_laptop2.jpg',
        '/images/b4_laptop3.jpg',
        '/images/b4_laptop4.jpg',
        '/images/b4_laptop5.jpg',
        '/images/b4_phone1.jpg',
        '/images/b4_phone2.jpg',
        '/images/b4_phone3.jpg',
        '/images/b4_phone4.jpg',
        '/images/b4_phone5.jpg',
        '/images/b4_tablet1.jpg',
        '/images/b4_tablet2.jpg',
        '/images/b4_tablet3.jpg',
        '/images/b4_tablet4.jpg',
        '/images/b4_tablet5.jpg',
        '/images/chat_laptop1.jpg',
        '/images/chat_laptop2.jpg',
        '/images/chat_laptop3.jpg',
        '/images/chat_laptop4.jpg',
        '/images/chat_laptop5.jpg',
        '/images/chat_phone1.jpg',
        '/images/chat_phone2.jpg',
        '/images/chat_phone3.jpg',
        '/images/chat_phone4.jpg',
        '/images/chat_phone5.jpg',
        '/images/chat_tablet1.jpg',
        '/images/chat_tablet2.jpg',
        '/images/chat_tablet3.jpg',
        '/images/chat_tablet4.jpg',
        '/images/chat_tablet5.jpg',
        '/images/currency_laptop1.jpg',
        '/images/currency_laptop2.jpg',
        '/images/currency_laptop3.jpg',
        '/images/currency_laptop4.jpg',
        '/images/currency_laptop5.jpg',
        '/images/currency_phone1.jpg',
        '/images/currency_phone2.jpg',
        '/images/currency_phone3.jpg',
        '/images/currency_phone4.jpg',
        '/images/currency_phone5.jpg',
        '/images/currency_tablet1.jpg',
        '/images/currency_tablet2.jpg',
        '/images/currency_tablet3.jpg',
        '/images/currency_tablet4.jpg',
        '/images/currency_tablet5.jpg',
        '/images/game_laptop1.jpg',
        '/images/game_laptop2.jpg',
        '/images/game_laptop3.jpg',
        '/images/game_laptop4.jpg',
        '/images/game_laptop5.jpg',
        '/images/game_phone1.jpg',
        '/images/game_phone2.jpg',
        '/images/game_phone3.jpg',
        '/images/game_phone4.jpg',
        '/images/game_phone5.jpg',
        '/images/game_tablet1.jpg',
        '/images/game_tablet2.jpg',
        '/images/game_tablet3.jpg',
        '/images/game_tablet4.jpg',
        '/images/game_tablet5.jpg',
        '/images/match_laptop1.jpg',
        '/images/match_laptop2.jpg',
        '/images/match_laptop3.jpg',
        '/images/match_laptop4.jpg',
        '/images/match_laptop5.jpg',
        '/images/match_phone1.jpg',
        '/images/match_phone2.jpg',
        '/images/match_phone3.jpg',
        '/images/match_phone4.jpg',
        '/images/match_phone5.jpg',
        '/images/match_tablet1.jpg',
        '/images/match_tablet2.jpg',
        '/images/match_tablet3.jpg',
        '/images/match_tablet4.jpg',
        '/images/match_tablet5.jpg',
        '/images/restaurant_laptop1.jpg',
        '/images/restaurant_laptop2.jpg',
        '/images/restaurant_laptop3.jpg',
        '/images/restaurant_laptop4.jpg',
        '/images/restaurant_laptop5.jpg',
        '/images/restaurant_phone1.jpg',
        '/images/restaurant_phone2.jpg',
        '/images/restaurant_phone3.jpg',
        '/images/restaurant_phone4.jpg',
        '/images/restaurant_phone5.jpg',
        '/images/restaurant_tablet1.jpg',
        '/images/restaurant_tablet2.jpg',
        '/images/restaurant_tablet3.jpg',
        '/images/restaurant_tablet4.jpg',
        '/images/restaurant_tablet5.jpg',
        '/images/site_laptop1.jpg',
        '/images/site_laptop2.jpg',
        '/images/site_laptop3.jpg',
        '/images/site_laptop4.jpg',
        '/images/site_laptop5.jpg',
        '/images/site_phone1.jpg',
        '/images/site_phone2.jpg',
        '/images/site_phone3.jpg',
        '/images/site_phone4.jpg',
        '/images/site_phone5.jpg',
        '/images/site_tablet1.jpg',
        '/images/site_tablet2.jpg',
        '/images/site_tablet3.jpg',
        '/images/site_tablet4.jpg',
        '/images/site_tablet5.jpg',
        '/images/social_laptop1.jpg',
        '/images/social_laptop2.jpg',
        '/images/social_laptop3.jpg',
        '/images/social_laptop4.jpg',
        '/images/social_laptop5.jpg',
        '/images/social_phone1.jpg',
        '/images/social_phone2.jpg',
        '/images/social_phone3.jpg',
        '/images/social_phone4.jpg',
        '/images/social_phone5.jpg',
        '/images/social_tablet1.jpg',
        '/images/social_tablet2.jpg',
        '/images/social_tablet3.jpg',
        '/images/social_tablet4.jpg',
        '/images/social_tablet5.jpg'
      ]);
    })
  );
 });

 self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(resp) {
      return resp || fetch(event.request).then(function(response) {
        let responseClone = response.clone();
        caches.open('v1').then(function(cache) {
          cache.put(event.request, responseClone);
        });

        return response;
      });
    }).catch(function() {
      return caches.match('/images/icons/android-icon-512x512.png');
    })
  );
});

self.addEventListener('activate', function(event) {
  var cacheWhitelist = ['v2'];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});
