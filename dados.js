window.onload = function() {
    const appointmentForm = document.getElementById('appointmentForm');

    appointmentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;

        // Constrói a mensagem do agendamento
        const message = `* * * * 📆 MEU AGENDAMENTO * * * *\n👥 CLIENTE: *${name}*\n📞 TELEFONE: ${phone}\n=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=\n📌 DIA ${selectedDayOfMonth < 10 ? '0' + selectedDayOfMonth : selectedDayOfMonth}-${selectedMonth < 10 ? '0' + selectedMonth : selectedMonth}-${selectedYear}\n⌚ HORÁRIO ${selectedTime}\n\n💇🏽‍♂️ PROFISSIONAL\nBruno\n\n✂ SERVIÇO\nCorte Degrade - R$40.00\n\n=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=\nCASO DESEJE CANCELAR O AGENDAMENTO\n❌ https://minhaagenda.digital/Bruno22br/X.php?x=jrceahlv ❌\n\nCOMPROVANTE DE AGENDAMENTO`;

        // Enviar a mensagem para o WhatsApp do barbeiro (você precisa implementar essa parte)
        sendWhatsAppMessage(message);
    });
}

function sendWhatsAppMessage(message) {
    // Você precisa implementar o código para enviar a mensagem para o WhatsApp do barbeiro
    // Isso pode ser feito usando uma API de terceiros que permita enviar mensagens do WhatsApp programaticamente
    // Ou, se o barbeiro estiver usando um serviço que permita integração com o WhatsApp, você pode usar essa integração
}
