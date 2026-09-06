interface StakeholderFilterProps {
    search: string;
    setSearch: (value: string) => void;
    uniqueRole: string[];
    roleFilter: string;
    setRoleFilter: (value: string) => void;
}

export default function StakeholderFilter({ search, setSearch, uniqueRole, roleFilter, setRoleFilter }: StakeholderFilterProps) {
    return (
        <div className="form-actions">
            <div>
                <label htmlFor="search">Search: </label>
                <input id="search" type="text" value={search} onChange={(e) => { setSearch(e.target.value) }} />
            </div>
            <div>
                <label htmlFor="filterRole">Filter Role: </label>
                <select id="filterRole" value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)}>
                    <option value="all">All</option>
                    {uniqueRole.map((role: string, index: number) => (
                        <option key={index} value={role}>{role}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}