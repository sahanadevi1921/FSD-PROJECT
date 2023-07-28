
package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.iamneo.security.entity.Orders;



@Repository
public interface OrderRepository extends JpaRepository<Orders,Long>{
	

}                   

