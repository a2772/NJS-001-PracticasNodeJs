const socket = io()
const username = document.getElementById('username')
const write_message = document.getElementById('write_message')
const all_messages = document.getElementById('all-messages')
const user_joined = document.getElementById('user_joined')
const writing = document.getElementById('writing')

write_message.addEventListener('keyup', (event)=>{
    if(event.code == 'Enter'){
        if(username.value != '' && write_message.value != ''){
            socket.emit('message',{
                username: username.value,
                message: write_message.value.slice(0,-1)
            })
            write_message.value = ''
        }else{
            console.log('Ingresa los campos')
        }
    }
})

write_message.addEventListener('keydown', (event)=>{
    if(username.value != ''){
        socket.emit('writing',username.value)
    }
})


socket.on('user_joined', (message)=>{
    let content = `
    <div class="chat-user-joined">
        ${message}
    </div><br>
    `
    user_joined.innerHTML = content
    setTimeout(()=>{
        user_joined.innerHTML = ''
    },3000)
})
socket.on('messages',(messages)=>{
    let content = ''
    for(let i=0;i<messages.length;i++){
        content += `
        <div class="chat-message">
            ${messages[i].username}:
            ${messages[i].message}
        </div><br>
        `
    }
    all_messages.innerHTML = content
    all_messages.scrollTop = all_messages.scrollHeight
})
socket.on('writing', (username)=>{
    writing.innerHTML = username + " está escribiendo..."
    setTimeout(()=>{
        writing.innerHTML = ''
    },4000)
})