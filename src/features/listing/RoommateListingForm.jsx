import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import LookingForInput from '../../ui/form-ui/LookingForInput';
import SelectLocationForm from '../../ui/form-ui/SelectLocationForm';
import RentInput from '../../ui/form-ui/RentInput';
import HighlightsInput from '../../ui/form-ui/HighlightsInput';
import DescriptionInput from '../../ui/form-ui/DescriptionInput';
import PreferencesInput from '../../ui/form-ui/PreferencesInput';
import OccupancyInput from '../../ui/form-ui/OccupancyInput';
import FormHeader from '../../ui/form-ui/FormHeader';

export default function RoommateListingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onValid(data) {
    console.log(data);
  }

  console.log(errors);

  return (
    <div className="min-h-screen bg-zinc-50">
      <form
        onSubmit={handleSubmit(onValid)}
        className="mx-auto max-w-2xl space-y-8 px-8 pb-8 pt-12 text-sm lg:text-base"
      >
        <FormHeader heading="Looking for a Room with roommate." />

        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <SelectLocationForm register={register} />
          <LookingForInput register={register} />
        </div>

        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <RentInput register={register} />
          <OccupancyInput register={register} />
        </div>

        <PreferencesInput register={register} />

        <HighlightsInput register={register} highlightsFor="roommate" />
        <DescriptionInput
          register={register}
          text="I am looking for a room with roommate."
        />

        <div className="text-center">
          <Button variant="small">Submit</Button>
        </div>
      </form>
    </div>
  );
}
