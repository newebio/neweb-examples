"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neweb_1 = require("neweb");
exports.default = ({ onAdd, todos }) => {
    return neweb_1.h("section", { className: "todoapp" },
        neweb_1.h("header", { className: "header" },
            neweb_1.h("h1", null, "todos"),
            neweb_1.h("input", { onChange: (e) => onAdd(e.target.value), className: "new-todo", placeholder: "What needs to be done?", autofocus: true })),
        neweb_1.h("section", { className: "main", style: { display: "block" } },
            neweb_1.h("input", { className: "toggle-all", type: "checkbox" }),
            neweb_1.h("label", { for: "toggle-all" }, "Mark all as complete"),
            neweb_1.h("ul", { className: "todo-list" }, todos.map((todo) => {
                return neweb_1.h("li", { "data-id": "1505240074025", className: "" },
                    neweb_1.h("div", { className: "view" },
                        neweb_1.h("input", { className: "toggle", type: "checkbox" }),
                        neweb_1.h("label", null, todo),
                        neweb_1.h("button", { className: "destroy" })));
            }))));
};
