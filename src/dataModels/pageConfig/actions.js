import * as actionTypes from './actionTypes';

export function add(componentConfig) {
  return {
    type: actionTypes.ADD,
    payload: componentConfig
  };
}

export function del() {
  return {
    type: actionTypes.DELETE
  };
}

export function set(pageConfig) {
  return {
    type: actionTypes.SET,
    payload: pageConfig
  };
}
