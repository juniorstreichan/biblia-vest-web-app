import React from 'react';
import Button from './Button';
import Tag from './Tag';
import InputText from './InputText';
import TextArea from './TextArea';
import QuestionAlternativeItem from './QuestionAlternativeItem';
import ToggleSwitch from './ToggleSwitch';

const ShowCase = () => {
  return (
    <div>
      <hr />
      <h3>BUTTONS</h3>
      <br />

      <Button>default</Button>
      <Button status="warning">warning</Button>
      <Button status="primary">primary</Button>
      <Button status="danger">danger</Button>
      <Button status="success">success</Button>
      <hr />
      <Button outline>default</Button>
      <Button outline status="warning">
        warning
      </Button>
      <Button outline status="primary">
        primary
      </Button>
      <Button outline status="danger">
        danger
      </Button>
      <Button outline status="success">
        success
      </Button>

      <hr />
      <h3>TAG</h3>
      <br />
      <Tag action={() => alert('teste')}>categoria</Tag>
      <Tag>categoria</Tag>
      <hr />
      <h3>TEXTAREA</h3>
      <br />
      <TextArea placeholder="Digite a pergunta aqui" />
      <hr />
      <h3>QUESTION ITEM</h3>
      <br />
      <ToggleSwitch />
      <hr />
      <h3>QUESTION ITEM</h3>
      <br />
      <QuestionAlternativeItem />
      <QuestionAlternativeItem correct />
      <br />
      <hr />
      <h3>INPUT</h3>
      <br />
      <InputText type="text" value="teste TESTE" />
      <pre>{`<InputText type="text" value="teste TESTE" />`}</pre>

      <br />
      <InputText type="color" />
      <pre>{`<InputText type="color" />`}</pre>
      <br />
      <InputText type="date" />
      <pre>{`<InputText type="date" />`}</pre>
      <br />
      <InputText type="datetime-local" />
      <pre>{`<InputText type="datetime-local" />`}</pre>
      <br />
      <InputText type="email" />
      <pre>{`<InputText type="email" />`}</pre>
      <br />
      <InputText type="file" />
      <pre>{`<InputText type="file" />`}</pre>
      <br />
      <InputText type="month" />
      <pre>{`<InputText type="month" />`}</pre>
      <br />
      <InputText type="number" />
      <pre>{`<InputText type="number" />`}</pre>
      <br />
      <InputText type="password" />
      <pre>{`<InputText type="password" />`}</pre>
      <br />
      <InputText type="range" />
      <pre>{`<InputText type="range" />`}</pre>
      <br />
      <InputText type="search" />
      <pre>{`<InputText type="search" />`}</pre>
      <br />
      <InputText type="tel" />
      <pre>{`<InputText type="tel" />`}</pre>
      <br />
      <InputText type="text" />
      <pre>{`<InputText type="text" />`}</pre>
      <br />
      <InputText type="time" />
      <pre>{`<InputText type="time" />`}</pre>
      <br />
      <InputText type="url" />
      <pre>{`<InputText type="url" />`}</pre>
      <br />
      <InputText type="week" />
      <pre>{`<InputText type="week" `}</pre>
      <br />
    </div>
  );
};

export default ShowCase;
