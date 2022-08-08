import './reset.scss';
import './global.scss';
import { State } from './components/state';
import { renderGaragePage } from './pages/garage/render/renderGaragePage';
import { renderWinnersPage } from './pages/winners/render/renderWinnersPage';

export const state = new State();

const render = async (): Promise<void> => {
  if (state.view === 'garage') {
    await state.loadCars();
    renderGaragePage();
  } else if (state.view === 'winners') {
    await state.loadWinners();
    renderWinnersPage();
  }
};

export const updateState = (stateChanges: Partial<State>): void => {
  Object.assign(state, stateChanges);
  render();
};

render();
