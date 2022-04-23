import React, { useEffect, useState } from "react";
import Api from "../../../service/Api";

import "./style.css";

interface Photo {
  id: number;
  title: string;
  url: string;
}

const Posts: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    Api.get("").then((response) => {
      setPhotos(response.data);
    });
  }, []);

  return (
    <nav>
      <ul className="content-photos">
        {photos
          .map((photos) => (
            <li key={photos.id}>
              <img className="img-photos" src={photos.url} alt={photos.title} />
            </li>
          ))
          .slice(0, 5)}
      </ul>
    </nav>
  );
};
export default Posts;
