import { useState } from "react";
import SessionCard from "../components/SessionCard";
import { useStudy } from "../context/StudyContext";

export default function Planner() {
  const { state, dispatch } = useStudy();
  const [editSession, setEditSession] = useState(null);

  const addSession = () => {
    dispatch({
      type: "ADD_SESSION",
      payload: {
        id: Date.now(),
        subject: "English",
        topic: "Grammar",
        date: "2026-01-03",
        hours: 1,
        completed: false,
      },
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Study Planner</h2>

      <button
        onClick={addSession}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add Session
      </button>

      <div className="space-y-3">
        {state.sessions?.map((session) => (
          <SessionCard
            key={session.id}
            session={session}
            onToggle={() =>
              dispatch({ type: "TOGGLE_COMPLETE", payload: session.id })
            }
            onEdit={() => setEditSession(session)}
          />
        ))}
      </div>
      {editSession && (
        <div className="border p-4 rounded mb-4">
          <h3 className="font-bold mb-2">Edit Session</h3>

          <input
            className="border p-2 mr-2"
            value={editSession.subject}
            onChange={(e) =>
              setEditSession({ ...editSession, subject: e.target.value })
            }
          />

          <input
            className="border p-2 mr-2"
            value={editSession.topic}
            onChange={(e) =>
              setEditSession({ ...editSession, topic: e.target.value })
            }
          />

          <input
            type="number"
            className="border p-2 mr-2"
            value={editSession.hours}
            onChange={(e) =>
              setEditSession({ ...editSession, hours: Number(e.target.value) })
            }
          />

          <button
            className="px-3 py-1 bg-blue-500 text-white rounded"
            onClick={() => {
              dispatch({ type: "UPDATE_SESSION", payload: editSession });
              setEditSession(null);
            }}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
}
