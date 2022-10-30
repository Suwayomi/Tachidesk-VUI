<template>
  <q-item
    class="row justify-between no-wrap items-center rounded-borders"
    clickable
    v-ripple
    @click="SreadMargins = !SreadMargins"
  >
    <q-item-label>Page Margins</q-item-label>
    <q-toggle color="blue" v-model="SreadMargins" />
  </q-item>
  <q-item
    class="row justify-between no-wrap items-center rounded-borders"
    clickable
    v-ripple
    @click="SreadScale = !SreadScale"
  >
    <q-item-label>Page Scale</q-item-label>
    <q-toggle color="blue" v-model="SreadScale" />
  </q-item>
  <q-item
    class="row justify-between no-wrap items-center rounded-borders"
    clickable
    v-ripple
    @click="sReadOffset = !sReadOffset"
  >
    <q-item-label>Page Offset</q-item-label>
    <q-toggle color="blue" v-model="sReadOffset" />
  </q-item>
  <q-select
    standout
    label="Reader Mode"
    v-model="SReadModel"
    :options="SReadoptions"
  >
  </q-select>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { chapterMeta } from 'src/components/reader/readerSettings';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'readerDrawerCont',
  created: function () {
    this.$watch('SReadModel', (newer: string) => {
      this.options.setRM(newer);
    });
    this.$watch('SreadMargins', (newer: boolean) => {
      this.options.setWT(newer);
    });
    this.$watch('SreadScale', (newer: boolean) => {
      this.options.setScale(newer);
    });
    this.$watch('sReadOffset', (newer: boolean) => {
      this.options.setOffset(newer);
    });
  },
  setup() {
    const route = useRoute();
    const options = chapterMeta(parseInt(`${route.params['mangaID']}`));
    const SReadModel = ref(options.vue_RM.value);
    const SreadMargins = ref(options.vue_WT.value);
    const SreadScale = ref(options.vue_Scale.value);
    const sReadOffset = ref(options.vue_Offset.value);
    return {
      SreadMargins,
      SreadScale,
      SReadModel,
      SReadoptions: ['RTL', 'LTR', 'SinglePage', 'Vertical'],
      sReadOffset,
      options
    };
  }
});
</script>