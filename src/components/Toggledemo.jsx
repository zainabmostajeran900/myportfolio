import {
  House,
  UserRound,
  ShieldCheck,
  GalleryVerticalEnd,
  Headset,
} from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

export function Toggledemo({ activeMenu, setActiveMenu, goToSection }) {
  const items = [
    { value: "contact", label: "ارتباط با من", icon: Headset },
    { value: "portfolio", label: "نمونه کارها", icon: GalleryVerticalEnd },
    { value: "services", label: "خدمات", icon: ShieldCheck },
    { value: "about", label: "درباره من", icon: UserRound },
    { value: "home", label: "خانه", icon: House },
  ];
  const handleChange = (value) => {
    if (!value) return;
    setActiveMenu(value); // انتخاب منو
    goToSection(value); // رفتن به سکشن در صفحه اصلی یا اسکرول
  };

  return (
    <ToggleGroup type="single" value={activeMenu} onValueChange={handleChange}>
      {items.map((item) => {
        const IconComponent = item.icon;
        const isSelected = activeMenu === item.value;

        return (
          <ToggleGroupItem
            key={item.value}
            value={item.value}
            aria-label={`Toggle ${item.value}`}
            className="hover:cursor-pointer transition-all duration-200"
          >
            {isSelected ? (
              <div className="text-sm font-bold text-white bg-[var(--basic)] px-9 py-2 rounded-lg">
                {item.label}
              </div>
            ) : (
              <IconComponent className="h-7 w-7 text-[var(--basic)]" />
            )}
          </ToggleGroupItem>
        );
      })}
    </ToggleGroup>
  );
}
