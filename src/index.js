/*
Sitio Oficial https://www.npmjs.com/
npm node package manager
node -v
npm -v
npm install -g npm@latest Revisa si hay actualización

Comandos
 11.Gestión de Dependencias y Paquetes con NPM\npm\assets

npm init 
 y seguir los pasos

cuando el npm va con la opcion ó el flag  --save el save quiere decir qeu es una dependencia qeu enecsita el proyecto que no puede correr sin esta dependencia

cuando el npm va con la opcion ó el flag  --save-dev es solo en entorno desarrollo

    npm install moment 
     ó  npm install moment -S queda como parte del proyecto

    depedencia de desarrollo  
     npm install date-fns --save-dev < ó > npm install date-fns -D

Paquete de forma global
    bandera -g    se debe instalar con permisos
    npm install -g nodemon               paquete nodemon

    Para revisar que dpendecias estan instaladas de forma global seria con el siguiemnte comando
    npm list -g --depth 0             el depth 0 dice la profundidad de busqueda

Paquete de forma opcional
    npm install eslint -O              O mayuscula de opcional

npm fund 
    Dice que requiere como sub

Bandera Flag --dry-run 
    npm install react --dry-run    nos indica que si instalaria que version cuantos paquetes, pero no se instala es como una simulación

Bandera Flag --force ó -f
    npm install webpack -f    forza la instalación de la dependencia

    Se puede hacer el cambio de las dependecias de forma manual en el packga.json de dev a normal o biceversa, pero si se hace es 
    recomendable volver hacer el npm i ó npm install

Instalar depedencia especifica version 
    npm install json-server@0.0.0          despues del @ le colocamos la versión que queremos instalar en el proyecto

Actualizar y eliminar paquetes
   Actualizar
    Podemos revisar qeu depedencias hay con el comando 
    npm list        me arroja el listado de las dependecias, como un arbol

    npm outdate             me muestra que paquetes requieren actualización o estan en versiones obsoletas
    npm outdate --dd

    npm update actualiza las versiones mas recientes de las depencias que la requieran que estan obsoletas

    npm install json-server@latest instala la ultima versión de la depedencia
   Eliminar
    Eliminar un paquete de node_modules y del archivo package.json
     npm uninstall json-server
    Desinstalar un paquete de todo node_modules pero no del archivo package.json
     npm uninstall webpack --no-save

Package lock y el uso los símbolos ^ y ~
    ^ Acento circunflejo
    ~ Virgulilla
    ^ = Si mantenemos el caret dentro de la configuración de nuestro package estamos garantizando que cuando realicemos una actualización o tengamos un cambio que podamos realizar, vamos a hacer actualización de los cambios menores y de los parches o bug fixes.
    Para quedarnos en una sola versión eliminamos el caret.

    ~ = Establece que vamos a recibir actualizaciones o cambios solamente de los cambios que son parches o bug fixes.

     Además de esos símbolos, también tenemos:
    < : Versión menor a la indicada.
    <= : Versión menor o igual a la indicada.
    > : Versión mayor a la indicada.
    >= : Versión mayor o igual a la indicada.
    Los cuales se utilizan así:

Ejecutar tareas - Script 
    Son comandos que se pueden consultar desde la consola 
    Se hacen en el C:\Users\carpr\OneDrive\Documentos\Ejercicios\Platzi\11.Gestión de Dependencias y Paquetes con NPM\npm\package.json
     parte "scripts": {
           }
           Ejm: "deploy": "npm run format && npm run build",   creo uno llamado deploy con dos acciones a ejecutar

Solución de problemas
   rm -rf
   
   En caso de que nuestros archivos de node_module no estén bien instalados o tengamos una versión anterior lo que podemos hacer es lo siguiente:
   npm cache clear --force
   #Para verificar que verdaderamente se borro podemos usar
   npm cache verify
   Uno de los errores que podemos tener es tener algún valor corrupto en node_module, o tambien que la instalación no este completa de los paquetes que hemos instalado, para ello podemos eliminar el paquete con el siguiente comando:
   rm -rf node_modules  #este comando eliminar la carpeta 
   Otra alternativa para eliminar de forma segura una carpeta es instalando el siguiente paquete:
   sudo npm install -g rimraf
   Ahora podemos ejecutar el siguiente comando para eliminar node_module
   rimraf node_modules 
   #Ahora podemos volver a instalar nuestro paquetes
   npm install
   npm run build --dd para ver el output en la terminal

Seguridad
    Podemos revisar las vulnerabilidades de nuestro proyecto con:
    npm audit
    En caso de tener vulverabilidades, se recomienda usar el comando:
    npm audit fix
    Y en caso de que esto no lo solucione, podemos ir actualizandolos de uno en uno.
    npm audit --json  genear un archivo json con la informacion 
    npm update eslint-util --depth 2  // El nivel de detalle que necesita la actualización hasta las dependencias
    npm audit fix es para solucionar las vulnerabilidades que tengamos en nuestro proyecto básicamente, actualiza a la ultima version nuestros paquetes con las dependencias que requieren, después de esto volvemos a correr npm audit para ver que ya no tenemos vulnerabilidades.
    también hay una herramienta que garantiza que estemos siempre actualizados con nuestras dependencias del proyecto y es snyk.io


Crear un paquete para NPM
    pwd
    mkdir random-messages
    cd random-messages/
    git init
    npm init

    // Se declara el arreglo
    const messages = [
        "David",
        "Diana",
        "Ana Maria",
        "Isabela",
        "Antonio",
    "Norma"
    ]

    //Crear función para enviar aleatoriamente  los nombres del arreglo
    const randomMsg = () => {
    const message = messages[Math.floor(Math.random()*messages.length)]
    console.log(message)
    }

    // Exportar como un módulo

    module.exports = { randomMsg }

    Se debe crear una carpeta bin donde se crea ele archivo global.js (Configuración que se necesita)

    #!/usr/bin/env node
    // se va ejecutar dentro de bash

    //Variable que llama la funcion que exportamos
    let random = require('../src/index.js')

    //Ejecuto la funcion
    random.randomMsg()

Publicar un paquete en NPM
    npm link 
    Despues ejecutamos el nombre que colocamos en el globaj en este caso fue random-msg y nos retornara un nombre aleatorio
    Despues lo que hacemos es crear una cuenta en npm, con eso ya podemos subir nuestro paquete a npm 
    Despues de crear la cuenta en npm, lo qeu hacemos es loguearnos en la terminal con el comando 
     npm adduser
    Con el comando npm publish, si todo esta bien lo publica en la cuenta de npm listo para ser usado por la comunidad

Paquetes privados
    Se debe colocar un buen readme y un repositorio
    Readme
     https://gist.github.com/gndx/1b2c8482049c6d3b521dffcf33337558
     ó
     
    # random-messages

    Whenever I start a new project, I don't know what to write for the first commit. After doing a “git init” there is technically nothing there...

    ## Install

    ```npm
    npm install -g random-msg
    ```

    # Usage

    ```bash
    random-msg
    ```

    # Contributing
    If someone wants to add or improve something, I invite you to collaborate directly in this repository: [random-msg](https://github.com/platzi/npm-random-msg)

    # License
    random-msg is released under the [MIT License](https://opensource.org/licenses/MIT).


    A lo ultimo es bueno hacer un npm init para revisar que todo este bien
*/