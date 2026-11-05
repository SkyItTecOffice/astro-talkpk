import type { L } from "./i18n";

export type Service = {
  slug: string;
  title: L;
  short: L;
  long: L;
  includes: L[];
};

// TODO: replace with the real services, descriptions and wording.
export const services: Service[] = [
  {
    slug: "istikhara",
    title: { en: "Istikhara Guidance", ur: "استخارہ رہنمائی" },
    short: {
      en: "Seek Allah's guidance before an important decision, with proper method and understanding.",
      ur: "اہم فیصلے سے پہلے درست طریقے اور سمجھ کے ساتھ اللہ سے رہنمائی طلب کریں۔",
    },
    long: {
      en: "Istikhara is the prayer of seeking the best from Allah when you are unsure. In this consultation we explain the Sunnah method, help you frame your question clearly, and guide you in reading your own heart and circumstances afterwards.",
      ur: "استخارہ وہ دعا ہے جس میں انسان الجھن کے وقت اللہ سے بہتری مانگتا ہے۔ اس مشاورت میں ہم سنت طریقہ سمجھاتے ہیں، سوال واضح کرنے میں مدد کرتے ہیں اور بعد میں اپنے دل اور حالات کو پرکھنے کی رہنمائی دیتے ہیں۔",
    },
    includes: [
      { en: "Step-by-step Istikhara method", ur: "استخارہ کا مرحلہ وار طریقہ" },
      { en: "Help framing your question", ur: "سوال کو واضح کرنے میں مدد" },
      { en: "Guidance on interpreting the outcome", ur: "نتیجہ سمجھنے کی رہنمائی" },
    ],
  },
  {
    slug: "ilm-ul-adad",
    title: { en: "Ilm-ul-Adad (Numerology)", ur: "علم الاعداد" },
    short: {
      en: "Understand the numbers linked to your name and date of birth, based on traditional Islamic numerology.",
      ur: "روایتی اسلامی علم الاعداد کی روشنی میں اپنے نام اور تاریخِ پیدائش کے اعداد کو سمجھیں۔",
    },
    long: {
      en: "Ilm-ul-Adad studies the numerical values of letters and names. We prepare a reading from your name and date of birth, explain its themes in plain language, and suggest practical steps for focus, habits and timing.",
      ur: "علم الاعداد میں حروف اور ناموں کی عددی قدروں کا مطالعہ کیا جاتا ہے۔ ہم آپ کے نام اور تاریخِ پیدائش سے ریڈنگ تیار کرتے ہیں، اسے آسان زبان میں سمجھاتے ہیں اور توجہ، عادات اور وقت کے بارے میں عملی مشورہ دیتے ہیں۔",
    },
    includes: [
      { en: "Name and birth-date number reading", ur: "نام اور تاریخِ پیدائش کے اعداد کی ریڈنگ" },
      { en: "Strengths and areas to work on", ur: "خوبیاں اور بہتری کے پہلو" },
      { en: "Practical suggestions", ur: "عملی تجاویز" },
    ],
  },
  {
    slug: "rishta-marriage",
    title: { en: "Rishta & Marriage Guidance", ur: "رشتہ اور شادی کی رہنمائی" },
    short: {
      en: "Calm, balanced guidance for proposals, compatibility questions and delays in marriage.",
      ur: "رشتوں، ہم آہنگی کے سوالات اور شادی میں تاخیر کے لیے پُرسکون اور متوازن رہنمائی۔",
    },
    long: {
      en: "Choosing a spouse is one of life's biggest decisions. We look at compatibility using traditional methods, but always remind families to weigh character, deen and honesty first, and to combine Istikhara with consultation.",
      ur: "ہمسفر کا انتخاب زندگی کے بڑے فیصلوں میں سے ہے۔ ہم روایتی طریقوں سے ہم آہنگی دیکھتے ہیں، مگر خاندانوں کو ہمیشہ یاد دلاتے ہیں کہ کردار، دین داری اور سچائی کو اولیت دیں اور استخارہ کے ساتھ مشورہ بھی کریں۔",
    },
    includes: [
      { en: "Compatibility reading for two names", ur: "دو ناموں کی ہم آہنگی کی ریڈنگ" },
      { en: "Guidance for delayed marriage", ur: "شادی میں تاخیر پر رہنمائی" },
      { en: "Family-friendly advice", ur: "خاندان کے لیے مناسب مشورہ" },
    ],
  },
  {
    slug: "rizq-business",
    title: { en: "Rizq & Business Guidance", ur: "رزق اور کاروبار کی رہنمائی" },
    short: {
      en: "Guidance on livelihood, job changes and business decisions, along with duas and habits for barakah.",
      ur: "روزگار، ملازمت کی تبدیلی اور کاروباری فیصلوں پر رہنمائی، ساتھ برکت کے لیے دعائیں اور معمولات۔",
    },
    long: {
      en: "When work or income feels stuck, clarity helps. We review your situation, suggest sensible timing, and share authentic duas and habits for barakah in rizq, such as halal earning, gratitude and consistent effort.",
      ur: "جب کام یا آمدنی رکی ہوئی محسوس ہو تو وضاحت مدد دیتی ہے۔ ہم آپ کی صورتِ حال کا جائزہ لیتے ہیں، مناسب وقت کا مشورہ دیتے ہیں اور رزق میں برکت کے لیے مستند دعائیں اور معمولات بتاتے ہیں جیسے حلال کمائی، شکر اور مسلسل کوشش۔",
    },
    includes: [
      { en: "Review of your work or business question", ur: "کام یا کاروبار کے سوال کا جائزہ" },
      { en: "Duas and habits for barakah", ur: "برکت کے لیے دعائیں اور معمولات" },
      { en: "Timing suggestions", ur: "وقت کے بارے میں تجاویز" },
    ],
  },
  {
    slug: "baby-names",
    title: { en: "Islamic Baby Names", ur: "بچوں کے اسلامی نام" },
    short: {
      en: "Beautiful, meaningful names for your newborn, matched with numerology on request.",
      ur: "نومولود کے لیے خوبصورت بامعنی نام، درخواست پر علم الاعداد کے مطابق۔",
    },
    long: {
      en: "A name carries meaning and hope. We suggest Islamic names with clear meanings and correct pronunciation, and, if you wish, show how each name relates to the child's date of birth in numerology.",
      ur: "نام اپنے اندر معنی اور امید رکھتا ہے۔ ہم واضح معنی اور درست تلفظ کے ساتھ اسلامی نام تجویز کرتے ہیں اور چاہیں تو ہر نام کا بچے کی تاریخِ پیدائش سے علم الاعداد میں تعلق بھی بتاتے ہیں۔",
    },
    includes: [
      { en: "A shortlist of names with meanings", ur: "معنی کے ساتھ ناموں کی مختصر فہرست" },
      { en: "Pronunciation and Arabic spelling", ur: "تلفظ اور عربی املا" },
      { en: "Optional numerology match", ur: "اختیاری علم الاعداد مطابقت" },
    ],
  },
  {
    slug: "wazaif-dua",
    title: { en: "Wazaif & Dua Consultation", ur: "وظائف اور دعاؤں کی مشاورت" },
    short: {
      en: "Authentic duas and wazaif from the Qur'an and Sunnah for worry, health, home and family.",
      ur: "پریشانی، صحت، گھر اور خاندان کے لیے قرآن و سنت سے مستند دعائیں اور وظائف۔",
    },
    long: {
      en: "We recommend only duas and wazaif with a sound basis in the Qur'an and Sunnah, explain how and when to recite them, and gently steer you away from practices that conflict with tawhid.",
      ur: "ہم صرف وہی دعائیں اور وظائف تجویز کرتے ہیں جن کی قرآن و سنت میں مضبوط بنیاد ہو، پڑھنے کا طریقہ اور وقت سمجھاتے ہیں اور توحید سے متصادم عملیات سے نرمی کے ساتھ بچنے کی رہنمائی کرتے ہیں۔",
    },
    includes: [
      { en: "Authentic duas with translation", ur: "ترجمے کے ساتھ مستند دعائیں" },
      { en: "How and when to recite", ur: "پڑھنے کا طریقہ اور وقت" },
      { en: "Follow-up questions answered", ur: "بعد کے سوالات کے جوابات" },
    ],
  },
];

