function MatchCard({ match }) {
  const { title, date, thumbnail } = match;
  const formattedDate = new Date(date).toLocaleString();

  return (
    <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
      <img src={thumbnail} alt={title} className="rounded-lg mb-2" />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-500">{formattedDate}</p>
    </div>
  );
}

export default MatchCard;
