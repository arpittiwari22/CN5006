import './App.css';
import React from 'react';
function Calculator() {
 // Function to handle calculation
 function calculate() {
 const num1 = parseFloat(document.getElementById('num1').value);
 const num2 = parseFloat(document.getElementById('num2').value);
 const operator = document.getElementById('operator').value;
 let result = 0;
 switch (operator) {
 case '+':
 result = num1 + num2;
 break;
 case '-':
 result = num1 - num2;
 break;
 case '*':
 result = num1 * num2;
 break;
 case '/':
 result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
 break;
 default:
 result = 'Invalid Operation';
 }
 document.getElementById('result').innerText = `Result: ${result}`;
 }
 return (
 <div style={{ padding: '20px', border: '8px solid #ccc', width:
'300px',background: 'lightgreen' } } className="App">
 <h2>Simple Calculator</h2>
 <input type="number" id="num1" placeholder="First Number" style={{
width: '100%', marginBottom: '10px' }} />
 <select id="operator" style={{ width: '100%', marginBottom: '10px' }}>
 <option value="+">Add</option>
 <option value="-">Subtract</option>
 <option value="*">Multiply</option>
 <option value="/">Divide</option>
 </select>
 <input type="number" id="num2" placeholder="Second Number" style={{
width: '100%', marginBottom: '10px' }} />
 <button onClick={calculate} style={{ width: '100%', padding: '10px',
marginBottom: '10px' }}>
 Calculate
 </button>
 <p id="result" style={{ fontWeight: 'bold', fontSize: '16px'
}}>Result:</p>
 </div>
 );
}
export default Calculator;