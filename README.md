# NodejsDemo
﻿利用Node.js Express框架开发的Restful风格API的Demo
﻿
﻿
##API说明
﻿
####localhost:port/api/v1 

- 功能：首页
- 方式：GET
- 返回数据：Welcome

####localhost:port/api/v1/users

- 功能：查询数据
- 方式：GET
- 返回数据：所有数据

####localhost:port/api/v1/users

- 功能：插入数据
- 方式：POST
- 返回数据：insert success 

####localhost:port/api/v1/users/user_id

- 功能：查询指定数据
- 方式：GET
- 返回数据：指定该条的数据

####localhost:port/api/v1/users/user_id


- 功能：更新指定数据
- 方式：POST
- 返回数据：update success

####localhost:port/api/v1/users/user_id

- 功能：删除指定数据
- 方式：DELETE
- 返回数据：delete success

##开发环境
- Visual Studio 2015
- Node.js Express
- Mongodb
