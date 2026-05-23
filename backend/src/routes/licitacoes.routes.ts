import express from 'express';
const router = express.Router();

/**
 * @swagger
 * /api/licitacoes:
 *   get:
 *     summary: Listar licitações com filtros
 *     tags: [Licitações]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *       - in: query
 *         name: dataInicio
 *         schema:
 *           type: string
 *           format: date
 *       - in: query
 *         name: dataFim
 *         schema:
 *           type: string
 *           format: date
 *     responses:
 *       200:
 *         description: Lista de licitações
 *       400:
 *         description: Parâmetros inválidos
 */
router.get('/', (req, res) => {
  res.json({ message: 'Get licitacoes endpoint', data: [] });
});

/**
 * @swagger
 * /api/licitacoes/{id}:
 *   get:
 *     summary: Obter detalhes de uma licitação
 *     tags: [Licitações]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detalhes da licitação
 *       404:
 *         description: Licitação não encontrada
 */
router.get('/:id', (req, res) => {
  res.json({ message: 'Get licitacao by id endpoint' });
});

export default router;
