import React from "react";
import { createRestyleComponent } from "@shopify/restyle";

import { Box } from "./Theme";

const Card = createRestyleComponent<React.ComponentProps<typeof Box>>([], Box);

export default Card;
