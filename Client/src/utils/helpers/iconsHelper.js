import {
  Settings,
  User,
  Pencil,
  Trash,
  Clock,
  FileText,
  Calendar,
  Plus,
  Bell,
  Search,
  LogOut,
  LayoutDashboard,
  BarChart,
  Upload,
  Download,
  Building2,
  Lock,
  Mail,
} from "lucide-react";
import {
  FoldersIcon,
  HouseIcon,
  DiamondsFourIcon,
  SmileySadIcon,
  ImageBrokenIcon,
} from "@phosphor-icons/react";

const iconList = {
  home: HouseIcon,
  settings: Settings,
  company: Building2,
  profile: User,
  folder: FoldersIcon,
  edit: Pencil,
  delete: Trash,
  title: FileText,
  description: FileText,
  date: Calendar,
  duration: Clock,
  plus: Plus,
  grid: DiamondsFourIcon,
  sadEmoji: SmileySadIcon,
  broken: ImageBrokenIcon,
  dashboard: LayoutDashboard,
  search: Search,
  logout: LogOut,
  notification: Bell,
  analytics: BarChart,
  upload: Upload,
  download: Download,
  lock: Lock,
  mail: Mail,
};

export const getIcon = (icon) => {
  const IconFromList = iconList[icon];
  if (!IconFromList) return iconList["broken"];
  return icon ? IconFromList : null;
};
