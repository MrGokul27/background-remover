import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const FileUpload = ({ onUpload, processedImage }) => {
    const [preview, setPreview] = useState(null);

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setPreview(URL.createObjectURL(file));
        onUpload(file);
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <section className="file-upload-section poppins">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        {/* Hide upload section if the processed image exists */}
                        {!processedImage && (
                            <div
                                {...getRootProps()}
                                style={{
                                    border: "2px dashed #2F0A2D",
                                    padding: "50px",
                                    textAlign: "center",
                                    cursor: "pointer",
                                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
                                    borderRadius: "10px",
                                }}

                            >
                                <input {...getInputProps()} />
                                <p className="upload-text mb-0">
                                    Drag & Drop an Image here, or Click to Select
                                </p>
                            </div>
                        )}
                        {preview && (
                            <div>
                                <div className="image-file-upload">
                                    <img
                                        src={preview}
                                        alt="Preview"
                                        style={{ maxWidth: "100%" }}
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FileUpload;
