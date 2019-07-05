import React from 'react';

import styled from 'styled-components';
import Colors, { ColorStatus } from '../Colors';

interface Props {
  status?: ColorStatus;
}
const QuestionItemPanel = styled.div.attrs((props: Props | any) => ({ ...props }))`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${Colors.gray};
  box-shadow: 0px 4px 4px ${Colors.shadow};

  margin: 10px 5px;
  font-weight: 600;
  font-family: sans-serif;

  padding: 5px;
  border: 4px solid ${/* props => Colors.status[props.status] || */ Colors.gray};
  border: 4px solid ${Colors.gray};
  border-radius: 10px;

  :active {
    box-shadow: 0px 1px 1px ${Colors.shadow};
  }

  min-height: 40px;
`;

const QuestionContent = styled.div`
  flex: 1;
  justify-content: center;
  font-size: 12px;
  align-items: center;
  padding: 5px;
  background-color: ${Colors.light};
  border-radius: 5px;
  margin-right: 3px;
  min-height: 30px;
  text-align: justify;
`;

const QuestionAlternativeItem: React.FC<Props> = ({ status, children }) => {
  return (
    <QuestionItemPanel status={status}>
      <QuestionContent style={{ flex: 10 }}>{children}</QuestionContent>
    </QuestionItemPanel>
  );
};

export default QuestionAlternativeItem;
