const express = require("express");
const path = require("path");
const currentData = require("./data.json")
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public/views"));
const color = ["#419EBB", "#EDA249", "#6D2ED5", "#D14C32", "#D83A34", "#CD5120", "#1EC1A2", "#2D68F0"];
app.get("/", (req, res) => {
    res.render('index', {
        currentData: currentData[0],
        color: color[0]

    });
})


app.get("/:id", (req, res) => {
    let id = req.params.id;
    res.render("index", {
        currentData: currentData[id],
        color: color[id]

    })
})



app.listen(2002, () => {
    console.log("running port " + 2000);
    console.log(express);
});







