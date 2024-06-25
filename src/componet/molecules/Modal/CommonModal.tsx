import React, { useImperativeHandle } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export interface ICommonModel{
    children:React.ReactNode,

}

export interface ICommonModelRef {
    closeModel: () => void,
    openModel:() => void
}
export const CommonModel = React.forwardRef<ICommonModelRef,ICommonModel>((props,ref) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    useImperativeHandle(ref, () => {
        return {
            closeModel:()=>{closeModal()},
            openModel:()=>{openModal()}
        }
    }, [modalIsOpen]);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Common Modal"
        >
            {props.children}
        </Modal>
    )
})