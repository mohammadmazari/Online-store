import DesktopPage from "./DesktopPage";
import MoblilePage from "./MoblilePage";

function TopBar() {
  return (
    <div className="container ">
      <MoblilePage />
      <DesktopPage />
    </div>
  );
}

export default TopBar;
