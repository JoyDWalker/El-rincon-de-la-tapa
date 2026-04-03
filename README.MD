# El Rincón de la Tapa

Public repository for the final project of **JavaScript Advanced** for **MasterD**.

## Repository

GitHub repository:  
[https://github.com/JoyDWalker/El-rincon-de-la-tapa](https://github.com/JoyDWalker/El-rincon-de-la-tapa)

## Project Overview

**El Rincón de la Tapa** is a multi-page website for a Spanish tapas business.  
The project was developed as the final assignment for the JavaScript Advanced module at MasterD.

The website includes:
- A home page with several content sections and a news area loaded from an external JSON file.
- A dynamic gallery page built with JavaScript.
- A budget page with form validation and automatic price calculation.
- A contact page with a dynamic map and route calculation to the business location.

## Main Features

### Home page
- Main landing page: `index.html`
- Includes multiple content sections
- Loads news dynamically from `noticias.json`

### Gallery page
- File: `galeria.html`
- Dynamic gallery generated with JavaScript
- Category filters
- Modal window to display image details

### Budget page
- File: `presupuesto.html`
- Contact form validation with JavaScript
- Validation for:
  - Name
  - Surname
  - Phone number
  - Email
- Budget calculation based on:
  - Selected product/service
  - Number of days in advance
  - Extra options
- Live update of subtotal, discount, and final total
- Privacy conditions checkbox required before submission

### Contact page
- File: `contacto.html`
- Dynamic map using Leaflet
- Business location marker
- Route calculation from the user's location to the business
- Contact and business information included on the page

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- JSON
- Font Awesome
- Leaflet
- Leaflet Routing Machine

## Project Structure

```bash
El-rincon-de-la-tapa/
│
├── index.html
├── noticias.json
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── noticias.js
│   ├── galeria.js
│   ├── presupuesto.js
│   └── contacto.js
├── images/
│   └── logo.png
└── views/
    ├── galeria.html
    ├── presupuesto.html
    └── contacto.html
```

## JavaScript Functionality

The JavaScript in this project is used to provide dynamic and interactive behavior across the site:

- `main.js` highlights the current page in the navigation menu
- `noticias.js` loads external news from a JSON file
- `galeria.js` creates the interactive gallery, filters, and modal
- `presupuesto.js` validates the form and calculates the budget automatically
- `contacto.js` initializes the map and calculates the route to the business

## Design and Style

The website uses a custom visual style with:
- Fixed top navigation bar
- Active menu highlighting
- Responsive layout
- Cards for content sections
- Styled footer with social media icons and business information

## Purpose of the Project

This repository was created as a **public final project** for the **JavaScript Advanced** course at **MasterD**.  
Its goal is to demonstrate the use of DOM manipulation, event handling, form validation, dynamic content loading, JSON consumption, and external JavaScript libraries in a complete front-end website.

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/JoyDWalker/El-rincon-de-la-tapa.git
   ```

2. Open the project folder in Visual Studio Code or your preferred editor.

3. Run the project with a local server, for example using:
   - VS Code Live Server extension

4. Open `index.html` in the browser through the local server.

> Important: Running the project with a local server is recommended so the JSON file and map features work correctly.

## Author

Created by **Joy Walker**  
Final project for **JavaScript Advanced - MasterD**

--------------------------------------------------
               SPANISH VERSION
--------------------------------------------------
# El Rincón de la Tapa

Repositorio público del **proyecto final** de **JavaScript Advanced** para **MasterD**.

## Repositorio

GitHub:  
[https://github.com/JoyDWalker/El-rincon-de-la-tapa](https://github.com/JoyDWalker/El-rincon-de-la-tapa)

## Descripción del proyecto

**El Rincón de la Tapa** es un sitio web multipágina inspirado en un bar de tapas español.  
Este proyecto ha sido desarrollado como trabajo final del módulo de JavaScript Advanced de MasterD.

El sitio web incluye:
- Una página de inicio con varias secciones y una zona de noticias cargadas desde un archivo JSON externo.
- Una página de galería dinámica desarrollada con JavaScript.
- Una página de presupuesto con validación de formulario y cálculo automático del importe.
- Una página de contacto con mapa dinámico y cálculo de ruta hasta la ubicación del negocio.

## Funcionalidades principales

### Página de inicio
- Archivo principal: `index.html`
- Contiene varias secciones de presentación
- Carga noticias dinámicamente desde `noticias.json`

### Página de galería
- Archivo: `galeria.html`
- Galería dinámica generada con JavaScript
- Filtros por categorías
- Ventana modal para visualizar cada elemento con más detalle

### Página de presupuesto
- Archivo: `presupuesto.html`
- Validación de formulario mediante JavaScript
- Validación de:
  - Nombre
  - Apellidos
  - Teléfono
  - Correo electrónico
- Cálculo automático del presupuesto según:
  - Producto o servicio seleccionado
  - Días de antelación
  - Extras elegidos
- Actualización en tiempo real de subtotal, descuento y total final
- Casilla obligatoria de aceptación de condiciones antes del envío

### Página de contacto
- Archivo: `contacto.html`
- Mapa dinámico implementado con Leaflet
- Marcador de la ubicación del negocio
- Cálculo de ruta desde la ubicación del usuario hasta el local
- Información de contacto y localización de la empresa

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- JSON
- Font Awesome
- Leaflet
- Leaflet Routing Machine

## Estructura del proyecto

```bash
El-rincon-de-la-tapa/
│
├── index.html
├── noticias.json
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── noticias.js
│   ├── galeria.js
│   ├── presupuesto.js
│   └── contacto.js
├── images/
│   └── logo.png
└── views/
    ├── galeria.html
    ├── presupuesto.html
    └── contacto.html
```

## Funcionalidad de JavaScript

Los archivos JavaScript del proyecto se encargan de aportar el comportamiento dinámico e interactivo del sitio:

- `main.js`: resalta la página activa en el menú de navegación
- `noticias.js`: carga las noticias desde un archivo JSON externo
- `galeria.js`: genera la galería dinámica, aplica filtros y controla la ventana modal
- `presupuesto.js`: valida el formulario y calcula el presupuesto automáticamente
- `contacto.js`: inicializa el mapa y calcula la ruta hasta el negocio

## Diseño y estilos

El sitio cuenta con un diseño visual personalizado que incluye:
- Barra de navegación fija en la parte superior
- Resaltado de la página activa en el menú
- Diseño responsive
- Tarjetas para organizar el contenido
- Footer con redes sociales e información del negocio

## Objetivo del proyecto

Este repositorio se publica como **repositorio público** del **proyecto final de JavaScript Advanced para MasterD**.  
Su objetivo es demostrar el uso de manipulación del DOM, eventos, validación de formularios, carga dinámica de contenido, consumo de JSON y uso de librerías externas de JavaScript dentro de un proyecto web completo.

## Cómo ejecutar el proyecto

1. Clona el repositorio:
   ```bash
   git clone https://github.com/JoyDWalker/El-rincon-de-la-tapa.git
   ```

2. Abre la carpeta del proyecto en Visual Studio Code o en tu editor preferido.

3. Ejecuta el proyecto con un servidor local, por ejemplo:
   - Live Server en Visual Studio Code

4. Abre `index.html` desde el servidor local en tu navegador.

> Importante: se recomienda ejecutar el proyecto en un servidor local para que la carga del JSON y algunas funcionalidades del mapa funcionen correctamente.

## Autor

Creado por **Joy Walker**  
Proyecto final de **JavaScript Advanced - MasterD**