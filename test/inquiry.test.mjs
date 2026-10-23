import {test} from 'node:test';import assert from 'node:assert/strict';import {prepareInquiry} from '../assets/inquiry.mjs';
const valid={name:'Ana',business:'Café & Té',service:'Calendario y borradores',channel:'Instagram',goal:'Presentar nuestros productos de temporada.'};
test('encoded email draft preserves the brief',()=>{const r=prepareInquiry(valid);const url=new URL(r.href);assert.equal(url.protocol,'mailto:');assert.equal(url.pathname,'contacto@alicelabs.site');assert.equal(url.searchParams.get('body'),r.body);assert.match(r.body,/Café & Té/);});
test('rejects missing fields, injected headers, unsupported selection and limits',()=>{for(const update of [{name:' '},{name:'Ana\nbcc:bad@example.com'},{business:'x'.repeat(101)},{service:'fake'},{channel:'fake'},{goal:'short'},{goal:'x'.repeat(1001)}])assert.throws(()=>prepareInquiry({...valid,...update}));});

test('multiline goals are preserved in the encoded body',()=>{const r=prepareInquiry({...valid,goal:'Presentar productos.\nRecibir consultas.'});assert.match(r.body,/productos\.\nRecibir/);});
