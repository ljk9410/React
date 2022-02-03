import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';

function Detail(props) {
  let { id } = useParams();
  let shoe = props.shoes.find((shoe) => shoe.id == id );
  let history = useHistory();
  let [alert, alert변경] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => { alert변경(false) }, 2000);

    return () => { clearTimeout(timer); }
  }, []);
  return (
  <div className="container">
    {
      alert === true
      ? (
        <div className='alert'>
          <p>재고가 얼마 남지 않았습니다.</p>
        </div>
      )
      : null
    }
    <div className="row">
      <div className="col-md-6">
        <img src={`https://codingapple1.github.io/shop/shoes${parseInt(id) + 1}.jpg`} width="100%" />
      </div>
      <div className="detail-content col-md-6 mt-4">
        <h4 className="shoe-title">{ shoe.title }</h4>
        <p className='shoe-content'>{ shoe.content }</p>
        <p>{ shoe.price }</p>
        <button className="btn btn-danger" onClick={() => {
          props.dispatch({type: '항목추가', payload: {id:id, name:shoe.title, price:shoe.price, quantity: 1}});
          history.push('/cart');
        }}>장바구니</button> 
      </div>
    </div>
  </div> 
  );
}

function state를props화(state) {
  return {
      state: state
  }
}

export default connect(state를props화)(Detail);