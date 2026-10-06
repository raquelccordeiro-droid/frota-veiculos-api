import express from 'express'
import produtoRoutes from "./routes/produto.routes.js";

const app = express();

app.use(express.json());

app.use(produtoRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});