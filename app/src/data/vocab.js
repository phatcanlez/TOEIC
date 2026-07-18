// ============================================================
//  Bộ từ vựng TOEIC cốt lõi (target 800+) — theo chủ đề
//  Trường: w=word, p=part of speech, ipa, vi=nghĩa TV,
//          ex=câu ví dụ, topic=chủ đề
// ============================================================
export const VOCAB = [
  // --- Office / Công sở ---
  { w:"agenda", p:"n", ipa:"/əˈdʒendə/", vi:"chương trình nghị sự, lịch làm việc", ex:"The first item on the agenda is the budget review.", topic:"Office" },
  { w:"deadline", p:"n", ipa:"/ˈdedlaɪn/", vi:"hạn chót", ex:"We must meet the deadline by Friday.", topic:"Office" },
  { w:"colleague", p:"n", ipa:"/ˈkɒliːɡ/", vi:"đồng nghiệp", ex:"My colleague helped me finish the report.", topic:"Office" },
  { w:"schedule", p:"n/v", ipa:"/ˈʃedjuːl/", vi:"lịch trình; lên lịch", ex:"Please schedule the meeting for 3 p.m.", topic:"Office" },
  { w:"attend", p:"v", ipa:"/əˈtend/", vi:"tham dự", ex:"All staff must attend the training session.", topic:"Office" },
  { w:"submit", p:"v", ipa:"/səbˈmɪt/", vi:"nộp, đệ trình", ex:"Please submit your application by email.", topic:"Office" },
  { w:"memo", p:"n", ipa:"/ˈmeməʊ/", vi:"bản ghi nhớ, thông báo nội bộ", ex:"The manager sent a memo about the new policy.", topic:"Office" },
  { w:"supervisor", p:"n", ipa:"/ˈsuːpəvaɪzə/", vi:"người giám sát, cấp trên", ex:"Report the issue to your supervisor.", topic:"Office" },
  { w:"appointment", p:"n", ipa:"/əˈpɔɪntmənt/", vi:"cuộc hẹn", ex:"I have an appointment with the dentist.", topic:"Office" },
  { w:"reschedule", p:"v", ipa:"/ˌriːˈʃedjuːl/", vi:"dời lịch, sắp xếp lại", ex:"We had to reschedule the interview.", topic:"Office" },

  // --- Business / Kinh doanh ---
  { w:"revenue", p:"n", ipa:"/ˈrevənjuː/", vi:"doanh thu", ex:"The company's revenue increased by 10%.", topic:"Business" },
  { w:"profit", p:"n", ipa:"/ˈprɒfɪt/", vi:"lợi nhuận", ex:"They made a large profit last quarter.", topic:"Business" },
  { w:"invoice", p:"n", ipa:"/ˈɪnvɔɪs/", vi:"hóa đơn", ex:"The invoice will be sent within 24 hours.", topic:"Business" },
  { w:"negotiate", p:"v", ipa:"/nɪˈɡəʊʃieɪt/", vi:"đàm phán", ex:"They negotiated a better contract.", topic:"Business" },
  { w:"merger", p:"n", ipa:"/ˈmɜːdʒə/", vi:"sự sáp nhập", ex:"The merger of the two firms was announced.", topic:"Business" },
  { w:"stakeholder", p:"n", ipa:"/ˈsteɪkhəʊldə/", vi:"bên liên quan", ex:"We must inform all stakeholders.", topic:"Business" },
  { w:"competitor", p:"n", ipa:"/kəmˈpetɪtə/", vi:"đối thủ cạnh tranh", ex:"Our main competitor lowered its prices.", topic:"Business" },
  { w:"strategy", p:"n", ipa:"/ˈstrætədʒi/", vi:"chiến lược", ex:"We need a new marketing strategy.", topic:"Business" },
  { w:"expand", p:"v", ipa:"/ɪkˈspænd/", vi:"mở rộng", ex:"The firm plans to expand into Asia.", topic:"Business" },
  { w:"launch", p:"v/n", ipa:"/lɔːntʃ/", vi:"ra mắt; sự ra mắt", ex:"They will launch the product next month.", topic:"Business" },

  // --- Finance / Tài chính ---
  { w:"budget", p:"n", ipa:"/ˈbʌdʒɪt/", vi:"ngân sách", ex:"The project went over budget.", topic:"Finance" },
  { w:"expense", p:"n", ipa:"/ɪkˈspens/", vi:"chi phí", ex:"Travel expenses will be reimbursed.", topic:"Finance" },
  { w:"reimburse", p:"v", ipa:"/ˌriːɪmˈbɜːs/", vi:"hoàn tiền", ex:"The company will reimburse your costs.", topic:"Finance" },
  { w:"deposit", p:"n/v", ipa:"/dɪˈpɒzɪt/", vi:"tiền đặt cọc; gửi tiền", ex:"A deposit is required to book the room.", topic:"Finance" },
  { w:"withdraw", p:"v", ipa:"/wɪðˈdrɔː/", vi:"rút (tiền)", ex:"You can withdraw cash from the ATM.", topic:"Finance" },
  { w:"invest", p:"v", ipa:"/ɪnˈvest/", vi:"đầu tư", ex:"They decided to invest in new equipment.", topic:"Finance" },
  { w:"loan", p:"n", ipa:"/ləʊn/", vi:"khoản vay", ex:"She applied for a bank loan.", topic:"Finance" },
  { w:"account", p:"n", ipa:"/əˈkaʊnt/", vi:"tài khoản", ex:"Please check your bank account.", topic:"Finance" },
  { w:"transaction", p:"n", ipa:"/trænˈzækʃn/", vi:"giao dịch", ex:"The transaction was completed online.", topic:"Finance" },
  { w:"fee", p:"n", ipa:"/fiː/", vi:"lệ phí", ex:"There is a small service fee.", topic:"Finance" },

  // --- Human Resources / Nhân sự ---
  { w:"recruit", p:"v", ipa:"/rɪˈkruːt/", vi:"tuyển dụng", ex:"We need to recruit new engineers.", topic:"HR" },
  { w:"candidate", p:"n", ipa:"/ˈkændɪdət/", vi:"ứng viên", ex:"The candidate has excellent skills.", topic:"HR" },
  { w:"resume", p:"n", ipa:"/ˈrezjuːmeɪ/", vi:"sơ yếu lý lịch (CV)", ex:"Please attach your resume.", topic:"HR" },
  { w:"promotion", p:"n", ipa:"/prəˈməʊʃn/", vi:"sự thăng chức", ex:"She received a promotion to manager.", topic:"HR" },
  { w:"applicant", p:"n", ipa:"/ˈæplɪkənt/", vi:"người nộp đơn", ex:"We interviewed five applicants.", topic:"HR" },
  { w:"qualified", p:"adj", ipa:"/ˈkwɒlɪfaɪd/", vi:"đủ tiêu chuẩn", ex:"He is highly qualified for the job.", topic:"HR" },
  { w:"benefit", p:"n", ipa:"/ˈbenɪfɪt/", vi:"phúc lợi, lợi ích", ex:"The job offers good health benefits.", topic:"HR" },
  { w:"salary", p:"n", ipa:"/ˈsæləri/", vi:"lương", ex:"The salary is negotiable.", topic:"HR" },
  { w:"retire", p:"v", ipa:"/rɪˈtaɪə/", vi:"nghỉ hưu", ex:"He plans to retire next year.", topic:"HR" },
  { w:"resign", p:"v", ipa:"/rɪˈzaɪn/", vi:"từ chức", ex:"She resigned from her position.", topic:"HR" },

  // --- Marketing ---
  { w:"advertisement", p:"n", ipa:"/ədˈvɜːtɪsmənt/", vi:"quảng cáo", ex:"The advertisement attracted many customers.", topic:"Marketing" },
  { w:"promote", p:"v", ipa:"/prəˈməʊt/", vi:"quảng bá", ex:"They promoted the new brand online.", topic:"Marketing" },
  { w:"survey", p:"n/v", ipa:"/ˈsɜːveɪ/", vi:"khảo sát", ex:"We conducted a customer survey.", topic:"Marketing" },
  { w:"brand", p:"n", ipa:"/brænd/", vi:"thương hiệu", ex:"It is a well-known brand.", topic:"Marketing" },
  { w:"target", p:"n/v", ipa:"/ˈtɑːɡɪt/", vi:"mục tiêu; nhắm đến", ex:"Our target audience is young adults.", topic:"Marketing" },
  { w:"discount", p:"n", ipa:"/ˈdɪskaʊnt/", vi:"giảm giá", ex:"They offer a 20% discount.", topic:"Marketing" },
  { w:"campaign", p:"n", ipa:"/kæmˈpeɪn/", vi:"chiến dịch", ex:"The ad campaign was very successful.", topic:"Marketing" },
  { w:"feedback", p:"n", ipa:"/ˈfiːdbæk/", vi:"phản hồi", ex:"We value your feedback.", topic:"Marketing" },
  { w:"demand", p:"n/v", ipa:"/dɪˈmɑːnd/", vi:"nhu cầu; đòi hỏi", ex:"There is high demand for the product.", topic:"Marketing" },
  { w:"launch", p:"v", ipa:"/lɔːntʃ/", vi:"tung ra sản phẩm", ex:"The company will launch a campaign soon.", topic:"Marketing" },

  // --- Travel / Du lịch ---
  { w:"itinerary", p:"n", ipa:"/aɪˈtɪnərəri/", vi:"lịch trình chuyến đi", ex:"Here is your travel itinerary.", topic:"Travel" },
  { w:"reservation", p:"n", ipa:"/ˌrezəˈveɪʃn/", vi:"sự đặt chỗ", ex:"I'd like to make a reservation.", topic:"Travel" },
  { w:"boarding", p:"n", ipa:"/ˈbɔːdɪŋ/", vi:"sự lên máy bay", ex:"Boarding will begin in ten minutes.", topic:"Travel" },
  { w:"delay", p:"n/v", ipa:"/dɪˈleɪ/", vi:"sự trì hoãn", ex:"The flight was delayed by two hours.", topic:"Travel" },
  { w:"departure", p:"n", ipa:"/dɪˈpɑːtʃə/", vi:"sự khởi hành", ex:"The departure time is 9 a.m.", topic:"Travel" },
  { w:"luggage", p:"n", ipa:"/ˈlʌɡɪdʒ/", vi:"hành lý", ex:"Please collect your luggage at gate 5.", topic:"Travel" },
  { w:"accommodation", p:"n", ipa:"/əˌkɒməˈdeɪʃn/", vi:"chỗ ở", ex:"The hotel offers comfortable accommodation.", topic:"Travel" },
  { w:"passenger", p:"n", ipa:"/ˈpæsɪndʒə/", vi:"hành khách", ex:"All passengers must show their tickets.", topic:"Travel" },
  { w:"confirm", p:"v", ipa:"/kənˈfɜːm/", vi:"xác nhận", ex:"Please confirm your booking.", topic:"Travel" },
  { w:"destination", p:"n", ipa:"/ˌdestɪˈneɪʃn/", vi:"điểm đến", ex:"Our destination is Tokyo.", topic:"Travel" },

  // --- Manufacturing / Sản xuất ---
  { w:"assembly", p:"n", ipa:"/əˈsembli/", vi:"sự lắp ráp", ex:"The parts are joined on the assembly line.", topic:"Manufacturing" },
  { w:"warehouse", p:"n", ipa:"/ˈweəhaʊs/", vi:"nhà kho", ex:"The goods are stored in the warehouse.", topic:"Manufacturing" },
  { w:"inventory", p:"n", ipa:"/ˈɪnvəntri/", vi:"hàng tồn kho", ex:"We check the inventory every month.", topic:"Manufacturing" },
  { w:"shipment", p:"n", ipa:"/ˈʃɪpmənt/", vi:"lô hàng, sự vận chuyển", ex:"The shipment arrived on time.", topic:"Manufacturing" },
  { w:"defect", p:"n", ipa:"/ˈdiːfekt/", vi:"lỗi, khuyết tật", ex:"The product has a minor defect.", topic:"Manufacturing" },
  { w:"quality", p:"n", ipa:"/ˈkwɒləti/", vi:"chất lượng", ex:"We guarantee high quality.", topic:"Manufacturing" },
  { w:"supply", p:"n/v", ipa:"/səˈplaɪ/", vi:"nguồn cung; cung cấp", ex:"They supply parts to the factory.", topic:"Manufacturing" },
  { w:"equipment", p:"n", ipa:"/ɪˈkwɪpmənt/", vi:"thiết bị", ex:"The equipment needs maintenance.", topic:"Manufacturing" },
  { w:"maintenance", p:"n", ipa:"/ˈmeɪntənəns/", vi:"sự bảo trì", ex:"Regular maintenance is required.", topic:"Manufacturing" },
  { w:"efficiency", p:"n", ipa:"/ɪˈfɪʃnsi/", vi:"hiệu suất", ex:"New machines improved efficiency.", topic:"Manufacturing" },

  // --- Contracts / Hợp đồng ---
  { w:"agreement", p:"n", ipa:"/əˈɡriːmənt/", vi:"thỏa thuận", ex:"Both sides signed the agreement.", topic:"Contracts" },
  { w:"clause", p:"n", ipa:"/klɔːz/", vi:"điều khoản", ex:"Read every clause carefully.", topic:"Contracts" },
  { w:"terms", p:"n", ipa:"/tɜːmz/", vi:"điều khoản, điều kiện", ex:"The terms of the contract are clear.", topic:"Contracts" },
  { w:"obligation", p:"n", ipa:"/ˌɒblɪˈɡeɪʃn/", vi:"nghĩa vụ", ex:"You have a legal obligation to pay.", topic:"Contracts" },
  { w:"comply", p:"v", ipa:"/kəmˈplaɪ/", vi:"tuân thủ", ex:"All firms must comply with the law.", topic:"Contracts" },
  { w:"renew", p:"v", ipa:"/rɪˈnjuː/", vi:"gia hạn", ex:"We renewed the contract for a year.", topic:"Contracts" },
  { w:"terminate", p:"v", ipa:"/ˈtɜːmɪneɪt/", vi:"chấm dứt", ex:"Either party may terminate the deal.", topic:"Contracts" },
  { w:"amend", p:"v", ipa:"/əˈmend/", vi:"sửa đổi", ex:"They amended the agreement.", topic:"Contracts" },
  { w:"valid", p:"adj", ipa:"/ˈvælɪd/", vi:"có hiệu lực", ex:"The ticket is valid for one month.", topic:"Contracts" },
  { w:"liable", p:"adj", ipa:"/ˈlaɪəbl/", vi:"chịu trách nhiệm pháp lý", ex:"The company is liable for damages.", topic:"Contracts" },

  // --- Common verbs / Động từ thường gặp ---
  { w:"achieve", p:"v", ipa:"/əˈtʃiːv/", vi:"đạt được", ex:"She achieved her sales goal.", topic:"Common" },
  { w:"implement", p:"v", ipa:"/ˈɪmplɪment/", vi:"triển khai", ex:"We will implement the new system.", topic:"Common" },
  { w:"require", p:"v", ipa:"/rɪˈkwaɪə/", vi:"yêu cầu, cần", ex:"This job requires experience.", topic:"Common" },
  { w:"provide", p:"v", ipa:"/prəˈvaɪd/", vi:"cung cấp", ex:"We provide free training.", topic:"Common" },
  { w:"increase", p:"v", ipa:"/ɪnˈkriːs/", vi:"tăng", ex:"Sales increased last month.", topic:"Common" },
  { w:"reduce", p:"v", ipa:"/rɪˈdjuːs/", vi:"giảm", ex:"We need to reduce costs.", topic:"Common" },
  { w:"improve", p:"v", ipa:"/ɪmˈpruːv/", vi:"cải thiện", ex:"They improved customer service.", topic:"Common" },
  { w:"maintain", p:"v", ipa:"/meɪnˈteɪn/", vi:"duy trì", ex:"We must maintain high standards.", topic:"Common" },
  { w:"establish", p:"v", ipa:"/ɪˈstæblɪʃ/", vi:"thành lập, thiết lập", ex:"The company was established in 1990.", topic:"Common" },
  { w:"ensure", p:"v", ipa:"/ɪnˈʃʊə/", vi:"đảm bảo", ex:"Please ensure the door is locked.", topic:"Common" },

  // --- Common adjectives / Tính từ thường gặp ---
  { w:"available", p:"adj", ipa:"/əˈveɪləbl/", vi:"có sẵn, rảnh", ex:"The manager is available now.", topic:"Common" },
  { w:"reliable", p:"adj", ipa:"/rɪˈlaɪəbl/", vi:"đáng tin cậy", ex:"He is a reliable worker.", topic:"Common" },
  { w:"efficient", p:"adj", ipa:"/ɪˈfɪʃnt/", vi:"hiệu quả", ex:"The new process is very efficient.", topic:"Common" },
  { w:"significant", p:"adj", ipa:"/sɪɡˈnɪfɪkənt/", vi:"đáng kể", ex:"There was a significant increase.", topic:"Common" },
  { w:"appropriate", p:"adj", ipa:"/əˈprəʊpriət/", vi:"phù hợp", ex:"Wear appropriate clothing.", topic:"Common" },
  { w:"temporary", p:"adj", ipa:"/ˈtemprəri/", vi:"tạm thời", ex:"This is a temporary solution.", topic:"Common" },
  { w:"mandatory", p:"adj", ipa:"/ˈmændətəri/", vi:"bắt buộc", ex:"Attendance is mandatory.", topic:"Common" },
  { w:"complimentary", p:"adj", ipa:"/ˌkɒmplɪˈmentri/", vi:"miễn phí (tặng kèm)", ex:"Breakfast is complimentary.", topic:"Common" },
  { w:"prompt", p:"adj", ipa:"/prɒmpt/", vi:"nhanh chóng, đúng giờ", ex:"Thank you for your prompt reply.", topic:"Common" },
  { w:"tentative", p:"adj", ipa:"/ˈtentətɪv/", vi:"chưa chắc chắn, tạm định", ex:"The date is still tentative.", topic:"Common" },

  // --- Customer service / Dịch vụ khách hàng ---
  { w:"complaint", p:"n", ipa:"/kəmˈpleɪnt/", vi:"lời phàn nàn", ex:"We received a customer complaint.", topic:"Service" },
  { w:"refund", p:"n/v", ipa:"/ˈriːfʌnd/", vi:"tiền hoàn lại; hoàn tiền", ex:"You can request a refund.", topic:"Service" },
  { w:"warranty", p:"n", ipa:"/ˈwɒrənti/", vi:"bảo hành", ex:"The product has a two-year warranty.", topic:"Service" },
  { w:"replacement", p:"n", ipa:"/rɪˈpleɪsmənt/", vi:"sự thay thế", ex:"We will send a replacement.", topic:"Service" },
  { w:"satisfaction", p:"n", ipa:"/ˌsætɪsˈfækʃn/", vi:"sự hài lòng", ex:"Customer satisfaction is our priority.", topic:"Service" },
  { w:"assist", p:"v", ipa:"/əˈsɪst/", vi:"hỗ trợ", ex:"How may I assist you?", topic:"Service" },
  { w:"inquiry", p:"n", ipa:"/ɪnˈkwaɪəri/", vi:"sự hỏi thông tin", ex:"We handle customer inquiries daily.", topic:"Service" },
  { w:"purchase", p:"n/v", ipa:"/ˈpɜːtʃəs/", vi:"sự mua; mua", ex:"Keep your purchase receipt.", topic:"Service" },
  { w:"receipt", p:"n", ipa:"/rɪˈsiːt/", vi:"biên lai", ex:"Please show your receipt.", topic:"Service" },
  { w:"guarantee", p:"n/v", ipa:"/ˌɡærənˈtiː/", vi:"sự bảo đảm", ex:"We guarantee fast delivery.", topic:"Service" },

  // --- Technology / Công nghệ ---
  { w:"upgrade", p:"v/n", ipa:"/ˌʌpˈɡreɪd/", vi:"nâng cấp", ex:"We upgraded the software.", topic:"Technology" },
  { w:"install", p:"v", ipa:"/ɪnˈstɔːl/", vi:"cài đặt", ex:"Please install the new update.", topic:"Technology" },
  { w:"access", p:"n/v", ipa:"/ˈækses/", vi:"quyền truy cập; truy cập", ex:"You need a password to access the system.", topic:"Technology" },
  { w:"device", p:"n", ipa:"/dɪˈvaɪs/", vi:"thiết bị", ex:"Connect the device to the network.", topic:"Technology" },
  { w:"backup", p:"n", ipa:"/ˈbækʌp/", vi:"bản sao lưu", ex:"Always keep a backup of your files.", topic:"Technology" },
  { w:"feature", p:"n", ipa:"/ˈfiːtʃə/", vi:"tính năng", ex:"The app has many useful features.", topic:"Technology" },
  { w:"network", p:"n", ipa:"/ˈnetwɜːk/", vi:"mạng lưới", ex:"The network is down again.", topic:"Technology" },
  { w:"data", p:"n", ipa:"/ˈdeɪtə/", vi:"dữ liệu", ex:"We collect customer data securely.", topic:"Technology" },
  { w:"technical", p:"adj", ipa:"/ˈteknɪkl/", vi:"thuộc kỹ thuật", ex:"Contact technical support for help.", topic:"Technology" },
  { w:"password", p:"n", ipa:"/ˈpɑːswɜːd/", vi:"mật khẩu", ex:"Change your password regularly.", topic:"Technology" },

  // --- Meetings / Họp hành ---
  { w:"conference", p:"n", ipa:"/ˈkɒnfərəns/", vi:"hội nghị", ex:"The conference will be held in May.", topic:"Meetings" },
  { w:"presentation", p:"n", ipa:"/ˌpreznˈteɪʃn/", vi:"bài thuyết trình", ex:"She gave an excellent presentation.", topic:"Meetings" },
  { w:"participant", p:"n", ipa:"/pɑːˈtɪsɪpənt/", vi:"người tham gia", ex:"Each participant received a handout.", topic:"Meetings" },
  { w:"minutes", p:"n", ipa:"/ˈmɪnɪts/", vi:"biên bản họp", ex:"Please take the minutes of the meeting.", topic:"Meetings" },
  { w:"postpone", p:"v", ipa:"/pəˈspəʊn/", vi:"hoãn lại", ex:"The meeting was postponed to Monday.", topic:"Meetings" },
  { w:"discuss", p:"v", ipa:"/dɪˈskʌs/", vi:"thảo luận", ex:"Let's discuss the proposal.", topic:"Meetings" },
  { w:"proposal", p:"n", ipa:"/prəˈpəʊzl/", vi:"đề xuất", ex:"They approved the proposal.", topic:"Meetings" },
  { w:"venue", p:"n", ipa:"/ˈvenjuː/", vi:"địa điểm tổ chức", ex:"The venue has changed to Room 3.", topic:"Meetings" },
  { w:"attendance", p:"n", ipa:"/əˈtendəns/", vi:"sự có mặt, số người dự", ex:"Attendance was higher than expected.", topic:"Meetings" },
  { w:"summarize", p:"v", ipa:"/ˈsʌməraɪz/", vi:"tóm tắt", ex:"Could you summarize the report?", topic:"Meetings" },

  // --- Logistics & Shipping / Vận chuyển & Giao nhận ---
  { w:"logistics", p:"n", ipa:"/ləˈdʒɪstɪks/", vi:"hậu cần, quản lý vận chuyển", ex:"The logistics coordinator handles national distribution.", topic:"Logistics" },
  { w:"distribute", p:"v", ipa:"/dɪˈstrɪbjuːt/", vi:"phân phối", ex:"We distribute products to major retail chains.", topic:"Logistics" },
  { w:"expedite", p:"v", ipa:"/ˈekspədaɪt/", vi:"xúc tiến, gửi hỏa tốc", ex:"We requested the courier to expedite the delivery.", topic:"Logistics" },
  { w:"tracking", p:"n", ipa:"/ˈtrækɪŋ/", vi:"việc theo dõi lộ trình", ex:"Please check the tracking status of your parcel online.", topic:"Logistics" },
  { w:"consignment", p:"n", ipa:"/kənˈsaɪnmənt/", vi:"lô hàng ký gửi", ex:"The latest consignment of goods has arrived safely.", topic:"Logistics" },

  // --- Advanced Business / Kinh doanh nâng cao ---
  { w:"collaborate", p:"v", ipa:"/kəˈlæbəreɪt/", vi:"cộng tác, hợp tác", ex:"Engineers collaborate on design improvements.", topic:"Business" },
  { w:"monopoly", p:"n", ipa:"/məˈnɒpəli/", vi:"sự độc quyền", ex:"High barriers to entry protected their monopoly.", topic:"Business" },
  { w:"subsidiary", p:"n", ipa:"/səbˈsɪdiəri/", vi:"công ty con", ex:"The parent company owns three overseas subsidiaries.", topic:"Business" },
  { w:"incentive", p:"n", ipa:"/ɪnˈsentɪv/", vi:"sự ưu đãi, khuyến khích, thưởng", ex:"Performance bonuses serve as a strong incentive for staff.", topic:"Business" },
  { w:"innovate", p:"v", ipa:"/ˈɪnəveɪt/", vi:"đổi mới, cải tiến", ex:"The tech firm must migrate and innovate to keep pace.", topic:"Business" },
  { w:"lucrative", p:"adj", ipa:"/ˈluːkrətɪv/", vi:"sinh lợi, sinh lời nhiều", ex:"Real estate proved to be a highly lucrative investment.", topic:"Business" },
  { w:"compromise", p:"n/v", ipa:"/ˈkɒmprəmaɪz/", vi:"sự thỏa hiệp; thỏa hiệp", ex:"Management and unions reached a compromise on salaries.", topic:"Business" },
  { w:"accumulate", p:"v", ipa:"/əˈkjuːmjəleɪt/", vi:"tích lũy, tích tụ", ex:"Over time, they accumulate a large amount of debt.", topic:"Business" },
  { w:"allocate", p:"v", ipa:"/ˈæləkeɪt/", vi:"phân bổ", ex:"We must allocate resources effectively among projects.", topic:"Business" },

  // --- Finance & Accounting / Tài chính - Kế toán nâng cao ---
  { w:"auditor", p:"n", ipa:"/ˈɔːdɪtə/", vi:"kiểm toán viên", ex:"The auditor pointed out several accounting errors.", topic:"Finance" },
  { w:"mortgage", p:"n/v", ipa:"/ˈmɔːɡɪdʒ/", vi:"khoản thế chấp; thế chấp", ex:"They took out a mortgage to open their new office.", topic:"Finance" },
  { w:"liquidate", p:"v", ipa:"/ˈlɪkwɪdeɪt/", vi:"thanh lý tài sản, giải thể", ex:"The company decided to liquidate its excess inventory.", topic:"Finance" },
  { w:"reconcile", p:"v", ipa:"/ˈrekənsaɪl/", vi:"đối chiếu (tài khoản)", ex:"You need to reconcile the bank statement with your receipts.", topic:"Finance" },
  { w:"deficit", p:"n", ipa:"/ˈdefɪsɪt/", vi:"sự thâm hụt, thâm hụt tài chính", ex:"The budget deficit has widened significantly this year.", topic:"Finance" },
  { w:"fluctuate", p:"v", ipa:"/ˈflʌktʃueɪt/", vi:"dao động, thay đổi thất thường", ex:"Stock prices fluctuate wildly throughout the day.", topic:"Finance" },
  { w:"exempt", p:"adj/v", ipa:"/ɪɡˈzempt/", vi:"được miễn; miễn trừ", ex:"Certain charities are exempt from paying sales tax.", topic:"Finance" },

  // --- HR & Management / Nhân sự & Quản trị nâng cao ---
  { w:"delegate", p:"v/n", ipa:"/ˈdelɪɡət/", vi:"ủy thác, giao phó; đại biểu", ex:"Managers should delegate tasks to sub-teams.", topic:"HR" },
  { w:"subordinate", p:"n", ipa:"/səˈbɔːdɪnət/", vi:"cấp dưới", ex:"She encourages subordinates to voice their ideas.", topic:"HR" },
  { w:"evaluation", p:"n", ipa:"/ɪˌvæljuˈeɪʃn/", vi:"sự đánh giá", ex:"My supervisor gave me a positive annual evaluation.", topic:"HR" },
  { w:"compensation", p:"n", ipa:"/ˌkɒmpenˈseɪʃn/", vi:"lương bổng đãi ngộ, tiền đền bù", ex:"The job compensation package includes life insurance.", topic:"HR" },
  { w:"assessment", p:"n", ipa:"/əˈsesmənt/", vi:"sự đánh giá, thẩm định", ex:"Our department completed a thorough risk assessment.", topic:"HR" },

  // --- Legal & Contracts / Pháp lý & Hợp đồng nâng cao ---
  { w:"solicitor", p:"n", ipa:"/səˈlɪsɪtə/", vi:"luật sư, cố vấn pháp lý", ex:"The company's solicitor prepared the draft agreement.", topic:"Contracts" },
  { w:"stringent", p:"adj", ipa:"/ˈstrɪndʒənt/", vi:"nghiêm ngặt, khắt khe", ex:"The safety checks in the laboratory are very stringent.", topic:"Contracts" },
  { w:"unanimous", p:"adj", ipa:"/juːˈnænɪməs/", vi:"nhất trí, đồng lòng", ex:"The proposal was passed by a unanimous vote.", topic:"Contracts" },
  { w:"lease", p:"n/v", ipa:"/liːs/", vi:"hợp đồng cho thuê; cho thuê", ex:"The landlord signed a three-year commercial lease.", topic:"Contracts" },

  // --- Quality & Production / Chất lượng & Sản xuất ---
  { w:"discrepancy", p:"n", ipa:"/dɪsˈkrepənsi/", vi:"sự khác biệt, mâu thuẫn số liệu", ex:"The manager noticed a discrepancy in the budget report.", topic:"Manufacturing" },
  { w:"precaution", p:"n", ipa:"/prɪˈkɔːʃn/", vi:"sự phòng ngừa, đề phòng", ex:"Wearing safety gear is a standard precaution.", topic:"Manufacturing" },
];
