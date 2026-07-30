import { Question } from '../types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    category: 'alcohol',
    categoryName: 'Cồn & Chất kích thích',
    vehicle: 'Xe máy',
    difficulty: 'Dễ',
    situation: 'Anh Bình điều khiển xe máy đi dự tiệc cưới và có uống 1 ly bia. Khi qua chốt kiểm tra giao thông, máy đo nồng độ cồn hiển thị kết quả 0.18 mg/1 lít khí thở (chưa vượt quá 0.25 mg/1 lít khí thở).',
    questionText: 'Theo Nghị định 100/2019/NĐ-CP (sửa đổi bởi Nghị định 123/2021/NĐ-CP), anh Bình sẽ bị xử phạt như thế nào?',
    options: [
      'Phạt tiền từ 2.000.000đ - 3.000.000đ, tước GPLX từ 10 - 12 tháng',
      'Chỉ bị nhắc nhở vì nồng độ cồn rất thấp dưới 0.25 mg/l khí thở',
      'Phạt tiền từ 400.000đ - 600.000đ, không bị tước giấy phép lái xe',
      'Phạt tiền từ 4.000.000đ - 5.000.000đ, tước GPLX từ 16 - 18 tháng'
    ],
    correctIndex: 0,
    decreeReference: 'Điểm c Khoản 6 Điều 6 Nghị định 100/2019/NĐ-CP',
    penaltyRange: '2.000.000đ - 3.000.000đ',
    extraPenalty: 'Tước quyền sử dụng Giấy phép lái xe từ 10 tháng đến 12 tháng',
    expertExplanation: 'Luật Phòng chống tác hại của rượu bia và Nghị định 100 quy định chính sách "Đã uống rượu bia - Không lái xe" với ngưỡng xử phạt tuyệt đối (từ mức > 0). Dù chỉ uống 1 ly bia nhỏ làm nồng độ cồn chưa vượt quá 0.25 mg/l khí thở (hoặc ≤ 50 mg/100 ml máu), người đi xe máy vẫn bị phạt 2 - 3 triệu đồng và bị giữ bằng từ 10 - 12 tháng. Chuyên gia khuyên bạn nên sử dụng xe công nghệ hoặc nhờ người không uống bia rượu đưa về.'
  },
  {
    id: 2,
    category: 'speed_signal',
    categoryName: 'Tốc độ & Tín hiệu',
    vehicle: 'Ô tô',
    difficulty: 'Trung bình',
    situation: 'Chị Mai điều khiển xe ô tô con lưu thông đến ngã tư. Khi đèn tín hiệu giao thông chuyển sang màu đỏ, chị vẫn cố tình nhấn ga điều khiển xe vượt qua vạch dừng.',
    questionText: 'Mức xử phạt đối với người điều khiển xe ô tô thực hiện hành vi không chấp hành hiệu lệnh của đèn tín hiệu giao thông (vượt đèn đỏ) là bao nhiêu?',
    options: [
      'Phạt tiền từ 1.000.000đ đến 2.000.000đ',
      'Phạt tiền từ 4.000.000đ đến 6.000.000đ, tước GPLX từ 1 - 3 tháng',
      'Phạt tiền từ 8.000.000đ đến 10.000.000đ, tước GPLX 2 - 4 tháng',
      'Phạt tiền từ 2.000.000đ đến 3.000.000đ, không bị tước GPLX'
    ],
    correctIndex: 1,
    decreeReference: 'Điểm a Khoản 5 Điều 5 Nghị định 100/2019/NĐ-CP (sửa đổi bởi NĐ 123/2021/NĐ-CP)',
    penaltyRange: '4.000.000đ - 6.000.000đ',
    extraPenalty: 'Tước quyền sử dụng GPLX từ 1 - 3 tháng (3 - 5 tháng nếu gây tai nạn)',
    expertExplanation: 'Nghị định 123/2021/NĐ-CP đã tăng mức phạt hành vi vượt đèn đỏ/đèn vàng đối với xe ô tô lên từ 4 đến 6 triệu đồng. Lỗi này cực kỳ nguy hiểm, nguy cơ va chạm vuông góc tại giao lộ rất cao. Khi thấy đèn vàng, lái xe cần chủ động giảm tốc độ và dừng lại trước vạch dừng, trừ trường hợp đã đi qua vạch dừng trước khi đèn vàng bật sáng.'
  },
  {
    id: 3,
    category: 'lane_prohibited',
    categoryName: 'Làn đường & Đường cấm',
    vehicle: 'Xe máy',
    difficulty: 'Trung bình',
    situation: 'Anh Nam điều khiển xe máy đi vào đường cao tốc TP.HCM - Long Thành - Dầu Giây (đường cao tốc dành riêng cho xe ô tô).',
    questionText: 'Hành vi điều khiển xe máy đi vào đường cao tốc (trừ xe quản lý, bảo trì) bị xử phạt ra sao?',
    options: [
      'Phạt tiền từ 500.000đ - 1.000.000đ, tước GPLX 1 tháng',
      'Phạt tiền từ 2.000.000đ - 3.000.000đ, tước GPLX 3 - 5 tháng, tạm giữ xe đến 7 ngày',
      'Phạt tiền từ 4.000.000đ - 5.000.000đ, tịch thu phương tiện',
      'Phạt tiền từ 1.000.000đ - 2.000.000đ, phạt cảnh dằn'
    ],
    correctIndex: 1,
    decreeReference: 'Điểm b Khoản 6 Điều 6 Nghị định 100/2019/NĐ-CP (sửa đổi bởi NĐ 123/2021/NĐ-CP)',
    penaltyRange: '2.000.000đ - 3.000.000đ',
    extraPenalty: 'Tước GPLX từ 3 - 5 tháng & Tạm giữ phương tiện đến 07 ngày',
    expertExplanation: 'Đường cao tốc thiết kế cho ô tô chạy với vận tốc cao (80 - 120 km/h). Xe máy vào đường cao tốc không những vi phạm nghiêm trọng mà còn đặt bản thân vào tình thế cực kỳ hiểm nghèo do chênh lệch vận tốc và sức ép gió từ xe container, xe tải lớn. Hãy luôn quan sát biển báo chỉ dẫn trước các nút giao lên cao tốc.'
  },
  {
    id: 4,
    category: 'lane_prohibited',
    categoryName: 'Làn đường & Đường cấm',
    vehicle: 'Ô tô',
    difficulty: 'Khó',
    situation: 'Tài xế Hoàng điều khiển xe ô tô đi ngược chiều trên đường một chiều có biển báo "Cấm đi ngược chiều" trong đô thị.',
    questionText: 'Khung hình phạt đối với ô tô đi ngược chiều trên đường một chiều hoặc đường có biển "Cấm đi ngược chiều" (không phải đường cao tốc) là gì?',
    options: [
      'Phạt tiền từ 2.000.000đ - 3.000.000đ, tước GPLX 1 tháng',
      'Phạt tiền từ 4.000.000đ - 6.000.000đ, tước GPLX từ 2 - 4 tháng',
      'Phạt tiền từ 10.000.000đ - 12.000.000đ, tước GPLX từ 2 - 4 tháng',
      'Phạt tiền từ 16.000.000đ - 18.000.000đ, tước GPLX từ 5 - 7 tháng'
    ],
    correctIndex: 1,
    decreeReference: 'Điểm c Khoản 5 Điều 5 Nghị định 100/2019/NĐ-CP (sửa đổi bởi NĐ 123/2021/NĐ-CP)',
    penaltyRange: '4.000.000đ - 6.000.000đ',
    extraPenalty: 'Tước quyền sử dụng GPLX từ 2 - 4 tháng (nếu gây TNGT phạt 10 - 12 triệu & tước GPLX 2 - 4 tháng)',
    expertExplanation: 'Đi ngược chiều là nguyên nhân trực tiếp dẫn đến các vụ tai nạn đối đầu vô cùng thảm khốc. Lưu ý phân biệt: Đi ngược chiều trên đường thường phạt 4 - 6 triệu (tước bằng 2-4 tháng), nhưng đi ngược chiều hoặc lùi xe trên ĐƯỜNG CAO TỐC sẽ bị phạt tới 16 - 18 triệu đồng và tước GPLX từ 5 đến 7 tháng!'
  },
  {
    id: 5,
    category: 'safety_priority',
    categoryName: 'An toàn & Ưu tiên',
    vehicle: 'Xe máy',
    difficulty: 'Dễ',
    situation: 'Anh Tuấn vừa điều khiển xe máy bằng một tay, vừa cầm điện thoại di động áp vào tai để nghe cuộc gọi công việc.',
    questionText: 'Người điều khiển xe máy sử dụng điện thoại di động khi đang lái xe bị xử phạt bao nhiêu tiền?',
    options: [
      'Phạt tiền từ 100.000đ - 200.000đ',
      'Phạt tiền từ 800.000đ - 1.000.000đ, tước GPLX từ 1 - 3 tháng',
      'Phạt tiền từ 2.000.000đ - 3.000.000đ, tước GPLX từ 2 - 4 tháng',
      'Chỉ bị phạt tiền 300.000đ - 400.000đ, không tước GPLX'
    ],
    correctIndex: 1,
    decreeReference: 'Điểm h Khoản 4 Điều 6 Nghị định 100/2019/NĐ-CP (sửa đổi bởi NĐ 123/2021/NĐ-CP)',
    penaltyRange: '800.000đ - 1.000.000đ',
    extraPenalty: 'Tước quyền sử dụng GPLX từ 1 - 3 tháng (3 - 5 tháng nếu gây TNGT)',
    expertExplanation: 'Theo Nghị định 123/2021/NĐ-CP, mức phạt sử dụng điện thoại khi đi xe máy đã tăng lên 800.000đ - 1.000.000đ. Sử dụng điện thoại làm giảm 50% khả năng phản xạ và tập trung quan sát. Nếu cần nghe điện thoại hay xem bản đồ, lái xe bắt buộc phải tấp xe vào sát hè đường dừng hẳn lại an toàn.'
  },
  {
    id: 6,
    category: 'speed_signal',
    categoryName: 'Tốc độ & Tín hiệu',
    vehicle: 'Ô tô',
    difficulty: 'Trung bình',
    situation: 'Trên đường quốc lộ giới hạn tốc độ 60 km/h, ông Đức điều khiển ô tô chạy với tốc độ 74 km/h (quá tốc độ quy định 14 km/h).',
    questionText: 'Ô tô điều khiển chạy quá tốc độ quy định từ 10 km/h đến 20 km/h bị xử phạt theo khung nào?',
    options: [
      'Phạt tiền từ 800.000đ - 1.000.000đ',
      'Phạt tiền từ 4.000.000đ - 6.000.000đ, tước GPLX từ 1 - 3 tháng',
      'Phạt tiền từ 6.000.000đ - 8.000.000đ, tước GPLX từ 2 - 4 tháng',
      'Phạt tiền từ 2.000.000đ - 3.000.000đ, không bị tước GPLX'
    ],
    correctIndex: 1,
    decreeReference: 'Điểm i Khoản 5 Điều 5 Nghị định 100/2019/NĐ-CP (sửa đổi bởi NĐ 123/2021/NĐ-CP)',
    penaltyRange: '4.000.000đ - 6.000.000đ',
    extraPenalty: 'Tước quyền sử dụng GPLX từ 1 - 3 tháng',
    expertExplanation: 'Các nấc phạt tốc độ ô tô: Quá từ 5 - dưới 10 km/h: Phạt 800k - 1 triệu. Quá từ 10 - 20 km/h: Phạt 4 - 6 triệu (tước bằng 1-3 tháng). Quá trên 20 - 35 km/h: Phạt 6 - 8 triệu (tước bằng 2-4 tháng). Quá trên 35 km/h: Phạt 10 - 12 triệu (tước bằng 2-4 tháng). Hãy làm chủ chân ga và quan sát kỹ biển báo tốc độ.'
  },
  {
    id: 7,
    category: 'safety_priority',
    categoryName: 'An toàn & Ưu tiên',
    vehicle: 'Ô tô',
    difficulty: 'Trung bình',
    situation: 'Khi thấy Cảnh sát giao thông ra hiệu lệnh dừng xe bằng gậy chỉ huy giao thông và còi, lái xe ô tô không dừng lại mà tăng ga bỏ chạy.',
    questionText: 'Hành vi không chấp hành hiệu lệnh của người điều khiển giao thông (CSGT) đối với ô tô bị xử phạt ra sao?',
    options: [
      'Phạt tiền từ 1.000.000đ - 2.000.000đ',
      'Phạt tiền từ 4.000.000đ - 6.000.000đ, tước GPLX từ 1 - 3 tháng',
      'Phạt tiền từ 8.000.000đ - 10.000.000đ, tước GPLX từ 3 - 5 tháng',
      'Phạt tiền từ 2.000.000đ - 3.000.000đ, tạm giữ xe 3 ngày'
    ],
    correctIndex: 1,
    decreeReference: 'Điểm b Khoản 5 Điều 5 Nghị định 100/2019/NĐ-CP (sửa đổi bởi NĐ 123/2021/NĐ-CP)',
    penaltyRange: '4.000.000đ - 6.000.000đ',
    extraPenalty: 'Tước quyền sử dụng GPLX từ 1 - 3 tháng (3 - 5 tháng nếu gây tai nạn)',
    expertExplanation: 'Hiệu lệnh của Cảnh sát giao thông có hiệu lực cao nhất trong hệ thống báo hiệu đường bộ (cao hơn cả đèn tín hiệu và biển báo). Việc chống đối hoặc bỏ chạy nguy cơ gây rủi ro tai nạn nghiêm trọng cho người đi đường. Lái xe cần bình tĩnh giảm tốc, bật xi-nhan và tấp vào lề đường theo chỉ dẫn.'
  },
  {
    id: 8,
    category: 'safety_priority',
    categoryName: 'An toàn & Ưu tiên',
    vehicle: 'Xe máy',
    difficulty: 'Dễ',
    situation: 'Anh Hùng đi xe máy chở theo 3 người lớn phía sau (tổng cộng 4 người trên xe) đi dạo phố.',
    questionText: 'Hành vi điều khiển xe máy chở từ 3 người trở lên (không thuộc các trường hợp ngoại lệ) bị phạt bao nhiêu?',
    options: [
      'Phạt tiền từ 200.000đ - 300.000đ',
      'Phạt tiền từ 400.000đ - 600.000đ, tước GPLX từ 1 - 3 tháng',
      'Phạt tiền từ 1.000.000đ - 2.000.000đ, tịch thu xe',
      'Phạt tiền từ 800.000đ - 1.000.000đ, tước GPLX 1 tháng'
    ],
    correctIndex: 1,
    decreeReference: 'Điểm b Khoản 3 Điều 6 Nghị định 100/2019/NĐ-CP',
    penaltyRange: '400.000đ - 600.000đ',
    extraPenalty: 'Tước quyền sử dụng GPLX từ 1 - 3 tháng',
    expertExplanation: 'Quy định chỉ cho phép xe máy chở tối đa 1 người. Được chở tối đa 2 người trong 3 trường hợp: (1) Chở người bệnh đi cấp cứu, (2) Áp giải người có hành vi vi phạm pháp luật, (3) Trẻ em dưới 14 tuổi. Chở quá tải làm mất cân bằng xe, giảm hiệu quả phanh nguy hiểm.'
  },
  {
    id: 9,
    category: 'alcohol',
    categoryName: 'Cồn & Chất kích thích',
    vehicle: 'Ô tô',
    difficulty: 'Khó',
    situation: 'Tài xế xe tải bị lực lượng chức năng kiểm tra nồng độ cồn, kết quả đo được 0.55 mg/1 lít khí thở (vượt quá 0.4 mg/1 lít khí thở).',
    questionText: 'Khung phạt tối đa (kịch khung) đối với người điều khiển ô tô vi phạm nồng độ cồn mức 3 là bao nhiêu?',
    options: [
      'Phạt tiền từ 16.000.000đ - 18.000.000đ, tước GPLX 16 - 18 tháng',
      'Phạt tiền từ 30.000.000đ - 40.000.000đ, tước GPLX từ 22 - 24 tháng',
      'Phạt tiền từ 20.000.000đ - 25.000.000đ, tước GPLX 12 tháng',
      'Phạt tiền từ 40.000.000đ - 50.000.000đ, tước GPLX vĩnh viễn'
    ],
    correctIndex: 1,
    decreeReference: 'Điểm a Khoản 10 Điều 5 Nghị định 100/2019/NĐ-CP',
    penaltyRange: '30.000.000đ - 40.000.000đ',
    extraPenalty: 'Tước quyền sử dụng GPLX từ 22 - 24 tháng & Tạm giữ xe đến 7 ngày',
    expertExplanation: 'Đây là mức xử phạt hành chính nặng nhất đối với người đi ô tô. Ở mức nồng độ cồn vượt 0.4 mg/l khí thở hoặc 80 mg/100 ml máu, não bộ mất hoàn toàn khả năng kiểm sát nhận thức và phản xạ. Do đó phạt tới 40 triệu đồng và tước bằng gần 2 năm là chế tài đủ sức răn đe để bảo vệ tính mạng cộng đồng.'
  },
  {
    id: 10,
    category: 'documents',
    categoryName: 'Giấy tờ & Thiết bị',
    vehicle: 'Xe máy',
    difficulty: 'Dễ',
    situation: 'Bạn Minh chở bạn gái đi xe máy nhưng cả hai đều không đội mũ bảo hiểm khi lưu thông trên đường đô thị.',
    questionText: 'Hành vi người điều khiển xe máy không đội "mũ bảo hiểm cho người đi mô tô, xe máy" bị phạt tiền bao nhiêu?',
    options: [
      'Phạt tiền từ 100.000đ - 200.000đ',
      'Phạt tiền từ 400.000đ - 600.000đ',
      'Phạt tiền từ 800.000đ - 1.000.000đ',
      'Phạt tiền từ 200.000đ - 300.000đ'
    ],
    correctIndex: 1,
    decreeReference: 'Điểm n Khoản 3 Điều 6 Nghị định 100/2019/NĐ-CP (sửa đổi bởi NĐ 123/2021/NĐ-CP)',
    penaltyRange: '400.000đ - 600.000đ',
    extraPenalty: 'Phạt cả người điều khiển lẫn người ngồi sau không đội mũ (mỗi người 400k-600k)',
    expertExplanation: 'Nghị định 123/2021/NĐ-CP đã nâng mức phạt lỗi không đội mũ bảo hiểm từ mức cũ (200k-300k) lên 400k-600k cho mỗi người. Mũ bảo hiểm đạt chuẩn giúp giảm tới 70% nguy cơ chấn thương sọ não khi xảy ra va chạm. Hãy chọn mũ đạt chuẩn CR và cài dây quai chắc chắn.'
  },
  {
    id: 11,
    category: 'documents',
    categoryName: 'Giấy tờ & Thiết bị',
    vehicle: 'Xe máy',
    difficulty: 'Khó',
    situation: 'Anh Kiên mua xe máy dung tích xi-lanh 150 cm3 nhưng chưa thi GPLX hạng A1/A2. Khi bị CSGT kiểm tra, anh không xuất trình được Giấy phép lái xe.',
    questionText: 'Điều khiển xe mô tô hai bánh có dung tích xi-lanh từ 175 cm3 trở lên (hoặc dưới 175 cm3 theo NĐ123) mà không có GPLX bị phạt bao nhiêu?',
    options: [
      'Phạt tiền từ 800.000đ - 1.200.000đ',
      'Phạt tiền từ 1.000.000đ - 2.000.000đ (dưới 175cc) / 4.000.000đ - 5.000.000đ (từ 175cc trở lên)',
      'Phạt tiền từ 3.000.000đ - 4.000.000đ, tịch thu xe',
      'Phạt tiền từ 500.000đ - 800.000đ'
    ],
    correctIndex: 1,
    decreeReference: 'Khoản 5 & Khoản 7 Điều 21 Nghị định 100/2019/NĐ-CP (sửa đổi bởi NĐ 123/2021/NĐ-CP)',
    penaltyRange: '1.000.000đ - 2.000.000đ (dưới 175cc) | 4.000.000đ - 5.000.000đ (từ 175cc trở lên)',
    extraPenalty: 'Tạm giữ phương tiện đến 07 ngày',
    expertExplanation: 'Theo Nghị định 123/2021/NĐ-CP, phạt không có GPLX xe máy dưới 175cc là 1 - 2 triệu đồng; từ 175cc trở lên phạt 4 - 5 triệu đồng. Việc không qua đào tạo và sát hạch lái xe đồng nghĩa với việc chưa được trang bị kỹ năng xử lý tình huống nguy hiểm và hiểu biết pháp luật giao thông.'
  },
  {
    id: 12,
    category: 'speed_signal',
    categoryName: 'Tốc độ & Tín hiệu',
    vehicle: 'Ô tô',
    difficulty: 'Khó',
    situation: 'Tài xế điều khiển ô tô chạy với tốc độ 120 km/h trên tuyến đường cấm chạy quá 80 km/h (chạy quá tốc độ quy định 40 km/h).',
    questionText: 'Điều khiển ô tô chạy quá tốc độ quy định trên 35 km/h bị xử phạt thế nào?',
    options: [
      'Phạt tiền từ 6.000.000đ - 8.000.000đ, tước GPLX 1 - 3 tháng',
      'Phạt tiền từ 10.000.000đ - 12.000.000đ, tước GPLX từ 2 - 4 tháng',
      'Phạt tiền từ 14.000.000đ - 16.000.000đ, tước GPLX từ 3 - 5 tháng',
      'Phạt tiền từ 18.000.000đ - 20.000.000đ, tước GPLX 5 - 7 tháng'
    ],
    correctIndex: 1,
    decreeReference: 'Điểm c Khoản 7 Điều 5 Nghị định 100/2019/NĐ-CP',
    penaltyRange: '10.000.000đ - 12.000.000đ',
    extraPenalty: 'Tước quyền sử dụng GPLX từ 2 - 4 tháng',
    expertExplanation: 'Quá tốc độ trên 35 km/h là hành vi chạy quá tốc độ ở mức nguy hiểm nhất đối với ô tô. Ở tốc độ này, quãng đường phanh gia tăng gấp nhiều lần và góc quan sát của tài xế bị thu hẹp đáng kể. Mức phạt tiền lên đến 12 triệu đồng và bị tước bằng lái đến 4 tháng.'
  },
  {
    id: 13,
    category: 'lane_prohibited',
    categoryName: 'Làn đường & Đường cấm',
    vehicle: 'Ô tô',
    difficulty: 'Trung bình',
    situation: 'Anh Quang điều khiển xe ô tô thực hiện hành vi quay đầu xe ngay trên vạch đường dành cho người đi bộ sang đường.',
    questionText: 'Hành vi quay đầu xe ô tô tại phần đường dành cho người đi bộ sang đường bị xử phạt bao nhiêu?',
    options: [
      'Phạt tiền từ 100.000đ - 200.000đ',
      'Phạt tiền từ 400.000đ - 600.000đ',
      'Phạt tiền từ 1.000.000đ - 2.000.000đ, tước GPLX 1 tháng',
      'Phạt tiền từ 2.000.000đ - 3.000.000đ'
    ],
    correctIndex: 1,
    decreeReference: 'Điểm k Khoản 1 Điều 5 Nghị định 100/2019/NĐ-CP',
    penaltyRange: '400.000đ - 600.000đ',
    extraPenalty: 'Trường hợp gây tai nạn giao thông sẽ bị tước GPLX từ 2 - 4 tháng',
    expertExplanation: 'Phần đường dành cho người đi bộ sang đường là không gian ưu tiên tối thượng cho người đi bộ. Lái xe không được phép quay đầu, dừng xe hay đỗ xe đè lên vạch này. Khi muốn quay đầu xe, phải di chuyển đến điểm cho phép quay đầu hoặc giao lộ có biển chỉ dẫn.'
  },
  {
    id: 14,
    category: 'lane_prohibited',
    categoryName: 'Làn đường & Đường cấm',
    vehicle: 'Xe máy',
    difficulty: 'Trung bình',
    situation: 'Chị Hà điều khiển xe máy đi vào tuyến đường có biển báo P.102 "Cấm đi ngược chiều" hoặc P.101 "Cấm đi vào".',
    questionText: 'Đi xe máy vào đường cấm, khu vực có biển cấm đi vào đối với loại xe đang điều khiển bị phạt bao nhiêu?',
    options: [
      'Phạt tiền từ 200.000đ - 400.000đ',
      'Phạt tiền từ 2.000.000đ - 3.000.000đ, tước GPLX từ 1 - 3 tháng',
      'Phạt tiền từ 800.000đ - 1.200.000đ, tước GPLX 1 tháng',
      'Phạt tiền từ 4.000.000đ - 5.000.000đ'
    ],
    correctIndex: 1,
    decreeReference: 'Điểm i Khoản 4 Điều 6 Nghị định 100/2019/NĐ-CP (sửa đổi bởi NĐ 123/2021/NĐ-CP)',
    penaltyRange: '2.000.000đ - 3.000.000đ',
    extraPenalty: 'Tước quyền sử dụng GPLX từ 1 - 3 tháng',
    expertExplanation: 'Nghị định 123/2021/NĐ-CP tăng mức phạt lỗi đi vào đường cấm đối với xe máy từ 1 - 2 triệu lên thành 2 - 3 triệu đồng (tước bằng 1-3 tháng). Đi vào tuyến đường cấm tiềm ẩn rủi ro va chạm trực diện cực kỳ nguy hiểm do các xe đi chiều ngược lại không dự đoán được sự xuất hiện của bạn.'
  },
  {
    id: 15,
    category: 'safety_priority',
    categoryName: 'An toàn & Ưu tiên',
    vehicle: 'Người đi bộ',
    difficulty: 'Dễ',
    situation: 'Ông Hải là người đi bộ, thay vì đi trên vạch sang đường cách đó 20m, ông đã trèo qua dải phân cách cứng giữa đường để sang đường cho nhanh.',
    questionText: 'Mức phạt đối với người đi bộ vượt qua dải phân cách hoặc đi không đúng phần đường quy định là bao nhiêu?',
    options: [
      'Chỉ bị nhắc nhở, không bị phạt tiền',
      'Phạt tiền từ 100.000đ - 200.000đ',
      'Phạt tiền từ 300.000đ - 500.000đ',
      'Phạt tiền từ 500.000đ - 1.000.000đ'
    ],
    correctIndex: 1,
    decreeReference: 'Điểm a Khoản 1 Điều 9 Nghị định 100/2019/NĐ-CP',
    penaltyRange: '100.000đ - 200.000đ',
    extraPenalty: 'Nếu gây tai nạn giao thông nghiêm trọng có thể bị truy cứu trách nhiệm hình sự',
    expertExplanation: 'Luật giao thông đường bộ quy định người đi bộ cũng là một chủ thể tham gia giao thông và phải tuân thủ pháp luật. Việc vượt qua dải phân cách khiến các tài xế ô tô, xe máy bất ngờ không kịp xử lý. Nếu người đi bộ vi phạm gây tai nạn nghiêm trọng có thể bị truy cứu trách nhiệm hình sự theo Điều 260 Bộ luật Hình sự.'
  },
  {
    id: 16,
    category: 'speed_signal',
    categoryName: 'Tốc độ & Tín hiệu',
    vehicle: 'Ô tô',
    difficulty: 'Trung bình',
    situation: 'Tài xế điều khiển ô tô đang lưu thông trên đường cao tốc với tốc độ 100 km/h bất ngờ chuyển làn đường mà không bật đèn tín hiệu báo trước (xi-nhan).',
    questionText: 'Chuyển làn đường không có tín hiệu báo trước khi đang chạy trên đường cao tốc bị xử phạt ra sao?',
    options: [
      'Phạt tiền từ 800.000đ - 1.000.000đ',
      'Phạt tiền từ 4.000.000đ - 6.000.000đ, tước GPLX từ 1 - 3 tháng',
      'Phạt tiền từ 2.000.000đ - 3.000.000đ',
      'Phạt tiền từ 10.000.000đ - 12.000.000đ, tước GPLX 2 - 4 tháng'
    ],
    correctIndex: 1,
    decreeReference: 'Điểm g Khoản 5 Điều 5 Nghị định 100/2019/NĐ-CP (sửa đổi bởi NĐ 123/2021/NĐ-CP)',
    penaltyRange: '4.000.000đ - 6.000.000đ',
    extraPenalty: 'Tước quyền sử dụng GPLX từ 1 - 3 tháng',
    expertExplanation: 'Chuyển làn không xi-nhan trên đường cao tốc phạt nặng hơn rất nhiều so với đường thông thường (đường thường phạt 400k-600k). Lý do: Trên đường cao tốc xe chạy tốc độ rất cao, chuyển làn đột ngột làm xe phía sau không kịp phản ứng, dễ gây ra tai nạn dồn toa liên hoàn.'
  },
  {
    id: 17,
    category: 'safety_priority',
    categoryName: 'An toàn & Ưu tiên',
    vehicle: 'Ô tô',
    difficulty: 'Trung bình',
    situation: 'Xe ô tô cứu thương đang phát tín hiệu còi và đèn ưu tiên đưa bệnh nhân đi cấp cứu. Xe ô tô phía trước dù có khoảng trống an toàn nhưng vẫn cố tình không nhường đường.',
    questionText: 'Hành vi không nhường đường hoặc gây cản trở xe được quyền ưu tiên đang phát tín hiệu ưu tiên bị phạt bao nhiêu?',
    options: [
      'Phạt tiền từ 1.000.000đ - 2.000.000đ',
      'Phạt tiền từ 6.000.000đ - 8.000.000đ, tước GPLX từ 2 - 4 tháng',
      'Phạt tiền từ 3.000.000đ - 5.000.000đ, tước GPLX 1 - 3 tháng',
      'Phạt tiền từ 10.000.000đ - 12.000.000đ'
    ],
    correctIndex: 1,
    decreeReference: 'Điểm h Khoản 5 Điều 5 Nghị định 100/2019/NĐ-CP (sửa đổi bởi NĐ 123/2021/NĐ-CP)',
    penaltyRange: '6.000.000đ - 8.000.000đ',
    extraPenalty: 'Tước quyền sử dụng GPLX từ 2 - 4 tháng',
    expertExplanation: 'Mức phạt không nhường đường xe ưu tiên (xe chữa cháy, xe quân sự, xe công an, xe cứu thương đang làm nhiệm vụ) đã tăng gấp đôi theo NĐ 123 lên mức 6 - 8 triệu đồng đối với ô tô. Nhường đường cho xe ưu tiên vừa là nghĩa vụ pháp lý vừa là hành động văn minh cứu sống tính mạng con người.'
  },
  {
    id: 18,
    category: 'documents',
    categoryName: 'Giấy tờ & Thiết bị',
    vehicle: 'Xe máy',
    difficulty: 'Trung bình',
    situation: 'Anh Trung mua xe máy cũ nhưng không làm thủ tục sang tên và xe không có Giấy đăng ký xe (Cà vẹt xe) theo quy định.',
    questionText: 'Điều khiển xe máy không có Giấy đăng ký xe theo quy định bị xử phạt bao nhiêu?',
    options: [
      'Phạt tiền từ 100.000đ - 200.000đ',
      'Phạt tiền từ 800.000đ - 1.000.000đ, tạm giữ phương tiện đến 7 ngày',
      'Phạt tiền từ 300.000đ - 400.000đ',
      'Phạt tiền từ 2.000.000đ - 3.000.000đ, tịch thu xe ngay lập tức'
    ],
    correctIndex: 1,
    decreeReference: 'Điểm a Khoản 2 Điều 17 Nghị định 100/2019/NĐ-CP (sửa đổi bởi NĐ 123/2021/NĐ-CP)',
    penaltyRange: '800.000đ - 1.000.000đ',
    extraPenalty: 'Tạm giữ phương tiện đến 07 ngày trước khi xử lý (Nếu không chứng minh được nguồn gốc xe có thể bị tịch thu)',
    expertExplanation: 'Nghị định 123/2021/NĐ-CP đã tăng mức phạt lỗi không có Giấy đăng ký xe máy lên 800.000đ - 1.000.000đ (mức cũ 300k-400k). Giấy đăng ký xe chứng minh quyền sở hữu hợp pháp của phương tiện. Khi mua bán xe cũ, người mua phải hoàn tất thủ tục sang tên đổi chủ đúng thời hạn.'
  },
  {
    id: 19,
    category: 'lane_prohibited',
    categoryName: 'Làn đường & Đường cấm',
    vehicle: 'Ô tô',
    difficulty: 'Khó',
    situation: 'Lái xe ô tô trót đi quá nút giao lùi xe lại trên đường cao tốc Hà Nội - Hải Phòng để rẽ ra khỏi cao tốc.',
    questionText: 'Hành vi lùi xe hoặc đi ngược chiều trên đường cao tốc đối với ô tô bị xử phạt ở mức nào?',
    options: [
      'Phạt tiền từ 8.000.000đ - 10.000.000đ, tước GPLX 2 - 4 tháng',
      'Phạt tiền từ 16.000.000đ - 18.000.000đ, tước GPLX từ 5 - 7 tháng',
      'Phạt tiền từ 10.000.000đ - 12.000.000đ, tước GPLX 3 - 5 tháng',
      'Phạt tiền từ 20.000.000đ - 30.000.000đ, tước GPLX 12 tháng'
    ],
    correctIndex: 1,
    decreeReference: 'Điểm a Khoản 8 Điều 5 Nghị định 100/2019/NĐ-CP',
    penaltyRange: '16.000.000đ - 18.000.000đ',
    extraPenalty: 'Tước quyền sử dụng GPLX từ 5 - 7 tháng & Tạm giữ xe 7 ngày',
    expertExplanation: 'Lùi xe trên đường cao tốc là một trong những hành vi coi thường tính mạng nguy hiểm nhất. Các xe khác lưu thông với vận tốc 100 - 120 km/h sẽ không kịp giảm tốc, dẫn đến tai nạn thảm khốc. Nếu trót đi quá nút giao, tài xế BẮT BUỘC phải tiếp tục chạy thẳng đến nút giao tiếp theo để quay đầu.'
  },
  {
    id: 20,
    category: 'documents',
    categoryName: 'Giấy tờ & Thiết bị',
    vehicle: 'Ô tô',
    difficulty: 'Trung bình',
    situation: 'Tài xế dán băng dính đen làm thay đổi chữ số trên biển số ô tô (biến số 3 thành số 8) nhằm trốn tránh phạt nguội.',
    questionText: 'Điều khiển xe ô tô dán thêm làm thay đổi chữ, số trên biển số hoặc che mờ biển số bị phạt bao nhiêu?',
    options: [
      'Phạt tiền từ 800.000đ - 1.000.000đ',
      'Phạt tiền từ 4.000.000đ - 6.000.000đ, yêu cầu khôi phục biển số',
      'Phạt tiền từ 1.000.000đ - 2.000.000đ',
      'Phạt tiền từ 10.000.000đ - 12.000.000đ'
    ],
    correctIndex: 1,
    decreeReference: 'Khoản 3 Điều 16 Nghị định 100/2019/NĐ-CP (sửa đổi bởi NĐ 123/2021/NĐ-CP)',
    penaltyRange: '4.000.000đ - 6.000.000đ',
    extraPenalty: 'Tịch thu biển số không đúng quy định & buộc khôi phục lại tính năng kỹ thuật của biển số',
    expertExplanation: 'Hành vi sửa chữa, dán che biển số ô tô từng bị phạt nhẹ (800k-1 triệu) nhưng Nghị định 123 đã tăng gấp 6 lần lên mức 4 - 6 triệu đồng. Việc che biển số không chỉ gian dối nhằm trốn phạt nguội mà còn gây oan sai cho chủ xe khác và gây khó khăn cho công tác điều tra tội phạm.'
  }
];
