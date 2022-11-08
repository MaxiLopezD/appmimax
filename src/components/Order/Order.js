import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { ButtonBack } from "../Main/Items/Detail/stylesFinishbutton";
import { ContainerFather, MyUser, MyUser2, OrderContainer } from "./stylesOrder";

const Order = ({ userOrder, orderId }) => {
    return (
        <ContainerFather>
            <h1 className="text-sm md:text-3xl font-semibold uppercase p-4 text-orange-500 md:mt-12 text-center text-my-warning">
                ¡Gracias por confiar en nosotros!
            </h1>
            <br /><br />
            <OrderContainer>
                <MyUser className="text-gray-50">
                    <span className="md:text-2xl uppercase text-my-warning">Nombre:</span> {userOrder.buyer.name}
                </MyUser>
                <MyUser className="text-gray-50">
                    <span className="md:text-2xl uppercase text-my-warning">Email:</span> {userOrder.buyer.email}
                </MyUser>
                <MyUser className="text-gray-50">
                    <span className="md:text-2xl uppercase text-my-warning">Número:</span> {userOrder.buyer.number}
                </MyUser>
                <MyUser className="text-gray-50">
                    <span className="md:text-2xl uppercase text-my-warning">Ciudad:</span> {userOrder.buyer.city}
                </MyUser>
                <MyUser className="text-gray-50">
                    <span className="md:text-2xl uppercase text-my-warning">Domicilio:</span> {userOrder.buyer.home}
                </MyUser>
                <MyUser className="text-gray-50">
                    <span className="md:text-2xl uppercase text-my-warning">Código de seguimiento:</span> {orderId}
                </MyUser>
                <MyUser2 className="text-gray-50">
                    <span className="md:text-2xl uppercase text-my-warning">Productos:</span>{" "}
                    <ul>
                        {userOrder.items.map((item) => (
                            <li key={item.id} className="whitespace-nowrap ">
                                -{`${item.title} X ${item.quantity} U. ($${item.price * item.quantity})`}
                            </li>
                        ))}
                    </ul>
                </MyUser2>
            </OrderContainer>
            <div className="w-full flex justify-center mt-5 py-3">
                <NavLink to="/">
                    <ButtonBack>
                        <FontAwesomeIcon icon={faHouseUser} className="relative right-2" />
                        Volver al inicio
                    </ButtonBack>
                </NavLink>
            </div>
        </ContainerFather>
    );
};

export default Order;