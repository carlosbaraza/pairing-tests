const { calculateResults } = require(".");

describe("election results", () => {
  it("calculates percentages", () => {
    const csv =
      "Cardiff West, 11014, C, 17803, L, 4923, UKIP, 2069, LD\n" +
      "Islington South & Finsbury, 22547, L, 9389, C, 4829, LD, 3375, UKIP, 3371, G, 309, Ind";

    const results = calculateResults(csv);

    expect(results).toMatchInlineSnapshot(`
      Object {
        "Cardiff West": Object {
          "Conservative Party": 30.758,
          "Labour Party": 49.717,
          "Liberal Democrats": 5.778,
          "UKIP": 13.748,
        },
        "Islington South & Finsbury": Object {
          "Conservative Party": 21.426,
          "Green Party": 7.693,
          "Independent": 0.705,
          "Labour Party": 51.454,
          "Liberal Democrats": 11.02,
          "UKIP": 7.702,
        },
      }
    `);
  });
});
