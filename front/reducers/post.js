const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '제로초',
        },
        content: '첫 번째 개시글 #해시태그, #익스프레스',
        Images: [{
            src: 'https://post.naver.com/viewer/postView.nhn?volumeNo=31383568&memberNo=44939664#'
        }, {
            src: 'https://post.naver.com/viewer/postView.nhn?volumeNo=31383568&memberNo=44939664#'
        }, {
            src: 'https://post.naver.com/viewer/postView.nhn?volumeNo=31383568&memberNo=44939664#'
        }],
        Comments: [{
            User: {
                nickname: 'nero'
            },
            content: '첫번째 코멘트'
        }, {
            User: {
                nickname: 'heor'
            },
            content: '두번째 코멘트'
        }]
    }],
    imagePaths: [],
    postAdded: false
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST
}

const dummyPost = {
    id: 2,
    content: '더미데이터입니다.',
    User: {
        id: 1,
        nickname: '하누모카'
    },
    Images: [],
    Comments: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],  // 글을 추가할때 앞에 넣어서 위로 올라가게 한다.
                postAdded: true,
            };
        default:
            return state;
    }
};

export default reducer;