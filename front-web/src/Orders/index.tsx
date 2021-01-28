import { useEffect, useState } from 'react';
import { fetchProducts, saveOrder } from '../api';
import { toast } from 'react-toastify';
import Footer from '../Footer';
import { OrderLocationData, Product } from '../types';
import { checkIsSelected } from './helpers';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import './styles.css';

function Orders() { //estrutura de um componente em React


    /*REQUISIÇÃO AO DADOS NO BACK END */
    //Estado que vai armazenar a lista de produtos.
    const [products, setProducts] = useState<Product[]>([]); //iniciando com lista vazia.
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
    const totalPrice = selectedProducts.reduce((sum, item) => {
        return sum + item.price;
    }, 0);

    //Cíclo de vida do componente. Exexcuta quando o componente é inicializado.
    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(() => {
                toast.warning('Erro ao listar produtos!');
            })
    }, []);


    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, product);

        if (isAlreadySelected) {
            const selected = selectedProducts.filter(item => item.id !== product.id);
            setSelectedProducts(selected);
        } else {
            setSelectedProducts(previous => [...previous, product]);
        }
    }

    const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));
        const payload = {
            ...orderLocation!,
            products: productsIds
        }

        saveOrder(payload)
            .then((response) => {
                toast.error(`Pedido enviado com sucesso! Nº ${response.data.id}`);
                setSelectedProducts([]);
            })
            .catch(() => {
                toast.warning('Erro ao enviar pedido');
            })
    }

    return (
        <>
            <div className="orders-container">
                <StepsHeader />
                <ProductsList
                    products={products}
                    onSelectedProduct={handleSelectProduct}
                    selectedProducts={selectedProducts}
                />
                <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
                <OrderSummary amount={selectedProducts.length} totalPrice={totalPrice} onSubmit={handleSubmit} />
            </div>
            <Footer />
        </>
    )
}

export default Orders;