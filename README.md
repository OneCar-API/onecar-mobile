# OneCar Mobile

![Sem título-1_Prancheta 1](https://user-images.githubusercontent.com/56441318/133950991-44ac40d3-c041-4c7a-b35b-bbf84abc9c37.png)


Este repositório é destinado a versão mobile do produto OneCar, seu app de vendas de carros.

### Iniciando as instalações

- Para executar o projeto será necessário instalar o framework Expo para ter acesso a algumas ferramentas e também emular o projeto no seu celular

- Para instalar o Expo na sua máquina, execute o comando abaixo no terminal.

```bash
npm install --global expo-cli
```
<br>

Feito isso, também será necessário instalar no seu celular o aplicativo Expo Go para fazer a emulação do projeto no seu celular em tempo real. O Expo Go está disponível tanto para Android, quanto para IOS.

- [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) - Android Lollipop(5) ou superior.
- [iOS App Store](https://itunes.com/apps/exponent) - IOS 11 ou superior.

<br>

Após concluir estes passos, vamos siga os próximos passos para clonar o projeto.

- Primeiramente será necessário clonar o repositório da [API](https://github.com/OneCar-API/onecar-webservice). 

- Neste repositório estão contidas todas as orientações para a execução da API que será consumida.


**IMPORTANTE:** Antes de iniciar a execução do app mobile, certifique-se que o servidor do back-end esteja rodando. 

- Feito isso, clone este repositório, inserindo o comando no terminal na pasta em que deseja salvar o projeto.

```bash
git clone https://github.com/OneCar-API/onecar-mobile.git
```

- Acesse a pasta do projeto e instale todas as dependências com o gerenciador de pacotes da sua escolha:

```bash
cd onecar-mobile
# ou
npm install ou yarn
```

- Por fim, execute a aplicação com um dos comandos abaixo:

```bash
expo start
```

- Com isso o projeto irá executar, abrindo uma aba no navegador e mostrando um QR Code. No seu celular, escaneie esse QR Code e o projeto irá ser executado no seu celular.

## Aplicação funcionando
O GIF abaixo, mostra a aplicação em funcionamento, com as funcionalidades de listagem de anúncios, exibição de um anúncio selecionado e também busca por um anúncio.

![app_mobile](https://user-images.githubusercontent.com/56441318/140787736-c719205b-f575-4048-bfa7-8a17714123e7.gif)

