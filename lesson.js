class Message {
  constructor(time, author, text) {
    this.time = time;
    this.author = author;
    this.text = text;
  }
}

class Messenger {
  constructor() {
    this.messages = [];
  }
  
  send(author, text) {
    const message = new Message(this.gettime(), author, text);
    this.messages.push(message);
  }
}

 


  gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
  }


  show_history() {
    for (let i = 0; i < this.messages.length; i++) {
      console.log(this.messages[i])
    }
    
  }


const messenger = new Messenger();

messenger.send("manager", "hello everyon");
messenger.send("employer", "hello mr");
messenger.send("reception", "hello mr");

messenger.show_history();
