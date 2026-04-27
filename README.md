# AWS Lambda CRUD Node.js - Serverless

> API RESTful sin servidor para gestión de tareas (To-Do) utilizando AWS Lambda, API Gateway y DynamoDB.

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Descripción |
|------------|-------------|
| **Node.js 20.x** | Runtime de JavaScript del lado del servidor |
| **Serverless Framework** | Framework para desplegar funciones Lambda en AWS |
| **AWS Lambda** | Computación sin servidor |
| **API Gateway** | API HTTP para invocar las funciones Lambda |
| **DynamoDB** | Base de datos NoSQL serverless |
| **AWS SDK v2** | Biblioteca para interactuar con servicios AWS |

---

## 📋 Características

- ✅ **Crear** tareas (title, description)
- ✅ **Listar** todas las tareas
- ✅ **Obtener** una tarea por ID
- ✅ **Actualizar** una tarea (title, description, done)
- ✅ **Eliminar** una tarea por ID

---

## 🚀 Instalación

### Prerrequisitos

- Node.js (v18+)
- npm o yarn
- [Serverless Framework](https://www.serverless.com/) instalado globalmente
- Cuenta de AWS con credenciales configuradas

### Pasos

1. **Clonar o navegar al proyecto:**

```bash
cd aws-lambda-crud-node
```

2. **Instalar dependencias:**

```bash
npm install
```

---

## 📖 Uso

### 🔵 Desarrollo Local

Inicia un emulador local de Lambda y tuneliza las solicitudes:

```bash
serverless dev
```

Esto levantará un servidor local (típicamente en `http://localhost:3000`).

### 🟢 Despliegue a AWS

Despliega la aplicación a la nube de AWS:

```bash
serverless deploy --verbose
```

Después del despliegue, verás un output similar a:

```
Deploying "aws-lambda-crud-node" to stage "dev" (us-west-2)

✔ Service deployed to stack aws-lambda-crud-node-dev (91s)

functions:
  createTask: aws-lambda-crud-node-dev-createTask (1.6 kB)
  getTasks:   aws-lambda-crud-node-dev-getTasks (1.6 kB)
  getTask:    aws-lambda-crud-node-dev-getTask (1.6 kB)
  updateTask: aws-lambda-crud-node-dev-updateTask (1.6 kB)
  deleteTask: aws-lambda-crud-node-dev-deleteTask (1.6 kB)

endpoint:
  POST - https://xxxxxxxxxx.execute-api.us-west-2.amazonaws.com/task
  GET  - https://xxxxxxxxxx.execute-api.us-west-2.amazonaws.com/tasks
  GET  - https://xxxxxxxxxx.execute-api.us-west-2.amazonaws.com/task/{id}
  PUT  - https://xxxxxxxxxx.execute-api.us-west-2.amazonaws.com/task/{id}
  DELETE - https://xxxxxxxxxx.execute-api.us-west-2.amazonaws.com/task/{id}
```

### 🔴 Eliminar Despliegue

Para eliminar todos los recursos de AWS:

```bash
serverless remove
```

---

## 📡 Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `POST` | `/task` | Crear una nueva tarea |
| `GET` | `/tasks` | Listar todas las tareas |
| `GET` | `/task/{id}` | Obtener una tarea por ID |
| `PUT` | `/task/{id}` | Actualizar una tarea |
| `DELETE` | `/task/{id}` | Eliminar una tarea |

### Ejemplos de uso con cURL

**Crear tarea:**
```bash
curl -X POST https://TU_API.execute-api.us-west-2.amazonaws.com/task \
  -H "Content-Type: application/json" \
  -d '{"title": "Mi primera tarea", "description": "Descripción de la tarea"}'
```

**Listar tareas:**
```bash
curl https://TU_API.execute-api.us-west-2.amazonaws.com/tasks
```

**Obtener tarea por ID:**
```bash
curl https://TU_API.execute-api.us-west-2.amazonaws.com/task/UUID_AQUI
```

**Actualizar tarea:**
```bash
curl -X PUT https://TU_API.execute-api.us-west-2.amazonaws.com/task/UUID_AQUI \
  -H "Content-Type: application/json" \
  -d '{"title": "Tarea actualizada", "description": "Nueva descripción", "done": true}'
```

**Eliminar tarea:**
```bash
curl -X DELETE https://TU_API.execute-api.us-west-2.amazonaws.com/task/UUID_AQUI
```

---

## 📁 Estructura del Proyecto

```
aws-lambda-crud-node/
├── package.json          # Dependencias del proyecto
├── serverless.yml        # Configuración de Serverless
├── README.md             # Este archivo
└── src/
    ├── first.js          # Función de prueba (Hello World)
    ├── addTask.js        # Crear tarea
    ├── getTasks.js       # Listar todas las tareas
    ├── getTask.js        # Obtener tarea por ID
    ├── updateTask.js     # Actualizar tarea
    └── deleteTask.js     # Eliminar tarea
```

---

## ⚠️ Notas Importantes

- **Seguridad:** En producción, considera agregar un autorizador (JWT o Lambda Authorizer) para proteger los endpoints.
- **DynamoDB:** La tabla `TaskTable` se crea automáticamente con el despliegue gracias a la sección `resources` en `serverless.yml`.
- **Región:** El proyecto está configurado para `us-west-2` (Oregón). Puedes cambiar esto en `serverless.yml`.

---

## Licencia

MIT