export const services=['Calendario y borradores','Ordenar mi proceso editorial','Evaluar una integración'];
export const channels=['Instagram','LinkedIn','Facebook','Por definir'];
export function prepareInquiry(values){
 const clean=(key,max,min=1)=>{const value=String(values[key]??'').replace(/\r\n/g,'\n').trim();if(value.length<min||value.length>max||(key==='goal'?/[\x00-\x09\x0b-\x1f\x7f]/:/[\x00-\x1f\x7f]/).test(value))throw Error('Revisa los campos: completa los datos y respeta los límites de longitud.');return value;};
 const name=clean('name',80),business=clean('business',100),service=clean('service',80),channel=clean('channel',40),goal=clean('goal',1000,10);
 if(!services.includes(service)||!channels.includes(channel))throw Error('Selecciona un servicio y un canal de la lista.');
 const body=`Hola, quisiera consultar por un piloto de ContentFlow.\n\nNombre: ${name}\nMarca: ${business}\nServicio: ${service}\nCanal: ${channel}\nObjetivo: ${goal}\n\nPor favor, indíquenme alcance, precio, plazo y revisiones antes de contratar.`;
 return {body,href:`mailto:contacto@alicelabs.site?subject=${encodeURIComponent('Consulta de piloto ContentFlow')}&body=${encodeURIComponent(body)}`};
}
