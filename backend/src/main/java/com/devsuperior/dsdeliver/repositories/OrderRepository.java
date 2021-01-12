package com.devsuperior.dsdeliver.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.dsdeliver.entities.Order;
import com.devsuperior.dsdeliver.entities.Product;

/*
 * JpaRepository é uma classe que ja implementa as operações básicas no banco de dados: 
 * inserir, atualiza, buscar e deletar.
 * */

public interface OrderRepository extends JpaRepository<Order, Long>{ //<tipo da entidade, tipo do id da entidade>

	/*
	 * Busca customizada. Consulta objetos Orders cujo status = 0, 
	 * ordenando pelo momento, do mais antigo pra o mais recente.
	 * */
	@Query("SELECT DISTINCT obj FROM Order obj JOIN FETCH obj.products "
			+ " WHERE obj.status = 0 ORDER BY obj.moment ASC")
	List<Order> findOrderWithProducts();
	
}
