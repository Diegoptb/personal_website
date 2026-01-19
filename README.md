
# Documentación del Proyecto: personal_website

## Descripción General
Este proyecto es un portafolio personal desarrollado con React y Vite. Permite mostrar proyectos destacados, tecnologías principales y enlaces a demos y repositorios. Incluye detección de estado online/offline de demos y rutas protegidas para proyectos restringidos.

---

## Estructura de Carpetas

- **src/**
	- **App.jsx**: Configuración principal de rutas y layout.
	- **main.jsx**: Punto de entrada de React.
	- **App.css** / **index.css**: Estilos globales y personalizados.
	- **assets/**: Recursos estáticos (imágenes, íconos, etc).
	- **components/**
		- **ProjectCard.jsx**: Componente para mostrar cada proyecto individual, con botones de demo y GitHub.
	- **data/**
		- **projects.js**: Arreglo de objetos con la información de cada proyecto (título, descripción, tags, demoUrl, repoUrl, etc).
	- **hooks/**
		- **useProjectStatus.js**: Hook personalizado para verificar si la demo de un proyecto está online, offline o es interna.
	- **pages/**
		- **Home.jsx**: Página principal, muestra el portafolio, tech stack y lista de proyectos.
		- **ProjectLock.jsx**: Página para proyectos restringidos, muestra mensaje y contacto.

---

## Componentes y Hooks

### App.jsx
- Define las rutas principales usando React Router.
- Rutas:
	- `/` → Home.jsx
	- `/project/:id` → ProjectLock.jsx

### Home.jsx
- Muestra el encabezado, tech stack (con íconos) y la grilla de proyectos.
- Usa el componente ProjectCard para cada proyecto.

### ProjectCard.jsx
- Recibe un objeto `project` y muestra su información.
- Usa el hook `useProjectStatus` para mostrar el estado de la demo.
- Botones:
	- Demo (online, offline, interna)
	- GitHub (ícono y enlace)

### useProjectStatus.js
- Hook que verifica si la URL de demo está online (fetch HEAD), es interna (ruta local) o está offline.
- Devuelve el estado: 'loading', 'online', 'offline', 'internal'.

### ProjectLock.jsx
- Página para proyectos restringidos.
- Muestra mensaje y botón de contacto por email.

---

## Datos

### projects.js
- Exporta un arreglo de proyectos con las siguientes propiedades:
	- `id`, `title`, `description`, `tags`, `image`, `demoUrl`, `repoUrl`
- Ejemplo:
	```js
	{
		id: 1,
		title: "Análisis de Sentimiento en Reddit",
		description: "...",
		tags: ["Python", "NLP", "Pandas"],
		image: "...",
		demoUrl: "/project/1",
		repoUrl: "https://github.com/..."
	}
	```

---

## Estilos

- **App.css**: Define estilos modernos, responsivos y animaciones para tarjetas, botones, badges de estado, tech stack, etc.

---

## Dependencias principales

- React
- react-router-dom
- react-icons
- Vite

---

## Cómo ejecutar

1. Instala dependencias:
	 ```
	 npm install
	 ```
2. Inicia el servidor de desarrollo:
	 ```
	 npm run dev
	 ```
3. Abre en tu navegador: http://localhost:5173

---

¿Quieres documentación más detallada de algún archivo o componente específico?
