/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(data) {
    this.data = data;
    this.render();
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.innerHTML = `
      <table>
          <thead>
              <tr>
                  <th>Имя</th>
                  <th>Возраст</th>
                  <th>Зарплата</th>
                  <th>Город</th>
                  <th></th>
              </tr>
          </thead>
          <tbody>

          </tbody>
      </table>
    `;

    this.fillTable();
  }

  fillTable() {
    const tableBody = this.elem.querySelector('tbody');

    for (let dataRow of this.data) {
      const row = this.createRow(dataRow);
      tableBody.append(row);
    }

    function onRemoveButtonClick(evt) {
      if (evt.target.tagName === 'BUTTON') {
        evt.target.closest('tr').remove();
      }
    }

    tableBody.addEventListener('click', onRemoveButtonClick);
  }

  createRow(obj) {
    const row = document.createElement('tr');

    for (let prop in obj) {
      const cell = this.createCell(obj[prop]);
      row.append(cell);
    }

    const button = document.createElement('td');
    button.innerHTML = `<button>X</button>`;
    row.append(button);

    return row;
  }

  createCell(value) {
    const cell = document.createElement('td');
    cell.innerText = value;

    return cell;
  }
}
