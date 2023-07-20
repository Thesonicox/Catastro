import { gql } from "@apollo/client";

export const CREAR_CONSTRUCCIONES = gql`
  mutation crearConstrucciones(
    $tipoConstruccion: String
    $numeroPisos: String
    $direccion: String
    $areaTotal: String
  ) {
    createConstruccione(
      input: {
        construccione: {
          tipoConstruccion: $tipoConstruccion
          numeroPisos: $numeroPisos
          direccion: $direccion
          areaTotal: $areaTotal
        }
      }
    ) {
      construccione {
        tipoConstruccion
        numeroPisos
        direccion
        areaTotal
      }
    }
  }
`;

export const ELIMINAR_CONSTRUCCIONES = gql`
  mutation EliminarConstrucciones($idDelete: Int!) {
    deleteConstruccioneById(input: { id: $idDelete }) {
      deletedConstruccioneId
    }
  }
`;

export const EDITAR_CONSTRUCCION = gql`
  mutation editarConstruccion(
    $areaTotal: String
    $direccion: String
    $idEdit: Int!
    $numeroPisos: String
    $tipoConstruccion: String
  ) {
    updateConstruccioneById(
      input: {
        id: $idEdit
        construccionePatch: {
          areaTotal: $areaTotal
          direccion: $direccion
          numeroPisos: $numeroPisos
          tipoConstruccion: $tipoConstruccion
        }
      }
    ) {
      construccione {
        areaTotal
        direccion
        id
        numeroPisos
        tipoConstruccion
      }
    }
  }
`;
