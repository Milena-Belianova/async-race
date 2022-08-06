import './reset.scss';
import './global.scss';
import { State } from './components/state';
import { renderGaragePage } from './pages/garage/render/renderGarage';

export const state = new State();
// generateCars(10);
await state.loadCars();

export const render = (): void => {
  renderGaragePage();
};

render();
