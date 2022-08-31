import React, { useState } from "react"; 

function NineBase() {

  let [nums, setNums] = useState([1,2,null,3,4,5,6,7,8]); 
  let [count, setCount] = useState(0); 
  // let [targets, setTargets] = useState([]);

  // 0 1 2 
  // 3 4 5 
  // 6 7 8 

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
    // console.log(targetIdx, ' same row as null: ', sameRow);
    if((nullIndex === (targetIdx - 1)) && sameRow) {
      // console.log('index ', targetIdx, ' on same line, one after null');
      return true; 
    } else if ((nullIndex === (targetIdx + 1)) && sameRow) {
      // **
      // console.log('index ', targetIdx, ' on same line, one before null');
      return true; 
    } else if  (nullIndex === targetIdx - 3) {
      // console.log('index ', targetIdx, '  on next line, three after null');
      return true; 
    } else if  (nullIndex === targetIdx + 3) {
      // ** 
      // console.log('index ', targetIdx, ' on previous line, three before null');
      return true; 
    } else {
      return false; 
    }
  }

  // let moveToNull = (clickedVal) => {
  //    // error: anything before NULL (same row or not) logs areNeighbors as false 
  //   // let areNeighbors = checkNullNeighbor(nums.indexOf(clickedVal)); 
  //    switchIndeces(clickedVal);
  //   // setCount(count + 1)
  // }

  return (
    <div>
      <p>NineBase here</p>
      {nums.slice(0,3).map((item) => {
        if (item == null){
          return <span >   NULL   </span>
        } else if (checkNullNeighbor(nums.indexOf(item)) === true) {
          // console.log('neighbor: ', item)
          return <span><button value={item} onClick={(e) => {
            e.preventDefault();
            switchIndeces(e.currentTarget.value);
            // console.log(e.currentTarget.value)
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
          // console.log('neighbor: ', item)
          return <span><button value={item} onClick={(e) => {
            e.preventDefault();
            switchIndeces(e.currentTarget.value);
            // console.log(e.currentTarget.value);
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
          // console.log('neighbor: ', item)
          return <span><button value={item} onClick={(e) => {
            e.preventDefault();
            switchIndeces(e.currentTarget.value);
            // console.log(e.currentTarget.value);
          }} ><b> { item } </b> </button></span>
        } else {
          return <span > {item} </span>
        }
      })}
      <br />
      <br />
      <p>count: {count}</p>
    </div>
  )
}

export default NineBase
