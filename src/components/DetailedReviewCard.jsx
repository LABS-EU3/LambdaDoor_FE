import React from 'react';
import { Rate, Switch, Icon, Card } from 'antd';
import styled from 'styled-components';

const StyledReview = styled(Card)`
  width: 60%;
  .title-div {
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin-bottom: 20px;
  }
  .company {
    font-size: 1rem;
    margin-left: 42px;
    margin-bottom: 20px;
  }
  .ratings {
    display: flex;
    width: 50%;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .switch-statements {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .headline-div {
    margin-bottom: 20px;
  }
  .headline {
    font-size: 1rem;
    margin-left: 42px;
    margin-bottom: 20px;
  }
`;

const DetailedReviewCard = () => {
  return (
    <StyledReview>
      <div className="title-div">
        <h2>
          Company Name
          <span className="company">Amazon</span>
        </h2>
      </div>
      <div className="ratings">
        <h2>Overall Rating</h2>
        <Rate disabled defaultValue={4} />
      </div>
      <div className="switch-statements">
        <h2>I am a current employee</h2>
        <Switch
          checkedChildren={<Icon type="check" />}
          unCheckedChildren={<Icon type="close" />}
          defaultChecked
        />
        <h2>Accepting questions</h2>
        <Switch disabled />
      </div>
      <div>
        <div className="headline-div">
          <h2>
            Review Headline <span className="headline">Lorem Ipsum</span>
          </h2>
        </div>
        <h2>Pros</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          veritatis molestiae pariatur repudiandae consequuntur facilis nesciunt
          earum impedit enim alias reprehenderit ad nulla soluta quasi, deserunt
          itaque eaque necessitatibus provident?
        </p>
        <h2>Cons</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          laboriosam nulla exercitationem, voluptatibus tempore a ducimus ad?
          Dicta accusamus asperiores facere minus quisquam amet delectus fuga.
          Iusto at dolores similique?
        </p>
      </div>
    </StyledReview>
  );
};

export default DetailedReviewCard;
