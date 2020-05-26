# Base para trabajar con SASS, ES6 y mucho más. 
[Laravel Mix](https://github.com/JeffreyWay/laravel-mix) nos permite trabajar con estás tecnologías y muchas más de manera simple y prácticamente sin configuración.

### Requisitos
Para trabajar con laravel mix, es necesario tener instalado [Node.js y NPM](https://nodejs.org/en/)
Puedes verificar si tienes instalado npm ejecutando este comando: 
```bash
npm -v
```
Lo que debiese retorar algo como `6.14.0`

## Instalación
Bajar el repositorio e instalar laravel mix usando npm 
```bash
git clone https://github.com/endani/laravel-mix-boilerplate mi-proyecto
cd mi-proyecto
npm install
```
Eso es todo. De ahora en adelante, ya puedes compilar tus assets. 
Recuerda que `npm install` puede tardar bastante en terminar. Es normal, no te preocupes.

Luego, solo debes ejecutar este comando para compilar
```bash
npm run dev
```

### Watch (compilar automáticamente al guardar)
Para que laravel mix compile automáticamente cuando realizas un cambio en el SASS, puedes correr este comando: 
```bash
npm run watch
```

#### Estructura

En el archivo `webpack.mix.js` está la configuración que le indica a Laravel mix que compilar y en donde. 



