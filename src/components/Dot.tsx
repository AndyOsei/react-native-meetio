import React from "react";
import { createRestyleComponent } from "@shopify/restyle";

import { Box } from "./Theme";

const Dot = createRestyleComponent<React.ComponentProps<typeof Box>>([], Box);

export default Dot;
