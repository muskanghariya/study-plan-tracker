export default function SessionCard({ session, onToggle, onEdit }) {
  return (
    <div className="border p-4 rounded flex justify-between items-center">
      <div>
        <p className="font-semibold">
          {session.subject} - {session.topic}
        </p>
        <p className="text-sm text-gray-500">
          {session.date} | {session.hours} hrs
        </p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={onEdit}
          className="px-3 py-1 bg-yellow-500 text-white rounded"
        >
          Edit
        </button>
        <button
          onClick={onToggle}
          className={`px-3 py-1 rounded text-white ${
            session.completed ? "bg-green-500" : "bg-gray-400"
          }`}
        >
          {session.completed ? "Completed" : "Mark Done"}
        </button>
      </div>
    </div>
  );
}
