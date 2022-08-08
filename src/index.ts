import './reset.scss';
import './global.scss';
import { State } from './components/state';
import { renderGaragePage } from './pages/garage/render/renderGaragePage';
import { renderWinnersPage } from './pages/winners/render/renderWinnersPage';
import { getCars, getWinners } from './components/api';

export const state = new State();

const render = async (): Promise<void> => {
  if (state.view === 'garage') {
    renderGaragePage();
  } else if (state.view === 'winners') {
    renderWinnersPage();
  }
};

export const updateState = (stateChanges: Partial<State>): void => {
  Object.assign(state, stateChanges);
  render();
};

export const loadCars = async (): Promise<void> => {
  const { items, count } = await getCars(state.carsPage);
  updateState({
    cars: items,
    carsCount: count,
    maxCarPages: Math.ceil(count / 7),
  });
};

export const loadWinners = async (): Promise<void> => {
  const { items, count } = (state.sort && state.order) ? await getWinners({
    page: state.winnersPage, sort: state.sort, order: state.order,
  }) : await getWinners({ page: state.winnersPage });

  updateState({
    winners: items,
    winnersCount: count,
    maxWinnersPages: Math.ceil(count / 7),
  });
};

export const setViewAction = async (view: 'winners' | 'garage'): Promise<void> => {
  if (view === 'winners') {
    await loadWinners();
  }
  if (state.view === 'garage') {
    await loadCars();
  }
  updateState({ view });
};

await setViewAction('garage');
