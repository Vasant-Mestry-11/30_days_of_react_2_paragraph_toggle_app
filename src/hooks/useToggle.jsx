import { useState } from "react";

const useToggle = (bydefault = true) => {
  const [toggle, setToggle] = useState(bydefault);

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };

  return { toggle, handleToggle };
};

export default useToggle;
