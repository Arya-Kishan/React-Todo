import './App.css';
import React, { useState } from 'react'
import Box from './components/Box';
import Error from './components/Error';


function App() {

  const [inputVal, setInputVal] = useState("")
  const [arr, setArr] = useState(["Tomato", "Onion"])
  const [toggle, setToggle] = useState(false)
  const [doneChange, setDoneChange] = useState()
  const [id, setId] = useState()
  const [back, setBack] = useState("0px")
  const [error, setError] = useState(false)
  const [errormessage, setErrormessage] = useState("")
  const [color,setColor] = useState("")

  const handleDoneChange = (e) => {
    setDoneChange(e.target.value)
  }

  const handleDone = () => {
    setToggle(false)
    arr[id] = doneChange;
    setBack("0px")
    setError(true)
    setColor("green")
    setTimeout(() => {
      setError(false)
    }, 1000);
    setErrormessage("EDITED")
  }

  const handleEdit = (id, text) => {
    setToggle(true)
    setDoneChange(text)
    setId(id)
    setBack("5px")
  }

  const handleAdd = () => {
    if (inputVal.length > 1) {
      setArr((preval) => {
        return [...preval, inputVal]
      })
      setInputVal(" ")
    } else {
      setError(true)
      setColor("yellow")
      setErrormessage("PLEASE WRITE SOMETHING")
      setTimeout(() => {
        setError(false)
      }, 1000);
    }
  }

  const handleChange = (e) => {
    setInputVal(e.target.value)
  }

  const handleDelete = (id) => {
    let a = arr.filter((e) => {
      return arr.indexOf(e) !== id
    })
    setArr(a)
    setInputVal(" ")
    setError(true)
    setColor("red")
    setTimeout(() => {
      setError(false)
    }, 1000);
    setErrormessage("DELETED")
  }

  return (
    <>
      <section className='head'>TODO LIST</section>
      
      <div className="error_pop">{error && <Error message={errormessage} color={color} />}</div>


      <section style={{ filter: `blur(${back})` }}>



        <div className="heading"><h1><b>NOTES</b></h1></div>


        <div className="box1">
          <input type="text" value={inputVal} onChange={handleChange} placeholder='Write...' />
          <button className='btn_add' onClick={handleAdd}>Add</button>
        </div>


        <div className="box2">
          {arr.map((e, index) => {
            return <Box
              key={index}
              id={index}
              text={e}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          })}
        </div>


      </section>
      {toggle && <div className="pop_up">
        <h2>EDIT</h2>
        <input type="text" value={doneChange} onChange={handleDoneChange} placeholder='Edit...' />
        <button className='btn_done' onClick={() => { handleDone() }}>Done</button>
      </div>}
      <div className='gif'></div>

    </>
  );
}

export default App;