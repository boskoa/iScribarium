import { styled } from "styled-components";

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  background-color: red;
  width: 100%;
`;

function Footer() {
  return <FooterContainer>FOO TER</FooterContainer>;
}

export default Footer;
