package com.registerProducts.registerProducts.services;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.registerProducts.registerProducts.models.Category;
import com.registerProducts.registerProducts.models.Product;
import com.registerProducts.registerProducts.models.dto.ProductDTO;
import com.registerProducts.registerProducts.repository.CategoryRepository;
import com.registerProducts.registerProducts.repository.RegisterProductsRepository;

@Service
public class RegisterProductService {

	@Autowired
	private RegisterProductsRepository _registerProductsRepository;

	@Autowired
	private CategoryRepository _categoryRepository;

	public List<Product> findAllProducts() {

		List<Product> products = _registerProductsRepository.findByOrderByDateRegisterDesc();

		return products;
	}

	public Product saveProduct(Product product) {

		_registerProductsRepository.save(product);

		return product;
	}

	public Product fromProductDto(ProductDTO productDTO) {

		Category category = new Category(productDTO.getCategoryId(), null);

		Product product = new Product(null, productDTO.getName(), category, productDTO.getPrice(), new Date());

		return product;
	}

	public void deleteProduct(Integer id) {

		_registerProductsRepository.deleteById(id);
	}

	public Optional<Product> findProductById(Integer id) {

		Optional<Product> product = _registerProductsRepository.findById(id);

		return product != null ? product : null;
	}

	public List<Category> findAllCategories() {
		return _categoryRepository.findAll();
	}

	private Category findCategoryById(Integer id) {

		Optional<Category> category = _categoryRepository.findById(id);
		return category.orElseThrow(() -> new ObjectNotFoundException("", Category.class.getName()));
	}

	private Product productExists(ProductDTO productDTO) {

		if(productDTO.getId() != null) {
			Optional<Product> product = _registerProductsRepository.findById(productDTO.getId());
			return product.orElseThrow(() -> new ObjectNotFoundException("", Product.class.getName()));
		}
		
		return null;		
	}

	public Product saveOrUpdate(ProductDTO productDTO) {

		Product product = productExists(productDTO);

		if (product != null) {
			product.setName(productDTO.getName());
			product.setCategory(findCategoryById(productDTO.getCategoryId()));
			product.setPrice(productDTO.getPrice());

			return product;
		}

		return fromProductDto(productDTO);
	}
}
