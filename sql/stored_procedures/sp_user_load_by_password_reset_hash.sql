DELIMITER //
DROP PROCEDURE IF EXISTS sp_user_load_by_password_reset_hash //
CREATE PROCEDURE sp_user_load_by_password_reset_hash (
    IN password_reset_hash CHAR ( 32 )
)
BEGIN
	SELECT
		usr_id,
        usr_ule_level,
        usr_title,
        usr_firstname,
        usr_lastname,
        usr_username,
        usr_password,
        usr_email,
        usr_identifier,
        usr_creation_date,
        INET6_NTOA(usr_creation_ip),
        usr_password_change_date,
        INET6_NTOA(usr_password_change_ip),
        usr_password_reset_hash
	FROM user
	WHERE usr_password_reset_hash = password_reset_hash;
END //
DELIMITER ;
