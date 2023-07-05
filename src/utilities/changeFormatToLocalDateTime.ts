export default function changeFormatToLocalDateTime(fechaHora: string) {

	const fechaHoraObjeto = new Date(fechaHora);


	const dia = fechaHoraObjeto.getUTCDate();
	const mes = fechaHoraObjeto.getUTCMonth() + 1;
	const anio = fechaHoraObjeto.getUTCFullYear();
	const hora = fechaHoraObjeto.getUTCHours();
	const minutos = fechaHoraObjeto.getUTCMinutes();

	const fechaHoraFormateada = agregarCeroIzquierda(dia) + '-' + agregarCeroIzquierda(mes) + '-' + anio + ':' + agregarCeroIzquierda(hora) + ':' + agregarCeroIzquierda(minutos);

	return fechaHoraFormateada;
}

function agregarCeroIzquierda(numero: number) {
	if (numero < 10) {
		return '0' + numero;
	}
	return numero;
}

