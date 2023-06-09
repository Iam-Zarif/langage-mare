/* eslint-disable no-unused-vars */
import { useQuery } from "react-query";
import Auth from "./Auth";


const useInstructor = () => {
    const { user } = Auth();
    const token = localStorage.getItem("access-token");

    const { data: instructor, isLoading: isInstructorLoading } = useQuery({
      queryKey: ["isInstructor", user.email],
      queryFn: async () => {
        const res = await fetch(
          `http://localhost:5000/user/instructor/${user.email}`,
          {
            headers: { authorization: `bearer ${token}` },
          }
        );

        return res.json();
      },
    });

    
    return [instructor, isInstructorLoading];
};

export default useInstructor;