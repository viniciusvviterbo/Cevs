import { Card, Button, Row, Col, Form, Input } from "antd";
import { FieldNumberOutlined /*, GithubOutlined */ } from "@ant-design/icons";
import logo from "../assets/logo.png";
import React from "react";
import "../index.css";

export default class App extends React.Component {
  state = {
    show_info: true,
    show_calc: false,
  };

  form = React.createRef();

  inverte_exibicao = () => {
    const { show_info, show_calc } = this.state;

    this.setState({
      show_info: !show_info,
      show_calc: !show_calc,
    });
  };

  finalizado = () => {};

  render() {
    const { show_info, show_calc } = this.state;
    return (
      <Row justify="center" align="middle" className="row">
        <Col>
          <Card
            bordered={false}
            style={{
              width: 700,
              borderRadius: "8px",
              boxShadow: "1px 1px 1px 2px #ccc",
            }}
          >
            <Row
              style={{ marginTop: "25px", marginBottom: "65px" }}
              justify="center"
            >
              <Col span={4}>
                <img
                  src={logo}
                  alt="logo"
                  style={{ objectFit: "contain", width: "100%" }}
                />
              </Col>
              <Col span={6} className="title">
                Cevs
              </Col>
            </Row>

            {show_info && (
              <>
                <div style={{ color: "#000000" }}>
                  <p>
                    Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta
                    quium dia nois paga. Interessantiss quisso pudia ce receita
                    de bolis, mais bolis eu num gostis. Praesent vel viverra
                    nisi. Mauris aliquet nunc non turpis scelerisque, eget. Suco
                    de cevadiss deixa as pessoas mais interessantis.
                  </p>
                  <p>
                    Mais vale um bebadis conhecidiss, que um alcoolatra
                    anonimis. Si u mundo tá muito paradis? Toma um mé que o
                    mundo vai girarzis! Paisis, filhis, espiritis santis.
                    Detraxit consequat et quo num tendi nada.
                  </p>
                  <p>
                    Casamentiss faiz malandris se pirulitá. Nec orci ornare
                    consequat. Praesent lacinia ultrices consectetur. Sed non
                    ipsum felis. Leite de capivaris, leite de mula manquis sem
                    cabeça. A ordem dos tratores não altera o pão duris.{" "}
                  </p>
                </div>
                <Button onClick={() => this.inverte_exibicao()}>
                  Ir para a calculadora
                </Button>
              </>
            )}

            {show_calc && (
              <>
                <Row style={{ marginBottom: "25px", width: "100%" }}>
                  <Col span={24}>
                    <div className="inputBox">
                      <Input
                        className="input"
                        prefix={<FieldNumberOutlined />}
                        placeholder="Valor aí"
                      />
                    </div>
                  </Col>
                </Row>
                <Row style={{ marginBottom: "25px", width: "100%" }}>
                  <Col span={24}>
                    <div className="inputBox">
                      <Input
                        className="input"
                        prefix={<FieldNumberOutlined />}
                        placeholder="Valor aí"
                      />
                    </div>
                  </Col>
                </Row>
                <Row style={{ marginBottom: "25px", width: "100%"}}>
                  <Col span={24}>
                    <div className="inputBox">
                      <Input
                        className="input"
                        prefix={<FieldNumberOutlined />}
                        placeholder="Valor aí"
                      />
                    </div>
                  </Col>
                </Row>

                <Row justify="space-between">
                  <Button onClick={() => this.inverte_exibicao()}>Info</Button>
                  <Button type="primary" onClick={() => this.finalizado()}>
                    Calcular
                  </Button>
                </Row>
              </>
            )}
          </Card>
        </Col>
      </Row>
    );
  }
}
