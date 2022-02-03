import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Cart(props) {
    let history = useHistory();
    let dispatch = useDispatch();
    let total = 0;;

    if (props.state) {
        props.state.forEach((a, i) => {
            total += a.quantity * a.price;
        })
    }

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>가격</th>
                        <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.state.map((a, i) => {
                            return (
                                <tr key={ i }>
                                    <td>{ a.name }</td>
                                    <td>{ a.quantity }</td>
                                    <td>{ a.price }</td>
                                    <td>
                                        <button onClick={()=>{ dispatch({ type: '수량증가', payload: a.id }) }}>➕</button>
                                        <button onClick={()=>{ dispatch({ type: '수량감소', payload: a.id }) }}>➖</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            
            <div className='payment'>
                    <div className='payment-container'>
                        <h4>계산서</h4>
                        <div className='payment-box1'>
                            <p>소계</p>
                            <span>{ total }원</span>
                        </div>
                        <div className='payment-box2'>
                            <p>총계</p>
                            <span>{ total }원</span>
                        </div>
                        <button className='btn btn-outline-danger' onClick={() => {
                            history.push('/');
                        }}>결제 진행하기</button>
                    </div>
            </div>
        </>
    )
}

function state를props화(state) {
    return {
        state: state
    }
}

export default connect(state를props화)(Cart);