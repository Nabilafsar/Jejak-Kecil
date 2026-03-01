// ── index user yang sedang diedit/dihapus ──
let targetIndex = null;

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

// ── EDIT ──
function editUser(index) {
    targetIndex = index;
    document.getElementById("newPassword").value = "";
    document.getElementById("confirmPassword").value = "";
    document.getElementById("editModal").classList.add("active");
}

function closeEdit() {
    document.getElementById("editModal").classList.remove("active");
    targetIndex = null;
}

function confirmEdit() {
    const newPass = document.getElementById("newPassword").value.trim();
    const confirmPass = document.getElementById("confirmPassword").value.trim();

    if (!newPass || !confirmPass) {
        alert("Password tidak boleh kosong!");
        return;
    }
    if (newPass !== confirmPass) {
        alert("Password dan konfirmasi tidak cocok!");
        return;
    }

    const users = JSON.parse(localStorage.getItem("registerUsers")) || [];
    users[targetIndex].password = newPass;
    localStorage.setItem("registerUsers", JSON.stringify(users));

    closeEdit();
    loadUser();
}

// ── HAPUS ──
function deleteUser(index) {
    targetIndex = index;
    document.getElementById("deleteModal").classList.add("active");
}

function closeDelete() {
    document.getElementById("deleteModal").classList.remove("active");
    targetIndex = null;
}

function confirmDelete() {
    const users = JSON.parse(localStorage.getItem("registerUsers")) || [];
    users.splice(targetIndex, 1);
    localStorage.setItem("registerUsers", JSON.stringify(users));

    closeDelete();
    loadUser();
}

loadUser();