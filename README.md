# Mercaderes Backend

Backend de **Mercaderes**, una aplicación para generar mercaderes de fantasía para partidas de rol.

Este backend contiene la lógica de negocio del generador: creación de mercaderes, tipos de tienda, calidades, inventarios, precios, cantidades, modificadores comerciales y resolución de resultados especiales como encantamientos o tratos feéricos.

---

## Estado del proyecto

Versión actual del backend: **v1.0**

La V1.0 incluye:

* Generación automática de mercaderes.
* Generación automática de inventario.
* Sistema de calidad de mercader.
* Tipos de tienda y objetos seedados.
* Precios normalizados internamente en cobre.
* Modificadores de precio según actitud comercial.
* Cálculo de ventas.
* Recálculo de precios del inventario.
* Resolución automática de encantamientos.
* Resolución automática de tratos feéricos.
* Compatibilidad con frontend React/Vite.

---

## Stack

* Node.js
* TypeScript
* Express
* Sequelize
* MySQL
* Docker para base de datos local
* Sequelize CLI para migraciones y seeders

---

## Estructura principal

```txt
src/
  config/
  controllers/
  data/
  database/
  middlewares/
  models/
  routes/
  seeders/
  services/
  utils/
```

---

## Modelos principales

* `Merchant`
* `MerchantQuality`
* `ShopType`
* `Item`
* `MerchantInventory`

Relaciones principales:

* Un `Merchant` pertenece a un `ShopType`.
* Un `Merchant` pertenece a una `MerchantQuality`.
* Un `Item` pertenece a un `ShopType`.
* Un `Item` pertenece a una `MerchantQuality`.
* Un `Merchant` tiene muchos `MerchantInventory`.
* Un `MerchantInventory` pertenece a un `Merchant`.
* Un `MerchantInventory` pertenece a un `Item`.

---

## Reglas económicas

La aplicación trabaja internamente en cobre.

Campos principales:

```txt
Item.price
Item.basePriceCp

Merchant.cashAmount
Merchant.cashAmountCp

MerchantInventory.finalPrice
MerchantInventory.finalPriceCp
```

Utilidades relevantes:

```txt
currency.utils.ts
dice.utils.ts
inventory.utils.ts
itemResolver.utils.ts
priceModifier.utils.ts
random.utils.ts
```

### Normalización de moneda

Los precios visibles pueden escribirse como:

```txt
5 cp
3 sp
100 gp
5,000 gp
```

Internamente se convierten a cobre mediante `parseCurrencyToCopper`.

Ejemplo:

```txt
1 gp = 100 cp
1 sp = 10 cp
1 cp = 1 cp
```

---

## Calidad de mercader

Las calidades actuales son:

```txt
1 Atroz
2 Pobre
3 Común
4 Buena
5 Excelente
6 Legendaria
```

La calidad afecta a:

* dinero inicial del mercader;
* tamaño del inventario;
* objetos compatibles;
* rareza general de los resultados.

La regla de dinero del mercader es acumulativa.

Ejemplo:

```txt
Si el mercader es Común, se tiran y suman las fórmulas de:
Atroz + Pobre + Común
```

---

## Endpoints principales

### Generar mercader

```http
POST /api/merchants/generate
```

Genera un mercader con inventario compatible.

Ejemplo de body:

```json
{
  "name": null,
  "species": null,
  "region": null,
  "attitude": null,
  "priceModifierPercent": null,
  "shopTypeId": 1,
  "merchantQualityId": 3,
  "personalityTrait": null,
  "ideal": null,
  "bond": null,
  "flaw": null,
  "gimmick": null,
  "notes": ""
}
```

Si un campo llega como `null`, el backend lo genera aleatoriamente.

---

### Guardar mercader

```http
POST /api/merchants
```

Guarda un mercader definitivo con su inventario.

---

### Listar mercaderes

```http
GET /api/merchants
```

Devuelve una lista ligera de mercaderes guardados.

---

### Detalle de mercader

```http
GET /api/merchants/:id
```

