import React from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';
import { tablet, FlexFunc } from '../styles/theme.styles';
import background from '../img/lambda-door-lp-vector.svg';
import logo from '../img/lambda-logo.png';

const { Title, Paragraph } = Typography;

const HomeContainer = styled.div`
	background-image: url(${background});
	background-size: cover;
	background-position: top right;
	background-attachment: fixed;
	background-repeat: no-repeat;
	width: 100vw;
	height: 100vh;

	@media ${tablet} {
		background-position: bottom;
	}
`;

const HomeContentContainer = styled.div`
	${FlexFunc('column', 'space-between', 'flex-start')};
	height: 100%;
	width: 50%;
	padding: 1% 10%;

	@media ${tablet} {
		align-items: center;
		width: 100%;
		padding: 5% 5%;
	}
`;

const LambdaLogo = styled.div`
	align-self: flex-start;
`;

const OnboardingContainer = styled.div`
	padding-bottom: 10%;
	${FlexFunc('column', 'space-between', 'flex-start')};
	@media ${tablet} {
		align-items: center;
		width: 100%;
		text-align: center;
		padding: 0 5%;
	}
`;

const Home = () => {
	return (
		<HomeContainer>
			<HomeContentContainer>
				<LambdaLogo>
					<img src={logo} alt="Lambda School" width="50em" />
				</LambdaLogo>

				<OnboardingContainer>
					<Title
						style={{
							fontWeight: 500,
							fontSize: '64px',
							lineHeight: '48px',
							fontFamily: "'Roboto', san-serif"
						}}
					>
						Lambda Door
					</Title>

					<Paragraph style={{ fontSize: '20px', lineHeight: '32px' }}>
						The one-stop portal for Lambda graduates looking for company
						information in the quest for a job.
					</Paragraph>

					<img
						src="https://platform.slack-edge.com/img/sign_in_with_slack.png"
						srcSet="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x"
						alt="Sign in with Slack"
					/>
				</OnboardingContainer>

				<Paragraph style={{ color: 'white' }}>
					Built by Lambda students, for Lambda students.
				</Paragraph>
			</HomeContentContainer>
		</HomeContainer>
	);
};

export default Home;
