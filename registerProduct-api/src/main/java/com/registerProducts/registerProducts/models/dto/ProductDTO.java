package com.registerProducts.registerProducts.models.dto;

public class ProductDTO {

	private Integer id;
	private String name;
	private Double price;
	private Integer categoryId;

	public ProductDTO() {

	}

	public ProductDTO(Integer id, String name, Double price, Integer categoryId) {
		super();
		this.name = name;
		this.price = price;
		this.categoryId = categoryId;
	}
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Integer getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(Integer categoryId) {
		this.categoryId = categoryId;
	}

}
