import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['상도 맛집', '흑석 맛집', '강남 맛집']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, modalChange] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);

  function 제목바꾸기() {
    let newArray = [...글제목];

    newArray[0] = '상도 고기 맛집';
    글제목변경(newArray);
  }

  function 따봉바꾸기(i) {
    let newArray = [...따봉];

    newArray[i]++;
    따봉변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>버튼</button>

      {
        글제목.map((글, i) => {
          return (
            <div className="list">
                <h3 onClick={ ()=> { 누른제목변경(i) }}> { 글 } <span onClick={ ()=> { 따봉바꾸기(i) } }>👍</span> { 따봉[i] } </h3>
                <p>2월 17일 발행</p>
                <hr/>
            </div>  
          ) 
        })
      }

      <button onClick={ () => { modalChange(!modal) } }>modal</button>
      {
        modal === true
        ? <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
        : null
      }
    </div>
  );
}

function Modal(props) {
  return (
  <div className="modal">
    <h2>{ props.글제목[props.누른제목] }</h2>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}



export default App;
