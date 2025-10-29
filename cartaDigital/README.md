# Digital Menu for Bar/Restaurant
## Resumen del proyecto
El proyecto Menú Digital tiene como objetivo modernizar la experiencia gastronómica reemplazando los menús de papel tradicionales por una solución digital totalmente interactiva. Los clientes podrán acceder al menú del restaurante directamente desde sus teléfonos inteligentes, explorar los artículos disponibles, personalizar sus pedidos y enviarlos de forma fluida a la cocina y al bar.

## Objetivos
- Proporcionar una *experiencia de menú sin contacto* accesible desde dispositivos móviles.
- Permitir a los clientes *realizar pedidos directamente* desde sus teléfonos.
- Permitir la personalización de los platos (p. ej., complementos).
- Optimizar la comunicación entre clientes, personal de servicio, cocina y bar.
- Reducir los tiempos de espera y minimizar los errores en los pedidos.

## Características clave
- *Menú interactivo*: Explorar categorías, platos, bebidas y promociones con imágenes y descripciones.
- *Realización de pedidos*: Los clientes seleccionan artículos, personalizan opciones y envían los pedidos directamente.
- *Actualizaciones en tiempo real*: Actualizaciones automáticas para artículos agotados, especiales del día o cambios de precio.
- *Integración de pagos (opcional)*: Soporte para billeteras digitales, tarjetas de crédito o pagos compartidos.
- *Soporte multilingüe*: Mostrar el menú en varios idiomas para mejorar la accesibilidad.
- *Panel de administración*: El personal puede actualizar elementos del menú, rastrear pedidos activos y generar informes de ventas.

## Beneficios
- Mejora la *experiencia del cliente* con pedidos más rápidos y cómodos.
- Aumenta la *eficiencia operativa* al reducir la toma de pedidos manual.
- Promueve la *sostenibilidad* al eliminar los menús de papel.
- Aumenta las *oportunidades de venta adicional* mediante sugerencias inteligentes y promociones.

## Usuarios objetivo
- *Clientes*: Invitados del bar o restaurante que usan sus teléfonos para navegar y pedir.
- *Personal*: Meseros, bartenders y personal de cocina que reciben y procesan pedidos de forma digital.
- *Administradores*: Gerentes del restaurante que supervisan el contenido del menú, las ventas y la analítica.

## Tecnología propuesta
- *Backend*: Node.js / ASP.NET Core con API REST
- *Base de datos*: MongoDB / Supabase

## Hoja de ruta
1. Desarrollo de las funciones principales (explorar menú, realizar pedidos, panel de control).
2. Integración del sistema de pagos (opcional).
3. Fase de pruebas con restaurantes piloto.

---
Este proyecto redefinirá la manera en que los clientes interactúan con un bar/restaurante, ofreciendo una experiencia de pedido digital rápida y personalizada, además de ayudar al negocio a mejorar la eficiencia y la satisfacción del cliente.
 
## Endpoints a desarrollar (mínimo 5 colecciones, CRUD)

### Clientes
- **LISTAR**: `GET /api/clientes`
- **OBTENER POR ID**: `GET /api/clientes/:id`
- **CREAR (Alta)**: `POST /api/clientes`
- **ACTUALIZAR (Modificación)**: `PUT /api/clientes/:id`
- **ELIMINAR (Baja)**: `DELETE /api/clientes/:id`

### Empleados
- **LISTAR**: `GET /api/empleados`
- **OBTENER POR ID**: `GET /api/empleados/:id`
- **CREAR (Alta)**: `POST /api/empleados`
- **ACTUALIZAR (Modificación)**: `PUT /api/empleados/:id`
- **ELIMINAR (Baja)**: `DELETE /api/empleados/:id`

### Menús (ítems del menú/productos)
- **LISTAR**: `GET /api/menus`
- **OBTENER POR ID**: `GET /api/menus/:id`
- **CREAR (Alta)**: `POST /api/menus`
- **ACTUALIZAR (Modificación)**: `PUT /api/menus/:id`
- **ELIMINAR (Baja)**: `DELETE /api/menus/:id`

### Mesas
- **LISTAR**: `GET /api/mesas`
- **OBTENER POR ID**: `GET /api/mesas/:id`
- **CREAR (Alta)**: `POST /api/mesas`
- **ACTUALIZAR (Modificación)**: `PUT /api/mesas/:id`
- **ELIMINAR (Baja)**: `DELETE /api/mesas/:id`

### Pedidos
- **LISTAR**: `GET /api/pedidos`
- **OBTENER POR ID**: `GET /api/pedidos/:id`
- **CREAR (Alta)**: `POST /api/pedidos`
- **ACTUALIZAR (Modificación)**: `PUT /api/pedidos/:id`
- **ELIMINAR (Baja)**: `DELETE /api/pedidos/:id`
