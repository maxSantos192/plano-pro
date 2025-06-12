"use client";

import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";

import { ClassPlan } from "@/@types/class-plan";
import { Card, CardContent, CardTitle } from "@/app/_components/card";

import { duration, grades, subjects } from "../_constants/academic-data";

const { TextArea } = Input;

function FormComponent() {
  const [form] = Form.useForm();
  const { Option } = Select;

  function handleSubmit(values: ClassPlan) {
    console.log("Form values:", values);
  }

  return (
    <Card>
      <CardTitle>3. Estruturação do Plano</CardTitle>
      <CardContent>
        <Form form={form} name="aula" layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            name="titulo"
            label="Título da Aula"
            rules={[{ required: true, message: "Informe o título da aula" }]}
          >
            <Input placeholder="Ex: Frações e Números Decimais" />
          </Form.Item>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="disciplina"
                label="Disciplina"
                rules={[{ required: true, message: "Informe a disciplina" }]}
              >
                <Select placeholder="Selecione a disciplina">
                  {subjects.map((item) => (
                    <Option key={item.value} value={item.value}>
                      {item.label}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name="serie"
                label="Série/Ano"
                rules={[{ required: true, message: "Informe a série/ano" }]}
              >
                <Select placeholder="Selecione a série/ano">
                  {grades.map((item) => (
                    <Option key={item.value} value={item.value}>
                      {item.label}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="duracao"
                label="Duração"
                rules={[
                  { required: true, message: "Informe a duração da aula" },
                ]}
              >
                <Select placeholder="Selecione a duração">
                  {duration.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name="data"
                label="Data da Aula"
                rules={[{ required: true, message: "Informe a data da aula" }]}
              >
                <DatePicker
                  placeholder="dd/mm/aaaa"
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item name="objetivos" label="Objetivos da Aula">
            <TextArea placeholder="Descreva os objetivos que os alunos devem alcançar" />
          </Form.Item>

          <Form.Item name="conteudo" label="Conteúdo da Programático">
            <TextArea placeholder="Liste os tópicos que serão abordados" />
          </Form.Item>

          <Form.Item name="metodologia" label="Metodologia">
            <TextArea placeholder="Descreva as estratégias e métodos de ensino" />
          </Form.Item>

          <Form.Item name="recursos" label="Recursos Necessários">
            <TextArea placeholder="Liste os materiais e recursos necessários" />
          </Form.Item>

          <Form.Item name="avalicao" label="Avaliação">
            <TextArea placeholder="Descreva como será feita a avaliação do aprendizado" />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0 }}>
            <Button
              htmlType="submit"
              type="primary"
              size="large"
              color="default"
              variant="solid"
            >
              Salvar Plano de Aula
            </Button>
          </Form.Item>
        </Form>
      </CardContent>
    </Card>
  );
}

export default FormComponent;
