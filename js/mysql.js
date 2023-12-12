var express = require("express")
var mysql = require("mysql")


const app=express()

app.set("view engine", "html")
app.set("views","views")

const db = mysql.createConnection({
	host: "localhost",
	database: "akun",
	user: "root",
	password: ""
})

db.connect((err) => {
	if (err) throw err
	console.log("db nyambung yey")

	const sql ="SELECT * from akun"
	db.query(sql, (err,result)=>{
		const akun = JSON.parse(JSON.stringify(result))
		console.log("hasil", akun)
		app.get("/",(req, res)=>{
			res.render("login",{ akun: akun})
	})
	
	})
})

module.exports=db;

app.listen(8000, ()=> {
	console.log("ready")
})
