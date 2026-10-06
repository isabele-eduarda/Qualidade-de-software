/* =========================================================
   ESPAÇO MENTE E CORPO
   FRONT-END
========================================================= */


/* =========================================================
   USUÁRIOS DE TESTE
========================================================= */

const users = [

    {
        id: 1,
        name: "Administrador",
        email: "admin@clinica.com",
        password: "123456",
        role: "admin"
    },

    {
        id: 2,
        name: "Dra. Mariana Costa",
        email: "psicologa@clinica.com",
        password: "123456",
        role: "psychologist",
        specialty: "Psicologia"
    },

    {
        id: 3,
        name: "Dr. Rafael Almeida",
        email: "medico@clinica.com",
        password: "123456",
        role: "doctor",
        specialty: "Clínica Médica"
    },

    {
        id: 4,
        name: "Fernanda Souza",
        email: "recepcao@clinica.com",
        password: "123456",
        role: "receptionist"
    },

    {
        id: 5,
        name: "Clécio Almeida",
        email: "paciente@clinica.com",
        password: "123456",
        role: "patient"
    }

];


let currentUser = null;


/* =========================================================
   CONSULTAS
========================================================= */

let appointments = [

    {
        id: 1,
        date: "05/10/2026",
        time: "08:00",
        patient: "Clécio Almeida",
        professional: "Dra. Mariana Costa",
        specialty: "Psicologia",
        type: "Presencial",
        status: "Confirmada",
        notes: ""
    },

    {
        id: 2,
        date: "05/10/2026",
        time: "09:30",
        patient: "Ana Beatriz",
        professional: "Dr. Rafael Almeida",
        specialty: "Clínica Médica",
        type: "Presencial",
        status: "Confirmada",
        notes: ""
    },

    {
        id: 3,
        date: "05/10/2026",
        time: "11:00",
        patient: "Carlos Henrique",
        professional: "Dra. Mariana Costa",
        specialty: "Psicologia",
        type: "Online",
        status: "Pendente",
        notes: ""
    },

    {
        id: 4,
        date: "06/10/2026",
        time: "14:00",
        patient: "Juliana Silva",
        professional: "Dr. Rafael Almeida",
        specialty: "Clínica Médica",
        type: "Presencial",
        status: "Confirmada",
        notes: ""
    }

];


/* =========================================================
   PACIENTES
========================================================= */

const patients = [

    {
        name: "Clécio Almeida",
        email: "paciente@clinica.com",
        phone: "(81) 99999-8888",
        age: 24
    },

    {
        name: "Ana Beatriz",
        email: "ana@email.com",
        phone: "(81) 98888-7777",
        age: 31
    },

    {
        name: "Carlos Henrique",
        email: "carlos@email.com",
        phone: "(81) 97777-6666",
        age: 28
    },

    {
        name: "Juliana Silva",
        email: "juliana@email.com",
        phone: "(81) 96666-5555",
        age: 42
    }

];


/* =========================================================
   PROFISSIONAIS
========================================================= */

const professionals = [

    {
        name: "Dra. Mariana Costa",
        specialty: "Psicologia",
        crm: "CRP 02/12345"
    },

    {
        name: "Dr. Rafael Almeida",
        specialty: "Clínica Médica",
        crm: "CRM 12345"
    },

    {
        name: "Dra. Camila Souza",
        specialty: "Cardiologia",
        crm: "CRM 54321"
    }

];


/* =========================================================
   ESPECIALIDADES
========================================================= */

const specialties = [

    {
        name: "Clínica Médica",
        icon: "🩺",
        description: "Atendimento médico geral."
    },

    {
        name: "Psicologia",
        icon: "🧠",
        description: "Atendimento psicológico."
    },

    {
        name: "Cardiologia",
        icon: "❤️",
        description: "Cuidados cardiovasculares."
    },

    {
        name: "Odontologia",
        icon: "🦷",
        description: "Cuidados odontológicos."
    },

    {
        name: "Nutrição",
        icon: "🥗",
        description: "Acompanhamento nutricional."
    },

    {
        name: "Fisioterapia",
        icon: "🦴",
        description: "Reabilitação e movimento."
    }

];


/* =========================================================
   MENUS
========================================================= */

const menus = {

    admin: [

        ["dashboard", "⌂", "Dashboard"],
        ["users", "♙", "Usuários"],
        ["agenda", "◷", "Agenda"],
        ["patients", "▤", "Pacientes"],
        ["professionals", "⚕", "Profissionais"],
        ["specialties", "✚", "Especialidades"],
        ["reports", "▥", "Relatórios"],
        ["settings", "⚙", "Configurações"]

    ],

    psychologist: [

        ["dashboard", "⌂", "Início"],
        ["myAgenda", "◷", "Minha agenda"],
        ["myPatients", "♙", "Meus pacientes"],
        ["records", "▥", "Prontuários"],
        ["profile", "⚙", "Meu perfil"]

    ],

    doctor: [

        ["dashboard", "⌂", "Início"],
        ["myAgenda", "◷", "Minha agenda"],
        ["myPatients", "♙", "Meus pacientes"],
        ["records", "▥", "Prontuários"],
        ["profile", "⚙", "Meu perfil"]

    ],

    receptionist: [

        ["dashboard", "⌂", "Início"],
        ["agenda", "◷", "Agenda"],
        ["patients", "♙", "Pacientes"],
        ["appointments", "▤", "Consultas"],
        ["profile", "⚙", "Meu perfil"]

    ],

    patient: [

        ["dashboard", "⌂", "Início"],
        ["booking", "＋", "Agendar consulta"],
        ["myAppointments", "◷", "Minhas consultas"],
        ["history", "▥", "Meu histórico"],
        ["profile", "⚙", "Meu perfil"]

    ]

};


/* =========================================================
   NOMES DAS PÁGINAS
========================================================= */

const pageNames = {

    dashboard: "Dashboard",
    users: "Usuários",
    agenda: "Agenda",
    patients: "Pacientes",
    professionals: "Profissionais",
    specialties: "Especialidades",
    reports: "Relatórios",
    settings: "Configurações",

    myAgenda: "Minha agenda",
    myPatients: "Meus pacientes",
    records: "Prontuários",

    profile: "Meu perfil",

    booking: "Agendar consulta",
    myAppointments: "Minhas consultas",
    history: "Meu histórico",

    appointments: "Consultas"

};


/* =========================================================
   LOGIN
========================================================= */

document
    .getElementById("loginForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document
                .getElementById("email")
                .value
                .trim()
                .toLowerCase();

        const password =
            document
                .getElementById("password")
                .value;

        const user =
            users.find(function(item) {

                return (
                    item.email.toLowerCase() === email &&
                    item.password === password
                );

            });

        if (!user) {

            showToast(
                "E-mail ou senha incorretos."
            );

            return;
        }

        currentUser = user;

        openSystem();

    });


/* =========================================================
   ABRIR SISTEMA
========================================================= */

function openSystem() {

    document
        .getElementById("loginScreen")
        .classList
        .add("hidden");

    document
        .getElementById("systemScreen")
        .classList
        .remove("hidden");

    updateUserInterface();

    renderMenu();

    loadPage("dashboard");

}


/* =========================================================
   INTERFACE DO USUÁRIO
========================================================= */

function updateUserInterface() {

    const initials =
        getInitials(currentUser.name);

    document
        .getElementById("sidebarAvatar")
        .textContent = initials;

    document
        .getElementById("headerAvatar")
        .textContent = initials;

    document
        .getElementById("sidebarUserName")
        .textContent =
        currentUser.name;

    document
        .getElementById("headerUserName")
        .textContent =
        currentUser.name;

    document
        .getElementById("sidebarUserRole")
        .textContent =
        getRoleName(currentUser.role);

}


/* =========================================================
   MENU
========================================================= */

function renderMenu() {

    const menu =
        document.getElementById(
            "sidebarMenu"
        );

    menu.innerHTML = "";

    menus[currentUser.role]
        .forEach(function(item) {

            const button =
                document.createElement("button");

            button.className =
                "menu-item";

            button.dataset.page =
                item[0];

            button.innerHTML = `

                <span class="menu-icon">
                    ${item[1]}
                </span>

                <span>
                    ${item[2]}
                </span>

            `;

            button.onclick = function() {

                loadPage(item[0]);

            };

            menu.appendChild(button);

        });

}


/* =========================================================
   CARREGAR PÁGINA
========================================================= */

function loadPage(page) {

    const content =
        document.getElementById(
            "pageContent"
        );

    document
        .getElementById("breadcrumb")
        .textContent =
        pageNames[page];

    document
        .getElementById("pageTitle")
        .textContent =
        pageNames[page];

    document
        .querySelectorAll(".menu-item")
        .forEach(function(button) {

            button.classList.toggle(
                "active",
                button.dataset.page === page
            );

        });


    switch (page) {

        case "dashboard":
            renderDashboard(content);
            break;

        case "users":
            renderUsers(content);
            break;

        case "agenda":
            renderAgenda(content);
            break;

        case "patients":
        case "myPatients":
            renderPatients(content);
            break;

        case "professionals":
            renderProfessionals(content);
            break;

        case "specialties":
            renderSpecialties(content);
            break;

        case "reports":
            renderReports(content);
            break;

        case "settings":
            renderSettings(content);
            break;

        case "myAgenda":
            renderProfessionalAgenda(content);
            break;

        case "records":
            renderRecords(content);
            break;

        case "booking":
            renderBooking(content);
            break;

        case "myAppointments":
            renderMyAppointments(content);
            break;

        case "history":
            renderHistory(content);
            break;

        case "appointments":
            renderAppointments(content);
            break;

        case "profile":
            renderProfile(content);
            break;

    }

}


/* =========================================================
   DASHBOARD
========================================================= */

function renderDashboard(content) {

    if (currentUser.role === "admin") {

        renderAdminDashboard(content);

        return;
    }

    if (
        currentUser.role === "psychologist" ||
        currentUser.role === "doctor"
    ) {

        renderProfessionalDashboard(content);

        return;
    }

    if (
        currentUser.role === "receptionist"
    ) {

        renderReceptionDashboard(content);

        return;
    }

    renderPatientDashboard(content);

}


/* =========================================================
   DASHBOARD ADMIN
========================================================= */

function renderAdminDashboard(content) {

    content.innerHTML = `

        <div class="page-heading">

            <div>

                <h1>
                    Visão geral
                </h1>

                <p>
                    Acompanhe o funcionamento da clínica.
                </p>

            </div>

            <button
                class="primary-button"
                onclick="openCreateUserModal()"
            >
                + Criar usuário
            </button>

        </div>


        <div class="stats">

            <div class="stat-card">
                <span>Pacientes</span>
                <strong>1.248</strong>
            </div>

            <div class="stat-card">
                <span>Profissionais</span>
                <strong>25</strong>
            </div>

            <div class="stat-card">
                <span>Consultas hoje</span>
                <strong>${getTodayAppointmentsCount()}</strong>
            </div>

            <div class="stat-card">
                <span>Especialidades</span>
                <strong>${specialties.length}</strong>
            </div>

        </div>


        <div class="content-grid">

            <div class="panel">

                <h3>
                    Próximos atendimentos
                </h3>

                ${appointmentTable(
                    appointments
                )}

            </div>


            <div class="panel">

                <h3>
                    Ações rápidas
                </h3>

                <div
                    style="
                        display:flex;
                        flex-direction:column;
                        gap:10px;
                    "
                >

                    <button
                        class="secondary-button"
                        onclick="openCreateUserModal()"
                    >
                        Criar novo usuário
                    </button>

                    <button
                        class="secondary-button"
                        onclick="loadPage('professionals')"
                    >
                        Gerenciar profissionais
                    </button>

                    <button
                        class="secondary-button"
                        onclick="loadPage('patients')"
                    >
                        Ver pacientes
                    </button>

                    <button
                        class="secondary-button"
                        onclick="loadPage('agenda')"
                    >
                        Abrir agenda
                    </button>

                </div>

            </div>

        </div>

    `;

}


/* =========================================================
   DASHBOARD PROFISSIONAL
========================================================= */

function renderProfessionalDashboard(content) {

    const professional =
        currentUser.name;

    const specialty =
        currentUser.specialty;

    const ownAppointments =
        appointments.filter(function(item) {

            return (
                item.professional ===
                currentUser.name
            );

        });


    content.innerHTML = `

        <div class="page-heading">

            <div>

                <h1>
                    Olá, ${professional.split(" ")[1] || professional}
                </h1>

                <p>
                    Aqui está o resumo dos seus atendimentos.
                </p>

            </div>

            <button
                class="primary-button"
                onclick="loadPage('myAgenda')"
            >
                Ver minha agenda
            </button>

        </div>


        <div class="stats">

            <div class="stat-card">
                <span>Consultas hoje</span>
                <strong>${ownAppointments.length}</strong>
            </div>

            <div class="stat-card">
                <span>Próximas consultas</span>
                <strong>14</strong>
            </div>

            <div class="stat-card">
                <span>Pacientes</span>
                <strong>38</strong>
            </div>

            <div class="stat-card">
                <span>Especialidade</span>
                <strong style="font-size:18px">
                    ${specialty}
                </strong>
            </div>

        </div>


        <div class="panel">

            <h3>
                Próximos atendimentos
            </h3>

            ${appointmentTable(
                ownAppointments
            )}

        </div>

    `;

}


/* =========================================================
   DASHBOARD RECEPÇÃO
========================================================= */

function renderReceptionDashboard(content) {

    content.innerHTML = `

        <div class="page-heading">

            <div>

                <h1>
                    Recepção
                </h1>

                <p>
                    Organize os atendimentos da clínica.
                </p>

            </div>

            <button
                class="primary-button"
                onclick="openNewAppointmentModal()"
            >
                + Nova consulta
            </button>

        </div>


        <div class="stats">

            <div class="stat-card">
                <span>Consultas hoje</span>
                <strong>${getTodayAppointmentsCount()}</strong>
            </div>

            <div class="stat-card">
                <span>Aguardando</span>
                <strong>
                    ${
                        appointments.filter(
                            item =>
                                item.status ===
                                "Pendente"
                        ).length
                    }
                </strong>
            </div>

            <div class="stat-card">
                <span>Pacientes</span>
                <strong>1.248</strong>
            </div>

            <div class="stat-card">
                <span>Profissionais</span>
                <strong>${professionals.length}</strong>
            </div>

        </div>


        <div class="panel">

            <h3>
                Agenda de hoje
            </h3>

            ${appointmentTable(
                appointments
            )}

        </div>

    `;

}


/* =========================================================
   DASHBOARD PACIENTE
========================================================= */

function renderPatientDashboard(content) {

    const ownAppointments =
        appointments.filter(function(item) {

            return (
                item.patient ===
                currentUser.name
            );

        });


    const next =
        ownAppointments[0];


    content.innerHTML = `

        <div class="page-heading">

            <div>

                <h1>
                    Olá, ${currentUser.name.split(" ")[0]} 👋
                </h1>

                <p>
                    Acompanhe seus atendimentos e sua saúde.
                </p>

            </div>

            <button
                class="primary-button"
                onclick="loadPage('booking')"
            >
                + Agendar consulta
            </button>

        </div>


        <div class="stats">

            <div class="stat-card">
                <span>Próxima consulta</span>
                <strong style="font-size:19px">
                    ${next ? next.date : "Nenhuma"}
                </strong>
            </div>

            <div class="stat-card">
                <span>Consultas realizadas</span>
                <strong>12</strong>
            </div>

            <div class="stat-card">
                <span>Exames</span>
                <strong>5</strong>
            </div>

            <div class="stat-card">
                <span>Prontuários</span>
                <strong>8</strong>
            </div>

        </div>


        <div class="content-grid">

            <div class="panel">

                <h3>
                    Próxima consulta
                </h3>

                ${
                    next

                    ?

                    `

                    <div class="booking-summary">

                        <small>
                            ${next.specialty}
                        </small>

                        <strong>
                            ${next.professional}
                        </strong>

                        <p style="margin-top:8px">
                            ${next.date}
                            ·
                            ${next.time}
                        </p>

                        <p>
                            ${next.type}
                        </p>

                    </div>

                    `

                    :

                    `

                    <div
                        style="
                            padding:20px;
                            color:#718078;
                        "
                    >
                        Você ainda não possui
                        uma consulta agendada.
                    </div>

                    `

                }

            </div>


            <div class="panel">

                <h3>
                    Acesso rápido
                </h3>

                <div
                    style="
                        display:flex;
                        flex-direction:column;
                        gap:10px;
                    "
                >

                    <button
                        class="secondary-button"
                        onclick="loadPage('booking')"
                    >
                        Agendar consulta
                    </button>

                    <button
                        class="secondary-button"
                        onclick="loadPage('myAppointments')"
                    >
                        Minhas consultas
                    </button>

                    <button
                        class="secondary-button"
                        onclick="loadPage('history')"
                    >
                        Meu histórico
                    </button>

                </div>

            </div>

        </div>

    `;

}


/* =========================================================
   TABELA DE CONSULTAS
========================================================= */

function appointmentTable(data) {

    if (!data.length) {

        return `

            <div
                style="
                    padding:25px;
                    text-align:center;
                    color:#718078;
                "
            >
                Nenhum atendimento encontrado.
            </div>

        `;

    }


    return `

        <div class="table-container">

            <table>

                <thead>

                    <tr>

                        <th>
                            Data
                        </th>

                        <th>
                            Horário
                        </th>

                        <th>
                            Paciente
                        </th>

                        <th>
                            Profissional
                        </th>

                        <th>
                            Status
                        </th>

                    </tr>

                </thead>


                <tbody>

                    ${data.map(function(item) {

                        return `

                            <tr>

                                <td>
                                    ${item.date}
                                </td>

                                <td>
                                    ${item.time}
                                </td>

                                <td>
                                    ${item.patient}
                                </td>

                                <td>
                                    ${item.professional}
                                </td>

                                <td>

                                    <span
                                        class="
                                            badge
                                            ${
                                                item.status ===
                                                "Pendente"
                                                    ? "pending"
                                                    : ""
                                            }
                                    "
                                    >

                                        ${item.status}

                                    </span>

                                </td>

                            </tr>

                        `;

                    }).join("")}

                </tbody>

            </table>

        </div>

    `;

}


/* =========================================================
   CONSULTAS - RECEPÇÃO
========================================================= */

function renderAppointments(content) {

    content.innerHTML = `

        <div class="page-heading">

            <div>

                <h1>
                    Consultas
                </h1>

                <p>
                    Controle dos atendimentos.
                </p>

            </div>

            <button
                class="primary-button"
                onclick="openNewAppointmentModal()"
            >
                + Nova consulta
            </button>

        </div>


        <div class="panel">

            ${appointmentTable(
                appointments
            )}

        </div>

    `;

}


/* =========================================================
   NOVA CONSULTA
========================================================= */

function openNewAppointmentModal() {

    showModal(`

        <div class="modal-header">

            <div>

                <h2>
                    Nova consulta
                </h2>

                <p
                    style="
                        color:#718078;
                        margin-top:5px;
                    "
                >
                    Cadastre um novo atendimento.
                </p>

            </div>

            <button
                class="close-modal"
                onclick="closeModal()"
            >
                ×
            </button>

        </div>


        <div class="form-grid">


            <!-- PACIENTE -->

            <div class="form-field">

                <label>
                    Paciente *
                </label>

                <select id="appointmentPatient">

                    <option value="">
                        Selecione o paciente
                    </option>

                    ${patients.map(function(patient) {

                        return `

                            <option
                                value="${patient.name}"
                            >
                                ${patient.name}
                            </option>

                        `;

                    }).join("")}

                </select>

            </div>


            <!-- ESPECIALIDADE -->

            <div class="form-field">

                <label>
                    Especialidade *
                </label>

                <select
                    id="appointmentSpecialty"
                    onchange="updateAppointmentProfessionals()"
                >

                    <option value="">
                        Selecione a especialidade
                    </option>

                    ${specialties.map(function(specialty) {

                        return `

                            <option
                                value="${specialty.name}"
                            >
                                ${specialty.name}
                            </option>

                        `;

                    }).join("")}

                </select>

            </div>


            <!-- PROFISSIONAL -->

            <div class="form-field">

                <label>
                    Profissional *
                </label>

                <select
                    id="appointmentProfessional"
                >

                    <option value="">
                        Primeiro escolha a especialidade
                    </option>

                </select>

            </div>


            <!-- DATA -->

            <div class="form-field">

                <label>
                    Data *
                </label>

                <input
                    type="date"
                    id="appointmentDate"
                >

            </div>


            <!-- HORÁRIO -->

            <div class="form-field">

                <label>
                    Horário *
                </label>

                <select
                    id="appointmentTime"
                >

                    <option value="">
                        Selecione o horário
                    </option>

                    <option value="08:00">
                        08:00
                    </option>

                    <option value="08:30">
                        08:30
                    </option>

                    <option value="09:00">
                        09:00
                    </option>

                    <option value="09:30">
                        09:30
                    </option>

                    <option value="10:00">
                        10:00
                    </option>

                    <option value="10:30">
                        10:30
                    </option>

                    <option value="11:00">
                        11:00
                    </option>

                    <option value="11:30">
                        11:30
                    </option>

                    <option value="14:00">
                        14:00
                    </option>

                    <option value="14:30">
                        14:30
                    </option>

                    <option value="15:00">
                        15:00
                    </option>

                    <option value="15:30">
                        15:30
                    </option>

                    <option value="16:00">
                        16:00
                    </option>

                    <option value="16:30">
                        16:30
                    </option>

                    <option value="17:00">
                        17:00
                    </option>

                </select>

            </div>


            <!-- TIPO -->

            <div class="form-field">

                <label>
                    Tipo de atendimento
                </label>

                <select
                    id="appointmentType"
                >

                    <option value="Presencial">
                        Presencial
                    </option>

                    <option value="Online">
                        Online
                    </option>

                </select>

            </div>


            <!-- STATUS -->

            <div class="form-field">

                <label>
                    Status
                </label>

                <select
                    id="appointmentStatus"
                >

                    <option value="Confirmada">
                        Confirmada
                    </option>

                    <option value="Pendente">
                        Pendente
                    </option>

                </select>

            </div>


            <!-- OBSERVAÇÕES -->

            <div
                class="form-field"
                style="
                    grid-column:1/-1;
                "
            >

                <label>
                    Observações
                </label>

                <textarea
                    id="appointmentNotes"
                    placeholder="Digite alguma observação sobre o atendimento..."
                ></textarea>

            </div>

        </div>


        <div class="form-actions">

            <button
                class="secondary-button"
                onclick="closeModal()"
            >
                Cancelar
            </button>


            <button
                class="primary-button"
                onclick="createAppointment()"
            >
                Agendar consulta
            </button>

        </div>

    `);

}


/* =========================================================
   ATUALIZAR PROFISSIONAIS
========================================================= */

function updateAppointmentProfessionals() {

    const specialty =
        document
            .getElementById(
                "appointmentSpecialty"
            )
            .value;


    const select =
        document
            .getElementById(
                "appointmentProfessional"
            );


    if (!specialty) {

        select.innerHTML = `

            <option value="">
                Primeiro escolha a especialidade
            </option>

        `;

        return;
    }


    const available =
        professionals.filter(function(professional) {

            return (
                professional.specialty ===
                specialty
            );

        });


    if (!available.length) {

        select.innerHTML = `

            <option value="">
                Nenhum profissional disponível
            </option>

        `;

        return;
    }


    select.innerHTML = `

        <option value="">
            Selecione o profissional
        </option>

        ${available.map(function(professional) {

            return `

                <option
                    value="${professional.name}"
                >
                    ${professional.name}
                </option>

            `;

        }).join("")}

    `;

}


/* =========================================================
   CRIAR CONSULTA
========================================================= */

function createAppointment() {

    const patient =
        document
            .getElementById(
                "appointmentPatient"
            )
            .value;


    const specialty =
        document
            .getElementById(
                "appointmentSpecialty"
            )
            .value;


    const professional =
        document
            .getElementById(
                "appointmentProfessional"
            )
            .value;


    const date =
        document
            .getElementById(
                "appointmentDate"
            )
            .value;


    const time =
        document
            .getElementById(
                "appointmentTime"
            )
            .value;


    const type =
        document
            .getElementById(
                "appointmentType"
            )
            .value;


    const status =
        document
            .getElementById(
                "appointmentStatus"
            )
            .value;


    const notes =
        document
            .getElementById(
                "appointmentNotes"
            )
            .value
            .trim();


    /* =====================================================
       VALIDAÇÃO
    ====================================================== */

    if (!patient) {

        showToast(
            "Selecione o paciente."
        );

        return;
    }


    if (!specialty) {

        showToast(
            "Selecione a especialidade."
        );

        return;
    }


    if (!professional) {

        showToast(
            "Selecione o profissional."
        );

        return;
    }


    if (!date) {

        showToast(
            "Selecione a data."
        );

        return;
    }


    if (!time) {

        showToast(
            "Selecione o horário."
        );

        return;
    }


    /* =====================================================
       VERIFICAR CONFLITO
    ====================================================== */

    const formattedDate =
        formatDate(date);


    const conflict =
        appointments.some(function(item) {

            return (
                item.date === formattedDate &&
                item.time === time &&
                item.professional === professional
            );

        });


    if (conflict) {

        showToast(
            "Esse profissional já possui uma consulta nesse horário."
        );

        return;
    }


    /* =====================================================
       CRIAR CONSULTA
    ====================================================== */

    const newAppointment = {

        id:
            Date.now(),

        date:
            formattedDate,

        time:
            time,

        patient:
            patient,

        professional:
            professional,

        specialty:
            specialty,

        type:
            type,

        status:
            status,

        notes:
            notes

    };


    appointments.push(
        newAppointment
    );


    closeModal();


    showToast(
        "Consulta agendada com sucesso!"
    );


    /*
       Atualiza automaticamente
       a tela de consultas.
    */

    setTimeout(function() {

        loadPage("appointments");

    }, 500);

}


/* =========================================================
   AGENDA
========================================================= */

function renderAgenda(content) {

    content.innerHTML = `

        <div class="page-heading">

            <div>

                <h1>
                    Agenda
                </h1>

                <p>
                    Acompanhe os atendimentos da clínica.
                </p>

            </div>


            ${
                currentUser.role === "admin" ||
                currentUser.role === "receptionist"

                ?

                `

                <button
                    class="primary-button"
                    onclick="openNewAppointmentModal()"
                >
                    + Nova consulta
                </button>

                `

                :

                ""

            }

        </div>


        <div class="panel">

            <h3>
                Agenda de atendimentos
            </h3>

            ${appointmentTable(
                appointments
            )}

        </div>

    `;

}


/* =========================================================
   AGENDA PROFISSIONAL
========================================================= */

function renderProfessionalAgenda(content) {

    const data =
        appointments.filter(function(item) {

            return (
                item.professional ===
                currentUser.name
            );

        });


    content.innerHTML = `

        <div class="page-heading">

            <div>

                <h1>
                    Minha agenda
                </h1>

                <p>
                    Seus próximos atendimentos.
                </p>

            </div>

        </div>


        <div class="panel">

            ${appointmentTable(data)}

        </div>

    `;

}


/* =========================================================
   PACIENTES
========================================================= */

function renderPatients(content) {

    content.innerHTML = `

        <div class="page-heading">

            <div>

                <h1>
                    Pacientes
                </h1>

                <p>
                    Cadastro e acompanhamento dos pacientes.
                </p>

            </div>

        </div>


        <div class="panel">

            <div class="table-container">

                <table>

                    <thead>

                        <tr>

                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Telefone</th>
                            <th>Idade</th>
                            <th>Ação</th>

                        </tr>

                    </thead>


                    <tbody>

                        ${patients.map(function(patient) {

                            return `

                                <tr>

                                    <td>
                                        ${patient.name}
                                    </td>

                                    <td>
                                        ${patient.email}
                                    </td>

                                    <td>
                                        ${patient.phone}
                                    </td>

                                    <td>
                                        ${patient.age}
                                    </td>

                                    <td>

                                        <button
                                            class="secondary-button"
                                            onclick="
                                                viewPatient(
                                                    '${patient.name}'
                                                )
                                            "
                                        >
                                            Visualizar
                                        </button>

                                    </td>

                                </tr>

                            `;

                        }).join("")}

                    </tbody>

                </table>

            </div>

        </div>

    `;

}


/* =========================================================
   PROFISSIONAIS
========================================================= */

function renderProfessionals(content) {

    content.innerHTML = `

        <div class="page-heading">

            <div>

                <h1>
                    Profissionais
                </h1>

                <p>
                    Equipe da clínica.
                </p>

            </div>

        </div>


        <div class="professional-grid">

            ${professionals.map(function(professional) {

                return `

                    <div class="professional-card">

                        <div
                            class="professional-card-top"
                        >

                            <div class="avatar">

                                ${getInitials(
                                    professional.name
                                )}

                            </div>


                            <div>

                                <h3>
                                    ${professional.name}
                                </h3>

                                <p>
                                    ${professional.specialty}
                                </p>

                            </div>

                        </div>


                        <p
                            style="
                                margin-top:18px;
                            "
                        >
                            ${professional.crm}
                        </p>

                    </div>

                `;

            }).join("")}

        </div>

    `;

}


/* =========================================================
   ESPECIALIDADES
========================================================= */

function renderSpecialties(content) {

    content.innerHTML = `

        <div class="page-heading">

            <div>

                <h1>
                    Especialidades
                </h1>

                <p>
                    Especialidades oferecidas pela clínica.
                </p>

            </div>

        </div>


        <div class="specialty-grid">

            ${specialties.map(function(item) {

                return `

                    <div class="specialty-card">

                        <div class="specialty-icon">
                            ${item.icon}
                        </div>

                        <h3>
                            ${item.name}
                        </h3>

                        <p>
                            ${item.description}
                        </p>

                    </div>

                `;

            }).join("")}

        </div>

    `;

}


/* =========================================================
   AGENDAMENTO DO PACIENTE
========================================================= */

let bookingData = {

    specialty: "",
    professional: "",
    date: "",
    time: ""

};


function renderBooking(content) {

    content.innerHTML = `

        <div class="page-heading">

            <div>

                <h1>
                    Agendar consulta
                </h1>

                <p>
                    Escolha a especialidade,
                    profissional, data e horário.
                </p>

            </div>

        </div>


        <div class="panel">

            <h3>
                1. Escolha a especialidade
            </h3>


            <div class="specialty-grid">

                ${specialties.slice(0, 4).map(function(item) {

                    return `

                        <div
                            class="specialty-card"
                            onclick="
                                selectSpecialty(
                                    '${item.name}',
                                    this
                                )
                            "
                        >

                            <div class="specialty-icon">
                                ${item.icon}
                            </div>

                            <h3>
                                ${item.name}
                            </h3>

                            <p>
                                ${item.description}
                            </p>

                        </div>

                    `;

                }).join("")}

            </div>


            <div
                id="professionalStep"
                style="
                    margin-top:30px;
                    display:none;
                "
            >

                <h3>
                    2. Escolha o profissional
                </h3>


                <div
                    id="professionalOptions"
                    class="professional-grid"
                >
                </div>

            </div>


            <div
                id="dateStep"
                style="
                    margin-top:30px;
                    display:none;
                "
            >

                <h3>
                    3. Escolha a data
                </h3>


                <div
                    class="form-field"
                    style="margin-top:15px"
                >

                    <input
                        type="date"
                        id="bookingDate"
                        onchange="selectBookingDate()"
                    >

                </div>

            </div>


            <div
                id="timeStep"
                style="
                    margin-top:30px;
                    display:none;
                "
            >

                <h3>
                    4. Escolha o horário
                </h3>


                <div
                    class="time-grid"
                    style="margin-top:15px"
                >

                    ${[
                        "08:00",
                        "09:00",
                        "10:00",
                        "11:00",
                        "14:00",
                        "14:30",
                        "15:30",
                        "16:30"
                    ].map(function(time) {

                        return `

                            <button
                                class="time-button"
                                onclick="
                                    selectTime(
                                        '${time}',
                                        this
                                    )
                                "
                            >
                                ${time}
                            </button>

                        `;

                    }).join("")}

                </div>

            </div>


            <div
                id="bookingConfirmation"
                style="
                    display:none;
                    margin-top:30px;
                "
            >

                <div class="booking-summary">

                    <small>
                        Resumo do agendamento
                    </small>

                    <strong
                        id="bookingSummary"
                    >
                    </strong>

                </div>


                <button
                    class="primary-button"
                    style="
                        width:100%;
                        margin-top:15px;
                    "
                    onclick="confirmBooking()"
                >
                    Confirmar agendamento
                </button>

            </div>

        </div>

    `;

}


/* =========================================================
   SELECIONAR ESPECIALIDADE
========================================================= */

function selectSpecialty(
    specialty,
    element
) {

    bookingData.specialty =
        specialty;

    bookingData.professional = "";

    document
        .querySelectorAll(".specialty-card")
        .forEach(function(card) {

            card.classList.remove(
                "selected"
            );

        });

    element.classList.add(
        "selected"
    );


    document
        .getElementById(
            "professionalStep"
        )
        .style.display =
        "block";


    const available =
        professionals.filter(function(professional) {

            return (
                professional.specialty ===
                specialty
            );

        });


    document
        .getElementById(
            "professionalOptions"
        )
        .innerHTML =

        available.length

        ?

        available.map(function(professional) {

            return `

                <div
                    class="professional-card"
                    onclick="
                        selectProfessional(
                            '${professional.name}',
                            this
                        )
                    "
                >

                    <div
                        class="professional-card-top"
                    >

                        <div class="avatar">

                            ${getInitials(
                                professional.name
                            )}

                        </div>


                        <div>

                            <h3>
                                ${professional.name}
                            </h3>

                            <p>
                                ${professional.specialty}
                            </p>

                        </div>

                    </div>

                </div>

            `;

        }).join("")

        :

        `

        <div
            style="
                color:#718078;
                padding:15px;
            "
        >
            Nenhum profissional disponível
            para esta especialidade.
        </div>

        `;

}


/* =========================================================
   PROFISSIONAL
========================================================= */

function selectProfessional(
    professional,
    element
) {

    bookingData.professional =
        professional;

    document
        .querySelectorAll(
            ".professional-card"
        )
        .forEach(function(card) {

            card.classList.remove(
                "selected"
            );

        });

    element.classList.add(
        "selected"
    );


    document
        .getElementById(
            "dateStep"
        )
        .style.display =
        "block";

}


/* =========================================================
   DATA
========================================================= */

function selectBookingDate() {

    const value =
        document
            .getElementById(
                "bookingDate"
            )
            .value;

    if (!value) {

        return;
    }

    bookingData.date =
        value;


    document
        .getElementById(
            "timeStep"
        )
        .style.display =
        "block";

}


/* =========================================================
   HORÁRIO
========================================================= */

function selectTime(
    time,
    element
) {

    bookingData.time =
        time;

    document
        .querySelectorAll(
            ".time-button"
        )
        .forEach(function(button) {

            button.classList.remove(
                "selected"
            );

        });

    element.classList.add(
        "selected"
    );


    document
        .getElementById(
            "bookingConfirmation"
        )
        .style.display =
        "block";


    document
        .getElementById(
            "bookingSummary"
        )
        .textContent =

        `${bookingData.specialty}
        · ${bookingData.professional}
        · ${formatDate(bookingData.date)}
        · ${bookingData.time}`;

}


/* =========================================================
   CONFIRMAR AGENDAMENTO DO PACIENTE
========================================================= */

function confirmBooking() {

    if (
        !bookingData.specialty ||
        !bookingData.professional ||
        !bookingData.date ||
        !bookingData.time
    ) {

        showToast(
            "Complete todas as etapas."
        );

        return;
    }


    const newAppointment = {

        id:
            Date.now(),

        date:
            formatDate(
                bookingData.date
            ),

        time:
            bookingData.time,

        patient:
            currentUser.name,

        professional:
            bookingData.professional,

        specialty:
            bookingData.specialty,

        type:
            "Presencial",

        status:
            "Pendente",

        notes:
            ""

    };


    appointments.push(
        newAppointment
    );


    showToast(
        "Consulta solicitada com sucesso!"
    );


    bookingData = {

        specialty: "",
        professional: "",
        date: "",
        time: ""

    };


    setTimeout(function() {

        loadPage(
            "myAppointments"
        );

    }, 600);

}


/* =========================================================
   MINHAS CONSULTAS
========================================================= */

function renderMyAppointments(content) {

    const own =
        appointments.filter(function(item) {

            return (
                item.patient ===
                currentUser.name
            );

        });


    content.innerHTML = `

        <div class="page-heading">

            <div>

                <h1>
                    Minhas consultas
                </h1>

                <p>
                    Consulte seus próximos atendimentos.
                </p>

            </div>


            <button
                class="primary-button"
                onclick="loadPage('booking')"
            >
                + Nova consulta
            </button>

        </div>


        <div class="panel">

            ${appointmentTable(own)}

        </div>

    `;

}


/* =========================================================
   HISTÓRICO
========================================================= */

function renderHistory(content) {

    content.innerHTML = `

        <div class="page-heading">

            <div>

                <h1>
                    Meu histórico
                </h1>

                <p>
                    Consulte seus atendimentos anteriores.
                </p>

            </div>

        </div>


        <div class="panel">

            <div class="table-container">

                <table>

                    <thead>

                        <tr>

                            <th>Data</th>
                            <th>Especialidade</th>
                            <th>Profissional</th>
                            <th>Tipo</th>

                        </tr>

                    </thead>


                    <tbody>

                        <tr>

                            <td>
                                20/09/2026
                            </td>

                            <td>
                                Psicologia
                            </td>

                            <td>
                                Dra. Mariana Costa
                            </td>

                            <td>
                                Presencial
                            </td>

                        </tr>


                        <tr>

                            <td>
                                10/08/2026
                            </td>

                            <td>
                                Clínica Médica
                            </td>

                            <td>
                                Dr. Rafael Almeida
                            </td>

                            <td>
                                Presencial
                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>

        </div>

    `;

}


/* =========================================================
   PRONTUÁRIOS
========================================================= */

function renderRecords(content) {

    content.innerHTML = `

        <div class="page-heading">

            <div>

                <h1>
                    Prontuários
                </h1>

                <p>
                    Registros dos pacientes atendidos.
                </p>

            </div>

        </div>


        <div class="panel">

            <h3>
                Pacientes recentes
            </h3>


            ${patients.map(function(patient) {

                return `

                    <div
                        style="
                            display:flex;
                            align-items:center;
                            justify-content:space-between;
                            padding:15px 0;
                            border-bottom:1px solid #e1e7e3;
                        "
                    >

                        <div>

                            <strong>
                                ${patient.name}
                            </strong>

                            <p
                                style="
                                    color:#718078;
                                    margin-top:4px;
                                "
                            >
                                Última consulta:
                                20/09/2026
                            </p>

                        </div>


                        <button
                            class="secondary-button"
                            onclick="
                                viewPatient(
                                    '${patient.name}'
                                )
                            "
                        >
                            Abrir prontuário
                        </button>

                    </div>

                `;

            }).join("")}

        </div>

    `;

}


/* =========================================================
   RELATÓRIOS
========================================================= */

function renderReports(content) {

    content.innerHTML = `

        <div class="page-heading">

            <div>

                <h1>
                    Relatórios
                </h1>

                <p>
                    Indicadores da clínica.
                </p>

            </div>

        </div>


        <div class="stats">

            <div class="stat-card">
                <span>Atendimentos no mês</span>
                <strong>428</strong>
            </div>

            <div class="stat-card">
                <span>Novos pacientes</span>
                <strong>86</strong>
            </div>

            <div class="stat-card">
                <span>Cancelamentos</span>
                <strong>12</strong>
            </div>

            <div class="stat-card">
                <span>Comparecimento</span>
                <strong>94%</strong>
            </div>

        </div>

    `;

}


/* =========================================================
   CONFIGURAÇÕES
========================================================= */

function renderSettings(content) {

    content.innerHTML = `

        <div class="page-heading">

            <div>

                <h1>
                    Configurações
                </h1>

                <p>
                    Configurações gerais da clínica.
                </p>

            </div>

        </div>


        <div class="panel">

            <div class="form-grid">

                <div class="form-field">

                    <label>
                        Nome da clínica
                    </label>

                    <input
                        value="Espaço Mente e Corpo"
                    >

                </div>


                <div class="form-field">

                    <label>
                        Telefone
                    </label>

                    <input
                        value="(81) 3333-4444"
                    >

                </div>


                <div class="form-field">

                    <label>
                        E-mail
                    </label>

                    <input
                        value="contato@espacomenteecorpo.com"
                    >

                </div>


                <div class="form-field">

                    <label>
                        Horário de funcionamento
                    </label>

                    <input
                        value="08:00 às 18:00"
                    >

                </div>

            </div>


            <div class="form-actions">

                <button
                    class="primary-button"
                    onclick="
                        showToast(
                            'Configurações salvas.'
                        )
                    "
                >
                    Salvar alterações
                </button>

            </div>

        </div>

    `;

}


/* =========================================================
   PERFIL
========================================================= */

function renderProfile(content) {

    content.innerHTML = `

        <div class="page-heading">

            <div>

                <h1>
                    Meu perfil
                </h1>

                <p>
                    Informações da sua conta.
                </p>

            </div>

        </div>


        <div class="panel">

            <div class="form-grid">

                <div class="form-field">

                    <label>
                        Nome
                    </label>

                    <input
                        value="${currentUser.name}"
                    >

                </div>


                <div class="form-field">

                    <label>
                        E-mail
                    </label>

                    <input
                        value="${currentUser.email}"
                    >

                </div>


                <div class="form-field">

                    <label>
                        Perfil
                    </label>

                    <input
                        value="${getRoleName(
                            currentUser.role
                        )}"
                        disabled
                    >

                </div>


                <div class="form-field">

                    <label>
                        Especialidade
                    </label>

                    <input
                        value="${
                            currentUser.specialty ||
                            "Não informado"
                        }"
                    >

                </div>

            </div>


            <div class="form-actions">

                <button
                    class="primary-button"
                    onclick="
                        showToast(
                            'Perfil atualizado.'
                        )
                    "
                >
                    Salvar alterações
                </button>

            </div>

        </div>

    `;

}


/* =========================================================
   USUÁRIOS
========================================================= */

function renderUsers(content) {

    content.innerHTML = `

        <div class="page-heading">

            <div>

                <h1>
                    Usuários
                </h1>

                <p>
                    Gerencie os acessos ao sistema.
                </p>

            </div>


            <button
                class="primary-button"
                onclick="openCreateUserModal()"
            >
                + Criar usuário
            </button>

        </div>


        <div class="panel">

            <div class="table-container">

                <table>

                    <thead>

                        <tr>

                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Perfil</th>
                            <th>Especialidade</th>
                            <th>Status</th>
                            <th>Ação</th>

                        </tr>

                    </thead>


                    <tbody>

                        ${users.map(function(user) {

                            return `

                                <tr>

                                    <td>
                                        ${user.name}
                                    </td>

                                    <td>
                                        ${user.email}
                                    </td>

                                    <td>
                                        ${getRoleName(user.role)}
                                    </td>

                                    <td>
                                        ${user.specialty || "—"}
                                    </td>

                                    <td>

                                        <span class="badge">
                                            Ativo
                                        </span>

                                    </td>

                                    <td>

                                        <button
                                            class="secondary-button"
                                            onclick="
                                                editUser(
                                                    ${user.id}
                                                )
                                            "
                                        >
                                            Editar
                                        </button>

                                    </td>

                                </tr>

                            `;

                        }).join("")}

                    </tbody>

                </table>

            </div>

        </div>

    `;

}


/* =========================================================
   CRIAR USUÁRIO
========================================================= */

function openCreateUserModal() {

    showModal(`

        <div class="modal-header">

            <div>

                <h2>
                    Criar usuário
                </h2>

                <p
                    style="
                        color:#718078;
                        margin-top:5px;
                    "
                >
                    Crie um novo acesso para a clínica.
                </p>

            </div>


            <button
                class="close-modal"
                onclick="closeModal()"
            >
                ×
            </button>

        </div>


        <div class="form-grid">


            <div class="form-field">

                <label>
                    Nome completo *
                </label>

                <input
                    id="newName"
                    placeholder="Nome completo"
                >

            </div>


            <div class="form-field">

                <label>
                    E-mail *
                </label>

                <input
                    id="newEmail"
                    type="email"
                    placeholder="email@clinica.com"
                >

            </div>


            <div class="form-field">

                <label>
                    Senha *
                </label>

                <input
                    id="newPassword"
                    type="password"
                    placeholder="Senha"
                >

            </div>


            <div class="form-field">

                <label>
                    Perfil *
                </label>

                <select id="newRole">

                    <option value="psychologist">
                        Psicóloga
                    </option>

                    <option value="doctor">
                        Médico
                    </option>

                    <option value="receptionist">
                        Recepção
                    </option>

                    <option value="patient">
                        Paciente
                    </option>

                </select>

            </div>


            <div class="form-field">

                <label>
                    Especialidade
                </label>

                <input
                    id="newSpecialty"
                    placeholder="Ex.: Psicologia"
                >

            </div>

        </div>


        <div class="form-actions">

            <button
                class="secondary-button"
                onclick="closeModal()"
            >
                Cancelar
            </button>


            <button
                class="primary-button"
                onclick="createUser()"
            >
                Criar usuário
            </button>

        </div>

    `);

}


/* =========================================================
   CRIAR USUÁRIO
========================================================= */

function createUser() {

    const name =
        document
            .getElementById("newName")
            .value
            .trim();

    const email =
        document
            .getElementById("newEmail")
            .value
            .trim();

    const password =
        document
            .getElementById("newPassword")
            .value;

    const role =
        document
            .getElementById("newRole")
            .value;

    const specialty =
        document
            .getElementById("newSpecialty")
            .value
            .trim();


    if (
        !name ||
        !email ||
        !password
    ) {

        showToast(
            "Preencha os campos obrigatórios."
        );

        return;
    }


    if (
        users.some(
            user =>
                user.email.toLowerCase() ===
                email.toLowerCase()
        )
    ) {

        showToast(
            "Este e-mail já está cadastrado."
        );

        return;
    }


    users.push({

        id:
            Date.now(),

        name:
            name,

        email:
            email,

        password:
            password,

        role:
            role,

        specialty:
            specialty

    });


    closeModal();

    showToast(
        "Usuário criado com sucesso."
    );

    loadPage("users");

}


/* =========================================================
   VISUALIZAR PACIENTE
========================================================= */

function viewPatient(name) {

    const patient =
        patients.find(
            item =>
                item.name === name
        );


    showModal(`

        <div class="modal-header">

            <div>

                <h2>
                    ${name}
                </h2>

                <p
                    style="
                        color:#718078;
                        margin-top:5px;
                    "
                >
                    Informações do paciente
                </p>

            </div>


            <button
                class="close-modal"
                onclick="closeModal()"
            >
                ×
            </button>

        </div>


        <div class="stats">

            <div class="stat-card">

                <span>
                    Idade
                </span>

                <strong>
                    ${patient ? patient.age : "—"}
                </strong>

            </div>


            <div class="stat-card">

                <span>
                    Consultas
                </span>

                <strong>
                    ${
                        appointments.filter(
                            item =>
                                item.patient === name
                        ).length
                    }
                </strong>

            </div>

        </div>


        <div class="panel">

            <h3>
                Contato
            </h3>

            <p>
                ${patient ? patient.email : "—"}
            </p>

            <p style="margin-top:6px">
                ${patient ? patient.phone : "—"}
            </p>

        </div>

    `);

}


/* =========================================================
   EDITAR USUÁRIO
========================================================= */

function editUser(id) {

    const user =
        users.find(
            item =>
                item.id === id
        );


    if (!user) {

        return;
    }


    showModal(`

        <div class="modal-header">

            <div>

                <h2>
                    Editar usuário
                </h2>

                <p
                    style="
                        color:#718078;
                    "
                >
                    ${user.name}
                </p>

            </div>


            <button
                class="close-modal"
                onclick="closeModal()"
            >
                ×
            </button>

        </div>


        <div class="form-grid">

            <div class="form-field">

                <label>
                    Nome
                </label>

                <input
                    id="editName"
                    value="${user.name}"
                >

            </div>


            <div class="form-field">

                <label>
                    E-mail
                </label>

                <input
                    id="editEmail"
                    value="${user.email}"
                >

            </div>


            <div class="form-field">

                <label>
                    Perfil
                </label>

                <select id="editRole">

                    <option value="admin">
                        Administrador
                    </option>

                    <option value="psychologist">
                        Psicóloga
                    </option>

                    <option value="doctor">
                        Médico
                    </option>

                    <option value="receptionist">
                        Recepção
                    </option>

                    <option value="patient">
                        Paciente
                    </option>

                </select>

            </div>


            <div class="form-field">

                <label>
                    Especialidade
                </label>

                <input
                    id="editSpecialty"
                    value="${user.specialty || ""}"
                >

            </div>

        </div>


        <div class="form-actions">

            <button
                class="secondary-button"
                onclick="closeModal()"
            >
                Cancelar
            </button>


            <button
                class="primary-button"
                onclick="
                    saveEditedUser(${user.id})
                "
            >
                Salvar
            </button>

        </div>

    `);


    document
        .getElementById("editRole")
        .value =
        user.role;

}


/* =========================================================
   SALVAR USUÁRIO
========================================================= */

function saveEditedUser(id) {

    const user =
        users.find(
            item =>
                item.id === id
        );


    if (!user) {

        return;
    }


    user.name =
        document
            .getElementById(
                "editName"
            )
            .value
            .trim();


    user.email =
        document
            .getElementById(
                "editEmail"
            )
            .value
            .trim();


    user.role =
        document
            .getElementById(
                "editRole"
            )
            .value;


    user.specialty =
        document
            .getElementById(
                "editSpecialty"
            )
            .value
            .trim();


    closeModal();

    showToast(
        "Usuário atualizado."
    );

    loadPage("users");

}


/* =========================================================
   MODAL
========================================================= */

function showModal(content) {

    document
        .getElementById("modal")
        .innerHTML =
        content;


    document
        .getElementById("modalOverlay")
        .classList
        .remove("hidden");

}


function closeModal() {

    document
        .getElementById("modalOverlay")
        .classList
        .add("hidden");

}


/* =========================================================
   LOGOUT
========================================================= */

function logout() {

    currentUser = null;


    document
        .getElementById("systemScreen")
        .classList
        .add("hidden");


    document
        .getElementById("loginScreen")
        .classList
        .remove("hidden");


    document
        .getElementById("loginForm")
        .reset();

}


/* =========================================================
   UTILIDADES
========================================================= */

function getRoleName(role) {

    const roles = {

        admin: "Administrador",

        psychologist: "Psicóloga",

        doctor: "Médico",

        receptionist: "Recepção",

        patient: "Paciente"

    };


    return roles[role] || role;

}


function getInitials(name) {

    return name
        .split(" ")
        .slice(0, 2)
        .map(function(item) {

            return item[0];

        })
        .join("")
        .toUpperCase();

}


function formatDate(date) {

    if (!date) {

        return "";

    }


    const parts =
        date.split("-");


    return `${parts[2]}/${parts[1]}/${parts[0]}`;

}


function getTodayAppointmentsCount() {

    return appointments.length;

}


/* =========================================================
   NOTIFICAÇÕES
========================================================= */

function notificationMessage() {

    showToast(
        "Você possui 3 notificações."
    );

}


function forgotPassword() {

    showToast(
        "A recuperação de senha será implementada posteriormente."
    );

}


function registerMessage() {

    showToast(
        "O cadastro é realizado pela clínica."
    );

}


/* =========================================================
   TOAST
========================================================= */

function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        window.toastTimer
    );


    window.toastTimer =
        setTimeout(function() {

            toast.classList.remove(
                "show"
            );

        }, 2800);

}


/* =========================================================
   FECHAR MODAL CLICANDO FORA
========================================================= */

document
    .getElementById("modalOverlay")
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target === this
            ) {

                closeModal();

            }

        }
    );