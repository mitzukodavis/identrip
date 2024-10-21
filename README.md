# IdenTrip - Plataforma Descentralizada de Turismo

IdenTrip es una plataforma descentralizada que utiliza tecnología blockchain para combatir locales turísticos falsos y reseñas fraudulentas, con un enfoque en América Latina. Integra NFTs para la verificación de identidad digital e incentivos tokenizados con STX para fomentar la confianza, transparencia y turismo sostenible.

## Estructura del Proyecto

El proyecto está dividido en dos partes principales:

1. Frontend (React)
2. Backend (Node.js, Express, MongoDB)

### Archivos Principales

- `frontend/src/components/RestaurantList.js`: Componente principal de React que muestra la lista de restaurantes y permite agregar nuevos.
- `backend/models/restaurant.model.js`: Modelo de MongoDB para los restaurantes.
- `backend/contracts/identrip-nft.clar`: Contrato inteligente en Clarity para la gestión de NFTs y recompensas.
- `backend/services/stacksService.js`: Servicio para interactuar con la blockchain de Stacks.
- `backend/routes/restaurants.js`: Rutas de Express para manejar las operaciones CRUD de restaurantes.

## Características Principales

1. Verificación de Identidad con NFTs
2. Incentivos Tokenizados
3. Transparencia Respaldada por Blockchain
4. Fomento del Turismo Sostenible

## Requisitos Previos

- Node.js (v14 o superior)
- MongoDB
- Cuenta en Stacks Testnet

## Configuración

1. Clonar el repositorio:
   ```
   git clone <url-del-repositorio>
   cd identrip
   ```

2. Configurar el backend:
   ```
   cd backend
   npm install
   cp .env.example .env
   ```
   Edita el archivo `.env` con tus credenciales de MongoDB y Stacks.

3. Configurar el frontend:
   ```
   cd ../frontend
   npm install
   cp .env.example .env
   ```
   Edita el archivo `.env` con la URL de tu API backend.

## Ejecución

1. Iniciar el backend:
   ```
   cd backend
   npm start
   ```

2. En otra terminal, iniciar el frontend:
   ```
   cd frontend
   npm start
   ```

3. Abrir el navegador en `http://localhost:3000`

## Despliegue del Contrato Inteligente

1. Asegúrate de tener la CLI de Stacks instalada.
2. Navega a la carpeta `backend/contracts`.
3. Despliega el contrato:
   ```
   stacks deploy identrip-nft.clar
   ```

## Uso

- La página principal muestra una lista de restaurantes verificados.
- Utiliza el formulario para agregar nuevos restaurantes.
- Cada restaurante tiene un NFT asociado que garantiza su autenticidad.
- Los usuarios pueden dejar reseñas verificadas y ganar tokens STX como recompensa.

## Tecnologías Utilizadas

- Frontend: React
- Backend: Node.js, Express
- Base de Datos: MongoDB
- Blockchain: Stacks (STX)
- Contratos Inteligentes: Clarity
- Almacenamiento Descentralizado: Internet Computer (pendiente de implementar)

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue para discutir cambios mayores antes de crear un pull request.

## Licencia

Este proyecto está bajo la licencia MIT.