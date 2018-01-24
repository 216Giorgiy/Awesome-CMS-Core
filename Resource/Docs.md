- Thank to @[thienn](https://github.com/thiennn/) for your modular architect. Without your help I wouldnt complish this.

---

## Prerequisites
> Frontend
- [ReactJS](https://reactjs.org/docs/hello-world.html)
- [Webpack](https://webpack.js.org/)
- Drag&Drop (Self develop)
- [NodeJS](https://nodejs.org) Install lts version of node 

> Backend
- [Visual Studio 2017 version 15.3 with .NET Core SDK 2.0](https://www.microsoft.com/net/core/)
- [ElasticSearch](https://www.elastic.co/guide/en/elasticsearch/reference/current/_installation.html)
- SQL Server
- [Autofac](http://autofaccn.readthedocs.io/en/latest/integration/aspnetcore.html)
- Google Drive API
- [ASP.Net Core 2.0](https://www.microsoft.com/net/download/windows)
- Web API

---

## Run the project

**For backend**
- Change your db source in appsetting.json and appsetting.dev.json
- To generate migrations simply follow this [link](https://docs.microsoft.com/en-us/aspnet/core/data/ef-mvc/migrations). 
Navigate to Awesome-CMS-Core\src\AwesomeCMSCore\AwesomeCMSCore to run migration command
- Run `dotnet ef migrations add InitDB` and 
`dotnet ef database update` insde Awesome-CMS-Core\src\AwesomeCMSCore\AwesomeCMSCore
(I will create a bat file later to run this automatically)

**For frontend**
- Restore npm package

Currently I use grunt to watch for any change happend in FrontEnd folder using webpack so we need to run 2 command 

```
- Run grunt inside Awesome-CMS-Core\src\AwesomeCMSCore\AwesomeCMSCore
- Run npm start insde D:\Study\Awesome-CMS-Core\src\AwesomeCMSCore\Modules\AwesomeCMSCore.Modules.Frontend
```

---

## Authorization using postman

To authenticate user and get token using postman. Please follow these step

#### Setup authorize infomation
<img src="authorize.png" width="100%"/>

#### Request Header
<img src="header.png" width="100%"/>

#### Refresh setup
<img src="refresh.png" width="100%"/>

---

## Project Architecture (Update later)

<img src="Awesome CMS Architect.png" width="100%"/>