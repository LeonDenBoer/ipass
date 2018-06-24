package com.roei.roeitijden.model;


import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;

import java.io.Serializable;

@Entity
@Table(name = "sporter")
@EntityListeners(AuditingEntityListener.class)

public class Sporter implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String voornaam;

    @NotBlank
    @Column(unique=true)
    private String achternaam;

    @NotBlank
    private String email;
    
    @NotBlank
    private String wachtwoord;
    
    private long ploegID;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getVoornaam() {
		return voornaam;
	}

	public void setVoornaam(String voornaam) {
		this.voornaam = voornaam;
	}

	public String getAchternaam() {
		return achternaam;
	}

	public void setAchternaam(String achternaam) {
		this.achternaam = achternaam;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getWachtwoord() {
		return wachtwoord;
	}

	public void setWachtwoord(String wachtwoord) {
		this.wachtwoord = wachtwoord;
	}

	public long getPloegID() {
		return ploegID;
	}

	public void setPloegID(long ploegID) {
		this.ploegID = ploegID;
	}
    
	
    
}