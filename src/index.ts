import './reset.scss';
import './global.scss';
import { State } from './components/state';
import { renderGaragePage } from './pages/garage/render/renderGaragePage';

export const state = new State();
// generateCars(10);
await state.loadCars();
await state.loadWinners();

export const render = (): void => {
  renderGaragePage();
};

render();
