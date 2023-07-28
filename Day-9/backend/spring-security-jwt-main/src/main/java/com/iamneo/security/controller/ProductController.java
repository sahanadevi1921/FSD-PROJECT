
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

import com.iamneo.security.entity.Product;
import com.iamneo.security.service.ProductService;



@RestController 
@RequestMapping("/product")
public class ProductController {
	@Autowired
	private ProductService service;                  
	
	@GetMapping("/{id}")
	public List<Product>  Getproduct(){
		return service.getProduct();
	}
	@PostMapping("/add")
	public Product AddProduct(@RequestBody Product product) {
		return service.addProduct(product);
	}
	@PutMapping("/{id}")
		public Product EditProduct(@RequestBody Product product,@PathVariable Long id) {
			return service.editProduct(id, product);
		}
	
	@DeleteMapping("/delete/{id}")
		public String DeleteProduct(@PathVariable Long id) {
			return service.deleteProduct(id);
		}                  
	
           
}
 
