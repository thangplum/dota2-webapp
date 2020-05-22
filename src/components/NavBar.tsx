import * as React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['4']}>
                <Menu.Item key="1" >
                    <NavLink to='/teams'>Teams</NavLink>
                </Menu.Item>
                {/* <Menu.Item key="2" >
                nav 2
                </Menu.Item>
                <Menu.Item key="3">
                nav 3
                </Menu.Item>
                <Menu.Item key="4">
                nav 4
                </Menu.Item> */}
            </Menu>
        </>
        
        
    );
}

export default NavBar;