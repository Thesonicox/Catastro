import { NextPage } from "next"
import { useEffect, useState } from "react";
import { Typography } from 'antd';
import { FormPredios } from "../src/components/Formularios/FormPredios";
import { TablaPredios } from "../src/components/Tablas/TablaPredios";
import { useCreatePredios, usePredios, useDeletePredios, useEditPredios } from "../src/graphql/predios/hooks";


const { Title } = Typography;

interface IFormData {
  id?: number;
  numeroPredial: string;
  avaluo: string;
  nombre: string;
  departamento: string;
  municipio: string;
  construcciones: number;
  propietarios: number;
  terrenos: number;

}


const Predios: NextPage = () => {
  const eliminarPredio = useDeletePredios();
  const editarPredio = useEditPredios();
  const [tablaPredios, setTablaPredios] = useState<IFormData[]>([])
  const [editItem, setEditItem] = useState<IFormData | null>(null);
  const crearPredio = useCreatePredios();
  const { data, loading } = usePredios();


  const handleFormSubmit = (values: IFormData) => {
    if (editItem) {

      if (editItem.id) {
        onUpdatePredio(editItem.id, values)
      }
      setEditItem(null);
    } else {
      // Agregar un nuevo elemento a la tabla
      onCreatePredios(values)


    }

  }
  const initialValues = editItem ? { ...editItem } : undefined;

  const onCreatePredios = (values: IFormData) => {
    crearPredio({ variables: values })
  }

  const onCancelUpdate = () => {
    setEditItem(null);
  }

  const onUpdatePredio = (id: number, values: IFormData) => {
    editarPredio({
      variables: { idEdit: id, ...values }
    })
  }

  const handleEdit = (item: IFormData) => {
    setEditItem(item);
  };

  const deletePredioById = (id: number) => {
    eliminarPredio({ variables: { idDelete: id } });
  }

  console.log(data?.allPredios.nodes);

  useEffect(() => {
    setTablaPredios(data?.allPredios.nodes)
  }, [data])

  return (
    <>
      <Title level={2}>Predios</Title>
      <FormPredios onSubmit={handleFormSubmit} initialValues={initialValues} isEdit={!!editItem} onCancelUpdate={onCancelUpdate} />
      <TablaPredios data={tablaPredios} onEdit={handleEdit} deletePredioById={deletePredioById} />
    </>
  )
}

export default Predios;
