import { gql } from "@apollo/client";

export const PREDIOS = gql`
  query MyQuery {
    allPredios {
      nodes {
        avaluo
        construcciones
        departamento
        id
        municipio
        nombre
        numeroPredial
        propietarios
        terrenos
      }
    }
  }
`;
