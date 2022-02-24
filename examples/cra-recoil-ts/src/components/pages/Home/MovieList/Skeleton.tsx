import React from "react";

import { Skeleton as MuiSkeleton } from "@mui/material";

const Skeleton = React.forwardRef<HTMLDivElement>((props, ref) => (
    <div css={{ width: "25%", padding: 8 }} ref={ref}>
      <MuiSkeleton css={{ transform: "scale(1)" }} height={370} width="100%" />
    </div>
  ));

export default Skeleton;