export type Astrologer = { id: string; name: L; title: L; langs: L };

// TODO: replace with real astrologer profiles (no fake credentials).
export const astrologers: Astrologer[] = [
  { id: "a1", name: { en: "Astrologer Name 1", ur: "ماہر کا نام ۱" }, title: { en: "Senior Islamic Astrologer", ur: "سینئر اسلامی ماہرِ نجوم" }, langs: { en: "Urdu, English", ur: "اردو، انگریزی" } },
  { id: "a2", name: { en: "Astrologer Name 2", ur: "ماہر کا نام ۲" }, title: { en: "Ilm-ul-Adad Specialist", ur: "ماہرِ علم الاعداد" }, langs: { en: "Urdu, Punjabi", ur: "اردو، پنجابی" } },
  { id: "a3", name: { en: "Astrologer Name 3", ur: "ماہر کا نام ۳" }, title: { en: "Family & Marriage Counsellor", ur: "خاندانی و ازدواجی مشیر" }, langs: { en: "Urdu, English", ur: "اردو، انگریزی" } },
];

export type Testimonial = { name: L; city: L; text: L };

// TODO: replace with real, consented client reviews. Do not add Review schema until real.
export const testimonials: Testimonial[] = [
  {
    name: { en: "Client A.", ur: "کلائنٹ الف" },
    city: { en: "Karachi", ur: "کراچی" },
    text: { en: "The Istikhara explanation was clear and respectful. I finally felt at peace with my decision.", ur: "استخارہ کی وضاحت واضح اور باادب تھی۔ آخرکار اپنے فیصلے پر دل مطمئن ہوا۔" },
  },
  {
    name: { en: "Client B.", ur: "کلائنٹ ب" },
    city: { en: "Lahore", ur: "لاہور" },
    text: { en: "Honest, practical advice for our rishta, with no exaggerated promises.", ur: "ہمارے رشتے کے بارے میں سچا اور عملی مشورہ ملا، بڑھا چڑھا کر وعدے نہیں کیے گئے۔" },
  },
  {
    name: { en: "Client C.", ur: "کلائنٹ ج" },
    city: { en: "Islamabad", ur: "اسلام آباد" },
    text: { en: "Helpful numerology reading and good duas for my business. Very polite team.", ur: "علم الاعداد کی مفید ریڈنگ اور کاروبار کے لیے اچھی دعائیں ملیں۔ ٹیم نہایت شائستہ ہے۔" },
  },
];

