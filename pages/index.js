
import React, { useState } from "react";

const photoURL = "/ana.PNG";

function Home() {
    const [noClickCount, setNoClickCount] = useState(0);
    const [question, setQuestion] = useState("Volta com eu hihihi?");
    const [message, setMessage] = useState("");
    const [showButtons, setShowButtons] = useState(true);
    const [hearts, setHearts] = useState([]);

    const handleNoClick = () => {
        const nextCount = noClickCount + 1;
        setNoClickCount(nextCount);
        if (nextCount === 1) {
            setMessage("");
        } else if (nextCount === 2) {
            setMessage("");
        } else if (nextCount === 3) {
            setMessage("");
        } else if (nextCount === 4) {
            setMessage("");
        } else if (nextCount >= 5 && nextCount < 10) {
            setMessage("");
        } else if (nextCount >= 10 && nextCount < 15) {
            setMessage("Tem certeza?");
        } else if (nextCount === 15) {
            setMessage("pqp clariana! Você quebrou o botão :c");
        }
    };

    const handleYesClick = () => {
        setQuestion("AAAAAAAAAAEEEEEEEEE TE ASNO <3");
        setShowButtons(false);
        setMessage("");
        // Gera corações animados
        setHearts(
            Array.from({ length: 100 }, (_, i) => ({
                left: Math.random() * window.innerWidth,
                duration: Math.random() * 2 + 3,
                delay: Math.random() * 2,
                key: i
            }))
        );
    };

    return (
        <div style={{
            fontFamily: "Arial, sans-serif",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FAEEE6"
        }}>
                    <style>{`
                        .falling-photo {
                            position: fixed;
                            top: -100px;
                            width: 80px;
                            height: 80px;
                            border-radius: 16px;
                            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                            animation: fall 4s linear infinite;
                            object-fit: cover;
                        }
                        @keyframes fall {
                            0% { transform: translateY(-100vh); }
                            100% { transform: translateY(100vh); }
                        }
                    `}</style>
            <div style={{
                border: "1px solid transparent",
                backgroundColor: "#FFC0CB",
                borderRadius: 12,
                boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
                padding: 20,
                textAlign: "center",
                position: "relative"
            }}>
                <h2>{question}</h2>
                {showButtons && (
                    <>
                        <button
                            style={{
                                fontSize: noClickCount >= 3 ? 90 : noClickCount === 2 ? 40 : noClickCount === 1 ? 30 : 20,
                                borderRadius: 12,
                                boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
                                transition: "0.3s",
                                padding: 15,
                                border: "none",
                                cursor: "pointer",
                                margin: 10,
                                backgroundColor: "#4CAF50",
                                color: "white",
                                display: showButtons ? "inline-block" : "none"
                            }}
                            onClick={handleYesClick}
                        >
                            SIM
                        </button>
                        <button
                            style={{
                                fontSize: noClickCount === 2 ? 10 : noClickCount === 3 ? 7 : 20,
                                borderRadius: 12,
                                boxShadow: noClickCount >= 15 ? "none" : "0 8px 16px 0 rgba(0,0,0,0.2)",
                                transition: "0.3s",
                                padding: 15,
                                border: "none",
                                cursor: "pointer",
                                margin: 10,
                                backgroundColor: noClickCount >= 15 ? "#ddd" : "#f44336",
                                color: noClickCount >= 15 ? "#666" : "white",
                                position: noClickCount >= 4 ? "absolute" : "static",
                                left: noClickCount >= 4 ? Math.random() * window.innerWidth : undefined,
                                top: noClickCount >= 4 ? Math.random() * window.innerHeight : undefined,
                                display: showButtons ? "inline-block" : "none"
                            }}
                            disabled={noClickCount >= 15}
                            onClick={handleNoClick}
                        >
                            NÃO
                        </button>
                    </>
                )}
                <p>{message}</p>
            </div>
                    {hearts.map(h => (
                        <img
                            key={h.key}
                            src={photoURL}
                            className="falling-photo"
                            style={{
                                left: h.left,
                                animationDuration: `${h.duration}s`,
                                animationDelay: `${h.delay}s`
                            }}
                            alt="Foto especial"
                        />
                    ))}
        </div>
    );
}

export default Home;