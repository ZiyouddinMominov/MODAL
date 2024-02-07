import styles from "./index.module.css";
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalWrapper} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {children}
        <button className={styles.closeBtn} onClick={onClose}>
          Close
        </button>
        <button className={styles.okBtn} onClick={onClose}>
          Yes
        </button>
      </div>
    </div>
  );
}

export default Modal;
