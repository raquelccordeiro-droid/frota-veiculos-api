import express from "express";
import {Router} from "../services/produto.service.js";
import { listarVeiculos } from "../services/veiculo.service.js";

export const veiculoRouter = express.Router();

veiculoRouter.post("/", async (req, res) => {
    try {
        const veiculo = await cadastrarVeiculo.create(req.body);

        res.status(201).json(veiculo)
    } catch (error) {
        console.error(error);

        res.status(500).json({
            erro: "Erro ao cadastrar veículo"
        });
    }
});

veiculoRouter.get("/", async (req, res) => {
    try {
        const veiculos = await veiculoServicelistarVeiculos();

        res.status(200).json(veiculos);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            erro: "Erro ao listar veículos"
        });
    }
});

export default router;