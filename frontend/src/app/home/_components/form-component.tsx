"use client";

import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import { useEffect, useState } from "react";

import { ClassPlan } from "@/@types/class-plan";
import { Option } from "@/@types/option";
import { Card, CardContent, CardTitle } from "@/app/_components/card";
import api from "@/lib/api";

const { TextArea } = Input;

function FormComponent() {
  const [durations, setDurations] = useState<Option[]>([]);
  const [grades, setGrades] = useState<Option[]>([]);
  const [subjects, setSubjects] = useState<Option[]>([]);

  const [form] = Form.useForm();

  useEffect(() => {
    async function fetchOptions() {
      try {
        const [durationsRes, gradesRes, subjectsRes] = await Promise.all([
          api.get("/durations"),
          api.get("/grades"),
          api.get("/subjects"),
        ]);
        setDurations(durationsRes.data.data);
        setGrades(gradesRes.data.data);
        setSubjects(subjectsRes.data.data);
      } catch (error) {
        console.error("Erro ao buscar opções:", error);
      }
    }
    fetchOptions();
  }, []);

  async function handleSubmit(values: ClassPlan) {
    try {
      const formattedDate = values.date.format("YYYY-MM-DD");
      await api.post("/class-plans", {
        ...values,
        date: formattedDate,
      });
    } catch (error) {
      console.error("Erro ao salvar o plano de aula:", error);
    }
  }

  return (
    <Card>
      <CardTitle>3. Estruturação do Plano</CardTitle>
      <CardContent>
        <Form form={form} name="aula" layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            name="title"
            label="Título da Aula"
            rules={[{ required: true, message: "Informe o título da aula" }]}
          >
            <Input placeholder="Ex: Frações e Números Decimais" />
          </Form.Item>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="subjectId"
                label="Disciplina"
                rules={[{ required: true, message: "Informe a disciplina" }]}
              >
                <Select placeholder="Selecione a disciplina">
                  {subjects.map((item) => (
                    <Select.Option key={item.id} value={item.id}>
                      {item.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name="gradeId"
                label="Série/Ano"
                rules={[{ required: true, message: "Informe a série/ano" }]}
              >
                <Select placeholder="Selecione a série/ano">
                  {grades.map((item) => (
                    <Select.Option key={item.id} value={item.id}>
                      {item.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="durationId"
                label="Duração"
                rules={[
                  { required: true, message: "Informe a duração da aula" },
                ]}
              >
                <Select placeholder="Selecione a duração">
                  {durations.map((item) => (
                    <Select.Option key={item.id} value={item.id}>
                      {item.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name="date"
                label="Data da Aula"
                rules={[{ required: true, message: "Informe a data da aula" }]}
              >
                <DatePicker
                  placeholder="dd/mm/aaaa"
                  format="DD/MM/YYYY"
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item name="objectives" label="Objetivos da Aula">
            <TextArea placeholder="Descreva os objetivos que os alunos devem alcançar" />
          </Form.Item>

          <Form.Item name="content" label="Conteúdo da Programático">
            <TextArea placeholder="Liste os tópicos que serão abordados" />
          </Form.Item>

          <Form.Item name="methodology" label="Metodologia">
            <TextArea placeholder="Descreva as estratégias e métodos de ensino" />
          </Form.Item>

          <Form.Item name="resources" label="Recursos Necessários">
            <TextArea placeholder="Liste os materiais e recursos necessários" />
          </Form.Item>

          <Form.Item name="evaluation" label="Avaliação">
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
