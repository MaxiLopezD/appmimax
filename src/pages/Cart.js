import { Link } from "react-router-dom";
import CartProducts from "../components/Cart/CartProducs";
import TotalPrice from "../components/Cart/TotalPrice";
import { ButtonBack } from "../components/Main/Items/Detail/stylesFinishbutton";
import useAppContext from "../hooks/useAppContext";

const Cart = () => {
    const { cartProducts } = useAppContext();

    return (
        <div className="absolute w-full h-full">
            <div className="mt-5 flex justify-center items-center">
                <h1 className="text-2xl md:text-3xl font-semibold uppercase text-orange-500 absolute top-28 mt-1 md:mt-2 text-gray-50	">
                    Productos mas elegidos:{" "}
                </h1>
                {cartProducts.length !== 0 && <TotalPrice />}
            </div>

            {cartProducts.length === 0 ? (
                <div className="text-xl text-center font-bold h-screen flex flex-col items-center justify-center p-7 md:text-2xl text-my-warning">
                    Todavia no agregaste ningún chocolate, ¿Qué esperas?
                    <Link to="/">
                        <ButtonBack className="mt-5 md:mt-8 text-gray-50	">¡Agregar chocolate!</ButtonBack>
                    </Link>
                </div>
            ) : (
                <CartProducts cartProducts={cartProducts} />
            )}
        </div>
    );
};

export default Cart;