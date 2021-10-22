import Layout from './components/Layout/Layout';
import { OrderProvider } from './globalContext/ContextProvider';

function App() {
	return (
		<div>
			<OrderProvider>
				<Layout />
			</OrderProvider>
		</div>
	);
}

export default App;
