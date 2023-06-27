import Case from "../components/Case";
import PropTypes from "prop-types";
import { useState } from "react";
function Recipe(props) {
  return (
    <ol>
      <li>Boil {props.drinkers} cups of water.</li>
      <li>
        Add {props.drinkers} spoons of tea and {0.5 * props.drinkers} spoons of
        spice.
      </li>
      <li>
        Add {(1 / 2) * props.drinkers} cups of milk to boil and sugar to taste.
      </li>
    </ol>
  );
}
function DisplayToDoList({ data }) {
  const arr = data;
  const listItems = arr.map((val, index) => <li key={index}>{val}</li>);
  return (
    <>
      <h2>My ToDoList Today!</h2>
      <ul className="list-inside list-disc">{listItems}</ul>
    </>
  );
}
function InputToDoList({ handleSubmit }) {
  const [tugas, setTugas] = useState("");
  const handleChange = (e) => {
    setTugas(e.target.value);
  };
  const submitFunc = (e) => {
    e.preventDefault();
    if (tugas !== "") {
      handleSubmit(tugas);
      setTugas("");
    }
  };
  return (
    <form onSubmit={submitFunc}>
      <input
        type="text"
        onChange={handleChange}
        value={tugas}
        className="mr-2 border-2 border-black"
      />
      <button type="submit">Add</button>
    </form>
  );
}
export default function Day2() {
  const [list, setList] = useState(["Tidur", "Makan", "BAB"]);

  function addList(tugas) {
    setList([...list, tugas]);
  }
  return (
    <Case>
      <h1>
        <b>
          In the day 2 i am learning about router dom, like the navigation in
          this page.
        </b>
      </h1>
      <h2>For two</h2>
      <Recipe drinkers={2} />
      <h2>For a gathering</h2>
      <Recipe drinkers={4} />
      <hr></hr>
      <h1>
        <b>I will learning again about how to create to do list</b>
      </h1>
      <InputToDoList handleSubmit={addList} />
      <DisplayToDoList data={list} />
      <hr></hr>
      <h1><b>Aku menambahkan fallback page yang bisa meredirect kehalaman utama lagi</b></h1>
    </Case>
  );
}

Recipe.propTypes = {
  drinkers: PropTypes.number.isRequired
};
InputToDoList.propTypes = {
  handleSubmit: PropTypes.string.isRequired
};
DisplayToDoList.propTypes = {
  data: PropTypes.string.isRequired
};
