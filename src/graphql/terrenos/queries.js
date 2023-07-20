import { gql } from "@apollo/client";

export const TERRENO = gql`
  query {
    allTerrenos {
      nodes {
        area
        construcciones
        fuenteAgua
        id
        tipoTerreno
        valorComercial
      }
    }
  }
`;

export const TERRENO_BY_ID = gql`
  query MyQuery($id: Int!) {
    terrenoById(id: $id) {
      area
      construcciones
      fuenteAgua
      tipoTerreno
      valorComercial
    }
  }
`;
