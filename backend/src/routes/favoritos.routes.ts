import express from 'express';
const router = express.Router();

/**
 * @swagger
 * /api/favoritos:
 *   get:
 *     summary: Listar licitações favoritas
 *     tags: [Favoritos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de favoritos
 */
router.get('/', (req, res) => {
  res.json({ message: 'Get favoritos endpoint' });
});

/**
 * @swagger
 * /api/favoritos:
 *   post:
 *     summary: Adicionar licitação aos favoritos
 *     tags: [Favoritos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               licitacaoId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Adicionado aos favoritos
 */
router.post('/', (req, res) => {
  res.json({ message: 'Add favorito endpoint' });
});

export default router;
