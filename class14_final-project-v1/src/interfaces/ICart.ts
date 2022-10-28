import IProduct from "./IProduct";

interface ICart {
    id: Number,
    timestamp: Date,
    products: Array<IProduct>,
}

export default ICart;