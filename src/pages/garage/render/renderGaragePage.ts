import { createHeaderFragment } from './header';
import { createMainFragment } from './main';

export const renderGaragePage = (): void => {
  const body: HTMLBodyElement = document.querySelector('body')!;
  body.innerHTML = '';

  body.append(createHeaderFragment(), createMainFragment());
};
