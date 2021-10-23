import React, { useEffect, useState, Fragment } from 'react';
import * as S from './Order.Elements';
import { useOrderContext } from '../../globalContext/ContextProvider';
import { orderDescription } from '../../utils/orderDescription';
//import Countdown from 'react-countdown';

const Order = () => {
	const [data, setData] = useState(null);
	const { order } = useOrderContext();
	console.log(order);

	useEffect(() => {
		if (order) setData(orderDescription(order));

		return () => {
			setData(null);
		};
	}, [order]);

	return (
		<Fragment>
			{data && (
				<S.OrderWrapper>
					<S.Paragraph>{data.firstLine}</S.Paragraph>
					<S.Paragraph>{data.secondLine}</S.Paragraph>
					<S.PrepWrapper>
						<S.PrepParagraph>{'will by ready in :'}</S.PrepParagraph>
						<S.PrepTime>{data.prepTime}</S.PrepTime>
						{/* <Countdown
							date={Date.now() + 59000}
							daysInHours={true}
							renderer={({ hours, minutes, seconds }) => <S.Timer>{`${hours}:${minutes}:${seconds}`}</S.Timer>}
						>
							<S.DoneInfo>DONE !!!</S.DoneInfo>
						</Countdown> */}
					</S.PrepWrapper>
				</S.OrderWrapper>
			)}
		</Fragment>
	);
};

export default Order;
