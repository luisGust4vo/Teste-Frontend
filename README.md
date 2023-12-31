# Projeto frontend onfly
<p align="center"><a href="https://vuejs.org" target="_blank"><img src="https://github.com/vuejs/art/raw/master/logo.png" width="150" alt="Vue.js Logo"></a></p>

- [notify](https://github.com/notifyjs/notifyjs): Uma biblioteca JavaScript para notificações do lado do cliente.
- [json-server](https://github.com/typicode/json-server): Uma ferramenta para criar uma API REST falsa a partir de um arquivo JSON.
- [Quasar Framework](https://quasar.dev/): Um framework Vue.js para criar aplicativos web, móveis e de desktop com facilidade.
- [Quasar Handle](https://github.com/quasarframework/app-extension-qenv): Uma extensão Quasar para gerenciar variáveis de ambiente.
- [Axios](https://axios-http.com/): Uma biblioteca JavaScript para fazer requisições HTTP.

## Configuração

Antes de começar, você precisará configurar o ambiente de desenvolvimento local. Siga estas etapas:

1. Clone este repositório para o seu computador.

```bash
git clone https://github.com/seu-usuario/seu-projeto.git
cd seu-projeto
```
Instale as dependências do projeto.
```bash
npm install
```
Configure as variáveis de ambiente. Copie o arquivo .env.example para .env e atualize as variáveis de acordo com as suas necessidades.
```bash
cp .env.example .env
```
Executando o Projeto
Agora que o ambiente está configurado, você pode executar o projeto localmente. Use os seguintes comandos:

Para iniciar o servidor JSON local com json-server:
```bash
npm run json-server
```
Para iniciar o aplicativo Quasar em modo de desenvolvimento:
```bash
npm run dev
```
O aplicativo estará disponível em http://localhost:8080.

Desenvolvimento
Sinta-se à vontade para começar a desenvolver e personalizar este projeto de acordo com suas necessidades. Você pode encontrar mais informações sobre cada tecnologia nas documentações correspondentes:

Documentação do Quasar Framework
Documentação do Axios
Documentação do json-server

Este projeto está licenciado sob a Licença MIT.

Lembrando que o projeto foi testando com json-server, para testar com outros dados deve-se mudar as rotas da api
