import { createClient } from 'pexels';
import { useState } from 'react';
import { useEffect } from "react"


export default function SearchResults() {
  let [imgtList, setImgList] = useState(null);



  useEffect(() => {

    const client = createClient('563492ad6f91700001000001cdd8e3d1841549b9920090022364ee57');
    const query = 'life';

    client.photos.search({ query, per_page: 12 }).then(photos => {
      console.log(photos.photos);
      setImgList(photos.photos);
    });

  }, [])
  return (<div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", gap: "2vw" }}>
    {imgtList ? imgtList.map((item, index) => {
      return <img width={300 + "vw"} src={item.src.portrait} key={index} />
    }) : <></>}
  </div>)
}