import { CategoryId } from '../types';

export interface CategoryInfo {
  id: CategoryId;
  name: string;
  description: string;
  color: string; // Tailwind color classes
  iconName: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'alcohol',
    name: 'Cồn & Chất kích thích',
    description: 'Nồng độ cồn xe máy, ô tô, quy định xử phạt kịch khung & tước bằng',
    color: 'from-rose-500 to-red-600',
    iconName: 'Wine'
  },
  {
    id: 'speed_signal',
    name: 'Tốc độ & Tín hiệu',
    description: 'Vượt đèn đỏ, chạy quá tốc độ, không xi-nhan, hiệu lệnh CSGT',
    color: 'from-amber-500 to-orange-600',
    iconName: 'Gauge'
  },
  {
    id: 'lane_prohibited',
    name: 'Làn đường & Đường cấm',
    description: 'Đi ngược chiều, đi vào đường cấm, đi vào cao tốc, lùi xe cao tốc',
    color: 'from-blue-500 to-indigo-600',
    iconName: 'Milestone'
  },
  {
    id: 'documents',
    name: 'Giấy tờ & Thiết bị',
    description: 'Mũ bảo hiểm, GPLX, Cà vẹt xe, dán che biển số ô tô phạt nguội',
    color: 'from-emerald-500 to-teal-600',
    iconName: 'FileCheck'
  },
  {
    id: 'safety_priority',
    name: 'An toàn & Ưu tiên',
    description: 'Dùng điện thoại, chở quá số người, cản trở xe cứu thương, đi bộ vi phạm',
    color: 'from-violet-500 to-purple-600',
    iconName: 'ShieldAlert'
  }
];
