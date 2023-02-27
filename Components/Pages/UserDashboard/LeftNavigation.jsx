import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'

const LeftNavigation = ({ active }) => {
    return (
        <Nav className={`nav-tabs custome-nav-tabs flex-column category-option`} id='myTab'>
            <NavItem className='mb-2'>
                <NavLink className={active === "/page/user-dashboard" ? "active" : ""} href='/page/user-dashboard' >
                    <i className='fas fa-angle-right'></i>
                    User Dashboard
                </NavLink>
            </NavItem>

            <NavItem className='mb-2'>
                <NavLink className={active === "/page/user-orders" ? "active" : ""} href='/page/user-orders'>
                    <i className='fas fa-angle-right'></i>
                    Orders
                </NavLink>
            </NavItem>

            <NavItem className='mb-2'>
                <NavLink className={active === "/page/user-wishlist" ? "active" : ""} href='/page/user-wishlist'>
                    <i className='fas fa-angle-right'></i>
                    Wishlist
                </NavLink>
            </NavItem>

            <NavItem className='mb-2'>
                <NavLink className={active === "/page/user-reviews" ? "active" : ""} href='/page/user-reviews'>
                    <i className='fas fa-angle-right'></i>
                    Reviews
                </NavLink>
            </NavItem>

            <NavItem className='mb-2'>
                <NavLink className={active === "/page/change-password" ? "active" : ""} href='/page/change-password'>
                    <i className='fas fa-angle-right'></i>
                    Change Password
                </NavLink>
            </NavItem>

            <NavItem className='mb-2'>
                <NavLink className={active === "/page/user-notifications" ? "active" : ""} href='/page/user-notifications'>
                    <i className='fas fa-angle-right'></i>
                    Notification Settings
                </NavLink>
            </NavItem>

            <NavItem className='mb-2'>
                <NavLink className={active === "/page/account-settings" ? "active" : ""} href='/page/account-settings'>
                    <i className='fas fa-angle-right'></i>
                    Account Settings
                </NavLink>
            </NavItem>

        </Nav>
    )
}

export default LeftNavigation