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
    "url": "assets/bus.bcb34de8.js",
    "revision": "4d4f9f834b03c7aaad7eaa0114b0a1a2"
  }, {
    "url": "assets/categoriesSetringsPage.9c026f0b.js",
    "revision": "07d606bdd87d97138cb4b4b1e3fbb0a5"
  }, {
    "url": "assets/ChapterLayout.2cf4befc.css",
    "revision": "5330d1446a695f75e477b70864e7c01d"
  }, {
    "url": "assets/ChapterLayout.7303525a.js",
    "revision": "dd506c3dd1f9ace0e55aaebcbb28ca0e"
  }, {
    "url": "assets/chapterPage.0996b7f4.js",
    "revision": "39f2fdb765af5ee310262944845d7d74"
  }, {
    "url": "assets/chapterPage.c9499c60.css",
    "revision": "4351d73503f7d9b9bc242af5651c64be"
  }, {
    "url": "assets/ClosePopup.6e286577.js",
    "revision": "2f9b26e0cd100e20e8f2939aa853d632"
  }, {
    "url": "assets/dom.617e2098.js",
    "revision": "077a415bdd7ef20811376db7264a5bb2"
  }, {
    "url": "assets/downloadsPage.c7df3ebd.js",
    "revision": "4842f33c90f16910f645d6aa8ae54839"
  }, {
    "url": "assets/ErrorNotFound.1b35db3c.js",
    "revision": "baab85a641f66d3267c11411c00ce747"
  }, {
    "url": "assets/extensionsPage.ab351bc2.js",
    "revision": "2590c1981e3bb13b0cba7179ec2a4712"
  }, {
    "url": "assets/fastclick.8a4a8267.js",
    "revision": "424f6079cd5e10228e0abc28077de308"
  }, {
    "url": "assets/fetcher.10190d88.js",
    "revision": "2be79e22367db1be877997a2ce9011e7"
  }, {
    "url": "assets/Filters.e28dcb17.js",
    "revision": "ad6ac5594297c21184f672723344f955"
  }, {
    "url": "assets/Filters.f2b9e057.js",
    "revision": "7de5290f200bd501eb75c3a803bf16f2"
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
    "url": "assets/index.c15e704f.js",
    "revision": "fa57a4d37c77ffe59c86a63d07c11631"
  }, {
    "url": "assets/Intersection.d463dc89.js",
    "revision": "74293048a83d52bdd1846488a56f5f23"
  }, {
    "url": "assets/isConfigurable.a64b8b5f.js",
    "revision": "656ab6e002f2d49105e9920035b672d5"
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
    "url": "assets/libraryPage.d76b00f9.js",
    "revision": "caffd2ada93f378bc052fa313675a5d6"
  }, {
    "url": "assets/libraryPage.e1a91839.css",
    "revision": "07820f0622c51bb1cccc3411ad6eb501"
  }, {
    "url": "assets/MainLayout.abe6faa5.js",
    "revision": "29784ae2c5bc146c900da98d0908a56a"
  }, {
    "url": "assets/mangaCard.b5568e84.css",
    "revision": "918543a2cc8a058ee13b68b17d28512b"
  }, {
    "url": "assets/mangaCard.f13bcbe8.js",
    "revision": "118b11335759a8079b3f8e5030d463db"
  }, {
    "url": "assets/mangaPage.9453134e.js",
    "revision": "d7c13fa32d09aa64f97fe875e076374b"
  }, {
    "url": "assets/mangaPage.e1020fb8.css",
    "revision": "d68ee184b469921667097580e63b8634"
  }, {
    "url": "assets/models.4021c4b7.js",
    "revision": "edeabd5e33b80ef3b161ef849724b1ac"
  }, {
    "url": "assets/option-sizes.d2e717dc.js",
    "revision": "587ef8975fd13dc13c97f9095dd54790"
  }, {
    "url": "assets/position-engine.f1dc51f3.js",
    "revision": "01b291b602de18caf109141c9a64f14b"
  }, {
    "url": "assets/QBadge.7294de63.js",
    "revision": "ed66cdb138bc76ca69c6cdeb9e39c5c9"
  }, {
    "url": "assets/QBtn.fa53f47e.js",
    "revision": "62054ea0fc97e498a3612ee3e7ea9d94"
  }, {
    "url": "assets/QCard.a457d3f1.js",
    "revision": "c2e7fa9d76469e32ec19d1d4843b91df"
  }, {
    "url": "assets/QCardActions.ca11870b.js",
    "revision": "6ed0644b0e065dfefc3d12d8e5b2eb75"
  }, {
    "url": "assets/QCardSection.92a082ef.js",
    "revision": "260eb31e0d3e1dbebe46b348b99167ff"
  }, {
    "url": "assets/QCheckbox.74ac24d4.js",
    "revision": "b92d1c6e4af497bd59732784f3b1bdee"
  }, {
    "url": "assets/QDialog.1c3b5a04.js",
    "revision": "6c54b0a2e3e528130a70e72a19bb1f66"
  }, {
    "url": "assets/QExpansionItem.78b9cc3e.js",
    "revision": "0951c606621f968ca2bfec4d83a6df1b"
  }, {
    "url": "assets/QIcon.25655771.js",
    "revision": "9a7d238f5aae23c8a088eecac573fe80"
  }, {
    "url": "assets/QInfiniteScroll.d15024d7.js",
    "revision": "eca1fb5acb27f4e7c4343e7b4210e13a"
  }, {
    "url": "assets/QInnerLoading.5b5d73c7.js",
    "revision": "06ea662c23deff7579a4163edfdf163f"
  }, {
    "url": "assets/QInput.310e72d3.js",
    "revision": "70b185ba305796f0f357ea1e704b2564"
  }, {
    "url": "assets/QIntersection.196ae3c5.js",
    "revision": "d3f0c2e75d7715ec8c1e088c09a19137"
  }, {
    "url": "assets/QItem.16efe24a.js",
    "revision": "df142dc8b029a997b7111a0875ac9728"
  }, {
    "url": "assets/QItemLabel.66687690.js",
    "revision": "1fd53e04f32227525126dd5364ad4ebd"
  }, {
    "url": "assets/QLinearProgress.a87d027a.js",
    "revision": "6a090b2fb10933af4a49cec868642a00"
  }, {
    "url": "assets/QList.550eb66e.js",
    "revision": "c7ca3d15441b209e4be860a00b41d084"
  }, {
    "url": "assets/QMenu.6fe60063.js",
    "revision": "b2038726cde641afbe08c392cd2aeaea"
  }, {
    "url": "assets/QPage.2a653745.js",
    "revision": "d2e7a08f1fc89b0c44c50fdb141db989"
  }, {
    "url": "assets/QPageSticky.542a0227.js",
    "revision": "15fbcbc0a37fd46790cd3ad3c6ecdc35"
  }, {
    "url": "assets/QRadio.d57d2126.js",
    "revision": "bcaef2f0d552ff08e21688a7cc8f11c3"
  }, {
    "url": "assets/QResizeObserver.beb445f9.js",
    "revision": "ab5f9a74e9eb2e36d6e295d4f9fd3e0e"
  }, {
    "url": "assets/QScrollObserver.5c2596b5.js",
    "revision": "79e292f712c0d864dee01007a2f6898d"
  }, {
    "url": "assets/QSelect.08989844.js",
    "revision": "c8fed7291cfc5540f17676eaf3497b43"
  }, {
    "url": "assets/QSeparator.64db8131.js",
    "revision": "592a9bc8dc1e36adcab5951ceaeb514c"
  }, {
    "url": "assets/QSpinner.dc7e097a.js",
    "revision": "4192d6d41ebf20e9ad13dd71cb377185"
  }, {
    "url": "assets/QSpinnerDots.bd7b4dda.js",
    "revision": "e19d4b0a2a8ed93d9bd61d9440f1c46d"
  }, {
    "url": "assets/QTab.3877ec1d.js",
    "revision": "e1805eb56f888304fb7c46da86006794"
  }, {
    "url": "assets/QTabs.2309048c.js",
    "revision": "80e5c15958d6ee2452ad1b54d6f1b67e"
  }, {
    "url": "assets/QToggle.a20f7c2f.js",
    "revision": "038859cae21662faf9a0f16eab7600d9"
  }, {
    "url": "assets/QTooltip.180c1c60.js",
    "revision": "035cc14c3c5cc9eaf0c7bab703c7c85a"
  }, {
    "url": "assets/readerSettings.74dcf6d8.js",
    "revision": "5338f51648372f7b3de60782d5fb6e18"
  }, {
    "url": "assets/Ripple.a0364732.js",
    "revision": "57ea2ee2223ef4b9f911a17591742e1a"
  }, {
    "url": "assets/rtl.b51694b1.js",
    "revision": "95d8452b6e6b7124ec752a039dca0bef"
  }, {
    "url": "assets/scroll.d31d6ae2.js",
    "revision": "bd6b72428253257b73f6c04b6f262753"
  }, {
    "url": "assets/SearchBar.9b662db8.js",
    "revision": "35701f108d0bc31ef6516562b8ed56a7"
  }, {
    "url": "assets/selection.a711d5f1.js",
    "revision": "80ff5e40d21e638b1a0b751114b9226b"
  }, {
    "url": "assets/settingsPage.fa7155b2.js",
    "revision": "1882c7007cf4050a96fbde24e4269d35"
  }, {
    "url": "assets/sourceConfigPage.bcff3738.js",
    "revision": "ed60c8c34b17563650eff855ec7a0b51"
  }, {
    "url": "assets/SourceSearchPage.60205374.js",
    "revision": "0db860f14737eb88d4f3d82ccf296eb5"
  }, {
    "url": "assets/sourcesPage.5d29c8fc.js",
    "revision": "d0dddfb9451839b0bf07d40eae976241"
  }, {
    "url": "assets/SourceTopBar.6834833a.js",
    "revision": "03843d0aee637b4e0feda1d93de5b0b5"
  }, {
    "url": "assets/SSearchAll.0338af6b.js",
    "revision": "2b7e518af35cc3aed83c12ce444f2942"
  }, {
    "url": "assets/StoreDefaults.641ea579.js",
    "revision": "93e13e0bacbf3e23575dc8eca6d3a64b"
  }, {
    "url": "assets/StoreStuff.9c9e2ee5.js",
    "revision": "e68da0ee2341e5c219ab2538a5794e9f"
  }, {
    "url": "assets/topbar.0e2cf749.js",
    "revision": "85432c9180ddab9eed899656405a7887"
  }, {
    "url": "assets/TopBar.7c7dc7c4.js",
    "revision": "735795a0ff3582a3e82e400830046baa"
  }, {
    "url": "assets/TopBar.89a43a21.js",
    "revision": "0cadae929e31dabdd864881f11efbbd0"
  }, {
    "url": "assets/TopBar.9300a2f9.js",
    "revision": "23c8e46074e2db9c93caf33a66018a20"
  }, {
    "url": "assets/TopBar.fb0801a7.js",
    "revision": "18d954fff0cbb3d727eb15afe91c85a3"
  }, {
    "url": "assets/TouchPan.b565f21b.js",
    "revision": "a39f4976da7e48a33d505a9b94a70dcf"
  }, {
    "url": "assets/uid.42677368.js",
    "revision": "c4fe4c01aeb7efd1bc61878fe7cd525c"
  }, {
    "url": "assets/updatesPage.f6a8ad17.js",
    "revision": "ec7ef36e95d0f3825bd2f9ceead4f1db"
  }, {
    "url": "assets/use-checkbox.85632a95.js",
    "revision": "20278e952aa4824d16a186b7830dadc8"
  }, {
    "url": "assets/use-dark.97ac6897.js",
    "revision": "d47ff3e3be9497f99c92cc4c2b557586"
  }, {
    "url": "assets/use-form.2fa626ca.js",
    "revision": "12253f0aad92bf6531be8cca34556469"
  }, {
    "url": "assets/use-key-composition.5ad075e2.js",
    "revision": "df7d54e8bcc56c5c35aa66c6b93330a7"
  }, {
    "url": "assets/use-meta.1f962fea.js",
    "revision": "f1f0303ab028ced27d849db8d6642116"
  }, {
    "url": "assets/use-quasar.d354c5de.js",
    "revision": "43ac4c000c7b3bd6c5f672f328dfaeef"
  }, {
    "url": "assets/use-timeout.a78770d1.js",
    "revision": "0fa56419b24952450f9684058444a938"
  }, {
    "url": "assets/use-transition.db025f57.js",
    "revision": "535599e2b1ffa0153e3065c0f8178f86"
  }, {
    "url": "assets/use-virtual-scroll.87cfd6ee.js",
    "revision": "a282b09fd8dbf8c8423b18a76105a08a"
  }, {
    "url": "assets/useDlSock.de000660.js",
    "revision": "ecb48ebe20638b14a85b8e3e68fcc5fe"
  }, {
    "url": "assets/usefull.6349588e.js",
    "revision": "cde753b26d58206ff6bd6b021cc4f78f"
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
    "revision": "9f7d1421b43810ba753aeb7b81a7db42"
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
