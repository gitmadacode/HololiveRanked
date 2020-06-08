import Layout from "../components/layout/Layout";
import styled from "@emotion/styled";

const Heading = styled.h1`
  color: red;
`;

export default function Home() {
  return (
    <div>
      <Layout>
        <Heading>Mi primer componente Next</Heading>
      </Layout>
    </div>
  );
}
