function createMeeting() {
    let newMeetingCode = Math.random().toString(36).substring(2, 8);
    alert("Tạo cuộc họp mới với mã: " + newMeetingCode);
    window.location.href = `meeting.html?code=${newMeetingCode}`;
}

function joinMeeting() {
    let meetingCode = document.getElementById("meetingCode").value;
    if (meetingCode) {
        window.location.href = `meeting.html?code=${meetingCode}`;
    } else {
        alert("Vui lòng nhập mã cuộc họp!");
    }
}

function enterCode(){
    const meetingCodeInput = document.getElementById('meetingCode');
    const joinButton = document.getElementById('joinButton');

    if (meetingCodeInput.value.trim() !== "" && meetingCodeInput.value !== "Nhập mã cuộc họp") {
        joinButton.disabled = false; 
        joinButton.hidden = false;
        joinButton.classList.add('active'); // Thêm class active để có màu xanh
    } else {
        joinButton.disabled = true; 
        joinButton.hidden = true;
        joinButton.classList.remove('active'); // Loại bỏ class active
    }
}