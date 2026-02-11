export default function LinearSearchViz() {
  return (
    <div className="p-10 text-white rounded-xl text-center">
      <div className="flex gap-2 justify-center mt-5">
        {[1, 5, 8, 3].map((n) => (
          <div className="p-2 bg-blue-500 rounded">{n}</div>
        ))}
      </div>
    </div>
  );
}
