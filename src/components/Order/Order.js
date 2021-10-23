import React, { useEffect, useState, Fragment } from 'react';
import * as S from './Order.Elements';
import { useOrderContext } from '../../globalContext/ContextProvider';
import { orderDescription } from '../../utils/orderDescription';
import Countdown from 'react-countdown';
import { parsePrepTime } from '../../utils/parsePrepTime';

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

	const renderer = ({ hours, minutes, seconds, completed }) => {
		if (completed) {
			return <S.DoneInfo>is Prepered !!!</S.DoneInfo>;
		} else {
			return <S.Timer>will be ready in : {`${hours}:${minutes}:${seconds}`}</S.Timer>;
		}
	};
	return (
		<Fragment>
			{data && (
				<S.OrderWrapper>
					<S.Title>Your order data</S.Title>
					<S.OrderData>
						{data.orderData.map((item, index) => (
							<S.DataWrapper key={index}>
								<S.KeyValue>{item.keyName}</S.KeyValue>
								<S.DataValue>{item.dataValue}</S.DataValue>
							</S.DataWrapper>
						))}
					</S.OrderData>
					<S.Paragraph>{data.text}</S.Paragraph>
					<Countdown date={Date.now() + parsePrepTime(order.preparation_time)} daysInHours={true} renderer={renderer} zeroPadTime={2} />
				</S.OrderWrapper>
			)}
		</Fragment>
	);
};

export default Order;
