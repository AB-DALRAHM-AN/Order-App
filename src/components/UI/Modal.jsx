import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export const Modal = ({ children, className = "", open, onClose }) => {
  const dialog = useRef();
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    }

    if (!open) {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    
      <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
        {children}
      </dialog>
    ,
    document.getElementById("modal")
  );
};
