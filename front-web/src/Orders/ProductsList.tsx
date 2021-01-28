import { Product } from "../types";
import { checkIsSelected } from "./helpers";
import ProductCard from "./ProductCard";

type props = {
    products: Product[];
    selectedProducts: Product[]
    onSelectedProduct: (product: Product) => void;
}

function ProductsList({ products, selectedProducts, onSelectedProduct }: props) { //estrutura de um componente em React
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onSelectedProduct={onSelectedProduct}
                        isSelected={checkIsSelected(selectedProducts, product)}
                    />
                ))}
            </div>

        </div>
    )
}

export default ProductsList;