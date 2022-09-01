import React, { useState, useEffect } from "react"; 

function NineBase() {

  let [nums, setNums] = useState([1,2,3,null,5,6,4,7,8]); 
  let [count, setCount] = useState(0); 

  // 0 1 2 
  // 3 4 5 
  // 6 7 8 

  // Warning: State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().

  let testWinCondition = () => {
    let winConditionArr = [1,2,3,4,5,6,7,8];
    let numsCopy = nums;
    let temp = [];
    numsCopy.forEach((item) =>{
      if (typeof(item) === 'number'){
        temp.push(item);
      }
    }); 
    let equal = false; 
    for (let i = 0; i < winConditionArr.length; i++){
      if(winConditionArr[i] !== temp[i]){
        console.log('keep playing');
        return; 
      }
      console.log('you win')
    }
  }

  // useEffect(() => {
  //   testWinCondition();
  // }, [nums, testWinCondition]);

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
    if ((0 <= targetIdx && targetIdx <= 2) && (0 <= nullIndex && nullIndex <= 2)){ 
      return true; 
    } else if ((3 <= targetIdx && targetIdx <= 5) && (3 <= nullIndex && nullIndex <= 5)) {
      return true; 
    } else if ((6 <= targetIdx && targetIdx <= 8) && (6 <= nullIndex && nullIndex <= 8)){
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
    } else if  (nullIndex === targetIdx - 3) {
      return true; 
    } else if  (nullIndex === targetIdx + 3) {
      return true; 
    } else {
      return false; 
    }
  }

  return (
    <div>
      <p>NineBase here</p>
      {nums.slice(0,3).map((item) => {
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
       {nums.slice(3,6).map((item) => {
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
      {nums.slice(6,9).map((item) => {
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
      <br />
      {/* <p>count: {count}</p> */}
    </div>
  )
}

export default NineBase
