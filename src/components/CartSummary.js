import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
    NavItem,
    NavLink,
} from 'reactstrap';

class CartSummary extends Component {
    renderSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="text-white" nav caret>
                    My Cart = {this.props.cart.length}
                </DropdownToggle>
                <DropdownMenu right>
                    {
                        this.props.cart.map((cartItem) => (
                            <DropdownItem className="d-flex justify-content-between" key={cartItem.product.id}>
                                <Badge className="mr-4" color="danger" onClick={() => this.props.removeFromCart(cartItem.product)}>X</Badge>
                                {cartItem.product.productName}
                                <Badge color="success">{cartItem.quantity}</Badge>
                            </DropdownItem>
                        ))
                    }


                    <DropdownItem divider />
                    <DropdownItem>
                        <Link to="/cart">See Cart</Link>
                      </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }
    renderEmptyCart(){
        return(
        <NavItem>
            <NavLink className="text-white">Empty Cart</NavLink>
        </NavItem>
        )
    }

    render() {

        return (
            <div>
                {this.props.cart.length > 0 
                ? this.renderSummary()
                : this.renderEmptyCart()}
            </div>
        )
    }
}
export default CartSummary