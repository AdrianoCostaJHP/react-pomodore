<h1 align = "center">
<br>
  <img src = "https://i0.wp.com/jawwad.me/wp-content/uploads/2019/03/pomodoro-timer.png?fit=1200%2C595&ssl=1" alt = "Desafio Luby Software" width = "200">
<br>
<br>
Pomodore
</h1>
<h4 align="center">
  <p align = "center">Aplicação que implementa a técnica de estudo Pomodoro<p/> 
</h4>
<p align = "center">
  <img src="public/presentation.gif" alt="presentation">
</p>

## :rocket: Tecnologias
Neste projeto foram implementadas as tecnologias:

-  [React](https://facebook.github.io/react/) Uma biblioteca JavaScript para construção de interfaces.
-  [NextJS](https://nextjs.org/)
-  [NextAuth](https://github.com/nextauthjs/next-auth) NextAuth.js é uma solução de autenticação de código aberto para aplicativos Next.js

## 🔓 Autenticação

Para realizar a autenticação com o GitHub foi utilizado o [NextAuth](https://next-auth.js.org/), que tambem fornece outros [provedores](https://next-auth.js.org/configuration/providers) para autenticação.

```javascript theme="dark"
import Providers from `next-auth/providers`
...
providers: [
  Providers.GitHub({
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET
  })
]
...

``` 
