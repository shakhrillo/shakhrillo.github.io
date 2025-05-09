interface SkillBadgeProps {
  name: string
}

export function SkillBadge({ name }: SkillBadgeProps) {
  return <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm font-medium rounded-full">{name}</span>
}
