import React from "react"
import AppLayout from "./components/AppLayout";
import Head from "next/head";

const Singup = () => {
    return (
        <>
            <Head>
                <title>node bird | 회원가입</title>
            </Head>
            <AppLayout>
                <div>회원가입 페이지</div>
            </AppLayout>
        </>

    )
}

export default Singup;