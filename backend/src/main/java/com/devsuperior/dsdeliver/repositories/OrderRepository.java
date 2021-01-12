package com.devsuperior.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsdeliver.entities.Order;

/*
 * JpaRepository é uma classe que ja implementa as operações básicas no banco de dados: 
 * inserir, atualiza, buscar e deletar.
 * */

public interface OrderRepository extends JpaRepository<Order, Long>{ //<tipo da entidade, tipo do id da entidade>

}
