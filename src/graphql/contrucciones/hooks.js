import { useMutation, useQuery } from "@apollo/client";
import {
  CREAR_CONSTRUCCIONES,
  EDITAR_CONSTRUCCION,
  ELIMINAR_CONSTRUCCIONES,
} from "./mutation";
import { CONSTRUCCIONES } from "./queries";

export const useCreateConstrucciones = () => {
  const [crearConstrucciones] = useMutation(CREAR_CONSTRUCCIONES, {
    refetchQueries: [{ query: CONSTRUCCIONES }],
  });
  return crearConstrucciones;
};

export const useConstrucciones = () => {
  const result = useQuery(CONSTRUCCIONES);
  return result;
};

export const useDeleteConstruccion = () => {
  const [deleteConstruccion] = useMutation(ELIMINAR_CONSTRUCCIONES, {
    refetchQueries: [{ query: CONSTRUCCIONES }],
  });
  return deleteConstruccion;
};

export const useEditConstruccion = () => {
  const [editarConstruccion] = useMutation(EDITAR_CONSTRUCCION);
  return editarConstruccion;
};
