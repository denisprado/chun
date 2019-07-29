import styled from "styled-components";

export const Column = styled.div`
  flex: ${props => (props.col ? props.col : 12)};
`;
