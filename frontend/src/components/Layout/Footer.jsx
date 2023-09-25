import { styled } from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.header.bg};
  opacity: 0.7;
  width: 100%;
  height: 5vh;
  position: absolute;
  bottom: 0;
`;

function Footer() {
  return <FooterContainer>Iskrina enciklopedija</FooterContainer>;
}

export default Footer;
