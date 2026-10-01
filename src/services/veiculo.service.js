import { pool } from "../config/db.js";

export async function cadastrarVeiculo(veiculo) {
    const { modelo, marca, ano, placa } = veiculo;

    const resultado = await pool.query(
        `INSERT INTO veiculos (modelo, marca, ano, placa)
         VALUES ($1, $2, $3, $4)
         RETURNING *`,
        [modelo, marca, ano, placa]
    );

    return resultado.rows[0];
}

export async function listarVeiculos() {
    const resultado = await pool.query(
        `SELECT * FROM veiculos ORDER BY id`
    );

    return resultado.rows;
}