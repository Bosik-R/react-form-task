import styled, { css } from 'styled-components';
import { DownArrow } from '@styled-icons/boxicons-solid/DownArrow';
import { Check } from '@styled-icons/entypo/Check';

export const FormWrapper = styled.form`
	position: relative;
	max-width: 730px;
	width: 100%;
	height: 540px;
	padding: 20px;
	background-color: rgba(0, 0, 0, 0.7);
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Title = styled.h1`
	margin: 10px;
`;

export const FormContent = styled.div`
	width: 100%;
`;

export const FieldWrapper = styled.div`
	position: relative;
	width: 100%;
	padding: 10px;
	margin-bottom: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 50px;
`;

export const InputWrapper = styled.div`
	position: relative;
	padding-right: 20px;
`;

export const Label = styled.label`
	width: 150px;
	color: #ffffff;
`;

const sharedStyles = css`
	width: 300px;
	border: none;
	border-bottom: 3px solid transparent;
	background-color: #ffffff;
	padding: 10px;
	${({ error }) => error && 'border-bottom-color: #ff0000;'};
`;

export const Input = styled.input`
	${sharedStyles}
`;

export const Select = styled.select`
	${sharedStyles}
	position: relative;
`;

export const SelectArrow = styled(DownArrow)`
	position: absolute;
	right: 35px;
	top: 50%;
	transform: translateY(-50%);
	height: 15px;
	z-index: 2;
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
`;

const btnSharedStyles = css`
	background-color: transparent;
	border: 2px solid;
	font-size: 20px;
	font-weight: bold;
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

export const PRE = styled.pre`
	position: absolute;
	bottom: -150px;
	left: 50%;
	background-color: black;
	padding: 10px;
	color: white;
`;
