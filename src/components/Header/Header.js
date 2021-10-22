import React from 'react';
import * as S from './Header.Elements';
import { useOrderContext } from '../../globalContext/ContextProvider';

const Header = () => {
	const { order } = useOrderContext();
	console.log(order);

	return (
		<S.Wrapper>
			<S.Title>Your path to delicious eating</S.Title>
			<S.Nav>
				<S.LinkMainPage to='/'>menu</S.LinkMainPage>
				<S.LinkOrder to='/order' open={order}>
					orders
				</S.LinkOrder>
			</S.Nav>
		</S.Wrapper>
	);
};

export default Header;
