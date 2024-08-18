import CaseInfo from "@/components/CaseInfo";
import ShowCase from "@/components/ShowCase";
import { data } from "@/DB";
export default function Home() {
  return (
    <div>
      {data.map((Case) => (
        <div key={Case.name + Math.random()} className="flex justify-around">
          <CaseInfo
            Case={Case}
            rootStyle="m-10 max-w-sm h-fit p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          />
          <ShowCase Case={Case} rootStyle="m-2" />
        </div>
      ))}
    </div>
  );
}
