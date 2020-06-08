import Layout from "../components/layout/Layout";
import styled from "@emotion/styled";

const Heading = styled.h1`
  color: red;
`;

export default function Populares() {
  return (
    <div>
      <Layout>
        <Heading>Populares</Heading>
      </Layout>
    </div>
  );
}
