import { CREATE_NAME, CREATE_TIME, CREATE_POINTS, CREATE_GRID } from "./types";
const initialState = [
  
];

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NAME:
      return [
        ...state,
        {
          name: action.namer,
          grid: "",
          points: "",
          time: "",
        },
      ];
    case CREATE_POINTS:
      const newState = [...state];
      newState[newState.length - 1].points = action.points;
      return [...newState];
    case CREATE_TIME:
      const newState1 = [...state];
      newState1[newState1.length - 1].time = action.time;
      return [...newState1];
    case CREATE_GRID:
      const newState2 = [...state];
      newState2[newState2.length - 1].grid = action.grid;
      return [...newState2];
    default:
      return state;
  }
};
