package com.marcossa.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.marcossa.dsvendas.domain.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
