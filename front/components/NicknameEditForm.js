import React, {useMemo} from 'react';
import {Form, Input} from 'antd';

const NicknameEditForm = () => {

    // 이런식으로 인라인 스타일을 useMemo로 최적화 시키거나 스타일드컴포넌트를 사용한다.
    const style = useMemo(() =>({
        marginBottom: '20px',
        border : '1px solid #d9d9d9',
        padding: '20px'
    }))

    return (
        <Form style={style}>
            <Input.Search addonBefore="닉네임" enterButton="수정"/>
        </Form>
    )
}

export default NicknameEditForm;