# IdenTrip - Plataforma Descentralizada de Turismo

IdenTrip es una plataforma descentralizada que utiliza tecnología blockchain para combatir locales turísticos falsos y reseñas fraudulentas en América Latina, con un enfoque inicial en Cusco, Perú. Integra NFTs para la verificación de identidad digital e incentivos tokenizados con STX para fomentar la confianza, transparencia y turismo sostenible.

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

1. Verificación de Identidad con NFTs:
   - Los negocios son verificados y reciben NFTs únicos que garantizan su autenticidad.

2. Incentivos Tokenizados:
   - Los usuarios ganan tokens STX por reseñas verificadas.
   - Descuentos del 5% en reservas pagadas con STX.

3. Transparencia Respaldada por Blockchain:
   - Todas las transacciones y reseñas se almacenan de forma segura en la blockchain.

4. Fomento del Turismo Sostenible:
   - Promueve prácticas comerciales justas y refuerza la confianza en el ecosistema turístico.

## Requisitos Previos

- Node.js (v14 o superior)
- MongoDB
- Cuenta en Stacks Testnet

## Configuración y Ejecución

### Pasos para Ejecutar el Proyecto

1. Clonar el repositorio:
   ```
   git clone https://github.com/tu-usuario/identrip.git
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

4. Iniciar el backend:
   ```
   cd ../backend
   npm start
   ```

5. En otra terminal, iniciar el frontend:
   ```
   cd ../frontend
   npm start
   ```

6. Abrir el navegador en `http://localhost:3000`

### Despliegue del Contrato Inteligente

1. Asegúrate de tener la CLI de Stacks instalada.
2. Navega a la carpeta `backend/contracts`.
3. Despliega el contrato:
   ```
   stacks deploy identrip-nft.clar
   ```

## Uso de la Plataforma

- La página principal muestra listas de restaurantes, agencias de viajes y atracciones turísticas verificadas en Cusco.
- Los usuarios pueden agregar nuevos negocios turísticos, que recibirán un NFT único al ser verificados.
- Los turistas pueden dejar reseñas verificadas, respaldadas por fotos con datos GPS.
- Las reservas realizadas con STX reciben un descuento del 5%.

## Datos del Mercado Turístico de Perú

- 23,8 millones de visitantes registrados en establecimientos de hospedaje durante los primeros cinco meses de 2024.
- 63,9% de las visitas se concentran en Lima, seguido de Cusco y Callao.
- 43 proyectos de inversión valorados en $1.936 millones identificados en 2024.
- Proyección de aumento del 11,5% en inversión extranjera directa.
- 28,456 establecimientos hoteleros en operación.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue para discutir cambios mayores antes de crear un pull request.

## Licencia

Este proyecto está bajo la licencia MIT.
