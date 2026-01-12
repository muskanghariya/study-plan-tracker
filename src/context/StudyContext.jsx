import { createContext, useContext, useReducer } from "react";

const StudyContext = createContext();



const initialState = {
  sessions: [
    {
      id: 1,
      subject: "Math",
      topic: "Algebra",
      date: "2026-01-01",
      hours: 2,
      completed: true,
    },
    {
      id: 2,
      subject: "Science",
      topic: "Physics",
      date: "2026-01-02",
      hours: 1.5,
      completed: false,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_SESSION":
      return { ...state, sessions: [...state.sessions, action.payload] };
    case "TOGGLE_COMPLETE":
      return {
        ...state,
        sessions: state.sessions.map((s) =>
          s.id === action.payload ? { ...s, completed: !s.completed } : s
        ),
      };
    case "UPDATE_SESSION":
      return {
        ...state,
        sessions: state.sessions.map((s) =>
          s.id === action.payload.id ? action.payload : s
        ),
      };
    default:
      return state;
  }
}

export const StudyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StudyContext.Provider value={{ state, dispatch }}>
      {children}
    </StudyContext.Provider>
  );
};

export const useStudy = () => useContext(StudyContext);
