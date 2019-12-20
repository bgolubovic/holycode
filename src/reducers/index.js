export let reducer = (state, action) => {
  switch (action.type) {
    case 'toggle':
      return { ...state, toggle: !state.toggle };
    default:
      return;
  }
};
