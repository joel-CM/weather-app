const key = "eb4a72f6ca8f901d201c6baa481d2004";
export const SEARCH = "SEARCH";
export const RESTORE_ERROR = "RESTORE_ERROR";
export const SET_LOADING = "SET_LOADING";
export const IS_EMPTY_SEARCH = "IS_EMPTY_SEARCH";
export const GET_COUNTRY_BY_ID = "GET_COUNTRY_BY_ID";

export const getCountryInfo = (city) => {
  return async function (dispatch) {
    const res = await fetch(
      `http://api.weatherstack.com/current?access_key=${key}&query=${city}`
    );
    const data = await res.json();
    dispatch({
      type: SEARCH,
      payload: data,
    });
  };
};

export const getCountryById = (city) => {
  return async function (dispach) {
    const res = await fetch(
      `http://api.weatherstack.com/current?access_key=${key}&query=${city}`
    );
    const data = await res.json();
    dispach({
      type: GET_COUNTRY_BY_ID,
      payload: data,
    });
  };
};

export const restoreError = () => {
  return {
    type: RESTORE_ERROR,
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
