import { useMutation, useQuery } from "@apollo/client";
import { CREAR_TERRENO, EDITAR_TERRENO, ELIMINAR_TERRENO } from "./mutation";
import { TERRENO } from "./queries";

export const useCreateTerreno = () => {
  const [crearTerreno] = useMutation(CREAR_TERRENO, {
    refetchQueries: [{ query: TERRENO }],
  });
  return crearTerreno;
};

export const useTerreno = () => {
  const result = useQuery(TERRENO);
  return result;
};

export const useDeleteTerreno = () => {
  const [deleteTerreno] = useMutation(ELIMINAR_TERRENO, {
    refetchQueries: [{ query: TERRENO }],
  });
  return deleteTerreno;
};

export const useEditTerreno = () => {
  const [editTerrreno] = useMutation(EDITAR_TERRENO);
  return editTerrreno;
};
