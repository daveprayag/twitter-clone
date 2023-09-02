export default function SidebarMenuItem({ text, Icon, active }) {
  return (
    <div className="hoverEffect flex items-cener text-gray-700 justify-center xl:justify-start text-lg space-x-2 md:items-center">
      <Icon className="h-7" />
      <span className={`${active && "font-bold"} hidden xl:inline`}>
        {text}
      </span>
    </div>
  );
}
