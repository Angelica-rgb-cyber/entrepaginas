package com.example.Entrepaginas.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@PropertySource("classpath:application.properties")
public class FileUploadConfig {

    @Value("${file.upload-dir-libros}")
    private String uploadDirLibros;

    public String getUploadDirLibros() {
        return uploadDirLibros;
    }
}