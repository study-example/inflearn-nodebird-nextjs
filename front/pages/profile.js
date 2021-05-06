import React from "react"
import AppLayout from "./components/AppLayout";
import Head from "next/head";

import NicknameEditForm from "./components/NicknameEditForm";
import FollowList from "./components/FollowList";

const Profile = () => {

    const follwerList = [{nickname: "kyb"}, {nickname: "hanumoka"}, {nickname: "amagramer"}];
    const follwingList = [{nickname: "kyb"}, {nickname: "hanumoka"}, {nickname: "amagramer"}];

    return (
        <>
            <Head>
                <title>node bird | 프로필</title>
            </Head>
            <AppLayout>
                <NicknameEditForm></NicknameEditForm>
                <FollowList header="팔로잉 목록" data={follwingList}></FollowList>
                <FollowList header="팔로워 목록" data={follwerList}></FollowList>
            </AppLayout>
        </>
    )
}

export default Profile;