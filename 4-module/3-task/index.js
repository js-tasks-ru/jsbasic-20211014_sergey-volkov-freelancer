function highlight(table) {
  const rows = Array.from(table.rows).slice(1);

  rows.forEach(row => {
    const age = row.cells[1];
    const gender = row.cells[2];
    const status = row.cells[3];

    if ('available' in status.dataset) {
      const statusClass = status.dataset.available === 'true' ? 'available' : 'unavailable';
      row.classList.add(statusClass);
    } else {
      row.setAttribute('hidden', true);
    }

    if (Number(age.innerText) < 18) {
      row.style.textDecoration = "line-through";
    }

    const genderClass = gender.innerText === 'm' ? 'male' : 'female';
    row.classList.add(genderClass);
  });
}
