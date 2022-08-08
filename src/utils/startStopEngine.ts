import { state } from '..';
import {
  drive, Engine, startEngine, stopEngine,
} from '../components/api';
import { createNewWinner } from './createWinner';

const timers: Record<number, NodeJS.Timer> = {};

const showWinMessage = (name: string, time: number): void => {
  const winMessage = document.getElementById('winMessage') as HTMLDivElement;
  winMessage.textContent = `${name} went first [${time.toFixed(2)}s]!`;
};

const startAnimation = (id: number, name: string, velocity: number, distance: number): void => {
  const carSvgDiv = document.getElementById(`divSvg${id}`) as HTMLDivElement;
  const carBox = document.getElementById(`carWrapper${id}`) as HTMLDivElement;
  const boxWidth = carBox.clientWidth;
  const scale = distance / (boxWidth - 200); // масштаб, 1 / px
  const timeInitial = distance / velocity;

  const start = Date.now();

  timers[id] = setInterval(() => {
    const timePassed = Date.now() - start;

    carSvgDiv.style.left = `${(timePassed * velocity) / scale}px`;

    if (timePassed > timeInitial) {
      clearInterval(timers[id]);
      if (state.race) {
        const time = (timeInitial / 1000);
        showWinMessage(name, time);
        state.race = false;
        createNewWinner(id, time);
      }
    }
  }, 20);
};

export const onEngineStartBtnClick = async (id: number, name: string): Promise<void> => {
  const { velocity, distance }: Engine = await startEngine(id);

  const aBtn = document.getElementById(`aBtn${id}`) as HTMLButtonElement;
  const bBtn = document.getElementById(`bBtn${id}`) as HTMLButtonElement;
  aBtn.setAttribute('disabled', 'disabled');
  bBtn.removeAttribute('disabled');

  // car animation starts
  startAnimation(id, name, velocity, distance);

  const driveStatus: { success: boolean } = await drive(id);
  if (!driveStatus.success) {
    clearInterval(timers[id]);
  }
};

export const onEngineStopBtnClick = async (id: number): Promise<void> => {
  const carSvgDiv = document.getElementById(`divSvg${id}`) as HTMLDivElement;
  // UI is waiting for answer for stopping engine
  await stopEngine(id);

  // car returned to it's initial place
  clearInterval(timers[id]);
  carSvgDiv.style.left = '0';

  // Btns
  const aBtn = document.getElementById(`aBtn${id}`) as HTMLButtonElement;
  const bBtn = document.getElementById(`bBtn${id}`) as HTMLButtonElement;
  bBtn.setAttribute('disabled', 'disabled');
  aBtn.removeAttribute('disabled');
};
