import BodySystemCard from './BodySystemCard';

export default function StatusOverview() {
  return (
    <div className="flex justify-between space-x-7 overflow-x-auto gap-4 px-4">
      <BodySystemCard label="Needs improvement" count="03" status="bad" />
      <BodySystemCard label="Looks good" count="21" status="good" />
    </div>
  );
}
