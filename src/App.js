import './App.css';
import React, { useState } from 'react';
import './index.css'

function App() {
//state
const[weight, setWeight] = useState(0);
const[height, setHeight] = useState(0);
const[bmi, setBmi] = useState('');
const[message, setMessage] = useState('');
let imgSrc = "";
let calcBmi =(event) =>{

event.preventDefault()
if(weight===0|| height ===0){

  alert('Please enter vali values')
} else{

  let bmi = (weight/(height*height)*703)
  setBmi(bmi.to)
}

}

  return (
    <div className="app">
      <div className='container'>

      <h2 className='center' >BMI Calculator</h2>
      <form>
      <div>
        <label>Weight</label>
        <input value={weight}/>
      </div>
      <div>
        <label>Height</label>
        <input value={height}/>
      </div>
      <div>
        <button className='btn' type='submit'>Submit</button>
        <button className='btn btn-outline' type='submit'>Submit</button>
      </div>


      </form>
      <div className='center'>
        <h3>your BMI is:{bmi}</h3>
        <p>{message}</p>
      </div>
        <div className='img-container'>
          <img src={imgSrc} alt=''></img>
        </div>
      </div>
    </div>
  );
}

export default App;
