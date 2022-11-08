import {
    ContainerDetail,
    Img,
    Title,
    DescriptionParagraph,
    StockAlert,
} from "./stylesDetailModa";
import ItemCount from "../ItemCount";

const ItemDetail = ({ item }) => {
    const { title, pictureUrl, desc, price, availableSize, stock } = item;

    return (
        <ContainerDetail className="text-emerald-400">
            <Title>{title}</Title>
            <Img src={pictureUrl} alt={title} />
            <div className="flex flex-col w-full h-24 items-center justify-between lg:relative md:bottom-40 md:pr-28 md:pl-5">
                <span className="font-thin mb-2 md:text-4xl text-fuchsia-50		">
                    Descripción:
                </span>
                <DescriptionParagraph className="font-bold text-lg text-my-warning">{desc}</DescriptionParagraph>
                <span className="text-xs md:text-sm ">
                    {stock <= 0 ? (
                        <StockAlert>No hay Stock Disponible</StockAlert>
                    ) : (
                        availableSize
                    )}
                </span>
                <span className="text-3xl font-thin mt-5 text-fuchsia-50 ">
                    {stock <= 0 ? "" : "Precio:"}
                </span>
                <span className="font-bold text-lg text-my-warning">
                    {stock <= 0 ? "" : `$${price}`}
                </span>
                <ItemCount stock={stock} item={item} />
            </div>
        </ContainerDetail>
    );
};

export default ItemDetail;