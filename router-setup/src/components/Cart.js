import React from "react";

const Cart = ({ selectedItems, removeBtn }) => {
  return (
    <div>
      <h1 className="p-4 text-2xl font-bold text-center">
        Selected item : {selectedItems.length}
      </h1>
      <div>
        {selectedItems.map((selectedItem) => (
          <div key={selectedItem._id} className="flex gap-2 justify-between p-2 m-2">
            <div>
              <p className="text-xl font-bold">{selectedItem.name}</p>
            </div>
            <button onClick={()=>removeBtn(selectedItem)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
