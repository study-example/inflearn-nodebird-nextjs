import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Link from "next/link";
import {Menu, Input, Row, Col} from "antd";
import styled from "styled-components";

import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';

const SearchInput = styled(Input.Search)`
vertical-align: middle;
`;

const AppLayout = ({children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup">회원가입</Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="https://www.hanumoka.net"
                       target="_blank"
                       rel="noreferrer noopenner"
                    >Made by hanumoka</a>
                </Col>
            </Row>
        </div>
    )
}

AppLayout.proptypes = {
    children: PropTypes.node.isRequired
}


export default AppLayout;