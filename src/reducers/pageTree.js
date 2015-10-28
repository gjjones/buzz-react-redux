const initialState = {
  pageTree: [],
};

export function pageTree(state = initialState, action) {
  switch (action.type) {
  case 'PAGETREE_ADD':
    return {
      ...state,
      pageTree: [
        ...state.pageTree,
        action.componentConfig
      ],
    };

  case 'PAGETREE_DELETE':
    return {
      ...state,
      pageTree: [
        ...state.pageTree.slice(1, state.pageTree.length)
      ],
    };

  case 'PAGETREE_SET':
    return {
      ...state,
      pageTree: [
        action.pageConfig
      ],
    };

  default:
    return state;
  }
}
