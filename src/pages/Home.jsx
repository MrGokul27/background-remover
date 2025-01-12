import React, { useState } from "react";
import FileUpload from "../components/FileUpload";
import ImagePreview from "../components/ImagePreview";
import { removeBackground } from "../api";
import "../assets/css/home.css";
import logoImage from "../assets/images/logo-bg-remove.png";

const Home = () => {
    const [originalImage, setOriginalImage] = useState(null);
    const [processedImage, setProcessedImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileUpload = async (file) => {
        setLoading(true);
        setOriginalImage(URL.createObjectURL(file));
        try {
            const result = await removeBackground(file);
            setProcessedImage(result);
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="home-section p-3 poppins">
            <div className="container-fluid py-md-5 py-3">
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-12 d-flex">
                                <div className="">
                                    <img src={logoImage} alt="" className="img-fluid logo-image me-3" />
                                </div>
                                <div className="">
                                    <h2 className="main-heading">Remove Image <span className="section-heading-underline">backgrounds</span></h2>
                                    <p className="main-content">100% automatically with one click</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8 d-md-flex justify-content-around align-items-center">
                                <div className="file-upload-container">
                                    <FileUpload onUpload={handleFileUpload} processedImage={processedImage} />
                                    {loading && <p className="text-center mt-3">Processing...</p>}
                                </div>
                                <div className="image-preview-container">
                                    <ImagePreview originalImage={originalImage} processedImage={processedImage} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
