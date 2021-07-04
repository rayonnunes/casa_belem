import styled from "styled-components";
import Button from "components/CustomButtons/Button.js";

export const Container = styled.div`
  display: flex;
  margin: 2.5rem 0;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TitleButton = styled(Button)`
  width: 16rem;
  padding: 1.4rem 0;
  margin-top: 2.8rem;
  font-size: 18pt;
  font-weight: 600;
  background: #9c27b0;
  border-radius: 1rem;
  &:hover {
    background: #f44336;
  }
`;
