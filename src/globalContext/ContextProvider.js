import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext({
	order: null,
	status: true,
	message: '',
	setOrder: () => {},
	setStatus: () => {},
	setMessage: () => {},
});

export const OrderProvider = ({ children }) => {
	const [order, setOrder] = useState(null);
	const [status, setStatus] = useState(true);
	const [message, setMessage] = useState(true);

	return <GlobalContext.Provider value={{ order, setOrder, status, setStatus, message, setMessage }}>{children}</GlobalContext.Provider>;
};

export const useOrderContext = () => useContext(GlobalContext);
