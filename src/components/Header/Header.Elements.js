import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

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
	gap: 40px;
	background: transparent;
	transform: translateX(-50%);
	overflow: hidden;
`;

export const LinkMainPage = styled(Link)`
	padding: 20px 40px;
	background-color: rgba(0, 0, 0, 0.8);
	margin: 0 15px;
	border: 1px solid rgba(251, 0, 6, 0.8);
	border-top: none;

	&:hover {
		background-color: rgba(251, 0, 6, 0.8);
		color: #ffffff;
	}
`;

export const LinkOrder = styled(LinkMainPage)`
	transform: translateY(${({ open }) => (open ? '0' : '-100px')});
	transition: translateY 0.5s ease;
`;
