import { useState, useEffect } from "react";

import Button from "../../UI/Button/Button";
import "./modalNotice.scss";

const ModalNotice = ({ action, isModalOpen, modalController, children }) => {
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isModalOpen]);
    if (!isModalOpen) {
        return null;
    }

    return (
        <div className="modal-notice">
            <div className="modal-notice__dialog">
                <div className="modal-notice__header">
                    <div onClick={modalController} className="modal-notice__icon_close">
                        ×
                    </div>
                </div>
                <div className="modal-notice__content">{children}</div>
                <div className="modal-notice__actions">
                    <Button onClick={action}>Ок</Button>
                    <Button onClick={modalController}>Отмена</Button>
                </div>
            </div>
        </div>
    );
};

export default ModalNotice;
