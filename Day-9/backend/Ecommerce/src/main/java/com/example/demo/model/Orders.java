
package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Orders {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long orderid;
	private Long productid;
	private Long price;
	private String address;
	
	public Long getOrderid() {
		return orderid;
	}
	public void setOrderid(Long Orderid) {
		orderid = Orderid;
	}
	public Long getProductid() {                            
		return productid;
	}
	public void setProductid(Long productid) {
		this.productid = productid;
	}
	public Long getPrice() {
		return price;
	}
	public void setPrice(Long price) {
		this.price = price;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
	
	

}