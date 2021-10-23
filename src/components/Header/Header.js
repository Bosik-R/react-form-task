import React from 'react';
import * as S from './Header.Elements';
import { useOrderContext } from '../../globalContext/ContextProvider';

const Header = () => {
	const { order } = useOrderContext();

	return (
		<S.Wrapper>
			<S.Title>Your path to delicious eating</S.Title>
			<S.Nav>
				<S.LinksWrapper open={order}>
					<S.LinkMainPage to='/'>order form</S.LinkMainPage>
					<S.LinkOrder to='/order'>your order</S.LinkOrder>
				</S.LinksWrapper>
			</S.Nav>
		</S.Wrapper>
	);
};

export default Header;
