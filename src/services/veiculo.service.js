    class veiculoService {
     async getAll() {
     const res = await poll.query("SELECT *");
        return res.rows;    
    } 

    async creats (dados) {
     const res = await.pool.query("INSERT INTO... RETURNING*", [dados]);
         return res.rows(0);
    
}}