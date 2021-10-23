import styled from 'styled-components';

export const OrderWrapper = styled.section`
	position: relative;
	max-width: 730px;
	width: 100%;
	height: 560px;
	padding: 20px 0;
	margin: 15px;
	background-color: rgba(0, 0, 0, 0.7);
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: 425px) {
		padding: 0;
		margin: 8px;
		height: 530px;
	}
	@media (max-width: 320px) {
		height: 490px;
	}
`;

export const Title = styled.h1`
	width: 100%;
	font-size: 50px;
	text-align: center;
	margin: 0;
	padding: 0;
	padding-bottom: 30px;

	@media (max-width: 425px) {
		font-size: 30px;
		padding-bottom: 10px;
	}
	@media (max-width: 320px) {
		font-size: 20px;
	}
`;

export const OrderData = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	gap: 10px;
	padding: 10px;
	margin-bottom: 20px;
`;

export const DataWrapper = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid rgba(255, 255, 255, 0.3);
	width: 150px;
	background-color: rgba(0, 0, 0, 0.8);

	@media (max-width: 425px) {
		width: 130px;
	}
`;

export const KeyValue = styled.p`
	margin: 10px;
	padding: 0;
	padding-bottom: 5px;
	text-align: center;
	border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

export const DataValue = styled(KeyValue)`
	border-bottom: none;

	@media (max-width: 425px) {
		margin: 5px 0;
	}
`;

export const Paragraph = styled.p`
	font-size: 25px;
	padding: 10px 0;
	margin: 0;
	font-style: italic;
	width: 100%;
	letter-spacing: 2px;
	line-height: 30px;
	text-align: center;

	@media (max-width: 768px) {
		font-size: 18px;
	}

	@media (max-width: 425px) {
		font-size: 16px;
	}
`;

export const Timer = styled(Paragraph)`
	margin-top: 10px;
`;

export const DoneInfo = styled(Paragraph)`
	margin-top: 10px;
	transform: translateY(-50%) rotate(3deg);
	letter-spacing: 2px;
	color: #009722;
	font-weight: bold;
`;
