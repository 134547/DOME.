document.getElementById('admin-login-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Admin login successful!');
    window.location.href = 'index.html';
});

document.getElementById('student-login-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Student login successful!');
    window.location.href = 'index.html';
});

document.getElementById('teacher-login-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Teacher login successful!');
    window.location.href = 'index.html';
});