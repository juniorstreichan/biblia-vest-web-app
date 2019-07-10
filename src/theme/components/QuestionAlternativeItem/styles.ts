import styled from 'styled-components';
import Colors from '../../Colors';
import BreakPoints from '../../Breakpoints';

export interface QuestionItemProps {
  correct?: boolean;
}

export const QuestionItemPanel = styled.div.attrs((props: QuestionItemProps | any) => ({
  ...props,
}))`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${Colors.light};
  box-shadow: 0px 4px 4px ${Colors.shadow};
  transition: 0.4s;

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
