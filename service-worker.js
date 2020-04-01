/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "_draft/2020-03-25-whatwatch-ergo-proxy.html",
    "revision": "62a7807f9a4ad8dde8689c550746214c"
  },
  {
    "url": "2018/02/09/notes-collective-mind/index.html",
    "revision": "9a9b48a101ecac630bae8a3e43719842"
  },
  {
    "url": "2018/12/18/phil-thinking-about-fate/index.html",
    "revision": "7a18bd3e8e705dbc25ddc16746d5fa51"
  },
  {
    "url": "2019/08/15/creation-space-wanderer/index.html",
    "revision": "3934b81f16a28a275bef9bc8f52caa34"
  },
  {
    "url": "2020/02/29/creation-last-entry-in-the-logbook/index.html",
    "revision": "e136188cd7abbbb140beb12afc9dc04f"
  },
  {
    "url": "2020/03/08/poetry-for-my-sweetheart-kate/index.html",
    "revision": "a030018c450c7291e79e84bf0f06b172"
  },
  {
    "url": "assets/css/0.styles.3ce694b2.css",
    "revision": "c030b8bd5d4d6d3c0363f7a2376187bf"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFbzr-_dSb_nco.9738e026.woff2",
    "revision": "9738e026c7397b4e3b543ae7f1cf4b6c"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFWzr-_dSb_.b450bfca.woff2",
    "revision": "b450bfca16a8beb05580180de7b678f0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.0a158916.js",
    "revision": "f3f9727c623491543a8a4d7e081b44e9"
  },
  {
    "url": "assets/js/10.7532bedd.js",
    "revision": "1ef197743edaf788b340cdbb062769a6"
  },
  {
    "url": "assets/js/11.df255dde.js",
    "revision": "f646e0e7041529320671f72458ff0d47"
  },
  {
    "url": "assets/js/12.01c7bc7c.js",
    "revision": "9a01a4fcd2a926e0089cd75d2df093a4"
  },
  {
    "url": "assets/js/13.9ad81066.js",
    "revision": "43152ace1511da2c86ae45ae0c314a83"
  },
  {
    "url": "assets/js/14.a6f8fbcf.js",
    "revision": "f1c33ee129395167a6209b0e9e9a5535"
  },
  {
    "url": "assets/js/15.69111229.js",
    "revision": "9ef5bd406ad2b5a3fae38db4045bd966"
  },
  {
    "url": "assets/js/16.8f07a3a0.js",
    "revision": "66b831f0c4c536bd723ee383baeaab2c"
  },
  {
    "url": "assets/js/17.7765575b.js",
    "revision": "bd4f5e38cc2e31f90a0f09c8ac484b8f"
  },
  {
    "url": "assets/js/18.cd59b9e6.js",
    "revision": "814f566676db3ad546125f7922e744d5"
  },
  {
    "url": "assets/js/19.fa9016f4.js",
    "revision": "6c09090771aae5cb8188a053f9a3281a"
  },
  {
    "url": "assets/js/20.1eb58e15.js",
    "revision": "e457e9284c979583a98c4ab1ef180542"
  },
  {
    "url": "assets/js/21.ee451f6d.js",
    "revision": "8de60837065b3c86fd58fbed0116b077"
  },
  {
    "url": "assets/js/22.583ff9c6.js",
    "revision": "e7cc2aa4edd75213f6eec28550765082"
  },
  {
    "url": "assets/js/23.129f4023.js",
    "revision": "621631e0f289a822c8d4939ab1b372e0"
  },
  {
    "url": "assets/js/24.8f56878e.js",
    "revision": "eca692de528cf055d670261e5ccb9a92"
  },
  {
    "url": "assets/js/4.2cd67aa1.js",
    "revision": "2b223a813963c3ee19ffc27312bd7785"
  },
  {
    "url": "assets/js/5.66669497.js",
    "revision": "2aabd58c9314e03a94df8e2d9cbe1817"
  },
  {
    "url": "assets/js/6.1ddc69b9.js",
    "revision": "dbf4f2d07f2154544d04c9cb1c779418"
  },
  {
    "url": "assets/js/7.687f7eb9.js",
    "revision": "d8b1b8ee8de118f12006d25319820170"
  },
  {
    "url": "assets/js/8.5a6a699b.js",
    "revision": "22e7a982ecf8e628586300fe11617b30"
  },
  {
    "url": "assets/js/9.4dde2995.js",
    "revision": "fa539dada82085e93d4dfe9ff0f576be"
  },
  {
    "url": "assets/js/app.c0437c75.js",
    "revision": "d853277e923c7dedc01d1c0099a6a04a"
  },
  {
    "url": "assets/js/vuejs-paginate.18af9619.js",
    "revision": "0e53f5950b2cbb3a710ed15335cbf445"
  },
  {
    "url": "img/whatwhatch-ergo-proxy/ergo-poster.jpg",
    "revision": "71c9552cd36055fe58d4d607c63a9015"
  },
  {
    "url": "index.html",
    "revision": "5767dd345b44f4a73010c92091f6b739"
  },
  {
    "url": "tag/index.html",
    "revision": "7f705f5082b6cf8c20accfb795d4d67b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
