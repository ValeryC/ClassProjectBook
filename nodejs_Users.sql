-- MySQL dump 10.13  Distrib 8.0.22, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: nodejs
-- ------------------------------------------------------
-- Server version	8.0.23-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users`
(
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar
(255) DEFAULT NULL,
  `lastName` varchar
(255) DEFAULT NULL,
  `email` varchar
(255) DEFAULT NULL,
  `password` varchar
(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY
(`id`),
  UNIQUE KEY `email`
(`email`),
  UNIQUE KEY `email_2`
(`email`),
  UNIQUE KEY `email_3`
(`email`),
  UNIQUE KEY `email_4`
(`email`),
  UNIQUE KEY `email_5`
(`email`),
  UNIQUE KEY `email_6`
(`email`),
  UNIQUE KEY `email_7`
(`email`),
  UNIQUE KEY `email_8`
(`email`),
  UNIQUE KEY `email_9`
(`email`),
  UNIQUE KEY `email_10`
(`email`),
  UNIQUE KEY `email_11`
(`email`),
  UNIQUE KEY `email_12`
(`email`),
  UNIQUE KEY `email_13`
(`email`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `
Users`
VALUES
  (1, NULL, NULL, 'toto', '$2b$10$siO9qRCdwscQOaG6cvOT9eZo3qObT3NYcA3.UsIHAE38pmpsDhYS2', '2021-02-06 21:20:17', '2021-02-06 21:20:17'),
  (2, NULL, NULL, 'test@test.fr', '$2b$10$0XB0ZKYDlqjHz7BEag8hCunu5IcECCWZDLUr0/EBYFKXbT1noEmyi', '2021-02-09 20:10:05', '2021-02-09 20:10:05'),
  (6, NULL, NULL, 'test2@test.fr', 'test1234', NULL, NULL),
  (7, NULL, NULL, 'test33@test.fr', 'test1234', NULL, NULL),
  (8, NULL, NULL, 'test3@test.fr', 'test1234', NULL, NULL),
  (10, NULL, NULL, 'test332@test.fr', 'test1234', NULL, NULL),
  (12, NULL, NULL, 'test3342@test.fr', 'test1234', NULL, NULL),
  (13, NULL, NULL, 'tes2@test.fr', 'test1234', NULL, NULL),
  (14, NULL, NULL, 'tscsfces2@test.fr', 'test1234', NULL, NULL),
  (15, NULL, NULL, 'tscsfces2@test.frss', 'test1234', NULL, NULL),
  (20, NULL, NULL, 'eff@df.fr', 'ee', NULL, NULL),
  (21, NULL, NULL, 'eff@df.frd', 'ee', NULL, NULL);
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-24 10:57:07
