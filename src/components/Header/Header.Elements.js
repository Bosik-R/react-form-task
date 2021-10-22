import styled from 'styled-components';

export const Wrapper = styled.header`
	position: absolute;
	top: 0;
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.8);
	border-bottom: 1px solid rgba(251, 0, 6, 0.8);
`;

export const Title = styled.h1`
	color: #fb0006;
	font-size: 40px;
	font-weight: bold;
`;

export const Nav = styled.nav`
	position: absolute;
	left: 50%;
	bottom: -60px;
	display: flex;
	background: transparent;
	transform: translateX(-50%);
`;

export const Btn = styled.button`
	height: 60px;
	width: 100px;
	background-color: rgba(0, 0, 0, 0.8);
	border-bottom-left-radius: 100px;
	border-bottom-right-radius: 100px;
	margin: 0 15px;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	border: 1px solid rgba(251, 0, 6, 0.8);
	border-top: 1px solid rgba(0, 0, 0, 0.8);
	z-index: 1;

	&:hover {
		background-color: rgba(251, 0, 6, 0.8);
		color: #ffffff;
		border-top: 1px solid rgba(251, 0, 6, 0.8);
	}
`;

export const BtnText = styled.span`
	color: #ffffff;
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 25px;
`;
