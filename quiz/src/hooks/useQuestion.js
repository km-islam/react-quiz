import { useEffect, useState } from "react";
import { getDatabase, ref, query, orderByKey, get } from "firebase/database";

function useQuestion(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    async function fetchQuestion() {
      const db = getDatabase();
      const questionsRef = ref(db, "quiz/" + videoID + "/questions");
      const questionsQuery = query(questionsRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(questionsQuery);
        setLoading(false);

        if (snapshot.exists()) {
          setQuestions((prevQuestions) => {
            return [...prevQuestions, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    }
    fetchQuestion();
  }, [videoID]);
  return {
    loading,
    error,
    questions,
  };
}

export default useQuestion;
