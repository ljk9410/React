import React, { useContext, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown,Form, FormControl, Button } from 'react-bootstrap';
import './App.css';
import shoeData from './data.js';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './components/Detail.js';
import axios from 'axios';
import Cart from './components/Cart.js';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


let 재고context = React.createContext();


function App() {
  let [shoes, shoes변경] = useState(shoeData);
  let [loading, loading변경] = useState(false);
  let [재고, 재고변경] = useState([10, 11, 12]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Shopping Mall</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Switch>
        <Route exact path="/">
          <div className='jumbotron'>
            <div>
              <h1>20% Season Off</h1>
              <p>코딩애플을 통해 배우는 react 수업. 이번에는 쇼핑몰 만들기 프로젝트를 진행합니다</p>
              <button>버튼</button>
            </div>
          </div>
          
          <div className='container'>

            <재고context.Provider value={ 재고 }>
              <div className='row'>
                {
                  shoes.map((shoe, i)=>{
                    return (<ShoeList shoe={ shoe } key={ i + 1 }></ShoeList>)
                  })
                }
              </div>
            </재고context.Provider>


            {
              loading === true
              ? <Loading></Loading>
              : null
            }
            <button className='btn btn-primary' onClick={ ()=>{
              loading변경(true)
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((res)=>{
                // let data = res.data
                // let newShoesData = [...shoes]

                // data.forEach( (a)=>{
                //   newShoesData.push(a)
                // } )
                // shoes변경(newShoesData)
                loading변경(false)
                shoes변경([...shoes, ...res.data])
              })
              .catch(()=>{
                console.log('실패했습니다')
              })
            } }>더보기</button>
          </div>
        </Route>
        
        <Route path='/cart'>
            <Cart></Cart>
        </Route>

        <Route path='/detail/:id'>
          <Detail shoes={ shoes } 재고={ 재고 } 재고변경={ 재고변경 }/>
        </Route>
        {/* <Route path="/detail" component={ Detail }></Route> */}

      </Switch>

    </div>
  );
}

function ShoeList(props) {
  let 재고 = useContext(재고context);
  let history = useHistory();
  let id = props.shoe.id;

  return(
    <div className='col-md-4' onClick={ () => { history.push(`/detail/${id}`)} }>
      <img src={ `https://codingapple1.github.io/shop/shoes${id + 1}.jpg`} width='100%'></img>
      <h4>{ props.shoe.title }</h4>
      <p>{ props.shoe.content }</p>
      <Test></Test>
    </div>
  )
}

function Test() {
  let 재고 = useContext(재고context);

  return (
    <p>재고: {재고}</p>
  )
}

function Loading() {
  return (
    <div>로딩중입니다...</div>
  )
}

export default App;
