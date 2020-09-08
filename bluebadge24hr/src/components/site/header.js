import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const Header = () => {
    return (
        <header>
            <Navbar className='header'>
                <NavbarBrand href='/'>Location, Weather, Food</NavbarBrand>
                <Nav className='ml-auto' navbar>
                    <NavItem>
                        <NavLink href=''>
                            
                        </NavLink>
                    </NavItem>
                    </Nav>
            </Navbar>
        </header>
    );
};;

export default Header;