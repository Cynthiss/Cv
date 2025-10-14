# API de Habilidades

## Rutas

- **GET** `/skills`: Obtiene todas las habilidades.
- **GET** `/skills/:id`: Obtiene una habilidad por su ID.
- **POST** `/skills`: Crea una nueva habilidad. Requiere `name`, `level`, y `category`.
- **PATCH** `/skills/:id`: Actualiza una habilidad. Los campos son opcionales.
- **DELETE** `/skills/:id`: Elimina una habilidad.

## Ejemplos de solicitudes

### Crear habilidad (POST)
- URL: `http://localhost:3000/skills`
- Body (JSON):
```json
{
  "name": "React",
  "level": "advanced",
  "category": "frontend"
}
