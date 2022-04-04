import {
  SEARCH,
  RESTORE_ERROR,
  SET_LOADING,
  IS_EMPTY_SEARCH,
  GET_COUNTRY_BY_ID,
} from "../actions";

const initialState = {
  city: {},
  cities: [],
  error: false,
  loading: false,
  isEmptySearch: true,
};

export default function reducer(state = initialState, action) {
  if (action.type === SEARCH) {
    if (!action.payload.error) {
      const readyExist = state.cities.find(
        (city) => city.request.query === action.payload.request.query
      );
      if (!readyExist) {
        return {
          ...state,
          cities: [...state.cities, action.payload],
          loading: false,
          isEmptySearch: true,
        };
      } else {
        return {
          ...state,
          loading: false,
          isEmptySearch: true,
        };
      }
    } else {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
  }

  if (action.type === GET_COUNTRY_BY_ID) {
    return {
      ...state,
      city: action.payload,
    };
  }

  if (action.type === RESTORE_ERROR) {
    return {
      ...state,
      error: false,
    };
  }

  if (action.type === SET_LOADING) {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === IS_EMPTY_SEARCH) {
    return {
      ...state,
      isEmptySearch: action.payload,
    };
  }

  return state;
}
