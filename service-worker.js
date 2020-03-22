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
    "url": "2018/02/09/notes-collective-mind/index.html",
    "revision": "7c86af838b18b2becbb4741e157b329c"
  },
  {
    "url": "2018/12/18/phil-thinking-about-fate/index.html",
    "revision": "b6059964c1a20367177c8f23aa29edb7"
  },
  {
    "url": "2019/08/15/creation-space-wanderer/index.html",
    "revision": "b19ca921276254ba0477cc3b044bbeb1"
  },
  {
    "url": "2020/02/29/creation-last-entry-in-the-logbook/index.html",
    "revision": "9d6245cbe474c3ea12fb51de7229943e"
  },
  {
    "url": "2020/03/08/poetry-for-my-sweethear-kate/index.html",
    "revision": "68f17673e9c33fd3a606ac0975fb7ded"
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
    "url": "assets/js/1.deebaa46.js",
    "revision": "9c81a70ff263b6445ccfb660f2556a7a"
  },
  {
    "url": "assets/js/10.7a7430d0.js",
    "revision": "f08dd16e8ce10f0f45644a55e8b730f2"
  },
  {
    "url": "assets/js/11.6d1eca16.js",
    "revision": "7028485030dd8587688d4539b2bfcc92"
  },
  {
    "url": "assets/js/12.7de8df92.js",
    "revision": "e463123763295f2fa87cdd603633c26e"
  },
  {
    "url": "assets/js/13.e6b420a6.js",
    "revision": "e672597fb222bfda3fe2bbb36d9fda41"
  },
  {
    "url": "assets/js/14.2282ecb8.js",
    "revision": "10f5c7fcb24d03540d127225fce44e2a"
  },
  {
    "url": "assets/js/15.6cf44c5d.js",
    "revision": "eded767bb9bed60a4774bb3192856933"
  },
  {
    "url": "assets/js/16.47d9571c.js",
    "revision": "f8f7da0420cc944fe99466c6d0a58419"
  },
  {
    "url": "assets/js/17.f1f11909.js",
    "revision": "2c3dad458cb8f24a9eaedfd801031449"
  },
  {
    "url": "assets/js/18.9c5894ed.js",
    "revision": "1f5e7d71d0e95509a453044006bef628"
  },
  {
    "url": "assets/js/19.f0a3ecfb.js",
    "revision": "e0e5e3a8cc15809f2c9502c6d372284d"
  },
  {
    "url": "assets/js/20.b4542fe1.js",
    "revision": "850595a23f216d79cf582dba61b7ac9f"
  },
  {
    "url": "assets/js/21.9e06558f.js",
    "revision": "f963fef80b1b72f027720897040e4b2d"
  },
  {
    "url": "assets/js/22.08e2ab75.js",
    "revision": "2f908a1f5269b25876cf4721a5be9b3c"
  },
  {
    "url": "assets/js/23.7b998005.js",
    "revision": "c86ecfd4a99c5e566db245cc2bcb8f5c"
  },
  {
    "url": "assets/js/4.b18d22a2.js",
    "revision": "91daae1411010e44635b5cab403ff7cc"
  },
  {
    "url": "assets/js/5.76031b47.js",
    "revision": "3ce674a66f63d89af9316fee7ab17312"
  },
  {
    "url": "assets/js/6.cd62dd41.js",
    "revision": "d1f72a673c6f044cb9b1121d9c8f7874"
  },
  {
    "url": "assets/js/7.34510e03.js",
    "revision": "81aa1e5a7fb862b709cd7a0fbc0c852c"
  },
  {
    "url": "assets/js/8.342139db.js",
    "revision": "e2bdfb7779ba4a8bcd8db5740d07b483"
  },
  {
    "url": "assets/js/9.a79abb34.js",
    "revision": "0b88303181b85258e59b60278cafeaee"
  },
  {
    "url": "assets/js/app.8c2d8562.js",
    "revision": "898f58a2d92e90639e506ef97d95fbbb"
  },
  {
    "url": "assets/js/vuejs-paginate.18af9619.js",
    "revision": "0e53f5950b2cbb3a710ed15335cbf445"
  },
  {
    "url": "index.html",
    "revision": "773fb157d4db3e78926c02b9231f97fb"
  },
  {
    "url": "tag/index.html",
    "revision": "681a38da3fc26b93d1b854825b37c944"
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
