// Main 고객 리스트 페이지
import ContentBox from "@/components/ContentBox";
import Pagination from "@/components/Pagination";

export default function Customers() {
  return (
    <main>
      <ContentBox>
        <h1 className="text-lg font-semibold">고객 리스트</h1>
        <Pagination/>
      </ContentBox>
    </main>
  );
}
