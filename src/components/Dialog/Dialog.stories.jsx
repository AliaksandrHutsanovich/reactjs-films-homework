import React from 'react';
import Dialog from './Dialog';

export default {
  component: Dialog,
  title: 'components/Dialog',
};

export const dialogExample = () => (
  <Dialog
    title="Dialog example"
    visible
    onCancel={() => {}}
  >
    <h1>This is just a dialog example</h1>
  </Dialog>
);
