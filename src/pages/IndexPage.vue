<template>
  <q-page class="row items-center justify-evenly">
    <div class="row q-col-gutter-sm" style="min-width: 480px">
      <div class="col">
        <q-input v-model="newItem" filled label="Text"></q-input>
      </div>
      <div class="col col-auto q-my-sm">
        <q-btn
          :disabled="!newItem || list.includes(newItem)"
          icon="add"
          color="positive"
          round
          @click="list.push(newItem)"
        ></q-btn>
      </div>
      <div class="col-12">
        <q-list bordered>
          <q-item v-for="(item, index) in list" :key="item">
            <q-item-section>{{ item }}</q-item-section>
            <q-item-section avatar>
              <q-btn
                dense
                round
                color="negative"
                icon="remove"
                @click="list.splice(index, 1)"
              ></q-btn>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useSampleStore } from 'stores/sample';
import { storeToRefs } from 'pinia';

const sampleStore = useSampleStore();
const { list } = storeToRefs(sampleStore);
const newItem = ref('');
</script>
