import { state } from '../../..';
import { createButtonElement } from '../../../components/renderComponents';
import { goNextPage } from '../../../utils/switchPage';

type Car = {
  name: string;
  color: string;
};

export const createCarFragment = ({ name, color }: Car): DocumentFragment => {
  const fragment: DocumentFragment = document.createDocumentFragment();

  const carWrapper: HTMLDivElement = document.createElement('div');
  carWrapper.className = 'car-wrapper';

  // FIRST ROW
  const firstRow: HTMLDivElement = document.createElement('div');
  firstRow.className = 'car-wrapper__btns-name-row';

  const selectBtn = createButtonElement({ id: 'selectBtn', className: 'button', textContent: 'SELECT' });
  const removeBtn = createButtonElement({ id: 'removeBtn', className: 'button', textContent: 'REMOVE' });

  const carName: HTMLDivElement = document.createElement('div');
  carName.className = 'car-name';
  carName.textContent = `${name}`;

  // SECOND ROW
  const secondRow: HTMLDivElement = document.createElement('div');
  secondRow.className = 'car-wrapper__car-row';

  const aBtn = createButtonElement({
    id: 'aBtn', className: 'button engine__button', textContent: 'A', attr: { name: 'value', value: 'А' },
  });
  const bBtn = createButtonElement({
    id: 'bBtn', className: 'button engine__button', textContent: 'B', attr: { name: 'disabled', value: 'disabled' },
  });
  const carSvgDiv: HTMLDivElement = document.createElement('div');
  carSvgDiv.className = 'car-wrapper__car-svg';
  carSvgDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="80px" height="80px" viewBox="0 0 256 256" xml:space="preserve">
  <defs>
  </defs>
  <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
    <path d="M 73.615 60.086 c -4.237 0 -7.685 -3.447 -7.685 -7.684 c 0 -4.237 3.447 -7.685 7.685 -7.685 c 4.236 0 7.684 3.447 7.684 7.685 C 81.299 56.639 77.852 60.086 73.615 60.086 z M 73.615 47.718 c -2.583 0 -4.685 2.102 -4.685 4.685 s 2.102 4.684 4.685 4.684 s 4.684 -2.101 4.684 -4.684 S 76.198 47.718 73.615 47.718 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${color}; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
    <path d="M 73.609 54.899 c -0.649 0 -1.3 -0.26 -1.76 -0.729 c -0.12 -0.11 -0.22 -0.24 -0.31 -0.38 c -0.09 -0.141 -0.17 -0.28 -0.23 -0.431 c -0.069 -0.149 -0.109 -0.31 -0.149 -0.47 c -0.03 -0.16 -0.04 -0.33 -0.04 -0.49 c 0 -0.659 0.26 -1.3 0.729 -1.76 c 0.58 -0.59 1.44 -0.859 2.25 -0.689 c 0.16 0.029 0.32 0.08 0.47 0.14 c 0.15 0.07 0.301 0.14 0.431 0.229 c 0.14 0.091 0.27 0.2 0.38 0.32 c 0.47 0.46 0.729 1.101 0.729 1.76 c 0 0.16 -0.01 0.33 -0.05 0.49 c -0.029 0.16 -0.08 0.32 -0.14 0.47 c -0.061 0.15 -0.14 0.29 -0.23 0.431 c -0.09 0.14 -0.189 0.27 -0.31 0.38 C 74.92 54.64 74.27 54.899 73.609 54.899 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${color}; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
    <path d="M 19.94 54.899 c -0.66 0 -1.31 -0.27 -1.77 -0.729 s -0.73 -1.11 -0.73 -1.771 c 0 -0.659 0.27 -1.3 0.73 -1.77 c 0.93 -0.93 2.61 -0.93 3.54 0 c 0.46 0.47 0.73 1.11 0.73 1.77 c 0 0.66 -0.27 1.301 -0.73 1.771 C 21.24 54.63 20.6 54.899 19.94 54.899 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${color}; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
    <path d="M 85.347 42.526 l -23.367 -4.73 l -8.231 -4.776 c -3.501 -2.031 -7.491 -3.105 -11.538 -3.105 h -4.915 c -0.002 0 -0.004 0 -0.006 0 h -5.612 c -4.288 0 -8.558 1.058 -12.35 3.06 l -6.167 3.255 c -1.226 0.647 -2.607 0.99 -3.993 0.99 H 6.703 c -2.427 0 -4.529 1.729 -4.998 4.11 l -1.642 8.345 c -0.342 1.738 0.735 3.44 2.451 3.875 l 8.903 2.259 c -0.423 -1.054 -0.662 -2.202 -0.662 -3.405 c 0 -5.064 4.12 -9.185 9.184 -9.185 s 9.184 4.12 9.184 9.185 c 0 1.473 -0.357 2.861 -0.976 4.096 h 37.26 c -0.619 -1.235 -0.976 -2.623 -0.976 -4.096 c 0 -5.064 4.12 -9.185 9.185 -9.185 c 5.063 0 9.184 4.12 9.184 9.185 c 0 1.359 -0.305 2.646 -0.837 3.808 l 4.523 -0.491 C 88.488 55.502 90 53.817 90 51.801 v -3.584 C 90 45.465 88.043 43.072 85.347 42.526 z M 25.017 39.643 c -2.192 0 -4.313 -0.647 -6.132 -1.872 l -0.975 -0.656 l 2.819 -1.488 c 3.361 -1.775 7.148 -2.713 10.949 -2.713 h 4.432 l 1.485 6.729 H 25.017 z M 53.366 39.643 h -12.7 l -1.485 -6.729 h 3.029 c 3.519 0 6.988 0.934 10.032 2.7 l 5.752 3.337 C 56.496 39.405 54.948 39.643 53.366 39.643 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${color}; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
    <path d="M 19.939 60.086 c -4.237 0 -7.684 -3.447 -7.684 -7.684 c 0 -4.237 3.447 -7.685 7.684 -7.685 s 7.684 3.447 7.684 7.685 C 27.623 56.639 24.176 60.086 19.939 60.086 z M 19.939 47.718 c -2.583 0 -4.684 2.102 -4.684 4.685 s 2.101 4.684 4.684 4.684 c 2.583 0 4.684 -2.101 4.684 -4.684 S 22.521 47.718 19.939 47.718 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${color}; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
  </g>
  </svg>`;

  const flagSvgDiv: HTMLDivElement = document.createElement('div');
  flagSvgDiv.className = 'car-wrapper__flag-svg';
  const flagColor = 'rgb(208, 27, 27)';
  flagSvgDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="40px" height="65px" viewBox="0 0 256 256" xml:space="preserve">
  <defs>
  </defs>
  <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
    <path d="M 63.167 54.933 c -5.391 0 -10.782 -1.03 -16.136 -3.091 c -9.751 -3.754 -19.642 -3.754 -29.396 0 c -0.614 0.238 -1.306 0.156 -1.85 -0.218 c -0.543 -0.373 -0.868 -0.989 -0.868 -1.648 V 9.025 c 0 -0.827 0.509 -1.569 1.282 -1.867 c 10.707 -4.121 21.563 -4.121 32.27 0 c 9.753 3.754 19.644 3.754 29.396 0 c 0.614 -0.237 1.308 -0.155 1.851 0.218 c 0.544 0.373 0.868 0.99 0.868 1.649 v 40.95 c 0 0.827 -0.51 1.569 -1.281 1.866 C 73.949 53.902 68.558 54.933 63.167 54.933 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${flagColor}; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
    <path d="M 18.917 88 c 0 1.104 -0.896 2 -2 2 s -2 -0.896 -2 -2 V 2 c 0 -1.104 0.896 -2 2 -2 s 2 0.896 2 2" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${flagColor}; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
    <path d="M 22.021 90 H 11.814 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 10.207 c 1.104 0 2 0.896 2 2 S 23.125 90 22.021 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${flagColor}; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
  </g>
  </svg>`;

  firstRow.append(selectBtn, removeBtn, carName);
  secondRow.append(aBtn, bBtn, carSvgDiv, flagSvgDiv);
  carWrapper.append(firstRow, secondRow);
  fragment.append(carWrapper);
  return fragment;
};

