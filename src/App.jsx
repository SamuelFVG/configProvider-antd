import React from "react";
import { Button, ConfigProvider } from "antd";
import { Container } from "./Styles";
import { globalTheme } from "./Styles/Themes";
import ThemesComponent from "./Styles/ThemesComponent";

export default function App() {
  return (
    <ConfigProvider theme={globalTheme}>
      <Container>
        <Button type="primary">Hello world</Button>
        <div>Teste</div>
      </Container>
    </ConfigProvider>
  );
}
