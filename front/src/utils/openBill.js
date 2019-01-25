import { get } from 'lodash';
import gql from 'graphql-tag';

const BILL_EDIT_QUERY = gql`
  query billsEdit($orderId: ID!) {
      billsEdit(orderId: $orderId) {
        base64
      }
  }
`;

export default async function openBill(orderId, client) {
  try {
    const result = await client.query({
      query: BILL_EDIT_QUERY,
      variables: {
        orderId,
      },
      options: { fetchPolicy: 'network-only' },
    });
    const base64 = get(result, 'data.billsEdit.base64');
    if (base64) {
      const name = `E-COMMERCE-FACTURE-${orderId}`;

      if (window.navigator && window.navigator.msSaveOrOpenBlob) { // IE workaround
        const byteCharacters = atob(base64);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i += 1) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'application/pdf' });
        window.navigator.msSaveOrOpenBlob(blob, `${name}.pdf`);
      } else {
        const doc = window.open('', name, '"menubar=yes,location=yes,resizable=yes,status=yes,target=_blank');
        if (doc) {
          doc.document.write(`<iframe width='100%' height='100%' src='data:application/pdf;base64,${encodeURI(base64)}'></iframe>`);
        } else {
          const link = document.createElement('a');
          document.body.appendChild(link); // require for FF
          link.href = `data:application/pdf;base64,${encodeURI(base64)}`;
          link.download = `${name}.pdf`;
          link.target = '_self'; // require for FF
          link.click();
          document.body.removeChild(link);
        }
      }
    }
  } catch (e) {
    return null;
  }
  return null;
}
