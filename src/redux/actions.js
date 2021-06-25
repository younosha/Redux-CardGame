import { CREATE_NAME, CREATE_POINTS, CREATE_TIME, CREATE_GRID } from "./types";

export function createName(namer) {
  return {
    type: CREATE_NAME,
    namer,
  };
}
export function createPoints(points) {
  return {
    type: CREATE_POINTS,
    points,
  };
}
export function createTime(time) {
  return {
    type: CREATE_TIME,
    time,
  };
}
export function createGrid(grid) {
  return {
    type: CREATE_GRID,
    grid,
  };
}
