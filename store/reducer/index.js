import {
  SEARCH,
  RESTORE_ERROR,
  SET_LOADING,
  IS_EMPTY_SEARCH,
  GET_CITY_BY_ID,
  LOAD_CITIES,
  RELOAD_CITIES,
} from "../actions";

const initialState = {
  city: {},
  cities: [],
  error: false,
  loading: false,
  reloadingCities: false,
  isEmptySearch: true,
};

export default function reducer(state = initialState, action) {
  if (action.type === LOAD_CITIES) {
    return {
      ...state,
      cities: action.payload,
      reloadingCities: false,
    };
  }

  if (action.type === RELOAD_CITIES) {
    return {
      ...state,
      reloadingCities: true,
    };
  }

  if (action.type === SEARCH) {
    const { city, data } = action.payload;
    const searchedCity = data.filter((e) =>
      e.name.toLowerCase().includes(city.toLowerCase())
    );
    if (searchedCity) {
      return {
        ...state,
        cities: searchedCity,
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
  }

  if (action.type === GET_CITY_BY_ID) {
    const { cityName, data } = action.payload;
    const searchedCity = data.find((c) => c.name === cityName);
    if (searchedCity) {
      return {
        ...state,
        city: searchedCity,
      };
    } else {
      return {
        ...state,
      };
    }
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
