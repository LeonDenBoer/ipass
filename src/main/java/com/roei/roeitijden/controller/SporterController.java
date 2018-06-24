package com.roei.roeitijden.controller;

import com.roei.roeitijden.exception.ResourceNotFoundException;
import com.roei.roeitijden.model.Sporter;
import com.roei.roeitijden.repository.SporterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class SporterController {

    @Autowired
    SporterRepository sporterRepository;

    
    // Get All Sporters
    @GetMapping("/sporter")
    public List<Sporter> getAllsporters() {
        return sporterRepository.findAll();
    }
   
    // Create a new Sporter
    @PostMapping("/sporter")
    public Sporter createSporter(@Valid @RequestBody Sporter sporter) {
        return sporterRepository.save(sporter);
    }
    // Get a Single Sporter
    @GetMapping("/sporter/{id}")
    public Sporter getSporterById(@PathVariable(value = "id") Long sporterId) {
        return sporterRepository.findById(sporterId)
                .orElseThrow(() -> new ResourceNotFoundException("Sporter", "id", sporterId));
    }
    // Update a Sporter
    @PutMapping("/sporter/{id}")
    public Sporter updateSporter(@PathVariable(value = "id") Long sporterId,
                                            @Valid @RequestBody Sporter sporterDetails) {

        Sporter sporter = sporterRepository.findById(sporterId)
                .orElseThrow(() -> new ResourceNotFoundException("Sporter", "id", sporterId));
        
        sporter.setVoornaam(sporterDetails.getVoornaam());
        sporter.setAchternaam(sporterDetails.getAchternaam());
        sporter.setWachtwoord(sporterDetails.getWachtwoord());
        sporter.setEmail(sporterDetails.getEmail());
        sporter.setPloegID(sporterDetails.getPloegID());
        Sporter updatedSporter = sporterRepository.save(sporter);
        return updatedSporter;
    }
    // Delete a Sporter
    @DeleteMapping("/sporter/{id}")
    public ResponseEntity<?> deleteSporter(@PathVariable(value = "id") Long sporterId) {
        Sporter sporter = sporterRepository.findById(sporterId)
                .orElseThrow(() -> new ResourceNotFoundException("Sporter", "id", sporterId));

        sporterRepository.delete(sporter);

        return ResponseEntity.ok().build();
    }
}
