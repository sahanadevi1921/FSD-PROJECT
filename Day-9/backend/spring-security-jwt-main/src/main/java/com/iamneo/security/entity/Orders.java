
package com.iamneo.security.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="shiping")
public class Orders {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long orderid;
	private String address;
	
	public Long getOrderid() {
		return orderid;
	}
	public void setOrderid(Long Orderid) {
		orderid = Orderid;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Orders(Long orderid, String address) {
		super();
		this.orderid = orderid;
		this.address = address;
	}
	public Orders() {
		
	}
	
	

}