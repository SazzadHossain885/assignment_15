const app=require("./app");

app.listen(process.env.PORT || 3000, () => {
    console.log("App Running at Default Port")
})