import { useEffect, useState } from "react";
import StakeholderCreate from "./StakeholderCreate";
import { initialStakeholders } from "./initialStakeholders";
import { type Stakeholder } from "./types";
import StakeholderRow from "./StakehoderRow";
import StakeholderFilter from "./StakeholderFilter";

export default function StructuredStatePage() {
    const [stakeholders, setStakeholders] = useState(initialStakeholders);
    const [search, setSearch] = useState("");
    const [roleFilter, setRoleFilter] = useState("all");

    const uniqueRoles = stakeholders.map((stakeholder) => stakeholder.role).filter((role, index, self) => self.indexOf(role) === index);

    const addStakeholder = (value: Stakeholder) => {
        setStakeholders((prevValues) => [
            ...prevValues, value
        ]);
        console.log(stakeholders);
    }
    const handleEdit = (stakeholderToEdit: Stakeholder) => {
        setStakeholders((prevStakeholders) =>
            prevStakeholders.map((stakeholder) =>
                stakeholder.id === stakeholderToEdit.id
                    ? stakeholderToEdit
                    : stakeholder
            )
        );
    };
    const handleDelete = (stakeholderToRemove: Stakeholder) => {
        setStakeholders((prevStakeholders) =>
            prevStakeholders.filter(
                (stakeholder) => stakeholder.id !== stakeholderToRemove.id
            )
        );
    };
    const filteredStakeholders = stakeholders.filter((stakeholder) => {
        const query = search.trim().toLowerCase();

        const matchesSearch =
            stakeholder.name.toLowerCase().includes(query) ||
            stakeholder.organization.toLowerCase().includes(query);

        const matchesRole =
            roleFilter === "all" ||
            stakeholder.role === roleFilter;

        return matchesSearch && matchesRole;
    });

    return (
        <div>
            <h1>Structured State</h1>
            <StakeholderCreate newStakeholder={addStakeholder} />
            <StakeholderFilter search={search} setSearch={setSearch} uniqueRole={uniqueRoles} roleFilter={roleFilter} setRoleFilter={setRoleFilter} />
            <table className="stakeholder-table">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Role</td>
                        <td>Organization</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {filteredStakeholders.length === 0 ? (
                        <tr>
                            <td colSpan={4}>No stakeholders found</td></tr>
                    ) : (
                        filteredStakeholders.map((stakeholder) => (
                            <StakeholderRow
                                key={stakeholder.id}
                                stakeholder={stakeholder}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                            />
                        )))
                    }
                </tbody>
            </table>
        </div>
    )
}