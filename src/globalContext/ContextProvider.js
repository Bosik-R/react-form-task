import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext({
	order: null,
	timer: null,
	setTimer: () => {},
	setOrder: () => {},
});

export const OrderProvider = ({ children }) => {
	const [order, setOrder] = useState(null);
	const [timer, setTimer] = useState(null);

	return <GlobalContext.Provider value={{ order, setOrder, timer, setTimer }}>{children}</GlobalContext.Provider>;
};

export const useOrderContext = () => useContext(GlobalContext);
