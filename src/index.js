import { dotEnvValues } from "./config.js";

import app from "./app.js";


app.listen(3000 );  
console.log('server running on port : ', dotEnvValues.PORT)