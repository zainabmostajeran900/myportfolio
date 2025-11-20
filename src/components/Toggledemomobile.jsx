import React, { useState } from "react";
import {
  House,
  UserRound,
  ShieldCheck,
  GalleryVerticalEnd,
  Headset,
} from "lucide-react";
import {
  ToggleGroupMobile,
  ToggleGroupItem,
} from "../components/ui/toggle-group-mobile";

export function ToggledemoMobile({
  activeMenu,
  setActiveMenu,
  goToSection,
  closeMenu,
}) {
  const [selectedIcon, setSelectedIcon] = useState(activeMenu || "home");

  const items = [
    { value: "contact", label: "ارتباط با من", icon: Headset },
    { value: "portfolio", label: "نمونه کارها", icon: GalleryVerticalEnd },
    { value: "services", label: "خدمات", icon: ShieldCheck },
    { value: "about", label: "درباره من", icon: UserRound },
    { value: "home", label: "خانه", icon: House },
  ];

  const handleClick = (item) => {
    setSelectedIcon(item.value);
    setActiveMenu(item.value); // آپدیت منوی فعال
    closeMenu(); // بستن منو موبایل
    goToSection(item.value); // اسکرول / تغییر صفحه
  };

  return (
    <ToggleGroupMobile type="single">
      {items.map((item) => {
        const IconComponent = item.icon;
        const isSelected = selectedIcon === item.value;

        return (
          <ToggleGroupItem
            key={item.value}
            value={item.value}
            aria-label={`Toggle ${item.value}`}
            className="hover:cursor-pointer transition-all duration-200"
            onClick={() => handleClick(item)}
          >
            {isSelected ? (
              <div className="text-sm font-bold text-white bg-[var(--basic)] px-4 py-2 rounded-lg">
                {item.label}
              </div>
            ) : (
              <IconComponent className="h-7 w-7 text-[var(--basic)]" />
            )}
          </ToggleGroupItem>
        );
      })}
    </ToggleGroupMobile>
  );
}
