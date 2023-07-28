package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.iamneo.security.entity.Product;



@Repository
public interface ProductRepository extends JpaRepository<Product,Long> {
	

}
    