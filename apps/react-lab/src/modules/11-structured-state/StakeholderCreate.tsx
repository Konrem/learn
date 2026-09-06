import { useState } from "react";
import { type Stakeholder } from "./types";

type StakeholderFormProps = {
   newStakeholder: (value: Stakeholder) => void;
};

const initialValues: Stakeholder = {
    id: crypto.randomUUID(),
    name: "",
    role: "",
    organization: "",
};

export default function StakeholderCreate({ newStakeholder }: StakeholderFormProps) {
    const [formValues, setFormValues] = useState(initialValues);
    const handleInputChange = (field: keyof Stakeholder) =>
        (
            e: React.ChangeEvent<
                HTMLInputElement>,
        ) => {
            setFormValues((prevValues) => ({
                ...prevValues,
                [field]: e.target.value,
            }));

        }
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        newStakeholder(formValues);
    }
    return (
        <div className="bordered">
            <h2>Create Stakeholder</h2>
            <form className="form-actions" onSubmit={onSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formValues.name}
                        onChange={handleInputChange("name")}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="role">Role: </label>
                    <input
                        type="text"
                        id="role"
                        name="role"
                        value={formValues.role}
                        onChange={handleInputChange("role")}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="organization">Organization: </label>
                    <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formValues.organization}
                        onChange={handleInputChange("organization")}
                        required
                    />
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}