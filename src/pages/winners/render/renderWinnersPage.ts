import { state } from '../../../index';
import { createHeaderFragment } from '../../garage/render/header';
import { createMainWinnersFragment } from './mainWinners';

export const renderWinnersPage = async (): Promise<void> => {
  await state.loadWinners();
  const body: HTMLBodyElement = document.querySelector('body')!;
  body.innerHTML = '';

  body.append(createHeaderFragment(), createMainWinnersFragment());
};
