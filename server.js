/*
  Servidor local para estudar o blog com npm run dev.
  Usa somente módulos do Node.js: não precisa instalar dependências.
  Entrega o HTML e os arquivos de src e assets, sem compilar o projeto.
  O acesso fica limitado a este computador. Ctrl+C encerra o servidor.
 */
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { dirname, extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const port = 5173;
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
};

// Resolve apenas os documentos públicos do blog dentro da pasta do projeto.
function publicFile(url) {
  const pathname = decodeURIComponent(new URL(url, 'http://localhost').pathname);
  const relative = pathname === '/' ? 'index.html' : pathname.slice(1);
  const file = resolve(root, relative);
  const isPublic = ['index.html', 'artigo.html'].includes(relative)
    || relative.startsWith('assets/')
    || relative.startsWith('src/');

  return isPublic && file.startsWith(root + sep) ? file : null;
}

// Responde com o tipo correto e trata arquivos ausentes sem parar o servidor.
const server = createServer(async (request, response) => {
  if (!['GET', 'HEAD'].includes(request.method)) {
    response.writeHead(405, { Allow: 'GET, HEAD' }).end();
    return;
  }

  try {
    const file = publicFile(request.url);
    if (!file) {
      response.writeHead(404).end('Arquivo não encontrado.');
      return;
    }

    const content = await readFile(file);
    response.writeHead(200, {
      'Content-Type': types[extname(file)] || 'application/octet-stream',
      'X-Content-Type-Options': 'nosniff',
    });
    response.end(request.method === 'HEAD' ? undefined : content);
  } catch (error) {
    const status = error instanceof URIError ? 400 : 404;
    response.writeHead(status).end('Não foi possível abrir este endereço.');
  }
});

// Explica conflitos de porta em vez de mostrar uma exceção sem tratamento.
server.on('error', error => {
  console.error(error.code === 'EADDRINUSE'
    ? `A porta ${port} está em uso. Encerre o outro servidor e tente novamente.`
    : `Não foi possível iniciar: ${error.message}`);
  process.exitCode = 1;
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Cityguide: http://127.0.0.1:${port}`);
  console.log('Para encerrar, pressione Ctrl+C.');
});
