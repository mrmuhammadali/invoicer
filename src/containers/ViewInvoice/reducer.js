// @flow
// src
import * as actionTypes from '../../actions';
import {Values} from '../../types';

type State = {
  isLoading: boolean,
  error: {},
  payload: Values,
};

export function reducer(state: State, action) {
  const {type, payload, error} = action;
  switch (type) {
    case actionTypes.FETCH_INVOICE_BY_ID: {
      return {...state, isLoading: true, error: null};
    }
    case actionTypes.FETCH_INVOICE_BY_ID_FAILURE: {
      return {...state, isLoading: false, error};
    }
    case actionTypes.FETCH_INVOICE_BY_ID_SUCCESS: {
      return {...state, isLoading: false, error: null, payload};
    }
    default:
      return state;
  }
}
