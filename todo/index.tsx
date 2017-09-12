import { render } from "neweb";
import Layout from "./layout";
import Store from "./store";
const store = new Store();
render(Layout({
    todos: store.todos,
    onAdd: (text) => alert(text),
}), document.getElementById("root") as any);
