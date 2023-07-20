import { NextPage } from "next";
import { Typography } from 'antd';
import { useState, useEffect } from "react";
import { FormPropietarios } from "../src/components/Formularios/FormPropietarios";
import TablaPropietarios from '../src/components/Tablas/TablaPropietarios';
import { useCreatePropietario, usePropietarios, useDeletePropietario, useUpdatePropietario } from '../src/graphql/propietarios/hooks'

const { Title } = Typography;

interface IFormData {
  id?: number;
  tipoDocumento: string;
  numeroDocumento?: string;
  nombre?: string;
  apellido?: string;
  nit?: string;
  razonSocial?: string;
  direccion: string;
  telefono: string;
  correo: string;
  tipoPersona: string;
}


const Propietarios: NextPage = () => {
  const eliminarPropietarios = useDeletePropietario();
  const editarPropietarios = useUpdatePropietario()
  const { data, loading } = usePropietarios();
  const crearPropietarios = useCreatePropietario();
  const [editItem, setEditItem] = useState<IFormData | null>(null);
  const [tablaPropietarios, setTablaPropietarios] = useState<IFormData[]>([])


  const handleFormSubmit = (values: IFormData) => {
    if (editItem) {

      if (editItem.id) {
        onUpdatePropietarios(editItem.id, values)
      }

      setEditItem(null);
    } else {
      // Agregar un nuevo elemento a la tabla
      onCreatePropietarios({ ...values, tipoPersona: values.tipoDocumento === 'cedula' ? 'Natural' : 'Juridica' });
      // setData([...data, { ...values, id: new Date().getTime() }]);
    }
  };

  const deletePropietariosById = (id: number) => {
    eliminarPropietarios({ variables: { idDelete: id } })
  }

  const onUpdatePropietarios = (id: number, values: IFormData) => {
    editarPropietarios({
      variables: { idEdit: id, ...values },
    })
  }

  const onCreatePropietarios = (values: IFormData) => {
    crearPropietarios({ variables: values })
  }

  const handleEdit = (item: IFormData) => {
    setEditItem(item);
  };

  const onCancelUpdate = () => {
    setEditItem(null);
  }

  const initialValues = editItem ? { ...editItem } : undefined;



  useEffect(() => {
    setTablaPropietarios(data?.allPropietarios.nodes);
  }, [data]);

  return (
    <>
      <Title level={2}>Propietarios</Title>
      <FormPropietarios onSubmit={handleFormSubmit} initialValues={initialValues} isEdit={!!editItem} onCancelUpdate={onCancelUpdate} />
      <TablaPropietarios data={tablaPropietarios} onEdit={handleEdit} deletePropietariosById={deletePropietariosById} />
    </>
  )
}

export default Propietarios;