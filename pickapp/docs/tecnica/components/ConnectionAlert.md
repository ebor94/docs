---
sidebar_position: 3
---

# ConnectionAlert

## Descripción
Componente que muestra alertas relacionadas con el estado de la conexión. Útil para notificar a los usuarios sobre problemas de conectividad.

## Funcionalidades
- Monitoreo del estado de conexión
- Visualización de alertas de desconexión
- Intentos automáticos de reconexión

## Estados
- Conectado
- Desconectado
- Intentando reconectar
- Error de conexión

## Eventos
- `connection-change`: Emitido cuando cambia el estado de la conexión
- `retry-connection`: Emitido cuando se intenta reconectar manualmente

## Uso
```vue
<ConnectionAlert
  @connection-change="handleConnectionChange"
  @retry-connection="handleRetryConnection"
/>
```

## Personalización
El componente puede ser personalizado mediante:
- Clases CSS para estilos
- Mensajes personalizados
- Intervalos de reconexión