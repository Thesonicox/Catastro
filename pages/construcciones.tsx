import { NextPage } from "next"
import { useEffect, useState } from "react";
import {
    Typography,
} from "antd";

import { FormConstruccion } from "../src/components/Formularios/FormConstruccion";
import { TablaConstrucciones } from '../src/components/Tablas/TablaConstrucciones';

import {
    useConstrucciones,
    useCreateConstrucciones,
    useDeleteConstruccion,
    useEditConstruccion
} from "../src/graphql/contrucciones/hooks";


const { Title } = Typography;

interface IFormData {
    id?: number;
    tipoConstruccion: string;
    numeroPisos: string;
    areaTotal: string;
    direccion: string;
}

const Construcciones: NextPage = () => {

    const crearConstruccion = useCreateConstrucciones();
    const editarConstruccion = useEditConstruccion();
    const eliminarConstruccion = useDeleteConstruccion();
    const { data, loading } = useConstrucciones();

    const [tablaConstrucciones, setTablaConstrucciones] = useState<IFormData[]>([])
    const [editItem, setEditItem] = useState<IFormData | null>(null);

    const handleFormSubmit = (values: IFormData) => {
        if (editItem) {

            if (editItem.id) {
                onUpdateConstruccion(editItem.id, values)
            }
            setEditItem(null);
        } else {
            // Agregar un nuevo elemento a la tabla
            onCreateConstruccion(values)

        }
    };

    const onUpdateConstruccion = (id: number, values: IFormData) => {
        editarConstruccion({
            variables: { idEdit: id, ...values },
        });
    }
    const onCreateConstruccion = (values: IFormData) => {
        crearConstruccion({ variables: values })
    }


    const handleEdit = (item: IFormData) => {
        setEditItem(item);
    };

    const onCancelUpdate = () => {
        setEditItem(null);
    }

    const initialValues = editItem ? { ...editItem } : undefined;

    const deleteConstruccionById = (id: number) => {
        eliminarConstruccion({ variables: { idDelete: id } });

    }

    useEffect(() => {
        setTablaConstrucciones(data?.allConstrucciones.nodes)
    }, [data])
    return (
        <>
            <Title level={2}>Construcciones</Title>
            <FormConstruccion onSubmit={handleFormSubmit} initialValues={initialValues} isEdit={!!editItem} onCancelUpdate={onCancelUpdate} />
            <TablaConstrucciones data={tablaConstrucciones} onEdit={handleEdit} deleteConstruccionById={deleteConstruccionById} />
        </>
    )
}

export default Construcciones;