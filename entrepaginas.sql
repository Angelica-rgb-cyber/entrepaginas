-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS entrepaginas CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE entrepaginas;

-- Tabla: categoria (para libros)
CREATE TABLE categoria (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL UNIQUE,
    descripcion TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla: usuario (para autenticación con Spring Security)
CREATE TABLE usuario (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    correo VARCHAR(100) NOT NULL UNIQUE,
    contrasena VARCHAR(255) NOT NULL,
    rol VARCHAR(50) NOT NULL CHECK (rol IN ('ADMIN', 'BIBLIOTECARIO', 'USER', 'LECTOR')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla: cliente (usuarios de la biblioteca)
CREATE TABLE cliente (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL UNIQUE,
    telefono VARCHAR(20),
    direccion VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla: libro (libros de la biblioteca)
CREATE TABLE libro (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(100) NOT NULL,
    categoria_id BIGINT NOT NULL,
    imagen VARCHAR(255),
    disponible BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (categoria_id) REFERENCES categoria(id) ON DELETE RESTRICT
);

-- Tabla: prestamo (préstamos de libros)
CREATE TABLE prestamo (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    cliente_id BIGINT NOT NULL,
    libro_id BIGINT NOT NULL,
    fecha_prestamo DATE NOT NULL,
    fecha_devolucion DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cliente_id) REFERENCES cliente(id) ON DELETE CASCADE,
    FOREIGN KEY (libro_id) REFERENCES libro(id) ON DELETE RESTRICT
);

-- Tabla: perfil (perfiles de usuario o roles adicionales)
CREATE TABLE perfil (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL UNIQUE,
    descripcion TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar datos iniciales
-- Categorías
INSERT INTO categoria (nombre, descripcion) VALUES
('Ficción', 'Novelas y cuentos de ficción'),
('No Ficción', 'Biografías y ensayos'),
('Ciencia Ficción', 'Historias futuristas y espaciales'),
('Fantasía', 'Mundos mágicos y épicos'),
('Biografía', 'Vidas de personajes históricos');

-- Usuarios (contraseñas encriptadas con BCrypt: 'admin123' para ADMIN y BIBLIOTECARIO, 'user123' para USER y LECTOR)
INSERT INTO usuario (correo, contrasena, rol) VALUES
('admin@entrepaginas.org', '$2a$10$XURPShQ5u3H/3b6l5mqtxOUDAN6VtW4u0gY2eYk0DN3x40v4C2KUm', 'ADMIN'),
('bibliotecario@entrepaginas.org', '$2a$10$XURPShQ5u3H/3b6l5mqtxOUDAN6VtW4u0gY2eYk0DN3x40v4C2KUm', 'BIBLIOTECARIO'),
('user@entrepaginas.org', '$2a$10$o8vX8h9y4x5m3z1q2w9rWevL8pX9z7y4k5m3z1q2w9rWevL8pX9z', 'USER'),
('lector@entrepaginas.org', '$2a$10$o8vX8h9y4x5m3z1q2w9rWevL8pX9z7y4k5m3z1q2w9rWevL8pX9z', 'LECTOR');

-- Clientes
INSERT INTO cliente (nombre, correo, telefono, direccion) VALUES
('Juan Pérez', 'juan.perez@gmail.com', '999123456', 'Av. Principal 123, Lima'),
('María López', 'maria.lopez@gmail.com', '999654321', 'Calle Secundaria 456, Arequipa'),
('Carlos García', 'carlos.garcia@gmail.com', '999789012', 'Jr. Central 789, Trujillo');

-- Libros
INSERT INTO libro (titulo, autor, categoria_id, imagen, disponible) VALUES
('Cien Años de Soledad', 'Gabriel García Márquez', 1, 'https://example.com/cien_anos.jpg', TRUE),
('Sapiens', 'Yuval Noah Harari', 2, 'https://example.com/sapiens.jpg', TRUE),
('Dune', 'Frank Herbert', 3, 'https://example.com/dune.jpg', FALSE),
('El Señor de los Anillos', 'J.R.R. Tolkien', 4, 'https://example.com/lotr.jpg', TRUE),
('La Sombra del Viento', 'Carlos Ruiz Zafón', 1, 'https://example.com/sombra_viento.jpg', TRUE);

-- Préstamos
INSERT INTO prestamo (cliente_id, libro_id, fecha_prestamo, fecha_devolucion) VALUES
(1, 3, '2025-10-01', NULL),
(2, 4, '2025-10-05', '2025-10-12');

-- Perfiles
INSERT INTO perfil (nombre, descripcion) VALUES
('Administrador', 'Acceso completo al sistema de gestión'),
('Bibliotecario', 'Gestión de clientes, libros, categorías y préstamos'),
('Usuario', 'Acceso limitado a ciertas funcionalidades'),
('Lector', 'Acceso al catálogo y préstamos básicos');