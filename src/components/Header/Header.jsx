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
				<S.Btn>
					<S.BtnText>menu</S.BtnText>
				</S.Btn>
				<S.Btn>
					<S.BtnText>orders</S.BtnText>
				</S.Btn>
			</S.Nav>
		</S.Wrapper>
	);
};

export default Header;
