import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const loading = async () => {
  return <Skeleton count={2} />;
};

export default loading;
