import { render, state } from '..';

export const goNextPage = async (): Promise<void> => {
  state.carsPage += 1;
  await state.loadCars();
  render();
};
