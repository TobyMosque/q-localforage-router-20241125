import { defineStore } from 'pinia';
import { useLocalForageStorage } from 'src/composables/storage';

export const useSampleStore = defineStore('sample', () => {
  const { data: list, getData: ready } = useLocalForageStorage<string[]>(
    'sample',
    [],
  );
  return {
    list,
    ready,
  };
});
