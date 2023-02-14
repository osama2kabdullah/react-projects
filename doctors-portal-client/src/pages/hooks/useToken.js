import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    if (user?.displayName) {
      fetch("https://boiling-wildwood-09844.herokuapp.com/adduser/" + user?.email, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({name: user?.displayName}),
      })
        .then((res) => res.json())
        .then((data) => {
            setToken(data.token);
          localStorage.setItem('access_token', data.token)
        });
    }
  }, [user?.displayName, user]);

  return token;
};

export default useToken;