export type Faq = { q: L; a: L };

export const faqs: Faq[] = [
  {
    q: { en: "Is Islamic astrology permissible?", ur: "کیا اسلامی علمِ نجوم جائز ہے؟" },
    a: {
      en: "Scholars differ on astrology. We do not claim to know the unseen, and we never promise outcomes. Our work focuses on Istikhara, authentic duas, numerology as a traditional reflective tool, and practical advice. Please consult a scholar you trust if you have concerns.",
      ur: "علمِ نجوم کے بارے میں علما کی آرا مختلف ہیں۔ ہم غیب جاننے کا دعویٰ نہیں کرتے اور نتائج کی ضمانت نہیں دیتے۔ ہمارا کام استخارہ، مستند دعاؤں، روایتی غور و فکر کے ذریعے کے طور پر علم الاعداد اور عملی مشورے پر مبنی ہے۔ کوئی اشکال ہو تو اپنے معتمد عالم سے رجوع کریں۔",
    },
  },
  {
    q: { en: "How do I book a consultation?", ur: "مشاورت کیسے بُک کروں؟" },
    a: {
      en: "Fill the booking form or message us on WhatsApp. We confirm the fee and a convenient time, then you speak with the astrologer by phone or video call.",
      ur: "بکنگ فارم بھریں یا واٹس ایپ پر پیغام کریں۔ ہم فیس اور مناسب وقت کی تصدیق کرتے ہیں، پھر آپ فون یا ویڈیو کال پر ماہر سے بات کرتے ہیں۔",
    },
  },
  {
    q: { en: "Are my details kept private?", ur: "کیا میری تفصیل خفیہ رہتی ہے؟" },
    a: {
      en: "Yes. Your questions and personal details are used only for your consultation and are never shared or published.",
      ur: "جی ہاں۔ آپ کے سوالات اور ذاتی تفصیل صرف آپ کی مشاورت کے لیے استعمال ہوتی ہے اور کسی کے ساتھ شیئر یا شائع نہیں کی جاتی۔",
    },
  },
  {
    q: { en: "Do you offer consultations outside Pakistan?", ur: "کیا آپ پاکستان سے باہر بھی مشاورت کرتے ہیں؟" },
    a: {
      en: "Yes. Consultations are online, so overseas Pakistanis can book from anywhere. We arrange timings across time zones.",
      ur: "جی ہاں۔ مشاورت آن لائن ہوتی ہے، اس لیے بیرونِ ملک پاکستانی بھی کہیں سے بُک کر سکتے ہیں۔ ہم مختلف ٹائم زونز کے مطابق وقت طے کرتے ہیں۔",
    },
  },
];

