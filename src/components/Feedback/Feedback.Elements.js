import styled from 'styled-components';

export const FeedbackWrapper = styled.div`
	max-width: 400px;
	width: 100%;
	height: 500px;

	@media (max-width: 1024px) {
		width: 100%;
	}
`;

export const ContentWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
`;

export const ContentImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const Content = styled.div`
	position: absolute;
	width: 100%;
	height: 50%;
	bottom: 0;
	left: 0;
	padding: 15px 10px;
	background-color: rgba(0, 0, 0, 0.6);
	color: #ffffff;
`;

export const ContentText = styled.q`
	padding: 15px 10px;
	font-size: 16px;
`;

export const Author = styled.p`
	margin-bottom: 10px;
`;
