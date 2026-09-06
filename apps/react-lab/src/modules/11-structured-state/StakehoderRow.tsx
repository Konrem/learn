import React, { useState } from "react";
import type { Stakeholder } from "./types";

interface StakeholderRowProps {
    stakeholder: Stakeholder;
    onEdit: (stakeholder: Stakeholder) => void;
    onDelete: (stakeholder: Stakeholder) => void;
}

export default function StakeholderRow({ stakeholder, onEdit, onDelete }: StakeholderRowProps) {
    const [editStakeholder, setEditStakeholder] = useState<Stakeholder | null>(null);

    const handleEditChange = (field: keyof Stakeholder) => (e: React.ChangeEvent<HTMLInputElement>) => {
        if (editStakeholder) {
            setEditStakeholder({ ...editStakeholder, [field]: e.target.value });
        }
    };

    const onSubmit = () => {
        if (editStakeholder) {
            console.log(editStakeholder);
            onEdit(editStakeholder);
            setEditStakeholder(null);
        }
    };

    return (
        <>
            {!editStakeholder && (
                <tr>
                    <td>{stakeholder.name}
                    </td>
                    <td>{stakeholder.role}
                    </td>
                    <td>{stakeholder.organization}
                    </td>
                    <td>
                        <div className="stakeholder-page-buttons">
                            <button onClick={() => setEditStakeholder(stakeholder)}>Edit</button>
                            <button onClick={() => onDelete(stakeholder)}>Remove</button>
                        </div>
                    </td>
                </tr>
            )}

            {editStakeholder && (
                <tr>
                    <td>{stakeholder.name}
                        <p><input type="text" value={editStakeholder?.name ?? stakeholder.name} onChange={handleEditChange('name')} /></p>
                    </td>
                    <td>{stakeholder.role}
                        <p><input type="text" value={editStakeholder?.role ?? stakeholder.role} onChange={handleEditChange('role')} /></p>
                    </td>
                    <td>{stakeholder.organization}
                        <p><input type="text" value={editStakeholder?.organization ?? stakeholder.organization} onChange={handleEditChange('organization')} /></p>
                    </td>
                    <td>
                        <div className="stakeholder-page-buttons">
                            <button onClick={() => setEditStakeholder(null)}>Cancel</button>
                            <button onClick={() => onSubmit()}>Submit</button>
                        </div>
                    </td>
                </tr>
            )}
        </>
    )
}