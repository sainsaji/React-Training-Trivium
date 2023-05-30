import "./App.css";
import Content from "./Component/Content";
import Header from "./Component/Header";
import Menu from "./Component/Menu";
import Footer from "./Component/Footer";
import RoutingConf from "./RoutingConf";

function App() {
  return (
    <div>
      {/* <Menu></Menu>
      <Header heading="Welcome Sain"></Header>
      <Content></Content>
      <Footer></Footer> */}
      <RoutingConf></RoutingConf>
    </div>
  );
}

export default App;
