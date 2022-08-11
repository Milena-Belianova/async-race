import { state, updateState } from '..';
import { onEngineStartBtnClick, onEngineStopBtnClick } from './startStopEngine';

export const onRaceBtnClick = async (): Promise<void> => {
  updateState({ race: true });
  if (state.cars) {
    await Promise.all(state.cars.map((car) => onEngineStartBtnClick(car)));
  }
};

export const onResetBtnClick = async (): Promise<void> => {
  updateState({ race: false });
  if (state.cars) {
    await Promise.all(state.cars.map((car) => onEngineStopBtnClick(car)));
  }

  updateState({ winMessage: undefined });
};
