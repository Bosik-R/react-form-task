import { Form, Field } from 'react-final-form';
import * as S from './FormComponent.Elements';
import { errorMessage } from '../../utils/errorMessages';
import { useOrderContext } from '../../globalContext/ContextProvider';

const FormComponent = () => {
	const { setOrder } = useOrderContext();

	const onSubmit = async (values) => {
		// const newValues = {
		// 	name: values.name,
		// 	type: values.type,
		// 	preparation_time: values.preparation_time,
		// 	spiciness_scale: parseInt(values.spiciness_scale),
		// };

		//const float = parseInt(values.diameter);

		console.log(parseFloat(values.diameter));
		// let newValues;

		// if (values.type === 'pizza') {
		// 	newValues = { ...constValues, no_of_slices: values.no_of_slices, diameter: values.diameter };
		// }
		// if (values.type === 'soupe') {
		// 	newValues = { ...constValues, spiciness_scale: values.spiciness_scale };
		// }
		// if (values.type === 'sandwich') {
		// 	newValues = { ...constValues, slices_of_bread: values.slices_of_bread };
		// }

		// console.log(constValues);
		// const method = {
		// 	method: 'POST',
		// 	body: JSON.stringify(newValues),
		// 	headers: { 'Content-Type': 'application/json' },
		// };
		// const response = await fetch('https://frosty-wood-6558.getsandbox.com:443/dishes', method);
		// const data = await response.json();
		// setOrder(data);
	};

	const Condition = ({ when, is, children }) => {
		return (
			<Field name={when} subscription={{ value: true }}>
				{({ input: { value } }) => (value === is ? children : null)}
			</Field>
		);
	};

	const Error = ({ name }) => (
		<Field name={name} subscription={{ error: true, touched: true }}>
			{({ meta: { error, touched } }) => (error && touched ? <S.ErrorMessage>{error}</S.ErrorMessage> : null)}
		</Field>
	);

	return (
		<Form onSubmit={onSubmit} validate={(values) => errorMessage(values)}>
			{({ handleSubmit, values, form }) => (
				<S.FormWrapper
					onSubmit={(event) => {
						handleSubmit(event);
						//form.restart();
					}}
				>
					<S.Title>delicious food at your fingertips</S.Title>
					<S.FormContent>
						<Field name='name' placeholder='Hexocean Pizza'>
							{({ input, placeholder, meta: { valid, error, touched } }) => (
								<S.FieldWrapper>
									<S.Label>Dish Name</S.Label>
									<S.InputWrapper>
										<S.Input {...input} placeholder={placeholder} error={error && touched} />
										<Error name='name' />
										<S.InputChecked valid={valid} />
									</S.InputWrapper>
								</S.FieldWrapper>
							)}
						</Field>
						<Field name='type'>
							{({ input, meta: { valid, error, touched } }) => (
								<S.FieldWrapper>
									<S.Label>Dish Type</S.Label>
									<S.InputWrapper>
										<S.Select {...input} error={error && touched}>
											<S.Option />
											<S.Option value='pizza'>Pizza</S.Option>
											<S.Option value='soup'>Soup</S.Option>
											<S.Option value='sandwich'>Sandwich</S.Option>
										</S.Select>
										<S.InputChecked valid={valid} />
										<S.SelectArrow />
										<Error name='type' />
									</S.InputWrapper>
								</S.FieldWrapper>
							)}
						</Field>
						<Field name='preparation_time'>
							{({ input, meta: { error, touched, valid } }) => (
								<S.FieldWrapper>
									<S.Label>Preparation time</S.Label>
									<S.InputWrapper>
										<S.Input {...input} type='time' step='1' error={error && touched} />
										<Error name='preparation_time' />
										<S.InputChecked valid={valid} />
									</S.InputWrapper>
								</S.FieldWrapper>
							)}
						</Field>
						<Condition when='type' is='pizza'>
							<Field name='no_of_slices'>
								{({ input, meta: { error, touched, valid } }) => (
									<S.FieldWrapper>
										<S.Label>Number of slices</S.Label>
										<S.InputWrapper>
											<S.Input {...input} type='number' placeholder='8' min='4' max='100' error={error && touched} />
											<Error name='no_of_slices' />
											<S.InputChecked valid={valid} />
										</S.InputWrapper>
									</S.FieldWrapper>
								)}
							</Field>
							<Field name='diameter'>
								{({ input, meta: { error, touched, valid } }) => (
									<S.FieldWrapper>
										<S.Label>Diameter</S.Label>
										<S.InputWrapper>
											<S.Input {...input} type='number' step='0.1' placeholder='35' min='28' max='55' error={error && touched} />
											<Error name='diameter' />
											<S.InputChecked valid={valid} />
										</S.InputWrapper>
									</S.FieldWrapper>
								)}
							</Field>
						</Condition>
						<Condition when='type' is='soup'>
							<Field name='spiciness_scale'>
								{({ input, meta: { error, touched, valid } }) => (
									<S.FieldWrapper>
										<S.Label>Spiciness scale</S.Label>
										<S.InputWrapper>
											<S.Input {...input} type='number' placeholder='1' min='1' max='10' error={error && touched} />
											<Error name='spiciness_scale' />
											<S.InputChecked valid={valid} />
										</S.InputWrapper>
									</S.FieldWrapper>
								)}
							</Field>
						</Condition>
						<Condition when='type' is='sandwich'>
							<Field name='slices_of_bread'>
								{({ input, meta: { error, touched, valid } }) => (
									<S.FieldWrapper>
										<S.Label>Slices of bread</S.Label>
										<S.InputWrapper>
											<S.Input {...input} type='number' placeholder='1' min='1' max='100' error={error && touched} />
											<Error name='slices_of_bread' />
											<S.InputChecked valid={valid} />
										</S.InputWrapper>
									</S.FieldWrapper>
								)}
							</Field>
						</Condition>
					</S.FormContent>
					<S.BtnWrapper>
						<S.BtnSubmit type='submit'>Submit</S.BtnSubmit>
						<S.BtnReset type='button' onClick={form.reset}>
							Reset
						</S.BtnReset>
					</S.BtnWrapper>
					<S.PRE>{JSON.stringify(values, 0, 2)}</S.PRE>
				</S.FormWrapper>
			)}
		</Form>
	);
};
//{/* <Field name='type'>{(fieldState) => <pre style={{ color: 'white' }}>{JSON.stringify(fieldState, undefined, 2)}</pre>}</Field> */}

export default FormComponent;
