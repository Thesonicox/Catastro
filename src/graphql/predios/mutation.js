import { gql } from "@apollo/client";

export const CREAR_PREDIOS = gql`
  mutation crearPredios(
    $avaluo: String
    $departamento: String
    $municipio: String
    $nombre: String
    $construcciones: BigInt
    $propietario: BigInt
    $terrenos: BigInt
    $numeroPredial: String
  ) {
    createPredio(
      input: {
        predio: {
          construcciones: $construcciones
          terrenos: $terrenos
          propietarios: $propietario
          avaluo: $avaluo
          departamento: $departamento
          municipio: $municipio
          nombre: $nombre
          numeroPredial: $numeroPredial
        }
      }
    ) {
      predio {
        avaluo
        departamento
        municipio
        nombre
        numeroPredial
        terrenos
        propietarios
        construcciones
      }
    }
  }
`;

export const ELIMINAR_PREDIOS = gql`
  mutation eliminarPredios($idDelete: Int!) {
    deletePredioById(input: { id: $idDelete }) {
      deletedPredioId
    }
  }
`;

export const EDITAR_PREDIOS = gql`
  mutation editarPredios(
    $avaluo: String
    $departamento: String
    $municipio: String
    $idEdit: Int!
    $nombre: String
    $construcciones: BigInt
    $propietario: BigInt
    $terrenos: BigInt
    $numeroPredial: String
  ) {
    updatePredioById(
      input: {
        id: $idEdit
        predioPatch: {
          construcciones: $construcciones
          terrenos: $terrenos
          propietarios: $propietario
          avaluo: $avaluo
          departamento: $departamento
          municipio: $municipio
          nombre: $nombre
          numeroPredial: $numeroPredial
        }
      }
    ) {
      predio {
        avaluo
        departamento
        id
        municipio
        nombre
        numeroPredial
        terrenos
        propietarios
        construcciones
      }
    }
  }
`;
