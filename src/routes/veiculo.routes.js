import express from "express";
import {
    cadastrarVeiculo,
    listarVeiculos
} from "../services/produto.service.js";

const router = express.Router();

router.post("/veiculos", async (req, res) => {
    try {
        const veiculo = await cadastrarVeiculo(req.body);

        res.status(201).json(veiculo);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            erro: "Erro ao cadastrar veículo"
        });
    }
});

router.get("/veiculos", async (req, res) => {
    try {
        const veiculos = await listarVeiculos();

        res.status(200).json(veiculos);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            erro: "Erro ao listar veículos"
        });
    }
});

export default router;