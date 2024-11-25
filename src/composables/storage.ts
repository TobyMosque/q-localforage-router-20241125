import type { Pinia } from 'pinia';
import { useLocalForage } from './localForage';
import {
  useStorageAsync,
  type StorageLikeAsync,
  type RemovableRef,
} from '@vueuse/core';
import { markRaw, watch } from 'vue';

export function useLocalForageStorage<T>(key: string, state: T, pinia?: Pinia) {
  const localForage = useLocalForage(pinia);
  const data = useStorageAsync<T>(key, state, localForage as StorageLikeAsync);

  const getData = markRaw(
    new Promise<RemovableRef<T>>((resolve) => {
      const unwatch = watch(data, () => {
        resolve(data);
        unwatch();
      });
    }),
  );

  return Object.assign(getData, {
    data,
    getData,
  });
}
