/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-2e832edc'], (function (workbox) { 'use strict';

  workbox.setCacheNameDetails({
    prefix: "tachidesk-vui"
  });
  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "assets/bus.5b9c78c8.js",
    "revision": "e9386fbdea289685c4ebc72e1c38199d"
  }, {
    "url": "assets/categoriesSetringsPage.4ef641ce.js",
    "revision": "7550204d24a806d950b15f4c4a366eb6"
  }, {
    "url": "assets/ChapterLayout.2cf4befc.css",
    "revision": "5330d1446a695f75e477b70864e7c01d"
  }, {
    "url": "assets/ChapterLayout.c2e71d9f.js",
    "revision": "b1a77aacd98fa38537a7288a2ddf6cc7"
  }, {
    "url": "assets/chapterPage.c9499c60.css",
    "revision": "4351d73503f7d9b9bc242af5651c64be"
  }, {
    "url": "assets/chapterPage.d51c08ea.js",
    "revision": "34b4c273e78d9404f5b4fd3f750f9d56"
  }, {
    "url": "assets/ClosePopup.5400fc3f.js",
    "revision": "c31153a081c73af3cd0a295a60027f64"
  }, {
    "url": "assets/dom.9c14e7bf.js",
    "revision": "accfcd8657635d16b346c89780dddcab"
  }, {
    "url": "assets/downloadsPage.e40dba57.js",
    "revision": "cc23558cf4513e9fa77bf68bc22a997c"
  }, {
    "url": "assets/ErrorNotFound.db8ddbed.js",
    "revision": "0f939932d6bd7deeccf260d9e2ea54be"
  }, {
    "url": "assets/extensionsPage.cd6adb89.js",
    "revision": "ee80f55df5c822ccb32882b6d9aa7c36"
  }, {
    "url": "assets/fastclick.8a4a8267.js",
    "revision": "424f6079cd5e10228e0abc28077de308"
  }, {
    "url": "assets/fetcher.0bda8d6d.js",
    "revision": "0a4df731c8567f33a5f6c4154e9a31a9"
  }, {
    "url": "assets/Filters.b0da0d77.js",
    "revision": "8bdbefa71b5fd04012f72b2eecc9b3ae"
  }, {
    "url": "assets/Filters.f1d0a2e5.js",
    "revision": "9f994be36069f190dcb687120a9dd272"
  }, {
    "url": "assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",
    "revision": "3e1afe59fa075c9e04c436606b77f640"
  }, {
    "url": "assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.83be7b2f.woff2",
    "revision": "393b5d8b3fd798486652801f3ee8c6ea"
  }, {
    "url": "assets/focus-manager.32f8d49a.js",
    "revision": "a2e9fcfd9d42285c0c6cfc4bdfeb8e75"
  }, {
    "url": "assets/format.2a3572e1.js",
    "revision": "77fb0e734f160c1bafb738c9eed2861f"
  }, {
    "url": "assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcel5euIg.35dca8a7.woff2",
    "revision": "0ba49c096a77b67734434cebcaf2e14d"
  }, {
    "url": "assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcY.8e94758c.woff",
    "revision": "0e4321a7c0dda51d72a669ac5892fc39"
  }, {
    "url": "assets/index.21eeb39f.css",
    "revision": "50cc5e0694972ee4be0eede88199c412"
  }, {
    "url": "assets/index.ba4ecd3b.js",
    "revision": "12971861ab24fbdb5a8af95a7d14ad1b"
  }, {
    "url": "assets/Intersection.bfa1b1ed.js",
    "revision": "12c08b929246b2b3c8de44614eb55b8d"
  }, {
    "url": "assets/isConfigurable.c4b0fd74.js",
    "revision": "433436a34129cdb0ef0d364236bb46ff"
  }, {
    "url": "assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",
    "revision": "4aa2e69855e3b83110a251c47fdd05fc"
  }, {
    "url": "assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",
    "revision": "40bcb2b8cc5ed94c4c21d06128e0e532"
  }, {
    "url": "assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",
    "revision": "ea60988be8d6faebb4bc2a55b1f76e22"
  }, {
    "url": "assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",
    "revision": "0774a8b7ca338dc1aba5a0ec8f2b9454"
  }, {
    "url": "assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",
    "revision": "bcb7c7e2499a055f0e2f93203bdb282b"
  }, {
    "url": "assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",
    "revision": "d3907d0ccd03b1134c24d3bcaf05b698"
  }, {
    "url": "assets/LDItaoyNOAY6Uewc665JcIzCKsKc_M9flwmJ.1c135b15.woff",
    "revision": "9f309e9eab67445742ec147a3e37364f"
  }, {
    "url": "assets/LDItaoyNOAY6Uewc665JcIzCKsKc_M9flwmPq_HTTw.c948f126.woff2",
    "revision": "121a59d703f74d7fc4a1bf64580966ed"
  }, {
    "url": "assets/libraryPage.8e5f936f.js",
    "revision": "118419c1983a80f43a84288c36992bb2"
  }, {
    "url": "assets/libraryPage.e1a91839.css",
    "revision": "07820f0622c51bb1cccc3411ad6eb501"
  }, {
    "url": "assets/MainLayout.88732641.js",
    "revision": "82b965703ff8fd0a4bc003862beb680d"
  }, {
    "url": "assets/mangaCard.8b048495.js",
    "revision": "daf3f01624a028c4af21768ea0ac47c3"
  }, {
    "url": "assets/mangaCard.b5568e84.css",
    "revision": "918543a2cc8a058ee13b68b17d28512b"
  }, {
    "url": "assets/mangaPage.354169f6.js",
    "revision": "848053d641cd9cd352f1521ec96ae141"
  }, {
    "url": "assets/mangaPage.e1020fb8.css",
    "revision": "d68ee184b469921667097580e63b8634"
  }, {
    "url": "assets/models.4021c4b7.js",
    "revision": "edeabd5e33b80ef3b161ef849724b1ac"
  }, {
    "url": "assets/option-sizes.ff92785a.js",
    "revision": "da1601fee99d2bdf78ae86e86f863b0e"
  }, {
    "url": "assets/position-engine.1cc73c92.js",
    "revision": "e5615aa466a18e609ede28d0e5e7dcf8"
  }, {
    "url": "assets/QBadge.55eaf29d.js",
    "revision": "b14c7f4f9e1bbcf77ab0f6c7eea8568e"
  }, {
    "url": "assets/QBtn.2456f78f.js",
    "revision": "c0c8577f81d95b7fa03d74f6b305fc9d"
  }, {
    "url": "assets/QCard.19e48865.js",
    "revision": "4b910d85b79e217e458cf95cc5df8c5e"
  }, {
    "url": "assets/QCardActions.d176eb8e.js",
    "revision": "da67adf0e8262de3dee356b6a1f9911e"
  }, {
    "url": "assets/QCardSection.6cd72ed9.js",
    "revision": "649d1ad92ce80fbd476f172e83f79d6e"
  }, {
    "url": "assets/QCheckbox.14cae36f.js",
    "revision": "26eb4f7e6909ac70a51952ac8e39ad76"
  }, {
    "url": "assets/QDialog.75edb166.js",
    "revision": "9db92f4b044e91972a5d5e70d1d69bb6"
  }, {
    "url": "assets/QExpansionItem.57e138fd.js",
    "revision": "5a422cf5f734caf21aa0496926afd690"
  }, {
    "url": "assets/QIcon.00211d75.js",
    "revision": "61e48352d5e64632eeb0861889207b03"
  }, {
    "url": "assets/QInfiniteScroll.e0e59218.js",
    "revision": "b0fee5a29adec4b1757452837e630026"
  }, {
    "url": "assets/QInnerLoading.7a61e845.js",
    "revision": "99534a69cb7f5b0937b4f499e3b6d3b0"
  }, {
    "url": "assets/QInput.a2e72a2b.js",
    "revision": "b5aa1ba725d25bec7c3e2357c7b94651"
  }, {
    "url": "assets/QIntersection.b475cf21.js",
    "revision": "75b8f1394889b4f72926682aaed491a7"
  }, {
    "url": "assets/QItem.e5504d24.js",
    "revision": "3f8b0f75387281c06590b1b389de0d48"
  }, {
    "url": "assets/QItemLabel.751b389a.js",
    "revision": "021b293742df94353d666ba19747870e"
  }, {
    "url": "assets/QLinearProgress.601b54e9.js",
    "revision": "ca19259d80cca522c901eaeb15f6c32d"
  }, {
    "url": "assets/QList.10571ef1.js",
    "revision": "24ccbfb3f9579fea6eb1c75eda622b91"
  }, {
    "url": "assets/QMenu.5ba06e13.js",
    "revision": "f3ff32792d7dfac2fa68bfd2e1569809"
  }, {
    "url": "assets/QPage.d4311932.js",
    "revision": "2844a4c5bfdd01f69d2be4f089dbe4d8"
  }, {
    "url": "assets/QPageSticky.e82c04be.js",
    "revision": "ad085d3907499bfb3999115cab3852cd"
  }, {
    "url": "assets/QRadio.1c22212c.js",
    "revision": "7ee2249b2a0f7355dfd1fcefbd559c0b"
  }, {
    "url": "assets/QResizeObserver.0a316fac.js",
    "revision": "7e3a583a95026fd2af82f573eb7f062d"
  }, {
    "url": "assets/QScrollObserver.190052c8.js",
    "revision": "472cd53cc3e24f7523cd28798318aa4a"
  }, {
    "url": "assets/QSelect.5b441b0d.js",
    "revision": "511ee1b178845516d893421cdb822244"
  }, {
    "url": "assets/QSeparator.22c5d3c5.js",
    "revision": "1b428dc7be9ef18795be9dc3773af759"
  }, {
    "url": "assets/QSpinner.ce362078.js",
    "revision": "48b4f8c518a7484fd16a5058f515b456"
  }, {
    "url": "assets/QSpinnerDots.3844f9eb.js",
    "revision": "5229743a221cc11168933a5a3820166b"
  }, {
    "url": "assets/QTab.f27d5a94.js",
    "revision": "32501cba4150e740f01c3fa05019747e"
  }, {
    "url": "assets/QTabs.40ff8336.js",
    "revision": "d7ddc9a7c75cfe18e24b2b167c26c87d"
  }, {
    "url": "assets/QToggle.519c6e7f.js",
    "revision": "a6be7deb898bf858195c9aa11cf6c4b8"
  }, {
    "url": "assets/QTooltip.4059b9cb.js",
    "revision": "56d64d06e9a43adee6de47ff8d1b319b"
  }, {
    "url": "assets/readerSettings.58872740.js",
    "revision": "2a0796da4392c3b9d8d7cb7adb040d01"
  }, {
    "url": "assets/Ripple.d48b6bf8.js",
    "revision": "781354e97608335bd65c5c08ca3508db"
  }, {
    "url": "assets/rtl.b51694b1.js",
    "revision": "95d8452b6e6b7124ec752a039dca0bef"
  }, {
    "url": "assets/scroll.3ccd02db.js",
    "revision": "20d0c1cc1f338557891adea5741b88cc"
  }, {
    "url": "assets/SearchBar.dedd6d71.js",
    "revision": "36dd2d4b043f95845c0a0363ae56cd1b"
  }, {
    "url": "assets/selection.c4ca48d8.js",
    "revision": "127656378f78d85fb655db157a3f1202"
  }, {
    "url": "assets/settingsPage.ce21cb7f.js",
    "revision": "1afb62dbba72203321404dc2dd0806e6"
  }, {
    "url": "assets/sourceConfigPage.d23f053d.js",
    "revision": "ad75a337da335d45d5498ebfe724c598"
  }, {
    "url": "assets/SourceSearchPage.c90753f5.js",
    "revision": "f4858c37e4360f602664d88742083e3d"
  }, {
    "url": "assets/sourcesPage.24346257.js",
    "revision": "5ec4fcbe3cb566621b5e909e54872e7d"
  }, {
    "url": "assets/SourceTopBar.be6093cf.js",
    "revision": "c4fe62474dd15bfbb3fce9d9853fca47"
  }, {
    "url": "assets/SSearchAll.a61accd7.js",
    "revision": "5044f6ddba7fc72a42a5a1dd2e7ed53a"
  }, {
    "url": "assets/StoreDefaults.b8a55e43.js",
    "revision": "a9bb5dec74dbe6a700dca41fb84f29cf"
  }, {
    "url": "assets/StoreStuff.b98d7f9e.js",
    "revision": "fc32f27d4c1f37cf3158b2914a37c37f"
  }, {
    "url": "assets/topbar.0d53d948.js",
    "revision": "4c1b028c216585eefaeea7050ea71e3d"
  }, {
    "url": "assets/TopBar.15de4dee.js",
    "revision": "ae5f1bf3a58897113573a54c7804b220"
  }, {
    "url": "assets/TopBar.1dcd0560.js",
    "revision": "5198928a873394a9c499545d67d8c760"
  }, {
    "url": "assets/TopBar.e1488517.js",
    "revision": "7fb7e3c9c5d33221725564fdb38c6f6d"
  }, {
    "url": "assets/TopBar.e91d09c1.js",
    "revision": "bd9d669eaed064928fdd54a131e66294"
  }, {
    "url": "assets/TouchPan.4378eff7.js",
    "revision": "7c0fcfafdf3d8411539aadf76113e3d4"
  }, {
    "url": "assets/uid.42677368.js",
    "revision": "c4fe4c01aeb7efd1bc61878fe7cd525c"
  }, {
    "url": "assets/updatesPage.ad56d596.js",
    "revision": "d6a8690e203d5e714fce2fce93fcd448"
  }, {
    "url": "assets/use-checkbox.edaab605.js",
    "revision": "f28a2c9b9fb07616b8cd239588f0e893"
  }, {
    "url": "assets/use-dark.7f6486f4.js",
    "revision": "79ad65714b009cbd5f144492973eff61"
  }, {
    "url": "assets/use-form.a300a275.js",
    "revision": "3401e4c22a2f2b860098a622caf2664e"
  }, {
    "url": "assets/use-key-composition.4fc2cfcf.js",
    "revision": "dd75a8efd56f84828769a85e9d6fd1b7"
  }, {
    "url": "assets/use-meta.56bab812.js",
    "revision": "b950569f90ee2609b21b5bf9d9b57ab8"
  }, {
    "url": "assets/use-quasar.d6d97ee1.js",
    "revision": "cd4881230d65c1bcab2660daee1fb969"
  }, {
    "url": "assets/use-timeout.fb745483.js",
    "revision": "57fedaaa3ce8378b36d2b891a39d1d35"
  }, {
    "url": "assets/use-transition.322af72f.js",
    "revision": "5979c09f0e94d04e8c99d30182d37257"
  }, {
    "url": "assets/use-virtual-scroll.24900e81.js",
    "revision": "859ff2fa20dc879869e09d3fead0fa48"
  }, {
    "url": "assets/useDlSock.a1b5bcc2.js",
    "revision": "28f34dc386b0ccbfbbbdd57b99e0a8e5"
  }, {
    "url": "assets/usefull.d0e2b46c.js",
    "revision": "036b579ead134f25bc81a612d15fda13"
  }, {
    "url": "favicon.ico",
    "revision": "9f91d3281ccbbc7089d002f977ed674f"
  }, {
    "url": "icons/apple-icon-120x120.png",
    "revision": "f3678980d0a40b0a51f150433483d9f2"
  }, {
    "url": "icons/apple-icon-152x152.png",
    "revision": "b698f4bead3c0cc5cc71517940870fe3"
  }, {
    "url": "icons/apple-icon-167x167.png",
    "revision": "7daf5f276e9cb8dff7ddd9491f650ee5"
  }, {
    "url": "icons/apple-icon-180x180.png",
    "revision": "cd6315782dfce2c2e90aa5b74c92d8b9"
  }, {
    "url": "icons/apple-launch-1125x2436.png",
    "revision": "15318c46597358602183cd6a0eb50d35"
  }, {
    "url": "icons/apple-launch-1170x2532.png",
    "revision": "3c53feab4f1aab87c8a6cd619643e5ef"
  }, {
    "url": "icons/apple-launch-1242x2208.png",
    "revision": "dfde6a8d1afa4b5ac3e536483e678e8a"
  }, {
    "url": "icons/apple-launch-1242x2688.png",
    "revision": "bff9dd084f25c922a115c37b098c5344"
  }, {
    "url": "icons/apple-launch-1284x2778.png",
    "revision": "9b92c668e244ce102739779b9301369f"
  }, {
    "url": "icons/apple-launch-1536x2048.png",
    "revision": "a802fac130b7295e708502a97840aa23"
  }, {
    "url": "icons/apple-launch-1620x2160.png",
    "revision": "c90899c8e780fea1ed1e572359d6606d"
  }, {
    "url": "icons/apple-launch-1668x2224.png",
    "revision": "7f720f47d98721597db7175af7afa355"
  }, {
    "url": "icons/apple-launch-1668x2388.png",
    "revision": "7808be24de1a1463dbe9ca81b89f0658"
  }, {
    "url": "icons/apple-launch-2048x2732.png",
    "revision": "e8a1bff9f643c7ec3514aade49d5d7c6"
  }, {
    "url": "icons/apple-launch-750x1334.png",
    "revision": "64c7cc39fca5d719d3b5cf7453345d8b"
  }, {
    "url": "icons/apple-launch-828x1792.png",
    "revision": "4ac1858296d8fb5883b24f4996f40483"
  }, {
    "url": "icons/favicon-128x128.png",
    "revision": "72038f93dbf96b94c38398db130cee45"
  }, {
    "url": "icons/favicon-16x16.png",
    "revision": "51047803e6f4793adc8266435b051a9d"
  }, {
    "url": "icons/favicon-32x32.png",
    "revision": "25b8a2418df1057e0fd72553509303ea"
  }, {
    "url": "icons/favicon-96x96.png",
    "revision": "619d9246e71164d08b23a03cb5a47931"
  }, {
    "url": "icons/icon-128x128.png",
    "revision": "72038f93dbf96b94c38398db130cee45"
  }, {
    "url": "icons/icon-192x192.png",
    "revision": "38458814821ea3f8efbc15851dcd4862"
  }, {
    "url": "icons/icon-256x256.png",
    "revision": "b23c3433a6fb6c87af28e4567fcb5788"
  }, {
    "url": "icons/icon-384x384.png",
    "revision": "0df02c8763df7c7a8fc9b84d5f94cad1"
  }, {
    "url": "icons/icon-512x512.png",
    "revision": "51dba6800dad0e8dee05e3fe26892b25"
  }, {
    "url": "icons/maskable_icon_x512.png",
    "revision": "6e32deb7f81bd684dd8e35935c60becd"
  }, {
    "url": "icons/ms-icon-144x144.png",
    "revision": "458c2013a1f1998b7fa1cb5294e7d9fa"
  }, {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "8c313467a0b241f3ed52497dec42cfc3"
  }, {
    "url": "icons/tachidesk-vui.png",
    "revision": "72f3373c7788d944a2142bc1a35fc787"
  }, {
    "url": "icons/tachidesk-vui.svg",
    "revision": "21bbd6a121735a4dc4e25478bfaf4268"
  }, {
    "url": "index.html",
    "revision": "c18c39e79a6f50807977119b38646649"
  }, {
    "url": "manifest.json",
    "revision": "575a8dbc5611203a94c0901adf280135"
  }, {
    "url": "old-favicon.ico",
    "revision": "f4facfeaed834544d622544acfbb7722"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html"), {
    denylist: [/sw\.js$/, /workbox-(.)*\.js$/]
  }));

}));
//# sourceMappingURL=sw.js.map
