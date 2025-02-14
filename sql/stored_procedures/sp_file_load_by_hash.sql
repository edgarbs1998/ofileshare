DELIMITER //
DROP PROCEDURE IF EXISTS sp_file_load_by_hash //
CREATE PROCEDURE sp_file_load_by_hash (
    IN file_hash CHAR ( 32 )
)
BEGIN
    SELECT
        fol_usr_id AS usr_id,
        fil_id,
        fil_fpe_id,
        fil_fol_id,
        fil_shorturl,
        fil_name,
        fil_size,
        fil_type,
        fil_extension,
        fil_path,
        fil_upload_ip,
        fil_upload_date,
        fil_trash,
        fil_hash,
        fil_delete_hash,
        fil_unique_hash
    FROM file
    INNER JOIN folder ON fol_id = fil_fol_id
    WHERE fil_hash = file_hash;
END //
DELIMITER ;
