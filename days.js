window.onload = function() {
    const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const today = new Date();
    
    const daysList = document.getElementById('daysList');
    
    for (let i = 0; i < 30; i++) {
        const date = new Date(today.getTime() + i * 24 * 60 * 60 * 1000); // Adiciona i dias à data atual
        const dayOfWeek = daysOfWeek[date.getDay()];
        const dayOfMonth = date.getDate();
        
        const dayLink = document.createElement('a');
        dayLink.classList.add('day');
        dayLink.href = `clock.html?day=${i}`; // Adiciona o dia como parâmetro na URL
        dayLink.textContent = `${dayOfWeek}, ${dayOfMonth}`;
        
        const listItem = document.createElement('li');
        listItem.appendChild(dayLink);
        daysList.appendChild(listItem);
    }
}
