type ButtonParams = {
  id?: string,
  className: string,
  textContent?: string,
  attr?: {name: string, value: string},
}

type InputParams = {
  id?: string,
  type?: string,
  className: string,
  attr?: {name: string, value: string},
  disabled?: boolean,
}

export const createButtonElement = ({
  id, className, textContent, attr,
}: ButtonParams): HTMLButtonElement => {
  const el: HTMLButtonElement = document.createElement('button');
  el.id = `${id}`;
  el.className = `${className}`;
  el.textContent = `${textContent}`;
  if (attr) {
    el.setAttribute(attr.name, attr.value);
  }

  return el;
};

export const createInputElement = ({
  id, type, className, attr, disabled = false,
}: InputParams): HTMLInputElement => {
  const el: HTMLInputElement = document.createElement('input');
  el.id = `${id}`;
  el.type = `${type}`;
  el.className = `${className}`;
  if (attr) {
    el.setAttribute(attr.name, attr.value);
  }
  el.disabled = disabled;

  return el;
};
