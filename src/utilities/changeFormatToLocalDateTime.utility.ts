export default function changeFormatToLocalDateTime(fechaHora: string) {

	const fechaHoraObjeto = new Date(fechaHora);


	const dia = fechaHoraObjeto.getDate();
	const mes = fechaHoraObjeto.getMonth() + 1;
	const anio = fechaHoraObjeto.getFullYear();
	const hora = fechaHoraObjeto.getHours();
	const minutos = fechaHoraObjeto.getMinutes();

	const fechaHoraFormateada = agregarCeroIzquierda(dia) + '-' + agregarCeroIzquierda(mes) + '-' + anio + ':' + agregarCeroIzquierda(hora) + ':' + agregarCeroIzquierda(minutos);

	return fechaHoraFormateada;
}

function agregarCeroIzquierda(numero: number) {
	if (numero < 10) {
		return '0' + numero;
	}
	return numero;
}

