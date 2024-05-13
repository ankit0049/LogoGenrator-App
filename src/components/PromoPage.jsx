import React from 'react';

const PromoPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center px-4 py-8">
            <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">Welcome to Ankit Rajput Logo Maker</h1>
            <p className="text-lg text-gray-600 mb-8">Create stunning logos effortlessly!</p>
            <div className="bg-white rounded-lg p-8 shadow-md max-w-md text-center">
                <h2 className="text-xl font-serif font-bold text-gray-800 mb-4">Start Creating</h2>
                <div className="flex flex-col items-center mb-6">
                    <img src="/logo.png" alt="Logo" className="h-16 w-26 mb-2" />
                    <p className="text-sm text-gray-600">Design your logo in minutes</p>
                </div>
                <div className="flex flex-col items-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500 mb-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 10a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm3-3a1 1 0 100-2 1 1 0 000 2zm0 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm text-gray-600">Wide range of customizable templates</p>
                </div>
                <div className="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500 mb-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 10a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm3-3a1 1 0 100-2 1 1 0 000 2zm0 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm text-gray-600">High-quality graphics and icons</p>
                </div>
            </div>
            <footer className="text-center mt-8 text-sm text-gray-600">&copy; 2024 Ankit Rajput Logo Maker. All rights reserved.</footer>
        </div>
    );
}

export default PromoPage;
