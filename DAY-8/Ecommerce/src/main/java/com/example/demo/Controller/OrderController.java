
package com.example.demo.Controller;

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

import com.example.demo.Service.OrderService;
import com.example.demo.model.Orders;


@RestController
@RequestMapping("/order")
public class OrderController {
	@Autowired
	private OrderService service;                  
	@GetMapping("/get")
	public List<Orders>  GetOrder(){
		return service.getOrder();
	}
	@PostMapping("/add")
	public Orders AddOrder(@RequestBody Orders order) {                  
		return service.addOrder(order);
	}
	@PutMapping("/{orderid}")
		public Orders EditOrder(@RequestBody Orders order,@PathVariable Long orderid) {
			return service.editOrder(orderid, order);
	}
	@DeleteMapping("/delete/{Orderid}")
		public String DeleteOrder(@PathVariable Long orderid) {
			return service.deleteOrder(orderid);               
	}                  

}
