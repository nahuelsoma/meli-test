# Test Frontend MercadoLibre

Este repositorio contiene el cliente y servidor requeridos en el test de frontend de MercadoLibre.

Se puede probar una demo en https://meli-test-client.nahuelsoma.com/.

Por su parte, el servidor se encuentra corriendo en https://meli-test-xi.vercel.app/

## Cómo ejecutar el proyecto 🆙

En primera instancia se debe ejecutar el servidor, que se utilizará como fuente de datos del cliente.

Luego se compila y ejecuta el cliente.

### 1️⃣ Ejecutando el servidor

1. Dirigirse a la carpeta /server:

```
cd server
```

2. Instalar las dependencias:

```
npm i
```

3. Correr el servidor:

```
npm run start
```

En esta instancia el servidor se encuentra corriendo en http://localhost:3005 👈

### 2️⃣ Ejecutando el cliente

1. Desde el directorio raíz dirigirse a la carpeta /client:

```
cd client
```

2. Instalar las dependencias:

```
npm i
```

3. Compilar y correr el cliente:

```
npm run serve:build
```

El cliente se ejecuta por defecto en http://localhost:3000 👈
