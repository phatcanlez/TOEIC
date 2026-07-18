// ============================================================
//  GIẢI ĐỀ — Ngân hàng đề thật ETS + giải chi tiết tiếng Việt
//  Nguồn câu hỏi: ETS 2022 Test 1 Reading (OCR từ TOEIC_ALL_CONTENT.md,
//  đã sửa lỗi OCR). Đáp án + giải chi tiết do AI soạn.
//  Schema:
//   part5[]  = { n, q, options[4], a, why }
//   part6[]  = { title, passage (chỗ trống ghi (131)___), questions[] = { n, q?, options[4], a, why } }
//   part7[]  = { title, passage, questions[] = { n, q, options[4], a, why } }
// ============================================================

export const TESTS = [
  {
    id: "ets2022-t1-rc",
    name: "ETS 2022 — Test 1 Reading (Part 5+6+7)",
    time: 75,

    // ---------------- PART 5 (101–130) ----------------
    part5: [
      { n: 101, q: "Mougey Fine Gifts is known for its large range of ------- goods.",
        options: ["regional", "regionally", "region", "regions"], a: "regional",
        why: "Vị trí trống: sau 'of' và TRƯỚC danh từ 'goods' → cần TÍNH TỪ bổ nghĩa cho danh từ. 'regional goods' = hàng hóa địa phương. (B) regionally là trạng từ (không đứng trước danh từ), (C)(D) region/regions là danh từ — 'region goods' không thành nghĩa danh từ ghép." },
      { n: 102, q: "Income levels are rising in the ------- and surrounding areas.",
        options: ["family", "world", "company", "city"], a: "city",
        why: "Câu từ vựng. 'in the ___ and surrounding areas' = trong ___ và các khu vực lân cận → chỉ 'city' (thành phố) mới có 'khu vực lân cận' đi kèm hợp nghĩa. family/world/company không đi với 'surrounding areas'." },
      { n: 103, q: "Since we had a recent rate change, expect ------- next electricity bill to be slightly lower.",
        options: ["you", "yours", "yourself", "your"], a: "your",
        why: "Trống đứng TRƯỚC cụm danh từ 'next electricity bill' → cần TÍNH TỪ SỞ HỮU: your + danh từ. (A) you là đại từ chủ/tân ngữ, (B) yours là đại từ sở hữu (đứng một mình, không đi kèm danh từ), (C) yourself là phản thân." },
      { n: 104, q: "Hotel guests have a lovely view of the ocean ------- the south-facing windows.",
        options: ["up", "except", "onto", "through"], a: "through",
        why: "Nghĩa: ngắm biển QUA cửa sổ → giới từ 'through' (xuyên qua). 'view ... through the windows' là collocation chuẩn. up/onto sai nghĩa phương hướng, except (ngoại trừ) sai nghĩa hoàn toàn." },
      { n: 105, q: "Mr. Kim would like ------- a meeting about the Jasper account as soon as possible.",
        options: ["to arrange", "arranging", "having arranged", "arrangement"], a: "to arrange",
        why: "Cấu trúc cố định: would like + TO V (muốn làm gì) → 'would like to arrange'. Không dùng V-ing sau would like. Đây là pattern Part 5 rất hay gặp: like + V-ing nhưng WOULD like + to V." },
      { n: 106, q: "The factory is ------- located near the train station.",
        options: ["regularly", "conveniently", "brightly", "collectively"], a: "conveniently",
        why: "Trạng từ bổ nghĩa cho 'located'. 'conveniently located' = tọa lạc ở vị trí thuận tiện — collocation kinh điển trong TOEIC (xuất hiện rất nhiều). regularly (đều đặn), brightly (sáng), collectively (chung) không đi với located." },
      { n: 107, q: "Because of transportation ------- due to winter weather, some conference participants may arrive late.",
        options: ["are delayed", "to delay", "delays", "had delayed"], a: "delays",
        why: "Sau 'Because of' phải là DANH TỪ/cụm danh từ (because of + N, because + mệnh đề). 'transportation delays' = sự chậm trễ giao thông (danh từ ghép). Các phương án còn lại đều là động từ — không đứng sau giới từ 'of' được." },
      { n: 108, q: "Proper maintenance of your heating equipment ensures that small issues can be fixed ------- they become big ones.",
        options: ["as a result", "in addition", "although", "before"], a: "before",
        why: "Cần LIÊN TỪ nối 2 mệnh đề, xét nghĩa: sửa vấn đề nhỏ TRƯỚC KHI chúng thành vấn đề lớn → 'before'. although (mặc dù) sai nghĩa; 'as a result', 'in addition' là trạng ngữ liên kết, không nối trực tiếp 2 mệnh đề trong 1 câu." },
      { n: 109, q: "The information on the Web site of Croyell Decorators is ------- organized.",
        options: ["clear", "clearing", "clearest", "clearly"], a: "clearly",
        why: "Trống đứng giữa 'is' và quá khứ phân từ 'organized' → cần TRẠNG TỪ bổ nghĩa: 'is clearly organized' = được sắp xếp rõ ràng. Pattern: be + ADV + V3/adj. (A) clear là tính từ — không bổ nghĩa cho organized được." },
      { n: 110, q: "The Copley Corporation is frequently ------- as a company that employs workers from all over the world.",
        options: ["recognized", "permitted", "prepared", "controlled"], a: "recognized",
        why: "Từ vựng + collocation: 'be recognized as' = được công nhận là... Cụm 'recognized as + danh từ' là cấu trúc chuẩn. permitted (được phép), prepared (chuẩn bị), controlled (kiểm soát) không đi với 'as a company...' hợp nghĩa." },
      { n: 111, q: "Payments made ------- 4:00 P.M. will be processed on the following business day.",
        options: ["later", "after", "than", "often"], a: "after",
        why: "Cần GIỚI TỪ trước mốc thời gian '4:00 P.M.': thanh toán SAU 4 giờ chiều → 'after'. (A) later cần 'later than'; (C) than phải đi cặp so sánh; (D) often là trạng từ tần suất." },
      { n: 112, q: "Greenfiddle Water Treatment hires engineers who have ------- mathematics skills.",
        options: ["adjusted", "advanced", "eager", "faithful"], a: "advanced",
        why: "Từ vựng: 'advanced mathematics skills' = kỹ năng toán nâng cao. 'advanced' (nâng cao/trình độ cao) là tính từ chuẩn đi với skills. eager (háo hức) chỉ dùng cho người; faithful (trung thành) sai nghĩa; adjusted (được điều chỉnh) không hợp." },
      { n: 113, q: "After ------- the neighborhood, Mr. Park decided not to move his café to Thomasville.",
        options: ["evaluation", "evaluate", "evaluating", "evaluated"], a: "evaluating",
        why: "Sau liên từ/giới từ 'After' + V-ing (khi 2 vế cùng chủ ngữ): 'After evaluating the neighborhood' = sau khi khảo sát khu vực. Có tân ngữ 'the neighborhood' phía sau nên phải là V-ing (không phải danh từ evaluation — danh từ cần 'of' mới mang tân ngữ)." },
      { n: 114, q: "The average precipitation in Campos ------- the past three years has been 22.7 centimeters.",
        options: ["on", "for", "to", "under"], a: "for",
        why: "'for + khoảng thời gian': 'for the past three years' = trong 3 năm qua. Dấu hiệu: 'the past + số + đơn vị thời gian' → dùng for (hoặc over/during). on/to/under không đi với khoảng thời gian." },
      { n: 115, q: "Improving efficiency at Perwon Manufacturing will require a ------- revision of existing processes.",
        options: ["create", "creativity", "creation", "creative"], a: "creative",
        why: "Vị trí: a + ___ + danh từ 'revision' → cần TÍNH TỪ: 'a creative revision' = một sự điều chỉnh sáng tạo. (B)(C) là danh từ — 'a creativity revision' không thành nghĩa; (A) là động từ." },
      { n: 116, q: "Conference attendees will share accommodations ------- they submit a special request for a single room.",
        options: ["even", "unless", "similarly", "also"], a: "unless",
        why: "Cần LIÊN TỪ + xét nghĩa: người tham dự sẽ ở ghép TRỪ KHI họ gửi yêu cầu phòng đơn → 'unless' (= if not). even/similarly/also là trạng từ, không nối được 2 mệnh đề." },
      { n: 117, q: "To receive ------- , please be sure the appropriate box is checked on the magazine order form.",
        options: ["renew", "renewed", "renewals", "to renew"], a: "renewals",
        why: "Sau 'receive' (động từ) cần TÂN NGỮ = DANH TỪ: 'to receive renewals' = để nhận gia hạn (tạp chí). (A) renew là động từ, (B) renewed là V3, (D) to renew là to-V — đều không làm tân ngữ danh từ được." },
      { n: 118, q: "Donations to the Natusi Wildlife Reserve rise when consumers feel ------- about the economy.",
        options: ["careful", "helpful", "confident", "durable"], a: "confident",
        why: "Từ vựng + collocation: 'feel confident about...' = cảm thấy tin tưởng/lạc quan về nền kinh tế. confident about là cụm chuẩn. careful (cẩn thận), helpful (hữu ích), durable (bền) không hợp nghĩa với 'about the economy'." },
      { n: 119, q: "When ------- applied, Tilda's Restorative Cream reduces the appearance of fine lines and wrinkles.",
        options: ["consistent", "consist", "consistently", "consisting"], a: "consistently",
        why: "Cấu trúc rút gọn 'When (it is) ___ applied' → trống đứng trước V3 'applied' cần TRẠNG TỪ: 'consistently applied' = được thoa đều đặn. Pattern giống câu 109: (be) + ADV + V3." },
      { n: 120, q: "The marketing director confirmed that the new software program would be ready to ------- by November 1.",
        options: ["launch", "facilitate", "arise", "exert"], a: "launch",
        why: "Từ vựng: 'ready to launch' = sẵn sàng ra mắt (phần mềm). launch (ra mắt sản phẩm) là từ TOEIC rất hay gặp với software/product. facilitate (tạo điều kiện), arise (nảy sinh), exert (gây/dùng sức) đều sai nghĩa." },
      { n: 121, q: "Satinesse Seat Covers will refund your order ------- you are not completely satisfied.",
        options: ["if", "yet", "until", "neither"], a: "if",
        why: "Liên từ điều kiện: hoàn tiền NẾU bạn không hài lòng → 'if'. until (cho đến khi) sai nghĩa; yet/neither không nối mệnh đề điều kiện. Đây là câu quảng cáo bảo hành điển hình." },
      { n: 122, q: "In the last five years, production at the Harris facility has almost doubled in -------.",
        options: ["majority", "edition", "volume", "economy"], a: "volume",
        why: "Collocation: 'double in volume' = tăng gấp đôi về sản lượng/khối lượng. 'in volume/in size/in number' là cách nói mức độ tăng chuẩn. majority (đa số), edition (ấn bản), economy (kinh tế) không đi với doubled in." },
      { n: 123, q: "Ms. Tsai will ------- the installation of the new workstations with the vendor.",
        options: ["coordinated", "to coordinate", "coordination", "be coordinating"], a: "be coordinating",
        why: "Sau trợ động từ 'will' cần ĐỘNG TỪ NGUYÊN MẪU: 'will be coordinating' (tương lai tiếp diễn) là dạng hợp lệ duy nhất. will + coordinated (V2/V3) sai; will + to V sai; will + danh từ coordination sai." },
      { n: 124, q: "An upgrade in software would ------- increase the productivity of our administrative staff.",
        options: ["significantly", "persuasively", "proficiently", "gladly"], a: "significantly",
        why: "Trạng từ bổ nghĩa 'increase': 'significantly increase' = tăng đáng kể — collocation TOEIC kinh điển (significantly/dramatically/substantially + increase). persuasively (thuyết phục), proficiently (thành thạo), gladly (vui vẻ) không đi với increase." },
      { n: 125, q: "The Rustic Diner's chef does allow patrons to make menu -------.",
        options: ["substituted", "substituting", "substitutions", "substitute"], a: "substitutions",
        why: "Sau 'make menu ___' cần DANH TỪ tạo danh từ ghép: 'menu substitutions' = việc đổi món. 'make substitutions' = thay đổi/thay thế. (A)(B) là dạng động từ; (D) substitute nếu là danh từ thì cần số nhiều ở ngữ cảnh này và 'make a substitute' không phải collocation chuẩn." },
      { n: 126, q: "Ms. Rodriguez noted that it is important to ------- explicit policies regarding the use of company computers.",
        options: ["inform", "succeed", "estimate", "establish"], a: "establish",
        why: "Từ vựng: 'establish policies' = thiết lập chính sách — collocation chuẩn. inform + người (không inform policies), succeed (thành công/kế nhiệm), estimate (ước tính) đều không đi với policies." },
      { n: 127, q: "------- Peura Insurance has located a larger office space, it will begin negotiating the rental agreement.",
        options: ["Happily", "Now that", "Despite", "In fact"], a: "Now that",
        why: "Cần LIÊN TỪ nối 2 mệnh đề: 'Now that + S + V' = bây giờ vì đã... → 'Giờ đã tìm được văn phòng lớn hơn, họ sẽ bắt đầu đàm phán'. Despite + danh từ (không + mệnh đề); Happily/In fact là trạng ngữ." },
      { n: 128, q: "Mr. Tanaka's team worked ------- for months to secure a lucrative government contract.",
        options: ["readily", "diligently", "curiously", "extremely"], a: "diligently",
        why: "Từ vựng trạng từ: 'worked diligently' = làm việc chăm chỉ/cần mẫn — hợp ngữ cảnh nỗ lực nhiều tháng giành hợp đồng. readily (sẵn sàng), curiously (tò mò) sai nghĩa; extremely (cực kỳ) là trạng từ mức độ, phải bổ nghĩa cho adj/adv khác chứ không đứng một mình sau worked." },
      { n: 129, q: "Though Sendark Agency's travel insurance can be purchased over the phone, most of ------- plans are bought online.",
        options: ["whose", "his", "its", "this"], a: "its",
        why: "Đại từ sở hữu thay cho 'Sendark Agency' (công ty = số ít, vật) → 'its plans' = các gói của công ty. his dùng cho người nam; whose là đại từ quan hệ; this + danh từ số ít (plans là số nhiều)." },
      { n: 130, q: "Garstein Furniture specializes in functional products that are inexpensive ------- beautifully crafted.",
        options: ["thus", "as well as", "at last", "accordingly"], a: "as well as",
        why: "Cần từ NỐI 2 tính từ song song: 'inexpensive as well as beautifully crafted' = vừa rẻ vừa được chế tác đẹp. as well as (= and) nối cấu trúc song song. thus/accordingly (do đó), at last (cuối cùng) là trạng ngữ, không nối được." },
    ],

    // ---------------- PART 6 (131–146) ----------------
    part6: [
      {
        title: "Questions 131-134 refer to the following notice.",
        passage: `NOTICE

To continue providing the highest level of (131)------- to our corporate tenants, we have scheduled the south lobby restrooms for maintenance this weekend, May 13 and May 14. (132)------- this time, the restrooms will be out of order, so tenants and their guests should instead use the facilities in the north lobby.

We (133)------- for any inconvenience this might cause. (134)-------.

Denville Property Management Partners`,
        questions: [
          { n: 131, options: ["serve", "served", "server", "service"], a: "service",
            why: "Sau 'the highest level of' cần DANH TỪ: 'level of service' = chất lượng dịch vụ. serve là động từ; server (người phục vụ/máy chủ) sai nghĩa; served là V2/V3." },
          { n: 132, options: ["Along", "During", "Without", "Between"], a: "During",
            why: "'During this time' = trong thời gian này — cụm chuẩn chỉ khoảng thời gian bảo trì. Along (dọc theo), Without (không có), Between (giữa 2 mốc, cần 'between A and B') đều không hợp." },
          { n: 133, options: ["apologize", "organize", "realize", "recognize"], a: "apologize",
            why: "'We apologize for any inconvenience' = chúng tôi xin lỗi vì sự bất tiện — câu cố định trong mọi thông báo TOEIC. Dấu hiệu: for any inconvenience → apologize." },
          { n: 134, q: "Chọn câu phù hợp điền vào chỗ trống.",
            options: [
              "If you would like to join our property management team, call us today.",
              "Thank you for your patience while the main lobby is being painted.",
              "Please do not attempt to access the north lobby on these days.",
              "Questions or comments may be directed to the Management Office.",
            ], a: "Questions or comments may be directed to the Management Office.",
            why: "Câu kết thông báo: 'Mọi thắc mắc xin liên hệ Văn phòng Quản lý' — hợp vị trí cuối thông báo. (C) SAI vì mâu thuẫn: thông báo bảo mọi người DÙNG north lobby chứ không cấm; (B) sai chi tiết (sơn main lobby ≠ bảo trì nhà vệ sinh); (A) tuyển dụng lạc đề." },
        ],
      },
      {
        title: "Questions 135-138 refer to the following customer review.",
        passage: `I recently received a last-minute invitation to a formal dinner. I bought a suit and needed it tailored as (135)------- as possible. A friend suggested that I use Antonio's Tailoring Shop in downtown Auckland. When I met Antonio, he gave me his full attention (136)------- his shop was busy. He took the time to listen to me and carefully noted all my measurements. He then explained all the tailoring costs up front and assured me that he could have my suit ready in three days, but he had it done in two. (137)-------.

Antonio has run his shop for over 30 years, and his experience really shows. He is a (138)------- tailor. I highly recommend him.

— Jim Kestren, Auckland`,
        questions: [
          { n: 135, options: ["quickly", "quicken", "quickest", "quickness"], a: "quickly",
            why: "Cấu trúc so sánh ngang bằng 'as ___ as possible' + bổ nghĩa cho động từ 'tailored' → TRẠNG TỪ: 'as quickly as possible' = càng nhanh càng tốt." },
          { n: 136, options: ["as far as", "even though", "such as", "whether"], a: "even though",
            why: "Nối 2 mệnh đề tương phản: anh ấy vẫn tập trung phục vụ tôi MẶC DÙ cửa tiệm đang đông → 'even though'. as far as (theo như), such as (ví dụ như, + danh từ), whether (liệu) đều sai." },
          { n: 137, q: "Chọn câu phù hợp điền vào chỗ trống.",
            options: [
              "Of course, the shop is busiest on Saturdays.",
              "The suit fits me perfectly too.",
              "I made another purchase.",
              "He used to sell shirts.",
            ], a: "The suit fits me perfectly too.",
            why: "Ngữ cảnh trước: hứa 3 ngày nhưng làm xong trong 2 ngày (khen tốc độ). Câu thêm 'Bộ vest cũng vừa vặn hoàn hảo' ('too' nối tiếp lời khen) → mạch khen dịch vụ liền mạch. Các câu còn lại lạc đề khỏi mạch đánh giá." },
          { n: 138, options: ["former", "temporary", "superb", "best"], a: "superb",
            why: "'He is a superb tailor' = thợ may xuất sắc — hợp mạch khen ngợi. (D) best cần mạo từ 'the': 'the best tailor'; former (cựu), temporary (tạm thời) sai nghĩa." },
        ],
      },
      {
        title: "Questions 139-142 refer to the following letter.",
        passage: `Dear Director Yoshida,

Thank you for your school's interest in visiting our farm next month. Please note that children must be at least six years old to visit and tour the farm. (139)-------. I have enclosed a list of the (140)------- activities available for our young visitors. Two of these (141)------- must be scheduled in advance. They are a cheese-making class and an introduction to beekeeping. Both are very popular with our visitors.

Please let (142)------- know your selection by early next week. I look forward to welcoming your group soon!

Sincerely,
Annabel Romero, Coordinator
Merrytree Family Farm`,
        questions: [
          { n: 139, q: "Chọn câu phù hợp điền vào chỗ trống.",
            options: [
              "In the event of bad weather, the animals will be inside.",
              "There are no exceptions to this policy.",
              "Ones younger than that can find much to enjoy.",
              "This fee includes lunch and a small souvenir.",
            ], a: "There are no exceptions to this policy.",
            why: "Câu trước vừa nêu QUY ĐỊNH (trẻ phải đủ 6 tuổi) → câu 'Không có ngoại lệ cho quy định này' củng cố trực tiếp, từ 'this policy' liên kết chặt với câu trước. (C) mâu thuẫn với quy định; (A)(D) không liên quan đến câu trước." },
          { n: 140, options: ["legal", "artistic", "athletic", "educational"], a: "educational",
            why: "'educational activities' = hoạt động mang tính giáo dục — hợp ngữ cảnh trường học tham quan trang trại (lớp làm phô mai, tìm hiểu nuôi ong). legal (pháp lý), artistic (nghệ thuật), athletic (thể thao) không khớp." },
          { n: 141, options: ["events", "plays", "treatments", "trips"], a: "events",
            why: "'Two of these ___' thay thế cho 'activities' vừa nhắc → từ đồng nghĩa gần nhất là 'events' (lớp làm phô mai, giới thiệu nuôi ong = các sự kiện cần đặt lịch trước). plays (vở kịch), treatments (liệu trình), trips (chuyến đi) không khớp." },
          { n: 142, options: ["they", "me", "her", "one"], a: "me",
            why: "'Please let me know your selection' = hãy cho TÔI biết lựa chọn — người viết thư (Annabel Romero) đang yêu cầu phản hồi về mình. Câu mệnh lệnh 'let me know' là cụm cố định." },
        ],
      },
      {
        title: "Questions 143-146 refer to the following e-mail.",
        passage: `To: Lakshmi Aiyar
From: info@healthonity.com
Date: February 8
Subject: Healthonity Dental

Dear Ms. Aiyar,

We, the dental health professionals of the Healthonity Dental Center, are (143)------- to introduce our just-opened practice. We aim to provide access to the largest team of dental specialists in the region. On our Web site, you can see a comprehensive list of the procedures we offer. (144)-------. The members of our practice share a passion for helping people maintain beautiful and healthy smiles.

Contact our center today at 305-555-0121 (145)------- an initial evaluation. All first-time (146)------- will benefit from a 50 percent discount on the cost through the end of the month.

Sincerely,
The Team at Healthonity Dental Center`,
        questions: [
          { n: 143, options: ["prouder", "proudly", "pride", "proud"], a: "proud",
            why: "'be proud to V' = tự hào được làm gì: 'we are proud to introduce'. Sau 'are' cần TÍNH TỪ nguyên cấp; prouder (so sánh hơn) không có 'than'; proudly là trạng từ; pride là danh từ." },
          { n: 144, q: "Chọn câu phù hợp điền vào chỗ trống.",
            options: [
              "They include general and cosmetic procedures.",
              "We have relocated from neighboring Hillsborough.",
              "The Web site is a creation of A to Z Host Builders.",
              "Several of them are surprisingly expensive.",
            ], a: "They include general and cosmetic procedures.",
            why: "Câu trước nhắc 'danh sách các procedures' → câu 'They include...' ('They' = the procedures) mở rộng ý trực tiếp. (B) mâu thuẫn ('just-opened' = mới mở, không phải chuyển từ nơi khác); (C) lạc đề kỹ thuật web; (D) 'đắt bất ngờ' phản tác dụng quảng cáo." },
          { n: 145, options: ["scheduled", "to schedule", "scheduling", "being scheduled"], a: "to schedule",
            why: "TO V chỉ MỤC ĐÍCH: 'Contact us today TO SCHEDULE an initial evaluation' = gọi để đặt lịch khám. Sau mệnh lệnh 'Contact...' cần to-V chỉ mục đích của hành động." },
          { n: 146, options: ["shoppers", "residents", "patients", "tenants"], a: "patients",
            why: "Ngữ cảnh phòng khám nha khoa → khách lần đầu là 'patients' (bệnh nhân). shoppers (người mua sắm), residents (cư dân), tenants (người thuê nhà) không hợp ngữ cảnh y tế." },
        ],
      },
    ],

    // ---------------- PART 7 (147–200) ----------------
    part7: [
      {
        title: "Questions 147-148 refer to the following Web page.",
        passage: `http://www.moonglowairways.com.au

Special Announcement by Geoff Clifford, President of Moon Glow Airways

As many of you are aware, there was a problem with Pelman Technology, the system that handles our airline reservations. This outage has affected several airlines. It's been a rough week, but the good news is that it has been repaired, and we are re-setting our system. However, Moon Glow passengers may still face delays for a day or two. This most likely will include longer lines at airports. We have added more on-site customer service representatives at airports in all of our destination cities to assist customers with their flights and information. We appreciate your understanding and patience.`,
        questions: [
          { n: 147, q: "What is the purpose of the announcement?",
            options: ["To report on airport renovations", "To give an update on a technical problem", "To introduce a new reservation system", "To advertise airline routes to some new cities"],
            a: "To give an update on a technical problem",
            why: "Toàn bài nói về sự cố hệ thống đặt vé Pelman Technology: đã xảy ra lỗi ('outage'), 'it has been repaired' → đây là bản CẬP NHẬT về sự cố kỹ thuật. Không có nội dung sửa sân bay (A), hệ thống MỚI (C hay bẫy — hệ thống cũ được sửa chứ không thay mới), hay quảng bá đường bay (D)." },
          { n: 148, q: "According to Mr. Clifford, what has the airline temporarily increased?",
            options: ["The number of flights available", "Dining options on flights", "Assistance for customers at airports", "Prices for international flights"],
            a: "Assistance for customers at airports",
            why: "Dẫn chứng: 'We have added MORE on-site customer service representatives at airports... to assist customers' → tăng nhân viên hỗ trợ khách tại sân bay. Không nhắc đến tăng chuyến bay, suất ăn hay giá vé." },
        ],
      },
      {
        title: "Questions 149-150 refer to the following job advertisement.",
        passage: `Video Captioners — Work from Home

Kiesel Video is seeking detail-oriented people to use our software to add text captions to a wide variety of video material, such as television programs, movies, and university lectures. We will provide free online training. Successful applicants must possess strong language skills and have a computer, a headset, and high-speed Internet access.

The position features:
• Flexible hours — you work as much or as little as you want.
• Choice of projects — we have work in many types of content.
• Good pay — our captioners earn $350 to $1,100 a week, depending on the assignment.

Apply today at www.kieselvideo.com/jobs`,
        questions: [
          { n: 149, q: "What are applicants for this position required to have?",
            options: ["Experience in video production", "Certain pieces of equipment", "A university degree in language studies", "An office with a reception area"],
            a: "Certain pieces of equipment",
            why: "Dẫn chứng: 'must... have a computer, a headset, and high-speed Internet access' → phải có THIẾT BỊ nhất định. Bẫy (C): yêu cầu 'strong language skills' chứ KHÔNG yêu cầu bằng đại học ngành ngôn ngữ. Không yêu cầu kinh nghiệm sản xuất video (A)." },
          { n: 150, q: "What is true about the job?",
            options: ["It is a full-time position.", "It pays a fixed salary.", "It involves some foreign travel.", "It offers a choice of assignments."],
            a: "It offers a choice of assignments.",
            why: "Dẫn chứng: 'Choice of projects — we have work in many types of content' → được chọn dự án. (A) sai vì 'work as much or as little as you want' (giờ linh hoạt, không phải full-time); (B) sai vì lương $350–1,100/tuần 'depending on the assignment' (không cố định)." },
        ],
      },
      {
        title: "Questions 151-152 refer to the following report.",
        passage: `February 1
SOFTWARE TESTING REPORT

Version of Software Program: Konserted 2.5
Testing Dates: January 10-12
Number of Participants: 8

Software Testing Overview: Participants were asked to complete a series of tasks testing the functionality of the revised Konserted interface. In task number 1, participants searched for a concert in a designated area. In task number 2, participants searched for new friends on the site. In task number 3, participants invited friends to a concert. In task number 4, participants posted concert reviews, photos, and videos.

Initial Findings: Task number 3 proved the most challenging, with three participants unable to complete it in under two minutes. A potential cause for this difficulty may be the choice of icons in the menu bar. Clearer, more intuitive icons could make this task easier to complete for participants.`,
        questions: [
          { n: 151, q: "What is true about the software testing?",
            options: ["It included multiple versions of Konserted.", "It was done over several days.", "It required participants to complete a survey.", "It took place at a series of concerts."],
            a: "It was done over several days.",
            why: "Dẫn chứng: 'Testing Dates: January 10-12' → kéo dài 3 ngày = 'over several days'. (A) sai — chỉ test 1 phiên bản (Konserted 2.5); (C) không nhắc khảo sát; (D) test giao diện phần mềm, không diễn ra tại buổi hòa nhạc." },
          { n: 152, q: "What action was difficult for users to complete?",
            options: ["Searching for an event", "Searching for friends", "Inviting friends to a performance", "Posting reviews to a Web site"],
            a: "Inviting friends to a performance",
            why: "Dẫn chứng: 'Task number 3 proved the most challenging' + task 3 = 'participants invited friends to a concert' → mời bạn đến buổi biểu diễn (concert được paraphrase thành performance). Đây là dạng câu hỏi đối chiếu task số mấy = hành động gì." },
        ],
      },
      {
        title: "Questions 153-155 refer to the following e-mail.",
        passage: `To: catiyeh@mymailroom.au
From: achen@mutamark.au
Date: 1 July
Subject: Mutamark conference

Dear Ms. Atiyeh,

To follow up on our phone conversation earlier today, I would like to extend to you a formal written invitation to speak at the eighth annual Mutamark conference, scheduled to take place this year from 17 to 20 September in Zagros. Because you drew a sizeable crowd when you appeared at the conference in the past, we will be making special arrangements for your visit this time. The Blue Room at the Debeljak Hotel holds only 120, so this year we are also booking the Koros Hall, which has a capacity of 270. We can offer you a 40-to-50-minute slot on the last day of the conference, when attendance should be at its peak. Please e-mail me to confirm your acceptance and to let me know more about your audiovisual requirements. We can provide overhead projection for still images if you will be using them again.

Very best regards,
Alex Chen, Conference Planning
Mutamark Headquarters, Melbourne`,
        questions: [
          { n: 153, q: "What is indicated about Ms. Atiyeh's previous appearance at Mutamark?",
            options: ["It was very well attended.", "It was moved to a larger venue.", "It featured a musical performance.", "It took place at the Koros Hall."],
            a: "It was very well attended.",
            why: "Dẫn chứng: 'you drew a sizeable crowd when you appeared at the conference in the past' = lần trước bà thu hút đông người nghe → 'very well attended'. (D) bẫy: Koros Hall là chỗ MỚI đặt cho năm nay, không phải nơi diễn ra lần trước." },
          { n: 154, q: "How many people can the Koros Hall accommodate?",
            options: ["40", "50", "120", "270"],
            a: "270",
            why: "Dẫn chứng: 'the Koros Hall, which has a capacity of 270'. Bẫy: 120 là sức chứa Blue Room; 40–50 là số PHÚT của bài nói. Câu hỏi số liệu — phải khớp đúng đối tượng." },
          { n: 155, q: "When will Ms. Atiyeh most likely appear at the Mutamark conference?",
            options: ["On September 17", "On September 18", "On September 19", "On September 20"],
            a: "On September 20",
            why: "Suy luận 2 bước: hội nghị diễn ra 17–20/9 + 'a slot on the LAST DAY of the conference' → ngày cuối = 20/9. Dạng câu hỏi phải ghép 2 chi tiết ở 2 chỗ khác nhau trong bài." },
        ],
      },
      {
        title: "Questions 156-158 refer to the following article.",
        passage: `Monorail Coming to Sudbury

(4 Feb.) — Ottawa-based Saenger, Inc., has been selected by the city of Sudbury to build a monorail system that will connect the city's commercial district to the airport. — [1] —. Funding for the system is drawn from a combination of public agencies and private investors. — [2] —. Ticket sales for the monorail will also provide a new source of revenue for the city. — [3] —. Construction is slated to begin in early June and is expected to be completed within four years. — [4] —.`,
        questions: [
          { n: 156, q: "What kind of business most likely is Saenger, Inc.?",
            options: ["A construction firm", "A real estate agency", "A cargo-handling company", "A financial services provider"],
            a: "A construction firm",
            why: "Dẫn chứng: Saenger 'has been selected... to BUILD a monorail system' → công ty được chọn để XÂY DỰNG = công ty xây dựng. Câu hỏi suy luận nghề nghiệp từ hành động." },
          { n: 157, q: "What is indicated about the monorail?",
            options: ["It needs more funding from investors.", "It will take years to finish.", "It was proposed by airport officials.", "It offers discounted tickets to city residents."],
            a: "It will take years to finish.",
            why: "Dẫn chứng: 'expected to be completed within four years' → mất nhiều năm mới xong. (A) sai — kinh phí đã có ('drawn from a combination of...'); (C)(D) không được nhắc đến." },
          { n: 158, q: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"Along the way, the line will stop at nine stations.\"",
            options: ["[1]", "[2]", "[3]", "[4]"],
            a: "[1]",
            why: "Câu chèn nói về TUYẾN ĐƯỜNG ('Along the way, the line will stop at nine stations' = dọc tuyến có 9 ga). Vị trí [1] nằm ngay sau câu mô tả tuyến monorail 'connect the city's commercial district to the airport' → 'Along the way' chỉ hành trình đó. Các vị trí sau đang nói về kinh phí/doanh thu/thi công, lạc mạch." },
        ],
      },
      {
        title: "Questions 159-160 refer to the following text-message chain.",
        passage: `Dennis Beck (2:52 P.M.)
Hi, Corinne. I just want to be sure that you saw the document I sent you. It's the combined market analysis and advertising proposal for the Keyes Elegant Home group. We're preparing it for tomorrow's presentation to the client.

Corinne McCall (2:53 P.M.)
Yes. I have just downloaded it. Is this about their new line of tableware?

Dennis Beck (2:54 P.M.)
Yes. I'd like you to read it over.

Corinne McCall (3:01 P.M.)
No problem. Would you like me to revise anything, or do you want me to just check that it is all clear?

Dennis Beck (3:02 P.M.)
Feel free to add information to the section "Advertising Strategies," since that is your area of expertise.

Corinne McCall (3:03 P.M.)
Will do. I'll get it back to you before the end of the day.`,
        questions: [
          { n: 159, q: "At 3:01 P.M., what does Ms. McCall most likely mean when she writes, \"No problem\"?",
            options: ["She did not have any issues logging on to her computer.", "She does not think a document has errors.", "She is willing to review a document.", "She has time to meet representatives from Keyes Elegant Home."],
            a: "She is willing to review a document.",
            why: "Dạng câu hỏi Ý ĐỊNH NGƯỜI NÓI: 'No problem' trả lời trực tiếp yêu cầu 'I'd like you to read it over' (đọc soát tài liệu) → cô ấy sẵn lòng xem tài liệu. Phải nhìn tin nhắn NGAY TRƯỚC để xác định 'No problem' đáp lại điều gì." },
          { n: 160, q: "What type of work does Ms. McCall most likely do?",
            options: ["Marketing", "Accounting", "Legal consulting", "Information technology services"],
            a: "Marketing",
            why: "Dẫn chứng: 'Feel free to add information to the section \"Advertising Strategies,\" since that is YOUR AREA OF EXPERTISE' → chuyên môn của cô là chiến lược quảng cáo = Marketing." },
        ],
      },
      {
        title: "Questions 161-164 refer to the following e-mail.",
        passage: `To: Mara Renaldo <mrenaldo@viyamail.com>
From: Lisa Yang <lyang@staffordsvillefair.org>
Date: May 28
Subject: RE: Staffordsville Craft Fair

Dear Ms. Renaldo,

Thank you for your interest in selling your handcrafted items at the annual Staffordsville Craft Fair. Please note that all applicants must submit a $25 application fee, whether or not they want to share a space with another applicant. Moreover, all applicants must submit a minimum of four photographs of their work in order to be considered as a vendor. — [1] —.

In addition to photographs, we ask that you submit a rough sketch showing how you would display your work. Since you propose to share a space with a friend, local potter Julia Berens, it would be helpful if your sketch could indicate how you are planning to use the space jointly. — [2] —.

Also, because we hold the fair rain or shine, all vendors must supply their own tenting to protect themselves and their wares from the possibility of rain. — [3] —.

Finally, please be aware that every year we receive far more applications from jewelry makers than we can accept. We hope that you will not be too discouraged if your work is not accepted this year, as you are applying for the first time. — [4] —.

Thanks again, and best of luck with your application,
Lisa Yang`,
        questions: [
          { n: 161, q: "What is suggested about the craft fair?",
            options: ["It takes place in downtown Staffordsville.", "It is being held for the first time.", "It specializes in locally produced crafts.", "It will be held outdoors."],
            a: "It will be held outdoors.",
            why: "Suy luận: 'we hold the fair RAIN OR SHINE, all vendors must supply their own TENTING... from the possibility of rain' → cần lều che mưa nghĩa là hội chợ tổ chức NGOÀI TRỜI. (B) sai — hội chợ thường niên ('annual'); người nộp đơn lần đầu là Ms. Renaldo chứ không phải hội chợ." },
          { n: 162, q: "What is NOT mentioned as a requirement for selling at the craft fair?",
            options: ["Sharing a space with another participant", "Paying a fee to participate", "Submitting images of the crafts", "Providing one's own tenting"],
            a: "Sharing a space with another participant",
            why: "Câu hỏi NOT: (B) có — '$25 application fee'; (C) có — 'minimum of four photographs'; (D) có — 'must supply their own tenting'. Còn chia sẻ gian hàng là TÙY CHỌN ('whether or not they want to share a space'), không phải yêu cầu → đáp án." },
          { n: 163, q: "What does Ms. Renaldo most likely sell?",
            options: ["Sketches", "Photographs", "Pottery", "Jewelry"],
            a: "Jewelry",
            why: "Suy luận ghép 2 chi tiết: đoạn cuối nói 'every year we receive far more applications from JEWELRY MAKERS than we can accept' + 'you are applying for the first time' (an ủi bà đừng nản nếu không được chọn) → bà là người làm trang sức. Bẫy (C): Julia Berens (bạn của bà) mới là thợ gốm." },
          { n: 164, q: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"Make sure they clearly represent the items you wish to offer for purchase at the event.\"",
            options: ["[1]", "[2]", "[3]", "[4]"],
            a: "[1]",
            why: "Câu chèn có đại từ 'THEY' phải chỉ về danh từ số nhiều ngay trước đó = 'four photographs of their work' → đặt ở [1] ngay sau yêu cầu nộp ảnh: 'ảnh phải thể hiện rõ sản phẩm bạn định bán'. Các vị trí khác 'they' không có từ để thay thế hợp lý." },
        ],
      },
      {
        title: "Questions 165-167 refer to the following information.",
        passage: `SLEEP SOUNDLY SOLUTIONS
Thank you for choosing Sleep Soundly Solutions!

The updated control panel is linked to an integrated system that allows you to activate and disable all security systems in your home, including your Sleep Soundly motion sensor as well as your fire, smoke, and carbon monoxide detectors.

All Sleep Soundly residential alarm systems have been tested thoroughly to ensure the highest quality and sensitivity, so you can sleep soundly in the knowledge that your home is protected. We have also developed a new smartphone application that will notify you of any disturbances wherever you are. The app is available for download now.

Sleep Soundly control equipment is carefully manufactured for use with Sleep Soundly detectors and alarms. Using products manufactured by other companies may result in an alarm system that does not meet safety requirements for residential buildings or comply with local laws.`,
        questions: [
          { n: 165, q: "In what industry does Sleep Soundly Solutions operate?",
            options: ["Real estate", "Life insurance", "Home security", "Furniture moving"],
            a: "Home security",
            why: "Dẫn chứng: 'security systems in your home', 'motion sensor', 'residential alarm systems', 'your home is protected' → ngành AN NINH GIA ĐÌNH. Tên 'Sleep Soundly' (ngủ ngon) là bẫy liên tưởng đến giường nệm." },
          { n: 166, q: "What new product is being offered by Sleep Soundly Solutions?",
            options: ["An outdoor motion sensor", "A smartphone application", "Home installation service", "Fire detection equipment"],
            a: "A smartphone application",
            why: "Dẫn chứng: 'We have also developed a NEW smartphone application... The app is available for download now'. Motion sensor và fire detector là sản phẩm ĐÃ CÓ, không phải mới." },
          { n: 167, q: "The word \"meet\" in paragraph 3, line 3, is closest in meaning to",
            options: ["greet", "touch", "satisfy", "experience"],
            a: "satisfy",
            why: "Câu hỏi TỪ ĐỒNG NGHĨA theo ngữ cảnh: 'does not MEET safety requirements' = không ĐÁP ỨNG yêu cầu an toàn → meet = satisfy (thỏa mãn/đáp ứng). greet (chào), touch (chạm), experience (trải nghiệm) không thay được trong ngữ cảnh 'meet requirements'." },
        ],
      },
      {
        title: "Questions 168-171 refer to the following letter.",
        passage: `March 29

Dr. Maritza Geerlings
Poseidonstraat 392
Paramaribo, Suriname

Dear Dr. Geerlings,

I am writing to thank you for your years of service on the faculty of the Jamaican Agricultural Training Academy (JATA) and to let you know about some exciting developments. As you know, JATA was originally established as a vocational school for agriculture but now offers courses in a varied array of disciplines, including cybersecurity, electrical engineering, and health information management. Our student body, which for the first ten years consisted almost exclusively of locals, is now culturally diverse, with students from across the Americas and Europe. Today's students work with sophisticated equipment, much of which did not exist in our early days.

To reflect these and other significant changes that JATA has undergone over time, the Board of Trustees has approved a proposal by the Faculty Senate to rename the institution the Caribbean Academy of Science and Technology. As a result, a new institutional logo will be adopted. All students and faculty members, both current and former, are invited to participate in a logo design contest. Information about the contest will be forthcoming.

The renaming ceremony and the introduction of the new logo will take place at 11 A.M. on 1 June, the twentieth anniversary of the institution. We hope you will be able to join us.

Sincerely,
Audley Bartlett
Vice President for Academic Affairs,
Jamaican Agricultural Training Academy`,
        questions: [
          { n: 168, q: "What is one purpose of the letter?",
            options: ["To announce a name change", "To honor distinguished alumni", "To suggest revisions to a curriculum", "To list an individual's accomplishments"],
            a: "To announce a name change",
            why: "Nội dung trọng tâm đoạn 2: Hội đồng đã duyệt đổi tên trường thành 'Caribbean Academy of Science and Technology' + đoạn 3 nói về lễ đổi tên → mục đích thư là THÔNG BÁO ĐỔI TÊN. Thư có cảm ơn cống hiến nhưng không phải vinh danh cựu sinh viên (B)." },
          { n: 169, q: "The word \"established\" in paragraph 1, line 3, is closest in meaning to",
            options: ["affected", "founded", "confirmed", "settled"],
            a: "founded",
            why: "'JATA was originally ESTABLISHED as a vocational school' = được THÀNH LẬP ban đầu như một trường nghề → established = founded (sáng lập). confirmed (xác nhận), settled (giải quyết/định cư), affected (ảnh hưởng) không thay được." },
          { n: 170, q: "What is suggested about Dr. Geerlings?",
            options: ["She plans to attend JATA's anniversary celebration.", "She has taught courses in cybersecurity.", "She can take part in JATA's logo design contest.", "She served on JATA's Board of Trustees."],
            a: "She can take part in JATA's logo design contest.",
            why: "Ghép 2 chi tiết: cuộc thi logo mở cho 'faculty members, both current and FORMER' + Dr. Geerlings là cựu giảng viên (thư cảm ơn 'years of service on the faculty') → bà ĐỦ ĐIỀU KIỆN tham gia. (A) sai — mới chỉ 'hope you will join', chưa xác nhận." },
          { n: 171, q: "What is NOT indicated about JATA in the letter?",
            options: ["Its professors live on campus.", "Its students have access to modern equipment.", "It will be twenty years old on June 1.", "It is attended by international students."],
            a: "Its professors live on campus.",
            why: "Câu hỏi NOT: (B) có — 'work with sophisticated equipment'; (C) có — '1 June, the twentieth anniversary'; (D) có — 'students from across the Americas and Europe'. Việc giảng viên sống trong khuôn viên KHÔNG được nhắc → đáp án." },
        ],
      },
      {
        title: "Questions 172-175 refer to the following online chat discussion.",
        passage: `Ashley Montaine (8:54 A.M.): How did the interview with Mr. Erickson go?

Dan Campbell (8:55 A.M.): I really enjoyed meeting him. I think he'd be a great reporter here. He seems smart and organized, and his samples show that he's a great writer.

Ashley Montaine (8:57 A.M.): Brooke, can you contact Mr. Erickson to set up the next interview? Is that a problem?

Dan Campbell (8:58 A.M.): I'd really like to work with him. It is very important that he impress Mr. Peters.

Brooke Randolph (8:59 A.M.): Not at all.

Ashley Montaine (9:00 A.M.): Thanks. I also see that he has a varied work history. That will make him a well-rounded reporter.

Brooke Randolph (9:02 A.M.): When would you like to meet with him again?

Dan Campbell (9:03 A.M.): Ashley, I believe you will participate in the next interview. Note that Mr. Peters is probably going to ask why Mr. Erickson wants to transition from freelance writing to in-house news reporting. Also, Mr. Peters will want assurances that he's committed and will stick around for several years.

Ashley Montaine (9:04 A.M.): Brooke, Mr. Peters and I are both free Friday morning.

Brooke Randolph (9:06 A.M.): Great. I'll write an e-mail shortly.`,
        questions: [
          { n: 172, q: "For what type of company do the writers work?",
            options: ["A book publisher", "A newspaper", "A film production company", "A job-placement firm"],
            a: "A newspaper",
            why: "Dẫn chứng: 'he'd be a great REPORTER here', 'in-house NEWS REPORTING' → họ đang tuyển phóng viên cho tòa soạn BÁO. Không có chi tiết về sách, phim hay môi giới việc làm." },
          { n: 173, q: "At 8:59 A.M., what does Ms. Randolph most likely mean when she writes, \"Not at all\"?",
            options: ["She would like to participate in an interview.", "She does not think Mr. Erickson should be hired.", "She feels comfortable fulfilling a request.", "She has not read Mr. Erickson's writing."],
            a: "She feels comfortable fulfilling a request.",
            why: "Dạng Ý ĐỊNH NGƯỜI NÓI: 'Not at all' trả lời câu hỏi của Ashley lúc 8:57 'Is that a problem?' (việc liên hệ đặt lịch phỏng vấn) → 'hoàn toàn không (có vấn đề gì)' = cô sẵn sàng làm việc được nhờ. Lưu ý tin nhắn 8:58 của Dan chen giữa — phải tìm đúng câu được trả lời." },
          { n: 174, q: "What is indicated about Mr. Erickson?",
            options: ["He has never been on a job interview before.", "He has held many different types of jobs.", "He is taking over Mr. Peters' position.", "He is a former colleague of Ms. Montaine."],
            a: "He has held many different types of jobs.",
            why: "Dẫn chứng: 'he has a VARIED WORK HISTORY' = lịch sử làm việc đa dạng → từng làm nhiều loại công việc. Các phương án khác không có căn cứ trong đoạn chat." },
          { n: 175, q: "According to the discussion, what is important to Mr. Peters about a new hire?",
            options: ["Prior news reporting experience", "Ability to begin working immediately", "Communicating well with colleagues", "Staying with the company over the long term"],
            a: "Staying with the company over the long term",
            why: "Dẫn chứng: 'Mr. Peters will want assurances that he's committed and will STICK AROUND FOR SEVERAL YEARS' = gắn bó lâu dài → paraphrase thành 'staying with the company over the long term'." },
        ],
      },
      {
        title: "Questions 176-180 refer to the following article and letter.",
        passage: `[BÀI BÁO — Alberta Business Matters, April issue]

Improve Your Office Environment Now!

Today's office environment, featuring numerous corridors, unexciting beige or white walls, and often rows of identical, windowless cubicles, might not inspire comfort, beauty, and energy. However, there are some easy, inexpensive ways to make your office space more inviting.

Light quality
• Replace desktop lamps with full-spectrum lightbulbs.
• Install double-glazed windows instead of blinds to reduce glare while maintaining natural light.
• Take breaks and go outdoors. Even just five minutes before or after lunch break will provide your eyes with a respite from artificial light sources.

Air quality
• Add some green plants to the décor. Plants offer a natural filtration system, increasing oxygen levels. Nonflowering plants should be preferred, as they will not scatter pollen.
• A small, tabletop air purifier helps improve stale air and removes dust.

Stress relief
• Earplugs or noise-cancelling headphones can block distracting noise in an open office floor plan.
• Photographs of loved ones and places we have visited for vacation are reminders of our life away from the office. Select a few favorite pictures as important decorative elements.

Dear readers, if you have tips to add to this list, send them in and they will be published in next month's issue.

[THƯ GỬI BAN BIÊN TẬP — Letters to the Editor]

It may interest your readers to know about the company I work for, called Moveable, Inc. We aspire to make dull offices more comfortable and convenient for workers, especially for today's on-the-move employees.

For example, say you work two days a week at your headquarters in Edmonton, and the rest of the week you are in a satellite office. Our "Can-Do Case" ensures that your favorite office supplies always travel with you. Our "Modular Décor Kit," weighing just 1.75 kg, contains a portable reading lamp, a miniature silk plant, and a folding photo frame with space for four pictures. Look us up online and follow us on social media, as we offer new items frequently!

Best,
Maria Testa`,
        questions: [
          { n: 176, q: "What is NOT recommended in the article?",
            options: ["Using plants to decorate cubicles", "Walking outdoors during breaks", "Using a calming noise machine", "Decorating with personal photographs"],
            a: "Using a calming noise machine",
            why: "Câu hỏi NOT: bài báo khuyên dùng cây xanh (A), ra ngoài trời khi nghỉ (B), trang trí bằng ảnh cá nhân (D). Về tiếng ồn, bài khuyên NÚT TAI/TAI NGHE CHỐNG ỒN (chặn tiếng ồn) chứ không phải MÁY TẠO TIẾNG ỒN dễ chịu → (C) không được khuyên." },
          { n: 177, q: "Why are blinds mentioned?",
            options: ["Because they are relatively expensive", "Because they block natural light", "Because they are hard to match to furniture", "Because they attract dust"],
            a: "Because they block natural light",
            why: "Dẫn chứng: 'Install double-glazed windows INSTEAD OF blinds to reduce glare WHILE MAINTAINING NATURAL LIGHT' → rèm bị thay thế vì nó chặn ánh sáng tự nhiên (dùng kính hai lớp thì vừa giảm chói vừa giữ được sáng)." },
          { n: 178, q: "What is indicated about the magazine?",
            options: ["It is the only business publication in Alberta.", "Its publisher is hiring additional staff.", "Its editors would like to hear from readers.", "It is sponsored by a furniture company."],
            a: "Its editors would like to hear from readers.",
            why: "Dẫn chứng cuối bài báo: 'Dear readers, if you have tips to add to this list, SEND THEM IN and they will be published in next month's issue' → tạp chí mời độc giả gửi ý kiến." },
          { n: 179, q: "What is suggested about Ms. Testa?",
            options: ["She is a professional writer.", "She is starting a new company.", "She travels frequently in her work.", "She read the previous issue of Alberta Business Matters."],
            a: "She read the previous issue of Alberta Business Matters.",
            why: "Suy luận LIÊN KẾT 2 VĂN BẢN: bài báo (số tháng 4) mời độc giả gửi tips đăng số sau; Ms. Testa viết thư hưởng ứng đúng lời mời đó (giới thiệu sản phẩm làm văn phòng dễ chịu hơn) → bà đã ĐỌC số báo có bài viết. Đây là dạng câu hỏi kết nối double passage." },
          { n: 180, q: "What is suggested about Moveable, Inc.'s products?",
            options: ["They are packable.", "They are affordable.", "They are available for a short time.", "They are made from recycled materials."],
            a: "They are packable.",
            why: "Dẫn chứng: 'Can-Do Case' để đồ dùng văn phòng 'always TRAVEL with you', 'Modular Décor Kit' nặng chỉ 1.75kg có đèn XẾP GỌN, khung ảnh GẤP được → sản phẩm thiết kế để đóng gói mang đi = packable. Không có thông tin về giá (B) hay vật liệu tái chế (D)." },
        ],
      },
      {
        title: "Questions 181-185 refer to the following Web page and review.",
        passage: `[TRANG WEB — http://www.lloydtouringcompany.co.uk]

Choose one of Lloyd Touring Company's (LTC) most popular outings to see the best that London has to offer!

Tour 1: Full-day tour of the most popular tourist sites on one of our famous red double-decker buses. See the Changing of the Guard and conclude the day with a river cruise.

Tour 2: Full-day walking tour of London's best shopping areas. Explore London's famous department stores and wander along fashionable Bond and Oxford Streets.

Tour 3: Half-day tour on a red double-decker bus, including private tour of the Tower of London and lunch at a nearby café.

Tour 4: Half-day tour of Buckingham Palace, including the Changing of the Guard. Tour ends with a traditional fish-and-chips lunch.

Tour 5: Full-day walking tour featuring London's top highlights. Complete the day with a medieval banquet.

LTC's knowledgeable local staff members personally guide each one of our tours. Meals are not covered, except when noted in the tour description. Participants are responsible for meeting at chosen departure destination. LTC does not provide pickup from hotels. All tours can be upgraded for an additional fee to include an open-date ticket to the London Eye, London's famous observation wheel.

[BÀI ĐÁNH GIÁ — Lloyd Touring Company Review ★★★★★ — Ella Bouton]

This was my first trip to London. I decided to see all the major tourist sites on my own, but I wanted someone to help me discover the most interesting places to shop in London. My LTC tour guide, Larissa, was wonderful. She is an avid shopper herself, and at the beginning of the tour, she tried to get to know the participants. She was able to guide everyone to the shops that they were most interested in. It was such a personalized tour! And it was a bonus that Larissa also speaks French. My daughter and I were visiting from Paris, and we appreciated being able to communicate in two languages. The tour was very reasonably priced, too. I would highly recommend it. The only unpleasant part of the tour was that Oxford Street was extremely crowded when we visited, and it was difficult to walk around easily.`,
        questions: [
          { n: 181, q: "How does Tour 1 differ from all the other tours?",
            options: ["It uses a double-decker bus.", "It includes multiple meals at famous restaurants.", "It allows participants to see London from the water.", "It takes the entire day."],
            a: "It allows participants to see London from the water.",
            why: "So sánh 5 tour: chỉ Tour 1 có 'RIVER CRUISE' (du thuyền trên sông) = ngắm London từ mặt nước. Bẫy (A): Tour 3 cũng dùng xe buýt 2 tầng; bẫy (D): Tour 2 và 5 cũng full-day → không phải điểm KHÁC BIỆT với TẤT CẢ." },
          { n: 182, q: "What is included in the cost of the tours?",
            options: ["Transportation from hotels", "A tour guide", "Breakfast at a restaurant", "A ticket to the London Eye"],
            a: "A tour guide",
            why: "Dẫn chứng: 'LTC's knowledgeable local staff members personally GUIDE each one of our tours' → hướng dẫn viên có trong mọi tour. (A) sai — 'LTC does NOT provide pickup from hotels'; (D) sai — vé London Eye phải TRẢ THÊM phí ('upgraded for an additional fee')." },
          { n: 183, q: "What tour did Ms. Bouton most likely take?",
            options: ["Tour 2", "Tour 3", "Tour 4", "Tour 5"],
            a: "Tour 2",
            why: "Liên kết 2 văn bản: review nói cô muốn được dẫn đi 'the most interesting places to SHOP', guide dẫn đến 'the shops', đi Oxford Street → khớp Tour 2 'walking tour of London's best SHOPPING areas... Bond and Oxford Streets'." },
          { n: 184, q: "What does the review suggest about Ms. Bouton?",
            options: ["She prefers bus tours.", "She speaks French.", "She was on a business trip.", "She used LTC before."],
            a: "She speaks French.",
            why: "Suy luận: 'It was a bonus that Larissa also speaks FRENCH. My daughter and I were visiting FROM PARIS, and we appreciated being able to communicate in TWO LANGUAGES' → cô đến từ Paris và giao tiếp được bằng 2 thứ tiếng trong đó có tiếng Pháp." },
          { n: 185, q: "Why was Ms. Bouton disappointed with the tour?",
            options: ["It was expensive.", "It was disorganized.", "It was in a very crowded area.", "It was in an uninteresting part of the city."],
            a: "It was in a very crowded area.",
            why: "Dẫn chứng: 'The only unpleasant part... was that Oxford Street was EXTREMELY CROWDED... difficult to walk around'. (A) ngược lại — 'very reasonably priced' (giá hợp lý)." },
        ],
      },
      {
        title: "Questions 186-190 refer to the following e-mail, notice, and e-mail.",
        passage: `[EMAIL 1]
To: Joseph Morgan <joseph.morgan@peltergraphics.com>
From: administrator@costaseminars.org

Dear Mr. Morgan,

Thank you for registering for Emilio Costa's seminar on June 11 at the Rothford Business Center. We are glad you took advantage of the opportunity for conference participants to purchase some of Emilio Costa's graphic-design books at a discounted price. The information below is a confirmation of your order. The books will be waiting for you at the check-in desk on the day of the seminar. Please note that we will accept any major credit card for payment. We are looking forward to seeing you on June 11.

| Số lượng | Tựa sách | Giá gốc | Giá giảm |
| 1 | Perfected Figures: Making Data Visually Appealing | $22.00 | $17.60 |
| 1 | Logos in the Information Age | $18.00 | $14.40 |
| 1 | Branding Strategies in Graphic Design | $28.00 | $22.40 |
| 2 | Best Practices in Web Design: A European Perspective | $24.00 | $19.20 |
TOTAL DUE: $92.80

[THÔNG BÁO]
Attention, Seminar Participants:
Unfortunately, we do not have copies of Emilio Costa's book "Branding Strategies in Graphic Design" with us today. For those of you who have ordered it, please give your mailing address to the volunteer at the check-in desk, and the book will be mailed to your home at no cost to you. We will charge your credit card upon shipment. We are sorry for the inconvenience.

[EMAIL 2]
To: roberta.tsu@peltergraphics.com
From: joseph.morgan@peltergraphics.com
Date: June 22
Subject: Costa book

Dear Roberta,

I'm looking forward to finishing up our brochure design for Entchen Financial Consultants. Before we submit our final draft, I would like to rethink how we are presenting our data. Have you had a chance to look through the Costa book I showed you? He gives great advice on improving the clarity of financial information in marketing materials. Anyway, let's talk about it at lunch tomorrow.

Best,
Joseph`,
        questions: [
          { n: 186, q: "What most likely is the topic of the seminar on June 11?",
            options: ["Financial consulting", "Graphic design", "Marketing strategies", "Business writing"],
            a: "Graphic design",
            why: "Suy luận: seminar của Emilio Costa — tác giả các sách 'GRAPHIC-DESIGN books' (Logos, Branding Strategies in Graphic Design, Web Design...) → chủ đề thiết kế đồ họa." },
          { n: 187, q: "What is suggested about Mr. Morgan?",
            options: ["He attended the seminar with a coworker.", "He gave a presentation at the seminar.", "He received free shipping on a book purchase.", "He paid for some books in advance."],
            a: "He received free shipping on a book purchase.",
            why: "Liên kết email 1 + thông báo: ông đặt sách 'Branding Strategies in Graphic Design' (có trong đơn hàng) — đúng cuốn bị hết tại seminar → sách được 'mailed to your home AT NO COST TO YOU' = miễn phí vận chuyển. (D) sai — thanh toán tại quầy check-in/khi giao hàng, không trả trước." },
          { n: 188, q: "What is the purpose of the notice?",
            options: ["To explain a problem", "To ask for volunteers", "To request payment", "To promote a book"],
            a: "To explain a problem",
            why: "Thông báo mở đầu bằng 'Unfortunately, we do not have copies...' rồi đưa cách giải quyết (gửi sách về nhà) và xin lỗi → mục đích là GIẢI THÍCH SỰ CỐ hết sách. Không phải tuyển tình nguyện viên (B) hay quảng bá sách (D)." },
          { n: 189, q: "According to the second e-mail, what does Mr. Morgan suggest changing?",
            options: ["The deadline for submitting a project", "The content of a book review", "The time of a scheduled meeting", "The display of some information"],
            a: "The display of some information",
            why: "Dẫn chứng email 2: 'I would like to RETHINK HOW WE ARE PRESENTING OUR DATA' = xem lại cách trình bày dữ liệu → paraphrase thành 'the display of some information'." },
          { n: 190, q: "How much did Mr. Morgan spend on the book he showed to Ms. Tsu?",
            options: ["$17.60", "$14.40", "$16.00", "$22.40"],
            a: "$17.60",
            why: "Suy luận 3 văn bản: sách ông cho Ms. Tsu xem 'gives great advice on improving the CLARITY of financial information' = nói về trình bày DỮ LIỆU → là cuốn 'Perfected Figures: Making DATA Visually Appealing'. Giá ông trả = giá GIẢM trong đơn hàng = $17.60. Bẫy $22.40 là giá cuốn Branding Strategies." },
        ],
      },
      {
        title: "Questions 191-195 refer to the following article, e-mail, and plan.",
        passage: `[BÀI BÁO]
Anton Building

Clanton (12 October) — The planned renovation of the historic Anton Building by Jantuni Property Developers (JPD) is facing new delays. A JPD spokesperson says their negotiations with the city regarding a package of subsidies and tax incentives are ongoing and are proving somewhat contentious. According to the renovation plan, JPD must protect the historical integrity of the Anton Building while it creates a mixed-use interior, offering both office space and lower-level retail space. However, JPD's city permit to do the project is on hold pending the current negotiations.

This is making city revitalization advocates increasingly anxious. Aditi Yadav comments, "This plan to create useful space out of an empty decaying building will go a long way to restoring vibrancy to that area of the city. I sincerely hope that JPD does not back out. In creating their offer, the City Council should consider JPD's excellent record of beautifully restoring and maintaining several other historic buildings in Clanton."

[EMAIL]
From: anabautista@lenoiva-health.com
To: t.rowell@jantunipropertydevelopers.com
Date: 20 February
Subject: Lease inquiry

Dear Mr. Rowell,

I am the owner of Lenoiva, a health-care technology company. We plan to expand our operations and we need new office space. The Anton Building is one of the locations in Clanton that we are considering. We have been informed that your restoration project of this building will be finished sometime this spring, which is good timing for us. We are particularly attracted by the easy access to public transportation services that your building offers. Do you still have spaces available for rent? We anticipate needing a space at least 300 square metres in size. Would there be any reserved parking for our employees if we rented there? We would appreciate any information you can provide.

Thank you in advance,
Ana Bautista

[SƠ ĐỒ MẶT BẰNG]
One Anton Place — 2nd Floor Plan (office space)
| Unit 2A | 350 m² | T&M Accountancy |
| Unit 2B | 150 m² | Available |
| Unit 2C | 100 m² | Available |
| Unit 2D | 250 m² | Available |
| Unit 2E | 375 m² | Available |`,
        questions: [
          { n: 191, q: "What is the purpose of the article?",
            options: ["To report on the benefits of mixed-use buildings", "To provide an update on a project", "To encourage residents to apply for jobs", "To announce a change in city policy"],
            a: "To provide an update on a project",
            why: "Bài báo cập nhật tình hình dự án cải tạo Anton Building: 'is facing NEW DELAYS', đàm phán đang diễn ra, giấy phép đang treo → BẢN TIN CẬP NHẬT tiến độ dự án." },
          { n: 192, q: "What positive aspect of the Anton Building does Ms. Yadav mention?",
            options: ["Its cost efficiency", "Its compliance with environmental standards", "The anticipated quality of the renovation work", "The large amount of retail space"],
            a: "The anticipated quality of the renovation work",
            why: "Dẫn chứng lời Ms. Yadav: 'JPD's EXCELLENT RECORD of BEAUTIFULLY RESTORING and maintaining several other historic buildings' → bà kỳ vọng chất lượng cải tạo cao dựa trên thành tích của JPD." },
          { n: 193, q: "What is suggested about JPD in Ms. Bautista's e-mail?",
            options: ["It received the approval it was seeking.", "It has the only available office spaces for rent in Clanton.", "It has moved its main office to the Anton Building.", "It is a relatively new company."],
            a: "It received the approval it was seeking.",
            why: "Suy luận liên kết 2 văn bản: bài báo (tháng 10) nói giấy phép ĐANG TREO chờ đàm phán; email (20/2) nói dự án 'will be FINISHED sometime this spring' → dự án đã tiến hành = JPD đã được cấp phép/đạt thỏa thuận. Dạng câu hỏi so sánh thông tin trước–sau giữa 2 văn bản." },
          { n: 194, q: "What information about the building does Ms. Bautista request from Mr. Rowell?",
            options: ["The distance to the nearest train station", "The other occupants' types of business", "The completion date of the renovation", "The availability of employee parking"],
            a: "The availability of employee parking",
            why: "Dẫn chứng câu hỏi trong email: 'Would there be any RESERVED PARKING for our employees if we rented there?' → hỏi về chỗ đậu xe cho nhân viên. (C) bẫy — ngày hoàn thành bà ĐÃ BIẾT ('We have been informed... finished this spring'), không phải điều bà hỏi." },
          { n: 195, q: "What space would Lenoiva most likely choose to rent?",
            options: ["Unit 2B", "Unit 2C", "Unit 2D", "Unit 2E"],
            a: "Unit 2E",
            why: "Liên kết email + sơ đồ: cần 'AT LEAST 300 square metres' + còn trống. 2B (150m²), 2C (100m²), 2D (250m²) đều < 300m²; 2A (350m²) đủ nhưng ĐÃ CÓ T&M Accountancy thuê → chỉ Unit 2E (375m², Available) thỏa cả 2 điều kiện." },
        ],
      },
      {
        title: "Questions 196-200 refer to the following e-mails and price list.",
        passage: `[EMAIL 1]
From: Tanya Jefferson <tjeff@keysuppliers.com>
To: info@danestongear.com
Subject: Request for group rental information
Date: May 29

Hello Daneston Gear Company (DGC),

I am the president of an activities club. This month, our 30 members intend to take a day trip to Daneston to go boating on the lake. Could you please send me information regarding your rates and offerings? We are most interested in renting boats that seat one person. Some time ago, I rented a kayak for myself from DGC, but this will be my first time renting from DGC for a group.

Thank you,
Tanya Jefferson

[EMAIL 2]
From: info@danestongear.com
To: Tanya Jefferson <tjeff@keysuppliers.com>
Subject: RE: Request for group rental information
Date: May 30
Attachment: Price list

Dear Ms. Jefferson,

Thank you for contacting us regarding your group's anticipated visit to DGC. We look forward to equipping your club for its next adventure. A price list is attached to this e-mail. If you wish to discuss our rentals in more detail, please call me at (888) 555-1578. Incidentally, we recently added a rowboat option that is an excellent choice for adults who wish to boat with their children.

I will be pleased to help you when you are ready to make your reservation.

Best,
Adam Goldstein

[BẢNG GIÁ — DGC Price list]
| Option | Loại thuyền | Giá/giờ | Thêm 1/2 giờ |
| Option 1 | 2-person canoe | $15 | $8 |
| Option 2 | 1-person kayak | $11 | $8 |
| Option 3 | (bản in gốc mờ — thuyền 2 chỗ) | — | — |
| Option 4 | 2-person kayak | $14 | $9 |
| Option 5 | 3- or 4-person rowboat (3 adults or 2 adults and 2 small children) | $13 | $9 |

• We are open every day from April to October, 10:00 A.M. to 6:30 P.M.
• All boats must be returned by 6:15 P.M. on the day they are rented.
• Life jackets and paddles are included in the rental fee.
• Groups of ten or more qualify for a discount if they book at least one week in advance.`,
        questions: [
          { n: 196, q: "What does Ms. Jefferson mention in the first e-mail?",
            options: ["She has used DGC's services before.", "She teaches a course in boating safety.", "She is a resident of Daneston.", "She owns her own kayak."],
            a: "She has used DGC's services before.",
            why: "Dẫn chứng: 'Some time ago, I RENTED a kayak for myself FROM DGC' → bà từng dùng dịch vụ của DGC. (D) bẫy: bà THUÊ kayak chứ không SỞ HỮU." },
          { n: 197, q: "What rental option best meets Ms. Jefferson's needs?",
            options: ["Option 1", "Option 2", "Option 3", "Option 4"],
            a: "Option 2",
            why: "Liên kết email + bảng giá: 'We are most interested in renting boats that seat ONE PERSON' → 1-person kayak = Option 2. Các option khác đều là thuyền 2+ người." },
          { n: 198, q: "What is the hourly rate of DGC's newest rental option?",
            options: ["$11", "$13", "$14", "$15"],
            a: "$13",
            why: "Liên kết email 2 + bảng giá: 'we RECENTLY ADDED a ROWBOAT option' → option mới nhất = rowboat (Option 5) → giá theo giờ $13. Phải ghép 'recently added' với đúng dòng trong bảng." },
          { n: 199, q: "What is indicated about DGC in the price list?",
            options: ["It is open for business all year.", "It may close for the day if the weather is bad.", "It offers special rates for groups of ten or more.", "It accepts reservations on its Web site."],
            a: "It offers special rates for groups of ten or more.",
            why: "Dẫn chứng: 'Groups of TEN OR MORE qualify for a DISCOUNT if they book at least one week in advance'. (A) sai — chỉ mở từ tháng 4 đến tháng 10, không phải quanh năm." },
          { n: 200, q: "According to the price list, what is true about all boats?",
            options: ["They can fit three adults.", "They can be rented overnight.", "They are suitable for small children.", "They are equipped with life jackets."],
            a: "They are equipped with life jackets.",
            why: "Dẫn chứng: 'LIFE JACKETS and paddles are INCLUDED in the rental fee' — áp dụng mọi thuyền. (A) chỉ rowboat chở được 3 người lớn; (B) sai — phải trả thuyền trước 6:15 PM trong ngày; (C) chỉ rowboat phù hợp trẻ nhỏ." },
        ],
      },
    ],
  },
];
