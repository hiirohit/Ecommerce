import React from 'react'
import {Dialog, DialogBackdrop, DialogPanel, DialogTitle} from "@headlessui/react"
import {RxCross1} from "react-icons/rx"
import { FaExclamationTriangle, FaTimes } from 'react-icons/fa'
function DeleteModal({ onDeleteHandler, loader, open, setOpen, title}) {
  return (
    <>
    <Dialog open={open}  onClose={() => setOpen(false)} className='relative z-50' >
        <DialogBackdrop
            transition 
            className="fixed inset-0 bg-gray-500 transition-opacity bg-opacity-75 duration-500 ease-in-out data-closed:opacity-0"
            />

            <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
                <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
                    <DialogPanel
                        transition 
                        className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl"
                        >
                            <div className='absolute right-0 top-0 hidden pr-4 pt-4 sm:block'>
                                <button
                                    disabled={loader}
                                    type='button'
                                    onClick={() => setOpen(false)}
                                    className='rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none'
                                    >
                                        <span className='sr-only'>Close</span>
                                        <FaTimes className='h-6 w-6'/>
                                </button>
                            </div>
                            <div className='sm:flex sm:items-start'>
                                <div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-50'>
                                    <FaExclamationTriangle className='text-red-600'/>
                                </div>
                                <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
                                    <DialogTitle
                                        as='h3'
                                         className="text-base font-semibold font-montserrat leading-6 text-banner-color1"
                                         >
                                            {title}
                                    </DialogTitle>
                                    <div className='mt-2'>
                                        <p className='text-sm text-banner-color2 font-montserrat'>
                                            Are you sure you want to delete!!?
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-5 sm:mt-4 sm:flex sm:flex-row-reverse'>
                                <button className='inline-flex w-full bg-red-500 justify-center rounded-md px-3 py-2 text-sm'>
                                    {loader ? "Loading..": "Delete"}
                                </button>
                                <button
                                    disabled={loader}
                                    type='button'
                                    onClick={() => setOpen(false)}
                                    className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold'
                                    >
                                        Cancel
                                </button>
                            </div>
                    </DialogPanel>
                </div>
        </div>
    </Dialog>
    </>
    )
}

export default DeleteModal