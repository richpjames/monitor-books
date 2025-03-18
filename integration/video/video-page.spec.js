describe("Video Page", () => {
  beforeEach(() =>
    cy
      .fixture("initialisedState")
      .then((initialisedState) => cy.visit("/occasions/two"))
  );
  it("test correct information is shown for product", () => {
    cy.get("h1")
      .contains("Murmur Reading Series #2")
      .get(".left-section")
      .contains("Originally a programme of occasional live events")
      .get(".right-section")
      .contains("Nisha Ramayya grew up in Glasgow and is based in London.")
      .percySnapshot();
  });

  //test video is shown
});
