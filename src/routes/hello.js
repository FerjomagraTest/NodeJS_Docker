const router = require('express').Router()

router.route('/').get((req,res)=>{
	msg = `Hello ${req.query.name || "world"} from get request`
	console.log(msg)
	res.json(msg)
})

router.route('/:lang').get((req,res)=>{
	switch(req.params.lang){
		case "it":
			msg = "Ciao a tutti"
			break
		case "en":
			msg = "Hello everybody"
			break
		default:
			msg = "Hola a todos"
	}
	res.json((msg))
})

router.route('/').post((req,res)=>{
	msg = `Hello ${ req.body.name || "World"} from post request`
	res.json(msg)
	console.log(msg)
})

module.exports = router;