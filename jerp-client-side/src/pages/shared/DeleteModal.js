import { Button, Modal } from 'flowbite-react';
import React from 'react';

const DeleteModal = ({setModal, modal, handleDelete}) => {
    return (
        <React.Fragment>
        <Modal show={modal} size="md" popup={true} onClose={() => setModal(false)}>
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 text-red-700 h-16 mx-auto">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
</svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure?
              </h3>
              <div className="flex justify-center gap-4">
                <Button color="failure" 
                onClick={()=>{
                    setModal(false)
                    handleDelete(modal);
                }}
                >
                  Yes, I'm sure
                </Button>
                <Button color="gray" 
                onClick={()=>setModal(false)}
                >
                  No, cancel
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    );
};

export default DeleteModal;