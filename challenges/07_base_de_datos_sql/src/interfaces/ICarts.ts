import IProduct from "./IProducts";

interface ICart {
    id: Number,
    timestamp: Date,
    products: Array<IProduct>,
}

export default ICart;