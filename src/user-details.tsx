import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

interface UserDetailsProps {}

const UserDetails: FunctionComponent<UserDetailsProps> = () => {
  const { user } = useParams();
  return <>Szczegóły użytkownika ({user})</>;
};

export default UserDetails;
