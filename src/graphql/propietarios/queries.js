import { gql } from "@apollo/client";

export const PROPIETARIOS = gql`
  query {
    allPropietarios {
      nodes {
        apellido
        correo
        direccion
        id
        nit
        nombre
        numeroDocumento
        razonSocial
        telefono
        tipoDocumento
        tipoPersona
      }
    }
  }
`;
