import { useEffect } from "react";
import { Button, Form, Input, Select } from "antd";

interface IFormValues {
    tipoConstruccion: string;
    numeroPisos: string;
    areaTotal: string;
    direccion: string;
}

interface IFormConstruccionProps {
    onSubmit: (values: IFormValues) => void;
    initialValues?: IFormValues,
    isEdit: boolean;
    onCancelUpdate: () => void;
}


const { Option } = Select;

export const FormConstruccion: React.FC<IFormConstruccionProps> = ({ onSubmit, initialValues, isEdit, onCancelUpdate }) => {

    const [form] = Form.useForm();


    const onFinish = (values: IFormValues) => {
        onSubmit(values);
        form.resetFields();
    }

    useEffect(() => {
        if (initialValues) {
            form.setFieldsValue(initialValues);
        } else {
            form.resetFields();
        }
    }, [form, initialValues])


    return (
        <Form form={form} layout="vertical" initialValues={initialValues} onFinish={onFinish}>
            <Form.Item
                label="Tipo de Construccion"
                name="tipoConstruccion"
                rules={[
                    {
                        required: true,
                        message: "Por favor seleccione el tipo de Construccion!",
                    },
                ]}
            >
                <Select>
                    <Option value="industrial">Industrial</Option>
                    <Option value="comercial">Comercial</Option>
                    <Option value="residencial">Residencial</Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="Numero de Pisos"
                name="numeroPisos"
                rules={[
                    { required: true, message: "Por favor ingrese Numero de Pisos" },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Area Total"
                name="areaTotal"
                rules={[
                    { required: true, message: "Por favor ingrese el Area Total!" },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Direccion"
                name="direccion"
                rules={[
                    { required: true, message: "Por favor ingrese la Direccion!" },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    {isEdit ? 'Actualizar' : 'Enviar Formulario'}
                </Button>
                {isEdit && <Button danger type="primary" onClick={onCancelUpdate}>Cancelar</Button>}
            </Form.Item>
        </Form >
    )
}
