import { Table, Button, Space, Popconfirm } from "antd";
import type { ColumnsType } from 'antd/es/table';

interface ITableData {
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

interface ITablaPropietariosProps {
    data: ITableData[];
    onEdit: (item: ITableData) => void;
    deletePropietariosById: (id: number) => void;
}

const TablaPropietarios: React.FC<ITablaPropietariosProps> = ({ data, onEdit, deletePropietariosById }) => {

    const columns: ColumnsType<ITableData> = [
        {
            title: 'Nombre',
            dataIndex: 'nombre',
            key: 'nombre'
        },
        {
            title: 'Apellido',
            dataIndex: 'apellido',
            key: 'apellido'
        },
        {
            title: 'Tipo de persona',
            dataIndex: 'tipoPersona',
            key: 'tipoPersona',
            render: (x, record) => (
                <span>{record.tipoDocumento === 'cedula' ? 'Natural' : 'Juridica'}</span>
            )
        },
        {
            title: 'Tipo de documento',
            dataIndex: 'tipoDocumento',
            key: 'tipoDocumento'
        },
        {
            title: 'Numero de documento',
            dataIndex: 'numeroDocumento',
            key: 'numeroDocumento'
        },
        {
            title: 'Nombre',
            dataIndex: 'nombre',
            key: 'nombre'
        },
        {
            title: 'NIT',
            dataIndex: 'nit',
            key: 'nit'
        },
        {
            title: 'Razon Social',
            dataIndex: 'razonSocial',
            key: 'razonSocial'
        },
        {
            title: 'Direccion',
            dataIndex: 'direccion',
            key: 'direccion'
        },
        {
            title: 'Telefono',
            dataIndex: 'telefono',
            key: 'telefono'
        },
        {
            title: 'Correo',
            dataIndex: 'correo',
            key: 'correo'

        },
        {
            title: "Acciones",
            key: "action",
            render: (x, record) => (
                <Space size="middle">
                    <Button type="primary" onClick={() => onEdit(record)}>Actualizar</Button>
                    <Popconfirm
                        title="¿Estas seguro que deseas eliminar?"
                        onConfirm={() => {
                            if (record.id) {
                                deletePropietariosById(record.id);
                            }
                        }}
                        okText="Si"
                        cancelText="No"
                    >
                        <Button type="primary" danger>
                            Eliminar
                        </Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ]

    return (
        <Table scroll={{ x: 1500 }} rowKey="id" dataSource={data} columns={columns} pagination={{ pageSize: 5 }} />
    )
}

export default TablaPropietarios