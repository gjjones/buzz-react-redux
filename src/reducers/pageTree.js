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
        {
          component: action.componentName,
          children: []
        },
      ],
    };

  case 'PAGETREE_DELETE':
    return {
      ...state,
      pageTree: [
        ...state.pageTree.slice(1, state.pageTree.length)
      ],
    };

  default:
    return state;
  }
}
