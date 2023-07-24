"use client"

import React, { useEffect, useState } from "react";

const DisplayContent = ({ htmlContent }) => {

  const [_document, set_Document] = useState(false)

  useEffect(() => {
    set_Document(true)
  },[])

  return (
    <>
      {_document && (
        <div
          dangerouslySetInnerHTML={{
            __html: htmlContent,
          }}
        />
      )}
    </>
  );
};

export default DisplayContent;
