import { Layout } from "antd";
import { MenuComponent } from "../Menu/Menu";

const { Header, Content, Footer } = Layout;

interface ILayoutComponent {
  children: React.ReactNode
}

export const LayoutComponent: React.FC<ILayoutComponent> = ({ children }) => {
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <MenuComponent />
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64, height: '100vh' }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: '380' }}
        >
          {children}
        </div>
      </Content>
      {/* <Footer style={{ textAlign: "center", position: "relative", bottom: 0 }}>
        Realizado por Sebastain Ramirez Vasco
      </Footer> */}
    </Layout>
  )
}
