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



*/