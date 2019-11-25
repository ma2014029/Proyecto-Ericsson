$archivo="datos.txt";
 
 $file=fopen($archivo,"w");
 fwrite($file,$nombre,$apellido,$carrera,$materia);