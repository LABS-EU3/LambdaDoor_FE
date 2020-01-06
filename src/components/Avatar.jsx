/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Upload, Icon, Tooltip, Button, message } from 'antd';
import { useEffect } from 'react';

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = file => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }

  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }

  return isJpgOrPng && isLt2M;
};

const Avatar = ({ userImage }) => {
  console.log(userImage);
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setImage(userImage);
  }, [userImage]);

  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }

    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, imageUrl => {
        setImage(imageUrl);
        setLoading(true);
      });
    }
  };

  console.log(image);
  console.log(userImage);

  return (
    <StyledContainer>
      <div className="user-avatar">
        {image !== '' ? (
          <img src={image} alt="avatar" style={{ width: '100%' }} />
        ) : (
          <Icon type="user" />
        )}
      </div>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        <Tooltip title="Upload new photo">
          <Button type="primary" icon="download" />
        </Tooltip>
      </Upload>
    </StyledContainer>
  );
};

export default Avatar;

const StyledContainer = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;

  .user-avatar {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: #bfbfbf;
    display: flex;
    align-items: center;
    justify-content: center;

    .anticon {
      color: #fff;
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  .ant-upload.ant-upload-select.ant-upload-select-picture-card {
    width: unset;
    height: unset;
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 15px;
    right: 0;
    background: transparent;
    border: none;

    & > .ant-upload {
      padding: 0;
    }

    .ant-btn {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: #fafafa;
      border: none;

      .anticon {
        font-size: 0.85rem;
        color: #bb1333;
      }
    }
  }
`;
