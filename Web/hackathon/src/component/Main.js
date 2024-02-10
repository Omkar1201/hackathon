import React, { useContext, useRef, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context/Appcontext';

export default function Main() {
    // State and context initialization
    const { isuploadClicked, setisuploadClicked } = useContext(AppContext);
    const fileInputRef = useRef(null);
    const [image, setImage] = useState('');

    // Reset upload state on component mount
    useEffect(() => {
        setisuploadClicked(false);
    }, []);

    // Function to handle file selection
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setisuploadClicked(true);
        setImage(file);
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    // Function to handle drop event
    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        setisuploadClicked(true);
        setImage(file);
    };

    return (
        <div className='flex flex-col gap-10'>
            <div className='text-center text-4xl'>
                Intelligent Crop Disease Prediction System
            </div>
            <div className='my-24 flex flex-col gap-10 items-center' onDragOver={handleDragOver} onDrop={handleDrop}>
                <div className={`border w-[20rem] min-h-[10rem] ${isuploadClicked ? 'block' : 'hidden'}`}>
                    {image && <img src={URL.createObjectURL(image)} alt='Uploaded Image' />}
                </div>
                <div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                        accept='image/*'
                    />
                    {!isuploadClicked ? (
                        <button
                            className={`border cursor-pointer hover:bg-green-600 w-[20rem] rounded-2xl bg-green-500 text-white flex justify-center items-center h-[5rem] text-2xl font-semibold`}
                            onClick={handleButtonClick}
                        >
                            Select Image
                        </button>
                    ) : (
                        <NavLink to='/diseaseInfo'>
                            <button className={`border cursor-pointer hover:bg-green-600 w-[20rem] rounded-2xl bg-green-500 text-white flex justify-center items-center h-[5rem] text-2xl font-semibold `}>
                                Upload Image
                            </button>
                        </NavLink>
                    )}
                </div>
            </div>
        </div>
    );
}
