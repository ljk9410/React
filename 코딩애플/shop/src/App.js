import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown,Form, FormControl, Button } from 'react-bootstrap';
import './App.css';
import shoeData from './data.js';

function App() {
  let [shoes, shoes변경] = useState(shoeData);

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
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
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


      <div className='jumbotron'>
        <div>
          <h1>20% Season Off</h1>
          <p>코딩애플을 통해 배우는 react 수업. 이번에는 쇼핑몰 만들기 프로젝트를 진행합니다</p>
          <button>버튼</button>
        </div>
      </div>


      <div className='container'>
        <div className='row'>
          {
            shoes.map((shoe, i)=>{
              return (<ShoeList shoe={ shoe } key={ i + 1 }></ShoeList>)
            })
          }
        </div>
      </div>

    </div>
  );
}

function ShoeList(props) {
  let count = props.shoe.id + 1;
  return(
    <div className='col-md-4'>
      <img src={ 'https://codingapple1.github.io/shop/shoes' + count + '.jpg'} width='100%'></img>
      <h4>{ props.shoe.title }</h4>
      <p>{ props.shoe.content }</p>
    </div>
  )
}
export default App;
