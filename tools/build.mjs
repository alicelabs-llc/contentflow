import {mkdirSync,rmSync,copyFileSync} from 'node:fs';
rmSync('dist',{recursive:true,force:true});
for(const file of ['index.html','assets/site.css','assets/site.mjs','assets/inquiry.mjs','downloads/calendario-ejemplo.csv']) {
 mkdirSync(`dist/${file.substring(0,file.lastIndexOf('/')+1)}`,{recursive:true});copyFileSync(file,`dist/${file}`);
}
console.log('Built public landing, inquiry and sample.');
