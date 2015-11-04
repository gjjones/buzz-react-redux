export function add(componentConfig) {
  return {
    type: 'PAGETREE_ADD',
    payload: componentConfig
  };
}

export function del() {
  return {
    type: 'PAGETREE_DELETE'
  };
}

export function set(pageConfig) {
  return {
    type: 'PAGETREE_SET',
    payload: pageConfig
  };
}
