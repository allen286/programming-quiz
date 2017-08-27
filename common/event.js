// 阿里笔试题
// 实现自定义事件类，要求支持on, off, emmit, once等方法
class EventEmitter {
  constructor() {
    this.eventMap = {}
  }

  on(eventName, handler) {
    this.eventMap[eventName] = this.eventMap[eventName] || []
    this.eventMap[eventName].push(handler)
  }

  off(eventName, handler) {
    let handlers = this.eventMap[eventName], i
    if (handlers && handlers.length > 0 && handler) {
      i = handlers.indexOf(handler)
      i !== -1 && handlers.splice(i, 1)
    } else {
      // 未指定handler时off掉该事件的所有监听
      this.eventMap[eventName] = []
    }
  }

  once(eventName, handler) {
    let onceHandler = (...args) => {
      handler.apply(this, args)
      this.off(eventName, onceHandler)
    }
    this.on(eventName, onceHandler)
  }

  emit(eventName, ...args) {
    let handlers = this.eventMap[eventName] || []
    for (let i = 0, len = handlers.length; i < len; i++) {
      handlers[i].apply(this, args)
    }
  }
}

let ep = new EventEmitter()
ep.on('event1', function () {
  console.log('event1 emit')
})
ep.emit('event1')

ep.on('event1', function (value) {
  console.log('event1 emit ' + value)
})
ep.emit('event1', '参数1')

ep.once('event2', function (value) {
  console.log('event2 emit once ' + value)
})
ep.emit('event2', '参数2')
ep.emit('event2', '参数3') // 不会再被触发了

ep.off('event1')
ep.on('event1') // 不会再被触发了
