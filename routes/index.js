module.exports = function(app, Data){

  app.get('/', function(req,res){
    Data.find().distinct('iotID').exec(function(err, data){
        if(err) return res.status(500).json({error: err});
        if(!data) return res.status(404).json({error: 'book not found'});
        //res.json(data);
        res.render('index', {title: "main", data: null, id_list : data });
    });
  });

//최근 데이터 128개 불러오기
  app.get('/api/data/:iot_id', function(req,res){
      Data.find({iotID: req.params.iot_id}).sort({iot_date:-1}).limit(128).exec( function(err, data){
          if(err) return res.status(500).json({error: err});
          if(!data) return res.status(404).json({error: 'book not found'});
//      res.json(data);

          res.render('index', {title: req.params.iot_id, data: data, id_list : null });
      });
  });

// 데이터값 추가
  app.post('/api/data', function(req,res){
    var data = new Data();
    data.iotID = req.body.iotID;
    data.iot_data = req.body.iot_data;
    data.iot_date = new Date(req.body.iot_date);

    data.save(function(err, data){
        if(err){
            console.error(err);
            res.json({result: 0});
            return;
        }

        res.json(data);
    });
  });

// 데이터 삭제
  app.delete('/api/data/:iot_id', function(req,res){
    Data.remove({ iotID: req.params.iot_id }, function(err, output){
      if(err) return res.status(500).json({ error: "database failure" });

      res.status(204).end();
    });
  });
};
