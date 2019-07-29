/*
test queries
*/



\! echo "\nshow artists table\n";
\! echo "\nSELECT * FROM artists;"
SELECT * FROM artists;
/*
\! echo "\nshow songs table\n";
\! echo "\nSELECT * FROM songs;"
SELECT * FROM songs;
*/

\! echo "\nSHOW WHO STAYED IN {apartment_id=2 (Bukit Timah)} stayed\n";
\! echo "\nshow apartment name, host name & guest name\n";
/*
\! echo "SELECT accomslog.apartment_id, hosts.name, apartments.name, guests.name"
\! echo "FROM accomslog"
\! echo "INNER JOIN hosts ON (accomslog.host_id = hosts.id)"
\! echo "INNER JOIN apartments ON (accomslog.apartment_id = apartments.id)"
\! echo "INNER JOIN guests ON (accomslog.guest_id = guests.id)"
\! echo "WHERE accomslog.apartment_id = 2;\n"
*/

-- SELECT
-- 	DISTINCT ON (songs.album) songs.album, songs.artist_id, songs.artwork, artists.name, songs.title
-- FROM songs
-- INNER JOIN artists ON (songs.artist_id = artists.id)
-- ORDER BY album ASC


SELECT * FROM songs
SELECT * FROM

INNER JOIN guests ON (accomslog.guest_id = guests.id)
WHERE accomslog.apartment_id = 2;