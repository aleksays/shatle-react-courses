import { useContext } from 'react';
import ModalContext from '../context/modal/modalContext';

const useModal = () => (useContext(ModalContext));

export default useModal;