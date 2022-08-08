import './reset.scss';
import './global.scss';
import { State } from './components/state';
import { renderGaragePage } from './pages/garage/render/renderGaragePage';

export const state = new State();
await state.loadCars();

renderGaragePage();
