import { gql } from "@apollo/client";

export const CONSTRUCCIONES = gql`
  query MyQuery {
    allConstrucciones {
      nodes {
        areaTotal
        direccion
        id
        numeroPisos
        tipoConstruccion
      }
    }
  }
`;
