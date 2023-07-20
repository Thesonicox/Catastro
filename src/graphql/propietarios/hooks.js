import { useMutation, useQuery } from "@apollo/client";
import {
  CREAR_PROPIETARIOS,
  ELIMINAR_PROPIETARIOS,
  EDITAR_PROPIETARIOS,
} from "./mutation";
import { PROPIETARIOS } from "./queries";

export const useCreatePropietario = () => {
  const [crearPropietario] = useMutation(CREAR_PROPIETARIOS, {
    refetchQueries: [{ query: PROPIETARIOS }],
  });
  return crearPropietario;
};

export const usePropietarios = () => {
  const result = useQuery(PROPIETARIOS);
  return result;
};

export const useUpdatePropietario = () => {
  const [editarPropietario] = useMutation(EDITAR_PROPIETARIOS);
  return editarPropietario;
};

export const useDeletePropietario = () => {
  const [deletePropietarios] = useMutation(ELIMINAR_PROPIETARIOS, {
    refetchQueries: [{ query: PROPIETARIOS }],
  });
  return deletePropietarios;
};
