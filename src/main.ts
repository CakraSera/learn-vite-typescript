import "./style.css"; // Assuming this file exists and provides necessary styles

const app = document.getElementById("app");

let initialName: string = "";

// Make handleInput globally accessible for the inline HTML attribute,
// especially if this script is treated as a module (due to 'import').

function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  const name = form.get("name");
  console.log({ name });
  initialName = name ?? "";
  renderApp();
}

function renderApp() {
  app.innerHTML = `
    <div>
      <form id="form-name" type="post">
        <label for="nameInput">Nama:</label>
        <input
          class="border"
          type="text"
          id="nameInput"
          name="name" 
          placeholder="Enter your name here"
        />
        <button type="submit" class="border ml-2 p-1">Set Name</button> 
      </form>
      <div>
        <h1>Halo nama saya ${initialName}</h1>
      </div>
    </div>
  `;

  const formElement = document.getElementById("form-name");
  formElement?.addEventListener("submit", handleSubmit);
}
// Initial render of the application
renderApp();
