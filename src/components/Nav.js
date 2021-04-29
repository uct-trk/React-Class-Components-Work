import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
import CartSummary from './CartSummary';

class Navi extends Component {
    render() {
        return (
            
            <Navbar color="light" light expand="md" className="bg-dark mb-3">
              <NavbarBrand className="text-success" href="/">UCT SHOP</NavbarBrand>
              <NavbarToggler/>
              <Collapse navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink><Link className="text-white" to="/form1">FormDemo1</Link></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink><Link className="text-white" to="/form2">FormDemo2</Link></NavLink>
                  </NavItem>
                  <CartSummary
                    removeFromCart={this.props.removeFromCart} 
                    cart={this.props.cart}/>
                  
                </Nav>
              </Collapse>
            </Navbar>
          
        )
    }
}
export default Navi