---
sidebar_position: 1
---

# CargueView

## Descripción
Vista para gestionar el proceso de cargue de mercancía en el sistema.

## Funcionalidades Principales
- Registro de nuevos cargues
- Validación de documentos
- Asignación de ubicaciones
- Control de cantidades

## Componentes Utilizados
- `ScanEtiqu`: Para escaneo de etiquetas
- `LoaderComponent`: Indicador de carga
- `PopupForm`: Formularios emergentes

## Estados
- Pendiente de cargue
- En proceso de cargue
- Cargue completado
- Error en cargue

## Flujo de Trabajo
1. Escaneo de documentos
2. Validación de mercancía
3. Asignación de ubicación
4. Confirmación de cargue

## Integración con Store
- Actualización de inventario
- Registro de movimientos
- Gestión de ubicaciones

## Uso de Servicios
- Servicio de productos
- Servicio de ubicaciones
- Servicio de validación

## Eventos y Acciones
- Inicio de cargue
- Validación de documentos
- Confirmación de ubicación
- Finalización de cargue