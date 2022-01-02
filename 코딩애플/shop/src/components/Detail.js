import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import '../CSS/Detail.scss';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

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
  let [tap, changeTap] = useState(0);
  let [스위치, change스위치] = useState(false);

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

        <button className="btn btn-danger" onClick={()=>{
            props.dispatch({ type: '장바구니추가', payload: { id: itemId, name: props.shoes[itemId].title, quantity: 1 } })
            history.push('/cart');
          }}>주문하기</button> 
        <button className="btn btn-danger" onClick={()=> {
          history.goBack()
          // history.push('/') -> 해당 url로 이동 
        }}>뒤로가기</button> 
      </div>
    </div>

    <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
      <Nav.Item>
        <Nav.Link eventKey="link-0" onClick={()=>{ change스위치(false); changeTap(0) }}>Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" onClick={()=>{ change스위치(false); changeTap(1) }}>Option 2</Nav.Link>
      </Nav.Item>
    </Nav>
    
    <CSSTransition in={ 스위치 } classNames="wow" timeout={500}>
      <TapContent tap={ tap } change스위치={ change스위치 }></TapContent>
    </CSSTransition>

  </div> 
  )
}

function Remain(props) {
  return (
    <p>재고: { props.재고 }</p>
  )
}

function TapContent(props) {

  useEffect(()=>{
    props.change스위치(true);
  })

  if (props.tap === 0) {
    return <div>0번째 내용입니다</div>
  }
  if (props.tap === 1) {
    return <div>1번째 내용입니다</div>
  }
}

function state를props화(state) {
  return {
      state: state.reducer,
      openAlert: state.reducer2
  }
}

export default connect(state를props화)(Detail);