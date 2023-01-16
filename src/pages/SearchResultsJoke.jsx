import { useState } from "react";
import { useEffect } from "react";

export default function SearchResults() {
  let [imgList, setImgList] = useState(null);

  useEffect(() => {
    if (sessionStorage.getItem("result") !== null) {
      setImgList(JSON.parse(sessionStorage.getItem("result")));
    }
  }, []);
  if (imgList) {
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <h1 style={{textAlign:"center"}} className="result-count">
          {imgList.length} results (0.43 seconds) on your search .. 
        </h1>
        <br/>
        <br/>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            gap: "2vw",
          }}
        >
          <h1></h1>
        </div>
      </div>


    )
  } else {
    return (null)
  }

}
