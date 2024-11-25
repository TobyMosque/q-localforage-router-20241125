import { defineBoot } from '#q-app/wrappers';
import { createLocalForage } from 'src/composables/localForage';

export default defineBoot(async ({ store }) => {
  createLocalForage(store);
});
