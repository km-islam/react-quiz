import { useEffect, useState } from "react";
import { getDatabase, ref, query, orderByKey, get } from "firebase/database";

function useAnswer(videoID) {
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(false);
   const [answers, setAnswers] = useState([]);
   useEffect(() => {
     async function fetchQuestions() {
       const db = getDatabase();
       const answersRef = ref(db, "answers/" + videoID + "/questions");
       const answersQuery = query(answersRef, orderByKey());

       try {
         setError(false);
         setLoading(true);
         const snapshot = await get(answersQuery);
         setLoading(false);

         if (snapshot.exists()) {
           setAnswers((prevAnswers) => {
             return [...prevAnswers, ...Object.values(snapshot.val())];
           });
         }
       } catch (err) {
         console.log(err);
         setError(true);
         setLoading(false);
       }
     }
     fetchQuestions();
   }, [videoID]);
   return {
     loading,
     error,
     answers,
   };
}

export default useAnswer;
