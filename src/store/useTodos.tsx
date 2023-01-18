interface Todos {
  isDone: boolean;
  type: never[];
  captions: string;
}

export const useTodos: Todos = {
  isDone: false,
  type: [],
  captions: '',
};
