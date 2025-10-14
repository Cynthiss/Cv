// src/routes/skillsRoutes.js
console.log('skillsRoutes.js is loaded');
const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/skillsController'); // Verifica que esta ruta sea correcta

// Rutas CRUD
router.get('/', skillsController.getSkills);  // Obtener todas las habilidades
router.get('/:id', skillsController.getSkillById);  // Obtener habilidad por ID
router.post('/', skillsController.createSkill);  // Crear habilidad
router.patch('/:id', skillsController.updateSkill);  // Actualizar habilidad
router.delete('/:id', skillsController.deleteSkill);  // Eliminar habilidad

module.exports = router;
