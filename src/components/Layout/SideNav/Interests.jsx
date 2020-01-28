/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { Tag, Dropdown, Icon, Menu } from 'antd';
import { connect } from 'react-redux';
import { allInterests } from '../../../utils/data';
import { removeInterest, addInterest } from '../../../state/actions/interests';

const Interests = ({
  authState: {
    credentials: { id },
  },
  interests: { interests },
  removeInterest,
  addInterest,
}) => {
  const [inputVisible, setInputVisible] = useState(false);

  const showInput = () => {
    setInputVisible(true);
  };

  const handleRemoveInterest = async (e, intId) => {
    e.preventDefault();
    await removeInterest(intId);
  };

  const handleAddInterest = e => {
    addInterest(id, Number(e.key) + 1);
  };

  const menu = (
    <Menu>
      {allInterests
        .filter(elem => !interests.map(int => int.interest).includes(elem))
        .map(interest => (
          <Menu.Item
            onClick={handleAddInterest}
            key={allInterests.indexOf(interest)}
          >
            {interest}
          </Menu.Item>
        ))}
    </Menu>
  );

  return (
    <div>
      {!interests.length ? (
        <p>No interests yet</p>
      ) : (
        <>
          {!inputVisible &&
            interests.map((elem, id) => {
              return <Tag key={id}>{elem.interest}</Tag>;
            })}
          {inputVisible &&
            interests.map(elem => {
              return (
                <Tag
                  key={elem.id}
                  closable
                  onClose={e => handleRemoveInterest(e, elem.id)}
                >
                  {elem.interest}
                </Tag>
              );
            })}
        </>
      )}
      <br />
      {inputVisible && (
        <>
          <Dropdown overlay={menu} trigger={['click']}>
            <button type="button">
              Interests <Icon type="down" />
            </button>
          </Dropdown>
          <Icon
            style={{ marginLeft: '20px', color: 'red', cursor: 'pointer' }}
            onClick={() => setInputVisible(false)}
            type="close-circle"
          />
        </>
      )}
      {!inputVisible && (
        <Tag
          onClick={showInput}
          style={{ background: '#fff', borderStyle: 'dashed' }}
        >
          <Icon type="plus" /> Edit Interests
        </Tag>
      )}
    </div>
  );
};

export default connect(state => state, { removeInterest, addInterest })(
  Interests
);
