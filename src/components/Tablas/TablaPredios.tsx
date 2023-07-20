import { Table, Button, Space, Popconfirm } from "antd";
import type { ColumnsType } from 'antd/es/table';
import { useConstrucciones } from "../../graphql/contrucciones/hooks";
import { usePropietarios } from "../../graphql/propietarios/hooks";
import { useTerreno } from "../../graphql/terrenos/hooks";

interface ITableData {
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

interface ITablePrediosProps {
    data: ITableData[];
    onEdit: (item: ITableData) => void;
    deletePredioById: (id: number) => void;
}

export const TablaPredios: React.FC<ITablePrediosProps> = ({ data, onEdit, deletePredioById }) => {

    const { data: dataConstrucciones } = useConstrucciones();
    const { data: dataPropietarios } = usePropietarios();
    const { data: dataTerrenos } = useTerreno();


    const arrayContrucciones = dataConstrucciones?.allConstrucciones.nodes
    const arrayPropietarios = dataPropietarios?.allPropietarios.nodes
    const arrayTerrenos = dataTerrenos?.allTerrenos.nodes
    const columns: ColumnsType<ITableData> = [
        {
            title: "Numero Predial",
            dataIndex: "numeroPredial",
            key: "numeroPredial",
        },
        {
            title: "Avalúo",
            dataIndex: "avaluo",
            key: "avaluo",
        },
        {
            title: "Nombre",
            dataIndex: "nombre",
            key: "nombre",
        },
        {
            title: "Departamento",
            dataIndex: "departamento",
            key: "departamento",
        },
        {
            title: "Municipio",
            dataIndex: "municipio",
            key: "municipio",
        },
        {
            title: "Construccion",
            dataIndex: "construcciones",
            key: "construcciones",
            render: (x, record) => {
                const construccion = arrayContrucciones?.find((item: any) => item.id === Number(record.construcciones));
                return (
                    <span>{`${construccion?.tipoConstruccion} - ${construccion?.direccion}`}</span>
                )
            }
        },
        {
            title: "Propietario",
            dataIndex: "propietarios",
            key: "propietarios",
            render: (x, record) => {
                const propietario = arrayPropietarios?.find((item: any) => item.id === Number(record.propietarios));
                return (
                    <span>{`${propietario?.nombre} - ${propietario?.apellido}`}</span>
                )
            }
        },
        {
            title: "Terreno",
            dataIndex: "terrenos",
            key: "terrenos",
            render: (x, record) => {
                const terreno = arrayTerrenos?.find((item: any) => item.id === Number(record.terrenos));
                return (
                    <span>{terreno?.tipoTerreno}</span>
                )
            }
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
                            deletePredioById(Number(record.id));
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
