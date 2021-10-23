import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.header`
	width: 100%;
`;

export const Title = styled.h1`
	padding: 30px 10px;
	margin: 0;
	color: #fb0006;
	font-size: 40px;
	font-weight: bold;
	text-align: center;
	background-color: rgba(0, 0, 0, 0.9);
	border-bottom: 1px solid rgba(251, 0, 6, 0.9);

	@media (max-width: 768px) {
		font-size: 20px;
		padding: 10px;
	}

	@media (max-width: 320px) {
		@media (max-height: 640px) {
			display: none;
		}
	}
`;

export const Nav = styled.nav`
	position: relative;
	margin: 0 auto;
	width: 280px;
	height: 100px;
	background: transparent;
	overflow: hidden;

	@media (max-width: 768px) {
		width: 240px;
		height: 70px;
	}

	@media (max-width: 425px) {
		height: 50px;
	}
`;

export const LinksWrapper = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: -1px;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-60px)')};
	transition: transform 0.4s ease-in-out;
`;

export const LinkMainPage = styled(Link)`
	padding: 20px;
	background-color: rgba(0, 0, 0, 0.9);
	border: 1px solid rgba(251, 0, 6, 0.8);

	&:hover {
		background-color: rgba(251, 0, 6, 0.8);
		color: #ffffff;
	}

	@media (max-width: 768px) {
		padding: 15px;
		font-size: 14px;
	}

	@media (max-width: 425px) {
		font-size: 12px;
	}
`;

export const LinkOrder = styled(LinkMainPage)``;
