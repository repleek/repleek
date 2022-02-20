import React from "react";
import { Skeleton as MuiSkeleton } from "@mui/material";

const Skeleton = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div css={{ width: "25%", padding: 8 }} ref={ref}>
      <MuiSkeleton height={370} width="100%" css={{ transform: "scale(1)" }} />
    </div>
  );
});

export default Skeleton;
