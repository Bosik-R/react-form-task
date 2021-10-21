//import { useState } from 'react';
import { Form, Field } from 'react-final-form';
import * as S from './FormComponent.Elements';
import { errorMessage } from '../../utils/errorMessages';

const FormComponent = () => {
	//const [order, setOrder] = useState({});
	//console.log(order);

	const onSubmit = async (values) => {
		console.log(values);
		// const method = {
		// 	method: 'POST',
		// 	body: JSON.stringify(values),
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
			{({ meta: { error, touched } }) =>
				error && touched ? <S.ErrorMessage>{error}</S.ErrorMessage> : null
			}
		</Field>
	);

	return (
		<Form onSubmit={onSubmit} validate={(values) => errorMessage(values)}>
			{({ handleSubmit, form, values }) => (
				<S.FormWrapper onSubmit={handleSubmit}>
					<Field name='name' placeholder='Hexocean Pizza'>
						{({ input, placeholder, meta: { valid, error, active, touched } }) => (
							<S.InputWrapper>
								<S.Label>Dish Name</S.Label>
								<S.Input
									{...input}
									placeholder={placeholder}
									isValid={valid}
									error={error && touched && !active ? true : false}
									active={active && !valid ? true : false}
								/>
								<Error name='name' />
								{/* <pre style={{ color: 'white' }}>{JSON.stringify(meta, undefined, 2)}</pre> */}
							</S.InputWrapper>
						)}
					</Field>

					<Field name='type'>
						{({ input, meta: { valid, error, touched } }) => (
							<S.InputWrapper>
								<S.Label>Dish Type</S.Label>
								<S.Select {...input} isValid={valid} error={error && touched ? true : false}>
									<option />
									<option value='pizza'>Pizza</option>
									<option value='soup'>Soup</option>
									<option value='sandwich'>Sandwich</option>
								</S.Select>
								<Error name='type' />
							</S.InputWrapper>
						)}
					</Field>
					<Field name='preparationTime'>
						{({ input, meta: { error, touched } }) => (
							<S.InputWrapper>
								<S.Label>Preparation time</S.Label>
								<S.Input {...input} type='time' step='1' error={error && touched ? true : false} />
								<Error name='preparationTime' />
							</S.InputWrapper>
						)}
					</Field>

					<Condition when='type' is='pizza'>
						<Field name='noOfSlices'>
							{({ input, meta: { error, touched } }) => (
								<S.InputWrapper>
									<S.Label>Number of slices</S.Label>
									<S.Input
										{...input}
										type='number'
										placeholder='8'
										min='4'
										max='100'
										error={error && touched ? true : false}
									/>
									<Error name='noOfSlices' />
								</S.InputWrapper>
							)}
						</Field>

						<div>
							<label></label>
							<Field name='noOfSlices' component='input' type='number' />
						</div>
						<div>
							<label>Diameter</label>
							<Field
								name='diameter'
								component='input'
								type='number'
								step='0.1'
								placeholder='35'
								min='28'
								max='55'
							/>
						</div>
					</Condition>
					<Condition when='type' is='soup'>
						<div>
							<label>Spiciness scale</label>
							<Field
								name='spicinessScale'
								component='input'
								type='number'
								placeholder='1'
								min='1'
								max='10'
							/>
						</div>
					</Condition>
					<Condition when='type' is='sandwich'>
						<div>
							<label>Slices of bread</label>
							<Field
								name='slices_of_bread'
								component='input'
								type='number'
								placeholder='1'
								min='1'
								max='100'
							/>
						</div>
					</Condition>

					<div>
						<button type='submit'>Submit</button>
						<button type='button' onClick={form.reset}>
							Reset
						</button>
					</div>
					<pre style={{ color: 'white' }}>{JSON.stringify(values, 0, 2)}</pre>
				</S.FormWrapper>
			)}
		</Form>
	);
};

export default FormComponent;
