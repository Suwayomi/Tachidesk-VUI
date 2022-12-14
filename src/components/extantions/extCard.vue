<!-- /*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */ -->
<template>
  <q-card class="q-ma-sm" :class="$q.dark.isActive ? `` : 'bg-light'">
    <q-item style="height: 100px">
      <div class="row content-center col-grow">
        <q-item-section avatar>
          <q-img
            :src="imgdata"
            loading="lazy"
            spinner-color="white"
            style="height: 100px; aspect-ratio: 225/225; width: fit-content"
            class="rounded-borders items-center justify-center"
            no-spinner
          >
            <q-inner-loading
              :showing="!imgdata"
              color="primary"
              class="bg-transparent"
            >
            </q-inner-loading>
          </q-img>
        </q-item-section>
        <q-item-section class="flex-grow">
          <q-item-label>{{ capitalizeFirstLetter(exten.name) }}</q-item-label>
          <q-item-label caption
            >{{ capitalizeFirstLetter(exten.lang) }} {{ exten.versionName }}
            <span v-if="exten.isNsfw" style="color: red">18+</span>
          </q-item-label>
        </q-item-section>
      </div>
      <div class="flex items-center">
        <q-btn outline color="blue" @click="HandleExt">
          <q-item-label :class="$q.dark.isActive ? `light` : `dark`">{{
            capitalizeFirstLetter(UpUnIn)
          }}</q-item-label>
        </q-btn>
      </div>
    </q-item>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { extention } from '../global/models';
import { getImgBlob } from '../global/usefull';
import { storeGet } from 'src/boot/StoreStuff';

export default defineComponent({
  name: 'ExtCard',
  props: {
    exten: {
      type: Object as PropType<extention>,
      required: true,
    },
  },
  emits: ['reload'],
  setup() {
    const useCache = ref(`${storeGet('useCache', true)}`);
    const imgdata = ref('');
    return { useCache, imgdata };
  },
  computed: {
    UpUnIn(): string {
      if (this.exten.hasUpdate) return 'Update';
      if (this.exten.installed) return 'Uninstall';
      return 'Install';
    },
  },
  mounted: function () {
    getImgBlob(this.exten.iconUrl + '?useCache=' + this.useCache).then(
      (value) => {
        this.imgdata = value;
      }
    );
  },
  methods: {
    capitalizeFirstLetter(string: string): string {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    async HandleExt() {
      if (this.exten.hasUpdate) {
        await this.$api.get(`/api/v1/extension/update/${this.exten.pkgName}`);
      } else if (this.exten.installed) {
        await this.$api.get(
          `/api/v1/extension/uninstall/${this.exten.pkgName}`
        );
      } else {
        await this.$api.get(`/api/v1/extension/install/${this.exten.pkgName}`);
      }
      this.$emit('reload');
    },
  },
});
</script>
