import React, { useEffect, useState } from "react";

import Filter from "components/Filter";
import Previews from "components/Previews";
import { getFavorits } from "services/post";

const Favorits = () => {
  const [favPreviews, setFavPreviews] = useState([]);

  useEffect(() => {
    getFavorits().then((response) => setFavPreviews(response));
  }, []);
  return (
    <div>
      <h2 className="text-danger">Ma liste d'envies</h2>
      <Filter />
      <Previews previews={favPreviews} />
    </div>
  );
};

export default Favorits;
