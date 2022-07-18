import React from "react";

const Modal = (props) => {
  return (
    <React.Fragment>
      <div className={styles.backdrop} />
      <div className={styles.modal}>
        <div>
            {/* context here */}
        </div>
        <footer>
            {/* Close and Order buttons here */}
        </footer>
      </div>
    </React.Fragment>
  );
};

export default Modal;
