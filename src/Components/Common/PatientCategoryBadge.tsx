import { PATIENT_CATEGORIES } from "../../Common/constants";
import { PatientCategory } from "../Facility/models";

const PatientCategoryBadge = ({ category }: { category?: PatientCategory }) => {
  const categoryClass = category
    ? PATIENT_CATEGORIES.find((c) => c.key === category)?.twClass
    : "patient-unknown";

  return (
    <span
      className={`rounded-full px-2 py-0.5 text-sm ${categoryClass} font-medium`}
    >
      {category}
    </span>
  );
};

export default PatientCategoryBadge;
