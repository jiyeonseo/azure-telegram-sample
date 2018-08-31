# Azure-telegram-sample

## Blog 

http://jiyeonseo.github.io/2018/08/31/telegram-chatbot/ 

## Get started 

install dependencies 
```shell
$ npm install 
```

insert your telegram bot toke 
```js
	const token = "YOUR_API_TOKEN";
```

deploy 
```shell
serverless deploy
```

invoke 
```shell
serverless invoke -f hello
```

log
```shell
serverless logs -f hello
```

## Serverless Azure Functions Node.js Template

https://github.com/serverless/serverless-azure-functions

This starter template allows quickly creating a Node.js-based service to Azure Functions. It relies on the `serverless-azure-functions` plugin, and therefore, before you can deploy it, you simply need to run `npm install` in order to acquire it (this dependency is already saved in the `package.json` file).
