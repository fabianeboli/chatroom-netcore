import * as React from 'react';
import {Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';
import './NavMenu.css';
import {useDispatch, useSelector} from "react-redux";
import {deleteLogin} from "../store/Login";
import {useState} from "react";
import {IReducer} from "../Interfaces";

const NavMenu = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dispatch = useDispatch();
    const loginInfo = useSelector((state: IReducer) => state.login);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light>
                <Container>
                    <NavbarBrand tag={Link} to="/">ChatApp</NavbarBrand>
                    {loginInfo.token && <p> Welcome, {loginInfo.username} </p>}
                    <NavbarToggler onClick={toggle} className="mr-2"/>
                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={isOpen} navbar>
                        <ul className="navbar-nav flex-grow">
                            {loginInfo.token ? (
                                <>
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                                    </NavItem>
                                    
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/newchatroom">New Chat
                                            room</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/"
                                                 onClick={() => dispatch(deleteLogin()) && window.location.reload()}> Sign
                                            Out </NavLink>
                                    </NavItem>
                                </>
                            ) : (
                                <>
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/signin">Sign in</NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/signup">Sign up</NavLink>
                                    </NavItem>
                                </>
                            )}

                        </ul>
                    </Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
export default NavMenu;
