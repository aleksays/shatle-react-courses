import { ModalConsumer } from './modalContext';

export default function ModalRoot() {
  return (
    <ModalConsumer>
      {({ component: Component, props }) => (
        Component ? <Component {...props} /> : null
      )}
    </ModalConsumer>
  );
}