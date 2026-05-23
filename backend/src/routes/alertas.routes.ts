import express from 'express';
const router = express.Router();

/**
 * @swagger
 * /api/alertas:
 *   get:
 *     summary: Listar alertas do usuário
 *     tags: [Alertas]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de alertas
 */
router.get('/', (req, res) => {
  res.json({ message: 'Get alertas endpoint' });
});

/**
 * @swagger
 * /api/alertas:
 *   post:
 *     summary: Criar novo alerta
 *     tags: [Alertas]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               filtros:
 *                 type: object
 *               frequencia:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Alerta criado com sucesso
 */
router.post('/', (req, res) => {
  res.json({ message: 'Create alerta endpoint' });
});

export default router;
