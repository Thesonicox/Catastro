import { Table, Button, Space, Popconfirm } from "antd";
import type { ColumnsType } from 'antd/es/table';

interface ITableData {
    id?: number;
    valorComercial: string;
    area: string;
    tipoTerreno: string;
    construcciones: boolean;
    fuenteAgua: boolean;
}

interface ITablaTerrenosProps {
    data: ITableData[];
    onEdit: (item: ITableData) => void;
    deleteTerrenoById: (id: number) => void;
}

export const TablaTerrenos: React.FC<ITablaTerrenosProps> = ({ data, onEdit, deleteTerrenoById }) => {

    const columns: ColumnsType<ITableData> = [
        {
            title: "Valor Comercial",
            dataIndex: "valorComercial",
            key: "valorComercial",
        },
        {
            title: "Fuente de agua",
            dataIndex: "fuenteAgua",
            key: "fuenteAgua",
            render: (_, record) => (
                <Space size="middle">{record.fuenteAgua ? "Si" : "No"}</Space>
            ),
        },
        {
            title: "Area Total",
            dataIndex: "area",
            key: "area",
        },
        {
            title: "Tipo de Terreno",
            dataIndex: "tipoTerreno",
            key: "tipoTerreno",
        },
        {
            title: "Construcciones",
            dataIndex: "construcciones",
            key: "construcciones",
            render: (_, record) => (
                <Space size="middle">{record.construcciones ? "Si" : "No"}</Space>
            ),
        },
        {
            title: "Acciones",
            key: "action",
            render: (x, record) => (
                <Space size="middle">
                    <Button type="primary" onClick={() => onEdit(record)}>
                        Actualizar
                    </Button>
                    <Popconfirm
                        title="¿Estas seguro que deseas eliminar?"
                        onConfirm={() => {
                            deleteTerrenoById(Number(record.id));
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
    ];

    return (
        <Table scroll={{ x: 1500 }} rowKey="id" dataSource={data} columns={columns} pagination={{ pageSize: 5 }} />
    )
}
