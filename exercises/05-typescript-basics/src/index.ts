import { Members } from './data';
import { filterByRole, countAvailable, formatMember } from './functions';

console.log('Frontend:')
console.log(filterByRole(Members, 'frontend'))

console.log('Backend:')
console.log(filterByRole(Members, 'backend'))

console.log('Fullstack:')
console.log(filterByRole(Members, 'fullstack'))

console.log('Available:', countAvailable(Members))

const membersWithoutAvatar = Members.filter(
    member => !member.avatarUrl
)
console.log('Without Avatar:')
membersWithoutAvatar.forEach(member => {
    console.log(formatMember(member))
})