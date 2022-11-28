package com;

import java.util.stream.Stream;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

import com.entity.User;
import com.repository.UserRepository;

@SpringBootApplication
@ComponentScan
public class DotsamastakeApplication{

	public static void main(String[] args) {
		SpringApplication.run(DotsamastakeApplication.class, args);
	}

	@Bean
    CommandLineRunner init(UserRepository userRepository) {
        return args -> {
            Stream.of("John", "Donnie", "Jennifer", "Helen", "Rachel").forEach(name -> {
                User user = new User(name.toLowerCase());
                userRepository.save(user);
            });
            userRepository.findAll().forEach(System.out::println);
        };
    }
}

