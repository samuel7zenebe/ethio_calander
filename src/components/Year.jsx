import Month from "./Month";
export const Year = ({ year }) => {
  return (
    <section className="yearLayout">
      <div className="row">
        <Month year={year} month={1} withHeader={true} />
        <Month year={year} month={2} withHeader={true} />
        <Month year={year} month={3} withHeader={true} />
        <Month year={year} month={4} withHeader={true} />
      </div>
      <div className="row">
        <Month year={year} month={5} withHeader={true} />
        <Month year={year} month={6} withHeader={true} />
        <Month year={year} month={7} withHeader={true} />
        <Month year={year} month={8} withHeader={true} />
      </div>
      <div className="row">
        <Month year={year} month={9} withHeader={true} />
        <Month year={year} month={10} withHeader={true} />
        <Month year={year} month={11} withHeader={true} />
        <Month year={year} month={12} withHeader={true} />
      </div>
      <div className="row">
        <Month year={year} month={13} withHeader={true} />
      </div>
    </section>
  );
};
