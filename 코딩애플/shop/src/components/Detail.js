import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import '../CSS/Detail.scss';

let Box = styled.div`
  padding: 20px;
`;
let Title = styled.h4`
  font-size: 60px;
  color: ${ props => props.color };
`;


function Detail(props) {
  let [alert, changeAlert] = useState(true);
  let [inputData, changeInputData] = useState('');
  
  useEffect(() => {
    let timer = setTimeout(()=>{
      changeAlert(false);
    }, 2000);
    return () => { clearTimeout(timer); };
  }, []);
  
  let history = useHistory();
  let { id } = useParams();
  let itemId;

  props.shoes.forEach((shoe) => { 
    if (shoe.id == id)
      itemId = shoe.id;
  })

  return (
  <div className="container">
    <Box>
      <Title className="red">상세페이지</Title>
    </Box>

    {
      alert === true
      ?
      (<div className='my-alert2'>
        <p>재고가 얼마 남지 않았습니다</p>
      </div>)
      : null
    }
    
    
    <div className="row">
      <div className="col-md-6">
        <img src={`https://codingapple1.github.io/shop/shoes${itemId + 1}.jpg`} width="100%" />
      </div>
      <div className="col-md-6 mt-4">
        <h4 className="pt-5">{ props.shoes[itemId].title }</h4>
        <p>{ props.shoes[itemId].content}</p>
        <p>{ props.shoes[itemId].price }</p>

        <Remain 재고={ props.재고 }></Remain>

        <button className="btn btn-danger" onClick={()=>{ props.재고변경([9,11,12])}}>주문하기</button> 
        <button className="btn btn-danger" onClick={()=> {
          history.goBack()
          // history.push('/') -> 해당 url로 이동 
        }}>뒤로가기</button> 
      </div>
    </div>
  </div> 
  )
}

function Remain(props) {
  return (
    <p>재고: { props.재고 }</p>
  )
}

  export default Detail;