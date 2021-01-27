<?php
class Contador{
	
	
	function contar(){
		$arquivo = "contador.txt";

		$handle = fopen($arquivo, 'r+');

		$data = fread($handle, 512);

		$contador = $data + 1;



		fseek($handle, 0);

		fwrite($handle, $contador);

		fclose($handle);
		
	}

	function mostrar(){
		$arquivo = "contador.txt";

		$handle = fopen($arquivo, 'r+');

		$data = fread($handle, 512);

		print "Total de Visitas: ".$data;

		fseek($handle, 0);

		fclose($handle);
	}

}
?>