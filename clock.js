window.onload = function() {
    // Função para obter o valor do parâmetro "day" da URL
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const today = new Date();

    // Obtém o valor do parâmetro "day" da URL
    const selectedDayIndex = parseInt(getUrlParameter('day'));

    if (!isNaN(selectedDayIndex) && selectedDayIndex >= 0 && selectedDayIndex < 30) {
        const date = new Date(today.getTime() + selectedDayIndex * 24 * 60 * 60 * 1000); // Adiciona o índice do dia à data atual
        const dayOfWeek = daysOfWeek[date.getDay()];
        const dayOfMonth = date.getDate();

        const scheduleDiv = document.getElementById('schedule');

        const heading = document.createElement('h2');
        heading.textContent = `${dayOfWeek}, ${dayOfMonth}`;
        scheduleDiv.appendChild(heading);

        const timesDiv = document.createElement('div');
        timesDiv.classList.add('times');
        timesDiv.innerHTML = generateTimes(); // Aqui você pode adicionar os horários disponíveis
        scheduleDiv.appendChild(timesDiv);
    } else {
        // Se não houver um valor válido para o parâmetro "day", exibe uma mensagem de erro
        const errorHeading = document.createElement('h2');
        errorHeading.textContent = 'Erro: Dia inválido.';
        scheduleDiv.appendChild(errorHeading);
    }
}

function generateTimes() {
    // Array de horários disponíveis
    const times = [];
    
    // Adiciona os horários da manhã
    for (let hour = 8; hour <= 11; hour++) {
        times.push(`<a href="dados.html?time=${hour < 10 ? '0' + hour : hour}:00">${hour < 10 ? '0' + hour : hour}:00</a>`);
        times.push(`<a href="dados.html?time=${hour < 10 ? '0' + hour : hour}:30">${hour < 10 ? '0' + hour : hour}:30</a>`);
    }
    
    // Adiciona os horários da tarde, exceto 18:30
    for (let hour = 14; hour <= 18; hour++) {
        times.push(`<a href="dados.html?time=${hour < 10 ? '0' + hour : hour}:00">${hour < 10 ? '0' + hour : hour}:00</a>`);
        if (hour < 18) {
            times.push(`<a href="dados.html?time=${hour < 10 ? '0' + hour : hour}:30">${hour < 10 ? '0' + hour : hour}:30</a>`);
        }
    }
    
    // Formata os horários em uma lista HTML
    const timesList = times.map(time => `<li>${time}</li>`).join('');
    
    return `<ul>${timesList}</ul>`;
}


