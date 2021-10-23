import styled, { css } from 'styled-components';
import { DownArrow } from '@styled-icons/boxicons-solid/DownArrow';
import { Check } from '@styled-icons/entypo/Check';

export const FormWrapper = styled.form`
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
		height: 500px;
	}
`;

export const Title = styled.h1`
	margin: 10px;

	@media (max-width: 425px) {
		font-size: 18px;
	}
`;

export const FormContent = styled.div``;

export const FieldWrapper = styled.div`
	position: relative;
	padding: 10px;
	margin-bottom: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 50px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.3);

	@media (max-width: 650px) {
		gap: 20px;
	}

	@media (max-width: 425px) {
		padding: 8px;
		margin-bottom: 0;
		flex-direction: column;
		gap: 10px;
	}
`;

export const InputWrapper = styled.div`
	position: relative;
	padding-right: 20px;

	@media (max-width: 425px) {
		padding: 0;
	}
`;

export const Label = styled.label`
	width: 150px;
	color: #ffffff;

	@media (max-width: 425px) {
		align-self: flex-start;
		font-size: 14px;
	}
`;

const sharedInputStyles = css`
	width: 300px;
	border: none;
	border-bottom: 3px solid transparent;
	background-color: #ffffff;
	padding: 10px;
	font-size: 18px;
	line-height: 18px;
	text-align: center;
	${({ error }) => error && 'border-bottom-color: #ff0000;'};

	@media (max-width: 650px) {
		width: 200px;
		font-size: 16px;
		line-height: 16px;
	}

	@media (max-width: 425px) {
		width: 250px;
		padding: 6px 10px;
		font-size: 14px;
		line-height: 14px;
	}

	@media (max-width: 350px) {
		width: 220px;
		padding: 6px 10px;
		font-size: 14px;
	}
`;

export const Input = styled.input`
	${sharedInputStyles}
`;

export const Select = styled.select`
	${sharedInputStyles}
	position: relative;
`;

export const SelectArrow = styled(DownArrow)`
	position: absolute;
	right: 35px;
	top: 50%;
	transform: translateY(-50%);
	height: 15px;
	z-index: 2;
	color: #000000;

	@media (max-width: 425px) {
		right: 10px;
	}
`;

export const InputChecked = styled(Check)`
	position: absolute;
	right: -10px;
	top: 50%;
	transform: translateY(-50%);
	z-index: 2;
	opacity: ${({ valid }) => (valid ? '1' : '0')};
	color: #00c100;
	height: 30px;
	transition: opacity 0.5s ease;

	@media (max-width: 425px) {
		right: -32px;
	}
`;

export const Option = styled.option`
	font-size: 18px;
`;

export const ErrorMessage = styled.span`
	position: absolute;
	right: 20px;
	bottom: -20px;
	font-size: 15px;
	color: #ff0000;
`;

export const BtnWrapper = styled.div`
	position: absolute;
	bottom: 20px;
	max-width: 540px;
	width: 100%;
	padding: 10px 30px;
	display: flex;
	justify-content: flex-end;
	gap: 30px;

	@media (max-width: 425px) {
		padding: 0 10px;
		width: auto;
		justify-content: space-between;
		gap: auto;
	}
`;

const btnSharedStyles = css`
	background-color: transparent;
	border: 2px solid;
	font-size: 20px;
	font-weight: bold;

	@media (max-width: 425px) {
		padding: 12px 25px;
	}

	@media (max-width: 350px) {
		font-size: 15px;
	}
`;

export const BtnOrder = styled.button`
	${btnSharedStyles}
	padding: 10px 55px;
	border-color: green;
	color: green;
	transition: all 0.5s ease;

	&:hover {
		color: white;
		background-color: green;
	}
`;

export const BtnReset = styled.button`
	${btnSharedStyles}
	padding: 10px 20px;
	border-color: red;
	color: red;
	transition: all 0.5s ease;

	&:hover {
		color: white;
		background-color: red;
	}
`;
