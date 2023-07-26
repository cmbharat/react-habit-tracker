//Action types
export const ADD_HABIT = "ADD_HABIT";
export const DELETE_HABIT = "DELETE_HABIT";
export const HABIT_DONE = "HABIT_DONE";
export const HABIT_UNDONE = "HABIT_UNDONE";
export const HABIT_NONE = "HABIT_NONE";

//Action Creators
export function addHabit(name) {
  return {
    type: ADD_HABIT,
    name,
  };
}

export function deleteHabit(id) {
  return {
    type: DELETE_HABIT,
    id,
  };
}
export function habitDone(id) {
  return {
    type: HABIT_DONE,
    id,
  };
}

export function habitUnDone(id) {
  return {
    type: HABIT_UNDONE,
    id,
  };
}

export function habitNone(id) {
  return {
    type: HABIT_NONE,
    id,
  };
}
