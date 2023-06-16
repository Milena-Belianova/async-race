import { createWinner, getWinner, updateWinner } from '../components/api';

export const createNewWinner = async (id: number, time: number): Promise<void> => {
  const { id: idW, wins: winsW, time: timeW } = await getWinner(id);

  if (idW) {
    const newWins = winsW + 1;
    const newTime = timeW < time ? timeW : time;

    await updateWinner(id, { wins: newWins, time: newTime });
  } else {
    createWinner({ id, wins: 1, time });
  }
};
