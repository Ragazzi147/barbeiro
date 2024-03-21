const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware para analisar o corpo das solicitações
app.use(bodyParser.json());

// Mock de dados
const services = {
    degrade: { name: "Corte Degrade", price: 40 },
    social: { name: "Corte Social", price: 35 },
    // Adicione outros serviços aqui
};

let selectedBarber = null;
let selectedService = null;
let selectedDate = null;
let selectedTime = null;

// Endpoint para selecionar um barbeiro
app.post('/select-barber', (req, res) => {
    const { barber } = req.body;
    selectedBarber = barber;
    res.sendStatus(200);
});

// Endpoint para selecionar um serviço
app.post('/select-service', (req, res) => {
    const { service } = req.body;
    selectedService = service;
    res.sendStatus(200);
});

// Endpoint para selecionar uma data
app.post('/select-date', (req, res) => {
    const { date } = req.body;
    selectedDate = date;
    res.sendStatus(200);
});

// Endpoint para selecionar um horário
app.post('/select-time', (req, res) => {
    const { time } = req.body;
    selectedTime = time;
    res.sendStatus(200);
});

// Endpoint para agendar um corte
app.post('/schedule-appointment', (req, res) => {
    const { name, phone } = req.body;
    // Lógica para enviar mensagem via WhatsApp com os dados agendados
    res.status(200).json({ name, phone, selectedBarber, selectedService, selectedDate, selectedTime });
});

app.get('/', (req, res) => {
    res.send('Seja bem-vindo ao servidor de agendamento de cortes de cabelo!');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
