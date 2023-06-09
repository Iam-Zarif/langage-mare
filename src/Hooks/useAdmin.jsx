import { useQuery } from "react-query";
import Auth from "./Auth";

const useAdmin = () => {
  const { user } = Auth();
  const token = localStorage.getItem("access-token");

  const { data: admin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/user/admin/${user.email}`,
        {
          headers: { authorization: `bearer ${token}` },
        }
      );

      return res.json();
    },
  });

  console.log(admin);
  return [admin, isAdminLoading];
};

export default useAdmin;
