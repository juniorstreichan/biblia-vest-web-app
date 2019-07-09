import React, { useState, useMemo } from 'react';
import styled from 'styled-components';

import Colors from '../Colors';
import TextArea from './TextArea';
import ToggleSwitch from './ToggleSwitch';
import BreakPoints from '../Breakpoints';

interface Props {
  correct?: boolean;
}

const QuestionItemPanel = styled.div.attrs((props: Props | any) => ({ ...props }))`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${Colors.light};
  box-shadow: 0px 4px 4px ${Colors.shadow};

  @media screen and (max-width: ${BreakPoints.mobile.max}px) {
    flex-direction: column;
  }

  margin: 10px 5px;
  font-weight: 600;
  font-family: sans-serif;

  padding: 5px;
  border: 4px solid ${props => (props.isCorrect ? Colors.status.success : Colors.gray)};
  border-radius: 10px;

  :active {
    box-shadow: 0px 1px 1px ${Colors.shadow};
  }

  min-height: 40px;

  header {
    flex: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    font-size: 10px;
    text-align: center;
    margin: 5px;
    align-items: center;
  }

  .content {
    display: flex;
    flex: 9;
    /* background: red; */
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
  }
`;

const QuestionAlternativeItem: React.FC<Props> = ({ correct }) => {
  const [checked, setChecked] = useState(correct);
  const [text, setText] = useState('');

  const Switch = useMemo(
    () => <ToggleSwitch checked={checked} onChange={() => setChecked(!checked)} />,
    [checked],
  );

  const TextBox = useMemo(
    () => (
      <TextArea
        value={text}
        onChange={e => setText(e.target.value)}
        rows={3}
        // style={{ minWidth: '90%', maxWidth: '95%' }}
        style={{ minWidth: '95%' }}
        placeholder="Digite a alternativa aqui"
      />
    ),
    [text],
  );

  return (
    <QuestionItemPanel isCorrect={checked}>
      <header>
        {/* <span>Resposta correta</span> */}
        {Switch}
      </header>
      <div className="content">
        {TextBox}
        <span>teste testeteste</span>
      </div>
    </QuestionItemPanel>
  );
};

export default QuestionAlternativeItem;
