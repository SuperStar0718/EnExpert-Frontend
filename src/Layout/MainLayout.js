import Layout from "./Layout";
import MobileLayout from "./MobileLayout";

const Mainlayout = ({ children, active }) => {
  return (
    <div className="layout">
      <MobileLayout children={children} active={active} />
      <Layout children={children} active={active} />
    </div>
  );
};

export default Mainlayout;