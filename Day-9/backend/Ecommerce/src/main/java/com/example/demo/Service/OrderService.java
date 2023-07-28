
package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.OrderRepository;
import com.example.demo.model.Orders;


@Service
public class OrderService {
	@Autowired
	OrderRepository repository;                             
	public List<Orders> getOrder(){
		return repository.findAll();
	}
		public Orders addOrder(Orders order) {                  
			return repository.save(order);
		}
		public Orders editOrder(Long orderid,Orders order) {    
			Orders xorder=repository.findById(orderid).orElse(null);
			              if(xorder!=null) {
			            	  xorder.setProductid(order.getProductid());
			            	  xorder.setPrice(order.getPrice());
			            	  xorder.setAddress(order.getAddress());
			            	  return repository.saveAndFlush(xorder);
			              }                                      
			              else {
			            	  return null;
			              }
		}
		public String deleteOrder(Long orderid) {
			Orders xorder=repository.findById(orderid).orElse(null);
			if(xorder!=null) {
				repository.deleteById(orderid);
				return "Order deleted"+ orderid;                 
			}
			else {                           
				return "invalid Orderid";
			}
		}
}