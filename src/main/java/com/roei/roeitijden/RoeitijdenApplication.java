package com.roei.roeitijden;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class RoeitijdenApplication {

	public static void main(String[] args) {
		SpringApplication.run(RoeitijdenApplication.class, args);
	}
}
