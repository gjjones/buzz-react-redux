export function add(componentConfig) {
  return {
    type: 'PAGETREE_ADD',
    componentConfig,
  };
}

export function del(componentConfig) {
  return {
    type: 'PAGETREE_DELETE',
    componentConfig,
  };
}
