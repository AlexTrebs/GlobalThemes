import * as actions from "./index";

describe("todo actions", () => {
  it("getTheme should create GET_THEME action", () => {
    expect(actions.getTheme("Colour Name")).toEqual({
      type: "GET_THEME",
      name: "Use Redux",
    });
  });

  it("addTheme should create ADD_THEME action", () => {
    expect(actions.addTheme("Colour Name", { theme: "Brown" })).toEqual({
      type: "ADD_THEME",
      name: "Colour Name",
      theme: { theme: "Brown" },
    });
  });

  it("setCurrentTheme should create SET_CURRENT_THEME action", () => {
    expect(actions.setCurrentTheme("Colour Name")).toEqual({
      type: "SET_CURRENT_THEME",
      name: "Colour Name",
    });
  });
});
