import { state } from '../index';
import { deleteCar, deleteWinner, getWinner } from '../components/api';
import { renderGaragePage } from '../pages/garage/render/renderGaragePage';

export const removeCar = async (id: number): Promise<void> => {
  deleteCar(id);

  if (await getWinner(id).catch()) {
    deleteWinner(id);
  }

  await state.loadCars();
  renderGaragePage();
};
