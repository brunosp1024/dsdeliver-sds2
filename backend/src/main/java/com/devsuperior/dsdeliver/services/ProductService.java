package com.devsuperior.dsdeliver.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsdeliver.dto.ProductDTO;
import com.devsuperior.dsdeliver.entities.Product;
import com.devsuperior.dsdeliver.repositories.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository prodRepo;
	
	@Transactional(readOnly = true) //Garante a atomicidade. Tudo ou nada! readOnly sendo true, garante que esse método é apenas de leitura.
	public List<ProductDTO> findAll(){
		List<Product> list = prodRepo.findAllByOrderByNameAsc();
		return list.stream().map(x -> new ProductDTO(x)).collect(Collectors.toList()); //Converte a lista de Product em ProductDTO.
	}

}
