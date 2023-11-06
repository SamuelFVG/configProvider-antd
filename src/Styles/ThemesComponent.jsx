import React from "react";
import { ConfigProvider } from "antd";

export default function ThemesComponent() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00b96b",
          borderRadius: 2,
          colorBgContainer: "#f6ffed",
        },
      }}
    />
  );
}
