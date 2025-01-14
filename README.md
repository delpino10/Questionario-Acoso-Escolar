# Questionario-Acoso-Escolar
# Test Interactivo para Verificar Acoso Escolar

Este repositorio contiene un formulario interactivo para ayudar a identificar posibles casos de acoso escolar entre los estudiantes. El formulario presenta una serie de preguntas que evalúan diferentes aspectos del acoso escolar, incluyendo la frecuencia, el tipo de acoso y el impacto que puede estar teniendo en la vida del estudiante.

## Descripción

Este test interactivo está diseñado para evaluar el nivel de acoso escolar experimentado por un alumno. Las respuestas del alumno generan un resultado que puede indicar si el acoso es grave, medio o leve. Los resultados se muestran en forma de un mensaje acompañado de un ícono visual (rojo, naranja o verde).

## Tecnologías utilizadas

- **HTML5**: Estructura y presentación del formulario.
- **CSS3**: Estilos y diseño visual.
- **JavaScript**: Lógica de validación y cálculo de resultados.

## Características

- **Interactividad y estilo**: El formulario se adapta a las respuestas del usuario, mostrando los resultados al final del cuestionario.
- **Respuestas personalizadas**: Dependiendo de las respuestas del usuario, el formulario genera una recomendación sobre el riesgo de acoso escolar.
- **Interfaz clara**: Los íconos de colores (rojo, naranja, verde) se utilizan para mostrar el nivel de riesgo de manera clara.

## Estructura del Proyecto

- `index.html`: Contiene el formulario con las preguntas.
- `estilosQuestionario.css`: Estilos para el diseño del formulario y las interacciones.
- `scriptQuestionario.js`: Lógica que maneja la recopilación de respuestas, el conteo de los valores y la visualización de los resultados.

## Funcionalidad

1. **Respuestas a preguntas**:
   - Se utilizan preguntas de opción múltiple para obtener las respuestas de los usuarios.
   - Las respuestas se recopilan de los campos `radio` y `checkbox` para preguntas específicas.

2. **Lógica de evaluación**:
   - **Contadores**: Se emplean contadores para clasificar las respuestas en tres niveles: **leve**, **medio** y **grave**.
   - **Cálculo de los resultados**: Las respuestas se agrupan y se asignan a un contador específico. Dependiendo de las respuestas, el formulario muestra un mensaje con un ícono visual (emoji) correspondiente.

3. **Visualización de resultados**:
   - El resultado final puede ser:
     - **Grave**: Se muestra un ícono rojo y un mensaje indicando que el alumno está siendo víctima de acoso.
     - **Medio**: Se muestra un ícono naranja y un mensaje advirtiendo sobre un posible riesgo de acoso.
     - **Leve**: Se muestra un ícono verde y un mensaje indicando que no hay indicios significativos de acoso.

## Instrucciones de uso

1. **Descargar el repositorio**:
   Clona el repositorio o descarga los archivos.
   ```bash
   git clone https://github.com/usuario/repositorio.git
## Autor
`Jose Antonio del Pino Muñoz`
