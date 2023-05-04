import { LogoutButton } from "../components/logout/logout";
import { Profile } from "../components/profile/profile";

export const CallbackPage = () => {
  return (
    <div>
        <h1>Hello logged in</h1>
        <Profile />
        <LogoutButton />
    </div>
  );
};