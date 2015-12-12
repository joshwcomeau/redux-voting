import Server from 'socket.io';

export default function startServer(store) {
  const io = new Server().attach(8090);

  // Emit all change events whenever the store changes.
  // TODO: Optimize this so it isn't sending the WHOLE state on every change.
  store.subscribe(
    () => io.emit( 'state', store.getState().toJS() )
  );


  io.on('connection', socket => {
    // Send the initial state when a client connects.
    socket.emit('state', store.getState().toJS() );

    // Allow the clients to update the state (eg. by voting)
    socket.on('action', (action) => {
      console.log("Request!", action)
    });

    socket.on('action', store.dispatch.bind(store));
  });
}
