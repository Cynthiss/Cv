# API REST para Gestionar Habilidades (Skills)

## Descripción

Esta API fue desarrollada utilizando **Node.js** y **Express** con el objetivo de gestionar habilidades para complementar un CV. Implementa un sistema **CRUD completo** (Crear, Leer, Actualizar y Eliminar) para las habilidades, permitiendo operaciones sobre los datos almacenados en memoria. La API es accesible desde **`http://localhost:3001`** y responde con datos en formato **JSON**.

### **Requisitos**:
- **CORS** activado.
- Validaciones para errores **404** y **422**.
- **Datos en memoria (array)**.

---

## Endpoints

### **1. GET /skills**
Obtiene todas las habilidades.

- **Método**: `GET`
- **Respuesta exitosa (200)**:
  ```json
  [
    { "id": 1, "name": "JavaScript", "level": "Advanced", "category": "Frontend" },
    { "id": 2, "name": "Node.js", "level": "Intermediate", "category": "Backend" }
  ]
