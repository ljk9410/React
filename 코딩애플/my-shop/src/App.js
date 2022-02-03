import './App.css';
import { useState } from 'react';
import axios from 'axios';
import { Navbar, Container, Nav, Button, NavDropdown } from 'react-bootstrap';
import Data from './data.js';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './components/Detail.js';
import Cart from './components/Cart.js';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  let [shoes, shoes변경] = useState(Data);
  let [loading, loading변경] = useState(false);
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand as={ Link } to='/'>Lee Shoes Mall</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Nav className="me-auto">
            <NavDropdown title="Detail" id="collasible-nav-dropdown">
              <NavDropdown.Item>Action</NavDropdown.Item>
              <NavDropdown.Item>Another action</NavDropdown.Item>
              <NavDropdown.Item>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/">
          {/* Jumbotron */}
          <Jumbotron className="jumbo"></Jumbotron>

          {/* Shoe Lists */}
          <div className='shoeList-container'>
            <div className='row'>
              {
                shoes.map((shoe,i) => {
                  return (<ShoeList shoe={ shoe } key = { i }></ShoeList>)
                })
              }
            </div>
          </div>

          {/* Ajax = axios */}
          {
            loading === true
            ? <div>로딩중...</div>
            : null
          }
          <button className='btn btn-primary' onClick={() => {
            loading변경(true);
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((res) => { 
              shoes변경([...shoes, ...res.data]);
              loading변경(false);
             })
            .catch(() => { console.log('error') })
          }}>상품 더보기</button>
        </Route>

        {/* Detail */}
        <Route path="/detail/:id">
            <Detail shoes={ shoes }></Detail>
        </Route>

        {/* Cart */}
        <Route path="/cart">
          <Cart></Cart>
        </Route>

      </Switch>


    </div>
  );
}

function Jumbotron() {
  return (
    <div className='jumbo-container'>
      <div className='jumbo-message'>
        <h1>20% Season Off</h1>
        <p>리액트를 이용한 간단한 신발 판매 쇼핑몰 웹사이트 만들기</p>
        <Button variant="primary">더 알아보기</Button>{' '}
      </div>
    </div>
  )
}

function ShoeList(props) {
  let shoeNum = props.shoe.id + 1;
  let history = useHistory();
  return (
    <div className='col-md-4' onClick={ () => { history.push(`/detail/${ shoeNum - 1}`)}}>
      <img src={`https://codingapple1.github.io/shop/shoes${shoeNum}.jpg`} width='100%'></img>
      <h4 className='shoe-title'>{ props.shoe.title }</h4>
      <p className='shoe-content'>{ props.shoe.content }</p>
    </div>
  )
}

export default App;
