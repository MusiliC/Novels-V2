import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const DynamicReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const TextEditor = ({ value, onChange }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Return null on the server-side to avoid rendering the editor
  }

  return (
    <DynamicReactQuill
      value={value}
      onChange={onChange}
      theme="snow" // Use the "snow" theme, which matches the Tailwind CSS styling
      modules={{
        toolbar: [
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ color: [] }, { background: [] }],
          ["link"],
          ["clean"],
        ],
      }}
    />
  );
};

export default TextEditor;
