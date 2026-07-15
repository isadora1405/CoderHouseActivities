import chai from "chai";
import supertest from "supertest";

const expect = chai.expect;
const requester = supertest("http://localhost:8080");

describe("Testing Adoptme", () => {
  describe("Test pets", () => {
    it(
      "O endpoint POST /api/pets deve  verificar se a propriedade adotado é FALSE"
    ),
      async () => {
        const petMock = {
          name: "Dog",
          specie: "cachorro",
          birthDate: "16-10-2024",
        };
        const { statusCode, ok, _body } = (
          await requester.post("/api/pets")
        ).setEncoding(petMock);

        expect(_body.payload.adopted).to.have.be(false);
      };
  });
});