export type PostSection = { h: L; p: L };
export type Post = { slug: string; title: L; description: L; date: string; minutes: number; body: PostSection[] };

// TODO: replace/extend with your own articles.
export const posts: Post[] = [
  {
    slug: "how-to-pray-istikhara",
    title: { en: "How to Pray Istikhara: A Simple Step-by-Step Guide", ur: "استخارہ کیسے کریں: آسان مرحلہ وار رہنمائی" },
    description: {
      en: "Learn the Sunnah method of Istikhara, the dua, and how to understand the outcome without superstition.",
      ur: "استخارہ کا سنت طریقہ، دعا اور بغیر توہم کے نتیجہ سمجھنے کا طریقہ جانیں۔",
    },
    date: "2026-10-15",
    minutes: 4,
    body: [
      {
        h: { en: "What Istikhara means", ur: "استخارہ کا مطلب" },
        p: {
          en: "Istikhara means asking Allah for what is best. The Prophet (peace be upon him) taught it for matters where we are unsure, such as marriage, travel, work or a major purchase.",
          ur: "استخارہ کا مطلب اللہ سے بہتری مانگنا ہے۔ نبی کریم صلی اللہ علیہ وسلم نے یہ ان معاملات کے لیے سکھایا جن میں ہم الجھن میں ہوں، جیسے شادی، سفر، ملازمت یا کوئی بڑی خریداری۔",
        },
      },
      {
        h: { en: "The method", ur: "طریقہ" },
        p: {
          en: "Pray two rak'ahs of voluntary prayer, then recite the authentic Istikhara dua, mentioning your matter. Do this with sincerity and then proceed with consultation and effort.",
          ur: "دو رکعت نفل پڑھیں، پھر مستند دعائے استخارہ پڑھتے ہوئے اپنا معاملہ ذکر کریں۔ خلوص سے یہ کریں اور پھر مشورہ اور کوشش جاری رکھیں۔",
        },
      },
      {
        h: { en: "Understanding the result", ur: "نتیجہ سمجھنا" },
        p: {
          en: "Istikhara is not limited to dreams. Often the result is ease or difficulty in the matter, or a growing inclination of the heart. Take the step that becomes easier, and trust Allah's decree.",
          ur: "استخارہ کا نتیجہ خواب تک محدود نہیں۔ اکثر معاملے میں آسانی یا مشکل، یا دل کا میلان بڑھ جانا اس کا نتیجہ ہوتا ہے۔ جو قدم آسان ہو جائے اسے اٹھائیں اور اللہ کے فیصلے پر بھروسا رکھیں۔",
        },
      },
    ],
  },
  {
    slug: "what-is-ilm-ul-adad",
    title: { en: "What Is Ilm-ul-Adad? An Introduction to Islamic Numerology", ur: "علم الاعداد کیا ہے؟ اسلامی علمِ اعداد کا تعارف" },
    description: {
      en: "A beginner's introduction to Ilm-ul-Adad, how names and numbers are linked, and how to use it with the right intention.",
      ur: "علم الاعداد کا ابتدائی تعارف، ناموں اور اعداد کا تعلق اور درست نیت کے ساتھ اس کا استعمال۔",
    },
    date: "2026-10-22",
    minutes: 3,
    body: [
      {
        h: { en: "Letters and numbers", ur: "حروف اور اعداد" },
        p: {
          en: "In the traditional Abjad system each Arabic letter has a numerical value. Ilm-ul-Adad adds the values in a name or date to find a number that is then interpreted.",
          ur: "روایتی ابجد نظام میں ہر عربی حرف کی ایک عددی قدر ہوتی ہے۔ علم الاعداد میں کسی نام یا تاریخ کی قدریں جمع کر کے ایک عدد نکالا جاتا ہے جس کی تعبیر کی جاتی ہے۔",
        },
      },
      {
        h: { en: "A tool for reflection", ur: "غور و فکر کا ذریعہ" },
        p: {
          en: "We treat numerology as a reflective tool, not as a source of certain knowledge. It can help you notice your habits and strengths, but it never replaces effort, dua and tawakkul.",
          ur: "ہم علم الاعداد کو غور و فکر کا ذریعہ سمجھتے ہیں، یقینی علم کا ماخذ نہیں۔ یہ آپ کو اپنی عادات اور خوبیاں پہچاننے میں مدد دے سکتا ہے مگر کوشش، دعا اور توکل کا متبادل نہیں۔",
        },
      },
    ],
  },
  {
    slug: "choosing-a-spouse-islamic-guidance",
    title: { en: "Choosing a Spouse: What Islam Asks Us to Look For", ur: "ہمسفر کا انتخاب: اسلام ہم سے کیا دیکھنے کو کہتا ہے" },
    description: {
      en: "Practical guidance on rishta decisions: character, deen, consultation and Istikhara, before any compatibility reading.",
      ur: "رشتے کے فیصلوں پر عملی رہنمائی: کردار، دین داری، مشورہ اور استخارہ، کسی بھی ہم آہنگی ریڈنگ سے پہلے۔",
    },
    date: "2026-10-29",
    minutes: 3,
    body: [
      {
        h: { en: "Character and deen first", ur: "پہلے کردار اور دین داری" },
        p: {
          en: "The Prophet (peace be upon him) advised choosing a partner whose religion and character you are pleased with. Wealth, looks and status matter less than honesty and taqwa.",
          ur: "نبی کریم صلی اللہ علیہ وسلم نے ایسے شخص کو چننے کی نصیحت فرمائی جس کی دین داری اور اخلاق سے آپ مطمئن ہوں۔ مال، شکل اور حیثیت دیانت اور تقویٰ کے مقابلے میں کم اہم ہیں۔",
        },
      },
      {
        h: { en: "Consult, then pray", ur: "مشورہ کریں، پھر دعا" },
        p: {
          en: "Ask family and people who know the person, make Istikhara, and then decide. Compatibility readings can be one more input, but they should never be the only reason to accept or reject a proposal.",
          ur: "گھر والوں اور اس شخص کو جاننے والوں سے پوچھیں، استخارہ کریں، پھر فیصلہ کریں۔ ہم آہنگی کی ریڈنگ ایک اضافی رائے ہو سکتی ہے مگر رشتہ قبول یا رد کرنے کی واحد وجہ نہیں ہونی چاہیے۔",
        },
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
