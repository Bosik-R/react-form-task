import styled from 'styled-components';

export const OrderWrapper = styled.section`
	position: relative;
	max-width: 500px;
	width: 100%;
	padding: 30px;
	margin: 8px;
	margin-top: 30px;
	background-color: rgba(0, 0, 0, 0.7);
	display: flex;
	flex-direction: column;
`;

export const Paragraph = styled.p`
	font-size: 25px;
	padding: 10px 0;
	margin: 0;
	font-style: italic;
	width: 100%;
	letter-spacing: 2px;
	line-height: 25px;
	text-align: center;

	@media (max-width: 768px) {
		line-height: 18px;
		font-size: 18px;
	}

	@media (max-width: 425px) {
		line-height: 16px;
		font-size: 16px;
	}
`;

export const PrepWrapper = styled.div`
	display: flex;
	align-items: center;
	padding: 10px;

	@media (max-width: 425px) {
		flex-wrap: wrap;
	}
`;

export const PrepParagraph = styled(Paragraph)`
	width: 70%;
	padding-right: 30px;
	text-align: right;

	@media (max-width: 768px) {
		padding-right: 15px;
	}

	@media (max-width: 425px) {
		width: 75%;
	}
`;

export const PrepTime = styled(Paragraph)`
	width: 30%;

	@media (max-width: 425px) {
		width: 25%;
	}
`;

// export const DoneInfo = styled.p`
// 	font-size: 20px;
// 	font-style: italic;
// 	letter-spacing: 2px;
// 	color: #009722;
// 	font-weight: bold;
// 	transform: rotate(8deg);

// 	@media (max-width: 768px) {
// 		margin: 10px 0;
// 		width: 100%;
// 		text-align: center;
// 		font-size: 40px;
// 	}

// 	@media (max-width: 425px) {
// 		margin
// 		font-size: 30px;
// 	}
// `;

// export const Timer = styled.p`
// 	font-size: 25px;
// 	padding: 0;
// 	margin: 0;
// `;
