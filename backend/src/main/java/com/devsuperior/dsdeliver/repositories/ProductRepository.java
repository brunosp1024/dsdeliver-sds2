package com.devsuperior.dsdeliver.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsdeliver.entities.Product;

/*
 * JpaRepository é uma classe que ja implementa as operações básicas no banco de dados: 
 * inserir, atualiza, buscar e deletar.
 * */

public interface ProductRepository extends JpaRepository<Product, Long>{ //<tipo da entidade, tipo do id da entidade>

	List<Product> findAllByOrderByNameAsc(); //Busca ordenado por nome, crescente
		
	
}
