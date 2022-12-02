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
    "url": "assets/axios.a87bcd6c.js",
    "revision": "e536d90c10c4f82bed5d90cdd6f6e270"
  }, {
    "url": "assets/bus.6e920928.js",
    "revision": "9147708f7f99c1402197d6c121a0a3a5"
  }, {
    "url": "assets/categoriesSetringsPage.eea59e3a.js",
    "revision": "c2236e96961ba59f3e84c29fa2dc8017"
  }, {
    "url": "assets/ChapterLayout.35bd042b.js",
    "revision": "1c72582adb2fbe29266b40f90fa69267"
  }, {
    "url": "assets/ChapterLayout.52d2c414.css",
    "revision": "d8f1f405478fcce2aacac83bfb249454"
  }, {
    "url": "assets/chapterPage.38929996.js",
    "revision": "b9414cbd4a839df6dcf4e91d5755c436"
  }, {
    "url": "assets/chapterPage.c9499c60.css",
    "revision": "4351d73503f7d9b9bc242af5651c64be"
  }, {
    "url": "assets/ClosePopup.77615a3d.js",
    "revision": "1a5455e6064d50403f5423a488e19fd5"
  }, {
    "url": "assets/dom.fd94eb85.js",
    "revision": "7c36c6a92989d0b2d28754219d37a051"
  }, {
    "url": "assets/downloadsPage.0f5ab3ee.js",
    "revision": "319dd129c5132ad465b71b667de7edae"
  }, {
    "url": "assets/ErrorNotFound.d0eac270.js",
    "revision": "6f62496fb1b535a6c7b40697eedf4726"
  }, {
    "url": "assets/extensionsPage.2267d2b3.js",
    "revision": "ad8391ef60f943679abe653636f0e13e"
  }, {
    "url": "assets/fastclick.8a4a8267.js",
    "revision": "424f6079cd5e10228e0abc28077de308"
  }, {
    "url": "assets/Filters.d6e3deb1.js",
    "revision": "bca532815e2b375f518eb4437a39005f"
  }, {
    "url": "assets/Filters.eb5af801.js",
    "revision": "eebded2a16b3c8157096b56e7287004f"
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
    "url": "assets/index.0b61810d.js",
    "revision": "c6f76618ab7f728475eca12126db4baa"
  }, {
    "url": "assets/index.21eeb39f.css",
    "revision": "50cc5e0694972ee4be0eede88199c412"
  }, {
    "url": "assets/Intersection.9c3ca45b.js",
    "revision": "20b540c755928cdcaf143ee60ea93ed3"
  }, {
    "url": "assets/isConfigurable.ab1bc5d9.js",
    "revision": "f70d0a086fe981c34fddacf568040dd1"
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
    "url": "assets/libraryPage.966c2a21.js",
    "revision": "bb8411dae630d6a396fac747ebcea114"
  }, {
    "url": "assets/libraryPage.fff3ed79.css",
    "revision": "09db884e20efdf6192b1d8b3b99cf5d9"
  }, {
    "url": "assets/MainLayout.0801644f.js",
    "revision": "7175bd148df6e29ab4bf878a7c85fe3f"
  }, {
    "url": "assets/MainLayout.3ff2bdff.css",
    "revision": "66434f3c09c3987daee1ca590efb3b73"
  }, {
    "url": "assets/mangaCard.21cfd72a.css",
    "revision": "88bff793bf5815ccc00b2ff4e52cb6ae"
  }, {
    "url": "assets/mangaCard.d2350d59.js",
    "revision": "7aa251fd6551bfe6ea19b1b991c17325"
  }, {
    "url": "assets/mangaPage.278cee20.js",
    "revision": "ea57ea039bc6e0b85b79086e77eb2dda"
  }, {
    "url": "assets/mangaPage.648629f8.css",
    "revision": "28a5d9714ba9c7db6caa66b359d325a9"
  }, {
    "url": "assets/models.d7e94ac2.js",
    "revision": "cad518fe64ff06ac23b10108c40bff45"
  }, {
    "url": "assets/option-sizes.80ed84f8.js",
    "revision": "40ccb3d314129013f1617219433add5d"
  }, {
    "url": "assets/position-engine.94f26946.js",
    "revision": "2bd13486832ff413ce57d8e3e4877db1"
  }, {
    "url": "assets/QBadge.da9a9ffd.js",
    "revision": "04f20278a4d5fa331647d5563683cb24"
  }, {
    "url": "assets/QBtn.99f48b76.js",
    "revision": "856782eb302c9bb17fa3f308ab8bb3df"
  }, {
    "url": "assets/QCard.85acad91.js",
    "revision": "f701573919c3fe50cd7a94cf66acef47"
  }, {
    "url": "assets/QCardActions.821af329.js",
    "revision": "c9878fabf63ac1492f5bebce32a207a9"
  }, {
    "url": "assets/QCardSection.aec8c612.js",
    "revision": "22c22d82c812c9cbd57c40e6dfc82478"
  }, {
    "url": "assets/QCheckbox.e3080dd8.js",
    "revision": "af627d03414b3c1e610663a0cee9fb83"
  }, {
    "url": "assets/QDialog.39313c8c.js",
    "revision": "0463ce83143a30f6bb3338cba266f62e"
  }, {
    "url": "assets/QExpansionItem.7a294102.js",
    "revision": "f080a300cc3dce365d78186ae0232fd4"
  }, {
    "url": "assets/QIcon.8780f7dc.js",
    "revision": "ef1e4be6cbe34c98fd04f21ca8d10ca7"
  }, {
    "url": "assets/QInfiniteScroll.13aea2ff.js",
    "revision": "12563b7c8df83cc31661010342523dea"
  }, {
    "url": "assets/QInnerLoading.b3499eb2.js",
    "revision": "6daaf4da636c10031c2ddb58d5811504"
  }, {
    "url": "assets/QInput.269ea6c0.js",
    "revision": "a5efcffcdb4ca729825468d57cef1014"
  }, {
    "url": "assets/QIntersection.6a6cf41f.js",
    "revision": "e99e3112410da4ef172b120a1595229f"
  }, {
    "url": "assets/QItem.f310d6ce.js",
    "revision": "bef533db4c0dc10c359a1e8490d203f6"
  }, {
    "url": "assets/QItemLabel.10998179.js",
    "revision": "513c8fcf6c2305d0be2f7f986f974bc4"
  }, {
    "url": "assets/QLinearProgress.06ab1855.js",
    "revision": "d1c320d9f44c0ada535e4c762cbf5155"
  }, {
    "url": "assets/QList.23ba57c4.js",
    "revision": "df960eac84fc53c4415a0b3f7c5d3123"
  }, {
    "url": "assets/QMenu.ebcf9c01.js",
    "revision": "fd674f992f021a2047574bd7f39dedd2"
  }, {
    "url": "assets/QPage.126447b9.js",
    "revision": "1f6c0113eece9220a991dc9a150953ad"
  }, {
    "url": "assets/QPageSticky.3c9de08f.js",
    "revision": "22a9c3979f56a54b4454664d5ec9739d"
  }, {
    "url": "assets/QRadio.0e80ef9a.js",
    "revision": "ae215afe9598606741226cbd4ec80a86"
  }, {
    "url": "assets/QResizeObserver.eb13856c.js",
    "revision": "ac7f40c1e32710bdd70c67363e860835"
  }, {
    "url": "assets/QScrollObserver.88307b77.js",
    "revision": "b0064723e4e126b6a74ec0a8cab4b194"
  }, {
    "url": "assets/QSelect.b1f4fa30.js",
    "revision": "d74b4718b1c5df9d40bb0021edd308f1"
  }, {
    "url": "assets/QSeparator.95dc5d53.js",
    "revision": "2c9240d23418324c06e6ae28d0c96157"
  }, {
    "url": "assets/QSpinner.0d412098.js",
    "revision": "dc6c048291b619138027f7000c9f7534"
  }, {
    "url": "assets/QSpinnerDots.50d98fd7.js",
    "revision": "26a04199ca510a2e03bb1449b661f702"
  }, {
    "url": "assets/QTab.aacc573f.js",
    "revision": "30dfb8e47ef94ae76510f6ff8416e6ed"
  }, {
    "url": "assets/QTabs.460280b8.js",
    "revision": "449cd5d5349b0920cc36f25b1f30c927"
  }, {
    "url": "assets/QToggle.a59079d2.js",
    "revision": "ee0dba851aee081326371e6338f972ea"
  }, {
    "url": "assets/QTooltip.02a6ea06.js",
    "revision": "fded33550d546da5c6b16dcdcfe66b80"
  }, {
    "url": "assets/readerSettings.c657db7a.js",
    "revision": "117f341521d7021606cc211ac359304c"
  }, {
    "url": "assets/Ripple.ce29675d.js",
    "revision": "6f02d522477dda6555ea244acda37cdc"
  }, {
    "url": "assets/rtl.b51694b1.js",
    "revision": "95d8452b6e6b7124ec752a039dca0bef"
  }, {
    "url": "assets/scroll.34fac392.js",
    "revision": "ab7f5b2640f76ec49a772e35d92b89d7"
  }, {
    "url": "assets/SearchBar.c8352725.js",
    "revision": "31abbe740cbfe934420a28339dd8ea32"
  }, {
    "url": "assets/selection.2c9d8487.js",
    "revision": "8e270357b901fef657c7044007ff49bd"
  }, {
    "url": "assets/settingsPage.50db2e03.js",
    "revision": "bc88489144d92074b7ea8617853e2841"
  }, {
    "url": "assets/sourceConfigPage.ef7b0b8a.js",
    "revision": "aa10ee8c455dd810465da3e8e3fb9cab"
  }, {
    "url": "assets/SourceSearchPage.d94e4ebf.js",
    "revision": "e2bc768507ee0bf0fdf8d2cc60a2bf92"
  }, {
    "url": "assets/SourceSearchPage.f6107a26.css",
    "revision": "e7b48dc5e4c442f489a09d006704657f"
  }, {
    "url": "assets/sourcesPage.654604f1.js",
    "revision": "782714ae49f344ca897e31875297cb29"
  }, {
    "url": "assets/SourceTopBar.d025b3cc.js",
    "revision": "5cac5b8f55e65546ab0fbd5819c5e3ca"
  }, {
    "url": "assets/SSearchAll.59c08e37.js",
    "revision": "a744118dd87451f5d4923c032b110ae7"
  }, {
    "url": "assets/StoreDefaults.09f5fee3.js",
    "revision": "97703d0759b45ade2da357a41500fe64"
  }, {
    "url": "assets/StoreStuff.f5900537.js",
    "revision": "d930374200ccff480a4e93a50102d379"
  }, {
    "url": "assets/TopBar.4d047f14.js",
    "revision": "4bb65e53899fc67563fca69731513894"
  }, {
    "url": "assets/TopBar.7cbd0ad4.js",
    "revision": "73b2a180e1c807faecdde80bc8861345"
  }, {
    "url": "assets/topbar.8831fe88.js",
    "revision": "f3415ae3590e08880379b326b80063af"
  }, {
    "url": "assets/TopBar.e092c50c.js",
    "revision": "7a0540792adae9a96131d68607e0dc61"
  }, {
    "url": "assets/TopBar.f3003f0d.js",
    "revision": "d37bd0b0dc12a849a1d07ad018f8f0d8"
  }, {
    "url": "assets/TouchPan.d2091680.js",
    "revision": "bfc56a3b1c27b0a99c880c57ee1e6a77"
  }, {
    "url": "assets/uid.42677368.js",
    "revision": "c4fe4c01aeb7efd1bc61878fe7cd525c"
  }, {
    "url": "assets/updatesPage.5c0264a0.css",
    "revision": "f2ca4f73955e58a4916da68c15dadb14"
  }, {
    "url": "assets/updatesPage.a9d88b11.js",
    "revision": "d6297725c37451dd03eed6044d96d6f4"
  }, {
    "url": "assets/use-checkbox.ee2b9cbf.js",
    "revision": "b563cf93acc96f26a63ea5f1bc38723f"
  }, {
    "url": "assets/use-dark.bc291eea.js",
    "revision": "ab58bbc29077a9be262ef12bc073e5ac"
  }, {
    "url": "assets/use-form.324955ff.js",
    "revision": "21e3ef4321c4200617a507da5ab72da3"
  }, {
    "url": "assets/use-key-composition.64dd1858.js",
    "revision": "f81cb5798041d916bc605a36ce786dc1"
  }, {
    "url": "assets/use-meta.f34c9317.js",
    "revision": "51e5764db7876945c996ab22cfcb16d8"
  }, {
    "url": "assets/use-quasar.561ee09f.js",
    "revision": "3422f0420f557a0990b2de2134195ce3"
  }, {
    "url": "assets/use-timeout.99cd911c.js",
    "revision": "dc42c12911e4aa8fef19907c25906e23"
  }, {
    "url": "assets/use-transition.65db8379.js",
    "revision": "7f072636d6882254fd8476dce59ab1e4"
  }, {
    "url": "assets/use-virtual-scroll.083e959b.js",
    "revision": "5bc14732335caaef05d7eea162712b27"
  }, {
    "url": "assets/useDlSock.b6f1d62c.js",
    "revision": "27ae53f2ce4e7bca76a947215e95a685"
  }, {
    "url": "assets/usefull.0f9a3edc.js",
    "revision": "49630f94accb466669fcc1d3787e69e7"
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
    "revision": "10d46ff8a59f22b7cc271e873176c841"
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
