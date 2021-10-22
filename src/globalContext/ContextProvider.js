import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext({
	order: null,
	setOrder: () => {},
});

export const OrderProvider = ({ children }) => {
	const [order, setOrder] = useState(null);
	return <GlobalContext.Provider value={{ order, setOrder }}>{children}</GlobalContext.Provider>;
};

export const useOrderContext = () => useContext(GlobalContext);
