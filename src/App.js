import { useReducer } from 'react';
import Layout from './components/Layout/Layout';
import { OrderProvider } from './globalContext/ContextProvider';

function App() {
	//const [state, dispatch] = useReducer(reducer, game);

	return (
		<div>
			<OrderProvider>
				<Layout />
			</OrderProvider>
		</div>
	);
}

export default App;
