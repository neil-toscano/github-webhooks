# README

## GitHub Webhooks to Discord

Este proyecto utiliza **webhooks de GitHub** para reaccionar a eventos específicos como:

- **Issues** creados o actualizados.
- **Stars** añadidos a un repositorio.

Cada vez que ocurre alguno de estos eventos, se envía un mensaje al canal de Discord configurado mediante un webhook de Discord.

---

## 🚀 Características

- Escucha eventos de **GitHub Webhooks**.
- Procesa los eventos de:
  - Creación/actualización de **Issues**.
  - Repositorios marcados con **Stars**.
- Envío de notificaciones formateadas a Discord.
- Seguridad adicional al validar las firmas (`x-hub-signature-256`) de las solicitudes de GitHub.

---

## 📦 Instalación

Sigue estos pasos para ejecutar el proyecto:

### 1. Clona este repositorio
```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
```

### 2. Instala las dependencias
```bash
npm install
```

### 3. Crea el archivo `.env`
Debes configurar las variables de entorno necesarias en un archivo `.env` en la raíz del proyecto. Usa el siguiente ejemplo:

```env
PORT=3000
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/your_webhook_id/your_webhook_token
SECRET_TOKEN=your_github_webhook_secret
```

### 4. Configura el webhook en GitHub
1. Ve a tu repositorio en GitHub.
2. Accede a **Settings** > **Webhooks** > **Add webhook**.
3. Ingresa la URL de tu servidor (por ejemplo, `http://localhost:3000/webhook`).
4. Configura el **Content type** como `application/json`.
5. Agrega tu **secret** (debe coincidir con `SECRET_TOKEN` en el archivo `.env`).
6. Selecciona los eventos que deseas escuchar, como:
   - `Issues`
   - `Stars`
7. Guarda los cambios.

### 5. Ejecuta el proyecto
Inicia el servidor localmente:
```bash
npm run dev
```

---

## 🛠 Uso

1. Cuando alguien cree o actualice un **Issue** en el repositorio de GitHub, el webhook lo detectará y enviará una notificación al canal de Discord configurado.
2. Cuando alguien marque el repositorio con una **Star**, también se enviará un mensaje de notificación a Discord.

---

## 📜 Scripts disponibles

- `npm run dev`: Inicia el servidor en modo desarrollo con recarga en caliente.
- `npm run build`: Genera el proyecto para producción.
- `npm start`: Inicia el proyecto en modo producción.

---

## 🛡 Seguridad

Este proyecto valida las solicitudes entrantes desde GitHub utilizando la cabecera `x-hub-signature-256` y una clave secreta configurada en el archivo `.env`. Esto asegura que los eventos provienen de GitHub y no de terceros.

---

## 🧑‍💻 Contribución

1. Haz un fork del repositorio.
2. Crea una rama para tus cambios:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y haz commits:
   ```bash
   git commit -m "Añade nueva funcionalidad"
   ```
4. Envía tus cambios al fork:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Abre un **Pull Request** en el repositorio original.

---

## ✨ Licencia

Este proyecto está bajo la licencia MIT. ¡Siéntete libre de usarlo, modificarlo y mejorarlo! 😊