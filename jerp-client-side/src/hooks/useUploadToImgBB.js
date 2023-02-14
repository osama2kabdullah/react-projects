import React, { useEffect, useState } from "react";

const useUploadToImgBB = (file) => {
  const [imgbbUrl, setImgbbUrl] = useState("");

  useEffect(() => {
    if (file) {
      const IMGBB_POST_API_KEY = "9d41b12eb2ac9f38fce3206217aa2abf";
      const url = `https://api.imgbb.com/1/upload?key=${IMGBB_POST_API_KEY}`;
      const formData = new FormData();
      formData.append("uploadProductImage", file);
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => setImgbbUrl(data?.data?.url));
    }
  }, [file]);

  return [imgbbUrl, setImgbbUrl];
};

export default useUploadToImgBB;
