var express = require('express')
var router = express.Router();

var normalpage = require('../routes/normal')
var awssql = require('./awssql')

router.use(express.urlencoded({ extended : true }))

router.post('/', (req, res, next) =>{   
   var type = req.query.type;
   req.body.mapper = "introduceSql";     
  
   if( type ){  
      switch(type){

         case 'list' : req.body.crud = "select"; 
                       req.body.mapper_id = "interview";
                       break;
         case 'write': req.body.crud = "insert"; 
                       req.body.mapper_id = "interviewInsert";
                       break;
         case 'modify': req.body.crud = "update"; 
                       req.body.mapper_id = "interviewModify";
                       break; 
         default      : req.body.crud = "delete"; 
                        req.body.mapper_id = "interviewDrop";
                        break; 
      }      

          router.use('/', awssql )
          next('route')
   }
   else{           
          router.use('/', normalpage )
          next('route')
   }   
})

module.exports = router;