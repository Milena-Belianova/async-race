export const createHeaderFragment = (): DocumentFragment => {
  const fragment: DocumentFragment = document.createDocumentFragment();

  const header: HTMLDivElement = document.createElement('div');
  header.className = 'header';

  const toGarageBtn: HTMLButtonElement = document.createElement('button');
  toGarageBtn.id = 'toGarage';
  toGarageBtn.className = 'button button_color-green';
  toGarageBtn.textContent = 'TO GARAGE';
  // toGarageBtn.addEventListener('click', showGaragePage);

  const toWinnersBtn: HTMLButtonElement = document.createElement('button');
  toWinnersBtn.id = 'toWinners';
  toWinnersBtn.className = 'button button_color-green';
  toWinnersBtn.textContent = 'TO WINNERS';
  // toGarageBtn.addEventListener('click', showWinnersPage);

  header.append(toGarageBtn, toWinnersBtn);

  fragment.append(header);
  return fragment;
};
