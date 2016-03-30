## Steps
* Excute the npm install: `npm i`
* Create a folder named `db`
* Launch mongodb: `mongod --dbpath=db`
* Run the application
- Using [node-forman](https://github.com/strongloop/node-foreman) : `nf start web=1`
- Using nodemon: `nodemon .`

## [Optional] Use a debugger:
- Install [node-inspector](https://github.com/node-inspector/node-inspector)
- Start the inspector: `node-inspector --web-port`
- Start the application in debugger mode: `nodemon --debug-brk .`