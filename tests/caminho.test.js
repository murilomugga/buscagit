const { caminho } = require("../caminho");
describe("Extrai hashtag da URL", () => {
  it("Caminho vira objeto de 2 valores (usuário e repositório) ", () => {
    expect(caminho('#usuario/repo').length).toEqual(2);
  });
});