Devuelve un mercader completo con inventario.

---

### Opciones de generación

```http
GET /api/merchant-options
```

Devuelve opciones para el frontend:

* especies;
* regiones;
* tipos de tienda;
* calidades;
* rasgos;
* ideales;
* vínculos;
* defectos;
* gimmicks.

---

### Opciones de actitud/precio

```http
GET /api/merchants/price-modifier-options
```

Devuelve las opciones de actitud comercial y modificador de precio.

---

### Calcular venta

```http
POST /api/merchants/calculate-sale
```

Calcula una venta sin persistir una transacción.

Ejemplo de body:

```json
{
  "cashAmountCp": 51000,
  "itemId": 18,
  "currentQuantity": 10,
  "finalPriceCp": 13,
  "saleQuantity": 3
}
```

Devuelve:

* resumen de venta;
* nueva caja del mercader;
* nueva cantidad del item.

---

### Recalcular precios de inventario

```http
POST /api/merchants/recalculate-inventory-prices
```

Recalcula precios del inventario cuando cambia el modificador comercial.

---

## Instalación

Instalar dependencias:

```bash
npm install
```

Configurar variables de entorno en `.env`.

Ejemplo orientativo:

```env
PORT=4000
DB_HOST=localhost
DB_PORT=3306
DB_NAME=mercaderes_db
DB_USER=root
DB_PASSWORD=password
```

---

## Base de datos

Ejecutar migraciones:

```bash
npx sequelize-cli db:migrate
```

Ejecutar seeders:

```bash
npx sequelize-cli db:seed:all
```

Revertir seeders:

```bash
npx sequelize-cli db:seed:undo:all
```

Reset completo de desarrollo:

