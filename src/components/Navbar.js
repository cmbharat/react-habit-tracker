import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../reducers";
import Modal from "react-responsive-modal";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const [habitName, setHabitName] = useState("");

  // function for add habit
  const handleSave = () => {
    const habitName = document.getElementById("habitName").value;
    if (habitName === "") {
      alert("kindly enter habit");
      return;
    }
    dispatch(addHabit(habitName));

    setHabitName("");
    setOpen(false);
  };

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <div className="logo d-flex align-items-center me-auto me-xl-0">
            <h1>Habit Tracker</h1>
            <span>.</span>
          </div>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <Link to="/" className="active">
                  All Habits
                </Link>
              </li>
            </ul>
          </nav>
          <button className="btn-getstarted" onClick={onOpenModal}>
            Add Habit
          </button>

          <Modal open={open} onClose={onCloseModal} center>
            <div className="modalContentContainer">
              <div className="modalTitle">Create a new Habit</div>
              <div className="inputSection">
                <label htmlFor="createGoal">Enter a Habit Name</label>
                <input
                  type="text"
                  value={habitName}
                  id="habitName"
                  placeholder="Habit Name"
                  maxLength="60"
                  onChange={(e) => {
                    setHabitName(e.target.value);
                  }}
                />
              </div>

              <div className="buttonContainer">
                <div
                  className="submitButton"
                  type="submit"
                  onClick={handleSave}
                >
                  Add Habit
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </header>
    </>
  );
};

export default Navbar;
