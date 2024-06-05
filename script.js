function createVisitCards() {
    var name = prompt('Введіть ім\'я', 'Юлія');
    var position = prompt('Введіть посаду', 'Студентка');
    var phone = prompt('Введіть телефон', '+380970534471');

    var visitCardContent = `
        <div class="visit-card">
            <img src="./img/photo_5402374886598499946_y.jpg"" alt="Логотип">
            <p>${name}</p>
            <p>${position}</p>
            <p>${phone}</p>
        </div>
    `;

    var visitCardHTML = '';
    for (var i = 0; i < 12; i++) {
        visitCardHTML += '<tr>';
        for (var j = 0; j < 3; j++) {
            visitCardHTML += `<td>${visitCardContent}</td>`;
        }
        visitCardHTML += '</tr>';
    }

    document.getElementById('visit-card-table').innerHTML = visitCardHTML;
}

window.onload = createVisitCards;