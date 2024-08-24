import React, { useState } from 'react';
 import './App.css';
 import TextField from './TextField';
 function App() {
 const [inputValue, setInputValue] = useState('');
 const handleChange = (e) => {
 setInputValue(e.target.value);
 };
 return (
 <div className="App">
 <h1>Text Field Value: {inputValue}</h1>
 <TextField value={inputValue} onChange={handleChange} />
 </div>
 );
 }
 export default App;