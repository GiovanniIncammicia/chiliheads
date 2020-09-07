import React, { memo } from 'react';
import styled from 'styled-components';
import { FireIcon } from '../Icons';

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection = 'row' }) => flexDirection };
  justify-content: ${({ justifyContent = 'center' }) => justifyContent };
  align-items: ${({ alignItems = 'center' }) => alignItems };
  width: ${({ width }) => width ? width : 'auto'};
  height: ${({ height }) => height ? height : 'auto'};
  padding: ${({ padding }) => padding ? padding : '0'};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }) => columns ? columns : 'none'};
  grid-row-gap: ${({ rowGap }) => rowGap ? rowGap : '0'};
  grid-column-gap: ${({ columnGap }) => columnGap ? columnGap : '0'};
  padding: ${({ padding }) => padding ? padding : '0'};
  width: ${({ width }) => width ? width : 'auto'};
  justify-items: center;
`;

export const Input = styled.input`
  padding-left: 10rem;
  border-radius: 5rem 0 0 5rem;
  width: ${({ width = 'auto' }) => width};
  height: 100%;
`;

const HeatLevelStyled = styled.div`
  display: inline-flex;
`;
const FireIconStyled = styled(({ show, white, ...props }) => <FireIcon {...props} />)`
  color: ${({ show, white }) => (show && !white) ? 'var(--white)' : (!show && white) ? 'var(--border-gray)' : 'var(--disabled-main)'};
`;

const numbers = "12345";
export const HeatLevel = memo(({ heat, name, white = false, ...props }) => (
  <HeatLevelStyled {...props}>
    { [...numbers.substring(0, heat)].map(i => <FireIconStyled key={`heatLevel_${name}_${i}`} show={true} { ...{ white } } />)}
    { [...numbers.substring(heat, numbers.length)].map(i => <FireIconStyled key={`heatLevel_${name}_${i}`} show={false} { ...{ white } } />)}
  </HeatLevelStyled>
));