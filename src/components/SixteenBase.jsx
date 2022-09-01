import React, { useState } from "react"; 

function SixteenBase( ) {

  let [nums, setNums] = useState([1,2,3,4,5,6,7,8,null,10,11,12,9,13,14,15]); 
  let [count, setCount] = useState(0); 
  // const [won, setWon] = useState(false); 

  
  // 1 2 3 4 
  // 5 6 7 8
  // 9 10 11 12 
  // 13 14 15


  let testWinCondition = () => {
    let winConditionArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    let numsCopy = nums;
    let temp = [];
    numsCopy.forEach((item) =>{
      if (typeof(item) === 'number'){
        temp.push(item);
      }
    }); 
    for (let i = 0; i < winConditionArr.length; i++){
      if(winConditionArr[i] !== temp[i]){
        console.log('keep playing');
        return; 
      }
      console.log('you win'); 
    }
  }

  let switchIndeces = (clickedVal) => {
    let clickedValNum = parseInt(clickedVal); 
    let clickedValNumIdx = nums.indexOf(clickedValNum);
    let nullIdx = nums.indexOf(null); 
  
    let arr = nums; 
    let temp = arr[nullIdx]
    arr[nullIdx] = arr[clickedValNumIdx]
    arr[clickedValNumIdx] = temp; 
  
    setNums(arr); 
    setCount(count + 1);
    testWinCondition(); 

  }

  let checkSameRow = (targetIdx) => {
    let nullIndex = nums.indexOf(null);
    if ((0 <= targetIdx && targetIdx <= 3) && (0 <= nullIndex && nullIndex <= 3)){ 
      return true; 
    } else if ((4 <= targetIdx && targetIdx <= 7) && (4 <= nullIndex && nullIndex <= 7)) {
      return true; 
    } else if ((8 <= targetIdx && targetIdx <= 11) && (8 <= nullIndex && nullIndex <= 11)){
      return true; 
    } else if ((12 <= targetIdx && targetIdx <= 15) && (12 <= nullIndex && nullIndex <= 15)){
      return true; 
    } 
    return false;
  }

  let checkNullNeighbor = (targetIdx) => {
    let nullIndex = nums.indexOf(null);
    let sameRow = checkSameRow(targetIdx); 
    if((nullIndex === (targetIdx - 1)) && sameRow) {
      return true; 
    } else if ((nullIndex === (targetIdx + 1)) && sameRow) {
      return true; 
    } else if  (nullIndex === targetIdx - 4) {
      return true; 
    } else if  (nullIndex === targetIdx + 4) {
      return true; 
    } else {
      return false; 
    }
  }

  return (
    <div>
      <p>SixteenBase here</p>
      {nums.slice(0,4).map((item) => {
        if (item == null){
          return <span >   NULL   </span>
        } else if (checkNullNeighbor(nums.indexOf(item)) === true) {
          return <span><button value={item} onClick={(e) => {
            e.preventDefault();
            switchIndeces(e.currentTarget.value);
          }}><b> { item } </b> </button></span>
        } else {
          return <span >{item} </span>
        }
      })}
      <br />
       {nums.slice(4,8).map((item) => {
        if (item == null){
          return <span > NULL </span>
        } else if (checkNullNeighbor(nums.indexOf(item)) === true) {
          return <span><button value={item} onClick={(e) => {
            e.preventDefault();
            switchIndeces(e.currentTarget.value);
          }}><b> { item } </b> </button></span>
        } else {
          return <span > {item} </span>
        }
      })}
      <br /> 
      {nums.slice(8,12).map((item) => {
        if (item == null){
          return <span > NULL </span>
        } else if (checkNullNeighbor(nums.indexOf(item)) === true) {
          return <span><button value={item} onClick={(e) => {
            e.preventDefault();
            switchIndeces(e.currentTarget.value);
          }} ><b> { item } </b> </button></span>
        } else {
          return <span > {item} </span>
        }
      })}
      <br />
      {nums.slice(12,16).map((item) => {
        if (item == null){
          return <span > NULL </span>
        } else if (checkNullNeighbor(nums.indexOf(item)) === true) {
          return <span><button value={item} onClick={(e) => {
            e.preventDefault();
            switchIndeces(e.currentTarget.value);
          }} ><b> { item } </b> </button></span>
        } else {
          return <span > {item} </span>
        }
      })}
      <br />
      {/* <p>count: {count}</p> */}
    </div>
  )
}

export default SixteenBase
