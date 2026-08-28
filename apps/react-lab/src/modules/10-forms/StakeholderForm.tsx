import { useState } from "react";
import type { StakeholderFormValues } from "./types";

const initialValues: StakeholderFormValues = {
  name: "",
  email: "",
  role: "",
  influence: "",
  notes: "",
};
const initialErrors = {
  name: "",
  email: "",
  role: "",
  influence: "",
};

export default function StakeholderForm() {
  const [formValues, setFormValues] = useState(initialValues);
  const [submittedValues, setSubmittedValues] =
    useState<StakeholderFormValues | null>(null);

  const [errors, setErrors] = useState(initialErrors);
  const handleInputChange =
    (field: keyof StakeholderFormValues) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      setFormValues((prevValues) => ({
        ...prevValues,
        [field]: e.target.value,
      }));
    };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = {
      name: "",
      email: "",
      role: "",
      influence: "",
    };

    if (formValues.name.trim() === "") {
      newErrors.name = "Please enter a name.";
    } else {
      newErrors.name = "";
    }

    if (formValues.email.trim() === "") {
      newErrors.email = "Please enter a email address.";
    } else if (formValues.email.includes("@") === false) {
      newErrors.email = "Please enter a valid email address.";
    } else {
      newErrors.email = "";
    }

    if (formValues.role.trim() === "") {
      newErrors.role = "Please enter a valid role.";
    } else {
      newErrors.role = "";
    }

    if (formValues.influence.trim() === "") {
      newErrors.influence = "Please enter a valid influence level.";
    } else {
      newErrors.influence = "";
    }

    setErrors(newErrors);
    const hasErrors = Object.values(newErrors).some(
      (message) => message !== "",
    );
    if (hasErrors) return;

    setFormValues(initialValues);
    setSubmittedValues(formValues);
  };
  const handleReset = () => {
    setFormValues(initialValues);
    setErrors(initialErrors);
  };

  return (
    <div>
      <h1>Stakeholder Form</h1>
      <div className="container">
        <form className="form-container" onSubmit={onSubmit} noValidate>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formValues.name}
              onChange={handleInputChange("name")}
            />
            {errors.name && (
              <p id="name-error" role="alert" style={{ color: "red" }}>
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange("email")}
              aria-describedby="email-error"
            />
            {errors.email && (
              <p id="email-error" role="alert" style={{ color: "red" }}>
                {errors.email}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="role">Role:</label>
            <select
              id="role"
              name="role"
              value={formValues.role}
              onChange={handleInputChange("role")}
            >
              <option value="">Select a role</option>
              <option value="stakeholder">Stakeholder</option>
              <option value="manager">Manager</option>
              <option value="team_member">Team Member</option>
            </select>
            {errors.role && (
              <p id="role-error" role="alert" style={{ color: "red" }}>
                {errors.role}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="influence">Influence:</label>
            <select
              id="influence"
              name="influence"
              value={formValues.influence}
              onChange={handleInputChange("influence")}
            >
              <option value="">Select influence level</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            {errors.influence && (
              <p id="influence-error" role="alert" style={{ color: "red" }}>
                {errors.influence}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="notes">Notes:</label>
            <textarea
              id="notes"
              name="notes"
              value={formValues.notes}
              onChange={handleInputChange("notes")}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>
            Clean
          </button>
        </form>
      </div>
      {submittedValues && (
        <div className="container">
          <div className="card">
            <h2>Submitted values</h2>
            <p>Name: {submittedValues.name}</p>
            <p>Email: {submittedValues.email}</p>
            <p>Role: {submittedValues.role}</p>
            <p>Influence: {submittedValues.influence}</p>
            <p>Notes: {submittedValues.notes}</p>
          </div>
        </div>
      )}
    </div>
  );
}
