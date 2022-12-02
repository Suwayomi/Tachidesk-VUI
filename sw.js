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
    "url": "assets/axios.01f4fb44.js",
    "revision": "0caaebed8190c131f940b7ce77969c36"
  }, {
    "url": "assets/bus.532aa442.js",
    "revision": "8e89e770c28435ce02e0fda4fc353708"
  }, {
    "url": "assets/categoriesSetringsPage.03806aa8.js",
    "revision": "2a3ee68e936c6a92b5857ea5568a14d7"
  }, {
    "url": "assets/ChapterLayout.2cf4befc.css",
    "revision": "5330d1446a695f75e477b70864e7c01d"
  }, {
    "url": "assets/ChapterLayout.58e25b83.js",
    "revision": "697d8dacceca643674a44580250dd124"
  }, {
    "url": "assets/chapterPage.7768ee84.js",
    "revision": "e40dae4a329028ac92ddcf3e2f8564be"
  }, {
    "url": "assets/chapterPage.c9499c60.css",
    "revision": "4351d73503f7d9b9bc242af5651c64be"
  }, {
    "url": "assets/ClosePopup.501d8ad0.js",
    "revision": "5bcccb6047b046be7ef9b30ec2b5517f"
  }, {
    "url": "assets/dom.e2e78a08.js",
    "revision": "5139db4174f01e5ec5277657c2a8eb95"
  }, {
    "url": "assets/downloadsPage.71921f58.js",
    "revision": "f835a380e382ddb080848193a6e9fd2d"
  }, {
    "url": "assets/ErrorNotFound.71e4e46c.js",
    "revision": "f60b15a5becf31ea84867b6542392436"
  }, {
    "url": "assets/extensionsPage.6683db1f.js",
    "revision": "4dae0087f37964d4dd51844c465c68df"
  }, {
    "url": "assets/fastclick.8a4a8267.js",
    "revision": "424f6079cd5e10228e0abc28077de308"
  }, {
    "url": "assets/Filters.0cd04f8b.js",
    "revision": "3578e19fb111880582abddd8794c4d0c"
  }, {
    "url": "assets/Filters.e6df5390.js",
    "revision": "addb698f1cbe94e1e3bd3a63b6bf03dc"
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
    "url": "assets/index.5cc93081.js",
    "revision": "4f31e79dae5106060807b9ca8cf048eb"
  }, {
    "url": "assets/Intersection.79320c52.js",
    "revision": "9b66b2796e419a0b7563ee76917e9e97"
  }, {
    "url": "assets/isConfigurable.149073dc.js",
    "revision": "4c5da41bd77db0dc7af0bcbce3db7b3d"
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
    "url": "assets/libraryPage.10a83080.js",
    "revision": "8255bccd2f7b14b069d66fb0b56c6907"
  }, {
    "url": "assets/libraryPage.e1a91839.css",
    "revision": "07820f0622c51bb1cccc3411ad6eb501"
  }, {
    "url": "assets/MainLayout.a6bf9bab.js",
    "revision": "b4e9d77220cee72150c6a5f5a8bbdf79"
  }, {
    "url": "assets/MainLayout.c2f22ee1.css",
    "revision": "fe2d6bfa176ea00fa18857ca9a231299"
  }, {
    "url": "assets/mangaCard.aeed1002.css",
    "revision": "04aa78d03a38a68d2e5e07bcbe754bd7"
  }, {
    "url": "assets/mangaCard.cba174aa.js",
    "revision": "2bae76a5e9751654d05a3b3684f53583"
  }, {
    "url": "assets/mangaPage.05b97bbd.css",
    "revision": "95bf049fc361f7fc694470a20bfa8127"
  }, {
    "url": "assets/mangaPage.c1f4588a.js",
    "revision": "47eb5d0004484128ad5b64fa3955b77f"
  }, {
    "url": "assets/models.4021c4b7.js",
    "revision": "edeabd5e33b80ef3b161ef849724b1ac"
  }, {
    "url": "assets/option-sizes.60af55ae.js",
    "revision": "7d045e84f9e1024f26d8cc6a622cd4c4"
  }, {
    "url": "assets/position-engine.4089f253.js",
    "revision": "a4e2fb2eecae4d3fd92c86ba9e1d7154"
  }, {
    "url": "assets/QBadge.4fa2216a.js",
    "revision": "ce38908582a46a7fbc46699760e2cf4b"
  }, {
    "url": "assets/QBtn.11461724.js",
    "revision": "917400dbf28e8875ae29bc800125e5e7"
  }, {
    "url": "assets/QCard.70d72d27.js",
    "revision": "619c188cd4727e05764272e0ae0a85e2"
  }, {
    "url": "assets/QCardActions.82161f73.js",
    "revision": "54e31da01ee72777d05e1b9e14d64c8b"
  }, {
    "url": "assets/QCardSection.c8f72209.js",
    "revision": "308e3f9dceb37de0a578d6a9982af2e9"
  }, {
    "url": "assets/QCheckbox.76c4b12d.js",
    "revision": "80a72acbcf3264beca361fcaa8d84aa9"
  }, {
    "url": "assets/QDialog.e6d65e20.js",
    "revision": "5dc729051c116708daff04daa38bf350"
  }, {
    "url": "assets/QExpansionItem.ae88d575.js",
    "revision": "3cf8c344dee682bb1434b37b23a35f79"
  }, {
    "url": "assets/QIcon.129c8e27.js",
    "revision": "fbea3f4424052ebcc3a75b0ba0f74e29"
  }, {
    "url": "assets/QInfiniteScroll.065d6888.js",
    "revision": "fcf2e4401a13870d90225bc21c595742"
  }, {
    "url": "assets/QInnerLoading.480505c0.js",
    "revision": "b0738ae485c696e0b32936a43fcb0874"
  }, {
    "url": "assets/QInput.cad7e9be.js",
    "revision": "1235134931eceb9c2045e05644bccbad"
  }, {
    "url": "assets/QIntersection.c01880aa.js",
    "revision": "c25486066870a0ec8254474db3fd65b2"
  }, {
    "url": "assets/QItem.b6d35b8b.js",
    "revision": "2107320d7105c770f245de7fc1b7ba6a"
  }, {
    "url": "assets/QItemLabel.f373f416.js",
    "revision": "62b34d9053125a67d0bfef70c79b4b7d"
  }, {
    "url": "assets/QLinearProgress.b8ae575c.js",
    "revision": "fa4d27fcd00b8658371ecb4c5ca39288"
  }, {
    "url": "assets/QList.323c1084.js",
    "revision": "4e735070b6506feb544d63712fd773ab"
  }, {
    "url": "assets/QMenu.e8ab5d35.js",
    "revision": "c48ad9f8b51ff77fc2da850394cd562f"
  }, {
    "url": "assets/QPage.8c90446c.js",
    "revision": "b34c9aa2941cd28b399b500e9219fab2"
  }, {
    "url": "assets/QPageSticky.057230f8.js",
    "revision": "8c0309d79709bc7ed856240c4331fefe"
  }, {
    "url": "assets/QRadio.2833a467.js",
    "revision": "daf8dc3d9d783cd2dd4c70106ac0b596"
  }, {
    "url": "assets/QResizeObserver.08dcd257.js",
    "revision": "6edcd0a859b9da6c20ca8be13b562925"
  }, {
    "url": "assets/QScrollObserver.6d28dc53.js",
    "revision": "b3ea99c4ba62a779ff6d1d83bae5edc3"
  }, {
    "url": "assets/QSelect.94de2790.js",
    "revision": "51454c5bcb3ee70e67d9cf4797a50a01"
  }, {
    "url": "assets/QSeparator.13c326e4.js",
    "revision": "ffd9a7f7fae3355caa09f4eaf41b3bc3"
  }, {
    "url": "assets/QSpinner.7d14a7f2.js",
    "revision": "2bd65c99651b6a8de8b2da7ac0bf9ecc"
  }, {
    "url": "assets/QSpinnerDots.8b9e5e85.js",
    "revision": "e632a7e869b2dcb2c5bed58c3e7304ad"
  }, {
    "url": "assets/QTab.5863deae.js",
    "revision": "0344c5d489393c8b36bbac9a03a92fad"
  }, {
    "url": "assets/QTabs.02416a46.js",
    "revision": "ea9ea34a6c3c6ef101d0658462facaef"
  }, {
    "url": "assets/QToggle.a7cc5817.js",
    "revision": "f82c9596bf34034bb190cf9be3a1c5ad"
  }, {
    "url": "assets/QTooltip.6bd57eb1.js",
    "revision": "2b5e80cabb8307459284ffc2a9010f87"
  }, {
    "url": "assets/readerSettings.06bbeb03.js",
    "revision": "552addf5f1be90533ca48811302359b5"
  }, {
    "url": "assets/Ripple.3a8ac2e1.js",
    "revision": "bc59d84d48e3df770682debdc854b5af"
  }, {
    "url": "assets/rtl.b51694b1.js",
    "revision": "95d8452b6e6b7124ec752a039dca0bef"
  }, {
    "url": "assets/scroll.b1151d01.js",
    "revision": "ea80e208acd0215acd9ec4282ceb346b"
  }, {
    "url": "assets/SearchBar.abafa665.js",
    "revision": "a67673e0149d87f47a92d49d4687d338"
  }, {
    "url": "assets/selection.4336ddbe.js",
    "revision": "ba09b01157fa0080547022475d4e6cb5"
  }, {
    "url": "assets/settingsPage.5a3f3098.js",
    "revision": "c731edee0cbb726096997b43eb8d8987"
  }, {
    "url": "assets/sourceConfigPage.b89d523f.js",
    "revision": "18ab584e200faeb8f833b9118a062f8a"
  }, {
    "url": "assets/SourceSearchPage.75d35487.js",
    "revision": "7f1f158a591c3e502c24f2b5ab5200e5"
  }, {
    "url": "assets/SourceSearchPage.af7b65e4.css",
    "revision": "addbfb7c97b2fbadf0653a7d307c4653"
  }, {
    "url": "assets/sourcesPage.a88e370c.js",
    "revision": "71f0efe96cb09524bcbb47c05ee762dd"
  }, {
    "url": "assets/SourceTopBar.cba2b3c4.js",
    "revision": "84fd3355a364148d8613a7f3746bda3e"
  }, {
    "url": "assets/SSearchAll.6d41951e.js",
    "revision": "e90ae5f1ebb366eb22c696c8620917bb"
  }, {
    "url": "assets/StoreDefaults.d9f16d7d.js",
    "revision": "c18ac6c708d1eec58b1d3cb450abbb44"
  }, {
    "url": "assets/StoreStuff.45ae8e68.js",
    "revision": "b2f9a85728f0ec1d7d76c9b3bef44cce"
  }, {
    "url": "assets/TopBar.343b323e.js",
    "revision": "273b40c05e4e4fb6a932a88112b30180"
  }, {
    "url": "assets/TopBar.40e46b09.js",
    "revision": "ea8d54c473b331c2a45fa6b7f5dd1e03"
  }, {
    "url": "assets/TopBar.62f72eb4.js",
    "revision": "bb3db810170f4cb50d79feaf6a8bf132"
  }, {
    "url": "assets/topbar.ec436e1d.js",
    "revision": "bd571ee36277080f0d7b85ad14f5fd92"
  }, {
    "url": "assets/TopBar.fb37bc0f.js",
    "revision": "2b59d6366a215c4471464afc901ef8f0"
  }, {
    "url": "assets/TouchPan.8843921d.js",
    "revision": "fd083aa2f2b35e973d2af1810b460714"
  }, {
    "url": "assets/uid.42677368.js",
    "revision": "c4fe4c01aeb7efd1bc61878fe7cd525c"
  }, {
    "url": "assets/updatesPage.da40794d.css",
    "revision": "20506ef85dd6ac1f2427783c5935b6d6"
  }, {
    "url": "assets/updatesPage.dfa5755a.js",
    "revision": "35354c3429da79b86877ee138738996f"
  }, {
    "url": "assets/use-checkbox.17ce6f52.js",
    "revision": "e67e34e6658ad5978ca419b14dabacc0"
  }, {
    "url": "assets/use-dark.1adac86a.js",
    "revision": "8ffb9b9069dcf6c3a39dd620ba4d8df8"
  }, {
    "url": "assets/use-form.94dd5d17.js",
    "revision": "c68d897b77bfefd9afacb98df6120ce0"
  }, {
    "url": "assets/use-key-composition.a20c22ba.js",
    "revision": "42da3735038139e5045c275d5cacad50"
  }, {
    "url": "assets/use-meta.e9bcceb0.js",
    "revision": "2b1725064043a9f2d38b84b92676d45c"
  }, {
    "url": "assets/use-quasar.8c7584e7.js",
    "revision": "c0b92882ece5df5afd7c6d50a363f5a3"
  }, {
    "url": "assets/use-timeout.fccbe84a.js",
    "revision": "20d76d9e93613743ce6e2d63b7de4c74"
  }, {
    "url": "assets/use-transition.651acf9e.js",
    "revision": "f1ffa6cb251967a1c638b4146654585f"
  }, {
    "url": "assets/use-virtual-scroll.377a0319.js",
    "revision": "c314faecc58b8f7dd653c9acb5543479"
  }, {
    "url": "assets/useDlSock.2097a636.js",
    "revision": "1100338bf021027d83638ba82cd1cec1"
  }, {
    "url": "assets/usefull.8778cf5c.js",
    "revision": "35a29eb8147bafe816d7b7f2bd838d5f"
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
    "revision": "8266312ad2182562e59eed04f8424f93"
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
