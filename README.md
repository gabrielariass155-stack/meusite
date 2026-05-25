# Império Digital do Zero

Site de venda do ebook digital de Ricardo Abreu, atualizado com a nova identidade visual baseada no arquivo `index 6.html`.

## Estrutura

- `index.html`: página principal de venda.
- `checkout.html`: página de checkout pronta para enviar o comprador ao pagamento.
- `gracias.html`: página de obrigado com orientação de acesso pela Kiwify/e-mail.
- `assets/css/styles.css`: estilos globais do site.
- `assets/js/main.js`: link de pagamento e animações.
- `assets/images/`: mockups do ebook.
- `assets/pdf/imperio-digital-do-zero-pt.pdf`: cópia local do PDF em português para configurar a entrega dentro da Kiwify.

## Pagamento

O botão de checkout usa o link configurado em `assets/js/main.js`:

```js
const PAYMENT_LINK = "https://pay.kiwify.com.br/acG8KgP";
```

Para vender de verdade, configure na Kiwify a página de obrigado como URL de redirecionamento após compra:

```txt
gracias.html
```

Configure a entrega do PDF dentro da Kiwify. O arquivo não deve ficar como download público no GitHub Pages, para evitar que alguém acesse o produto sem comprar.

## Como testar

Abra `index.html` diretamente no navegador ou rode um servidor local dentro desta pasta:

```powershell
python -m http.server 5500
```

Depois acesse:

```txt
http://127.0.0.1:5500/
```
