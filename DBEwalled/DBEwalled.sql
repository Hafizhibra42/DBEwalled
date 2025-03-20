DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	name VARCHAR NOT NULL,
	username VARCHAR(15) UNIQUE NOT NULL,
	email VARCHAR UNIQUE,
	password VARCHAR NOT NULL,
	avatar VARCHAR,
	phone_num VARCHAR NOT NULL
);

INSERT INTO users (name, username, email, password, avatar, phone_num)
VALUES
    ('Joko Santoso', 'Joko123', 'joko@bsi-rakamin.com', 'rahasia123', NULL, '08128873838'),
    ('Anwar Hidayat', 'Anwar13', 'anwar@bsi-rakamin.com', 'hahehiua', NULL, '081288738354'),
    ('Amed Syahputra', 'memed123', 'amed@bsi-rakamin.com', 'hahehiua', NULL, '081288738355'),
    ('Siti Aminah', 'siti99', 'siti@bsi-rakamin.com', 'passwordsiti', NULL, '081288738356'),
    ('Budi Prasetyo', 'budi88', 'budi@bsi-rakamin.com', 'budi12345', NULL, '081288738357'),
    ('Dewi Lestari', 'dewi_lest', 'dewi@bsi-rakamin.com', 'lestari678', NULL, '081288738358'),
    ('Rizky Maulana', 'rizky77', 'rizky@bsi-rakamin.com', 'rizkypass', NULL, '081288738359'),
    ('Ayu Rahma', 'ayu_rahma', 'ayu@bsi-rakamin.com', 'ayuRahma98', NULL, '081288738360'),
    ('Farhan Akbar', 'farhanx', 'farhan@bsi-rakamin.com', 'fhakbar001', NULL, '081288738361'),
    ('Nina Kusuma', 'ninakusuma', 'nina@bsi-rakamin.com', 'ninaSecure!', NULL, '081288738362');

SELECT * FROM users;

DROP TYPE IF EXISTS status_type CASCADE;
CREATE TYPE status_type AS ENUM ('success', 'failure', 'pending');

DROP TYPE IF EXISTS transfer_types CASCADE;
CREATE TYPE transfer_types AS ENUM ('top up', 'transfer');

DROP TABLE IF EXISTS transactions CASCADE;
CREATE TABLE transactions (
	id SERIAL PRIMARY KEY,
	amount MONEY,
	datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	transaction_no INTEGER UNIQUE,
	transfer_type TRANSFER_TYPES NOT NULL,
	description VARCHAR(255) NOT NULL, 
	sender_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
	recepient_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO transactions (amount, transaction_no, transfer_type, description, sender_id, recepient_id)
VALUES
    (10000, 1, 'top up', 'Top Up buat nobar', 3, 1),
    (10000, 2, 'transfer', 'Bayar Utang', 1, 2),
    (50000, 3, 'transfer', 'Bayar makan siang', 2, 4),
    (150000, 4, 'top up', 'Top Up saldo e-wallet', 5, 3),
    (75000, 5, 'transfer', 'Patungan beli hadiah', 3, 6),
    (200000, 6, 'top up', 'Isi saldo rekening', 4, 3),
    (30000, 7, 'transfer', 'Belanja online', 6, 7),
    (125000, 8, 'top up', 'Top Up aplikasi transportasi', 7, 2),
    (45000, 9, 'transfer', 'Bayar ojek online', 8, 5),
    (100000, 10, 'top up', 'Isi saldo dompet digital', 9, 6),
    (20000, 11, 'transfer', 'Bayar kopi', 10, 8),
    (99000, 12, 'top up', 'Beli tiket konser', 1, 4),
    (25000, 13, 'transfer', 'Patungan makan siang', 2, 9),
    (135000, 14, 'top up', 'Top Up buat game', 5, 10),
    (5000, 15, 'transfer', 'Bayar parkir', 3, 7);


SELECT * FROM transactions;

DROP VIEW IF EXISTS transactions_2 CASCADE;
CREATE VIEW transactions_2 AS 
SELECT 
	t.datetime,
	t.transfer_type, 
	t.description, 
	t.amount,
	t.sender_id,
	a.name AS sender_name, 
	t.recepient_id
FROM transactions AS t
INNER JOIN users AS a ON t.sender_id = a.id ;

CREATE VIEW transfer_3 AS 
SELECT
	DATE_TRUNC('second', t.datetime) AS truncated_datetime,
	t.transfer_type, 
	t.description,
	t.sender_id,
	t.recepient_id,
	t.amount, 
	CASE WHEN 
		t.transfer_type = 'top up' THEN null
		ELSE t.sender_name
		END AS sender_name,
	a.name AS recepient_name
FROM transactions_2 as t
INNER JOIN users AS a ON t.recepient_id = a.id;

SELECT * FROM transfer_3
WHERE sender_name = 'Amed Syahputra' OR recepient_name = 'Amed Syahputra';