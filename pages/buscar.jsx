import Layout from "../components/layout/Layout";
import styled from "@emotion/styled";

const Heading = styled.h1`
  color: red;
`;

export default function Buscar() {
  return (
    <div>
      <Layout>
        <Heading>Buscar</Heading>
      </Layout>
    </div>
  );
}
