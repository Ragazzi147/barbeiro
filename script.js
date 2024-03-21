// Mock de dados
const services = {
    degrade: { name: "Corte Degrade", price: 40 },
    social: { name: "Corte Social", price: 35 },
    beard: { name: "Barba", price: 25 },
    foot: { name: "Pezinho", price: 10 },
    degradeBeard: { name: "Corte Degrade + Barba", price: 65 },
    socialBeard: { name: "Corte Social + Barba", price: 60 },
    fatherSonDegrade: { name: "Combo Pai e Filho Degrade", price: 75 },
    fatherSonSocial: { name: "Combo Pai e Filho Social", price: 65 },
    platinumShortHair: { name: "Platinado Cabelo Curto", price: 90 },
    highlights: { name: "Luzes", price: 70 }
};

// Exibir serviços quando um barbeiro é selecionado
document.querySelectorAll('.barber').forEach(barber => {
    barber.addEventListener('click', () => {
        document.getElementById('services').style.display = 'block';
    });
});

// Exibir datas quando um serviço é selecionado
document.querySelectorAll('.service').forEach(service => {
    service.addEventListener('click', () => {
        document.getElementById('dates').style.display = 'block';
    });
});

// Exibir horários quando uma data é selecionada
function showTimes() {
    document.getElementById('times').style.display = 'block';
    // Lógica para mostrar os horários disponíveis
}

// Exibir formulário de preenchimento de dados
function showForm() {
    document.getElementById('form').style.display = 'block';
}

// Agendar compromisso e enviar mensagem via WhatsApp
function scheduleAppointment() {
    const name = document.getElementById('name-input').value;
    const phone = document.getElementById('phone-input').value;
    const service = document.querySelector('.service.active').id;
    const date = document.getElementById('date-input').value;
    const time = document.getElementById('time-select').value;

    const message = `Olá Bruno, gostaria de agendar um ${services[service].name} para ${date} às ${time}. Nome: ${name}, Telefone: ${phone}.`;

    // Lógica para enviar mensagem via WhatsApp
}
