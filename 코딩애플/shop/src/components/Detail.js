import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

function Detail(props) {
  let history = useHistory();
  let { id } = useParams();
  let itemId;

  props.shoes.forEach((shoe) => { 
    if (shoe.id == id)
      itemId = shoe.id;
  })

  return (
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <img src={`https://codingapple1.github.io/shop/shoes${itemId + 1}.jpg`} width="100%" />
      </div>
      <div className="col-md-6 mt-4">
        <h4 className="pt-5">{ props.shoes[itemId].title }</h4>
        <p>{ props.shoes[itemId].content}</p>
        <p>{ props.shoes[itemId].price }</p>
        <button className="btn btn-danger">주문하기</button> 
        <button className="btn btn-danger" onClick={ ()=> {
          history.goBack()
          // history.push('/') -> 해당 url로 이동 
        }}>뒤로가기</button> 
      </div>
    </div>
  </div> 
  )
  }

  export default Detail;