package com.registerProducts.registerProducts.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.registerProducts.registerProducts.models.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {

}
