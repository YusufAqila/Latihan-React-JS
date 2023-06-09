import React, { useState } from "react";

function Counter (props) {
  

  return (
    <div>
      <p contentEditable={true} onInput={props.edit} >{props.data}</p>
      
    </div>
  );
}
function AddButton (props) {
  return (
    <button onClick={props.data}>Add</button>
  )
}
class Counter2 extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      counter: 0,
    }
  }
  addCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };
  editCounter = (e) => {
    const newCounter = parseInt(e.target.innerText);
    if (!isNaN(newCounter)) {
      this.setState(() => ({
        counter: newCounter,
      }));
    }
  }
 
  render() {
    return (
      <div>
        <p contentEditable={true} onInput={this.editCounter}>{this.state.counter}</p>
      <button onClick={this.addCounter}>Add</button>
      </div>
    );
  }
  
}
function InputToDoList (props){
  const [tugas, setTugas] = useState('');
  const handleChange = (e) => {
    setTugas(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (tugas !== ''){
      props.handleSubmit(tugas);
      setTugas('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={tugas}/>
      <button type="submit">Add</button>
    </form>
  );
}
function DisplayToDoList (props){
  const arr = props.data;
  const listItems = arr.map((val, index) => <li key={index}>{val.value}</li>);
  return  <ul>{listItems}</ul>;
}
function ToDoList () {
  const [list, setList] = useState([{value: 'Tidur'}, {value: 'Belajar'}, {value: 'Coding'}]);

  function addList (tugas) {
    const newItems = { value: tugas };
    setList([...list, newItems]);
  }
  return (
    <div>
        <InputToDoList handleSubmit={addList} />
      <DisplayToDoList data={list} />
    </div>
  );
}
export default function App() {
  const [counter, setCounter] = useState(0);
  function tambahCounter () {
    setCounter(counter + 1);
  }
  function editCounter (e) {
    const newCounter = parseInt(e.target.innerText);
    !isNaN(newCounter) && setCounter(newCounter);
    
  }
  return (
    <div>
      <h1>Belajar React</h1>
      <Counter data={counter}  edit={editCounter}  />
      <AddButton data={tambahCounter} />
      <h1>Counter Class Component</h1>
      <Counter2 />
      <h1>To Do List</h1>
      <ToDoList />
    </div>
  );
}
