import styled from 'styled-components';

export const FormWrapper = styled.form`
	max-width: 500px;
	width: 100%;
	padding: 20px;
	background-color: rgba(0, 0, 0, 0.7);
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const InputWrapper = styled.div`
	position: relative;
	width: 100%;
	padding: 10px;
	margin-bottom: 30px;
	display: flex;
	justify-content: space-between;
`;

export const Label = styled.label`
	color: #ffffff;
	//color: #009d00;
`;

export const Input = styled.input`
	max-width: 300px;
	width: 100%;
	border: 2px solid transparent;
	${({ isValid }) => isValid && 'border: 2px solid #009d00;'};
	${({ error }) => error && 'border: 2px solid #ff0000;'};
	${({ active }) => active && 'border-bottom: 2px solid #0080ff;'};
	background-color: #ffffff;
	padding: 5px 10px;
	outline-style: none;
`;

export const Select = styled.select`
	${Input};
`;

export const ErrorMessage = styled.span`
	position: absolute;
	right: 15px;
	bottom: -15px;
	font-size: 14px;
	color: #ff0000;
`;
