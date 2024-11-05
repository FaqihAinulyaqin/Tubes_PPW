// Function untuk mengatur message
function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
    
    if (message !== '') {
        const chatArea = document.querySelector('.chat-area');
        const chatMessages = document.createElement('div');
        chatMessages.classList.add('chat-messages');
        
        //membuat elemen pesan
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = message;
        
        // menambahkan pesan ke teks area
        chatArea.appendChild(chatMessages);
        chatMessages.appendChild(messageElement);
        
        //mengupdate pesan terakhri ke chat list
        document.getElementById('message').textContent = message;
        
        // mengambil tanggal dikirimnya pesan
        const currentDate = new Date();
        const formattedDate = `${currentDate.getDate()} ${
            currentDate.toLocaleString('default', { month: 'short' })
        }`;
        document.getElementById('date').textContent = formattedDate;

        //menghapus input pada text field
        messageInput.value = '';
        
        // scroll
        chatArea.scrollTop = chatArea.scrollHeight;
    }
}


async function loadChatData() {
    try {
        const response = await fetch('ChatData.json');
        const data = await response.json();

        // set profile image
        const profileImage = document.getElementById('profile-image');
        profileImage.src = data.profile_image.src;
        profileImage.alt = data.profile_image.alt;

        // Set chat info
        const chatInfo = data.chat_info[0]; // Assuming only one chat item
        document.getElementById('username').textContent = chatInfo.name;
        document.getElementById('status-user').textContent = chatInfo.status_user;
        document.getElementById('message').textContent = chatInfo.message;
        document.getElementById('date').textContent = chatInfo.date;

        // Set chat header
        const chatHeaderAvatar = document.getElementById('header-avatar');
        chatHeaderAvatar.src = data.chat_header.user_avatar.src;
        chatHeaderAvatar.alt = data.chat_header.user_avatar.alt;
        
        document.getElementById('chat-header-name').textContent = data.chat_header.name;
        document.getElementById('chat-header-status').textContent = data.chat_header.status;
        
    } catch (error) {
        console.error('Error loading chat data:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadChatData);




