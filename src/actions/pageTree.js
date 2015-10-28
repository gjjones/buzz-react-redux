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

export function set(pageConfig) {
	if (typeof pageConfig === 'string') {
		try {
			pageConfig = JSON.parse(pageConfig);
		} catch (e) {
			return {};
		}
	}
  return {
    type: 'PAGETREE_SET',
    pageConfig,
  };
}
