# TodoApiQA

Este proyecto está enfocado en la **calidad de software (QA)** para una API de gestión de tareas (Todo API). Aquí se documentan los procesos, herramientas y buenas prácticas implementadas para asegurar la calidad del producto.

## Objetivo

Garantizar que la API cumpla con los requisitos funcionales y no funcionales, detectando errores y asegurando su correcto funcionamiento antes de su despliegue.

## Estructura del Proyecto

- `/tests`: Contiene los casos de prueba automatizados.
- `/docs`: Documentación de endpoints, criterios de aceptación y reportes de pruebas.
- `/reports`: Resultados de ejecuciones de pruebas.

## Herramientas Utilizadas

- **Postman**: Para pruebas manuales y automatizadas de endpoints.
- **Jest / Mocha**: Frameworks de testing para pruebas unitarias y de integración.
- **Supertest**: Para pruebas de endpoints HTTP.
- **Newman**: Ejecución de colecciones de Postman en CI/CD.
- **Swagger**: Documentación y validación de la API.

## Tipos de Pruebas Realizadas

- **Pruebas unitarias**: Validan funciones individuales.
- **Pruebas de integración**: Verifican la interacción entre módulos.
- **Pruebas end-to-end**: Simulan el flujo completo de usuario.
- **Pruebas de regresión**: Aseguran que nuevas funcionalidades no rompan las existentes.
- **Pruebas de carga**: Evalúan el rendimiento bajo diferentes volúmenes de uso.

## Flujo de QA

1. **Diseño de casos de prueba** según los requisitos.
2. **Automatización** de pruebas críticas.
3. **Ejecución** en entornos de desarrollo y pre-producción.
4. **Reporte y seguimiento** de bugs encontrados.
5. **Validación** tras correcciones.

## Integración Continua

Las pruebas se ejecutan automáticamente en cada push mediante pipelines de CI/CD, asegurando feedback rápido y constante sobre la calidad del código.

## Contribuciones

Para contribuir, seguir las guías de estilo y agregar pruebas para nuevas funcionalidades.

---

**Contacto:**  
Para dudas o sugerencias, contactar al equipo de QA.
