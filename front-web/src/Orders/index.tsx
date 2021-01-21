import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import { OrderLocationData, Product } from '../types';
import OrderLocation from './OrderLocation';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import './styles.css';

function Orders() { //estrutura de um componente em React


    /*REQUISIÇÃO AO DADOS NO BACK END */
    //Estado que vai armazenar a lista de produtos.
    const [products, setProducts] = useState<Product[]>([]); //iniciando com lista vazia.
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

    //Cíclo de vida do componente. Exexcuta quando o componente é inicializado.
    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products}/>
            <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
        </div>
    )
}

export default Orders;