import { state, updateState } from '..';
import { onEngineStartBtnClick, onEngineStopBtnClick } from './startStopEngine';

export const onRaceBtnClick = async (): Promise<void> => {
  updateState({ race: true });
  // Btns
  const raceBtn = document.getElementById('raceBtn') as HTMLButtonElement;
  const resetBtn = document.getElementById('resetBtn') as HTMLButtonElement;
  raceBtn.setAttribute('disabled', 'disabled');
  resetBtn.removeAttribute('disabled');

  if (state.cars) {
    await Promise.all(state.cars.map((car) => onEngineStartBtnClick(car.id, car.name)));
  }
};

export const onResetBtnClick = async (): Promise<void> => {
  if (state.cars) {
    await Promise.all(state.cars.map((car) => onEngineStopBtnClick(car.id)));
  }

  // Btns
  const raceBtn = document.getElementById('raceBtn') as HTMLButtonElement;
  const resetBtn = document.getElementById('resetBtn') as HTMLButtonElement;
  resetBtn.setAttribute('disabled', 'disabled');
  raceBtn.removeAttribute('disabled');
  const winMessage = document.getElementById('winMessage') as HTMLDivElement;
  winMessage.textContent = '';
};
