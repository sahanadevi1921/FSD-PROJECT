package com.iamneo.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.Cart;
import com.iamneo.security.service.CartService;



@RestController 
@RequestMapping("/cart")
public class CartController {
	@Autowired
	private CartService service;                  
	
	@GetMapping("/{id}")
	public List<Cart>  GetCart(){
		return service.getCart();
	}
	@PostMapping("/add")
	public Cart AddCart(@RequestBody Cart cart) {
		return service.addCart(cart);
	}
	@PutMapping("/{id}")
		public Cart EditCart(@RequestBody Cart cart,@PathVariable Long id) {
			return service.editCart(id, cart);
		}
	
	@DeleteMapping("/delete/{id}")
		public String DeleteCart(@PathVariable Long id) {
			return service.deleteCart(id);
		} 

}
