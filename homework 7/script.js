 document.getElementById('generateBtn').addEventListener('click', function() {
            let rows = document.getElementById('rows').value;
            let columns = document.getElementById('columns').value;

            if (rows <= 0 || columns <= 0) {
                alert("Please enter positive values for rows and columns.");
                return;
            }

            let table = document.createElement('table');
            table.style.border = '1px solid black';
            table.style.borderCollapse = 'collapse';

            for (let i = 0; i < rows; i++) {
                let row = document.createElement('tr');

                for (let j = 0; j < columns; j++) {
                    let cell = document.createElement('td');
                    cell.style.padding = '10px';
                    cell.style.border = '1px solid black';
                    cell.textContent = `Row ${i + 1}, Col ${j + 1}`;
                    row.appendChild(cell);
                }

                table.appendChild(row);
            }

            let tableContainer = document.getElementById('tableContainer');
            tableContainer.innerHTML = '';
            tableContainer.appendChild(table);
        });