# GIT
/ raiz(HDD,SDD)~
cd
~ home; alt + = ~
ls= Listar los archivos de la raiz
espacio = es agregar un argumento
al= crea una lista de los archivos ocultos
a= grupo de archivos pero no en lista
clear= limpia la consola
.. = regresar a la carpeta anterior.
atajos= comando CD + letra inicial + TAB 
makedirectory (mkdir)=crear una carpeta
Touch= permite crear archivos vacios
remove =(rm) espacio +nombre del archivo
git init= crear un repositorio para los proyectos
untracked: sin seguimiento
- se agrega una palabra
Estados:
Git status= comando para preguntar el estado de los repositorio
Git add = adiciona el archivo con seguimiento del archivo
commited


1. git config --global user.name "usuario GIthub"
2. git config --global user.email "agrego email"
3. git config --list =muestra las moficaciones agregadas

git commit -m "se agregan un comentario de lo que se le realizo.

 creacion archivo historia
c1 = modified historia.txt
c2 = add Resumen.md
c3 = modified Resumen.md
c4 = 
show = sirve muestra la modificaciones a un archivo especifico la comparacion entre los 2 ultimos commit 
TERMINAL DE GIT "llamado VIM"
ESC+SHIF+Z+Z = Sirve para salir de la terminal y sirve como elemento para guardar

git log =muestra el historial de resumen de los commit

git diff +N° de commit __n° de otro commit que se desea comparar
git log  > 
git reset (Sha n°commit) --hard = regresa a 

## Que es Branch(rama) y como funciona un merge en GIT
¿ # cual es la Diferencia entre el  reset hard y el reset soft?

git commit -am" guardar los cambios  de los archivos que esten en staying"

git checkout =cambia la rama de trabajo
# git checkout +nombre de la rama(master-cabecera)
git merge = fuciona los contenidos con otra 

# clave key =$ eval $(ssh-agent -s)
Agent pid 2623
## authentification key -Signing key

En GitHub y en el contexto de la criptografía en general, las "authentication key" (claves de autenticación) y "signing key" (claves de firma) tienen roles específicos y distintos. Aquí te detallo las diferencias:

Claves de Autenticación (Authentication Key)
Propósito: Se utilizan para verificar la identidad del usuario o del sistema que está intentando acceder a un recurso.
Uso Principal en GitHub:
SSH Keys: GitHub permite el uso de claves SSH para autenticar a los usuarios cuando se conectan a los repositorios. Estas claves aseguran que solo los usuarios autorizados puedan clonar, extraer o empujar (pull/push) cambios a los repositorios.
Tokens Personales de Acceso (PAT): Estos son generados para autenticar scripts y aplicaciones en lugar de una contraseña tradicional. Permiten acceder a la API de GitHub de manera segura.
Funcionamiento: Durante el proceso de autenticación, el servidor verifica que la clave pública del usuario coincida con una clave privada que el usuario posee.
Claves de Firma (Signing Key)
Propósito: Se utilizan para asegurar la integridad y autenticidad del contenido, como los commits o las etiquetas en un repositorio.
Uso Principal en GitHub:
Firmar Commits: Los desarrolladores pueden firmar sus commits con una clave GPG o S/MIME. Esto asegura que el commit fue hecho por el propietario de la clave y que el contenido no ha sido alterado.
Firmar Tags: Similar a los commits, las etiquetas también pueden ser firmadas para garantizar que provienen de una fuente verificada.
Funcionamiento: La clave privada se utiliza para firmar el contenido, y cualquiera con la clave pública correspondiente puede verificar la firma para asegurarse de que proviene del propietario de la clave privada y que el contenido no ha sido modificado.
# configuracion del git con la rama "main"
git config --global init.defaultbranch "main" = cambiar nombre de rama "master" por la rama "Main"

# cambiar o dar solucion "a cambio de las ramas"?
git branch -m master  o main

# git push para enviar al repositorio remoto
git push --all origin

#  funciones estan compuestas de metodos y propiedades
paradigma que todo es relacionado a un objeto
function [nombre](parametros){cuerpo de la funcion}

# composicion de los objetos
const [nombre]{
   [propiedades] 
   [metodos] 
}
# crear arrays
 los arrays estan marcados por indices poscion de los argumentos o parametros
 const [nombre]= array (entradas,) [1],[2],[3] <- indices