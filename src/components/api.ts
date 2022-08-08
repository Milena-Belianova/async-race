const base = 'http://127.0.0.1:3000';

const garage = `${base}/garage`;
const winners = `${base}/winners`;
const engine = `${base}/engine`;

export type Car = {
  name: string;
  color: string;
  id: number;
};

export type CarsWithCount = {
  items: Array<Car>;
  count: number;
};

export type CarBody = {
  name: string;
  color: string;
};

export type Engine = {
  velocity: number;
  distance: number;
};

export type Wins = {
  id: number;
  wins: number;
  time: number;
};

export type WinsBody = {
  wins: number;
  time: number;
};

export type WinsCars = {
  id: number;
  wins: number;
  time: number;
  car: Car;
};

export type WinsWithCount = {
  items: Array<WinsCars>;
  count: number;
};

export const getCars = async (page: number, limit = 7): Promise<CarsWithCount> => {
  const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);

  return {
    items: await response.json(),
    count: Number(response.headers.get('X-Total-Count')),
  };
};

export const getCar = async (id: number): Promise<Car> => (await fetch(`${garage}/${id}`)).json();

export const createCar = async (body: CarBody): Promise<Car> => (
  await fetch(garage, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })
).json();

export const deleteCar = async (id: number): Promise<void> => (
  await fetch(`${garage}/${id}`, {
    method: 'DELETE',
  })
).json();

export const updateCar = async (id: number, body: CarBody): Promise<Car> => (
  await fetch(`${garage}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })
).json();

export const startEngine = async (id: number): Promise<Engine> => {
  const response = await fetch(`${engine}?id=${id}&status=started`, {
    method: 'PATCH',
  });
  return response.json();
};

export const stopEngine = async (id: number): Promise<Engine> => (
  await fetch(`${engine}?id=${id}&status=stopped`, {
    method: 'PATCH',
  })
).json();

export const drive = async (id: number): Promise<{ success: boolean }> => {
  const response = await fetch(`${engine}?id=${id}&status=drive`, {
    method: 'PATCH',
  }).catch();

  return response.status !== 200 ? { success: false } : { ...(await response.json()) };
};

const getSortOrder = (sort: ['id' | 'wins' | 'time'] | undefined, order: ['ASC' | 'DESC'] | undefined): string => {
  if (sort && order) {
    return `&_sort=${sort}&_order=${order}`;
  }
  return '';
};

export type GetWinnersParams = {
  page: number;
  limit?: number;
  sort?: ['id' | 'wins' | 'time'];
  order?: ['ASC' | 'DESC'];
};

export const getWinners = async ({
  page, limit = 10, sort, order,
}: GetWinnersParams): Promise<WinsWithCount> => {
  const response = await fetch(`${winners}?_page=${page}&_limit=${limit}${getSortOrder(sort, order)}`);
  const items: Array<Wins> = await response.json();

  return {
    items: await Promise.all(items.map(async (winner) => ({
      ...winner, car: await getCar(winner.id),
    }))),
    count: Number(response.headers.get('X-Total-Count')),
  };
};

export const getWinner = async (id: number): Promise<Wins> => (await fetch(`${winners}/${id}`)).json();

export const deleteWinner = async (id: number): Promise<void> => (await fetch(`${winners}/${id}`, { method: 'DELETE' })).json();

export const createWinner = async (body: Wins): Promise<Wins> => (
  await fetch(winners, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })
).json();

export const updateWinner = async (id: number, body: WinsBody): Promise<Wins> => (
  await fetch(`${garage}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })
).json();
