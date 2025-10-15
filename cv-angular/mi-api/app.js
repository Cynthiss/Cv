// ========================================
// API REST SIMPLE PARA GESTIONAR HABILIDADES
// ========================================

// 1. IMPORTAR LAS LIBRERÍAS QUE NECESITAMOS
const express = require('express'); // Express: framework para crear APIs
const cors = require('cors');       // CORS: permite que otros sitios web usen nuestra API

// 2. CONFIGURAR NUESTRA APLICACIÓN
const app = express();              // Crear la aplicación Express
const PORT = 3001;                  // Puerto donde va a correr nuestro servidor

// 3. CONFIGURAR MIDDLEWARES (funciones que se ejecutan antes de las rutas)
app.use(cors());                    // Permitir peticiones desde cualquier origen
app.use(express.json());            // Convertir JSON del body de las peticiones a objetos JavaScript

// 4. CREAR NUESTRA "BASE DE DATOS" EN MEMORIA
// ⚠️ IMPORTANTE: Esta base de datos se borra cuando apagamos el servidor
let skills = [
  { id: 1, name: 'JavaScript', level: 'Advanced', category: 'Frontend' },
  { id: 2, name: 'Node.js', level: 'Intermediate', category: 'Backend' }
];

// ========================================
// DEFINIR LAS RUTAS DE NUESTRA API
// ========================================

// 5. RUTA GET /skills - OBTENER TODAS LAS HABILIDADES
app.get('/skills', (req, res) => {
  res.json(skills);  // Enviar todas las habilidades como JSON
});

// 6. RUTA GET /skills/:id - OBTENER UNA HABILIDAD ESPECÍFICA POR ID
app.get('/skills/:id', (req, res) => {
  const id = Number(req.params.id);           // Convertir el ID de string a número
  const skill = skills.find(s => s.id === id); // Buscar la habilidad con ese ID
  
  // Si no encuentra la habilidad, devolver error 404
  if (!skill) {
    return res.status(404).json({ error: 'Habilidad no encontrada' });
  }
  
  res.json(skill); // Enviar la habilidad encontrada
});

// 7. RUTA POST /skills - CREAR UNA NUEVA HABILIDAD
app.post('/skills', (req, res) => {
  const { name, level, category } = req.body; // Extraer name, level y category del body de la petición
  
  // Validar que el nombre sea obligatorio
  if (!name) {
    return res.status(422).json({ error: 'El campo "name" es obligatorio' });
  }
  
  // Generar un nuevo ID (el más alto + 1)
  const nuevoId = Math.max(0, ...skills.map(s => s.id)) + 1;
  
  // Crear la nueva habilidad
  const newSkill = { 
    id: nuevoId, 
    name: name, 
    level: level || 'Beginner', // Si no se pasa el nivel, por defecto es 'Beginner'
    category: category || 'General'  // Si no se pasa la categoría, por defecto es 'General'
  };
  
  skills.push(newSkill); // Agregar la habilidad a nuestra "base de datos"
  res.status(201).json(newSkill); // Devolver la habilidad creada con código 201
});

// 8. RUTA PATCH /skills/:id - ACTUALIZAR PARCIALMENTE UNA HABILIDAD
app.patch('/skills/:id', (req, res) => {
  const id = Number(req.params.id);           // ID de la habilidad a actualizar
  const skill = skills.find(s => s.id === id); // Buscar la habilidad
  
  // Si no encuentra la habilidad, devolver error 404
  if (!skill) {
    return res.status(404).json({ error: 'Habilidad no encontrada' });
  }

  const { name, level, category } = req.body; // Datos nuevos que queremos actualizar
  
  // Actualizar solo los campos que vienen en la petición
  if (name !== undefined) skill.name = name;
  if (level !== undefined) skill.level = level;
  if (category !== undefined) skill.category = category;

  res.json(skill); // Devolver la habilidad actualizada
});

// 9. RUTA DELETE /skills/:id - ELIMINAR UNA HABILIDAD
app.delete('/skills/:id', (req, res) => {
  const id = Number(req.params.id);                    // ID de la habilidad a eliminar
  const index = skills.findIndex(s => s.id === id);    // Buscar el índice de la habilidad
  
  // Si no encuentra la habilidad, devolver error 404
  if (index === -1) {
    return res.status(404).json({ error: 'Habilidad no encontrada' });
  }
  
  // Eliminar la habilidad del array y guardarla en una variable
  const deletedSkill = skills.splice(index, 1)[0];
  res.json(deletedSkill); // Devolver la habilidad eliminada
});

// 10. MANEJAR RUTAS NO ENCONTRADAS (404)
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// 11. INICIAR EL SERVIDOR
app.listen(PORT, () => {
  console.log(`🚀 API escuchando en http://localhost:${PORT}`);
  console.log(`📋 Endpoints disponibles:`);
  console.log(`   GET    /skills       - Ver todas las habilidades`);
  console.log(`   GET    /skills/:id   - Ver una habilidad específica`);
  console.log(`   POST   /skills       - Crear una nueva habilidad`);
  console.log(`   PATCH  /skills/:id   - Actualizar una habilidad`);
  console.log(`   DELETE /skills/:id   - Eliminar una habilidad`);
});
