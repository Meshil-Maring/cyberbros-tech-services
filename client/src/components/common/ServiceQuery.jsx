

function ServiceQuery({ query, answer }) {
  return (
    <div className="w-130 shrink-0  m-h-50 ">
      <h4 className="text-2xl mb-4 ">{query}</h4>
      <p className="text-[16px] text-white/60 mb-4">{answer}</p>
    </div>
  );
}

export default ServiceQuery;
