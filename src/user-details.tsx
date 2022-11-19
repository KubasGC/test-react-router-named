import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

interface UserDetailsProps {}

const UserDetails: FunctionComponent<UserDetailsProps> = () => {
  const { userId } = useParams();
  return <>Szczegóły użytkownika ({userId})</>;
};

export default UserDetails;
