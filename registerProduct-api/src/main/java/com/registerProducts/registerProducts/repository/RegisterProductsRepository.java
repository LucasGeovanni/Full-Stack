package com.registerProducts.registerProducts.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.registerProducts.registerProducts.models.Product;

@Repository
public interface RegisterProductsRepository extends JpaRepository<Product, Integer> {

	List<Product> findByOrderByDateRegisterDesc(); 
		
}
