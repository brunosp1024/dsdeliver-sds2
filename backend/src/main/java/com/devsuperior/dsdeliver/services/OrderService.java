package com.devsuperior.dsdeliver.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsdeliver.dto.OrderDTO;
import com.devsuperior.dsdeliver.dto.ProductDTO;
import com.devsuperior.dsdeliver.entities.Order;
import com.devsuperior.dsdeliver.entities.OrderStatus;
import com.devsuperior.dsdeliver.entities.Product;
import com.devsuperior.dsdeliver.repositories.OrderRepository;
import com.devsuperior.dsdeliver.repositories.ProductRepository;

@Service
public class OrderService {

	@Autowired
	private OrderRepository orderRepo;

	@Autowired
	private ProductRepository prodRepo;

	@Transactional(readOnly = true) // Garante a atomicidade. Tudo ou nada! readOnly sendo true, garante que esse
									// método é apenas de leitura.
	public List<OrderDTO> findAll() {
		List<Order> list = orderRepo.findOrderWithProducts();
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList()); // Converte a lista de Product em
																						// ProductDTO.
	}

	@Transactional
	public OrderDTO insert(OrderDTO dto) {
		Order order = new Order(null, dto.getAddress(), dto.getLatitude(), dto.getLongitude(), Instant.now(),
				OrderStatus.PENDING);
		for (ProductDTO p : dto.getProducts()) {
			Product product = prodRepo.getOne(p.getId()); // Pega a referencia do obj p, pelo id, e atribui a product, sem precisar ir ao
															// banco de dados. Melhor desempenho.
			order.getProducts().add(product);
		}
		order = orderRepo.save(order);
		return new OrderDTO(order);
	}
	
	@Transactional
	public OrderDTO setDelivered(Long id) {
		Order order = orderRepo.getOne(id);
		order.setStatus(OrderStatus.DELIVERED);
		order = orderRepo.save(order);
		return new OrderDTO(order);
	}

}
