import React, { useState } from "react";
import { CircularProgress } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import NewsCard from "./NewsCard";
import Welcome from "./Welcome";
import LoadingCard from "./LoadingCard";

const MainComponent = () => {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  const getResponse = async () => {
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:1234/v1/chat/completions",
        {
          messages: [
            { role: "system", content: "You are a helpful coding assistant." },
            {
              role: "user",
              content:
                "Dont explain anything just give pure java code." + prompt,
            },
          ],
          temperature: 0.7,
          max_tokens: -1,
          stream: false,
        }
      );
      const generatedResponse = response.data.choices[0].message.content;
      setApiResponse(generatedResponse);
    } catch (error) {
      console.error(error);
      setApiResponse("An error occurred while processing your request.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="input-container">
      <div className="input-wrapper">
        <div className="prompt-wrapper">
          <input
            type="text"
            placeholder="Enter prompt"
            value={prompt}
            onChange={handleInputChange}
            disabled={isLoading}
          />
          <button disabled={isLoading} onClick={getResponse}>
            {isLoading ? (
              <CircularProgress color="inherit" size={20} />
            ) : (
              <SendIcon />
            )}
          </button>
        </div>
      </div>
      <div className="response-wrapper">
        <div className="response-container">
          {apiResponse ? (
            <pre
              className="response-box"
              style={{
                margin: "auto",
                backgroundColor: "#1E1F20",
                color: "white",
                padding: "20px",
                overflowX: "auto",
                maxWidth: "90%",
                height: "510px",
                borderRadius: "7px",
                fontSize: "1.2rem",
                fontWeight: "100",
                lineHeight: "1.8",
                fontFamily: "monospace",
                position: "relative",
                overflow: "auto",
              }}
            >
              {apiResponse}
              <button
                className="copy-btn"
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "none",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigator.clipboard.writeText(apiResponse);
                  alert("Code copied to clipboard!");
                }}
              >
                Copy
              </button>
            </pre>
          ) : !isLoading ? (
            <>
              <Welcome />
              <NewsCard />
            </>
          ) : (
            <LoadingCard />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
