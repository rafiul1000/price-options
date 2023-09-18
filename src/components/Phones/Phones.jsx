import { useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";

const Phones = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((res) => res.json())
      .then((data) => setPhones(data.data));
  }, []);

  return (
    <div>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />

      <h2 className="text-5xl">Phones: {phones.length}</h2>
    </div>
  );
};

export default Phones;
