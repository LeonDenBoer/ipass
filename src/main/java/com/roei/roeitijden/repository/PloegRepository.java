package com.roei.roeitijden.repository;

import com.roei.roeitijden.model.Ploeg;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PloegRepository extends JpaRepository<Ploeg, Long> {

}