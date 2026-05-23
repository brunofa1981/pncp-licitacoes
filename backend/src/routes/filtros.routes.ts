import express from 'express';
const router = express.Router();

/**
 * @swagger
 * /api/filtros:
 *   get:
 *     summary: Obter opções de filtros disponíveis
 *     tags: [Filtros]
 *     responses:
 *       200:
 *         description: Opções de filtros
 */
router.get('/', (req, res) => {
  const filters = {
    tipos: ['Pregão', 'Concorrência', 'RDC', 'Dispensa'],
    modalidades: ['Eletrônica', 'Presencial', 'Híbrida'],
    situacoes: ['Aberta', 'Encerrada', 'Suspensa', 'Cancelada'],
  };
  res.json(filters);
});

export default router;
