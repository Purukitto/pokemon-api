const express = require('express');
const router = express.Router();
const fetchUrl = require("fetch").fetchUrl;

const pokedex = "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/items.json"

router.get('/:itemName', (req, res) => {
    const itemName = req.params.itemName;
    fetchUrl(pokedex, function(error, meta, body) {
        if (!error) {
            var data = new String();
            data = JSON.parse(body);
            if (itemName == "all") {
                return res.status(200).json(data);
            } else if (itemName == "random") {
                var randID = Math.floor(Math.random() * (data.length));
                return res.status(200).json(data[randID]);
            } else {
                // if (parseInt(itemName)) {
                //     return res.status(200).json(data[itemName - 1]);
                // } else {
                var i;
                for (i = 0; i < data.length; i++) {
                    if (data[i].name.english.toLowerCase().replace(' ', '') == itemName) {
                        return res.status(200).json(data[i]);
                    }
                }
                return res.status(200).json({
                    message: "Please check the name again"
                });
                // }
            }
        } else {
            return res.status(500).json(error);
        }
    });
});

module.exports = router;