import Layout from "../components/layout/Layout";
import styled from "@emotion/styled";

const Heading = styled.h1`
  color: red;
`;

export default function Login() {
  return (
    <div>
      <Layout>
        <Heading>Login</Heading>
      </Layout>
    </div>
  );
}
