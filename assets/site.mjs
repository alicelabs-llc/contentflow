import {prepareInquiry} from './inquiry.mjs';
const form=document.querySelector('#inquiry'),result=document.querySelector('#result'),draft=document.querySelector('#draft'),link=document.querySelector('#email-link'),status=document.querySelector('#status');
function clear(){result.hidden=true;link.removeAttribute('href');draft.textContent='';status.textContent='';}
form.addEventListener('input',clear);form.addEventListener('change',clear);
form.addEventListener('submit',event=>{event.preventDefault();clear();try{const inquiry=prepareInquiry(Object.fromEntries(new FormData(form)));draft.textContent=inquiry.body;link.href=inquiry.href;result.hidden=false;result.focus();status.textContent='Borrador preparado. Todavía no se ha enviado.';}catch(error){status.textContent=error.message;}});
document.querySelector('#copy').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(draft.textContent);status.textContent='Consulta copiada. Puedes pegarla en tu correo.';}catch{status.textContent='No se pudo copiar automáticamente. Selecciona y copia el texto de la consulta.';}});
form.querySelector('fieldset').disabled=false;
