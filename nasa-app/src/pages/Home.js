import React, { useEffect, useState, useContext } from "react";
import "./Home.css";
import { AuthContext } from "../contexts/AuthContext";

const APOD_API_KEY = "A6tuYqOPKoHOdsEnI6VmyhCheH5t9zkDMQoFG9NK";
const APOD_URL = `https://api.nasa.gov/planetary/apod?api_key=${APOD_API_KEY}`;

function HomePage() {
    const [apodData, setApodData] = useState(null);

    useEffect(() => {
        fetchAPODData();
    }, []);

    const { user } = useContext(AuthContext);

    const fetchAPODData = async () => {
        try {
            const response = await fetch(APOD_URL);
            const data = await response.json();
            setApodData(data);
        } catch (error) {
            console.error("Error fetching APOD data:", error);
        }
    };
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };

    return (
        <div className="home">
            <header className="home-header">
                <h1>Picture of the Day</h1>
                {/* for today's date, use: <p>{formatDate(new Date())}</p> */}
                {apodData && <p>{formatDate(apodData.date)}</p>}
            </header>
            {apodData ? (
                <div className="home-content">
                    <div className="home-image">
                        {apodData.media_type === "image" ? (
                            <img
                                src={apodData.url}
                                alt={apodData.title}
                                className={user ? "" : "blurry-image"}
                            />
                        ) : (
                            <iframe
                                title={apodData.title}
                                src={apodData.url}
                                frameBorder="0"
                                gesture="media"
                                allow="encrypted-media"
                                allowFullScreen
                                className={user ? "" : "blurry-image"}
                            />
                        )}
                        {!user && (
                            <div className="home-image-overlay">
                                Log in to see the image!
                            </div>
                        )}
                    </div>
                    <div className="home-info">
                        <h2>{apodData.title}</h2>
                        <p>{apodData.explanation}</p>
                        {apodData.copyright && (
                            <p className="home-author">
                                © {apodData.copyright}
                            </p>
                        )}
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default HomePage;
