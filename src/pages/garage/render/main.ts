import { createCarManagementFragment } from './carManagement';

export const createMainFragment = (): DocumentFragment => {
  const fragment: DocumentFragment = document.createDocumentFragment();

  const main: HTMLDivElement = document.createElement('div');
  main.className = 'main';

  main.append(createCarManagementFragment());
  fragment.append(main);
  return fragment;
};
