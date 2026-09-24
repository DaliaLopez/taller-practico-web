## Declaración sobre el uso de IA
No generative AI was used during this workshop.

## Preguntas de cierre

1. ¿Por qué OrderPriorityService no necesita un repository?
   Porque solo se encarga de revisar el estado y la cantidad, por lo que no necesita buscar ni guardar nada en la base de datos.

2. ¿Qué responsabilidad tiene OrdersService al consultar la prioridad?
   Hace de intermediario porque va a la base de datos a buscar el pedido con findOne, se lo entrega a OrderPriorityService para que calcule la prioridad y luego une los datos para responder la petición.

3. ¿Cuál es la diferencia entre totalPending y showing?
   totalPending es cuantos pedidos pendientes hay en total en la base de datos, mientras que showing es cuantos se están mostrando en la respuesta actual.

4. ¿Por qué las pruebas de prioridad pueden ejecutarse sin PostgreSQL?
   Porque la función de prioridad solo analiza un objeto con datos en memoria, como lo son quantity y status. Al no conectarse a la base de datos, la prueba corre creando el servicio con new OrderPriorityService.

5. ¿Qué problema de diseño aparecería si la prioridad se calculara en el controller?
   El controller se llenaría de lógica de negocio cuando su unica función debe ser recibir la petición HTTP y entregar la respuesta. Además, si quisieramos usar esa lógica de prioridad en otra parte de la aplicación sí o sí tendríamos que duplicar código.