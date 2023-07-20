import { NextPage } from 'next';
import { Typography } from 'antd';
import { useState, useEffect } from 'react';
import { FormTerrenos } from '../src/components/Formularios/FormTerrenos';
import { TablaTerrenos } from '../src/components/Tablas/TablaTerrenos';
import { useCreateTerreno, useTerreno, useDeleteTerreno, useEditTerreno } from '../src/graphql/terrenos/hooks'
import TablaPropietarios from '../src/components/Tablas/TablaPropietarios';
const { Title } = Typography;

interface IFormData {
  id?: number;
  valorComercial: string;
  area: string;
  tipoTerreno: string;
  construcciones: boolean;
  fuenteAgua: boolean;
}


const Terrenos: NextPage = () => {
  const crearTerrenos = useCreateTerreno();
  const editarTerreno = useEditTerreno();
  const eliminarTerrenos = useDeleteTerreno()
  const [editItem, setEditItem] = useState<IFormData | null>(null);
  const { data } = useTerreno();
  const [tablaTerrenos, setTablaTerrenos] = useState<IFormData[]>([]);

  const handleFormSubmit = (values: IFormData) => {
    if (editItem) {

      if (editItem.id) {
        onUpdateTerreno(editItem.id, values);
      }
      setEditItem(null);
    } else {

      onCreateTerreno(values)
      // Agregar un nuevo elemento a la tabla
    }
  };



  const onUpdateTerreno = (id: number, values: IFormData) => {
    editarTerreno({
      variables: { idEdit: id, ...values },
    })
  }

  const onCreateTerreno = (values: IFormData) => {
    crearTerrenos({ variables: values })
  }

  const handleEdit = (item: IFormData) => {
    setEditItem(item);
  };

  const onCancelUpdate = () => {
    setEditItem(null);
  }


  const initialValues = editItem ? { ...editItem } : undefined;

  const deleteTerrenoById = (id: number) => {
    // setData(data.filter(item => item.id !== id));
    eliminarTerrenos({ variables: { idDelete: id } });
  }

  useEffect(() => {
    setTablaTerrenos(data?.allTerrenos.nodes);
  }, [data])


  return (
    <>
      <Title level={2}>Terrenos</Title>
      <FormTerrenos onSubmit={handleFormSubmit} initialValues={initialValues} isEdit={!!editItem} onCancelUpdate={onCancelUpdate} />
      <TablaTerrenos data={tablaTerrenos} onEdit={handleEdit} deleteTerrenoById={deleteTerrenoById} />
    </>
  )
}

export default Terrenos;
