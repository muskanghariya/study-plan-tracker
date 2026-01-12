import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useStudy } from "../context/StudyContext";

export default function Dashboard() {
  const { state } = useStudy();

  const data = state.sessions
    .filter((s) => s.completed)
    .map((s) => ({ date: s.date, hours: s.hours }));

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="hours" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
