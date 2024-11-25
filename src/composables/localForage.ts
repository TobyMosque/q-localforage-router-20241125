import { createInstance } from 'localforage';
import type { Pinia } from 'pinia';
import { useDiStore } from 'src/stores/di';

declare module 'pinia' {
  export interface PiniaCustomProperties {
    readonly localForage: ReturnType<typeof createLocalForage>;
  }
}

export function createLocalForage(pinia: Pinia) {
  const storage = createInstance({
    name: 'q-localforage-router-241125',
  });

  pinia.use(() => ({ localForage: storage }));
  return storage;
}

export function useLocalForage(pinia?: Pinia) {
  const di = useDiStore(pinia);
  return di.localForage;
}
