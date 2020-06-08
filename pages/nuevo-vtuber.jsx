import Layout from "../components/layout/Layout";
import styled from "@emotion/styled";

const Heading = styled.h1`
  color: red;
`;

export default function NuevoVtuber() {
  return (
    <div>
      <Layout>
        <Heading>Nuevo Vtuber</Heading>
      </Layout>
    </div>
  );
}
