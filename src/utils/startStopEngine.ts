import { state, updateState } from '..';
import { drive, Engine, startEngine, stopEngine } from '../components/api';
import { CarView } from '../components/state';
import { createNewWinner } from './createWinner';

const timers: Record<number, NodeJS.Timer> = {};

const showWinMessage = (name: string, time: number): void => {
  updateState({ winMessage: { name, time } });
};

export const updateCarInState = (car: CarView, changes: Partial<CarView>, render = true): void => {
  const carFromState = state.cars?.find((c) => c.id === car.id);
  const cars = state.cars?.map((c) => (c === carFromState ? { ...carFromState, ...changes } : c));

  if (render) {
    updateState({
      cars,
    });
  } else {
    state.cars = cars;
  }
};

const stopRacing = (car: CarView): void => {
  clearInterval(timers[car.id]);
  updateCarInState(car, { isRacing: false });
};

// eslint-disable-next-line max-len
const startAnimation = (car: CarView, velocity: number, distance: number, boxWidth: number): void => {
  const { id, name } = car;
  const scale = distance / (boxWidth - 200); // масштаб, 1 / px
  const timeInitial = distance / velocity;

  const start = Date.now();
  updateCarInState(car, { isRacing: true, position: '1px' });
  timers[id] = setInterval(() => {
    const timePassed = Date.now() - start;
    if (timePassed < timeInitial) {
      const carSvgDiv = document.getElementById(`divSvg${id}`) as HTMLDivElement;
      // updateCarInState(car, { position: `${(timePassed * velocity) / scale}px` });
      // eslint-disable-next-line no-param-reassign
      const nextPosition = `${(timePassed * velocity) / scale}px`;
      updateCarInState(car, { position: nextPosition }, false);
      if (carSvgDiv) {
        carSvgDiv.style.left = nextPosition;
      }
    } else {
      stopRacing(car);
      if (state.race) {
        const time = timeInitial / 1000;
        showWinMessage(name, time);
        state.race = false;
        createNewWinner(id, time);
      }
    }
  }, 20);
};

export const onEngineStartBtnClick = async (car: CarView): Promise<void> => {
  const { id } = car;
  updateCarInState(car, { position: '0px' });
  const carBox = document.getElementById(`carWrapper${id}`) as HTMLDivElement;
  const boxWidth = carBox.clientWidth;
  const { velocity, distance }: Engine = await startEngine(id);

  // car animation starts
  startAnimation(car, velocity, distance, boxWidth);

  const driveStatus: { success: boolean } = await drive(id);
  if (!driveStatus.success) {
    stopRacing(car);
  }
};

export const onEngineStopBtnClick = async (car: CarView): Promise<void> => {
  const { id } = car;
  await stopEngine(id);

  // car returned to it's initial place
  stopRacing(car);
  updateCarInState(car, { position: '0px' });
};
