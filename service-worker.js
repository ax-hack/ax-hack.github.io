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
    "revision": "cac97c5641e616dee05296f90a34e058"
  },
  {
    "url": "2018/02/09/notes-collective-mind/index.html",
    "revision": "db3cb692af5a09b6a1ca706e048f08ff"
  },
  {
    "url": "2018/12/18/phil-thinking-about-fate/index.html",
    "revision": "902adc6ed1c7653d57db9bdc46a8467e"
  },
  {
    "url": "2019/08/15/creation-space-wanderer/index.html",
    "revision": "6dfe46e6bf61712f8a886f19ec66b20c"
  },
  {
    "url": "2020/02/29/creation-last-entry-in-the-logbook/index.html",
    "revision": "9114921b4342340a130fdd59c324e60f"
  },
  {
    "url": "2020/03/08/poetry-for-my-sweetheart-kate/index.html",
    "revision": "b3176b7f30ebb3eecf72ed034bcb6568"
  },
  {
    "url": "2020/04/20/poetry-foxy-eyes/index.html",
    "revision": "935783830dac061bfd4c2a4fbcb826bb"
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
    "url": "assets/js/12.aae20b3a.js",
    "revision": "f46b6ff26c804ddf68869dce7b47331d"
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
    "url": "assets/js/20.fcea7915.js",
    "revision": "204857c66043bb24f02f34da71913688"
  },
  {
    "url": "assets/js/21.b43069b1.js",
    "revision": "82f22b502d78227cf4cb9bd7ae3ce452"
  },
  {
    "url": "assets/js/22.a02c27d3.js",
    "revision": "c656672ce623943e74ee45a440bfde1d"
  },
  {
    "url": "assets/js/23.25f3c213.js",
    "revision": "432e42ebdbd39f97980d3079aa293599"
  },
  {
    "url": "assets/js/24.85fe4805.js",
    "revision": "0c0981bf14581e64ed1c1d4a64b3795b"
  },
  {
    "url": "assets/js/25.c0fff57b.js",
    "revision": "7c88a2f2eff8c9a380c8452d96957e0f"
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
    "url": "assets/js/app.44f9d550.js",
    "revision": "5fdb3c8bc7c7e032297b57a26fa7f691"
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
    "revision": "4921e5894b69a4d44f74653dc9b0c19a"
  },
  {
    "url": "page/2/index.html",
    "revision": "0c305f710887f04683db6c343d0e6036"
  },
  {
    "url": "tag/index.html",
    "revision": "80086ef07b5bde8b81b57d6014c0a9a7"
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
