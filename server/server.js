const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./config/swagger.config.json');
const puerto = 8000;



app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


require('./routes/api.routes')(app);

app.listen(puerto, () =>{
    console.log("Listening at Port" + puerto)
})
