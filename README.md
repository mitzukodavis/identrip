# IdenTrip - Plataforma Descentralizada de Turismo

IdenTrip es una plataforma descentralizada que utiliza tecnología blockchain para combatir locales turísticos falsos y reseñas fraudulentas en América Latina, con un enfoque inicial en Cusco, Perú. Integra NFTs para la verificación de identidad digital e incentivos tokenizados con STX para fomentar la confianza, transparencia y turismo sostenible.

## Características Principales

1. Verificación de Identidad con NFTs:
   - Los negocios son verificados y reciben NFTs únicos que garantizan su autenticidad.

2. Incentivos Tokenizados:
   - Los usuarios ganan tokens STX por reseñas verificadas y reservas.
   - Descuentos del 5% en reservas pagadas con STX.

3. Transparencia Respaldada por Blockchain:
   - Todas las transacciones, reseñas y reservas se almacenan de forma segura en la blockchain.

4. Fomento del Turismo Sostenible:
   - Promueve prácticas comerciales justas y refuerza la confianza en el ecosistema turístico.

5. Sistema de Autenticación de Usuarios:
   - Registro y login seguros para usuarios y negocios.

6. Reservas en Línea:
   - Sistema integrado de reservas con confirmación mediante NFTs.

7. Panel de Administración:
   - Para la verificación de negocios y gestión de la plataforma.

8. Búsqueda y Filtrado Avanzado:
   - Permite a los usuarios encontrar fácilmente lo que buscan.

9. Soporte Multilingüe:
   - Interfaz disponible en varios idiomas para mayor accesibilidad.

10. Sistema de Notificaciones:
    - Mantiene a los usuarios informados sobre sus reservas, recompensas y actualizaciones.

11. Estadísticas y Análisis:
    - Proporciona insights valiosos sobre el turismo en la región.

## Tecnologías Utilizadas

- Frontend: React, Redux
- Backend: Node.js, Express
- Base de Datos: MongoDB
- Blockchain: Stacks (STX) para contratos inteligentes y NFTs
- Almacenamiento Descentralizado: Internet Computer (ICP) para gestión de datos y detección de fraudes
- Autenticación: JWT
- Internacionalización: react-i18next

## Configuración y Ejecución

### Requisitos Previos

- Node.js (v14 o superior)
- MongoDB
- Cuenta en Stacks Testnet

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
   Edita el archivo `.env` con tus credenciales de MongoDB, Stacks y otras configuraciones necesarias.

3. Configurar el frontend:
   ```
   cd ../frontend
   npm install
   cp .env.example .env
   ```
   Edita el archivo `.env` con la URL de tu API backend y otras configuraciones necesarias.

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

- Regístrate o inicia sesión en la plataforma.
- Explora restaurantes, agencias de viajes y atracciones turísticas verificadas en Cusco.
- Realiza reservas y obtén NFTs como confirmación.
- Deja reseñas verificadas y gana tokens STX como recompensa.
- Utiliza tus tokens STX para obtener descuentos en futuras reservas.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue para discutir cambios mayores antes de crear un pull request.

## Licencia

Este proyecto está bajo la licencia MIT.
