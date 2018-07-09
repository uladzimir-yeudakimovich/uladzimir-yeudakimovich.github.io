(function() {
  var nativeAddAll = Cache.prototype.addAll;
  var userAgent = navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);

  // Has nice behavior of `var` which everyone hates
  if (userAgent) {
    var agent = userAgent[1];
    var version = parseInt(userAgent[2]);
  }

  if (
    nativeAddAll && (!userAgent ||
      (agent === 'Firefox' && version >= 46) ||
      (agent === 'Chrome'  && version >= 50)
    )
  ) {
    return;
  }

  Cache.prototype.addAll = function addAll(requests) {
    var cache = this;

    // Since DOMExceptions are not constructable:
    function NetworkError(message) {
      this.name = 'NetworkError';
      this.code = 19;
      this.message = message;
    }

    NetworkError.prototype = Object.create(Error.prototype);

    return Promise.resolve().then(function() {
      if (arguments.length < 1) throw new TypeError();

      // Simulate sequence<(Request or USVString)> binding:
      var sequence = [];

      requests = requests.map(function(request) {
        if (request instanceof Request) {
          return request;
        }
        else {
          return String(request); // may throw TypeError
        }
      });

      return Promise.all(
        requests.map(function(request) {
          if (typeof request === 'string') {
            request = new Request(request);
          }

          var scheme = new URL(request.url).protocol;

          if (scheme !== 'http:' && scheme !== 'https:') {
            throw new NetworkError("Invalid scheme");
          }

          return fetch(request.clone());
        })
      );
    }).then(function(responses) {
      // If some of the responses has not OK-eish status,
      // then whole operation should reject
      if (responses.some(function(response) {
        return !response.ok;
      })) {
        throw new NetworkError('Incorrect response status');
      }

      // TODO: check that requests don't overwrite one another
      // (don't think this is possible to polyfill due to opaque responses)
      return Promise.all(
        responses.map(function(response, i) {
          return cache.put(requests[i], response);
        })
      );
    }).then(function() {
      return undefined;
    });
  };

  Cache.prototype.add = function add(request) {
    return this.addAll([request]);
  };
}());

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('airhorner').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/index.html?homescreen=1',
        '/?homescreen=1',
        '/bundle.js',
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
        '/images/b3_tablet5.jpg'
      ]);
    })
  );
 });

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || new Response("Nothing in the cache for this request");
    })
  );
});
