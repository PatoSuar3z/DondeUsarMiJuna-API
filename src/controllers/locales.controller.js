import { pool } from '../db.js'

export const getLocales = async (req, res) => {
    try {
    const [rows] = await pool.query('SELECT * FROM local')
    res.json(rows)
    } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
    }  
}

export const createLocal = async (req, res) => {
    const { nombre , direccion, ciudad, redes, especialidad, descipcion, logo, imagen_tienda, url, comuna} = req.body
    try {
        const [rows] = await pool.query('INSERT INTO local(nombre , direccion, ciudad, redes, especialidad, descripcion, logo, imagen_tienda, url, comuna ) VALUES (?,?,?,?,?,?,?,?,?,?)', [nombre , direccion, ciudad, redes, especialidad, descipcion, logo, imagen_tienda, url, comuna])
        res.send({
            id: rows.insertId,
            nombre,
            direccion,
            ciudad,
            redes,
            especialidad,
            descipcion,
            logo,
            imagen_tienda,
            url,
            comuna
        })    
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
}

export const getLocalById = async (req, res) =>{
    try {
        const [rows] = await pool.query('SELECT * FROM local WHERE id = ?', [req.params.id])
        if(rows.length > 0){
            return res.json(rows[0])
        }else{
            res.status(404).json({message: "Local no encontrado"})
        }
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
    
}

export const deleteLocalById = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await pool.query("DELETE FROM local WHERE id = ?", [id]);
    
        if (rows.affectedRows <= 0) {
          return res.status(404).json({ message: "local no encontrado" });
        }
    
        res.sendStatus(204)
      } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
      }
    };
    

export const updateLocalById = async (req, res) =>{
    const { id } = req.params;
    const { nombre , direccion, ciudad, redes, especialidad, descipcion, logo, imagen_tienda, url, comuna } = req.body
    try {
    const [result] = await pool.query ('UPDATE local SET nombre = IFNULL(?, nombre), direccion = IFNULL(?, direccion), ciudad = IFNULL(?, ciudad), redes = IFNULL(?, redes), especialidad = IFNULL(?, especialidad), descripcion = IFNULL(?, descripcion), logo = IFNULL(?, logo), imagen_tienda = IFNULL(?, imagen_tienda), url = IFNULL(?, url), comuna = IFNULL(?, comuna), WHERE id = ?', [nombre , direccion, ciudad, redes, especialidad, descipcion, logo, imagen_tienda, url, comuna, id]);

    if (result.affectedRows === 0) return res.status(404).json({message: "Local no encontrado"})

    const  [rows] = await pool.query('SELECT * FROM local WHERE id = ?', [id])
    res.json(rows[0])
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }

}
