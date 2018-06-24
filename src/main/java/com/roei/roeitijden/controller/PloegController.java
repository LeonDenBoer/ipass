package com.roei.roeitijden.controller;

import com.roei.roeitijden.exception.ResourceNotFoundException;
import com.roei.roeitijden.model.Ploeg;
import com.roei.roeitijden.repository.PloegRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class PloegController {

    @Autowired
    PloegRepository ploegRepository;

    
    // Get All Ploegs
    @GetMapping("/ploeg")
    public List<Ploeg> getAllploegs() {
        return ploegRepository.findAll();
    }
   
    // Create a new Ploeg
    @PostMapping("/ploeg")
    public Ploeg createPloeg(@Valid @RequestBody Ploeg ploeg) {
        return ploegRepository.save(ploeg);
    }
    // Get a Single Ploeg
    @GetMapping("/ploeg/{id}")
    public Ploeg getPloegById(@PathVariable(value = "id") Long ploegId) {
        return ploegRepository.findById(ploegId)
                .orElseThrow(() -> new ResourceNotFoundException("Ploeg", "id", ploegId));
    }
    // Update a Ploeg
    @PutMapping("/ploeg/{id}")
    public Ploeg updatePloeg(@PathVariable(value = "id") Long ploegId,
                                            @Valid @RequestBody Ploeg ploegDetails) {

        Ploeg ploeg = ploegRepository.findById(ploegId)
                .orElseThrow(() -> new ResourceNotFoundException("Ploeg", "id", ploegId));
        
        ploeg.setNaam(ploegDetails.getNaam());
        Ploeg updatedPloeg = ploegRepository.save(ploeg);
        return updatedPloeg;
    }
    // Delete a Ploeg
    @DeleteMapping("/ploeg/{id}")
    public ResponseEntity<?> deletePloeg(@PathVariable(value = "id") Long ploegId) {
        Ploeg ploeg = ploegRepository.findById(ploegId)
                .orElseThrow(() -> new ResourceNotFoundException("Ploeg", "id", ploegId));

        ploegRepository.delete(ploeg);

        return ResponseEntity.ok().build();
    }
}
