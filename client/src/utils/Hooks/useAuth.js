import { useQuery } from "@apollo/client";
import Auth from "../../../utils/auths";
import { Auth_User } from "../../utils/graphQL/query";

export default function useAuth() {
  const { client, loading, error, data } = useQuery(Auth_User);
  const logout = () => {
    Auth.logout().then(() => client.resetStore());
  };
  return [client, logout, data];
}
