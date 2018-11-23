package com.registerProducts.registerProducts;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.registerProducts.registerProducts.models.Category;
import com.registerProducts.registerProducts.repository.CategoryRepository;

@SpringBootApplication
public class RegisterProductsApplication implements CommandLineRunner {

	@Autowired
	private CategoryRepository _categoryRepository;

	public static void main(String[] args) {
		SpringApplication.run(RegisterProductsApplication.class, args);

	}

	@Override
	public void run(String... args) throws Exception {
		// Create Categories
		List<Category> categories = _categoryRepository.findAll();

		if (categories.isEmpty()) {
			Category c = new Category(null, "Electronics");
			Category c2 = new Category(null, "Domestic");
			Category c3 = new Category(null, "Cleaning");
			Category c4 = new Category(null, "Automotive");
			Category c5 = new Category(null, "Sport");
			_categoryRepository.saveAll(Arrays.asList(c, c2, c3, c4, c5));
		}

	}

}
