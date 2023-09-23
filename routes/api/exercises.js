const express = require('express');
const { authenticate, } = require('../../middlewares');
const router = express.Router();
const { 
    getAllExercises,
    getAllBodyParts, 
    getAllEquipment,
    getAllMuscles, 
} = require('../../controllers/exercises');


/**
 * @swagger
 * /api/exercises/categories:
 *   get:
 *     summary: Get all exercises.
 *     tags:
 *       - Exercises
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of all exercises.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Exercise'
 *       401:
 *         description: Unauthorized. User is not authenticated.
 *       404:
 *         description: Not found. The requested resource was not found.
 */

router.get('/categories', authenticate, getAllExercises);

/**
 * @swagger
 * /api/exercises/body-parts:
 *   get:
 *     summary: Get all body parts for exercises.
 *     tags:
 *       - Exercises
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of all body parts for exercises.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Filter'
 *       401:
 *         description: Unauthorized. User is not authenticated.
 *       404:
 *         description: Not found. The requested resource was not found.
 */

router.get('/body-parts', authenticate, getAllBodyParts);

/**
 * @swagger
 * /api/exercises/equipment:
 *   get:
 *     summary: Get all equipment for exercises.
 *     tags:
 *       - Exercises
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of all equipment for exercises.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Filter'
 *       401:
 *         description: Unauthorized. User is not authenticated.
 *       404:
 *         description: Not found. The requested resource was not found.
 */

router.get('/equipment', authenticate, getAllEquipment);

/**
 * @swagger
 * /api/exercises/muscles:
 *   get:
 *     summary: Get all muscles for exercises.
 *     tags:
 *       - Exercises
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of all muscles for exercises.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Filter'
 *       401:
 *         description: Unauthorized. User is not authenticated.
 *       404:
 *         description: Not found. The requested resource was not found.
 */

router.get('/muscles', authenticate, getAllMuscles);

module.exports = router;
