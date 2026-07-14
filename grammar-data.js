// ============================================================
//  15 CHỦ ĐIỂM NGỮ PHÁP TOEIC — dạng PATTERN (Input→Pattern→Output)
//  Mỗi topic: id, name, pattern (công thức), tip (mẹo nhận diện),
//             drills[] = {q (có ___), options[4], a (đáp án), why (cue ngắn)}
//  Triết lý: nhìn dấu hiệu -> chọn. Không cần giải thích dài.
// ============================================================
const GRAMMAR = [
  {
    id:"wordform", name:"1. Từ loại (Word form)",
    pattern:"the/a/adj + [DANH TỪ]  •  be/động từ + [TRẠNG TỪ]  •  [TÍNH TỪ] + danh từ  •  chủ ngữ + [ĐỘNG TỪ]",
    tip:"Nhìn TỪ ĐỨNG TRƯỚC chỗ trống. Sau 'the/a/tính từ' → DANH TỪ. Sau động từ/tính từ đủ nghĩa → TRẠNG TỪ (đuôi -ly). Trước danh từ → TÍNH TỪ.",
    drills:[
      {q:"The manager gave a very ___ presentation.", options:["impress","impressed","impressive","impressively"], a:"impressive", why:"a + ___ + danh từ → tính từ"},
      {q:"The team worked ___ to finish the project.", options:["efficient","efficiently","efficiency","efficacious"], a:"efficiently", why:"sau động từ → trạng từ -ly"},
      {q:"We need to improve customer ___.", options:["satisfy","satisfied","satisfaction","satisfactorily"], a:"satisfaction", why:"sau danh từ 'customer' cần danh từ ghép → danh từ"},
      {q:"Her proposal was highly ___.", options:["succeed","success","successful","successfully"], a:"successful", why:"be + trạng từ + ___ → tính từ"},
      {q:"The ___ of the report is due Friday.", options:["complete","completely","completion","completed"], a:"completion", why:"the + ___ → danh từ"}
    ]
  },
  {
    id:"tense", name:"2. Thì động từ (Tenses)",
    pattern:"yesterday/ago/last → QUÁ KHỨ  •  now/currently → V-ing  •  since/for/already → HAVE + P.P.  •  tomorrow/next → will V",
    tip:"Tìm TRẠNG TỪ THỜI GIAN làm mốc. Since/for → hiện tại hoàn thành. Now → tiếp diễn. Next/tomorrow → tương lai.",
    drills:[
      {q:"The shipment ___ yesterday.", options:["arrives","arrived","will arrive","has arrived"], a:"arrived", why:"yesterday → quá khứ đơn"},
      {q:"She ___ for this company since 2015.", options:["works","worked","has worked","will work"], a:"has worked", why:"since → hiện tại hoàn thành"},
      {q:"They are ___ a meeting right now.", options:["hold","holds","holding","held"], a:"holding", why:"are + ___ (now) → V-ing"},
      {q:"We ___ the new office next month.", options:["open","opened","will open","have opened"], a:"will open", why:"next month → tương lai"},
      {q:"He ___ already ___ the report.", options:["has / submitted","have / submit","is / submitting","did / submit"], a:"has / submitted", why:"already → have/has + P.P."}
    ]
  },
  {
    id:"relative", name:"3. Mệnh đề quan hệ (Relative clauses)",
    pattern:"người → who/whom  •  vật → which  •  người+vật/thay cả 2 → that  •  sở hữu → whose  •  nơi chốn → where",
    tip:"Nhìn DANH TỪ ĐỨNG TRƯỚC chỗ trống: người→who, vật→which, có 'of/sở hữu'→whose, địa điểm→where.",
    drills:[
      {q:"The employee ___ won the award is my colleague.", options:["which","who","whose","where"], a:"who", why:"người + làm chủ ngữ → who"},
      {q:"The product ___ we launched sells well.", options:["who","whom","which","whose"], a:"which", why:"vật → which"},
      {q:"This is the manager ___ office is on floor 3.", options:["who","which","whose","where"], a:"whose", why:"sở hữu 'office' → whose"},
      {q:"The city ___ the conference is held is Tokyo.", options:["which","where","who","that"], a:"where", why:"nơi chốn → where"},
      {q:"The candidate ___ we interviewed was excellent.", options:["who","whom","which","whose"], a:"whom", why:"người + làm tân ngữ → whom"}
    ]
  },
  {
    id:"conjunction", name:"4. Liên từ tương quan (Correlative)",
    pattern:"both A and B  •  either A or B  •  neither A nor B  •  not only A but also B  •  between A and B",
    tip:"Đây là các cặp CỐ ĐỊNH. Thấy 'neither' → tìm 'nor'. Thấy 'not only' → tìm 'but also'. Thấy 'both' → 'and'.",
    drills:[
      {q:"Neither the manager ___ the staff were informed.", options:["or","nor","and","but"], a:"nor", why:"neither ... nor (cặp cố định)"},
      {q:"You can pay by ___ cash or card.", options:["both","neither","either","not only"], a:"either", why:"either ... or"},
      {q:"The plan is not only cheap ___ also effective.", options:["and","or","but","nor"], a:"but", why:"not only ... but also"},
      {q:"___ Tom and Jerry attended the seminar.", options:["Either","Neither","Both","Not only"], a:"Both", why:"both ... and"},
      {q:"Choose ___ the red or the blue design.", options:["both","either","neither","and"], a:"either", why:"either ... or"}
    ]
  },
  {
    id:"agreement", name:"5. Hòa hợp chủ–vị (S–V agreement)",
    pattern:"Neither A nor B + V chia theo B  •  Either A or B → theo B  •  Both A and B → số nhiều  •  Each/Every + V số ít",
    tip:"Với neither/either...nor/or → động từ chia theo DANH TỪ GẦN NHẤT (B). Each/every/everyone → số ít.",
    drills:[
      {q:"Neither Tom nor his friends ___ coming.", options:["is","are","was","has"], a:"are", why:"chia theo B (his friends = số nhiều)"},
      {q:"Either the students or the teacher ___ wrong.", options:["are","were","is","have"], a:"is", why:"chia theo B (the teacher = số ít)"},
      {q:"Each of the employees ___ a badge.", options:["have","has","are","were"], a:"has", why:"each → số ít"},
      {q:"Both managers ___ the proposal.", options:["approves","approve","approving","approval"], a:"approve", why:"both → số nhiều"},
      {q:"Every participant ___ a certificate.", options:["receive","receives","receiving","are receiving"], a:"receives", why:"every → số ít"}
    ]
  },
  {
    id:"preposition", name:"6. Giới từ (Prepositions)",
    pattern:"in + tháng/năm  •  on + ngày/thứ  •  at + giờ  •  by + hạn chót  •  for + khoảng time  •  since + mốc time",
    tip:"in (lớn: năm/tháng) > on (ngày) > at (giờ). 'by' = trước/đúng hạn. 'until' = cho đến khi.",
    drills:[
      {q:"The meeting starts ___ 9 a.m.", options:["in","on","at","by"], a:"at", why:"at + giờ"},
      {q:"Please submit the form ___ Friday.", options:["in","by","at","since"], a:"by", why:"by + hạn chót"},
      {q:"The office opened ___ 2010.", options:["on","at","in","by"], a:"in", why:"in + năm"},
      {q:"We have worked here ___ five years.", options:["since","for","in","at"], a:"for", why:"for + khoảng thời gian"},
      {q:"The event is ___ Monday.", options:["in","on","at","by"], a:"on", why:"on + thứ/ngày"}
    ]
  },
  {
    id:"gerund", name:"7. Danh động từ (Gerund V-ing)",
    pattern:"giới từ + V-ing  •  enjoy/finish/avoid/consider/suggest + V-ing  •  look forward to + V-ing  •  be interested in + V-ing",
    tip:"Sau GIỚI TỪ (in/on/of/at/to trong cụm) → V-ing. Sau enjoy/avoid/finish/consider/suggest → V-ing.",
    drills:[
      {q:"We are interested in ___ your product.", options:["buy","to buy","buying","bought"], a:"buying", why:"giới từ in + V-ing"},
      {q:"They finished ___ the report.", options:["write","to write","writing","written"], a:"writing", why:"finish + V-ing"},
      {q:"I look forward to ___ from you.", options:["hear","hearing","heard","to hear"], a:"hearing", why:"look forward TO + V-ing"},
      {q:"Please avoid ___ during the presentation.", options:["talk","to talk","talking","talked"], a:"talking", why:"avoid + V-ing"},
      {q:"He suggested ___ the meeting.", options:["postpone","to postpone","postponing","postponed"], a:"postponing", why:"suggest + V-ing"}
    ]
  },
  {
    id:"infinitive", name:"8. Động từ nguyên mẫu (to V)",
    pattern:"want/need/decide/plan/hope/agree + to V  •  in order to V (để)  •  too ... to V  •  enough to V",
    tip:"Sau want/need/decide/plan/hope/would like/agree → to V. 'để' làm gì → in order to / to V.",
    drills:[
      {q:"We decided ___ the launch date.", options:["change","to change","changing","changed"], a:"to change", why:"decide + to V"},
      {q:"She wants ___ a manager.", options:["become","to become","becoming","became"], a:"to become", why:"want + to V"},
      {q:"He worked hard in order ___ the deadline.", options:["meet","to meet","meeting","met"], a:"to meet", why:"in order to V"},
      {q:"The company plans ___ next year.", options:["expand","to expand","expanding","expanded"], a:"to expand", why:"plan + to V"},
      {q:"They agreed ___ the contract.", options:["sign","to sign","signing","signed"], a:"to sign", why:"agree + to V"}
    ]
  },
  {
    id:"passive", name:"9. Chủ động / Bị động (Passive)",
    pattern:"CHỦ ĐỘNG: S + V + O  •  BỊ ĐỘNG: S + be + P.P. (+ by)  •  vật/không nêu người làm → dùng bị động",
    tip:"Nếu chủ ngữ KHÔNG tự làm hành động (vật bị tác động) → be + P.P. Thấy 'by' → bị động.",
    drills:[
      {q:"The report ___ by the manager yesterday.", options:["wrote","was written","has written","writes"], a:"was written", why:"report bị viết + by → bị động"},
      {q:"The products ___ every day.", options:["inspect","inspects","are inspected","inspecting"], a:"are inspected", why:"products bị kiểm tra → be + P.P."},
      {q:"The staff ___ the new rule last week.", options:["was told","told","were told","tell"], a:"were told", why:"staff (số nhiều) bị thông báo → were + P.P."},
      {q:"The building ___ in 1990.", options:["built","was built","builds","building"], a:"was built", why:"building bị xây → bị động"},
      {q:"All applications ___ carefully.", options:["review","reviews","are reviewed","reviewing"], a:"are reviewed", why:"applications bị xem → be + P.P."}
    ]
  },
  {
    id:"comparison", name:"10. So sánh (Comparison)",
    pattern:"than → so sánh hơn (-er/more)  •  the + -est/most → nhất  •  as ... as → bằng  •  the more ... the more",
    tip:"Thấy 'than' → hơn (-er / more). Thấy 'the' + ___ + 'in/of' → nhất (-est/most). 'as ___ as' → nguyên cấp.",
    drills:[
      {q:"This model is ___ than the old one.", options:["cheap","cheaper","cheapest","more cheap"], a:"cheaper", why:"than → so sánh hơn"},
      {q:"It is the ___ product in the store.", options:["expensive","more expensive","most expensive","expensively"], a:"most expensive", why:"the ... in → so sánh nhất"},
      {q:"Sales this year are ___ as last year.", options:["high","higher","as high","highest"], a:"as high", why:"as ___ as → bằng"},
      {q:"He works ___ than his colleagues.", options:["hard","harder","hardest","hardly"], a:"harder", why:"than → -er"},
      {q:"This is the ___ solution of all.", options:["good","better","best","well"], a:"best", why:"the ___ of all → nhất"}
    ]
  },
  {
    id:"pronoun", name:"11. Đại từ (Pronouns)",
    pattern:"chủ ngữ: I/he/they  •  tân ngữ: me/him/them  •  sở hữu: my/his/their  •  sở hữu đứng 1 mình: mine/his/theirs  •  phản thân: -self",
    tip:"Trước danh từ → sở hữu (my/his/their). Sau động từ/giới từ → tân ngữ (me/him). Làm chủ ngữ → I/he/they.",
    drills:[
      {q:"The manager praised ___ for the good work.", options:["they","them","their","theirs"], a:"them", why:"sau động từ → tân ngữ"},
      {q:"Please submit ___ report by noon.", options:["you","your","yours","yourself"], a:"your", why:"trước danh từ → sở hữu"},
      {q:"This desk is ___.", options:["my","mine","me","myself"], a:"mine", why:"đứng 1 mình → mine"},
      {q:"She finished the project by ___.", options:["her","hers","herself","she"], a:"herself", why:"by + -self → tự mình"},
      {q:"___ are responsible for the results.", options:["Us","Our","We","Ours"], a:"We", why:"làm chủ ngữ → We"}
    ]
  },
  {
    id:"conditional", name:"12. Câu điều kiện (Conditionals)",
    pattern:"Loại 1: If + V(s), will V  •  Loại 2: If + V-ed/were, would V  •  Loại 3: If + had P.P., would have P.P.",
    tip:"if hiện tại → mệnh đề chính 'will'. if quá khứ (were) → 'would'. if had+P.P. → 'would have P.P.'.",
    drills:[
      {q:"If it rains, we ___ the event.", options:["cancel","will cancel","would cancel","cancelled"], a:"will cancel", why:"if + V(s) → will V (loại 1)"},
      {q:"If I ___ you, I would accept the offer.", options:["am","was","were","be"], a:"were", why:"loại 2 → if I were"},
      {q:"If they had called, we ___ helped.", options:["will have","would have","had","have"], a:"would have", why:"loại 3 → would have P.P."},
      {q:"She would buy it if she ___ enough money.", options:["has","had","have","will have"], a:"had", why:"loại 2 → if + quá khứ"},
      {q:"If you finish early, you ___ leave.", options:["can","could","would","might have"], a:"can", why:"loại 1 → hiện tại/can"}
    ]
  },
  {
    id:"subordinate", name:"13. Liên từ phụ thuộc (although/because/despite)",
    pattern:"because/since + MỆNH ĐỀ (S+V) = vì  •  because of/despite + DANH TỪ  •  although + S+V = mặc dù  •  so that = để",
    tip:"Sau chỗ trống là MỆNH ĐỀ (S+V) → because/although/since. Sau là DANH TỪ → because of/despite/due to.",
    drills:[
      {q:"___ it was raining, the event continued.", options:["Despite","Although","Because of","During"], a:"Although", why:"+ mệnh đề, ý nhượng bộ → although"},
      {q:"The flight was delayed ___ the storm.", options:["because","although","because of","despite of"], a:"because of", why:"+ danh từ 'the storm'"},
      {q:"___ the high price, the product sold well.", options:["Although","Because","Despite","Since"], a:"Despite", why:"+ danh từ, ý nhượng bộ → despite"},
      {q:"We stayed late ___ we could finish.", options:["because of","so that","despite","although"], a:"so that", why:"so that = để"},
      {q:"___ she was tired, she kept working.", options:["Despite","Because of","Even though","Due to"], a:"Even though", why:"+ mệnh đề → even though"}
    ]
  },
  {
    id:"quantifier", name:"14. Lượng từ (much/many/few...)",
    pattern:"đếm được số nhiều: many/few/a few/several  •  không đếm được: much/little/a little  •  cả 2: some/any/a lot of/plenty of",
    tip:"Danh từ có 's' (đếm được) → many/few. Danh từ không đếm (information, equipment, money) → much/little.",
    drills:[
      {q:"There are ___ applicants this year.", options:["much","many","little","a little"], a:"many", why:"applicants (đếm được số nhiều) → many"},
      {q:"We don't have ___ information.", options:["many","few","much","a few"], a:"much", why:"information (không đếm) → much"},
      {q:"Only ___ employees attended.", options:["much","a little","a few","little"], a:"a few", why:"employees đếm được → a few"},
      {q:"He has ___ experience in sales.", options:["many","a few","little","few"], a:"little", why:"experience (không đếm) → little"},
      {q:"There is ___ equipment in the room.", options:["many","several","a lot of","few"], a:"a lot of", why:"equipment không đếm → a lot of"}
    ]
  },
  {
    id:"article", name:"15. Mạo từ (a / an / the)",
    pattern:"a + phụ âm  •  an + nguyên âm (a,e,i,o,u)  •  the + vật đã xác định / duy nhất  •  Ø (không mạo từ) + danh từ số nhiều/không đếm chung chung",
    tip:"Lần đầu nhắc, số ít, chung chung → a/an. Đã xác định / nói lại → the. Danh từ chung số nhiều → không cần mạo từ.",
    drills:[
      {q:"She is ___ honest employee.", options:["a","an","the","(none)"], a:"an", why:"'honest' âm /o/ (h câm) → an"},
      {q:"Please close ___ door.", options:["a","an","the","(none)"], a:"the", why:"cái cửa xác định → the"},
      {q:"We need ___ new printer.", options:["a","an","the","(none)"], a:"a", why:"lần đầu, phụ âm → a"},
      {q:"___ employees must wear badges.", options:["A","An","The","(none)"], a:"(none)", why:"danh từ số nhiều chung → không mạo từ"},
      {q:"He bought ___ umbrella.", options:["a","an","the","(none)"], a:"an", why:"umbrella âm nguyên âm → an"}
    ]
  }
];
