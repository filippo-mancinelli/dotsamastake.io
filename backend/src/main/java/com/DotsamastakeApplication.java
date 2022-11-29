package com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan
public class DotsamastakeApplication{

	public static void main(String[] args) {
		SpringApplication.run(DotsamastakeApplication.class, args);
	}

}

