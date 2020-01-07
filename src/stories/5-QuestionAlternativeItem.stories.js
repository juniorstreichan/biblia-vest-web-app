import React from 'react';
import QuestionAlternativeItem from '../theme/components/QuestionAlternativeItem';

export default {
  title: 'Question Alternative',
};

export const base = () => (
  <div>
    <QuestionAlternativeItem />
    <hr />
    <span>Correct</span>
    <QuestionAlternativeItem correct />
  </div>
);
