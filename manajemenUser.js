function loadUser() {
    const users = JSON.parse(localStorage.getItem("registerUsers")) || [];
    const tbody = document.getElementById("tableBody");

    if (users.length === 0) {
        tbody.style.display = 'flex';
        tbody.innerHTML = '<div class="empty-state">Belum ada data user.</div>';
        return;
    }
    tbody.style.display = 'block';
    tbody.innerHTML = users.map((u, index) => `
        <div class="table-row">
        <span>${index + 1}</span>
        <span>${u.email}</span>
        <span>${u.password}</span>
        <span>
            <div class="action-buttons">
            <button class="btn-edit" onclick="editUser(${index})">Edit</button>
            <button class="btn-delete" onclick="deleteUser(${index})">Hapus</button>
            </div>
        </span>
        </div>
    `).join('');
}

loadUser();