import { Pagination } from "antd";
const itemRender = (_, type, originalElement) => {
  if (type === "prev") {
    return <a href="/">Previous</a>;
  }
  if (type === "next") {
    return <a href="/">Next</a>;
  }
  return originalElement;
};
const Paginate = () => (
  <Pagination defaultCurrent={3} total={100} itemRender={itemRender} />
);
export default Paginate;
