---
sidebar_position: 1
---

# Documentación del Sistema WM

## Introducción

Esta documentación proporciona una visión detallada de la arquitectura y componentes del sistema WM, una aplicación web desarrollada con Vue.js.

## Estructura del Proyecto

El proyecto está organizado en las siguientes secciones principales:

1. **Archivo Principal**: Punto de entrada y configuración de la aplicación
2. **Componente App**: Componente raíz y layout principal
3. **Componentes**: Elementos reutilizables de la interfaz
4. **Servicios**: Lógica de negocio y comunicación con el backend
5. **Vistas**: Páginas y rutas principales
6. **Store**: Gestión del estado global con Pinia

## Tecnologías Principales

- **Vue.js 3**: Framework principal
- **Pinia**: Gestión de estado
- **Vue Router**: Enrutamiento
- **Tailwind CSS**: Estilos y diseño
- **Vite**: Build tool y desarrollo

## Guías de Desarrollo

### Convenciones de Código
- Uso de Composition API con `<script setup>`
- Componentes reutilizables en la carpeta `components`
- Servicios para lógica de negocio
- Stores para estado global

### Estructura de Archivos
- `src/`: Código fuente
  - `components/`: Componentes reutilizables
  - `views/`: Páginas principales
  - `services/`: Servicios y API
  - `store/`: Estado global
  - `router/`: Configuración de rutas
  - `assets/`: Recursos estáticos

## Funcionalidades Principales

1. **Gestión de Mercancía**
   - Ingreso
   - Consulta
   - Traslados
   - Picking

2. **Despachos y Transporte**
   - Órdenes de transporte
   - Seguimiento
   - Legalización

3. **Sistema y Autenticación**
   - Login
   - Gestión de usuarios
   - Permisos