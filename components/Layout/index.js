import Navbar from "../Navbar";
import Footer from "../Footer";
import GlobalStyles from "../../styles/global";

import { Container, Content } from "./styles";

const Layout = props => (
  <Container>
    <Navbar />
    <Content>{props.children}</Content>
    <Footer />
    <GlobalStyles />
  </Container>
);

export default Layout;
