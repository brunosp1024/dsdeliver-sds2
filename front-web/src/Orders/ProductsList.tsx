import { Product } from "../types";
import ProductCard from "./ProductCard";

type props = {
    products: Product[];
}

function ProductsList({ products }: props) { //estrutura de um componente em React
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>

        </div>
    )
}

export default ProductsList;