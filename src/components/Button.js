import styled from "styled-components";

import { color, spacing, borderRadius, fontFamily, fontSize } from "../helpers/constants";

const Button = styled.button`
  cursor: pointer;
  color: ${color.white};
  font-family: ${fontFamily.sansSerif};
  font-size: ${fontSize.large};
  background-color: #a9a9a9;
  border-radius: ${borderRadius.large};
  padding: ${spacing.small} ${spacing.large};
`;

export default Button;
