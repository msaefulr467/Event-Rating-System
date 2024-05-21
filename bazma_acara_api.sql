-- Buat database bazma_acara_api
CREATE DATABASE bazma_acara_api;

-- Gunakan database yang baru dibuat
USE bazma_acara_api;

-- Buat tabel users
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Buat tabel feedback
CREATE TABLE feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,
    eventId VARCHAR(255) NOT NULL,
    userId INT,
    rating INT NOT NULL,
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);

-- Tambahkan beberapa data contoh ke tabel users
INSERT INTO users (username, password) VALUES 
('user1', 'password1'),
('user2', 'password2');

-- Tambahkan beberapa data contoh ke tabel feedback
INSERT INTO feedback (eventId, userId, rating, comment) VALUES 
('event1', 1, 5, 'Great event!'),
('event2', 2, 4, 'Good event.'),
('event1', 1, 3, 'It was okay.');
