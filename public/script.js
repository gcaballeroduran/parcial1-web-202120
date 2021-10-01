const enterButton = document.getElementById('enter');
const input = document.getElementById('inputText');
const tableSection = document.getElementById('table-section');
const table = document.getElementById('table');
const tbody = document.getElementById('body-table');
const message = document.getElementById('message');

const dataContainer = document.getElementById('data-container');

//cargar datos
function callApi() {
  fetch(
    `https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players `
  )
    .then((resp) => resp.json())
    .then((data) => {
      console.log('values', data);
      render(data);
    });
}

//implementar tabla
function render(data) {
  const tbody = document.getElementById('body-table');
  data.forEach((elm) => {
    const fil = document.createElement('div');
    fil.innerHTML = renderFila(elm);
    tbody.appendChild(fil);
  });
}

function renderFila(elm) {
  const template = getTemplate(elm); 
  return template;
}
/**
 *  HTML con la fila de los pares
 */
const getTemplate = (json) => `
<tr>
<th> hola</th>
<th> ${json.first_name}</th>
<th> ${json.first_name}</th>
</tr> `;

enterButton.addEventListener('click', (event) => {
  //llamar a la api para cargar los datos
  callApi();
  getresults(123);
  event.preventDefault();
});

/**
 * Llamado al backend con queryParam
 * @param {*} heightRef
 */
async function getresults(heightRef) {
  const resp = await fetch(`api?input=${heightRef}`);
  const data = await resp.json();
  console.log('data from back', data);
  printValues(data);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};