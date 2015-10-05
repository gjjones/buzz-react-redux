export function add(componentName) {
  return {
    type: 'PAGETREE_ADD',
    componentName,
  };
}

export function del(componentName) {
  return {
    type: 'PAGETREE_DELETE',
    componentName,
  };
}
