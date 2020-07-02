El proyecto esta dividido en backend y frontend

Al iniciar el backend y si la base de datos se encuentra vacia, 
descarga los datos de los feriados, desde el 2015 al 2024

la url de coneccion a mongo, el puerto y host, puede estar en una variable de entorno, o en el archivo .env
de no encontrarse, tiene configuracion por defecto.

En el frontend use Material-ui para agilizar el diseño, se puede mejorar mucho mas, pero es lo que mas tiempo me demanda ( el diseño )

Para deployar rapidamente la aplicacion completa, deje configurado docker-compose.
Teniendo instalada la herramienta, la ejecucion seria.

- docker-compose up

esto ultimo levanta un mongo, el back y el front, para que puedan comunicarse entre ellos
se espone en le puerto 80 el frontend y en el 5000 el back.

cada servicio puede levantarse con docker. o para se desarrollo simple con npm start
