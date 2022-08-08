import { createWinner } from '../components/api';

export const createNewWinner = (id: number, time: number): void => {
  const wins = 1;
  createWinner({ id, wins, time });
};
