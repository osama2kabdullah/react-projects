import { Button, Modal } from 'flowbite-react';
import React from 'react';

const MakeAdminModal = ({handleDelete, modal, setModal}) => {
    return (
        <React.Fragment>
        <Modal show={modal} size="md" popup={true} onClose={() => setModal(false)}>
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 text-purple-700 h-16 mx-auto">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
</svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure?
              </h3>
              <div className="flex justify-center gap-4">
                <Button color="purple" 
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

export default MakeAdminModal;