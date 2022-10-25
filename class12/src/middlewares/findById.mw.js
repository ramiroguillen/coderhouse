import products from "../apis/productsApi.js";

async function findById(req, res, next) {
    let element = await products.elements.find(e => e.id === parseInt(req.params.id));
    if (element) {
        next();
    } else { res.json({ error: "element not found" }) }
}

export default findById;