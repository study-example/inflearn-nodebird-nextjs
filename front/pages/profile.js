import React from "react"
import Head from "next/head";


import AppLayout from "./components/AppLayout";
import NicknameEditForm from "./components/NicknameEditForm";
import FollowList from "./components/FollowList";

const Profile = () => {

    const followingList = [{nickname: "kyb"}, {nickname: "hanumoka"}, {nickname: "amagramer"}];
    const foll0werList = [{nickname: "kyb"}, {nickname: "hanumoka"}, {nickname: "amagramer"}];

    return (
        <>
            <Head>
                <title>node bird | 프로필</title>
            </Head>
            <AppLayout>
                <NicknameEditForm></NicknameEditForm>
                <FollowList header="팔로잉 목록" data={followingList}></FollowList>
                <FollowList header="팔로워 목록" data={foll0werList}></FollowList>
            </AppLayout>
        </>
    )
}

export default Profile;