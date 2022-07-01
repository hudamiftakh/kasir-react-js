-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 01 Jul 2022 pada 13.38
-- Versi server: 10.4.22-MariaDB
-- Versi PHP: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kasir`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `master_menu`
--

CREATE TABLE `master_menu` (
  `id` int(12) NOT NULL,
  `menu` varchar(255) NOT NULL,
  `harga` int(12) NOT NULL,
  `deskripsi` text NOT NULL,
  `file_path` text NOT NULL,
  `updated_at` date NOT NULL,
  `created_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `master_menu`
--

INSERT INTO `master_menu` (`id`, `menu`, `harga`, `deskripsi`, `file_path`, `updated_at`, `created_at`) VALUES
(22, 'Sate 123', 10000, 'Sate enak ds', 'menu/weh0AAzQ7qk9a6vZtTSp64LxMBkQGCc86fUbvfzx.jpg', '2022-07-01', '2022-07-01'),
(26, 'Batagor', 100000, 'Deskripsi', 'menu/u27gsHXWlFE8JjNniVC2gE43qXxbD0xCJSdAZWAi.webp', '2022-07-01', '2022-07-01'),
(27, 'Menu', 1000000, 'Deskripsi', 'menu/nBFlPCRQIwFzVQMRWLFyJuxHVouC1SPrDzhb3U66.jpg', '2022-07-01', '2022-07-01'),
(28, 'Oglio Olio', 900000, 'Oglio Olio', 'menu/4mGgduFwOvyDvYgdFU0g8ijyyVnL8Hx3Nb9Yovis.jpg', '2022-07-01', '2022-07-01');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `master_menu`
--
ALTER TABLE `master_menu`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `master_menu`
--
ALTER TABLE `master_menu`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
