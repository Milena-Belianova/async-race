import { loadWinners, state, updateState } from '../index';

export const onWinsSortBtnClick = (): void => {
  if (state.order?.[0] === 'DESC' || state.order === undefined) {
    updateState({ sort: ['wins'], order: ['ASC'] });
  } else {
    updateState({ sort: ['wins'], order: ['DESC'] });
  }
  loadWinners();
};

export const onBestTimeSortBtnClick = (): void => {
  if (state.order?.[0] === 'DESC' || state.order === undefined) {
    updateState({ sort: ['time'], order: ['ASC'] });
  } else {
    updateState({ sort: ['time'], order: ['DESC'] });
  }
  loadWinners();
};
