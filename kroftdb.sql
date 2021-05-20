/*
 Navicat Premium Data Transfer

 Source Server         : New Conecction
 Source Server Type    : MySQL
 Source Server Version : 50724
 Source Host           : localhost:3306
 Source Schema         : kroftdb

 Target Server Type    : MySQL
 Target Server Version : 50724
 File Encoding         : 65001

 Date: 06/05/2021 18:05:59
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admins
-- ----------------------------
DROP TABLE IF EXISTS `admins`;
CREATE TABLE `admins`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `super_admin_id` int(10) UNSIGNED NOT NULL,
  `photo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `birthdate` date NOT NULL,
  `gender` tinyint(1) NOT NULL,
  `phone` int(11) NOT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `delete` tinyint(1) NOT NULL DEFAULT 0,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `admins_user_unique`(`user`) USING BTREE,
  INDEX `admins_super_admin_id_foreign`(`super_admin_id`) USING BTREE,
  CONSTRAINT `admins_super_admin_id_foreign` FOREIGN KEY (`super_admin_id`) REFERENCES `super_admins` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admins
-- ----------------------------
INSERT INTO `admins` VALUES (1, 1, 'Kaya', 'Reba', 'Hilpert', '2020-02-11', 1, 94579193, '3473 Ullrich Rest\nIgnacioland, AZ 73145', 'Horacio', '$2y$10$KQvEQQA44XaExq4wb0./gOYtfAqMOniC1L414V/4myOt7vsKD8fr2', 1, 0, NULL, '2021-05-06 16:36:48', '2021-05-06 16:36:48');
INSERT INTO `admins` VALUES (2, 1, 'Ellis', 'Kevin', 'Weimann', '2014-08-16', 1, 26885879, '504 Breitenberg Port Apt. 592\nBorerview, MD 22299', 'Eleazar', '$2y$10$uk3DtaC758c5mL.BIgNQj.KXtPSb6A9Fcypo3DzqN30vqqI0.lgYe', 1, 0, NULL, '2021-05-06 16:36:48', '2021-05-06 16:36:48');

-- ----------------------------
-- Table structure for boxes
-- ----------------------------
DROP TABLE IF EXISTS `boxes`;
CREATE TABLE `boxes`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `initial_amount` double(8, 2) NOT NULL DEFAULT 0.00,
  `income_amount` double(8, 2) NOT NULL DEFAULT 0.00,
  `total_income_amount` double(8, 2) NOT NULL DEFAULT 0.00,
  `current_change_amount` double(8, 2) NOT NULL DEFAULT 0.00,
  `change_amount` double(8, 2) NOT NULL DEFAULT 0.00,
  `total_amount` double(8, 2) NOT NULL DEFAULT 0.00,
  `bs_amount` double(8, 2) NOT NULL DEFAULT 0.00,
  `us_amount` double(8, 2) NOT NULL DEFAULT 0.00,
  `cards_amount` double(8, 2) NOT NULL DEFAULT 0.00,
  `will_pay_amount` double(8, 2) NOT NULL DEFAULT 0.00,
  `is_open` tinyint(1) NOT NULL DEFAULT 0,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `delete` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of boxes
-- ----------------------------
INSERT INTO `boxes` VALUES (1, 'Caja 4', 7563.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0, 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');
INSERT INTO `boxes` VALUES (2, 'Caja 4', 8484.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0, 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');

-- ----------------------------
-- Table structure for boxes_openings_closings
-- ----------------------------
DROP TABLE IF EXISTS `boxes_openings_closings`;
CREATE TABLE `boxes_openings_closings`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `box_id` int(10) UNSIGNED NOT NULL,
  `cashier_id` int(10) UNSIGNED NOT NULL,
  `bs_income_amount` double(8, 2) NOT NULL DEFAULT 0.00,
  `us_income_amount` double(8, 2) NOT NULL DEFAULT 0.00,
  `cards_income_amount` double(8, 2) NOT NULL DEFAULT 0.00,
  `will_pay_income_amount` double(8, 2) NOT NULL DEFAULT 0.00,
  `open_date` timestamp(0) NOT NULL,
  `close_date` timestamp(0) NULL DEFAULT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `delete` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `boxes_openings_closings_box_id_foreign`(`box_id`) USING BTREE,
  INDEX `boxes_openings_closings_cashier_id_foreign`(`cashier_id`) USING BTREE,
  CONSTRAINT `boxes_openings_closings_box_id_foreign` FOREIGN KEY (`box_id`) REFERENCES `boxes` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `boxes_openings_closings_cashier_id_foreign` FOREIGN KEY (`cashier_id`) REFERENCES `employees` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of boxes_openings_closings
-- ----------------------------

-- ----------------------------
-- Table structure for categories
-- ----------------------------
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `photo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `delete` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of categories
-- ----------------------------
INSERT INTO `categories` VALUES (1, 'Craig', 'ville', 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');
INSERT INTO `categories` VALUES (2, 'Kelsi', 'shire', 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');

-- ----------------------------
-- Table structure for collects
-- ----------------------------
DROP TABLE IF EXISTS `collects`;
CREATE TABLE `collects`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `order_id` int(10) UNSIGNED NOT NULL,
  `cashier_id` int(10) UNSIGNED NOT NULL,
  `box_id` int(10) UNSIGNED NOT NULL,
  `payment_id` int(10) UNSIGNED NOT NULL,
  `payment_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `credit_card1_number` bigint(20) NULL DEFAULT NULL,
  `credit_card2_number` bigint(20) NULL DEFAULT NULL,
  `credit_card3_number` bigint(20) NULL DEFAULT NULL,
  `company_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `nit` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `responsable` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `ci` int(11) NULL DEFAULT NULL,
  `phone` int(11) NULL DEFAULT NULL,
  `currency` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `total_amount` double(8, 2) NULL DEFAULT NULL,
  `bs_amount` double(8, 2) NULL DEFAULT NULL,
  `us_amount` double(8, 2) NULL DEFAULT NULL,
  `cards_amount` double(8, 2) NULL DEFAULT NULL,
  `will_pay_amount` double(8, 2) NULL DEFAULT NULL,
  `change_amount` double(8, 2) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `delete` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `collects_order_id_foreign`(`order_id`) USING BTREE,
  INDEX `collects_cashier_id_foreign`(`cashier_id`) USING BTREE,
  INDEX `collects_box_id_foreign`(`box_id`) USING BTREE,
  INDEX `collects_payment_id_foreign`(`payment_id`) USING BTREE,
  CONSTRAINT `collects_box_id_foreign` FOREIGN KEY (`box_id`) REFERENCES `boxes` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `collects_cashier_id_foreign` FOREIGN KEY (`cashier_id`) REFERENCES `employees` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `collects_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `collects_payment_id_foreign` FOREIGN KEY (`payment_id`) REFERENCES `payments` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of collects
-- ----------------------------

-- ----------------------------
-- Table structure for companies
-- ----------------------------
DROP TABLE IF EXISTS `companies`;
CREATE TABLE `companies`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `super_admin_id` int(10) UNSIGNED NOT NULL,
  `photo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `delete` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `companies_super_admin_id_foreign`(`super_admin_id`) USING BTREE,
  CONSTRAINT `companies_super_admin_id_foreign` FOREIGN KEY (`super_admin_id`) REFERENCES `super_admins` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of companies
-- ----------------------------
INSERT INTO `companies` VALUES (1, 1, 'Lucienne', 'Armstrong, Spencer and Padberg', 'Sed odio suscipit sed sint quod sed. Ab voluptas dolor voluptas id voluptatem ipsum ipsa. Architecto quaerat dolore est omnis distinctio ducimus qui.', 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');

-- ----------------------------
-- Table structure for customers
-- ----------------------------
DROP TABLE IF EXISTS `customers`;
CREATE TABLE `customers`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `admin_id` int(10) UNSIGNED NOT NULL,
  `shop_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `shop_nit` int(11) NOT NULL,
  `shop_phone` int(11) NOT NULL,
  `shop_city` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `shop_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact_phone` int(11) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `delete` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `customers_admin_id_foreign`(`admin_id`) USING BTREE,
  CONSTRAINT `customers_admin_id_foreign` FOREIGN KEY (`admin_id`) REFERENCES `admins` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of customers
-- ----------------------------
INSERT INTO `customers` VALUES (1, 1, 'Volkman-Grant', 66751284, 84319192, 'Mozellburgh', '65270915', 'Reese', 76959164, 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');

-- ----------------------------
-- Table structure for employees
-- ----------------------------
DROP TABLE IF EXISTS `employees`;
CREATE TABLE `employees`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `admin_id` int(10) UNSIGNED NOT NULL,
  `rol_id` int(10) UNSIGNED NOT NULL,
  `photo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `birthdate` date NOT NULL,
  `gender` tinyint(1) NOT NULL,
  `phone` int(11) NOT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `reference_phone` int(11) NOT NULL,
  `entry_date` date NOT NULL,
  `user` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `pin` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `head_area` tinyint(1) NOT NULL DEFAULT 0,
  `token` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `delete` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `employees_user_unique`(`user`) USING BTREE,
  INDEX `employees_admin_id_foreign`(`admin_id`) USING BTREE,
  INDEX `employees_rol_id_foreign`(`rol_id`) USING BTREE,
  CONSTRAINT `employees_admin_id_foreign` FOREIGN KEY (`admin_id`) REFERENCES `admins` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `employees_rol_id_foreign` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of employees
-- ----------------------------
INSERT INTO `employees` VALUES (1, 1, 1, 'Zella', 'Damon', 'Wolff', '2003-10-17', 1, 92167988, '30965 Zulauf Isle\nEast Aidaland, RI 43377-8521', 22653139, '2014-08-31', 'Laurie', '$2y$10$CV4z9aIwgYauH8/ekYQtbuQZ7a5HDwHhEr143ucyjbbVzJH6QirRe', 'n12', 1, NULL, 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');
INSERT INTO `employees` VALUES (2, 1, 2, 'Brandt', 'Marvin', 'Pollich', '2018-03-05', 0, 32298976, '5581 Monahan Stravenue\nWest Dario, TX 22904-1008', 65145794, '1989-09-08', 'Jasper', '$2y$10$lIqCmLKWAF1EEnORZW5JE.CLHZF1FXSDHlyRiOpIfn1EJkT841Qkm', 'y13', 0, NULL, 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');

-- ----------------------------
-- Table structure for environments
-- ----------------------------
DROP TABLE IF EXISTS `environments`;
CREATE TABLE `environments`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `photo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `prefix` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `delete` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of environments
-- ----------------------------
INSERT INTO `environments` VALUES (1, 'Garnett', 'South', 'jebu', 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');
INSERT INTO `environments` VALUES (2, 'Myra', 'North', 'slyx', 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');

-- ----------------------------
-- Table structure for failed_jobs
-- ----------------------------
DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE `failed_jobs`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `connection` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of failed_jobs
-- ----------------------------

-- ----------------------------
-- Table structure for ingredients
-- ----------------------------
DROP TABLE IF EXISTS `ingredients`;
CREATE TABLE `ingredients`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `delete` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ingredients
-- ----------------------------
INSERT INTO `ingredients` VALUES (1, 'Deserunt et occaecati consequatur voluptatum tempora magni. Laboriosam doloribus est sunt. Dolorem dolorem ipsa dolorem officia iusto.', 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');
INSERT INTO `ingredients` VALUES (2, 'Dolores aliquid nihil consequuntur ipsam voluptatem quidem. Iusto porro tempore autem nam. Nihil et hic mollitia ea. Non ipsum delectus recusandae nihil non.', 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');
INSERT INTO `ingredients` VALUES (3, 'Dolor est magni quia recusandae deserunt iure provident. Ut ducimus mollitia magnam occaecati. Vel sapiente ut sed eum.', 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');
INSERT INTO `ingredients` VALUES (4, 'Similique tempora quam totam maiores molestiae nesciunt harum. Vel inventore quia aut aut provident dignissimos alias quam. Magnam dolorem et aut.', 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');
INSERT INTO `ingredients` VALUES (5, 'Aliquam facilis itaque reiciendis. Et maiores est tempora dolores aliquam vel. Et aut aut molestias quos dolorem in. Adipisci dolores perferendis qui cum. Harum est et quasi consectetur doloremque.', 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');

-- ----------------------------
-- Table structure for items
-- ----------------------------
DROP TABLE IF EXISTS `items`;
CREATE TABLE `items`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `admin_id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `ingredient_id` int(10) UNSIGNED NULL DEFAULT NULL,
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `garage` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `observation` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `expire_date` date NULL DEFAULT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `delete` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `items_admin_id_foreign`(`admin_id`) USING BTREE,
  INDEX `items_product_id_foreign`(`product_id`) USING BTREE,
  INDEX `items_ingredient_id_foreign`(`ingredient_id`) USING BTREE,
  CONSTRAINT `items_admin_id_foreign` FOREIGN KEY (`admin_id`) REFERENCES `admins` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `items_ingredient_id_foreign` FOREIGN KEY (`ingredient_id`) REFERENCES `ingredients` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `items_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of items
-- ----------------------------
INSERT INTO `items` VALUES (1, 2, 5, NULL, 'yy}P(Q.k', 'Lysanne', 'At et aperiam illum accusantium in quis. Iusto qui deleniti dolor dicta maxime et est placeat. Sit porro dolor hic voluptates ea nemo eveniet.', '1982-06-14', 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');
INSERT INTO `items` VALUES (2, 1, 1, NULL, '4g`T%:1E', 'Alivia', 'Qui occaecati non nesciunt ullam eaque est aspernatur. Eius distinctio rerum placeat enim.', '1974-08-23', 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');
INSERT INTO `items` VALUES (3, 1, 2, NULL, ',#\\c.tZt', 'Dessie', 'Incidunt maxime tempora dicta sunt qui. Ut quisquam minima omnis labore cumque. Tempore at dolorem labore similique. Sunt assumenda libero quis dolorem doloremque quidem eligendi quas.', '1998-05-04', 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');
INSERT INTO `items` VALUES (4, 1, 4, NULL, '\\kw*^QbK', 'Enrico', 'Odit aut tempora a assumenda quia quod quod. Deleniti laudantium voluptatem quis maiores aut. Eligendi omnis tempore ea quasi. In nisi accusantium ipsa vel distinctio magni.', '1988-09-09', 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');
INSERT INTO `items` VALUES (5, 1, 1, NULL, 'U6wKoL(=', 'Hans', 'Beatae qui labore est. Non omnis nostrum consequatur enim. Dolores est et quod placeat delectus.', '2017-02-05', 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 29 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of migrations
-- ----------------------------
INSERT INTO `migrations` VALUES (1, '2014_10_12_000000_create_users_table', 1);
INSERT INTO `migrations` VALUES (2, '2014_10_12_100000_create_password_resets_table', 1);
INSERT INTO `migrations` VALUES (3, '2019_08_19_000000_create_failed_jobs_table', 1);
INSERT INTO `migrations` VALUES (4, '2020_07_05_223116_create_websockets_statistics_entries_table', 1);
INSERT INTO `migrations` VALUES (5, '2020_07_05_235612_create_super_admins_table', 1);
INSERT INTO `migrations` VALUES (6, '2020_07_06_003215_super_admin_verification', 1);
INSERT INTO `migrations` VALUES (7, '2020_07_06_005218_create_companies_table', 1);
INSERT INTO `migrations` VALUES (8, '2020_07_06_010733_create_admins_table', 1);
INSERT INTO `migrations` VALUES (9, '2020_07_06_012413_create_roles_table', 1);
INSERT INTO `migrations` VALUES (10, '2020_07_06_012414_create_employees_table', 1);
INSERT INTO `migrations` VALUES (11, '2020_07_06_021049_create_salaries_table', 1);
INSERT INTO `migrations` VALUES (12, '2020_07_06_022434_create_environments_table', 1);
INSERT INTO `migrations` VALUES (13, '2020_07_06_023310_create_tables_table', 1);
INSERT INTO `migrations` VALUES (14, '2020_07_06_024451_create_payments_table', 1);
INSERT INTO `migrations` VALUES (15, '2020_07_06_030708_create_boxes_table', 1);
INSERT INTO `migrations` VALUES (16, '2020_07_06_031957_create_collects_table', 1);
INSERT INTO `migrations` VALUES (17, '2020_07_06_033306_create_print_categories_table', 1);
INSERT INTO `migrations` VALUES (18, '2020_07_06_033309_create_categories_table', 1);
INSERT INTO `migrations` VALUES (19, '2020_07_06_034326_create_subcategories_table', 1);
INSERT INTO `migrations` VALUES (20, '2020_07_06_034908_create_customers_table', 1);
INSERT INTO `migrations` VALUES (21, '2020_07_06_035899_create_products_table', 1);
INSERT INTO `migrations` VALUES (22, '2020_07_06_035900_create_supplies_table', 1);
INSERT INTO `migrations` VALUES (23, '2020_07_06_042208_create_ingredients_table', 1);
INSERT INTO `migrations` VALUES (24, '2020_07_06_042209_create_items_table', 1);
INSERT INTO `migrations` VALUES (25, '2020_07_06_043616_create_orders_table', 1);
INSERT INTO `migrations` VALUES (26, '2020_07_06_044257_create_order_details_table', 1);
INSERT INTO `migrations` VALUES (27, '2020_07_13_115918_create_table_order_table', 1);
INSERT INTO `migrations` VALUES (28, '2020_11_11_231121_create_boxes_openings_closings_table', 1);

-- ----------------------------
-- Table structure for order_details
-- ----------------------------
DROP TABLE IF EXISTS `order_details`;
CREATE TABLE `order_details`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `order_id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `order_number` int(11) NOT NULL,
  `product_quantity` int(11) NOT NULL,
  `product_observation` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `delete` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `order_details_order_id_foreign`(`order_id`) USING BTREE,
  INDEX `order_details_product_id_foreign`(`product_id`) USING BTREE,
  CONSTRAINT `order_details_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `order_details_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of order_details
-- ----------------------------

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `waiter_id` int(10) UNSIGNED NOT NULL,
  `total_amount` double(8, 2) NOT NULL,
  `is_sent` tinyint(1) NOT NULL DEFAULT 0,
  `is_paid` tinyint(1) NOT NULL DEFAULT 0,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `delete` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `orders_waiter_id_foreign`(`waiter_id`) USING BTREE,
  CONSTRAINT `orders_waiter_id_foreign` FOREIGN KEY (`waiter_id`) REFERENCES `employees` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of orders
-- ----------------------------

-- ----------------------------
-- Table structure for password_resets
-- ----------------------------
DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE `password_resets`  (
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  INDEX `password_resets_email_index`(`email`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of password_resets
-- ----------------------------

-- ----------------------------
-- Table structure for payments
-- ----------------------------
DROP TABLE IF EXISTS `payments`;
CREATE TABLE `payments`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `delete` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of payments
-- ----------------------------
INSERT INTO `payments` VALUES (1, 'Visa', 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');
INSERT INTO `payments` VALUES (2, 'MasterCard', 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');
INSERT INTO `payments` VALUES (3, 'American Express', 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');
INSERT INTO `payments` VALUES (4, 'Discover Card', 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');
INSERT INTO `payments` VALUES (5, 'Visa Retired', 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');

-- ----------------------------
-- Table structure for print_categories
-- ----------------------------
DROP TABLE IF EXISTS `print_categories`;
CREATE TABLE `print_categories`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `delete` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of print_categories
-- ----------------------------
INSERT INTO `print_categories` VALUES (1, 'East', 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');
INSERT INTO `print_categories` VALUES (2, 'North', 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `print_category_id` int(10) UNSIGNED NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL,
  `sub_category_id` int(10) UNSIGNED NULL DEFAULT NULL,
  `photo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double(8, 2) NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `delete` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `products_print_category_id_foreign`(`print_category_id`) USING BTREE,
  INDEX `products_category_id_foreign`(`category_id`) USING BTREE,
  INDEX `products_sub_category_id_foreign`(`sub_category_id`) USING BTREE,
  CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `products_print_category_id_foreign` FOREIGN KEY (`print_category_id`) REFERENCES `print_categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `products_sub_category_id_foreign` FOREIGN KEY (`sub_category_id`) REFERENCES `sub_categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES (1, 1, 1, NULL, 'Kelvin', 'Johnston-Bailey', 38.12, 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');
INSERT INTO `products` VALUES (2, 2, 1, NULL, 'Jaiden', 'Jacobi, Cormier and West', 33.25, 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');
INSERT INTO `products` VALUES (3, 1, 1, NULL, 'Zelda', 'Schumm, Robel and Sanford', 47.51, 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');
INSERT INTO `products` VALUES (4, 2, 2, NULL, 'Jordi', 'Schuppe Ltd', 88.49, 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');
INSERT INTO `products` VALUES (5, 1, 2, NULL, 'Josue', 'Mante Group', 57.50, 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `delete` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of roles
-- ----------------------------
INSERT INTO `roles` VALUES (1, 'Supervisor of Customer Service', 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');
INSERT INTO `roles` VALUES (2, 'Cafeteria Cook', 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');

-- ----------------------------
-- Table structure for salaries
-- ----------------------------
DROP TABLE IF EXISTS `salaries`;
CREATE TABLE `salaries`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `employee_id` int(10) UNSIGNED NOT NULL,
  `salary_month` date NOT NULL,
  `paid_amount` double(8, 2) NOT NULL,
  `advances` tinyint(1) NOT NULL DEFAULT 0,
  `advances_amount` double(8, 2) NOT NULL,
  `discounts` tinyint(1) NOT NULL DEFAULT 0,
  `discounts_amount` double(8, 2) NOT NULL,
  `observations` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `delete` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `salaries_employee_id_foreign`(`employee_id`) USING BTREE,
  CONSTRAINT `salaries_employee_id_foreign` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of salaries
-- ----------------------------
INSERT INTO `salaries` VALUES (1, 1, '2004-05-02', 8735.00, 0, 391.00, 1, 266.00, 'Autem minima quae sed unde commodi. Cupiditate ab vitae mollitia harum voluptatem. In aut sed autem sit quisquam.', 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');
INSERT INTO `salaries` VALUES (2, 2, '1971-10-12', 6412.00, 0, 596.00, 0, 381.00, 'Nulla dolores qui et minima saepe ipsum. Rerum mollitia nostrum exercitationem. Deleniti qui consequatur voluptatum asperiores maxime voluptas. Sit dolor tempora animi.', 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');

-- ----------------------------
-- Table structure for sub_categories
-- ----------------------------
DROP TABLE IF EXISTS `sub_categories`;
CREATE TABLE `sub_categories`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `category_id` int(10) UNSIGNED NOT NULL,
  `photo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `delete` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `sub_categories_category_id_foreign`(`category_id`) USING BTREE,
  CONSTRAINT `sub_categories_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sub_categories
-- ----------------------------

-- ----------------------------
-- Table structure for super_admins
-- ----------------------------
DROP TABLE IF EXISTS `super_admins`;
CREATE TABLE `super_admins`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `photo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `last_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `birthdate` date NOT NULL,
  `gender` tinyint(1) NULL DEFAULT NULL,
  `phone` int(11) NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `email_verified_at` timestamp(0) NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `delete` tinyint(1) NOT NULL DEFAULT 0,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  `is_verified` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `super_admins_email_unique`(`email`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of super_admins
-- ----------------------------
INSERT INTO `super_admins` VALUES (1, 'Rae', 'Alfonzo', 'Breitenberg', '1985-12-18', 0, 15640826, 'joshuah23@example.org', '1972-12-12 00:00:00', '$2y$10$e0aepWPnRCuJfSSiQQirmuhG/i830BoViopUVRyYW4UGHWw7mheEm', 1, 0, NULL, '2021-05-06 16:36:48', '2021-05-06 16:36:48', 0);

-- ----------------------------
-- Table structure for super_admins_verifications
-- ----------------------------
DROP TABLE IF EXISTS `super_admins_verifications`;
CREATE TABLE `super_admins_verifications`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `super_admin_id` int(10) UNSIGNED NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `delete` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `super_admins_verifications_super_admin_id_foreign`(`super_admin_id`) USING BTREE,
  CONSTRAINT `super_admins_verifications_super_admin_id_foreign` FOREIGN KEY (`super_admin_id`) REFERENCES `super_admins` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of super_admins_verifications
-- ----------------------------

-- ----------------------------
-- Table structure for supplies
-- ----------------------------
DROP TABLE IF EXISTS `supplies`;
CREATE TABLE `supplies`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `customer_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `unit_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `presentation` double(8, 2) NOT NULL,
  `quantity` int(11) NULL DEFAULT NULL,
  `buying_price` double(8, 2) NOT NULL,
  `observation` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `buying_date` date NOT NULL,
  `expire_date` date NOT NULL,
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `delete` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `supplies_customer_id_foreign`(`customer_id`) USING BTREE,
  CONSTRAINT `supplies_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of supplies
-- ----------------------------
INSERT INTO `supplies` VALUES (1, 1, 'Wilfrid', 'l', 70.00, 116, 14.00, 'Hic asperiores voluptas dolorem fugit rerum dolorum. Molestiae dolorem et repellendus ipsam natus ipsa quasi. Atque omnis sed quis velit.', '1975-03-07', '1988-01-10', 'm.cG>5B3', 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');

-- ----------------------------
-- Table structure for table_order
-- ----------------------------
DROP TABLE IF EXISTS `table_order`;
CREATE TABLE `table_order`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `table_id` int(10) UNSIGNED NOT NULL,
  `order_id` int(10) UNSIGNED NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `delete` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `table_order_table_id_foreign`(`table_id`) USING BTREE,
  INDEX `table_order_order_id_foreign`(`order_id`) USING BTREE,
  CONSTRAINT `table_order_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `table_order_table_id_foreign` FOREIGN KEY (`table_id`) REFERENCES `tables` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of table_order
-- ----------------------------

-- ----------------------------
-- Table structure for tables
-- ----------------------------
DROP TABLE IF EXISTS `tables`;
CREATE TABLE `tables`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `environment_id` int(10) UNSIGNED NOT NULL,
  `photo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `number` int(11) NOT NULL,
  `capacity` int(11) NULL DEFAULT NULL,
  `is_busy` tinyint(4) NOT NULL DEFAULT 0,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `delete` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `tables_environment_id_foreign`(`environment_id`) USING BTREE,
  CONSTRAINT `tables_environment_id_foreign` FOREIGN KEY (`environment_id`) REFERENCES `environments` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tables
-- ----------------------------
INSERT INTO `tables` VALUES (1, 1, 'image.png', 'Mesa', 1, 2, 0, 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');
INSERT INTO `tables` VALUES (2, 2, 'image.png', 'Mesa', 1, 2, 0, 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');
INSERT INTO `tables` VALUES (3, 2, 'image.png', 'Mesa', 1, 7, 0, 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');
INSERT INTO `tables` VALUES (4, 1, 'image.png', 'Mesa', 1, 6, 0, 1, 0, '2021-05-06 16:36:48', '2021-05-06 16:36:48');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp(0) NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `state` tinyint(1) NOT NULL DEFAULT 1,
  `delete` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `users_email_unique`(`email`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------

-- ----------------------------
-- Table structure for websockets_statistics_entries
-- ----------------------------
DROP TABLE IF EXISTS `websockets_statistics_entries`;
CREATE TABLE `websockets_statistics_entries`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `app_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `peak_connection_count` int(11) NOT NULL,
  `websocket_message_count` int(11) NOT NULL,
  `api_message_count` int(11) NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of websockets_statistics_entries
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
