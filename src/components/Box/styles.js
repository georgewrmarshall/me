import styled from "styled-components";
import { space } from '@styled-system/space';
import { flexbox } from '@styled-system/flexbox';
import { grid } from '@styled-system/grid';
import { lightTheme } from "../themes";

export const StyledBox = styled.div`
  ${space};
  ${flexbox};
  ${grid};
`;

StyledBox.defaultProps = {
  theme: lightTheme
}
