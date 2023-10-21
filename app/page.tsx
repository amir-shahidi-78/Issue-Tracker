import Pagination from "./components/Pagination";

export default function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <Pagination
      itemCount={50}
      pageSize={10}
      currentPage={parseInt(searchParams.page)}
    />
  );
}
