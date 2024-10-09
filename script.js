// s'il chagir dun seul tabele

// document.addEventListener('DOMContentLoaded', () => {
//     const tableDiv = document.getElementById('multiplication-table');
//     let tableHTML = '<table><tr><th>Multiplication de 1</th></tr>';

//     for (let i = 1; i <= 9; i++) {
//         tableHTML += `<tr><td>1 x ${i} = ${1 * i}</td></tr>`;

         
//     }

//     tableHTML += '</table>';
//     tableDiv.innerHTML = tableHTML;
// });


document.addEventListener('DOMContentLoaded', () => {
    const tableDiv = document.getElementById('multiplication-table');
    let tableHTML = '<table>';

    for (let i = 1; i <= 9; i++) {
        tableHTML += `<tr><th>Multiplication de ${i}</th></tr> `;
        for (let j = 1; j <= 9; j++) {
            tableHTML += `<tr><td>${i} x ${j} = ${i * j}</td></tr>`;
        }
    }

    tableHTML += '</table>';
    tableDiv.innerHTML = tableHTML;
});
