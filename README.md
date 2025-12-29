# Chile-morron-tamagotchi

![Tamagotchi Screenshot](https://github.com/albertovgs/Chile-morron-tamagotchi/blob/main/src/img/Screenshot.png) <!-- Replace with actual screenshot -->

Un Tamagotchi simple y adorable con sprites de Cinnamon Roll de Yellow Kitty. Cuida de tu pequeña mascota virtual interactuando con ella a través de acciones como jugar, dormir y comer. ¡Mantén sus niveles de infelicidad, sueño y hambre bajos para evitar que se vaya al más allá!

## 🎮 Cómo Jugar

Tu Tamagotchi, llamado "Chile Morron", comienza con niveles moderados de infelicidad, sueño y hambre. Con el tiempo, estos niveles aumentarán automáticamente:

- **Infelicidad**: Aumenta cada 20 segundos.
- **Sueño**: Aumenta cada 60 segundos (más rápido si tiene hambre).
- **Hambre**: Aumenta cada 40 segundos.

Usa los botones para reducir estos niveles:
- **Jugar**: Reduce la infelicidad en 2 puntos.
- **Dormir**: Reduce el sueño en 2 puntos.
- **Comer**: Reduce el hambre en 2 puntos.

Si algún nivel llega a 10, tu Tamagotchi se pondrá triste, hambriento o somnoliento. Si todos los niveles llegan a 10, ¡morirá! Mantén un equilibrio para mantenerlo feliz.

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm o yarn

### Pasos
1. Clona el repositorio:
   ```bash
   git clone https://github.com/alberto_vgs/Chile-morron-tamagotchi.git
   cd Chile-morron-tamagotchi
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Construye el proyecto:
   ```bash
   npm run build
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm start
   ```

5. Abre tu navegador y ve a `http://localhost:3000` (o el puerto que indique lite-server).

### Scripts Disponibles
- `npm run build`: Compila TypeScript a JavaScript.
- `npm run watch`: Compila en modo watch para desarrollo.
- `npm start`: Inicia el servidor lite-server.

## 🛠️ Tecnologías Utilizadas
- **TypeScript**: Para la lógica del juego.
- **HTML5 & CSS3**: Para la interfaz y estilos.
- **lite-server**: Para el servidor de desarrollo.
- **Sprites**: Imágenes personalizadas de Cinnamon Roll.

## 📁 Estructura del Proyecto
```
Chile-morron-tamagotchi/
├── index.html          # Página principal
├── style.css           # Estilos CSS
├── package.json        # Dependencias y scripts
├── tsconfig.json       # Configuración de TypeScript
├── src/
│   ├── main.ts         # Punto de entrada principal
│   ├── Tamagotchi.ts   # Clase Tamagotchi
│   ├── stats.ts        # Funciones para mostrar estadísticas
│   └── img/
│       ├── background/ # Fondos
│       └── sprites/    # Sprites del personaje
└── dist/               # Archivos compilados (generados)
```

## 🎨 Características
- Animaciones suaves al interactuar con el Tamagotchi.
- Estados visuales basados en las estadísticas (aburrido, hambriento, somnoliento).
- Mensajes dinámicos en la pantalla.
- Diseño retro inspirado en consolas portátiles.

## 🤝 Contribuciones
¡Las contribuciones son bienvenidas! Si quieres mejorar el juego, agrega nuevas características o corrige bugs:
1. Haz un fork del proyecto.
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`).
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`).
4. Push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## 📄 Licencia
Este proyecto está bajo la Licencia ISC. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor
Hecho con ❤️ por [@alberto_vgs](https://github.com/alberto_vgs).

## 🌐 Demo
¡Juega en línea en [GitHub Pages](https://albertovgs.github.io/Chile-morron-tamagotchi/)!

---

¡Disfruta cuidando de tu Chile Morron! 🍩🐱
