'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const CreateBoothForm = () => {
  const [boothName, setBoothName] = useState('');
  const [boothDescription, setBoothDescription] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const router = useRouter();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles(files);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    setUploadedFiles(files);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-sm p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-3">
            Create Booth
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Provide your booth details, upload branding assets, add products,
            <br />
            & enter contact information to set up your virtual presence.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* Booth Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Booth Name
            </label>
            <input
              type="text"
              placeholder="Enter Booth Name"
              value={boothName}
              onChange={(e) => setBoothName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors"
            />
          </div>

          {/* Upload Branding */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Branding
            </label>
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-gray-400 transition-colors cursor-pointer"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => {
                const fileInput = document.getElementById('file-upload') as HTMLInputElement;
                fileInput?.click();
              }}
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 mb-4">
                  <svg
                    className="w-full h-full text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 font-medium mb-1">
                  Drop files here or click to upload
                </p>
                <p className="text-sm text-gray-500">
                  Supported Files Types: pdf, docx, jpg, png
                </p>
              </div>
              <input
                id="file-upload"
                type="file"
                multiple
                accept=".pdf,.docx,.jpg,.jpeg,.png"
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>
            {uploadedFiles.length > 0 && (
              <div className="mt-3">
                <p className="text-sm text-gray-600">
                  {uploadedFiles.length} file(s) selected
                </p>
              </div>
            )}
          </div>

          {/* Booth Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Booth Description
            </label>
            <textarea
              placeholder="Write Here...."
              value={boothDescription}
              onChange={(e) => setBoothDescription(e.target.value)}
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors resize-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-8">
          <button
            onClick={() => router.push("/booths/create-booth/contact-info")}
            className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBoothForm;