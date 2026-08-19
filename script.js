const app = document.getElementById('app');

const router = {
    login: `<h1>Login</h1><input id="pass" type="password" placeholder="Senha"><button onclick="checkAuth()">Entrar</button>`,
    dashboard: `
        <nav><button onclick="render('agenda')">Nova Consulta</button> <button onclick="render('list')">Histórico</button></nav>
        <div id="content"></div>
    `
};

function render(view) {
    app.innerHTML = router.dashboard;
    const content = document.getElementById('content');
    
    if(view === 'agenda') {
        content.innerHTML = `<h2>Agendar</h2><input id="pName" placeholder="Nome"><button onclick="save()">Salvar</button>`;
    } else {
        const data = JSON.parse(localStorage.getItem('db') || '[]');
        content.innerHTML = `<h2>Agenda</h2><table>${data.map(i => `<tr><td>${i.name}</td></tr>`).join('')}</table>`;
    }
}

function checkAuth() {
    if(document.getElementById('pass').value === '1234') render('list');
    else alert('Senha errada');
}

// Inicia no Login
app.innerHTML = router.login;
