import React from "react";
import 'antd/dist/antd.css';
import PropTypes from "prop-types";
import Head from "next/head";

import wrapper from '../store/configureStore';

const NodeBird = ({Component}) => {

    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <title>node bird</title>
            </Head>
            <Component/>
        </>
    )
}

NodeBird.proptypes = {
    Component: PropTypes.elementType.isRequired
}


export default wrapper.withRedux(NodeBird);