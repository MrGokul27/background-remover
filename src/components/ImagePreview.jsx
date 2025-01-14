import React from "react";
import CompareImage from "react-compare-image";
import "../assets/css/home.css";

const ImagePreview = ({ originalImage, processedImage }) => {
    if (!processedImage || !originalImage) return null;

    return (
        <section className="image-preview-section poppins mt-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="image-comparison">
                            <CompareImage
                                leftImage={originalImage}
                                rightImage={processedImage}
                                sliderLineWidth={2}
                                handleSize={40}
                                sliderLineColor={"#DEC3CC"}
                                className="responsive-comparison"
                            />
                        </div>
                        <a href={processedImage} download="processed-image.png" className="btn download-btn mt-5">
                            Download Image
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImagePreview;
