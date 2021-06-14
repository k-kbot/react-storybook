import React from 'react'
import Board from './Board'

export default {
  title: 'Components/Board',
  component: Board,
}

const Template = args => <Board {...args} />;

export const Default = Template.bind({});
Default.args = {
  squares: Array(9).fill(null),
  onClick: () => {},
};

export const FilledWithX = Template.bind({});
FilledWithX.args = {
  squares: Array(9).fill('X'),
  onClick: () => {},
};

export const FilledWithO = Template.bind({});
FilledWithO.args = {
  squares: Array(9).fill('O'),
  onClick: () => {},
};

export const FilledWithDelta = Template.bind({});
FilledWithDelta.args = {
  squares: Array(9).fill('△'),
  onClick: () => {},
};
