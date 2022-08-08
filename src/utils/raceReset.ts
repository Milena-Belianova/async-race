import { state } from '..';
import { onEngineStartBtnClick, onEngineStopBtnClick } from './startStopEngine';

export const onRaceBtnClick = async (): Promise<void> => {
  state.race = true;
  state.cars?.forEach((car) => onEngineStartBtnClick(car.id, car.name));

  // Btns
  const raceBtn = document.getElementById('raceBtn') as HTMLButtonElement;
  const resetBtn = document.getElementById('resetBtn') as HTMLButtonElement;
  raceBtn.setAttribute('disabled', 'disabled');
  resetBtn.removeAttribute('disabled');
};

export const onResetBtnClick = async (): Promise<void> => {
  state.cars?.forEach((car) => onEngineStopBtnClick(car.id));

  // Btns
  const raceBtn = document.getElementById('raceBtn') as HTMLButtonElement;
  const resetBtn = document.getElementById('resetBtn') as HTMLButtonElement;
  resetBtn.setAttribute('disabled', 'disabled');
  raceBtn.removeAttribute('disabled');
  const winMessage = document.getElementById('winMessage') as HTMLDivElement;
  winMessage.textContent = '';
};
