import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";

import { ACTIVATE_USER } from "../../utils/graphQL/mutation";

const Activation = () => {
  const { activation_token } = useParams();
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const [activateUSer] = useMutation(ACTIVATE_USER);
  useEffect(() => {
    if (activation_token)
      try {
        let { data } = activateUSer({ variables: { token: activation_token } });
        setSuccess("Account is activated successfully");
      } catch (e) {
        setErr("Fail to activate account");
      }
  }, [activation_token]);
  return (
    <div className="container">
      <div className="formWrapper">
        {err && <div>{err}</div>} {success && <div>{success}</div>}
      </div>
    </div>
  );
};

export default Activation;
