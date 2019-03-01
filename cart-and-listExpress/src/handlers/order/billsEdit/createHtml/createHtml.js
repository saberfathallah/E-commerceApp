/* eslint-disable no-underscore-dangle */
import styleCss from './styleCss';

export default function createHtml(body) {
  const header = `<html>
                    <head>
                      <meta charset="utf-8">
                      <title>Facture Monoprix</title>
                      <meta http-equiv="X-UA-Compatible" content="IE=edge">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <meta name="description" content=""><meta name="author" content="">
                    </head>
                    <style>
                    ${styleCss}
                    </style>
                    <body>`;

  const footer = `<div class="thanks-facture">E-commerce.fr vous remercie de votre confiance<br>
                  </div>
                  <p>Détails commande</p>
                  <p>num  commande: ${body._id}</p>
                  <p>Total: ${body.total}</p>
                  <p>Total avec reduction: ${body.totalWithPromotion}</p>
                  <p>nombre des produits: ${body.items.length}</p>
                  <p>adresse de client: ${body.adress}</p>
                  </body>
                  </html>`;
  const html = header + footer;
  return html;
}
