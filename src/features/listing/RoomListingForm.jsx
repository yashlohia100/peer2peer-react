import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import LookingForInput from '../../ui/form-ui/LookingForInput';
import CityInput from '../../ui/form-ui/CityInput';
import RentInput from '../../ui/form-ui/RentInput';
import HighlightsInput from '../../ui/form-ui/HighlightsInput';
import DescriptionInput from '../../ui/form-ui/DescriptionInput';
import PreferencesInput from '../../ui/form-ui/PreferencesInput';
import OccupancyInput from '../../ui/form-ui/OccupancyInput';
import FormHeader from '../../ui/form-ui/FormHeader';
import FacilitiesInput from '../../ui/form-ui/FacilitiesInput';
import LocationInput from '../../ui/form-ui/LocationInput';
import { useCreateListing } from './useCreateListing';
import toast from 'react-hot-toast';

export default function RoomListingForm() {
  const { isPending, createListing } = useCreateListing();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onValid(data) {
    const payload = { ...data, listingType: 'room' };
    createListing(payload);
  }

  function onInvalid(errors) {
    toast.error('Please fill the required fields');
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      <form
        onSubmit={handleSubmit(onValid, onInvalid)}
        className="mx-auto max-w-2xl space-y-8 px-8 pb-8 pt-12 text-sm lg:text-base"
      >
        <FormHeader heading="Having a Room and looking for a roommate." />

        <CityInput register={register} />

        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <LocationInput register={register} />
          <LookingForInput register={register} />
        </div>

        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <RentInput register={register} />
          <OccupancyInput register={register} />
        </div>

        <PreferencesInput register={register} />

        <FacilitiesInput register={register} />
        <HighlightsInput register={register} highlightsFor="room" />
        <DescriptionInput
          register={register}
          text="I am looking for a roommate for my room."
        />

        <div className="text-center">
          <Button variant="small" disabled={isPending}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
