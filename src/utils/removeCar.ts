import { loadCars } from '../index';
import { deleteCar, deleteWinner, getWinner } from '../components/api';

export const removeCar = async (id: number): Promise<void> => {
  deleteCar(id);

  if (await getWinner(id).catch()) {
    deleteWinner(id);
  }

  await loadCars();
};
