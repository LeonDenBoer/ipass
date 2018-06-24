package com.roei.roeitijden.repository;

import com.roei.roeitijden.model.Sporter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SporterRepository extends JpaRepository<Sporter, Long> {

}