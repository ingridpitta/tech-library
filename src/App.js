import { shareCollection } from "./api/index";
import { validateEmail } from "./utils/validators";
import { Input, Button, Typography, Row, Col } from "antd";
import { useState } from "react";
import "antd/dist/antd.css";
import "./App.css";

const App = () => {
  const [value, setValue] = useState("");
  const [errors, setErrors] = useState(false);
  const [subimitted, setSubimitted] = useState(false);

  const onFinish = () => {
    const isValid = validateEmail(value);
    if (isValid) {
      return shareCollection(value)
        .then(() => {
          setSubimitted(true)
          setErrors(false)
        })
        .catch(() => setErrors(true));
    }
    return setErrors(true);
  };

  return (
    <main>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        justify="center"
        align="middle"
      >
        <Col className="gutter-row" xs={32} sm={32} md={32} lg={16} xl={16} flex="auto">
          <Typography.Title level={1} style={{ color: "#1890ff" }}>
            Tech Library
          </Typography.Title>
          <div className="subtitles--container">
            <Typography.Paragraph level={2} type="secondary">
              Para acessar o conteúdo e contribuir com a biblioteca insira seu
              email no campo abaixo e clique em 'Enviar'.
            </Typography.Paragraph>
          </div>

          <Input.Group compact>
            <Input
              allowClear
              style={{ width: "calc(100% - 200px)", textAlign: "left" }}
              type="email"
              defaultValue=""
              placeholder="Insira seu melhor email"
              onPressEnter={onFinish}
              onChange={(e) => setValue(e.target.value)}
            />
            <Button type="primary" onClick={onFinish}>
              Enviar
            </Button>
          </Input.Group>
          {errors && (
            <Typography.Text type="danger">
              Insira um email válido
            </Typography.Text>
          )}
          {!errors && subimitted && (
            <div className="subtitles--container">
              <Typography.Paragraph level={2} type="success">
                Um convite foi enviado para o seu email com as instruções para
                acessar o conteúdo da biblioteca.
              </Typography.Paragraph>
            </div>
          )}
        </Col>
      </Row>
    </main>
  );
};

export default App;
