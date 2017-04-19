//连接
//创建mmongodb客户端
var mongoclient  =require("mongodb").MongoClient;
//连接串
var DB_CONN_STR = "mongodb://127.0.0.1:27017/mydb";
//对操作封装方法
var insertData = function(db,collectionName,data,callback){
        //连接到集合
        var collection = db.collection(collectionName);
        //插入
        collection.insert(data,function(err,result){
        	if (!err) {
        		//成功
        		callback(result)
        	}else{
        		console.log('插入数据失败'+err);
        	}
        });
    };
    //这个是删除
        //     var delData = function(db,collectionName,where,callback){
        //     var collection = db.collection(collectionName);
        //     collection.remove(where,function(err,result){
        //     	if (!err) {
        //     		callback(result);
        //     	};
        //     })
        // };
    //这个是改
        //  var updateData = function(db,collectionName,where,update,callback){
        //     var collection = db.collection(collectionName);
        //     collection.update(where,update,function(err,result){
        //     	if (!err) {
        //     		callback(result);
        //     	};
        //     })
        // };
     //这个是查
     // var findData = function(db,collectionName,where,callback){
     //        var collection = db.collection(collectionName);
     //        collection.find(where).toArray(function(err,result){
     //        	if (!err) {
     //        		callback(result);
     //        	};
     //        })
     //    };
//连接数据的方法
mongoclient.connect(DB_CONN_STR,function(err,db) {
	console.log(err);
	console.log('数据库连接成功');
	//操作
    //删除
    // delData(db,"person",{name:"lilei"},function(result){
    // 	console.log(result);
    // }) 
    //修改
    // updateData(db,"person",{name:"zhangxu"},{$set:{age:789}},function(result){
    // 	console.log(result);
    // 	db.close();
    // })
    //插入
    insertData(db,"0",{name:"ever",age:19},function(result){
        console.log(result);
    });
    // 查询
    // findData(db,"person",{name:"zhangxu"},function(result){
    // 	console.log(result);
    // 	db.close();
    // })
    //关闭连接	
	// db.close();
    
});