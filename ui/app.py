import streamlit as st
from app_socket_client import *

connect_to_server()
st.title('Chit Chat App')
    
eventButton = st.button('Request event')
refreshChatButton = st.button('Refresh Chat')

def refreshChat():
    for message in get_messages():
        st.write(message)

if eventButton:
    emit_request_event_test()

if refreshChatButton:
    refreshChat()