import { Table, Button, Space, Popconfirm } from "antd";
import type { ColumnsType } from 'antd/es/table';

interface ITableData {
    id?: number;
    tipoConstruccion: string;
    numeroPisos: string;
    areaTotal: string;
    direccion: string;
}

interface ITablaConstruccionesProps {
    data: ITableData[];
    onEdit: (item: ITableData) => void;
    deleteConstruccionById: (id: number) => void;
}

export const TablaConstrucciones: React.FC<ITablaConstruccionesProps> = ({ data, onEdit, deleteConstruccionById }) => {



    const columns: ColumnsType<ITableData> = [
        {
            title: "Tipo de Construccion",
            dataIndex: "tipoConstruccion",
            key: "tipoConstruccion",
        },
        {
            title: "Numero de pisos",
            dataIndex: "numeroPisos",
            key: "numeroPisos",
        },
        {
            title: "Area Total",
            dataIndex: "areaTotal",
            key: "areaTotal",
        },
        {
            title: "Direccion",
            dataIndex: "direccion",
            key: "direccion",
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
                            if (record.id) {
                                deleteConstruccionById(record.id)
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
    ];


    return (
        <Table scroll={{ x: 1500 }} rowKey="id" dataSource={data} columns={columns} pagination={{ pageSize: 5 }} />
    )
}
