import styled from 'styled-components';

export const ContentWrapper = styled.div`
	max-width: 300px;
	width: 100%;
	height: 400px;
`;

export const Content = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const ContentText = styled.q`
	position: absolute;
	width: 90%;
	top: 10px;
	left: 50%;
	transform: translateX(-50%);
	padding: 8px;
	border-radius: 10px;
	background-color: rgba(0, 0, 0, 0.7);
	color: #ffffff;
`;
