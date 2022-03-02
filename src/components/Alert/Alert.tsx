import React, {FC} from 'react';
import { Wrapper, Text, Circle } from './styles';

const Alert: FC = ({ children }) => {
  return (
    <Wrapper>
      <Circle>!</Circle>
      <Text>{children}</Text>
    </Wrapper>
  );
};

export default Alert;
