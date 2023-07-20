import { useEffect } from "react";
import { Button, Form, Input, Radio, Select } from "antd";


interface IFormValues {
    id?: number;
    valorComercial: string;
    area: string;
    tipoTerreno: string;
    construcciones: boolean;
    fuenteAgua: boolean;
}

interface IFormTerrenosProps {
    onSubmit: (values: IFormValues) => void;
    initialValues?: IFormValues,
    isEdit: boolean;
    onCancelUpdate: () => void;
}


const { Option } = Select;

export const FormTerrenos: React.FC<IFormTerrenosProps> = ({ onSubmit, initialValues, isEdit, onCancelUpdate }) => {

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
                label="Valor Comercial"
                name="valorComercial"
                rules={[
                    {
                        required: true,
                        message: "Por favor ingrese el Valor Comercial!",
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Area Total"
                name="area"
                rules={[{ required: true, message: "Por favor ingrese el Area!" }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Tipo de Terreno"
                name="tipoTerreno"
                rules={[
                    {
                        required: true,
                        message: "Por favor seleccione el tipo de Terreno!",
                    },
                ]}
            >
                <Select>
                    <Option value="rural">Rural</Option>
                    <Option value="urbano">Urbano</Option>
                </Select>
            </Form.Item>

            <Form.Item
                label="¿Tiene Construcciones?"
                name="construcciones"
                rules={[
                    {
                        required: true,
                        message: "Por favor selecccione una respuesta!",
                    },
                ]}
            >
                <Radio.Group>
                    <Radio value={true}>Si</Radio>
                    <Radio value={false}>No</Radio>
                </Radio.Group>
            </Form.Item>


            <Form.Item
                label="¿Tiene Fuentes de agua cerca?"
                name="fuenteAgua"
                rules={[
                    {
                        required: true,
                        message: "Por favor selecccione una respuesta!",
                    },
                ]}
            >
                <Radio.Group>
                    <Radio value={true}>Si</Radio>
                    <Radio value={false}>No</Radio>
                </Radio.Group>
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
