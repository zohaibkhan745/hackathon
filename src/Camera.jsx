import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const videoConstraints = {
  width: 540,
  facingMode: "environment",
};

const ppi = 96; // Approximate default value for screens (replace with actual PPI if known)

const Camera = ({ setDistanceInInches }) => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();
  const [points, setPoints] = useState([]);

  const capturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc); // For debugging
  };

  const handleCanvasClick = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPoints((prevPoints) => {
      const newPoints = [...prevPoints, { x, y }];
      if (newPoints.length > 2) newPoints.shift(); // Keep only the last 2 points
      return newPoints;
    });
  };

  const calculateDistance = (point1, point2) => {
    if (!point1 || !point2) return 0;
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    return Math.sqrt(dx * dx + dy * dy).toFixed(2);
  };

  const convertPixelsToInches = (pixels) => {
    return (pixels / ppi).toFixed(2);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw points
    points.forEach((point) => {
      ctx.beginPath();
      ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI);
      ctx.fillStyle = "red";
      ctx.fill();
    });

    // Draw line if two points exist
    if (points.length === 2) {
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      ctx.lineTo(points[1].x, points[1].y);
      ctx.strokeStyle = "blue";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Calculate and set distance
      const pixelDistance = calculateDistance(points[0], points[1]);
      const inchesDistance = convertPixelsToInches(pixelDistance);
      setDistanceInInches(inchesDistance);

      // Navigate back to ProductDetails
      setTimeout(() => {
        navigate("/details");
      }, 500);
    }
  }, [points, setDistanceInInches, navigate]);

  return (
    <>
    <Header />
    <div style={{ position: "relative", width: videoConstraints.width }}>
      <Webcam
        ref={webcamRef}
        audio={false}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      <canvas
        ref={canvasRef}
        onClick={handleCanvasClick}
        width={videoConstraints.width}
        height={videoConstraints.width * (3 / 4)} // Maintain a 4:3 aspect ratio
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          cursor: "crosshair",
        }}
      />
      <button onClick={capturePhoto} style={{ marginTop: "10px" }}>
        Capture
      </button>
    </div>
    </>
  );
};

export default Camera;
