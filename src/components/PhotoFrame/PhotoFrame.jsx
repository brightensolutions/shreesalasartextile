import React, { useRef, useEffect, useState } from 'react';
import papaimg from "../Images/Screenshot 2024-11-09 104809.png";

function PhotoFrame() {
    const canvasRef = useRef(null);
    const [images, setImages] = useState({ P1: "", A1: "", P2: "", A2: "" });

    const handleImageUpload = (e, key) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImages((prevImages) => ({ ...prevImages, [key]: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const frame = new Image();
        frame.src = papaimg;

        frame.onload = () => {
            // Clear canvas before drawing
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // Draw the frame image
            ctx.drawImage(frame, 0, 0, canvas.width, canvas.height);

            Object.keys(images).forEach((key) => {
                if (images[key]) {
                    const img = new Image();
                    img.src = images[key];

                    img.onload = () => {
                        const positions = {
                            P1: [20, 50],  // Adjust position for P1
                            A1: [150, 50], // Adjust position for A1
                            P2: [280, 50], // Adjust position for P2
                            A2: [410, 50], // Adjust position for A2
                        };

                        const [x, y] = positions[key];

                        ctx.save();
                        ctx.beginPath();
                        // Define clipping area for each text section (P1, A1, P2, A2)
                        ctx.rect(x, y, 100, 150);
                        ctx.clip();

                        // Draw the image into the clipped area
                        ctx.drawImage(img, x, y, 100, 150); // Size of the image
                        ctx.restore();
                    };
                }
            });
        };
    }, [images]);

    return (
        <div className="container">
            <h1>Bonne fête PAPA</h1>
            <canvas ref={canvasRef} width={600} height={200} />
            <div className="upload-container">
                {["P1", "A1", "P2", "A2"].map((key, index) => (
                    <div key={index}>
                        <label>Upload for {key}:</label>
                        <input type="file" onChange={(e) => handleImageUpload(e, key)} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PhotoFrame;
