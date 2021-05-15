import React from 'react';
import {useSelector} from "react-redux";
import PropTypes from 'prop-types';
import Link from "next/link";
import {Menu, Input, Row, Col} from "antd";
import styled, {createGlobalStyle} from "styled-components";

import UserProfile from './UserProfile';
import LoginForm from './LoginForm';

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const Global = createGlobalStyle`
    .ant-now{
      margin-right: 0 !important;
      margin-left: 0 !important;
    }
    .ant-col:first-child {
      padding-left: 0 !important;
    }
    .ant-col:last-child {
      padding-right: 0 !important;
    }
`;

const AppLayout = ({children}) => {

    const {isLoggedIn} =
        useSelector((state) => state.user);


    return (
        <div>
            <Global/>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton/>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup">회원가입</Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn ?
                        <UserProfile/> :
                        <LoginForm/>}
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