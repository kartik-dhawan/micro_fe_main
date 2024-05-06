import React from "react";
import ReactDOM from "react-dom/client";
import { CustomLayout, Section } from "micro_fe_commons/Components";

import "./index.css";

import { MenuProps } from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem("Search Arbitrage", "1", <PieChartOutlined />),
  getItem("Search Arbitrage", "2", <DesktopOutlined />),
  getItem("SAS", "sub1", <UserOutlined />, [
    getItem("Facebook", "3"),
    getItem("Google", "4"),
    getItem("Tiktok", "5"),
  ]),
  getItem("RSOC", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("User", "9", <FileOutlined />),
];

const App = () => (
  <div className="container">
    <CustomLayout items={items}>
      <Section />
    </CustomLayout>
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
