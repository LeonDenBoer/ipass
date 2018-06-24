package com.roei.roeitijden.model;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;

import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "wedstrijd")
@EntityListeners(AuditingEntityListener.class)

public class Wedstrijd implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private Integer afstand;
	

	private Integer tijd;
	
	
	private Date datum;
	

	private boolean wedstrijd;
	
	private long ploegID;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getAfstand() {
		return afstand;
	}

	public void setAfstand(Integer afstand) {
		this.afstand = afstand;
	}

	public Integer getTijd() {
		return tijd;
	}

	public void setTijd(Integer tijd) {
		this.tijd = tijd;
	}

	public Date getDatum() {
		return datum;
	}

	public void setDatum(Date datum) {
		this.datum = datum;
	}

	public boolean isWedstrijd() {
		return wedstrijd;
	}

	public void setWedstrijd(boolean wedstrijd) {
		this.wedstrijd = wedstrijd;
	}

	public long getPloegID() {
		return ploegID;
	}

	public void setPloegID(long ploegID) {
		this.ploegID = ploegID;
	}
	
	
	
}
