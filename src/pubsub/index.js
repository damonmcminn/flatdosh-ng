import {EventEmitter} from 'events';

const events = new EventEmitter;

export default function() {

  return {
    sub: events.on,
    pub: events.emit
  }

}
