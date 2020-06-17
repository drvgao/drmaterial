import { API_CALL_SUCCESS } from "../actiontypes";

export const getDog = (dog) => ({ type: API_CALL_SUCCESS, dog })