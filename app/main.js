import {ZooControllers} from "./Controllers/zooControllers.js"

// ENTRY POINT
console.log('hello is it working?????')


var zooControllers = new ZooControllers()

window['app'] = {
  controllers:{
    zooControllers
  }
}