import { createHeaderFragment } from '../../garage/render/header';
import { createMainWinnersFragment } from './mainWinners';

export const renderWinnersPage = (): void => {
  const body: HTMLBodyElement = document.querySelector('body')!;
  body.innerHTML = '';

  body.append(createHeaderFragment(), createMainWinnersFragment());
};
