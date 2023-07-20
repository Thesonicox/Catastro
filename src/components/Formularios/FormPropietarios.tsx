import { useEffect, useState } from "react";
import { Button, Form, Input, Select } from "antd";

interface IFormValues {
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

interface IFormPropietariosProps {
    onSubmit: (values: IFormValues) => void;
    initialValues?: IFormValues,
    isEdit: boolean;
    onCancelUpdate: () => void;
}

const { Option } = Select;

export const FormPropietarios: React.FC<IFormPropietariosProps> = ({ onSubmit, initialValues, isEdit, onCancelUpdate }) => {

    const [form] = Form.useForm();
    const [typePerson, setTypePerson] = useState('');


    const onFinish = (values: IFormValues) => {
        onSubmit(values);
        form.resetFields();
        setTypePerson('')
    }

    const handleFormChange = (changedValues: Partial<IFormValues>, allValues: IFormValues) => {
        if (allValues.tipoDocumento === 'cedula') {
            setTypePerson('natural')
        } else {
            setTypePerson('juridica')
        }
    };

    useEffect(() => {
        if (initialValues) {
            if (initialValues.tipoDocumento === 'cedula') {
                setTypePerson('natural')
            } else {
                setTypePerson('juridica')
            }
            form.setFieldsValue(initialValues);
        } else {
            form.resetFields();
        }
    }, [form, initialValues])

    return (
        <Form onValuesChange={handleFormChange} form={form} layout="vertical" initialValues={initialValues} onFinish={onFinish}>
            <Form.Item
                label="Tipo de Documento"
                name="tipoDocumento"
                rules={[
                    {
                        required: true,
                        message: "Por favor seleccione el tipo de Documento!",
                    },
                ]}
            >
                <Select>
                    <Option value="cedula">Cedula de Ciudadania</Option>
                    <Option value="nit">NIT</Option>
                </Select>
            </Form.Item>

            {typePerson === "natural" && (

                <>

                    <Form.Item
                        label="Numero de Documento"
                        name="numeroDocumento"
                        rules={[
                            {
                                required: true,
                                message: "Por favor ingrese el Numero de Documento",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Nombre"
                        name="nombre"
                        rules={[
                            { required: true, message: "Por favor ingrese el Nombre!" },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Apellidos"
                        name="apellido"
                        rules={[
                            { required: true, message: "Por favor ingrese los Apellidos!" },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </>
            )}


            {typePerson === "juridica" && (
                <>
                    <Form.Item
                        label="NIT"
                        name="nit"
                        rules={[{ required: true, message: "Por favor ingrese el NIT!" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Razon Social"
                        name="razonSocial"
                        rules={[
                            {
                                required: true,
                                message: "Por favor ingrese la Razon Social!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </>
            )}

            <Form.Item
                label="Direccion"
                name="direccion"
                rules={[
                    { required: true, message: "Por favor ingrese la Direccion!" },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Telefono"
                name="telefono"
                rules={[
                    { required: true, message: "Por favor ingrese el Telefono!" },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Correo"
                name="correo"
                rules={[{ required: true, message: "Por favor ingrese el Correo!" }]}
            >
                <Input />
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
