import { pool } from "../config/db.js";
class VeiculoService {
    async create(veiculo) {


        const resultado = await pool.query(
            `INSERT INTO veiculos (modelo, marca, ano, placa)
         VALUES ($1, $2, $3, $4)
         RETURNING *`,
            [modelo, marca, ano, placa]
        );

        return resultado.rows[0]
    }

    async getAll() {
        const resultado = await pool.query('SELECT * FROM veiculos ORDER BY id')
        return resultado.rows;
    }

}

export const veiculoService = new VeiculoService()
