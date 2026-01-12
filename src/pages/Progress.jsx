import { useStudy } from "../context/StudyContext";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

export default function Progress() {
  const { state } = useStudy();
  const data = Object.values(
    state.sessions.reduce((acc, s) => {
      if (!s.completed) return acc;
      if (!acc[s.subject]) acc[s.subject] = { subject: s.subject, hours: 0 };
      acc[s.subject].hours += s.hours;
      return acc;
    }, {})
  );
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Progress</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="hours" nameKey="subject" label />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
