export const LOAD_CITIES = "LOAD_CITIES";
export const RELOAD_CITIES = "RELOAD_CITIES";
export const SEARCH = "SEARCH";
export const SET_LOADING = "SET_LOADING";
export const IS_EMPTY_SEARCH = "IS_EMPTY_SEARCH";
export const GET_CITY_BY_ID = "GET_CITY_BY_ID";

export const loadCities = () => {
  return async function (dispatch) {
    const res = await fetch("https://ws.smn.gob.ar/map_items/weather");
    const data = await res.json();
    dispatch({
      type: LOAD_CITIES,
      payload: data,
    });
  };
};

export const setReloadingCities = () => {
  return {
    type: RELOAD_CITIES,
  };
};

export const getCountryInfo = (city) => {
  return async function (dispatch) {
    const res = await fetch("https://ws.smn.gob.ar/map_items/weather");
    const data = await res.json();
    dispatch({
      type: SEARCH,
      payload: { city, data },
    });
  };
};

export const getCityById = (cityName) => {
  return async function (dispach) {
    const res = await fetch("https://ws.smn.gob.ar/map_items/weather");
    const data = await res.json();
    return dispach({
      type: GET_CITY_BY_ID,
      payload: { cityName, data },
    });
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const setIsEmptySeach = (boolean) => {
  return {
    type: IS_EMPTY_SEARCH,
    payload: boolean,
  };
};
