import React from "react";
import { Link } from "react-router-dom";
import DayView from "./DayView";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const WeeklyView = () => {
  let habitsState = useSelector((state) => state.habits);

  let habit = {};

  for (let i = 0; i < habitsState.length; i++) {
    if (habitsState[i].id === Number(localStorage.getItem("id"))) {
      habit = habitsState[i];
    }
  }

  return (
    <>
      <Navbar name="Week View" />
      {habit.weekLog ? (
        <div className="days-container-body">
          <h1 className="text-center" style={{ textTransform: "capitalize" }}>
            {habit.name}
          </h1>
          <div className="days-container">
            {habit.weekLog.map((day, index) => (
              <DayView day={day} key={index} />
            ))}
          </div>
          <div className="d-grid gap-2 col-6 mx-auto mt-5">
            <button className="btn btn-primary" type="button">
              <Link to="/" className="link-fonts">
                Back to Detail View
              </Link>
            </button>
          </div>
        </div>
      ) : (
        <div className="days-container-body">
          <h1 className="text-center" style={{ textTransform: "capitalize" }}>
            No Content to Display
          </h1>

          <div className="d-grid gap-2 col-6 mx-auto mt-5">
            <button className="btn btn-primary" type="button">
              <Link to="/" className="link-fonts">
                Back to Detail View
              </Link>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WeeklyView;
