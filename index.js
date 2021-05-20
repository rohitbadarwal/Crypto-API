const express = require('express');
const path = require('path')
const app = express();
const axios = require('axios');

app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    axios.get('https://api.wazirx.com/api/v2/tickers')
        .then(response => {
            let count = 0;
            let values = [];
            for (let i in response.data) {
                values.push(response.data[i]);
                count += 1
                if (count == 10)
                    break;
            }
            res.render('index', { ok: values });

        })
        .catch(error => {
            console.log(error);
        });
})

app.listen(8080, () => {
    console.log("Listening to Port 8080");
})

