const ui = {
  input: document.getElementById("user-input"),
  button: document.getElementById("spell-btn"),
  result: document.getElementById("spell-result"),
};

const run = (inputVal) => {
  const symbolArr = check(inputVal);

  for (let symbol of symbolArr) {
    const element = lookup(symbol);

    const { nameEl, numberEl, symbolEl } = createElemenetUi(element);

    ui.result.append(nameEl);
    ui.result.append(numberEl);
    ui.result.append(symbolEl);
  }
};

ui.button.addEventListener("click", () => run(ui.input.value));

function createElemenetUi({ name, number, symbol }) {
  const [nameEl, numberEl, symbolEl] = [
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
  ];

  nameEl.classList.add("name");
  numberEl.classList.add("number");
  symbolEl.classList.add("symbol");

  nameEl.innerHTML = name;
  numberEl.innerHTML = number;
  symbolEl.innerHTML = symbol;

  return { nameEl, numberEl, symbolEl };
}
