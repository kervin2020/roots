
import React, { useState } from 'react';
import { uploadImage } from '../lib/utils';

export default function AiTool() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsLoading(true);
    try {
      const result = await uploadImage(selectedFile);
      setResultImage(result.url);
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const downloadImage = () => {
    if (!resultImage) return;

    const link = document.createElement('a');
    link.href = resultImage;
    link.download = 'transformed-space.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="ai-tool-container">
      <input type="file" onChange={handleFileSelect} accept="image/*" />
      <button onClick={handleUpload} disabled={!selectedFile || isLoading}>
        {isLoading ? 'Processing...' : 'Transform Space'}
      </button>
      {resultImage && (
        <div className="result-container">
          <img src={resultImage} alt="Transformed space" />
          <button onClick={downloadImage}>Download Result</button>
        </div>
      )}
    </div>
  );
}