export const createCarsBlockFragment = (): DocumentFragment => {
  const fragment: DocumentFragment = document.createDocumentFragment();

  const carsContainer: HTMLDivElement = document.createElement('div');
  carsContainer.className = 'cars-container';

  const heading: HTMLHeadingElement = document.createElement('h2');
  heading.className = 'heading';
  heading.textContent = 'Garage ';
  const carsAmount: HTMLSpanElement = document.createElement('span');
  carsAmount.id = 'carsAmount';
  carsAmount.className = 'heading__span';
  carsAmount.textContent = `(${state.carsCount})`;
  heading.append(carsAmount);

  const page: HTMLHeadingElement = document.createElement('h3');
  page.className = 'page';
  page.textContent = 'Page #';
  const pageNumber: HTMLSpanElement = document.createElement('span');
  pageNumber.id = 'pageNumber';
  pageNumber.className = 'page__span';
  pageNumber.textContent = `(${state.carsPage})`;
  page.append(pageNumber);

  const carFragments = state.cars!.map(createCarFragment);

  const paginationBtnContainer: HTMLDivElement = document.createElement('div');
  paginationBtnContainer.className = 'pagination-container';
  const prevBtn = createButtonElement({
    id: 'prevBtn', className: 'button button_color-green', textContent: 'PREV', attr: { name: 'disabled', value: 'disabled' },
  });
  const nextBtn = createButtonElement({
    id: 'nextBtn', className: 'button button_color-green', textContent: 'NEXT', attr: { name: 'disabled', value: 'disabled' },
  });

  if (state.carsCount <= 7 || state.carsPage === state.maxPages) {
    if (!nextBtn.getAttribute('disabled')) {
      nextBtn.setAttribute('disabled', 'disabled');
      nextBtn.removeEventListener('click', () => goNextPage());
    }
  } else if (state.carsCount > 7) {
    nextBtn.removeAttribute('disabled');
    nextBtn.addEventListener('click', () => goNextPage());
  }
  paginationBtnContainer.append(prevBtn, nextBtn);

  carsContainer.append(heading, page, ...carFragments, paginationBtnContainer);
  fragment.append(carsContainer);
  return fragment;
};
