//import { useState } from 'react';
import { Form, Field } from 'react-final-form';
import * as S from './Main.Elements';

const Main = () => {
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
			{({ meta: { error, touched } }) => (error && touched ? <span>{error}</span> : null)}
		</Field>
	);

	const errorMessage = (values) => {
		const errors = {};
		if (!values.name) {
			errors.name = 'Required';
		}
		if (values.name && values.name.length < 5) {
			errors.name = 'To short name';
		}
		if (!values.type) {
			errors.type = 'Required';
		}
		if (values.type === 'pizza') {
			if (!values.street) {
				errors.noOfSlices = 'Required';
			}
			if (!values.diameter) {
				errors.diameter = 'Required';
			}
		}
		if (values.type === 'soup') {
			if (!values.spicinessScale) {
				errors.spicinessScale = 'Required';
			}
		}
		if (values.type === 'sandwich') {
			if (!values.slicesOfBread) {
				errors.slicesOfBread = 'Required';
			}
		}
		return errors;
	};

	return (
		<S.MainWrapper>
			<Form onSubmit={onSubmit} validate={(values) => errorMessage(values)}>
				{({ handleSubmit, form, values, pristine }) => (
					<form onSubmit={handleSubmit}>
						<div>
							<label>Dish Name</label>
							<Field name='name' component='input' placeholder='Hexocean Pizza' />
							<Error name='name' />
						</div>

						<div>
							<label>Dish type</label>
							<Field name='type' component='select'>
								<option />
								<option value='pizza'>Pizza</option>
								<option value='soup'>Soup</option>
								<option value='sandwich'>Sandwich</option>
							</Field>
						</div>

						<div>
							<label>Preparation time</label>
							<Field name='preparation_time' component='input' type='time' step='1' />
						</div>

						<Condition when='type' is='pizza'>
							<div>
								<label>Number of slices</label>
								<Field
									name='noOfSlices'
									component='input'
									type='number'
									placeholder='8'
									min='4'
									max='100'
								/>
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
						<pre>{JSON.stringify(values, 0, 2)}</pre>
					</form>
				)}
			</Form>
		</S.MainWrapper>
	);
};

export default Main;
