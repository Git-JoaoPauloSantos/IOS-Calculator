import React, { useState } from 'react'
import './Calculator.css'
import { MdSignalCellularAlt, MdWifi } from "react-icons/md";
import { FaBatteryHalf } from "react-icons/fa";



export default function Calculator() {
    const[num, setNum]=useState(0);
    const[oldnum, setOldNum]=useState(0);
    const[operator, setOperator]=useState();

    function inputNum(e){
        var input = e.target.value
        if (num === 0) {
            setNum(input)
        }
        else{
            setNum(num + input);
        }
    }

    function clear(e){
        setNum(0)
    }

    function porcentage(){
        setNum(num/100)
    }

    function convertOperator(){
        if (num > 0) {
            setNum(-num)
        }else{
            setNum(Math.abs(num))
        }
    }

    function operators(e){
        var operatorInput =e.target.value;
        setOperator(operatorInput)
        setOldNum(num)
        setNum(0)
    }

    function calculate(){
        if (operator === '/') {
            setNum(oldnum/num);
        }
        if (operator === 'x') {
            setNum(oldnum*num);
        }
        if (operator === '-') {
            setNum(oldnum-num);
        }
        if (operator === '+') {
            setNum(parseFloat(oldnum)+parseFloat(num));
        }
    }

  return (
    <div className='container'>
        <div id='statusbar'>
            <div className='div'>
                <MdSignalCellularAlt/>
                <p>VIVO</p>
                <MdWifi/>
            </div>
            <div>
                <p id='hora'>00:29</p>
            </div>
            <div className='div'>
                <p>50%</p>
                <FaBatteryHalf />
            </div>
        </div>
        <div className='display'>{num}</div>
        <div className='buttons'>
            <button className='btn-grey' onClick={clear}>AC</button>
            <button className='btn-grey' onClick={convertOperator}>+/-</button>
            <button className='btn-grey' onClick={porcentage}>%</button>
            <button className='btn-orange' onClick={operators} value={'/'}>/</button>
        </div>
        <div className='buttons'>
            <button onClick={inputNum} value={7}>7</button>
            <button onClick={inputNum} value={8}>8</button>
            <button onClick={inputNum} value={9}>9</button>
            <button className='btn-orange' onClick={operators} value={'x'}>X</button>
        </div>
        <div className='buttons'>
            <button onClick={inputNum} value={4}>4</button>
            <button onClick={inputNum} value={5}>5</button>
            <button onClick={inputNum} value={6}>6</button>
            <button className='btn-orange' onClick={operators} value={'-'}>-</button>
        </div>
        <div className='buttons'>
            <button onClick={inputNum} value={1}>1</button>
            <button onClick={inputNum} value={2}>2</button>
            <button onClick={inputNum} value={3}>3</button>
            <button className='btn-orange' onClick={operators} value={'+'}>+</button>
        </div>
        <div className='buttons' id='btn-finals'>
            <button id='btn-zero' onClick={inputNum} value={0}>0</button>
            <button onClick={inputNum} value={'.'}>,</button>
            <button className='btn-orange' onClick={calculate}>=</button>
        </div>
        <div id='barra'></div>
    </div>
  )
}
