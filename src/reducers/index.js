export let reducer = (state, action) => {
  switch (action.type) {
    case 'addBook':
      return { ...state, books: [...action.payload] };
    default:
      return;
  }
};
