import { useEffect, useState } from "react";
import { Button, Form, Input, Select } from "antd";
import { useConstrucciones } from "../../graphql/contrucciones/hooks";
import { usePropietarios } from "../../graphql/propietarios/hooks";
import { useTerreno } from "../../graphql/terrenos/hooks";

interface IFormnValues {
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

interface IFormPrediosProps {
    onSubmit: (values: IFormnValues) => void;
    initialValues?: IFormnValues;
    isEdit: boolean;
    onCancelUpdate: () => void
}

interface IOption {
    label: string;
    value: number;
}

const { Option } = Select;

export const FormPredios: React.FC<IFormPrediosProps> = ({ onSubmit, initialValues, isEdit, onCancelUpdate }) => {

    const [form] = Form.useForm();

    const { data: dataConstrucciones } = useConstrucciones();
    const { data: dataPropietarios } = usePropietarios();
    const { data: dataTerrenos } = useTerreno();


    const arrayContrucciones = dataConstrucciones?.allConstrucciones.nodes
    const arrayPropietarios = dataPropietarios?.allPropietarios.nodes
    const arrayTerrenos = dataTerrenos?.allTerrenos.nodes

    const [optionsConstrucciones, setOptionsConstrucciones] = useState<IOption[]>([])
    const [optionsTerrenos, setOptionsTerrenos] = useState<IOption[]>([])
    const [optionsPropietarios, setOptionsPropietarios] = useState<IOption[]>([])

    useEffect(() => {
        if (initialValues) {
            form.setFieldsValue(initialValues);
        } else {
            form.resetFields();
        }
    }, [form, initialValues])

    console.log(initialValues);
    
    useEffect(() => {
        if (arrayContrucciones) {
            const mappingArray = arrayContrucciones.map((item: any) => {

                return {
                    label: item.tipoConstruccion,
                    value: item.id.toString()
                }
            })
            setOptionsConstrucciones(mappingArray)
        }
        if (arrayPropietarios) {
            const mappingArray = arrayPropietarios.map((item: any) => {

                return {
                    label: item.nombre,
                    value: item.id.toString()
                }
            })
            setOptionsPropietarios(mappingArray)
        }
        if (arrayTerrenos) {
            const mappingArray = arrayTerrenos.map((item: any) => {

                return {
                    label: item.tipoTerreno,
                    value: item.id.toString()
                }
            })
            setOptionsTerrenos(mappingArray)
        }


    }, [arrayContrucciones, arrayPropietarios, arrayTerrenos])


    const onFinish = (values: IFormnValues) => {
        onSubmit(values);
        form.resetFields();
    }


    return (
        <Form form={form} layout="vertical" onFinish={onFinish} initialValues={initialValues}>


            <Form.Item
                label="Numero Predial"
                name="numeroPredial"
                rules={[
                    {
                        required: true,
                        message: "Por favor ingrese el Numero Predial!",
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Avalúo"
                name="avaluo"
                rules={[{ required: true, message: "Por favor ingrese el Avalúo!" }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Nombre"
                name="nombre"
                rules={[
                    {
                        required: true,
                        message: "Por favor seleccione el Nombre!",
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Departamento"
                name="departamento"
                rules={[
                    {
                        required: true,
                        message: "Por favor ingrese el Departamento!",
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Municipio"
                name="municipio"
                rules={[
                    {
                        required: true,
                        message: "Por favor ingrese el Municipio!",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Construccion"
                name="construcciones"
                rules={[
                    {
                        required: true,
                        message: "Por favor seleccione la construccion!",
                    },
                ]}
            >
                <Select>
                    {optionsConstrucciones.map(({ value, label }) => (
                        <Option key={value} value={value}>{label}</Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item
                label="Propietarios"
                name="propietarios"
                rules={[
                    {
                        required: true,
                        message: "Por favor seleccione el Propietario!",
                    },
                ]}
            >
                <Select>
                    {optionsPropietarios.map(({ value, label }) => (
                        <Option key={value} value={value}>{label}</Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item
                label="Terreno"
                name="terrenos"
                rules={[
                    {
                        required: true,
                        message: "Por favor seleccione el Terreno!",
                    },
                ]}
            >
                <Select>
                    {optionsTerrenos.map(({ value, label }) => (
                        <Option key={value} value={value}>{label}</Option>
                    ))}
                </Select>
            </Form.Item>

            <Form.Item>

                <Button type="primary" htmlType="submit">
                    {isEdit ? 'Actualizar' : 'Enviar Formulario'}
                </Button>
                {isEdit && <Button danger type="primary" onClick={onCancelUpdate}>Cancelar</Button>}
            </Form.Item>
        </Form>
    )
}
