import { gql } from "@apollo/client";

export const CREAR_TERRENO = gql`
  mutation crearTerreno(
    $valorComercial: String
    $tipoTerreno: String
    $fuenteAgua: Boolean
    $construcciones: Boolean
    $area: String
  ) {
    createTerreno(
      input: {
        terreno: {
          area: $area
          construcciones: $construcciones
          fuenteAgua: $fuenteAgua
          tipoTerreno: $tipoTerreno
          valorComercial: $valorComercial
        }
      }
    ) {
      terreno {
        area
        construcciones
        fuenteAgua
        tipoTerreno
        valorComercial
      }
    }
  }
`;

export const ELIMINAR_TERRENO = gql`
  mutation EliminarTerreno($idDelete: Int!) {
    deleteTerrenoById(input: { id: $idDelete }) {
      deletedTerrenoId
    }
  }
`;

export const EDITAR_TERRENO = gql`
  mutation editarTerreno(
    $idEdit: Int!
    $area: String
    $construcciones: Boolean
    $fuenteAgua: Boolean
    $tipoTerreno: String
    $valorComercial: String
  ) {
    updateTerrenoById(
      input: {
        id: $idEdit
        terrenoPatch: {
          area: $area
          construcciones: $construcciones
          fuenteAgua: $fuenteAgua
          tipoTerreno: $tipoTerreno
          valorComercial: $valorComercial
        }
      }
    ) {
      terreno {
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
