import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from '../../styles/globalStyles';
import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';
import Order from '../Order/Order';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

const Container = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	background-image: url('images/backgroundImage.jpg');
	display: grid;
	place-items: center;
`;

const Layout = () => {
	return (
		<Container>
			<BrowserRouter>
				<GlobalStyles />
				<Header />
				<Switch>
					<Route exact path='/' component={MainPage} />
					<Route path='/order' component={Order} />
				</Switch>
			</BrowserRouter>
		</Container>
	);
};

export default Layout;
