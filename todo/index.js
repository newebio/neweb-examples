"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neweb_1 = require("neweb");
const layout_1 = require("./layout");
const store_1 = require("./store");
const store = new store_1.default();
neweb_1.render(layout_1.default({
    todos: store.todos,
    onAdd: (text) => alert(text),
}), document.getElementById("root"));
