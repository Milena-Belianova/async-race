import {
  loadCars,
  loadWinners,
  state, updateState,
} from '../index';

export const goNextPage = async (): Promise<void> => {
  updateState({ carsPage: state.carsPage += 1 });
  loadCars();
};

export const goPrevPage = async (): Promise<void> => {
  updateState({ carsPage: state.carsPage -= 1 });
  loadCars();
};

export const goNextWinPage = async (): Promise<void> => {
  updateState({ winnersPage: state.winnersPage += 1 });
  loadWinners();
};

export const goPrevWinPage = async (): Promise<void> => {
  updateState({ winnersPage: state.winnersPage -= 1 });
  loadWinners();
};
