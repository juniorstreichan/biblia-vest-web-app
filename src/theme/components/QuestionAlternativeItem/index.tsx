import React, { useMemo, useState } from 'react';

import TextArea from '../TextArea';
import ToggleSwitch from '../ToggleSwitch';
import { QuestionItemPanel, QuestionItemProps } from './styles';

const QuestionAlternativeItem: React.FC<QuestionItemProps> = ({ correct }) => {
  const [checked, setChecked] = useState(correct);
  const [text, setText] = useState('');

  const Switch = useMemo(
    () => <ToggleSwitch checked={checked} onChange={() => setChecked(!checked)} />,
    [checked],
  );

  const TextBox = useMemo(
    () => (
      <TextArea
        minLength={5}
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
