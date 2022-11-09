import {
    ContainerFooter,
    ContainerGitHub,
    ContainerSocials,
    FollowUs,
    H4,
    PhraseContainer,
    Socials,
} from "./stylesFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import useAppContext from "../../hooks/useAppContext";

const Footer = () => {
    const { loading } = useAppContext();
    return (
        <>
            {!loading && (
                <ContainerFooter>
                    <PhraseContainer>
                        <H4 className="text-my-warning">Precios increibles</H4>
                    </PhraseContainer>
                    <ContainerSocials>
                        <FollowUs className="text-my-warning">Seguinos en nuestras redes!</FollowUs>
                        <Socials>
                            <a href="https://www.facebook.com/" target="_BLANK" rel="noreferrer">
                                <img src='https://i.postimg.cc/wxsYmPkJ/face.png' border='0' alt='facebook'
                                    className="text-2xl md:text-4xl mt-2 hover:scale-125 transition-all duration-300" />
                            </a>

                            <a href="https://www.instagram.com/" target="_BLANK" rel="noreferrer">
                                <img src='https://i.postimg.cc/HWJ87pK2/instagram.png' border='0' alt='instagram'
                                    className="text-2xl md:text-4xl mt-2 hover:scale-125 transition-all duration-300" />
                            </a>

                            <a href="https://web.whatsapp.com" target="_BLANK" rel="noreferrer">
                                <img src='https://i.postimg.cc/Y9P4yV4Y/whatsapp2.png' border='0' alt='whatsapp'
                                    className="text-2xl md:text-4xl mt-2 hover:scale-125 transition-all duration-300" />
                            </a>

                        </Socials>
                    </ContainerSocials>
                    
                    <ContainerGitHub>
                        <a
                            href="https://github.com/MaxiLopezD"
                            target="_BLANK"
                            rel="noreferrer"
                            className="text-black hover:text-indigo-600 transition-all duration-300"
                        >
                            <FontAwesomeIcon
                                icon={faGithub}
                                className="mr-1 text-4xl md:text-5xl"
                            />
                        </a>
                    </ContainerGitHub>
                </ContainerFooter>
            )}
        </>
    );
};

export default Footer;