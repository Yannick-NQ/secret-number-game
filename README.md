# Juego del Número Secreto 🎮
![image](https://github.com/user-attachments/assets/338099ae-d3a0-401f-82aa-2e891d7bc36b)

Este proyecto es una versión mejorada del clásico **Juego del Número Secreto**. El sistema genera un número aleatorio y el jugador debe adivinarlo, recibiendo pistas de si el número ingresado es mayor o menor que el secreto. ¡Pon a prueba tus habilidades de adivinanza! 🧠

<p align="center">
  <a href="https://yannick-nq.github.io/secret-number-game/" target="_blank">Probar Juego Número Secreto 2.0</a>
</p>

## 🚀 Objetivo del Proyecto

El objetivo del juego es simple: el jugador debe adivinar el número secreto generado aleatoriamente dentro de un rango específico. El sistema da pistas después de cada intento, indicando si el número es **mayor** o **menor** que el número secreto.

Este desafío se basa en prácticas de lógica de programación, manejo del DOM, y eventos en JavaScript, con mejoras sobre la base proporcionada por el curso **"Git y GitHub: repositorio, commit y versiones"** de ONE (Alura Latam + Oracle).

---

## 🎮 Características Mejoradas

### Funcionalidades:
- **Generación aleatoria del número secreto**: El sistema selecciona un número secreto dentro de un rango definido.
- **Validación de entradas**: Solo se permiten números válidos, evitando entradas no numéricas o vacías.
- **Pistas interactivas**: Después de cada intento, el sistema indica si el número es mayor o menor que el secreto.
- **Contador de intentos**: Muestra el número de intentos realizados hasta que el jugador adivine correctamente.
- **Interfaz mejorada**: Se agregaron detalles visuales para mejorar la experiencia del usuario.
- **Botón de reinicio**: El jugador puede reiniciar el juego y comenzar de nuevo en cualquier momento.
- **Sistema de Puntuaciones**: Se implementó un sistema de puntuación que registra el número de intentos y puntaje, almacenados en `localStorage`.

### Mejoras sobre el proyecto base:
- **Validación más robusta de entradas**: El sistema maneja entradas no numéricas y muestra alertas de error.
- **Diseño más atractivo**: Se mejoró la interfaz visual con un fondo en gradiente y colores más amigables.
- **Funcionalidad de reinicio**: El usuario puede resetear el juego sin necesidad de recargar la página.
- **Optimización de la lógica del juego**: Se mejoró la eficiencia de los loops y la interacción con el DOM.

---

## 📷 Capturas

- Interfaz Inicial:  
  <p align="center">
    <img src="https://github.com/user-attachments/assets/dfc1a13b-a5d6-41f1-a301-827fe7720cc8" alt="Interfaz Inicial">
  </p>

- Interfaz cuando el usuario está lejos del número secreto:  
  <p align="center">
    <img src="https://github.com/user-attachments/assets/32b52347-cae8-40c4-8227-31645a14811e" alt="Interfaz lejos del número secreto">
  </p>

- Interfaz cuando el usuario no está muy lejos del número secreto:  
  <p align="center">
    <img src="https://github.com/user-attachments/assets/33f8c613-a90f-4b02-ae9d-a88ea0d573ee" alt="Interfaz no tan lejos del número secreto">
  </p>

- Interfaz cuando el usuario está cerca del número secreto:  
  <p align="center">
    <img src="https://github.com/user-attachments/assets/92f76601-8d23-4fbb-ab07-7fa92c2b566c" alt="Interfaz cerca del número secreto">
  </p>

- Interfaz cuando el usuario acierta el número secreto:  
  <p align="center">
    <img src="https://github.com/user-attachments/assets/64b5cba9-6a1a-4b94-8473-bcf1805170bf" alt="Interfaz acertando el número secreto">
  </p>

- Interfaz Mobile:  
  <div display='flex' align="center" spacing="2">
    <img src="https://github.com/user-attachments/assets/1eb8b2b5-1940-4165-b84e-c83dc3699638" alt="Interfaz Mobile" height='360px'>
    <img src="https://github.com/user-attachments/assets/6df9fca3-a7c2-4eef-82b4-70c4bb396ace" alt="Interfaz Mobile" height='360px'>
  </div>
---

## 🔧 Stack de Tecnologias

Este proyecto fue construido utilizando tecnologías fundamentales del desarrollo web, aplicando buenas prácticas de programación:

- **HTML5**: Para la estructura básica del juego.
- **CSS3**: Para estilizar el juego, incluyendo un fondo en gradiente generado con **CSS Gradient**.
- **JavaScript**: Para manejar la lógica del juego y la interacción con el usuario.
- **Live Server**: Para la visualización en tiempo real durante el desarrollo.
- **Git y GitHub**: Para el control de versiones y la colaboración.
- **Visual Studio Code**: Como editor de código principal.

---

## 🛠️ Herramientas y Tecnologías

- **Math.random() y Math.floor()**: Para generar el número aleatorio dentro de un rango definido.
- **Eventos del DOM**: Para interactuar con el usuario a través de botones, entradas de texto, y mensajes dinámicos.
- **Funciones**: Implementados para manejar la lógica del juego, validaciones y contador de intentos.

---

## 🌟 Conocimientos Aplicados

Durante el desarrollo de este proyecto, se aplicaron conceptos importantes que fortalecen las habilidades de un desarrollador junior:

1. **Manejo del DOM**: Selección y modificación de elementos HTML mediante JavaScript.
2. **Condicionales**: Uso de estructuras condicionales y bucles para manejar las entradas y salidas del juego.
3. **Funciones**: Implementación de funciones que mejoran la modularidad y la eficiencia del código.
4. **Operadores matemáticos**: Uso de operadores como `Math.random()`, `Math.floor()`, y `parseInt()` para generar un número secreto y manejar las entradas del usuario.
5. **Buenas prácticas de desarrollo**: Organización del código y comentarios para mantener la claridad y facilidad de mantenimiento.

---

## 📈 Mejoras Futuras

Aunque el juego ya está funcional, se pueden agregar varias mejoras para hacer la experiencia aún más divertida y desafiante:

- **Modos de dificultad**: Permitir que el jugador elija entre diferentes rangos numéricos, haciendo el juego más desafiante.
- **Puntuaciones en base a tiempos**: Implementar un sistema de puntuación que registre el número de intentos y el tiempo que se tarda en adivinar el número.
- **Sonidos y animaciones**: Agregar efectos sonoros y animaciones para hacer el juego más interactivo.
- **Modo multijugador**: Permitir que dos jugadores se desafíen entre sí.
- **Temporizador**: Agregar un cronómetro para que el jugador tenga un tiempo limitado para adivinar el número secreto.

---

## 📋 Cómo Ejecutar el Proyecto

Para probar el juego en tu máquina local, sigue estos pasos:

1. Clona el repositorio en tu máquina local:  
   ```bash
   git clone https://github.com/tuusuario/juego-numero-secreto.git
   ```

2. Navega a la carpeta donde se encuentra el proyecto: 
   ```bash
   cd juego-numero-secreto
   ```

3. Abre el archivo index.html en tu navegador.

   Alternativamente, puedes utilizar Live Server para ver los cambios en tiempo real mientras trabajas.
