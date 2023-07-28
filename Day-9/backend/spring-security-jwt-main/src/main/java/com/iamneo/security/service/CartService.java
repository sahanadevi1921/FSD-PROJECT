package com.iamneo.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.Cart;
import com.iamneo.security.repository.CartRepository;




@Service  
public class CartService {
	@Autowired
	CartRepository repository;
public List<Cart> getCart(){
	return repository.findAll();
}
	public Cart addCart(Cart cart) {
		return repository.save(cart);
	}
	public Cart editCart(Long id,Cart cart) {
		Cart xcart=repository.findById(id).orElse(null);
		              if(xcart!=null) {
		            	  xcart.setPname(cart.getPname());
		            	  xcart.setCount(cart.getCount());
		            	  xcart.setPrice(cart.getPrice());
		            	  return repository.saveAndFlush(xcart);
		              }
		              else {
		            	  return null;
		              }
	}
	public String deleteCart(Long id) {
		Cart xcart=repository.findById(id).orElse(null);
		if(xcart!=null) {
			repository.deleteById(id);
			return "Cart deleted"+ id;
		}
		else {
			return "invalid id";
		}
	}
	

}
