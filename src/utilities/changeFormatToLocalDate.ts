
export default function changeFormatToLocalDate(fecha: string) {
	const partes = fecha.split('-');
	const fechaFormateada = partes[2] + '-' + partes[1] + '-' + partes[0];
	return fechaFormateada;
}

