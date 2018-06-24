package com.roei.roeitijden.repository;

import com.roei.roeitijden.model.Wedstrijd;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WedstrijdRepository extends JpaRepository<Wedstrijd, Long> {

}