package com.marcossa.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.marcossa.dsvendas.domain.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {

}
