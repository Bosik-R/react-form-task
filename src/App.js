import { useState } from 'react';
import { Form, Field } from 'react-final-form';
import styled from 'styled-components';

const FaderDiv = styled.div`
	transition: all 1s ease;
	opacity: ${({ show }) => (show ? '1' : '0')};
`;

function App() {
	const [order, setOrder] = useState({});
	console.log(order);

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

	return (
		<div>
			<header>
				<h1>React Form</h1>
			</header>
			<section>
				<Form
					onSubmit={onSubmit}
					render={({ handleSubmit, values }) => (
						<form onSubmit={handleSubmit}>
							<div>
								<label>Dish Name</label>
								<Field name='name' component='input' placeholder='Hexocean Pizza' />
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
									<Field name='no_of_slices' component='input' type='number' placeholder='8' min='4' max='100' />
								</div>
								<div>
									<label>Diameter</label>
									<Field name='diameter' component='input' type='number' step='0.1' placeholder='35' min='28' max='55' />
								</div>
							</Condition>
							<Condition when='type' is='soup'>
								<div>
									<label>Spiciness scale</label>
									<Field name='spiciness_scale' component='input' type='number' placeholder='1' min='1' max='10' />
								</div>
							</Condition>
							<Condition when='type' is='sandwich'>
								<div>
									<label>Slices of bread</label>
									<Field name='slices_of_bread' component='input' type='number' placeholder='1' min='1' max='100' />
								</div>
							</Condition>

							<div>
								<button type='submit'>Submit</button>
							</div>
							<pre>{JSON.stringify(values, 0, 2)}</pre>
						</form>
					)}
				/>
			</section>
		</div>
	);
}

export default App;
