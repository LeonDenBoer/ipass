package com.roei.roeitijden.controller;

import com.roei.roeitijden.exception.ResourceNotFoundException;
import com.roei.roeitijden.model.Wedstrijd;
import com.roei.roeitijden.repository.WedstrijdRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class WedstrijdController {

    @Autowired
    WedstrijdRepository wedstrijdRepository;

    
    // Get All Wedstrijds
    @GetMapping("/wedstrijd")
    public List<Wedstrijd> getAllwedstrijds() {
        return wedstrijdRepository.findAll();
    }
   
    // Create a new Wedstrijd
    @PostMapping("/wedstrijd")
    public Wedstrijd createWedstrijd(@Valid @RequestBody Wedstrijd wedstrijd) {
        return wedstrijdRepository.save(wedstrijd);
    }
    // Get a Single Wedstrijd
    @GetMapping("/wedstrijd/{id}")
    public Wedstrijd getWedstrijdById(@PathVariable(value = "id") Long wedstrijdId) {
        return wedstrijdRepository.findById(wedstrijdId)
                .orElseThrow(() -> new ResourceNotFoundException("Wedstrijd", "id", wedstrijdId));
    }
    // Update a Wedstrijd
    @PutMapping("/wedstrijd/{id}")
    public Wedstrijd updateWedstrijd(@PathVariable(value = "id") Long wedstrijdId,
                                            @Valid @RequestBody Wedstrijd wedstrijdDetails) {

        Wedstrijd wedstrijd = wedstrijdRepository.findById(wedstrijdId)
                .orElseThrow(() -> new ResourceNotFoundException("Wedstrijd", "id", wedstrijdId));
        
        wedstrijd.setAfstand(wedstrijdDetails.getAfstand());
        wedstrijd.setDatum(wedstrijdDetails.getDatum());
        wedstrijd.setTijd(wedstrijdDetails.getTijd());
        wedstrijd.setWedstrijd(wedstrijdDetails.isWedstrijd());
        wedstrijd.setPloegID(wedstrijdDetails.getPloegID());
        Wedstrijd updatedWedstrijd = wedstrijdRepository.save(wedstrijd);
        return updatedWedstrijd;
    }
    // Delete a Wedstrijd
    @DeleteMapping("/wedstrijd/{id}")
    public ResponseEntity<?> deleteWedstrijd(@PathVariable(value = "id") Long wedstrijdId) {
        Wedstrijd wedstrijd = wedstrijdRepository.findById(wedstrijdId)
                .orElseThrow(() -> new ResourceNotFoundException("Wedstrijd", "id", wedstrijdId));

        wedstrijdRepository.delete(wedstrijd);

        return ResponseEntity.ok().build();
    }
}
