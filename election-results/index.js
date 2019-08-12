const partyNames = {
  C: "Conservative Party",
  L: "Labour Party",
  UKIP: "UKIP",
  LD: "Liberal Democrats",
  G: "Green Party",
  Ind: "Independent",
  SNP: "SNP"
};

function calculateResults(csv) {
  const rows = csv.split("\n");

  return rows.reduce((results, row) => {
    const columns = row.split(/,\s/);
    const constituency = columns.slice(0, 1);

    let totalVotes = 0;
    let votesByParty = {};

    for (let i = 1; i < columns.length; i += 2) {
      const votes = parseInt(columns[i]);
      totalVotes += votes;

      const partyCode = columns[i + 1];
      const partyName = partyNames[partyCode];
      votesByParty[partyName] = votes;
    }

    for (party in votesByParty) {
      const percent = (votesByParty[party] / totalVotes) * 100;
      const roundedPercent = Math.round(percent * 1000) / 1000;
      votesByParty[party] = roundedPercent;
    }

    results[constituency] = votesByParty;

    return results;
  }, {});
}

module.exports = { calculateResults };
