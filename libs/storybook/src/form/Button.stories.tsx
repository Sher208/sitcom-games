import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Button, { styles } from './Button';

const Story: ComponentMeta<typeof Button> = {
  component: Button,
  title: 'Button',
};
export default Story;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  className: styles.primary,
};

export const Success = Template.bind({});
Success.args = {
  children: 'Success',
  className: styles.success,
};

export const Error = Template.bind({});
Error.args = {
  children: 'Error',
  className: styles.error,
};
export const Warning = Template.bind({});
Warning.args = {
  children: 'Warning',
  className: styles.warning,
};
export const Info = Template.bind({});
Info.args = {
  children: 'Info',
  className: styles.info,
};
