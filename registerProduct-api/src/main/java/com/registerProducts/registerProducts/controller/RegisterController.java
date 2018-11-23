package com.registerProducts.registerProducts.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.registerProducts.registerProducts.models.Category;
import com.registerProducts.registerProducts.models.Product;
import com.registerProducts.registerProducts.models.dto.ProductDTO;
import com.registerProducts.registerProducts.services.RegisterProductService;

@CrossOrigin
@RestController
@RequestMapping(value = "/products")
public class RegisterController {

	@Autowired
	private RegisterProductService _registerProductService;

	@RequestMapping(value = "/all", method = RequestMethod.GET)
	public ResponseEntity<List<Product>> findAllProduct() {

		List<Product> product = _registerProductService.findAllProducts();

		return ResponseEntity.ok().body(product);
	}

	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public ResponseEntity<Object> saveOrUpdate(@RequestBody ProductDTO productDTO) {
		
		Product product = _registerProductService.saveOrUpdate(productDTO);
		_registerProductService.saveProduct(product);
		
		return ResponseEntity.ok().body(product.getId());
	}
	
	@RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> deleteProduct(@PathVariable Integer id) {

		_registerProductService.deleteProduct(id);

		return ResponseEntity.ok().build();
	}

	@RequestMapping(value = "/categories", method = RequestMethod.GET)
	public ResponseEntity<List<Category>> findCategories() {

		List<Category> categories = _registerProductService.findAllCategories();

		return ResponseEntity.ok().body(categories);
	}

}
