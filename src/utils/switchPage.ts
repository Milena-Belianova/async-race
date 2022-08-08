import { state } from '..';
import { renderGaragePage } from '../pages/garage/render/renderGaragePage';
import { renderWinnersPage } from '../pages/winners/render/renderWinnersPage';

export const goNextPage = async (): Promise<void> => {
  state.carsPage += 1;
  await state.loadCars();
  renderGaragePage();
};

export const goPrevPage = async (): Promise<void> => {
  state.carsPage -= 1;
  await state.loadCars();
  renderGaragePage();
};

export const goNextWinPage = async (): Promise<void> => {
  state.winnersPage += 1;
  await state.loadCars();
  renderWinnersPage();
};

export const goPrevWinPage = async (): Promise<void> => {
  state.winnersPage -= 1;
  await state.loadCars();
  renderWinnersPage();
};
