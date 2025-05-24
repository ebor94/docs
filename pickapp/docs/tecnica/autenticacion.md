---
id: autenticacion
title: Protección de rutas y autenticación
sidebar_label: Autenticación
---

La aplicación protege las rutas privadas usando un guard (`beforeEach`) que verifica si el usuario está autenticado. Si no lo está, se redirige al login.