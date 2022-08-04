type BtnParams = {
  id?: string,
  className: string,
  textContent: string
}

const createBtnFragment = ({ id, className, textContent }: BtnParams): DocumentFragment => {
  const fragment: DocumentFragment = document.createDocumentFragment();

  const btn: HTMLButtonElement = document.createElement('button');
  btn.id = `${id}`;
  btn.className = `${className}`;
  btn.textContent = `${textContent}`;

  fragment.append(btn);
  return fragment;
};

export const createCarManagementFragment = (): DocumentFragment => {
  const fragment: DocumentFragment = document.createDocumentFragment();

  const carManagementContainer: HTMLDivElement = document.createElement('div');
  carManagementContainer.className = 'main';

  const createBtn = createBtnFragment({ id: 'createBtn', className: 'button', textContent: 'CREATE' });
  // toGarageBtn.addEventListener('click', showGaragePage);

  const updateBtn = createBtnFragment({ id: 'updateBtn', className: 'button', textContent: 'UPDATE' });
  // toGarageBtn.addEventListener('click', showWinnersPage);

  const raceBtn = createBtnFragment({ id: 'raceBtn', className: 'button button_color-green', textContent: 'RACE' });
  const resetBtn = createBtnFragment({ id: 'resetBtn', className: 'button button_color-green', textContent: 'RESET' });
  const generateCarsBtn = createBtnFragment({ id: 'generateCarsBtn', className: 'button', textContent: 'GENERATE CARS' });

  carManagementContainer.append(createBtn, updateBtn, raceBtn, resetBtn, generateCarsBtn);

  fragment.append(carManagementContainer);
  return fragment;
};
