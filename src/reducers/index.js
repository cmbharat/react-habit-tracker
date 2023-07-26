// import { combineReducers } from "redux";

// import {
//   ADD_HABIT,
//   DELETE_HABIT,
//   HABIT_NONE,
//   HABIT_DONE,
//   HABIT_UNDONE,
// } from "../actions";

// const initialState = [];

// let id = 1;
// export function habits(state = initialState, action) {
//   console.log("state==>", state, "action--->", action);
//   switch (action.type) {
//     case ADD_HABIT:
//       const today = new Date();
//       let day = today.getDate() - today.getDay();
//       const month = today.getMonth();
//       const year = today.getFullYear();

//       const habit = {
//         id: id++,
//         name: action.name,
//         weekLog: [
//           {
//             id: 0,
//             day: "Sunday",
//             dd: day,
//             mm: month,
//             yyyy: year,
//             isDone: "",
//           },
//           {
//             id: 1,
//             day: "Monday",
//             dd: day + 1,
//             mm: month,
//             yyyy: year,
//             isDone: "",
//           },
//           {
//             id: 2,
//             day: "Tuesday",
//             dd: day + 2,
//             mm: month,
//             yyyy: year,
//             isDone: "",
//           },
//           {
//             id: 3,
//             day: "Wednesday",
//             dd: day + 3,
//             mm: month,
//             yyyy: year,
//             isDone: "",
//           },
//           {
//             id: 4,
//             day: "Thursday",
//             dd: day + 4,
//             mm: month,
//             yyyy: year,
//             isDone: "",
//           },
//           {
//             id: 5,
//             day: "Friday",
//             dd: day + 5,
//             mm: month,
//             yyyy: year,
//             isDone: "",
//           },
//           {
//             id: 6,
//             day: "Saturday",
//             dd: day + 6,
//             mm: month,
//             yyyy: year,
//             isDone: "",
//           },
//         ],
//       };
//       const tempHabits = [...state, habit];
//       console.log(tempHabits);
//       return tempHabits;
//     case DELETE_HABIT:
//       const filteredHabits = state.filter(
//         (habit) => habit.id !== action.payload
//       );
//       return filteredHabits;
//     case HABIT_DONE:
//       let allHabits = state;
//       console.log("allHabits===> in habbit done", allHabits);

//       console.log("localStorage in Habit Done", localStorage.getItem("id"));
//       for (let i = 0; i < allHabits.length; i++) {
//         if (allHabits[i].id === Number(localStorage.getItem("id"))) {
//           allHabits[i].weekLog[action.id].isDone = true;
//         }
//       }
//       const tempHabitsDone = [...state, allHabits];
//       console.log(tempHabitsDone);
//       return tempHabitsDone;
//     case HABIT_UNDONE:
//       let allHabitsForUndone = state;
//       for (let i = 0; i < allHabitsForUndone.length; i++) {
//         if (allHabitsForUndone[i].id === Number(localStorage.getItem("id"))) {
//           allHabitsForUndone[i].weekLog[action.id].isDone = false;
//         }
//       }
//       return allHabitsForUndone;

//     case HABIT_NONE:
//       let allHabitsForNone = state;
//       for (let i = 0; i < allHabitsForNone.length; i++) {
//         if (allHabitsForNone[i].id === Number(localStorage.getItem("id"))) {
//           allHabitsForNone[i].weekLog[action.id].isDone = "";
//         }
//       }
//       return allHabitsForNone;
//     default:
//       return state;
//   }
// }
// export default combineReducers({
//   habits: habits,
// });
import { createSlice } from "@reduxjs/toolkit";
let id = 1;

const habitSlice = createSlice({
  name: "habits",
  initialState: [],
  reducers: {
    addHabit: (state, action) => {
      const today = new Date();
      let day = today.getDate() - today.getDay();
      const month = today.getMonth();
      const year = today.getFullYear();

      const habit = {
        id: id++,
        name: action.payload,
        weekLog: [
          {
            id: 0,
            day: "Sunday",
            dd: day,
            mm: month,
            yyyy: year,
            isDone: "",
          },
          {
            id: 1,
            day: "Monday",
            dd: day + 1,
            mm: month,
            yyyy: year,
            isDone: "",
          },
          {
            id: 2,
            day: "Tuesday",
            dd: day + 2,
            mm: month,
            yyyy: year,
            isDone: "",
          },
          {
            id: 3,
            day: "Wednesday",
            dd: day + 3,
            mm: month,
            yyyy: year,
            isDone: "",
          },
          {
            id: 4,
            day: "Thursday",
            dd: day + 4,
            mm: month,
            yyyy: year,
            isDone: "",
          },
          {
            id: 5,
            day: "Friday",
            dd: day + 5,
            mm: month,
            yyyy: year,
            isDone: "",
          },
          {
            id: 6,
            day: "Saturday",
            dd: day + 6,
            mm: month,
            yyyy: year,
            isDone: "",
          },
        ],
      };
      const tempHabits = [...state, habit];
      return tempHabits;
    },

    deleteHabit: (state, action) => {
      const tempHabits = state.filter((habit) => habit.id !== action.payload);
      return tempHabits;
    },
    habitDone: (state, action) => {
      let tempHabits = state;
      for (let i = 0; i < tempHabits.length; i++) {
        if (tempHabits[i].id === Number(localStorage.getItem("id"))) {
          tempHabits[i].weekLog[action.payload].isDone = true;
        }
      }
      return tempHabits;
    },
    habitUnDone: (state, action) => {
      let tempHabits = state;
      for (let i = 0; i < tempHabits.length; i++) {
        if (tempHabits[i].id === Number(localStorage.getItem("id"))) {
          tempHabits[i].weekLog[action.payload].isDone = false;
        }
      }
      return tempHabits;
    },
    habitNone: (state, action) => {
      let tempHabits = state;
      for (let i = 0; i < tempHabits.length; i++) {
        if (tempHabits[i].id === Number(localStorage.getItem("id"))) {
          tempHabits[i].weekLog[action.payload].isDone = "";
        }
      }
      return tempHabits;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addHabit, deleteHabit, habitDone, habitUnDone, habitNone } =
  habitSlice.actions;

export default habitSlice.reducer;
