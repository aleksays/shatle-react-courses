import { createContext } from 'react';

const ModalContext = createContext({
  component: null,
  props: {},
  showModal: () => {},
  hideModal: () => {},
});

const ModalConsumer = ModalContext.Consumer;

export { ModalContext as default, ModalConsumer };
