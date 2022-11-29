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
    "url": "assets/bus.a223fbab.js",
    "revision": "bbc8e19541891533b669646f947068c3"
  }, {
    "url": "assets/categoriesSetringsPage.03a95bdd.js",
    "revision": "83840a8abd5136cdd92fc33f19a00b70"
  }, {
    "url": "assets/ChapterLayout.7559e0dd.css",
    "revision": "f4ba328f24c8bb6ca8fc5dee5eb3d8d8"
  }, {
    "url": "assets/ChapterLayout.7d50a531.js",
    "revision": "dadec351a4dcae251b24e9d163ddda6a"
  }, {
    "url": "assets/chapterPage.e640e6cd.css",
    "revision": "235bd01c24e3098be2af3f592858acde"
  }, {
    "url": "assets/chapterPage.e84e03ad.js",
    "revision": "abb545f6ff51a1bbb14ed4a4f5a7da62"
  }, {
    "url": "assets/ClosePopup.117febde.js",
    "revision": "b645c4f91f1a7c684ec844e4961e4c63"
  }, {
    "url": "assets/dom.3bfc77a6.js",
    "revision": "1e643c9d4ea2d4647f84fc85d0bf3aae"
  }, {
    "url": "assets/downloadsPage.f14c6ba4.js",
    "revision": "4d85ba7531a4dd6611d4cb48fc222a79"
  }, {
    "url": "assets/ErrorNotFound.b74d56f2.js",
    "revision": "637e173019ca082c6fdc4fef1d2d3aa4"
  }, {
    "url": "assets/extensionsPage.f8bb15e0.js",
    "revision": "f5f50d9b2c858ba36bc86a62924de21a"
  }, {
    "url": "assets/fastclick.8a4a8267.js",
    "revision": "424f6079cd5e10228e0abc28077de308"
  }, {
    "url": "assets/fetcher.d026f468.js",
    "revision": "289d1327cf3c1ff86a6589ff6cd51cb0"
  }, {
    "url": "assets/Filters.b563a00e.js",
    "revision": "6ca479399e636c6b6e5b49f99c22d3ab"
  }, {
    "url": "assets/Filters.e940003f.js",
    "revision": "013d4524f88063decce9b689d7965217"
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
    "url": "assets/index.262635f0.css",
    "revision": "8a86d6e51205acebd9f49ce3ceb6c346"
  }, {
    "url": "assets/index.75e4774b.js",
    "revision": "85b658d9f294e3083c999c67638be25b"
  }, {
    "url": "assets/Intersection.1f7cb92e.js",
    "revision": "c455ffcd496b20146a109e8b09778b22"
  }, {
    "url": "assets/isConfigurable.651788e3.js",
    "revision": "b6a07ef0506a52c79362a159017d2d21"
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
    "url": "assets/libraryPage.b9ace64a.css",
    "revision": "944d4dfb9203f97b65864e19bb113ae6"
  }, {
    "url": "assets/libraryPage.ccc43e5d.js",
    "revision": "d217f7527558bc49f82404c65e87b2de"
  }, {
    "url": "assets/MainLayout.ede6109e.js",
    "revision": "896ac1a06372ecfd9c0688ce6f5615c5"
  }, {
    "url": "assets/mangaCard.98a73844.js",
    "revision": "de6b3ac396c9d8919ed1a3c7acb74308"
  }, {
    "url": "assets/mangaCard.db31bc2f.css",
    "revision": "bf0643a5bf2bc7e5a1b37f83244ac71b"
  }, {
    "url": "assets/mangaPage.447f5d6a.css",
    "revision": "8fb42831c3355ded501342d01ee23add"
  }, {
    "url": "assets/mangaPage.9a3d7161.js",
    "revision": "a7f9a123a2839bfc54712998629730c0"
  }, {
    "url": "assets/models.4021c4b7.js",
    "revision": "62712b801c429d30d5c8bc7053b5a987"
  }, {
    "url": "assets/option-sizes.8951cf75.js",
    "revision": "918f1fbba6b0a19856fc77d95dda76d3"
  }, {
    "url": "assets/position-engine.09a868e3.js",
    "revision": "542eeee7db2411c3e11116fbdd99048c"
  }, {
    "url": "assets/QBadge.0d5331c7.js",
    "revision": "02e0d950e4a96bfb17d32b338f9404b8"
  }, {
    "url": "assets/QBtn.9abbfb4b.js",
    "revision": "3314148971b56b46fbd6dd658cd62ee3"
  }, {
    "url": "assets/QCard.c4935ec0.js",
    "revision": "eaa07a6f639077d7c517863b43192beb"
  }, {
    "url": "assets/QCardActions.6f813fe5.js",
    "revision": "6d7b9bfb33c435843a886116cbf19b66"
  }, {
    "url": "assets/QCardSection.0b1eee72.js",
    "revision": "13c0a034f66e01522a3753a8ad231855"
  }, {
    "url": "assets/QCheckbox.64e78a72.js",
    "revision": "989ae5a39ea71fb8c0aa5865f94ad9d6"
  }, {
    "url": "assets/QDialog.2ec363bc.js",
    "revision": "ecb37c63ffff706978d7fefb7eea10fd"
  }, {
    "url": "assets/QExpansionItem.f468b7fc.js",
    "revision": "4c50118dae2d625570304479c1eeac81"
  }, {
    "url": "assets/QIcon.aa032244.js",
    "revision": "6610de64d64ed6a9f1c0cd23c86cffd7"
  }, {
    "url": "assets/QImg.834b853c.js",
    "revision": "b337b27b688087c5bc26302de18f88c2"
  }, {
    "url": "assets/QInfiniteScroll.07fdfe31.js",
    "revision": "b1b4185b8acc4fc61881c0503e20eeca"
  }, {
    "url": "assets/QInnerLoading.dc9c40c5.js",
    "revision": "24d5aa6e0125a5d9a95bef2bbe93651e"
  }, {
    "url": "assets/QInput.6b71ca31.js",
    "revision": "8fa69ea30756892b770b82743ca871e2"
  }, {
    "url": "assets/QIntersection.5a6859cd.js",
    "revision": "ac0e7660e31bae6967e5be141d423b1e"
  }, {
    "url": "assets/QItem.3d6dda7f.js",
    "revision": "217f94e87917d904a85bc2a5b530e241"
  }, {
    "url": "assets/QItemLabel.bf6e2c41.js",
    "revision": "2af23799191a5f0314e9644006372126"
  }, {
    "url": "assets/QLinearProgress.b53747dd.js",
    "revision": "151db7d208db8f0870d0fdca9f0b567f"
  }, {
    "url": "assets/QList.e87441cd.js",
    "revision": "a131ad099f5bb8b251afa86b21ab5928"
  }, {
    "url": "assets/QMenu.fd3c1db0.js",
    "revision": "ef054b5489d36b0dcfba96cfe79310a7"
  }, {
    "url": "assets/QPage.d65b07e9.js",
    "revision": "837f983b88dcd2e60ca9c03b4bdef31a"
  }, {
    "url": "assets/QPageSticky.fba7628c.js",
    "revision": "7de1083783ac70f3092a2a2e116f48a5"
  }, {
    "url": "assets/QRadio.03f9724f.js",
    "revision": "86ace488c6ee990cbd811491962452bb"
  }, {
    "url": "assets/QResizeObserver.98338598.js",
    "revision": "1b05cdc18c1772f6ab1cc39e7b29d337"
  }, {
    "url": "assets/QScrollObserver.64c336b1.js",
    "revision": "d9b499cba4c4e6dda86b683ae47e88f1"
  }, {
    "url": "assets/QSelect.fbe52429.js",
    "revision": "12195a4c976299b0593ae5be4826bd09"
  }, {
    "url": "assets/QSeparator.3fdd6d84.js",
    "revision": "507e7e7026f4ac9a89138cc7da5e5fda"
  }, {
    "url": "assets/QSpinner.6511ee07.js",
    "revision": "c86334d2328b031980e72c0bbb004841"
  }, {
    "url": "assets/QSpinnerDots.1a97c95a.js",
    "revision": "6d468af7ff96bb096fe5927af3c28c9d"
  }, {
    "url": "assets/QTab.0a84aa85.js",
    "revision": "e3d7682b0266478e9256279c8d26e5d7"
  }, {
    "url": "assets/QTabs.03dcafd4.js",
    "revision": "3047f2486041f0cd7da7988783cdacef"
  }, {
    "url": "assets/QToggle.41c58e33.js",
    "revision": "989a8976d5bbc6f265c04e62688ec2e2"
  }, {
    "url": "assets/QTooltip.5b3ee804.js",
    "revision": "6416d2c55d421ce6ad73fb9e690b70ef"
  }, {
    "url": "assets/readerSettings.2ba4d9c1.js",
    "revision": "c6dd1ace8f6730c70e27abdff1cc5338"
  }, {
    "url": "assets/Ripple.bedf8a1c.js",
    "revision": "167bf3c57029ac1185a740a4254fa368"
  }, {
    "url": "assets/rtl.b51694b1.js",
    "revision": "95d8452b6e6b7124ec752a039dca0bef"
  }, {
    "url": "assets/scroll.51a1aea4.js",
    "revision": "96e3d002ed1069f14a7bddbb81caceec"
  }, {
    "url": "assets/SearchBar.f00d3400.js",
    "revision": "76013873bac14500a738d8b5a09f8661"
  }, {
    "url": "assets/selection.3a23570e.js",
    "revision": "a7c76e7831a9ea3914fb78b5ed897e1f"
  }, {
    "url": "assets/settingsPage.802757d7.js",
    "revision": "fc93655244ae2be37e21752579993f40"
  }, {
    "url": "assets/sourceConfigPage.9b356e87.js",
    "revision": "f153873cb359dce45bdcfc3136bd111e"
  }, {
    "url": "assets/SourceSearchPage.80aa8642.js",
    "revision": "e4297e919246f0d9c958109b949d26bc"
  }, {
    "url": "assets/sourcesPage.88eda943.js",
    "revision": "4015c80def6741fcba0f9d0520e9d736"
  }, {
    "url": "assets/SourceTopBar.395bb00a.js",
    "revision": "c3236fa1ea369a677ea7ffc3ec64abd4"
  }, {
    "url": "assets/SSearchAll.ec537371.js",
    "revision": "893a208f433cfe5d0f15cd3e9811aca9"
  }, {
    "url": "assets/StoreDefaults.7bf25ab8.js",
    "revision": "438e79f37c1cba081aeb6489bdf5c431"
  }, {
    "url": "assets/topbar.1f5a04ea.js",
    "revision": "a8ec17325fcab209edc6eca234e2418d"
  }, {
    "url": "assets/TopBar.409967de.js",
    "revision": "19eea2f67bc7b41726b0b0263d8af16e"
  }, {
    "url": "assets/TopBar.ccb7b092.js",
    "revision": "270ce86cd00b5bc0b20200f771eb8bfa"
  }, {
    "url": "assets/TopBar.dbdeb22e.js",
    "revision": "417863b5665a4b1f6b95a510e9d8cf5d"
  }, {
    "url": "assets/TopBar.fb8e45fe.js",
    "revision": "3bc031143c732753e5bf53a53e9d810a"
  }, {
    "url": "assets/TouchPan.86a57c6f.js",
    "revision": "c3ee2e1d596aa8bfdbc7caa49b0d7314"
  }, {
    "url": "assets/uid.42677368.js",
    "revision": "c4fe4c01aeb7efd1bc61878fe7cd525c"
  }, {
    "url": "assets/updatesPage.1a78be59.js",
    "revision": "cba258c17555b976afb8f1c91e6db7f8"
  }, {
    "url": "assets/use-checkbox.4b6eeeb4.js",
    "revision": "fde762fdff2870569b5c5e7fe3ddfffa"
  }, {
    "url": "assets/use-dark.63b90c22.js",
    "revision": "e343547ded32c5eab30e58274f851313"
  }, {
    "url": "assets/use-form.b3df9ff5.js",
    "revision": "7a39bdf8146753e0b6b43ad1414f02c5"
  }, {
    "url": "assets/use-key-composition.689d3f4d.js",
    "revision": "02cb606f859e887d741d439218955871"
  }, {
    "url": "assets/use-meta.7bed1395.js",
    "revision": "3ddd835ab1d1a7d161782124911c71bc"
  }, {
    "url": "assets/use-quasar.ac6e6735.js",
    "revision": "5edcdc89da9e755e55e7e78b990ade16"
  }, {
    "url": "assets/use-timeout.4d745afd.js",
    "revision": "d5400dd136e3975de14a603f75a87ee6"
  }, {
    "url": "assets/use-transition.34947ede.js",
    "revision": "db8caba1fea7f4bb2b8d44b10b66ab72"
  }, {
    "url": "assets/use-virtual-scroll.d842f9a0.js",
    "revision": "a733624304319a257a88e9758b71c836"
  }, {
    "url": "assets/useDlSock.1248d29f.js",
    "revision": "c298e37b39376088fa33a8b176933463"
  }, {
    "url": "assets/usefull.5da5779b.js",
    "revision": "454bdb6ac4786051c9fa19e118d74e89"
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
    "revision": "9292110b88e6945564a909338bbe751d"
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
