package com.registerProducts.registerProducts.models;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import org.springframework.web.bind.annotation.CrossOrigin;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;	
	private String name;	
	
	@OneToOne
	private Category category;	
	private Double price;
	@JsonFormat(pattern = "dd/MM/yyyy HH:mm")
	private Date dateRegister;
	
	public Product() {
		
	}
	
	public Product(Integer id, String name, Category category, Double price, Date dateRegister) {
		super();
		this.id = id;
		this.name = name;
		this.category = category;
		this.price = price;
		this.dateRegister = dateRegister;
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

	public Category getCategory() {
		return category; 
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Date getDateRegister() {
		return dateRegister;
	}

	public void setDateRegister(Date dateRegister) {
		this.dateRegister = dateRegister;
	}
	
}
