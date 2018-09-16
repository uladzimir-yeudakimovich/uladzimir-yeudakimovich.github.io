const cacheName = 'V1';

const filesToCache = [
  '/',
  '/main.js',
  '/polyfills.2f4a59095805af02bd79.js',
  '/runtime.a66f828dca56eeb90e02.js',
  '/bootstrap.min.css',
  '/src/assets/images/logo_phone.jpg',
  '/src/assets/images/logo_laptop.jpg',
  '/src/assets/images/logo_tablet.jpg',
  '/src/assets/images/react/react1.jpg',
  '/src/assets/images/react/react2.jpg',
  '/src/assets/images/react/react3.jpg',
  '/src/assets/images/react/react4.jpg',
  '/src/assets/images/react/react5.jpg',
  '/src/assets/images/angular_task/angular_task1.jpg',
  '/src/assets/images/angular_task/angular_task2.jpg',
  '/src/assets/images/angular_task/angular_task3.jpg',
  '/src/assets/images/angular_task/angular_task4.jpg',
  '/src/assets/images/angular_task/angular_task5.jpg',
  '/src/assets/images/portfolio/portfolio1.jpg',
  '/src/assets/images/portfolio/portfolio2.jpg',
  '/src/assets/images/portfolio/portfolio3.jpg',
  '/src/assets/images/portfolio/portfolio4.jpg',
  '/src/assets/images/portfolio/portfolio5.jpg',
  '/src/assets/images/match/match1.jpg',
  '/src/assets/images/match/match2.jpg',
  '/src/assets/images/match/match3.jpg',
  '/src/assets/images/match/match4.jpg',
  '/src/assets/images/match/match5.jpg',
  '/src/assets/images/restaurant/restaurant1.jpg',
  '/src/assets/images/restaurant/restaurant2.jpg',
  '/src/assets/images/restaurant/restaurant3.jpg',
  '/src/assets/images/restaurant/restaurant4.jpg',
  '/src/assets/images/restaurant/restaurant5.jpg',
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
