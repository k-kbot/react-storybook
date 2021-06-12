import React from 'react'
import Square from './Square'

export default {
  title: 'Components/Square',
  component: Square,
}

const Template = args => <Square {...args} />;

export const FilledWithNull = Template.bind({});
FilledWithNull.args = {
  value: null,
  onClick: () => {},
};

export const FilledWithX = Template.bind({});
FilledWithX.args = {
  value: 'X',
  onClick: () => {},
};
// export const Sample1 = () => Template.bind({});
// Sample1.args = {

// }
