import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import {PlusOutlined} from "@ant-design/icons";

const PostImages = ({images}) => {

    const [showImageZoom, setShowImageZoom] = useState(false);

    const onZoom = useCallback(() => {
        setShowImageZoom(true);
    }, []);

    if (images?.length === 1) {
        return (
            <>
                <img
                    role="presentation"
                    src={images[0].src}
                    alt={images[0].src}
                    onClick={onZoom}/>
            </>
        )
    }

    if (images?.length === 2) {
        return (
            <>
                <img
                    style={{width: "50%", display: 'inline-block'}}
                    role="presentation"
                    src={images[0].src}
                    alt={images[0].src}
                    onClick={onZoom}/>
                <img
                    style={{width: "50%" , display: 'inline-block'}}
                    role="presentation"
                    src={images[1].src}
                    alt={images[1].src}
                    onClick={onZoom}/>
            </>
        )
    }

    return (
        <>
            <div>
                <img
                    style={{width: "50%"}}
                    role="presentation"
                    src={images[0].src}
                    alt={images[0].src}
                    onClick={onZoom}/>
                <div
                    role="presentation"
                    style={{
                        display: 'inline-block',
                        width: '50%',
                        textAlign: 'center',
                        verticalAlign: 'middle'
                    }}
                    onClick={onZoom}
                >
                    <PlusOutlined />
                    <br/>
                    {images.length -1}
                    개의 사진 저보기
                </div>
            </div>
        </>
    )
};

PostImages.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
}

export default PostImages;