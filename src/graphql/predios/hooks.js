import { useMutation, useQuery } from "@apollo/client";
import { CREAR_PREDIOS, ELIMINAR_PREDIOS, EDITAR_PREDIOS } from "./mutation";
import { PREDIOS } from "./queries";

export const useCreatePredios = () => {
  const [crearPredios] = useMutation(CREAR_PREDIOS, {
    refetchQueries: [{ query: PREDIOS }],
  });
  return crearPredios;
};

export const usePredios = () => {
  const result = useQuery(PREDIOS);
  return result;
};

export const useDeletePredios = () => {
  const [deletePredios] = useMutation(ELIMINAR_PREDIOS, {
    refetchQueries: [{ query: PREDIOS }],
  });
  return deletePredios;
};

export const useEditPredios = () => {
  const [editarPredios] = useMutation(EDITAR_PREDIOS);
  return editarPredios;
};
