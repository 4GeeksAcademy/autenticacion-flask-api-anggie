import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Demo = () => {
  const { store, actions } = useContext(Context);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (store.accessToken)
      actions.getUserInfo().then((data) => setUserData(data));
  }, [store.accessToken]);

  return (
    <div className="container">
      <pre>{JSON.stringify(userData)}</pre>
      <br />
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};
