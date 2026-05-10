import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import React from "react";
import { FaExclamationTriangle, FaTimes } from "react-icons/fa";

function DeleteModal({
  open,
  setOpen,
  title,
  onDeleteHandler,
  loader,
}) {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-50"
    >
      {/* Backdrop */}
      <DialogBackdrop className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity" />

      {/* Modal Container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <DialogPanel className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left shadow-2xl transition-all">
          
          {/* Close Button */}
          <button
            disabled={loader}
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 text-gray-400 transition hover:text-gray-600"
          >
            <span className="sr-only">Close</span>
            <FaTimes className="h-5 w-5" />
          </button>

          {/* Icon + Content */}
          <div className="flex flex-col items-center text-center">
            
            {/* Warning Icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
              <FaExclamationTriangle className="text-3xl text-red-600" />
            </div>

            {/* Title */}
            <DialogTitle
              as="h3"
              className="mt-4 text-xl font-bold text-gray-800"
            >
              {title}
            </DialogTitle>

            {/* Message */}
            <p className="mt-2 text-sm text-gray-500">
              Are you sure you want to delete this item?
              This action cannot be undone.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-3">
            <button
              disabled={loader}
              type="button"
              onClick={() => setOpen(false)}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              disabled={loader}
              type="button"
              onClick={onDeleteHandler}
              className="w-full rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700 disabled:opacity-50"
            >
              {loader ? "Deleting..." : "Delete"}
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default DeleteModal;