```bash
npx sequelize-cli db:seed:undo:all
npx sequelize-cli db:migrate:undo:all
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

---

## Desarrollo

Arrancar el backend en modo desarrollo:

```bash
npm run dev
```

Si el proyecto no tiene script de build, la validación principal de backend se realiza arrancando el servidor, relanzando seeders y probando endpoints.

Para ver los scripts disponibles:

```bash
npm run
```

---

## Seeders de items

Los objetos están organizados por tipo de tienda.

Cada item sigue una estructura similar:

```js
{
  name: 'Objeto',
  price: '100 gp',
  quantityFormula: '1d4',
  source: 'DMG',
  notes: 'Notas del objeto.',
  shopTypeId: 1,
  merchantQualityId: 3
}
```

### Reglas importantes para seeders

* `price` debe ser parseable.
* `quantityFormula` debe ser compatible con `rollDiceFormula`.
* Las unidades se explican en `notes`.
* No usar precios tipo `Variable`, `500 gp*` o `1 gp / lb.` directamente.
* No usar cantidades tipo `Unlimited`, `Only 1, ever` o `3 spells / day` directamente.
* Normalizar esas aclaraciones en `notes`.

Ejemplos correctos:

```js
{
  name: 'Lingote de hierro',
  price: '1 gp',
  quantityFormula: '1d4 x 5',
  source: 'PHB',
  notes: 'Precio por libra. Cantidad en libras.',
  shopTypeId: 12,
  merchantQualityId: 2
}
```

```js
{
  name: 'Conjuro: Restauración mayor',
  price: '450 gp',
  quantityFormula: '3',
  source: 'PHB',
  notes: 'Cantidad en conjuros diarios. Reduce agotamiento y elimina encantado, petrificado, una maldición o reducciones de puntuaciones o máximos.',
  shopTypeId: 22,
  merchantQualityId: 4
}
```

---

## Tipos de tienda

La V1.0 incluye los tipos de tienda del libro base usado como referencia:

```txt
1  Alcohol and Refreshment
2  Animals
3  Books and Maps
4  Flowers and Seeds
5  Food and Animal Products
6  Furniture and Interior Decor
7  High Fashion
8  Jewelry and Gems
9  Knick-Knacks
10 Leatherworking
11 Mechanical Contraptions
12 Medium and Heavy Armor
13 Potions, Poisons, and Herbs
14 Religious Idols and Blessings
15 Songs and Instruments
16 Spell Scrolls and Tomes
17 Tattoos
18 Thieving Supplies
19 Tools
20 Vehicles and Transportation
21 Weapons
22 Witchcraft
23 Astral Traveler
24 Enchantments
25 Fey Bargains
26 Magic Items
27 Magical Creatures
28 Necromancy
29 Needful Things
30 Time-Lost
```

---

## Resolución de objetos especiales

Algunos tipos de tienda tienen lógica especial para que el frontend reciba resultados ya resueltos y listos para usar en mesa.

---

### Encantamientos

Los encantamientos se resuelven automáticamente al generar inventario.

En seeders pueden existir entradas como:

```js
{
  name: 'Encantamiento mayor aleatorio',
  price: '500 gp',
  quantityFormula: '1d4',
  source: '—',
  notes: 'Cantidad en encantamientos diarios. El encantamiento se determina tirando en la tabla de Encantamientos Mayores.',
  shopTypeId: 24,
  merchantQualityId: 4
}
```

Pero al generar el inventario, el backend devuelve directamente el resultado:

```json
{
  "item": {
    "name": "Encantamiento de Templanza",
    "notes": "La criatura sintonizada obtiene resistencia al daño de fuego y al daño de frío."
  }
}
```

Los encantamientos se organizan en:

* encantamientos menores;
* encantamientos mayores;
* encantamientos legendarios.

---

### Tratos feéricos

Los objetos de Fey Bargains resuelven automáticamente el geas asociado.

En seeders puede aparecer:

```js
{
  name: 'Botas de elfo',
  price: '0 gp',
  quantityFormula: '1',
  source: 'DMG',
  notes: 'Solo 1, para siempre. Coste: geas menor.',
  shopTypeId: 25,
  merchantQualityId: 3
}
```

Pero al generar inventario, el backend devuelve directamente el resultado del geas:

```json
{
  "item": {
    "name": "Botas de elfo",
    "notes": "Entrega al mercader 3 de tus recuerdos más felices."
  }
}
```

Las expresiones de dados dentro del texto, como `1d4`, `2d6`, `3d8` o `10d10`, se calculan automáticamente.

Ejemplo:

```txt
Entrega al mercader 1d4 de tus recuerdos más felices.
```

puede convertirse en:

```txt
Entrega al mercader 3 de tus recuerdos más felices.
```

---

## Producción

Antes de desplegar:

* comprobar variables de entorno;
* relanzar seeders en entorno limpio;
* probar generación aleatoria;
* probar tipos especiales;
* revisar CORS;
* confirmar conexión con frontend.

---

## Roadmap

### V1.0

* Backend funcional.
* Frontend funcional.
* Seeders completos.
* Generación de mercaderes.
* Generación de inventarios.
* Resolución de encantamientos.
* Resolución de tratos feéricos.
* Guardado local desde frontend.

### V1.1

Posibles mejoras de contenido:

* Nuevo tipo de mercader especial: **Calderero Curtidor**.
* Ampliación de nombres y apellidos de mercaderes según su especie.
* Mejoras en tiendas especiales.
* Nuevas tablas de objetos o variantes.
* Ajustes de balance de precios/cantidades.

### V2.0

Posibles mejoras de interacción:

* Edición avanzada de mercaderes.
* Edición de notas.
* Añadir items concretos al inventario.
* Añadir items aleatorios al inventario.
* Gestión avanzada de mercaderes guardados.
* Guardar cambios sobre mercaderes existentes.
* Eliminar mercaderes guardados.
* Mejoras de UI/UX en frontend.

---

## Autoría

Proyecto creado por **Ignacio Furió**, bajo la marca creativa **Eddieden DM**.

Mercaderes es una herramienta fan-made para uso en partidas de rol. No es un producto oficial de Wizards of the Coast ni de ninguna editorial asociada.

---

## Licencia

Ver archivo `LICENSE`.
