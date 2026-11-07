import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = fileURLToPath(new URL('./dist/', import.meta.url));
const port = Number(process.env.PORT || 4173);
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.jpg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml'};
http.createServer((request,response)=>{
  try {
    const url=new URL(request.url,'http://localhost');
    let file=path.resolve(root,'.'+decodeURIComponent(url.pathname));
    if(file!==path.resolve(root)&&!file.startsWith(root)){response.writeHead(403).end();return;}
    if(fs.existsSync(file)&&fs.statSync(file).isDirectory())file=path.join(file,'index.html');
    if(!fs.existsSync(file)){response.writeHead(404).end('Not found');return;}
    response.setHeader('Content-Type',types[path.extname(file)]||'application/octet-stream');
    fs.createReadStream(file).pipe(response);
  } catch {response.writeHead(400).end('Bad request');}
}).listen(port,'127.0.0.1',()=>console.log(`Wonder Atlas: http://127.0.0.1:${port}`));
