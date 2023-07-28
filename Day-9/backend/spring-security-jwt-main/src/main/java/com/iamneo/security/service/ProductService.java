package com.iamneo.security.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.iamneo.security.entity.Product;
import com.iamneo.security.repository.ProductRepository;




@Service                    
public class ProductService {
	@Autowired
	ProductRepository repository;
public List<Product> getProduct(){
	return repository.findAll();
}
	public Product addProduct(Product product) {
		return repository.save(product);
	}
	public Product editProduct(Long id,Product product) {
		              Product xproduct=repository.findById(id).orElse(null);
		              if(xproduct!=null) {
		            	  xproduct.setProductname(product.getProductname());
		            	  xproduct.setPrice(product.getPrice());
		            	  return repository.saveAndFlush(xproduct);
		              }
		              else {
		            	  return null;
		              }
	}
	public String deleteProduct(Long id) {
		Product xproduct=repository.findById(id).orElse(null);
		if(xproduct!=null) {
			repository.deleteById(id);
			return "product deleted"+ id;
		}
		else {
			return "invalid productid";
		}
	}
	
                                           
}          
       
