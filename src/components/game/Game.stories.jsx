import React from 'react'
import Game from './Game'

export default {
  title: 'Components/Game',
  component: Game,
}

const Template = args => <Game {...args} />;

export const Default = Template.bind({});
Default.args = {
  history: [{ squares: Array(9).fill(null) }],
  setHistory: () => {},
  stepNumber: 0,
  setStepNumber: () => {},
};

export const Draw = Template.bind({});
Draw.args = {
  history: [
    { squares: Array(9).fill(null) },
    { squares: ['X', null, null, null, null, null, null, null, null] },
    { squares: ['X', 'O', null, null, null, null, null, null, null] },
    { squares: ['X', 'O', 'X', null, null, null, null, null, null] },
    { squares: ['X', 'O', 'X', 'O', null, null, null, null, null] },
    { squares: ['X', 'O', 'X', 'O', null, 'X', null, null, null] },
    { squares: ['X', 'O', 'X', 'O', 'O', 'X', null, null, null] },
    { squares: ['X', 'O', 'X', 'O', 'O', 'X', 'X', null, null] },
    { squares: ['X', 'O', 'X', 'O', 'O', 'X', 'X', null, 'O'] },
    { squares: ['X', 'O', 'X', 'O', 'O', 'X', 'X', 'X', 'O'] },
  ],
  setHistory: () => {},
  stepNumber: 9,
  setStepNumber: () => {},
};
