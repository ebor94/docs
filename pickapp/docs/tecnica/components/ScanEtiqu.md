---
sidebar_position: 8
---

# ScanEtiqu

## Descripción
Componente para el manejo de escaneo de etiquetas. Proporciona una interfaz para la lectura y procesamiento de códigos de barras o QR.

## Props
- `mode`: String - Modo de escaneo ('barcode', 'qr')
- `autoStart`: Boolean - Iniciar escaneo automáticamente
- `timeout`: Number - Tiempo límite para el escaneo
- `format`: String - Formato esperado de la etiqueta

## Funcionalidades
- Lectura de códigos de barras
- Lectura de códigos QR
- Validación de formato
- Procesamiento de datos escaneados

## Eventos
- `scan-success`: Emitido cuando se escanea correctamente
- `scan-error`: Emitido cuando hay un error en el escaneo
- `timeout`: Emitido cuando se alcanza el tiempo límite

## Métodos
- `startScan()`: Inicia el proceso de escaneo
- `stopScan()`: Detiene el proceso de escaneo
- `reset()`: Reinicia el escáner

## Uso
```vue
<ScanEtiqu
  mode="barcode"
  :auto-start="true"
  :timeout="30000"
  @scan-success="handleScanSuccess"
  @scan-error="handleScanError"
/>
```

## Configuración de Hardware
El componente es compatible con:
- Escáneres USB
- Cámaras web
- Dispositivos móviles