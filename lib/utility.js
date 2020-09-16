import React from "react";

export function useHasMounted() {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    console.log("Here New");
    setHasMounted(true);
  }, []);
  return hasMounted;
}

export default {
  useHasMounted,
};
