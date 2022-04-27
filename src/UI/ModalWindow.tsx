import React, { FC } from 'react';

interface ModalWindowProps { 
    visible: boolean
    setVisible: (value: boolean) => void
}


const ModalWindow: FC<ModalWindowProps> = ({ children, visible, setVisible }) => {

    const root = ['myModal']
    if (visible) {
        root.push('active')
    } 

    return (
        <div onClick={() => setVisible(false)} className={root.join(' ')}>
            <div className="myModalContent" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;