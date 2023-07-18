import { CHECKOUT_BOOKING } from "../types";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHECKOUT_BOOKING:
      return action.payload;
    default:
      return state;
  }
}
