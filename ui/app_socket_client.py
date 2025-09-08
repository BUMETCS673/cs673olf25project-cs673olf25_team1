
import socketio as sio

messages = []

sio = sio.Client()

def connect_to_server():
    if not sio.connected:
        sio.connect('http://localhost:3000')

## Listener methods
@sio.event
def connect():
    messages.append("Connected to server")

@sio.event
def disconnect():
    messages.append("Disconnected from server")

@sio.on('request_event_test')
def on_request_event_test(result):
    messages.append(f"{result['data']}")

## Emitter methods
def emit_request_event_test():
    sio.emit('request_event_test', {'data': 'Event requested from client'})

# Helper methods
def get_messages():
    return messages