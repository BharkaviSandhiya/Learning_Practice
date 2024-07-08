import React from 'react';
import Card from './Card';

export default {
  title: 'Example/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Shoes',
  description: 'This is a description of the card.',
};
