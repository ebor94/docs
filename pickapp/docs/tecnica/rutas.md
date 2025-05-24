---
id: rutas
title: Estructura de rutas
sidebar_label: Estructura de rutas
---

La aplicación utiliza Vue Router para gestionar la navegación. A continuación se describen las rutas principales:

- `/` → LoginView
- `/menu` → MenuView
- `/alistamiento` → ListaDespachos
- `/cargue` → CargueView
- `/entrega/:entrega/:action` → MaterialListaPickingView
- `/picking/scan/:entrega/:pos/:totalPos/:ot` → ScanView
- `/traslado` → TrasladosView
- `/traslado-lotes` → TrasladoLoteView
- `/consultar-ubicacion` → ConsultaUbicacionView
- `/consultar-material` → ConsultaMaterialView
- `/ot-pendiente` → OTPendienteView
- `/legalizacion` → LegalizacionView
- `/orden-transporte/:entrega/` → OrdenTransporteView
- `/indicator/` → Indicator
- `/info-etiqueta/` → ViewEtique
- `/ingreso-mcia` → IngresoMercancia
- `/ingreso-mcia-scan/:entrega/:pos/` → IngresoMercanciaScan
- `/traslado-almacenes/` → TrasladosAlmView
- `/:pathMatch(.*)*` → NotFoundView