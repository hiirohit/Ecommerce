import { Button } from '@mui/material';
import React, { useRef, useState } from 'react'
import toast from 'react-hot-toast';
import { FaCloudDownloadAlt, FaSpinner } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { updateProductImageFromDashboard } from '../../../store/actions/updateProductImageFromDashboard';
function ImageUploadForm({setOpen,product}) {
    const fileInputRef = useRef();
    const dispatch = useDispatch();
    const [previewImage,setPreviewImage] = useState(null);
    const [loader,setLoader] = useState(false);
    const [seletedFile,setSelectedFile] = useState(null); 
    const onHandleImageChange = (e) => {
        const file =  e.target.files[0];
        if(file && ["image/jpeg","image/jpg","image/png"].includes(file.type)) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
            setSelectedFile(file);
        }else{
            toast.error("Please select a valid image file(.jpeg, .png, .jpg")
            setPreviewImage(null)
            setSelectedFile(null)
        }
    }
    const addNewImageHandler = async(e) => {
            e.preventDefault();
            console.log("selected File",seletedFile);
            if(!seletedFile){
                toast.error("Please select an image before saving.");
                return;
            }else{
                const formData = new FormData();
                formData.append("image",seletedFile)
                dispatch(updateProductImageFromDashboard(formData, product.id, toast, setLoader, setOpen));
            }
    };
    const handleClearImage = () => {
        setPreviewImage(null)
        setSelectedFile(null)
        fileInputRef.current.value = null;
    } 
  return (
    <div className='py-5 relative h-full'>
        <form className='space-y-4' onSubmit={addNewImageHandler}>
            <div className='flex flex-col gap-4 w-full'>
                <label className='flex items-center gap-2 cursor-pointer text-blue-500 border border-dashed border-blue-600 rounded-md p-3 w-full justify-center'>
                    <FaCloudDownloadAlt size={24}/>
                    <span>Upload Product Image </span>
                    <input 
                        type="file"
                        ref={fileInputRef}
                        onChange={onHandleImageChange}
                        className='hidden'
                        accept='.jpeg, .jpg, .png' 
                    />
                </label>
                {previewImage && (
                    <div>
                        <img src={previewImage} alt="image Preview" 
                            className='h-60 rounded-md mb-2'/>
                            <button 
                                onClick={handleClearImage}
                                type='button'
                                className='bg-red-600 text-white px-2 py-1 rounded-md '
                                >
                                    Clear Image
                            </button>
                    </div>
                )}
            </div>
            <div className='flex w-full justify-between items-center absolute bottom-14'>
                                        <Button 
                                            disabled={loader}
                                            onClick={() => setOpen(false)}
                                            variant='outlined'
                                            className='text-white py-10 text-sm font-medium'
                                            >
                                                cancel
                                        </Button>
                                        <Button
                                            disabled={loader}
                                            type='submit'
                                            variant='contained'
                                            color='primary'
                                            className='bg-blue-600 text-white py-10 text-sm font-medium'
                                            >
                                                { loader ? (
                                                    <div className='flex gap-2 items-center'>
                                                        <FaSpinner/> Loading...
                                                    </div>
                                                ) : (
                                                    "Update"
                                                )}
                                        </Button>
                                    </div>
        </form>
    </div>
  )
}

export default ImageUploadForm