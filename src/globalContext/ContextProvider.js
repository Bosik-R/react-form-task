import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext({
	order: null,
	timer: null,
	done: false,
	setDone: () => {},
	setTimer: () => {},
	setOrder: () => {},
});

export const OrderProvider = ({ children }) => {
	const [order, setOrder] = useState(null);
	const [timer, setTimer] = useState(null);
	const [done, setDone] = useState(false);

	return <GlobalContext.Provider value={{ order, setOrder, timer, setTimer, done, setDone }}>{children}</GlobalContext.Provider>;
};

export const useOrderContext = () => useContext(GlobalContext);
