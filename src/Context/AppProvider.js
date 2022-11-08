import { createContext, useEffect, useState } from "react";
import { DB } from "../Firebase/Firebaseconfig";
import { collection, getDocs } from "firebase/firestore";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [productsHome, setProductsHome] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);
    const [inCartAlert, setInCartAlert] = useState(0);

    const onAddCart = (item, quantity) => {
        if (isInCart(item.id)) {
            const newCart = cartProducts.map((inCartItem) => {
                if (inCartItem.id === item.id) {
                    return { ...item, quantity: inCartItem.quantity += quantity };
                } else {
                    return inCartItem;
                }
            });
            setCartProducts(newCart);
            setInCartAlert(inCartAlert + quantity);
        } else {
            setCartProducts([...cartProducts, { ...item, quantity }]);
            setInCartAlert(inCartAlert + quantity);
        }
    };

    const isInCart = (id) => cartProducts.find((item) => item.id === id);

    const emptyCart = () => {
        setCartProducts([]);
        setInCartAlert(0);
    };

    const removeItem = (id, quantity) => {
        const newCart = cartProducts.filter((item) => item.id !== id);
        setCartProducts(newCart);
        setInCartAlert(inCartAlert - quantity);

        
        if (cartProducts.length === 1) {
            setInCartAlert(0);
            return;
        } else {
            return
        }
    };

    const totalPrice = () => {
        let acc = 0;
        for (const item of cartProducts) {
            acc += item.quantity * item.price;
        }
        return acc;
    };

    const isLoading = (param) => {
        setLoading(param);
    };

    useEffect(() => {
        isLoading(true);
        const productsCollection = collection(DB, "products");
        getDocs(productsCollection)
            .then((res) => {
                const products = res.docs.map((item) => {
                    return {
                        id: item.id,
                        ...item.data(),
                    };
                });
                setProductsHome(products);
            })
            .catch((error) => console.error(error))
            .finally(() => isLoading(false));
    }, []);

    const productsHomeFilter = productsHome.filter(
        (prodsHome) =>
            prodsHome.price > 400 && prodsHome.price <= 1000 && prodsHome.stock > 1
    );

    return (
        <AppContext.Provider
            value={{
                loading,
                isLoading,
                productsHomeFilter,
                onAddCart,
                cartProducts,
                emptyCart,
                removeItem,
                totalPrice,
                inCartAlert,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider };
export default AppContext;