import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

const ActiveResource = () => {
  const [resource, setResource] = useState({});
  const [seconds, setSeconds] = useState();

  useEffect(() => {
    async function fecthResource() {
      const axiosRes = await axios.get("/api/activeresource");
      const resource = axiosRes.data;
      if (resource) {
        const ftime = parseInt(resource.timeToFinish, 10);
        const etime = moment().diff(moment(resource.activationTime), "seconds");
        const utime = ftime * 60 - etime;
        if (utime >= 0) {
          resource.timeToFinish = utime;
          setSeconds(utime);
        }
      }
      setResource(resource);
    }
    fecthResource();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setSeconds(seconds - 1), 1000);
    if (seconds < 0) clearInterval(interval);
    return () => clearInterval(interval);
  }, [seconds]);

  const completeResource = () => {
    axios
      .patch("/api/resources", { ...resource, status: "complete" })
      .then((_) => location.reload())
      .catch((err) => alert(err?.response?.data));
  };

  const hasResource = resource && resource.id;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "blue",
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        height: "200px",
      }}
    >
      <h3 style={{ margin: "0", height: "24px" }}>
        {hasResource ? resource.title : ""}
      </h3>
      <div>
        <h5
          style={{
            fontSize: "64px",
            margin: "0",
            padding: "16px",
            verticalAlign: "middle",
          }}
        >
          {hasResource &&
            (seconds > 0 ? (
              seconds
            ) : (
              <button onClick={completeResource}>click & done!</button>
            ))}
        </h5>
      </div>
      {hasResource ? (
        <Link href={`/resources/${resource.id}`}>
          <a
            style={{
              display: "block",
              background: "white",
              color: "blue",
              padding: "4px 8px",
              height: "24px",
            }}
          >
            go to resource
          </a>
        </Link>
      ) : (
        <Link href="/">
          <a
            style={{
              display: "block",
              background: "white",
              color: "blue",
              padding: "4px 8px",
              height: "24px",
            }}
          >
            go to resources
          </a>
        </Link>
      )}
    </div>
  );
};

export default ActiveResource;
