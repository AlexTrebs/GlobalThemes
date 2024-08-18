"use strict";

var actions = _interopRequireWildcard(require("./index"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
describe("todo actions", () => {
  it("getTheme should create GET_THEME action", () => {
    expect(actions.getTheme("Colour Name")).toEqual({
      type: "GET_THEME",
      name: "Use Redux"
    });
  });
  it("addTheme should create ADD_THEME action", () => {
    expect(actions.addTheme("Colour Name", {
      theme: "Brown"
    })).toEqual({
      type: "ADD_THEME",
      name: "Colour Name",
      theme: {
        theme: "Brown"
      }
    });
  });
  it("setCurrentTheme should create SET_CURRENT_THEME action", () => {
    expect(actions.setCurrentTheme("Colour Name")).toEqual({
      type: "SET_CURRENT_THEME",
      name: "Colour Name"
    });
  });
});