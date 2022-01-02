import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';

function Cart(props) {
    let [alertOpen, changeAlert] = useState(true);
    let state = useSelector( (state) => state )
    let dispatch = useDispatch()

    return(
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.reducer.map((a, i)=>{
                            return(
                                <tr key={ i }>
                                    <td>{ a.id }</td>
                                    <td>{ a.name }</td>
                                    <td>{ a.quantity }</td>
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
            {   
                // props.openAlert === true
                alertOpen === true
                ? (
                    <div className='my-alert2'>
                        <p>지금 구매하시면 신규할인 20%</p>
                        {/* <button onClick={()=>{ props.dispatch({ type: 'alert닫기' })}}>닫기</button> */}
                        <button onClick={()=>{ changeAlert(false) }}>닫기</button>
                    </div>
                )
                : null
            }
        </div>
    )
}

// function state를props화(state) {
//     return {
//         state: state.reducer,
//         openAlert: state.reducer2
//     }
// }

// export default connect(state를props화)(Cart);

export default Cart;