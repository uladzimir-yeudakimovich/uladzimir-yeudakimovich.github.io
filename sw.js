const cacheName = 'V1';

const filesToCache = [
  '/',
  '/main.js',
  '/assets/images/logo_phone.jpg',
  '/assets/images/logo_laptop.jpg',
  '/assets/images/logo_tablet.jpg',
  '/assets/images/react/react1.jpg',
  '/assets/images/react/react2.jpg',
  '/assets/images/react/react3.jpg',
  '/assets/images/react/react4.jpg',
  '/assets/images/react/react5.jpg',
  '/assets/images/angular_task/angular_task1.jpg',
  '/assets/images/angular_task/angular_task2.jpg',
  '/assets/images/angular_task/angular_task3.jpg',
  '/assets/images/angular_task/angular_task4.jpg',
  '/assets/images/angular_task/angular_task5.jpg',
  '/assets/images/portfolio/portfolio1.jpg',
  '/assets/images/portfolio/portfolio2.jpg',
  '/assets/images/portfolio/portfolio3.jpg',
  '/assets/images/portfolio/portfolio4.jpg',
  '/assets/images/portfolio/portfolio5.jpg',
  '/assets/images/match/match1.jpg',
  '/assets/images/match/match2.jpg',
  '/assets/images/match/match3.jpg',
  '/assets/images/match/match4.jpg',
  '/assets/images/match/match5.jpg',
  '/assets/images/restaurant/restaurant1.jpg',
  '/assets/images/restaurant/restaurant2.jpg',
  '/assets/images/restaurant/restaurant3.jpg',
  '/assets/images/restaurant/restaurant4.jpg',
  '/assets/images/restaurant/restaurant5.jpg',
  '/assets/icons/apple-icon-57x57.png',
  '/assets/icons/apple-icon-60x60.png',
  '/assets/icons/apple-icon-72x72.png',
  '/assets/icons/apple-icon-76x76.png',
  '/assets/icons/apple-icon-144x144.png',
  '/assets/icons/apple-icon-120x120.png',
  '/assets/icons/apple-icon-114x114.png',
  '/assets/icons/apple-icon-152x152.png',
  '/assets/icons/apple-icon-180x180.png',
  '/assets/icons/android-icon-192x192.png',
  '/assets/icons/favicon-16x16.png',
  '/assets/icons/favicon-32x32.png',
  '/assets/icons/favicon-96x96.png'
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
