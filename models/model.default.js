const Model = function (DB, schema) {
    const dados = req.bady;

    const model = new Model(dados);
    model.save(function (err, data) {
        var msg;

        if(err){
            console.log('Erro', err);
            msg = 'Erro: ' + err;
        }
        else{
            console.log('Cerveja inserida.');
            msg = data;
        }

        res.json(msg);
    })
}