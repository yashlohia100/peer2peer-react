import { HiOutlineCurrencyRupee } from 'react-icons/hi2';
import { LuBedSingle } from 'react-icons/lu';
import { MdOutlineFemale, MdOutlineMale } from 'react-icons/md';

export default function BasicInfo() {
  return (
    <section className="px-4 py-7">
      <h2 className="mb-6 text-lg font-medium text-zinc-600">Basic Info</h2>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <div className="space-y-0.5">
          <p className="text-sm text-zinc-500">Gender</p>
          <p className="flex items-center gap-1 font-medium text-zinc-600">
            <MdOutlineMale />
            <span>Male</span>
          </p>
        </div>

        <div className="space-y-0.5">
          <p className="text-sm text-zinc-500">Approx rent</p>
          <p className="flex items-center gap-1 font-medium text-zinc-600">
            <HiOutlineCurrencyRupee />
            <span>10,000</span>
          </p>
        </div>

        <div className="space-y-0.5">
          <p className="text-sm text-zinc-500">Occupancy</p>
          <p className="flex items-center gap-1 font-medium text-zinc-600">
            <LuBedSingle />
            <span>Single</span>
          </p>
        </div>

        <div className="space-y-0.5">
          <p className="text-sm text-zinc-500">Looking for</p>
          <p className="flex items-center gap-1 font-medium text-zinc-600">
            <MdOutlineFemale />
            <span>Female</span>
          </p>
        </div>
      </div>
    </section>
  );
}
