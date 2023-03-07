class EventEmitter {
  listeners = {};

  fire(event) {
    for (let k in this.listeners) {
      let listener = this.listeners[k];
      this.unregister(k);
      listener(event);
    }
  }

  register(id, listener) {
    this.listeners[id] = listener;
    console.log("Register", id);
  }

  unregister(id) {
    return delete this.listeners[id];
  }
}

export default EventEmitter;
