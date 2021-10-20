import React from 'react';
import * as S from './Header.Elements';

const Header = () => {
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
