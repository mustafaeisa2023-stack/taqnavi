import type { TrackProfile } from '../types/quiz';

export const TRACK_PROFILES: Record<TrackProfile['id'], TrackProfile> = {
  software_engineer: {
    id: 'software_engineer',
    title: { en: 'Software Engineer / App Builder', ar: 'مهندس برمجيات / باني تطبيقات' },
    shortDescription: {
      en: 'You enjoy building complete apps, from idea to working features people can use.',
      ar: 'تحب بناء تطبيق كامل من الفكرة إلى ميزات حقيقية يستخدمها الناس.'
    },
    whyItFits: {
      en: 'Your answers show balance: you like solving problems, building useful features, and understanding both screens and hidden logic behind the app.',
      ar: 'إجاباتك تظهر توازنًا جميلًا: تحب حل المشكلات وبناء ميزات مفيدة وفهم الشاشات والمنطق المخفي خلف التطبيق.'
    },
    strengths: {
      en: ['Turning ideas into small working features', 'Learning by building and improving', 'Connecting user needs with technical steps'],
      ar: ['تحويل الأفكار إلى ميزات صغيرة تعمل فعلاً', 'التعلّم من خلال البناء والتحسين', 'ربط احتياج المستخدم بخطوات تقنية واضحة']
    },
    watchOut: {
      en: ['Trying to learn everything at once can feel overwhelming.', 'Do not skip basics while chasing many tools.'],
      ar: ['محاولة تعلم كل شيء مرة واحدة قد تكون مرهقة.', 'لا تتجاوز الأساسيات وأنت تجري وراء أدوات كثيرة.']
    },
    firstSkills: {
      en: ['Programming basics (JavaScript or Python)', 'How web apps work end to end', 'Git basics', 'Problem-solving with small coding exercises'],
      ar: ['أساسيات البرمجة (JavaScript أو Python)', 'فهم طريقة عمل تطبيقات الويب من البداية للنهاية', 'أساسيات Git', 'حل المشكلات عبر تمارين برمجية صغيرة']
    },
    learningPath: {
      en: ['Start with one small app idea and build version 1.', 'Add saved information, user accounts, and cleaner structure.', 'Improve quality with testing and simple teamwork habits.'],
      ar: ['ابدأ بفكرة تطبيق صغيرة وابنِ النسخة الأولى.', 'أضف حفظ المعلومات وحسابات المستخدمين وتنظيمًا أوضح للكود.', 'حسّن الجودة بالاختبارات وعادات العمل الجماعي البسيطة.']
    },
    miniProject: {
      en: 'Build a student club app where users can sign up, post events, and mark attendance.',
      ar: 'ابنِ تطبيقًا للأندية الطلابية يسمح بالتسجيل ونشر الفعاليات وتأكيد الحضور.'
    },
    starterTopics: {
      en: ['Functions and clean code basics', 'APIs in simple words', 'How to debug step by step'],
      ar: ['الدوال وأساسيات الكود المنظم', 'فهم الـ API بطريقة بسيطة', 'كيفية تتبع الأخطاء خطوة بخطوة']
    }
  },
  frontend: {
    id: 'frontend',
    title: { en: 'Frontend Developer', ar: 'مطوّر واجهات المستخدم' },
    shortDescription: {
      en: 'You focus on what users see and click, and make the app clear and smooth to use.',
      ar: 'تركّز على ما يراه المستخدم ويضغط عليه، وتجعل التطبيق واضحًا وسهل الاستخدام.'
    },
    whyItFits: {
      en: 'You seem to care about user experience, visual clarity, and making ideas come alive on screen.',
      ar: 'يبدو أنك تهتم بتجربة المستخدم والوضوح البصري وتحويل الأفكار إلى شيء حي على الشاشة.'
    },
    strengths: {
      en: ['Noticing confusing screens quickly', 'Breaking a page into reusable parts', 'Improving details that make usage easier'],
      ar: ['ملاحظة الشاشات المربكة بسرعة', 'تقسيم الصفحة إلى أجزاء قابلة لإعادة الاستخدام', 'تحسين التفاصيل التي تسهّل الاستخدام']
    },
    watchOut: {
      en: ['Nice visuals alone are not enough; logic still matters.', 'Always test on different screen sizes and devices.'],
      ar: ['الشكل الجميل وحده لا يكفي؛ المنطق مهم أيضًا.', 'اختبر دائمًا على أحجام شاشات وأجهزة مختلفة.']
    },
    firstSkills: {
      en: ['HTML and page structure', 'CSS basics and responsive layout', 'JavaScript basics', 'Components in React or Vue'],
      ar: ['HTML وبنية الصفحة', 'أساسيات CSS والتصميم المتجاوب', 'أساسيات JavaScript', 'المكوّنات في React أو Vue']
    },
    learningPath: {
      en: ['Build static pages first.', 'Add interaction like forms and filters.', 'Connect to real data and polish accessibility.'],
      ar: ['ابنِ صفحات ثابتة أولًا.', 'أضف التفاعل مثل النماذج والفلاتر.', 'اربط التطبيق ببيانات حقيقية وحسّن سهولة الوصول.']
    },
    miniProject: {
      en: 'Create a student event finder with search, category filters, and a clear mobile view.',
      ar: 'أنشئ تطبيقًا للبحث عن فعاليات الطلاب مع بحث وفلاتر وعرض واضح على الهاتف.'
    },
    starterTopics: {
      en: ['Color and spacing basics', 'State and events', 'Browser developer tools'],
      ar: ['أساسيات الألوان والمسافات', 'الحالة والأحداث', 'أدوات المطور في المتصفح']
    }
  },
  backend: {
    id: 'backend',
    title: { en: 'Backend Developer', ar: 'مطوّر المنطق والأنظمة الخلفية' },
    shortDescription: { en: 'You build the hidden logic behind the app and manage how saved information moves safely.', ar: 'تبني المنطق المخفي خلف التطبيق وتدير حركة المعلومات المحفوظة بشكل آمن.' },
    whyItFits: { en: 'Your answers suggest you enjoy structure, logic, and making systems reliable even when users do not see your work directly.', ar: 'إجاباتك توضح أنك تحب التنظيم والمنطق وجعل النظام ثابتًا حتى لو لم يرَ المستخدم عملك مباشرة.' },
    strengths: { en: ['Thinking step by step', 'Designing clean app behavior', 'Handling edge cases calmly'], ar: ['التفكير بخطوات واضحة', 'تصميم سلوك التطبيق بشكل نظيف', 'التعامل بهدوء مع الحالات غير المتوقعة'] },
    watchOut: { en: ['Do not overcomplicate early versions.', 'Write clear names and notes so your logic is easy to follow later.'], ar: ['لا تعقّد النسخة الأولى أكثر من اللازم.', 'اكتب أسماء وملاحظات واضحة حتى يكون منطقك سهل المتابعة لاحقًا.'] },
    firstSkills: { en: ['One backend language well (Node.js, Python, or Java)', 'Building simple APIs', 'Database basics for saved information', 'User login basics'], ar: ['إتقان لغة خلفية واحدة (Node.js أو Python أو Java)', 'بناء APIs بسيطة', 'أساسيات قواعد البيانات لحفظ المعلومات', 'أساسيات تسجيل دخول المستخدمين'] },
    learningPath: { en: ['Build a small API for one app idea.', 'Add validation, errors, and clear responses.', 'Organize code and add tests for key actions.'], ar: ['ابنِ API صغيرًا لفكرة تطبيق واحدة.', 'أضف التحقق من المدخلات ومعالجة الأخطاء وردودًا واضحة.', 'نظّم الكود وأضف اختبارات للعمليات الأساسية.'] },
    miniProject: { en: 'Build the backend for a course planner app with login, saved schedules, and reminders.', ar: 'ابنِ الجزء الخلفي لتطبيق تخطيط المواد مع تسجيل الدخول وحفظ الجداول والتنبيهات.' },
    starterTopics: { en: ['HTTP basics', 'CRUD operations', 'Debugging server errors'], ar: ['أساسيات HTTP', 'عمليات الإضافة والقراءة والتعديل والحذف', 'تتبع أخطاء الخادم'] }
  },
  ai_data: {
    id: 'ai_data',
    title: { en: 'AI / Data Explorer', ar: 'مستكشف البيانات والذكاء الاصطناعي' },
    shortDescription: { en: 'You like finding patterns in information and using them to answer real questions.', ar: 'تحب اكتشاف الأنماط في المعلومات واستخدامها للإجابة عن أسئلة واقعية.' },
    whyItFits: { en: 'Your choices suggest curiosity, analysis, and comfort with comparing ideas using evidence.', ar: 'اختياراتك تشير إلى فضول وتحليل وراحة في مقارنة الأفكار اعتمادًا على الأدلة.' },
    strengths: { en: ['Asking good questions before jumping to answers', 'Reading numbers and trends carefully', 'Explaining findings in simple words'], ar: ['طرح أسئلة جيدة قبل القفز إلى الإجابات', 'قراءة الأرقام والاتجاهات بدقة', 'شرح النتائج بكلمات بسيطة'] },
    watchOut: { en: ['Do not trust results without checking the input information.', 'Keep your story clear; too many charts can confuse others.'], ar: ['لا تثق بالنتائج قبل التأكد من جودة المعلومات المدخلة.', 'حافظ على وضوح القصة؛ كثرة الرسوم قد تربك الآخرين.'] },
    firstSkills: { en: ['Python basics', 'Working with tables and cleaning information', 'Simple charts', 'Intro to machine learning ideas'], ar: ['أساسيات Python', 'التعامل مع الجداول وتنظيف المعلومات', 'رسوم بيانية بسيطة', 'مقدمة في أفكار تعلم الآلة'] },
    learningPath: { en: ['Analyze one small dataset.', 'Build one basic prediction or classification model.', 'Compare results and explain what you learned.'], ar: ['حلّل مجموعة معلومات صغيرة.', 'ابنِ نموذجًا بسيطًا للتوقع أو التصنيف.', 'قارن النتائج واشرح ما تعلمته بوضوح.'] },
    miniProject: { en: 'Use student study data to predict who may need early support and show the patterns in a dashboard.', ar: 'استخدم بيانات دراسة الطلاب للتنبؤ بمن قد يحتاج دعمًا مبكرًا واعرض الأنماط في لوحة بسيطة.' },
    starterTopics: { en: ['Data cleaning', 'Feature basics', 'Model overfitting in plain language'], ar: ['تنظيف البيانات', 'أساسيات الخصائص', 'فهم المبالغة في التعلّم بطريقة مبسطة'] }
  },
  cybersecurity: {
    id: 'cybersecurity',
    title: { en: 'Cybersecurity Analyst', ar: 'حامي الأنظمة والمعلومات' },
    shortDescription: { en: 'You focus on protecting accounts and private information and reducing digital risks.', ar: 'تركّز على حماية الحسابات والمعلومات الخاصة وتقليل المخاطر الرقمية.' },
    whyItFits: { en: 'Your responses show attention to detail and a natural habit of asking “what could go wrong?”.', ar: 'إجاباتك تظهر انتباهًا للتفاصيل وعادة طبيعية في سؤال: ماذا يمكن أن يحدث بشكل خاطئ؟' },
    strengths: { en: ['Spotting weak points early', 'Thinking about safe behavior before problems happen', 'Staying calm during incidents'], ar: ['اكتشاف نقاط الضعف مبكرًا', 'التفكير في السلوك الآمن قبل حدوث المشكلة', 'الهدوء أثناء الحوادث'] },
    watchOut: { en: ['Security learning can feel endless; move step by step.', 'Balance protection with usability so people can still do their tasks.'], ar: ['تعلم الأمن قد يبدو بلا نهاية؛ تقدّم خطوة خطوة.', 'وازن بين الحماية وسهولة الاستخدام حتى ينجز الناس مهامهم.'] },
    firstSkills: { en: ['Networking basics', 'Common web security issues', 'Safe coding habits', 'Reading logs and alerts'], ar: ['أساسيات الشبكات', 'مشكلات أمان الويب الشائعة', 'عادات برمجة آمنة', 'قراءة السجلات والتنبيهات'] },
    learningPath: { en: ['Learn core security concepts.', 'Practice finding simple vulnerabilities in demo apps.', 'Write clear reports with practical fixes.'], ar: ['تعلّم مفاهيم الأمن الأساسية.', 'تدرّب على اكتشاف ثغرات بسيطة في تطبيقات تدريبية.', 'اكتب تقارير واضحة مع حلول عملية.'] },
    miniProject: { en: 'Review a small web app for weak passwords and unsafe input handling, then suggest fixes.', ar: 'راجع تطبيق ويب صغيرًا لاكتشاف مشاكل كلمات المرور وضعف التعامل مع المدخلات ثم اقترح حلولًا.' },
    starterTopics: { en: ['Password and account safety', 'Input validation', 'Basic incident response steps'], ar: ['أمان كلمات المرور والحسابات', 'التحقق من المدخلات', 'خطوات أساسية للاستجابة للحوادث'] }
  },
  devops_cloud: {
    id: 'devops_cloud',
    title: { en: 'DevOps / Cloud Operator', ar: 'مشغّل التطبيقات والأنظمة' },
    shortDescription: { en: 'You help keep the app working smoothly so updates reach users with fewer problems.', ar: 'تساعد في إبقاء التطبيق يعمل بسلاسة حتى تصل التحديثات للمستخدمين بأقل مشاكل.' },
    whyItFits: { en: 'Your answers suggest you enjoy organization, automation, and making systems stable for the whole team.', ar: 'إجاباتك تشير إلى أنك تحب التنظيم والأتمتة وجعل الأنظمة مستقرة لخدمة الفريق كله.' },
    strengths: { en: ['Improving repeated tasks with scripts', 'Caring about reliability and uptime', 'Connecting developer needs with system needs'], ar: ['تحسين المهام المتكررة عبر السكربتات', 'الاهتمام بالاستقرار واستمرار الخدمة', 'ربط احتياجات المطورين باحتياجات النظام'] },
    watchOut: { en: ['Do not get lost in tools; focus on core concepts first.', 'Fast automation needs safety checks to avoid repeated mistakes.'], ar: ['لا تضيع بين الأدوات؛ ركّز على المفاهيم الأساسية أولًا.', 'الأتمتة السريعة تحتاج فحوصات أمان حتى لا تتكرر الأخطاء.'] },
    firstSkills: { en: ['Linux command line basics', 'Git teamwork basics', 'Containers in simple terms', 'Cloud service basics'], ar: ['أساسيات سطر أوامر Linux', 'أساسيات العمل الجماعي عبر Git', 'فهم الحاويات بطريقة بسيطة', 'أساسيات الخدمات السحابية'] },
    learningPath: { en: ['Run one app locally and understand each step.', 'Move it to a cloud server with clear setup steps.', 'Add simple monitoring and recovery steps.'], ar: ['شغّل تطبيقًا واحدًا محليًا وافهم كل خطوة.', 'انقله إلى خادم سحابي بخطوات إعداد واضحة.', 'أضف متابعة بسيطة وخطوات استرجاع عند التعطل.'] },
    miniProject: { en: 'Set up a small web app on a cloud VM and add a script that restarts it if it stops.', ar: 'جهّز تطبيق ويب صغيرًا على خادم سحابي وأضف سكربتًا يعيد تشغيله إذا توقف.' },
    starterTopics: { en: ['Linux basics', 'Version control workflow', 'Simple monitoring dashboards'], ar: ['أساسيات Linux', 'أسلوب العمل عبر التحكم بالإصدارات', 'لوحات متابعة بسيطة'] }
  },
  ui_ux: {
    id: 'ui_ux',
    title: { en: 'UI/UX Designer', ar: 'مصمم تجربة المستخدم' },
    shortDescription: { en: 'You design experiences that feel clear, helpful, and comfortable for real users.', ar: 'تصمم تجارب تبدو واضحة ومفيدة ومريحة للمستخدم الحقيقي.' },
    whyItFits: { en: 'Your answers show empathy for users and interest in making tasks easier and more understandable.', ar: 'إجاباتك تظهر تعاطفًا مع المستخدم واهتمامًا بجعل المهام أسهل وأكثر وضوحًا.' },
    strengths: { en: ['Understanding user pain points', 'Turning confusing flows into simple steps', 'Using feedback to improve designs quickly'], ar: ['فهم مشاكل المستخدم اليومية', 'تحويل التدفقات المربكة إلى خطوات بسيطة', 'استخدام الملاحظات لتحسين التصميم بسرعة'] },
    watchOut: { en: ['Do not design only for looks; test with users.', 'Keep communication clear with developers so details are implemented correctly.'], ar: ['لا تصمم للمظهر فقط؛ اختبر مع المستخدمين.', 'حافظ على تواصل واضح مع المطورين ليتم تنفيذ التفاصيل بشكل صحيح.'] },
    firstSkills: { en: ['Wireframes and user flows', 'Figma basics', 'Simple user interviews', 'Usability testing basics'], ar: ['الرسم المبدئي وتدفق المستخدم', 'أساسيات Figma', 'مقابلات مستخدم بسيطة', 'أساسيات اختبار سهولة الاستخدام'] },
    learningPath: { en: ['Start with one user problem and map the journey.', 'Design low-detail screens and test early.', 'Refine visual design and handoff notes clearly.'], ar: ['ابدأ بمشكلة مستخدم واحدة وحدد الرحلة.', 'صمّم شاشات أولية بسيطة واختبر مبكرًا.', 'حسّن التصميم البصري واكتب ملاحظات تسليم واضحة.'] },
    miniProject: { en: 'Design a student budgeting app flow from signup to monthly spending summary and test it with classmates.', ar: 'صمّم تدفق تطبيق ميزانية للطلاب من التسجيل حتى ملخص الصرف الشهري واختبره مع زملائك.' },
    starterTopics: { en: ['Visual hierarchy', 'Design for accessibility', 'Writing simple UX copy'], ar: ['الترتيب البصري للمحتوى', 'التصميم لسهولة الوصول', 'كتابة نصوص UX بسيطة'] }
  }
};
