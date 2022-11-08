import { faArrowCircleLeft, faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Button, ButtonBack, ContainerButton } from "./stylesFinishbutton";

const FinishShoppingButton = () => {
    return (
        <>
            <ContainerButton className="text-emerald-400">
                <Link to="/cart">
                    <Button>
                        <FontAwesomeIcon icon={faCartArrowDown} className="mt-1" />
                        {'  '}Ver Carrito
                    </Button>
                </Link>
            </ContainerButton>
            <ContainerButton>
                <Link to="/">
                    <ButtonBack className="text-rose-50">
                        <FontAwesomeIcon icon={faArrowCircleLeft} className="mt-1  " />
                        {'  '}Seguir Comprando
                    </ButtonBack>
                </Link>
            </ContainerButton>
        </>
    );
};

export default FinishShoppingButton;