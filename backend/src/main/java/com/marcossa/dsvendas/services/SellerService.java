package com.marcossa.dsvendas.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.marcossa.dsvendas.domain.Seller;
import com.marcossa.dsvendas.dto.SellerDTO;
import com.marcossa.dsvendas.repositories.SellerRepository;

@Service
public class SellerService {
	
	@Autowired
	private SellerRepository repository;
	
	public List<SellerDTO> findAll(){
		List<Seller> list = repository.findAll();
		return list.stream().map(x -> new SellerDTO(x)).collect(Collectors.toList());
	}
}
