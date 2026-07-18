// ============================================================
//  KIẾN THỨC TOEIC — theo khung sách "TOEIC Preparation LC+RC"
//  (Park Hye Young, Jeon Ji Won — NXB Tổng Hợp TP.HCM / Nhân Trí Việt)
//  Cấu trúc bám theo mục lục Vol 1 + Vol 2: LC Units 1-12 (Part 1-4),
//  RC Units 1-12 (ngữ pháp Part 5-6) + kỹ năng Part 7.
//  Nội dung tiếng Việt do AI soạn/diễn giải theo khung sách
//  (OCR sách gốc chỉ lấy được một phần).
//  Schema: { id, section, title, summary, keyPoints[], examples[{en,vi}], tips[] }
// ============================================================

export const PREP = [
  // ==================== LISTENING ====================
  {
    id: "lc-p1-people",
    section: "Listening — Part 1: Photo Descriptions",
    title: "Unit 1: Ảnh người (Photos of People)",
    summary: "Part 1 có 6 câu: nhìn ảnh, nghe 4 câu mô tả (chỉ nghe 1 lần, không in trong đề), chọn câu đúng nhất. Với ảnh NGƯỜI, 4 câu thường có cùng chủ ngữ nhưng khác ĐỘNG TỪ — vì vậy phải tập trung nghe động từ (thường ở thì hiện tại tiếp diễn).",
    keyPoints: [
      "Ảnh 1 người: chủ ngữ giống nhau, khác nhau ở ĐỘNG TỪ → nghe kỹ V-ing.",
      "Ảnh nhiều người: phân biệt hành động CHUNG (đều đang...) và hành động của TỪNG người; chú ý chủ ngữ One of the..., Some..., They...",
      "Thì hay dùng: hiện tại tiếp diễn (is/are + V-ing) cho hành động; hiện tại hoàn thành bị động (has been + V3) cho trạng thái.",
      "Trước khi nghe: nhìn ảnh, ĐOÁN TRƯỚC các động từ + danh từ có thể xuất hiện.",
      "Bẫy thường gặp: động từ đúng nhưng tân ngữ sai (đối tượng không có trong ảnh); trạng thái nhầm với hành động (wearing = đang mặc trên người ✓ vs putting on = hành động mặc vào)."
    ],
    examples: [
      { en: "A woman is watering a plant.", vi: "Một phụ nữ đang tưới cây. (đúng nếu ảnh chụp người đang tưới cây)" },
      { en: "The man is wearing a jacket.", vi: "Người đàn ông đang mặc áo khoác (trạng thái — áo ĐÃ trên người)." },
      { en: "The man is putting on a jacket.", vi: "Người đàn ông đang mặc áo vào (hành động — chỉ đúng khi ảnh chụp đúng lúc đang xỏ áo)." }
    ],
    tips: [
      "Nghe hết 4 câu rồi mới chốt — đừng chọn vội khi mới nghe 2 câu đầu.",
      "Từ nghe giống nhau dễ bẫy: working/walking, coffee/copy, track/truck.",
      "Câu chứa danh từ KHÔNG có trong ảnh → loại ngay."
    ]
  },
  {
    id: "lc-p1-objects",
    section: "Listening — Part 1: Photo Descriptions",
    title: "Unit 2: Ảnh đồ vật & quang cảnh (Objects & Scenes)",
    summary: "Với ảnh không có người, câu mô tả tập trung vào VỊ TRÍ và TRẠNG THÁI của đồ vật. Cấu trúc bị động xuất hiện nhiều: is/are + V3 (trạng thái), has/have been + V3 (đã được làm gì), is/are being + V3 (ĐANG được làm — thường cần người trong ảnh!).",
    keyPoints: [
      "Cấu trúc vị trí: There is/are..., ... is located/situated..., giới từ vị trí (on, in, next to, in front of, behind, along, against).",
      "Bị động trạng thái: The chairs are arranged in a circle. (ghế ĐƯỢC xếp thành vòng — không cần người)",
      "is/are being + V3 (đang ĐƯỢC làm) → thường phải có NGƯỜI đang thực hiện trong ảnh. Ảnh chỉ có đồ vật mà nghe 'is being repaired' → thường là đáp án SAI.",
      "Động từ trạng thái hay gặp: be displayed (được trưng bày), be stacked/piled (được chất đống), be lined up (xếp thành hàng), be parked (đậu), hang (treo), lead to (dẫn đến), overlook (nhìn ra)."
    ],
    examples: [
      { en: "Some merchandise is on display.", vi: "Một số hàng hóa đang được trưng bày." },
      { en: "Cars are parked along the street.", vi: "Ô tô đậu dọc con phố." },
      { en: "A bridge is being built. (✗ nếu ảnh không có công nhân)", vi: "Cây cầu đang được xây — sai nếu trong ảnh không ai đang thi công." }
    ],
    tips: [
      "Nghe 'being' trong ảnh không người → 90% là bẫy.",
      "Học từ vựng vị trí + trạng thái theo cụm (be stacked, be lined up...) — Part 1 lặp lại rất nhiều."
    ]
  },
  {
    id: "lc-p2-wh1",
    section: "Listening — Part 2: Question–Response",
    title: "Unit 3-4: Câu hỏi Wh- (Information Questions)",
    summary: "Part 2 có 25 câu: nghe 1 câu hỏi + 3 câu đáp, chọn câu đáp phù hợp. Với câu hỏi Wh- (Who/What/When/Where/Why/How), nguyên tắc vàng: NGHE ĐƯỢC TỪ ĐỂ HỎI là loại được phần lớn đáp án sai — mỗi từ để hỏi đòi loại thông tin riêng.",
    keyPoints: [
      "Who → người/chức danh/phòng ban (Mr. Kim, the manager, someone from HR).",
      "When → thời gian (at 3 P.M., next Monday, not until Friday). Where → địa điểm (in Room 2, on the third floor, at headquarters).",
      "Why → lý do (Because..., To + V mục đích, Due to...). Why don't you...? lại là LỜI ĐỀ NGHỊ, không phải hỏi lý do!",
      "What/Which + danh từ → nghe cả cụm: What time (giờ), What kind of (loại), Which floor (tầng nào).",
      "How + adj/adv: How long (bao lâu), How often (bao lâu 1 lần), How many/much (số lượng/giá), How do I get to (đường đi).",
      "Câu hỏi Wh- KHÔNG trả lời bằng Yes/No → nghe Yes/No ở đầu đáp án là loại ngay."
    ],
    examples: [
      { en: "When did you buy your new phone? — Last week when it was on sale.", vi: "Bạn mua điện thoại mới khi nào? — Tuần trước lúc đang giảm giá. (When → thời gian)" },
      { en: "Where is Keiko's office? — It's on the second floor.", vi: "Văn phòng của Keiko ở đâu? — Ở tầng hai. (Where → vị trí)" },
      { en: "Who's going to lead the negotiations? — John Sanchez is.", vi: "Ai sẽ dẫn dắt buổi đàm phán? — John Sanchez. (Who → người)" }
    ],
    tips: [
      "Bẫy âm giống: đáp án lặp lại từ trong câu hỏi hoặc từ phát âm giống (copy/coffee) thường SAI.",
      "Câu trả lời gián tiếp ngày càng nhiều: 'When...?' — 'Check the schedule.' (xem lịch đi) vẫn là đáp án đúng.",
      "Tập trung 3 từ đầu câu hỏi — chúng quyết định dạng câu hỏi."
    ]
  },
  {
    id: "lc-p2-yesno",
    section: "Listening — Part 2: Question–Response",
    title: "Unit 5-6: Câu hỏi Yes/No & các dạng khác",
    summary: "Gồm câu hỏi Yes/No (Do you...? Have you...? Is there...?), câu hỏi đuôi (…, isn't it?), câu hỏi lựa chọn (A or B?), câu đề nghị/yêu cầu (Could you...? Why don't we...?) và câu trần thuật. Mỗi dạng có kiểu đáp hợp lý riêng.",
    keyPoints: [
      "Yes/No question: có thể đáp Yes/No nhưng cũng nhiều câu đáp KHÔNG có Yes/No mà vẫn đúng (I think so / Not yet / Ask Mr. Lee).",
      "Câu hỏi đuôi (tag question): bản chất là xác nhận thông tin — trả lời như câu Yes/No thường.",
      "Câu hỏi lựa chọn (A or B?): KHÔNG đáp Yes/No! Đáp: chọn A, chọn B, cả hai (Either is fine / Both), hoặc cái khác (Neither, actually...).",
      "Câu đề nghị (Would you like...? / Why don't we...? / How about...?): đáp bằng đồng ý (That sounds great / Sure) hoặc từ chối khéo (I'd love to, but...).",
      "Câu trần thuật (The printer is broken again.): đáp bằng phản hồi tự nhiên (I'll call the technician.)."
    ],
    examples: [
      { en: "Do you know where the meeting is? — It's in Room 305.", vi: "Không cần nói Yes — trả lời thẳng thông tin vẫn đúng." },
      { en: "Would you like coffee or tea? — Either is fine.", vi: "Cà phê hay trà? — Loại nào cũng được. (câu hỏi lựa chọn → không Yes/No)" },
      { en: "That was a short movie, wasn't it? — Yes, it was only 80 minutes.", vi: "Câu hỏi đuôi → xác nhận + thông tin thêm." }
    ],
    tips: [
      "Nghe 'or' giữa câu → câu lựa chọn → loại mọi đáp án Yes/No.",
      "'I don't know / I haven't decided / Let me check' là đáp án đúng của rất nhiều dạng câu hỏi."
    ]
  },
  {
    id: "lc-p3",
    section: "Listening — Part 3: Conversations",
    title: "Unit 7-9: Hội thoại (Business / Daily / Public Places)",
    summary: "Part 3 có 39 câu (13 đoạn hội thoại × 3 câu hỏi). Câu hỏi IN SẴN trong đề → chiến thuật cốt lõi: ĐỌC TRƯỚC 3 câu hỏi trước khi audio chạy, xác định cần nghe thông tin gì. Chủ đề: công việc (họp, dự án, tuyển dụng), đời sống (mua sắm, sửa chữa), nơi công cộng (ngân hàng, bưu điện, sân bay).",
    keyPoints: [
      "Bộ 3 câu hỏi thường theo trật tự: câu 1 = chủ đề/bối cảnh (Where/Who/What is the conversation about) → nghe phần ĐẦU; câu 2 = chi tiết (vấn đề, thời gian, lý do) → nghe phần GIỮA; câu 3 = hành động tiếp theo (What will the man do next?) → nghe phần CUỐI.",
      "Câu hỏi ý định (What does the woman mean when she says...?): nhìn ngữ cảnh câu TRƯỚC và SAU câu trích dẫn.",
      "Câu hỏi kèm bảng biểu (Look at the graphic): đọc bảng trước, nghe thông tin KHÔNG có trong đáp án để đối chiếu.",
      "Từ vựng theo bối cảnh rất quan trọng: học theo cụm chủ đề (meeting, schedule, invoice, shipment, reservation...)."
    ],
    examples: [
      { en: "Where most likely are the speakers? — At a bank.", vi: "Suy từ từ khóa: account, deposit, teller → ngân hàng (không ai nói thẳng 'we are at a bank')." },
      { en: "What will the woman probably do next? — Call a client.", vi: "Nghe câu cuối: 'I'll give Mr. Chen a call right away.'" }
    ],
    tips: [
      "Tranh thủ đọc trước câu hỏi trong lúc audio đọc Directions và giữa các đoạn.",
      "Trả lời NGAY khi nghe được, đừng đợi hết đoạn — audio không chờ bạn.",
      "Nam hỏi — nữ đáp: chú ý câu hỏi hỏi về NGƯỜI NÀO (the man / the woman) để không lấy nhầm thông tin."
    ]
  },
  {
    id: "lc-p4",
    section: "Listening — Part 4: Talks",
    title: "Unit 10-12: Bài nói (Telephone / Announcements / Ads / Speeches)",
    summary: "Part 4 có 30 câu (10 bài nói 1 người × 3 câu hỏi). Các dạng bài kinh điển: tin nhắn thoại (telephone message), thông báo nơi công cộng (announcement), quảng cáo (advertisement/radio), bài phát biểu & thông báo nội bộ (speech, excerpt from a meeting). Mỗi dạng có CẤU TRÚC CỐ ĐỊNH — thuộc cấu trúc là đoán được thông tin nằm ở đâu.",
    keyPoints: [
      "Telephone message: người gọi là ai → gọi cho ai → mục đích → chi tiết → yêu cầu gọi lại/hành động. ('Hi, this is X from Y. I'm calling about...')",
      "Announcement: nơi phát thông báo (sân bay, cửa hàng, tòa nhà) → nội dung chính (thay đổi giờ, khuyến mãi, sự cố) → hướng dẫn hành động.",
      "Advertisement: sản phẩm/dịch vụ gì → điểm nổi bật → ưu đãi (discount, free trial) → cách mua/liên hệ.",
      "Speech/meeting excerpt: người nói là ai, dịp gì (chào mừng nhân viên mới, tổng kết, trao giải) → nội dung chính → bước tiếp theo.",
      "Câu hỏi suy luận ý người nói (Why does the speaker say...?) và câu hỏi bảng biểu xuất hiện như Part 3."
    ],
    examples: [
      { en: "What is the purpose of the call? — To reschedule an appointment.", vi: "Nghe ngay sau 'I'm calling to/about...' — mục đích luôn nằm đầu tin nhắn." },
      { en: "What are listeners encouraged to do? — Visit a Web site.", vi: "Hành động khuyến khích thường nằm CUỐI bài: 'For more information, visit...'" }
    ],
    tips: [
      "'This is X from Y' → câu hỏi Who is the speaker / Where does the speaker work lấy ngay từ đây.",
      "Số liệu (giờ, giá, ngày) thường được nhắc 2 lần hoặc kèm mốc đối chiếu — ghi chú nhanh khi nghe.",
      "Cuối bài luôn có 'call to action' — 90% có 1 câu hỏi về nó."
    ]
  },

  // ==================== READING — NGỮ PHÁP (Part 5-6) ====================
  {
    id: "rc-u1",
    section: "Reading — Ngữ pháp Part 5·6",
    title: "Unit 1: Danh từ & Đại từ (Nouns & Pronouns)",
    summary: "Nền tảng câu: danh từ làm chủ ngữ/tân ngữ, đại từ thay thế danh từ. Part 5 hỏi nhiều nhất: chọn đúng DẠNG (danh từ hay từ loại khác) theo vị trí, và chọn đúng đại từ (chủ ngữ/tân ngữ/sở hữu/phản thân).",
    keyPoints: [
      "Vị trí cần danh từ: sau mạo từ (a/an/the), sau tính từ sở hữu (my/your/its...), sau tính từ, sau giới từ, làm chủ ngữ/tân ngữ.",
      "Đuôi danh từ hay gặp: -tion/-sion (completion), -ment (agreement), -ness (awareness), -ity (productivity), -ance/-ence (attendance), -al (approval), -er/-or/-ee (chỉ người).",
      "Phân biệt danh từ chỉ NGƯỜI vs VẬT/VIỆC: applicant (người nộp đơn) vs application (đơn); attendee vs attendance; supervisor vs supervision.",
      "Đại từ: chủ ngữ (he) — tân ngữ (him) — tính từ sở hữu (his + N) — đại từ sở hữu (his đứng một mình) — phản thân (himself: khi chủ ngữ = tân ngữ, hoặc nhấn mạnh 'tự mình').",
      "Đại từ bất định: one/ones (thay danh từ đếm được), those who (những người mà), each other (lẫn nhau), another/other/the other."
    ],
    examples: [
      { en: "Expect YOUR next electricity bill to be lower. (your + N)", vi: "Trước cụm danh từ → tính từ sở hữu your, không dùng yours." },
      { en: "Ms. Budrow was promoted after HER group recorded the highest revenue.", vi: "her + group (danh từ) — tính từ sở hữu." },
      { en: "Please complete the form YOURSELF.", vi: "Phản thân nhấn mạnh 'tự mình làm'." }
    ],
    tips: [
      "Trống đứng ngay trước danh từ, sau the/a/tính từ → điền DANH TỪ (hoặc tính từ nếu sau đó còn danh từ nữa).",
      "Đáp án có cả -er (người) và -tion (việc) → dịch nhanh nghĩa câu xem cần người hay việc."
    ]
  },
  {
    id: "rc-u2",
    section: "Reading — Ngữ pháp Part 5·6",
    title: "Unit 2: Tính từ & Trạng từ (Adjectives & Adverbs)",
    summary: "Dạng câu 'word form' chiếm tỷ trọng lớn nhất Part 5. Quy tắc vị trí: TÍNH TỪ đứng trước danh từ hoặc sau động từ nối (be, seem, remain); TRẠNG TỪ bổ nghĩa động từ, tính từ, trạng từ khác, hoặc cả câu.",
    keyPoints: [
      "a/an/the + (trạng từ) + TÍNH TỪ + DANH TỪ: a very impressive presentation.",
      "be/seem/become/remain + TÍNH TỪ: The results seem promising.",
      "Động từ thường + TRẠNG TỪ: worked diligently; TRẠNG TỪ + V3 trong bị động: is clearly organized, when consistently applied.",
      "Trạng từ đứng giữa trợ động từ và động từ chính: will significantly increase, has recently been promoted.",
      "So sánh: hơn (-er/more + than), nhất (the -est/most), ngang bằng (as ... as). even/much/far + so sánh hơn để nhấn mạnh (an even greater number).",
      "Tính từ đuôi -ing (gây cảm xúc: interesting) vs -ed (bị tác động: interested)."
    ],
    examples: [
      { en: "The factory is CONVENIENTLY located near the station.", vi: "Trạng từ bổ nghĩa cho located (V3)." },
      { en: "a CREATIVE revision of existing processes", vi: "a + tính từ + danh từ." },
      { en: "The road closures affected an even GREATER number.", vi: "even + so sánh hơn." }
    ],
    tips: [
      "Nhìn TỪ ĐỨNG SAU trống: sau trống là danh từ → tính từ; câu đã đủ thành phần → trạng từ.",
      "4 đáp án cùng gốc từ (clear/clearing/clearest/clearly) → 100% là câu hỏi vị trí từ loại, giải bằng cấu trúc, không cần dịch."
    ]
  },
  {
    id: "rc-u3",
    section: "Reading — Ngữ pháp Part 5·6",
    title: "Unit 3: Thì động từ (Verb Tenses)",
    summary: "Chọn thì dựa vào TRẠNG NGỮ THỜI GIAN trong câu — dấu hiệu rõ ràng, không cần suy diễn. Part 5 chủ yếu kiểm tra: quá khứ đơn, hiện tại hoàn thành, tương lai, và sự hòa hợp thì giữa các mệnh đề.",
    keyPoints: [
      "yesterday, last week, ... ago, in 2020 → QUÁ KHỨ ĐƠN.",
      "since + mốc, for + khoảng, over the past..., already, recently, so far → HIỆN TẠI HOÀN THÀNH (has/have + V3).",
      "tomorrow, next month, soon, shortly → TƯƠNG LAI (will V / is going to V / tương lai tiếp diễn will be V-ing).",
      "currently, now, at the moment → HIỆN TẠI TIẾP DIỄN (is/are V-ing).",
      "Mệnh đề thời gian (when/before/after/as soon as + hiện tại) đi với mệnh đề chính tương lai: When he ARRIVES, we WILL start.",
      "by the time + quá khứ → quá khứ hoàn thành; by + mốc tương lai → tương lai hoàn thành (will have + V3)."
    ],
    examples: [
      { en: "The shipment ARRIVED yesterday.", vi: "yesterday → quá khứ đơn." },
      { en: "She HAS WORKED here since 2015.", vi: "since → hiện tại hoàn thành." },
      { en: "Ms. Sanchez has RECENTLY been promoted.", vi: "recently + hoàn thành; trạng từ chen giữa has và V3." }
    ],
    tips: [
      "Gạch chân trạng từ thời gian TRƯỚC khi nhìn đáp án — nó quyết định 90% câu thì.",
      "Không thấy trạng từ thời gian → nhìn thì của mệnh đề còn lại để hòa hợp."
    ]
  },
  {
    id: "rc-u4",
    section: "Reading — Ngữ pháp Part 5·6",
    title: "Unit 4: Chủ động & Bị động (Active & Passive Voice)",
    summary: "Bị động = be + V3, dùng khi chủ ngữ NHẬN hành động. Cách giải nhanh trong Part 5: xét quan hệ chủ ngữ–động từ (chủ ngữ tự làm được không?) và xét động từ có TÂN NGỮ theo sau hay không.",
    keyPoints: [
      "Sau trống có TÂN NGỮ (danh từ) → thường là CHỦ ĐỘNG; không có tân ngữ + nghĩa 'bị/được' → BỊ ĐỘNG.",
      "Chủ ngữ là vật + động từ cần người thực hiện → bị động: The report WAS SUBMITTED on time.",
      "Bị động + by + người thực hiện; nhiều bị động đi giới từ riêng: be interested IN, be satisfied WITH, be known FOR, be involved IN.",
      "Bị động các thì: is being + V3 (đang được), has been + V3 (đã được), will be + V3 (sẽ được).",
      "Động từ KHÔNG có bị động: xảy ra (happen, occur, take place), tồn tại (exist), remain, arrive."
    ],
    examples: [
      { en: "The Copley Corporation is frequently RECOGNIZED as a global company.", vi: "Chủ ngữ được công nhận → bị động be + V3." },
      { en: "Glass containers must BE safely SECURED during transport.", vi: "must be + (adv) + V3 — bị động với động từ khuyết thiếu." }
    ],
    tips: [
      "Đáp án có cả arranged (V3) và arranging (V-ing): sau trống có tân ngữ → V-ing/chủ động, không có → V3/bị động.",
      "take place/occur không bao giờ ở dạng bị động — gặp 'was taken place' là sai."
    ]
  },
  {
    id: "rc-u5",
    section: "Reading — Ngữ pháp Part 5·6",
    title: "Unit 5: To-V (To-infinitives)",
    summary: "To + V nguyên mẫu dùng làm: tân ngữ sau một số động từ nhất định, bổ nghĩa chỉ MỤC ĐÍCH, bổ nghĩa cho danh từ/tính từ. Part 5 kiểm tra nhiều nhất là nhóm động từ + to V và cấu trúc chỉ mục đích.",
    keyPoints: [
      "Động từ + to V: want, would like, plan, decide, hope, expect, agree, offer, promise, refuse, fail, manage, intend, aim.",
      "Động từ + tân ngữ + to V: ask/require/encourage/invite/allow/enable/remind/advise + O + to V.",
      "TO V chỉ mục đích (= in order to): Contact us today TO SCHEDULE an evaluation.",
      "Tính từ + to V: be ready to launch, be pleased to announce, be proud to introduce, be eager to join.",
      "Danh từ + to V: opportunity to grow, ability to connect, decision to expand, effort to reduce."
    ],
    examples: [
      { en: "Mr. Kim would like TO ARRANGE a meeting.", vi: "would like + to V (không dùng V-ing)." },
      { en: "The program is ready TO LAUNCH by November 1.", vi: "tính từ ready + to V." }
    ],
    tips: [
      "Đầu câu 'To receive..., please...' = 'Để nhận..., hãy...' — to V mục đích rất hay mở đầu câu mệnh lệnh trong TOEIC.",
      "Học thuộc nhóm động từ + to V vs + V-ing — đề chỉ xoay quanh các nhóm cố định này."
    ]
  },
  {
    id: "rc-u6",
    section: "Reading — Ngữ pháp Part 5·6",
    title: "Unit 6: Danh động từ (Gerunds)",
    summary: "V-ing dùng như danh từ: làm chủ ngữ, tân ngữ của động từ, tân ngữ của GIỚI TỪ. Điểm khác danh từ thường: danh động từ vẫn mang được tân ngữ phía sau — dấu hiệu chọn V-ing thay vì danh từ.",
    keyPoints: [
      "Động từ + V-ing: enjoy, finish, consider, suggest, recommend, avoid, postpone, delay, mind, include, involve.",
      "Sau GIỚI TỪ luôn là V-ing: after evaluating..., before beginning..., by attending..., without notifying...",
      "Cụm cố định: look forward to + V-ing, be committed/dedicated to + V-ing, be responsible for + V-ing, have difficulty + V-ing, spend time + V-ing.",
      "V-ing vs danh từ cùng gốc: sau trống CÓ TÂN NGỮ → V-ing (After EVALUATING the neighborhood); KHÔNG có tân ngữ, có mạo từ → danh từ (After the EVALUATION of...)."
    ],
    examples: [
      { en: "After EVALUATING the neighborhood, Mr. Park decided...", vi: "Sau giới từ after + có tân ngữ 'the neighborhood' → V-ing." },
      { en: "You must close the application before BEGINNING the installation.", vi: "before + V-ing." },
      { en: "We look forward to WELCOMING your group.", vi: "look forward to + V-ing ('to' ở đây là giới từ!)." }
    ],
    tips: [
      "look forward to / be committed to / object to: 'to' là GIỚI TỪ → V-ing, không phải to-V — bẫy kinh điển.",
      "Trống sau giới từ + có danh từ ngay sau trống → chọn V-ing chứ không phải danh từ."
    ]
  },
  {
    id: "rc-u7",
    section: "Reading — Ngữ pháp Part 5·6",
    title: "Unit 7: Phân từ (Participles)",
    summary: "V-ing (hiện tại phân từ — nghĩa chủ động 'đang/gây ra') và V3 (quá khứ phân từ — nghĩa bị động 'được/bị') dùng làm tính từ hoặc rút gọn mệnh đề. Giải bằng quan hệ nghĩa với danh từ được bổ nghĩa.",
    keyPoints: [
      "Trước danh từ: danh từ TỰ thực hiện → V-ing (a growing company); danh từ NHẬN hành động → V3 (a revised schedule, existing processes).",
      "Sau danh từ (rút gọn mệnh đề quan hệ): the manager LEADING the project (= who leads), payments MADE after 4 P.M. (= that are made).",
      "Rút gọn mệnh đề trạng ngữ: When (it is) consistently APPLIED, the cream... — cùng chủ ngữ thì lược bỏ S + be.",
      "Cặp cảm xúc -ing/-ed: interesting/interested, exciting/excited, satisfying/satisfied — vật gây cảm xúc dùng -ing, người mang cảm xúc dùng -ed."
    ],
    examples: [
      { en: "Payments MADE after 4:00 P.M. will be processed the next day.", vi: "payments được thực hiện → V3 rút gọn của 'that are made'." },
      { en: "a rewarding experience / a detail-oriented person", vi: "Phân từ ghép làm tính từ — học theo cụm." }
    ],
    tips: [
      "Trống sau danh từ + phía sau có tân ngữ → V-ing; không tân ngữ → V3.",
      "attached/enclosed đầu câu: 'Attached is the report.' — đảo ngữ quen thuộc trong email TOEIC."
    ]
  },
  {
    id: "rc-u8",
    section: "Reading — Ngữ pháp Part 5·6",
    title: "Unit 8: Liên từ (Conjunctions)",
    summary: "Liên từ nối từ-với-từ hoặc mệnh đề-với-mệnh đề. Phải phân biệt: liên từ kết hợp (and/but/or), liên từ tương quan (both...and, either...or), liên từ phụ thuộc (because, although, if, unless, while, before, after, once, now that) — và phân biệt LIÊN TỪ với GIỚI TỪ/TRẠNG TỪ cùng nghĩa.",
    keyPoints: [
      "Liên từ + MỆNH ĐỀ (S+V); giới từ + DANH TỪ: because + mệnh đề vs because of + N; although + mệnh đề vs despite/in spite of + N.",
      "Trạng từ liên kết (however, therefore, moreover, in addition, as a result) KHÔNG nối được 2 mệnh đề trong 1 câu — đứng đầu câu mới, sau dấu chấm/chấm phẩy.",
      "Cặp tương quan: both A and B, either A or B, neither A nor B, not only A but also B, A as well as B — A và B phải song song về dạng.",
      "Nghĩa các liên từ phụ thuộc hay thi: unless (trừ khi = if not), once (một khi), now that (vì giờ đây), while (trong khi/mặc dù), whereas (trong khi đó), so that (để mà), in case (phòng khi).",
      "Nối 2 tính từ/động từ song song: inexpensive AS WELL AS beautifully crafted."
    ],
    examples: [
      { en: "NOW THAT Peura has located an office, it will begin negotiating.", vi: "Now that + mệnh đề = vì giờ đã..." },
      { en: "Attendees will share rooms UNLESS they request a single room.", vi: "unless = trừ khi." },
      { en: "Small issues can be fixed BEFORE they become big ones.", vi: "before nối 2 mệnh đề." }
    ],
    tips: [
      "Đếm mệnh đề: 2 cụm S+V → cần LIÊN TỪ; sau trống chỉ có danh từ → cần GIỚI TỪ. Đây là bước đầu tiên của mọi câu dạng này.",
      "despite/because of/due to + danh từ — thấy mệnh đề theo sau là sai ngay."
    ]
  },
  {
    id: "rc-u9",
    section: "Reading — Ngữ pháp Part 5·6",
    title: "Unit 9: Giới từ (Prepositions)",
    summary: "Giới từ chỉ thời gian, nơi chốn, và các cụm giới từ cố định. Part 5 thường cho 4 giới từ khác nhau — giải bằng nghĩa + collocation (cụm từ đi cặp cố định).",
    keyPoints: [
      "Thời gian: at + giờ, on + ngày/thứ, in + tháng/năm; for + khoảng (for three years), during + danh từ sự kiện (during the meeting), by + hạn chót (by Friday = trước), until + kéo dài đến, within + trong vòng, between A and B.",
      "Nơi chốn/phương hướng: at (điểm), in (trong), on (bề mặt), through (xuyên qua: view through the window), throughout (khắp), along (dọc theo), across from (đối diện), near (gần).",
      "Cụm cố định hay thi: instead of, in addition to, according to, regardless of, in response to, on behalf of, as of (kể từ), prior to (= before), due to.",
      "Động từ/danh từ/tính từ + giới từ ruột: rely on, comply with, contribute to, participate in, register for, be eligible for, be familiar with, an increase in, access to."
    ],
    examples: [
      { en: "a lovely view of the ocean THROUGH the windows", vi: "through = nhìn xuyên qua cửa sổ." },
      { en: "The average precipitation FOR the past three years...", vi: "for + khoảng thời gian." },
      { en: "Payments made AFTER 4:00 P.M.", vi: "after + mốc giờ." }
    ],
    tips: [
      "by vs until: by = hoàn thành TRƯỚC hạn (submit by Friday), until = trạng thái KÉO DÀI đến (open until 9).",
      "during vs for: during + tên sự kiện/danh từ, for + con số khoảng thời gian.",
      "Học collocation theo cặp — Part 5 lặp lại các cặp quen thuộc rất thường xuyên."
    ]
  },
  {
    id: "rc-u10",
    section: "Reading — Ngữ pháp Part 5·6",
    title: "Unit 10: Mệnh đề quan hệ (Relative Pronouns & Adverbs)",
    summary: "Mệnh đề quan hệ bổ nghĩa danh từ đứng trước. Chọn đại từ quan hệ theo: danh từ trước là NGƯỜI hay VẬT, và nó đóng vai trò gì trong mệnh đề (chủ ngữ/tân ngữ/sở hữu).",
    keyPoints: [
      "Người + làm chủ ngữ → who/that; người + làm tân ngữ → whom/that; vật → which/that; sở hữu → whose + danh từ.",
      "Trạng từ quan hệ: where (= in which, nơi), when (thời điểm), why (lý do sau 'the reason').",
      "Sau giới từ chỉ dùng which/whom: the project ON WHICH we worked, the client TO WHOM I spoke.",
      "Rút gọn: bỏ đại từ quan hệ làm tân ngữ (the product [that] we launched); chủ động → V-ing, bị động → V3 (xem Unit 7).",
      "Lượng từ + of which/whom: most of WHICH, many of WHOM — nối 2 mệnh đề, hay thi ở câu khó."
    ],
    examples: [
      { en: "engineers WHO have advanced skills", vi: "người + chủ ngữ → who." },
      { en: "the manager WHOSE office is on floor 3", vi: "sở hữu → whose + office." },
      { en: "equipment, much of WHICH did not exist before", vi: "lượng từ + of which — thay cho 'much of the equipment'." }
    ],
    tips: [
      "that không dùng sau dấu phẩy và sau giới từ — gặp ', that' là loại.",
      "whose + danh từ: kiểm tra bằng cách dịch 'mà ... của nó/của người đó'."
    ]
  },
  {
    id: "rc-u11",
    section: "Reading — Ngữ pháp Part 5·6",
    title: "Unit 11: Câu điều kiện & Giả định (Conditionals & Subjunctive)",
    summary: "Câu điều kiện if và thể giả định (subjunctive) sau các động từ/tính từ yêu cầu-đề xuất. TOEIC thi chủ yếu loại 1 (có thật tương lai), đảo ngữ should, và cấu trúc suggest/require + (that) + S + V nguyên mẫu.",
    keyPoints: [
      "Loại 1: If + hiện tại, will + V — If you are not satisfied, we WILL refund your order.",
      "Loại 2 (giả định hiện tại): If + quá khứ, would + V; Loại 3 (giả định quá khứ): If + had V3, would have V3.",
      "Đảo ngữ trang trọng: Should you have any questions, ... (= If you should have...); Had we known, ... (= If we had known...).",
      "Thể giả định: suggest/recommend/require/request/insist/propose + (that) + S + (should) + V NGUYÊN MẪU: We require that every employee ATTEND the training. (không chia -s)",
      "Tính từ giả định: It is important/essential/necessary that + S + V nguyên mẫu.",
      "unless = if ... not; in case = phòng khi; provided that = miễn là; otherwise = nếu không thì."
    ],
    examples: [
      { en: "Satinesse will refund your order IF you are not satisfied.", vi: "Điều kiện loại 1 — quảng cáo/bảo hành." },
      { en: "It is important that policies BE established explicitly.", vi: "important that + V nguyên mẫu (be, không phải is/are)." },
      { en: "SHOULD you need assistance, please call our hotline.", vi: "Đảo ngữ should — văn phong thư tín trang trọng." }
    ],
    tips: [
      "Sau suggest/require/recommend + that: đáp án đúng thường là V NGUYÊN MẪU 'trơ trụi' — trông có vẻ sai ngữ pháp nhưng lại đúng.",
      "Thấy 'Should + S + V' mở đầu thư → nhận diện ngay đảo ngữ điều kiện, nghĩa là 'Nếu...'."
    ]
  },
  {
    id: "rc-u12",
    section: "Reading — Ngữ pháp Part 5·6",
    title: "Unit 12: Hòa hợp chủ ngữ – động từ (Agreement)",
    summary: "Động từ phải chia theo chủ ngữ THẬT của nó — kỹ năng cốt lõi là gạch bỏ các cụm chen giữa (giới từ, mệnh đề quan hệ) để tìm đúng chủ ngữ.",
    keyPoints: [
      "Chủ ngữ số ít + V-s; số nhiều + V nguyên. Cụm 'of + danh từ' chen giữa KHÔNG quyết định: The list OF items IS long.",
      "each/every/either/neither + danh từ số ít → V số ít; both/several/many/few → V số nhiều.",
      "Danh từ không đếm được (information, equipment, furniture, advice, luggage) → luôn số ít, không thêm -s.",
      "one of + danh từ SỐ NHIỀU + V SỐ ÍT: One of the printers IS broken.",
      "a number of + N số nhiều → V số nhiều; the number of + N số nhiều → V số ít.",
      "V-ing/To-V làm chủ ngữ → V số ít: Improving efficiency REQUIRES investment."
    ],
    examples: [
      { en: "Proper maintenance of your heating equipment ENSURES that...", vi: "Chủ ngữ thật là 'maintenance' (số ít) — bỏ qua 'of your heating equipment'." },
      { en: "Each of the candidates HAS submitted a résumé.", vi: "each → số ít dù 'candidates' số nhiều." }
    ],
    tips: [
      "Gạch chéo cụm giới từ giữa chủ ngữ và trống trước khi chia động từ.",
      "equipment/information không bao giờ có -s — thấy 'equipments' trong đáp án là loại."
    ]
  },

  // ==================== READING — PART 7 ====================
  {
    id: "rc-p7-skills",
    section: "Reading — Part 7: Reading Comprehension",
    title: "Kỹ năng Part 7: Single / Double / Triple Passages",
    summary: "Part 7 có 54 câu: đoạn đơn (147-175), đoạn kép (176-185), đoạn ba (186-200). Các dạng văn bản: email, thư, quảng cáo, thông báo, bài báo, tin nhắn/chat, biểu mẫu-bảng giá. Chiến thuật: đọc CÂU HỎI trước để biết cần tìm gì, định vị thông tin bằng từ khóa, cẩn thận với paraphrase (đề luôn diễn đạt lại, hiếm khi lặp nguyên văn).",
    keyPoints: [
      "Dạng câu hỏi chính: mục đích bài (What is the purpose...? → đọc đoạn đầu), chi tiết (What/When/Who...? → định vị từ khóa), suy luận (most likely / suggested / indicated → ghép 2+ chi tiết), NOT (What is NOT mentioned → đối chiếu loại trừ từng đáp án), từ đồng nghĩa (closest in meaning → thay vào ngữ cảnh), chèn câu ([1][2][3][4] → tìm liên kết đại từ/từ nối), ý định người nói trong chat (most likely mean → đọc tin nhắn ngay trước).",
      "Đoạn kép/ba: LUÔN có 2-3 câu hỏi phải LIÊN KẾT dữ kiện từ 2 văn bản (vd: email nói cần ≥300m² + sơ đồ cho diện tích từng phòng → chọn phòng). Thấy câu hỏi có số liệu/lựa chọn mà 1 văn bản không đủ trả lời → đi tìm ở văn bản kia.",
      "Thứ tự thông tin thường khớp thứ tự câu hỏi trong 1 bài.",
      "Quản lý thời gian RC: Part 5 ~10 phút, Part 6 ~8 phút, để lại ~55 phút cho Part 7 (mỗi câu ~1 phút)."
    ],
    examples: [
      { en: "'rain or shine... vendors must supply their own tenting' → It will be held outdoors.", vi: "Suy luận: cần lều che mưa → sự kiện ngoài trời (không nói thẳng)." },
      { en: "'we recently added a rowboat option' + bảng giá rowboat $13 → newest option = $13.", vi: "Câu hỏi liên kết email với bảng giá — dạng bắt buộc có trong đoạn kép/ba." }
    ],
    tips: [
      "Câu hỏi NOT: dò từng đáp án ngược lại văn bản, 3 cái có → cái còn lại là đáp án.",
      "Câu chèn [1]-[4]: tìm đại từ (they, this, it) hoặc từ nối trong câu chèn — nó phải có 'điểm bám' ở câu đứng trước vị trí đúng.",
      "Đừng đọc hết văn bản rồi mới nhìn câu hỏi — đọc câu hỏi trước, đọc lướt (skim) có mục tiêu.",
      "Tên riêng, con số, ngày tháng là mỏ neo định vị nhanh nhất."
    ]
  },
];
