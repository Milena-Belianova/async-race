import { createCarManagementFragment } from './carManagementFragment';
import { createCarsBlockFragment } from './carsFragment';

export const createMainFragment = (): DocumentFragment => {
  const fragment: DocumentFragment = document.createDocumentFragment();

  const main: HTMLElement = document.createElement('main');
  main.className = 'main';

  main.append(createCarManagementFragment(), createCarsBlockFragment());
  fragment.append(main);
  return fragment;
};
