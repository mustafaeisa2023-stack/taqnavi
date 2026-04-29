import type { TrackProfile } from '../types/quiz';

export const TRACK_PROFILES: Record<TrackProfile['id'], TrackProfile> = {
  frontend: {
    id: 'frontend',
    title: { en: 'Frontend Developer', ar: 'مطوّر Frontend' },
    shortDescription: {
      en: 'Build interfaces that are clear, responsive, and easy for people to use.',
      ar: 'يبني واجهات واضحة وسريعة الاستجابة وسهلة الاستخدام للمستخدمين.'
    },
    whyItFits: {
      en: 'Your answers suggest you may enjoy turning ideas into usable screens and improving how people interact with software.',
      ar: 'إجاباتك تشير إلى أنك قد تستمتع بتحويل الأفكار إلى شاشات عملية وتحسين طريقة تفاعل الناس مع البرمجيات.'
    },
    strengths: {
      en: ['Breaking big pages into reusable UI pieces', 'Catching usability friction quickly', 'Iterating with visible feedback'],
      ar: ['تقسيم الصفحات الكبيرة إلى أجزاء UI قابلة لإعادة الاستخدام', 'اكتشاف عوائق سهولة الاستخدام بسرعة', 'تطوير الحلول تدريجيًا بالاعتماد على تغذية راجعة مرئية']
    },
    watchOut: {
      en: ['Visual polish can hide weak logic—keep fundamentals strong.', 'Browsers and devices behave differently, so testing matters.'],
      ar: ['قد يخفي الشكل الجميل منطقًا ضعيفًا؛ حافظ على قوة الأساسيات.', 'تختلف المتصفحات والأجهزة في السلوك، لذلك يبقى الاختبار ضروريًا.']
    },
    firstSkills: {
      en: ['HTML and semantic structure', 'CSS layout (Flexbox/Grid)', 'JavaScript + TypeScript basics', 'React component fundamentals'],
      ar: ['أساسيات HTML والبنية الدلالية', 'تنسيق CSS (Flexbox/Grid)', 'أساسيات JavaScript وTypeScript', 'مبادئ مكوّنات React']
    },
    learningPath: {
      en: ['Start with static pages and responsive layouts.', 'Add interactivity with state, forms, and validation.', 'Learn API data fetching and basic performance/accessibility checks.'],
      ar: ['ابدأ بصفحات ثابتة وتصميمات متجاوبة.', 'أضف التفاعل باستخدام الحالة والنماذج والتحقق من المدخلات.', 'تعلّم جلب البيانات من API وفحوصات الأداء وإمكانية الوصول الأساسية.']
    },
    miniProject: {
      en: 'Create a campus club portal with search, filters, and a mobile-first event details page.',
      ar: 'أنشئ بوابة لأنشطة الأندية الجامعية تتضمن بحثًا وفلاتر وصفحة تفاصيل فعاليات مصممة للهاتف أولًا.'
    },
    starterTopics: {
      en: ['Design systems basics', 'Accessibility (ARIA, keyboard navigation)', 'Frontend debugging in browser devtools'],
      ar: ['أساسيات أنظمة التصميم', 'إمكانية الوصول (ARIA والتنقل عبر لوحة المفاتيح)', 'تصحيح Frontend باستخدام أدوات المطور في المتصفح']
    }
  },
  backend: {
    id: 'backend',
    title: { en: 'Backend Developer', ar: 'مطوّر Backend' },
    shortDescription: { en: 'Build the logic, APIs, and data systems that power applications.', ar: 'يبني المنطق وواجهات API وأنظمة البيانات التي تشغّل التطبيقات.' },
    whyItFits: { en: 'Your choices point to comfort with structure, step-by-step reasoning, and making systems reliable behind the scenes.', ar: 'اختياراتك تشير إلى ارتياحك للعمل المنظم والتفكير المتدرج وجعل الأنظمة موثوقة خلف الكواليس.' },
    strengths: { en: ['Designing clean API contracts', 'Thinking about data flow and edge cases', 'Keeping behavior consistent under load'], ar: ['تصميم عقود API واضحة', 'التفكير في تدفق البيانات والحالات الطرفية', 'الحفاظ على ثبات سلوك النظام تحت الضغط'] },
    watchOut: { en: ['It is easy to over-engineer early—start simple first.', 'Debugging distributed issues takes patience and clear logs.'], ar: ['من السهل المبالغة في التعقيد مبكرًا؛ ابدأ بحلول بسيطة أولًا.', 'معالجة أعطال الأنظمة الموزعة تتطلب صبرًا وسجلات واضحة.'] },
    firstSkills: { en: ['Node.js or Python fundamentals', 'REST API design', 'SQL + basic schema design', 'Authentication and authorization basics'], ar: ['أساسيات Node.js أو Python', 'تصميم REST API', 'أساسيات SQL وتصميم المخطط', 'مبادئ Authentication وAuthorization'] },
    learningPath: { en: ['Build small CRUD APIs locally.', 'Add validation, error handling, and tests.', 'Practice deployment, observability, and simple scaling patterns.'], ar: ['ابنِ واجهات CRUD صغيرة محليًا.', 'أضف التحقق من المدخلات ومعالجة الأخطاء والاختبارات.', 'تدرّب على النشر والمراقبة وأنماط التوسع البسيطة.'] },
    miniProject: { en: 'Build a student task-management API with roles (student/admin), deadlines, and activity logs.', ar: 'ابنِ API لإدارة مهام الطلاب مع أدوار (طالب/مشرف) ومواعيد نهائية وسجلات نشاط.' },
    starterTopics: { en: ['HTTP status codes', 'Database indexing basics', 'Rate limiting and API security hygiene'], ar: ['رموز حالة HTTP', 'أساسيات فهارس قواعد البيانات', 'Rate limiting وممارسات أمان API الأساسية'] }
  },
  ai_data: {
    id: 'ai_data',
    title: { en: 'AI / Data Practitioner', ar: 'مختص AI/Data' },
    shortDescription: { en: 'Use data analysis and model workflows to support better decisions.', ar: 'يوظّف تحليل البيانات وسير عمل النماذج لدعم قرارات أفضل.' },
    whyItFits: { en: 'Your answers indicate interest in evidence, experimentation, and learning from patterns instead of guesswork.', ar: 'إجاباتك تعكس اهتمامًا بالأدلة والتجريب والتعلّم من الأنماط بدل التخمين.' },
    strengths: { en: ['Structured analysis of messy information', 'Comparing options with measurable criteria', 'Documenting assumptions and outcomes'], ar: ['تحليل منظم لمعلومات غير مرتبة', 'مقارنة الخيارات بمعايير قابلة للقياس', 'توثيق الفرضيات والنتائج'] },
    watchOut: { en: ['Models can look right but still be wrong—always validate.', 'Data quality usually matters more than fancy algorithms at the start.'], ar: ['قد تبدو النماذج صحيحة وهي خاطئة فعليًا؛ لذلك تحقق دائمًا.', 'جودة البيانات غالبًا أهم من الخوارزميات المعقدة في البداية.'] },
    firstSkills: { en: ['Python fundamentals', 'Pandas and data cleaning', 'Data visualization basics', 'Intro to model evaluation metrics'], ar: ['أساسيات Python', 'Pandas وتنظيف البيانات', 'أساسيات تصور البيانات', 'مقدمة في مؤشرات تقييم النماذج'] },
    learningPath: { en: ['Practice exploratory analysis on small datasets.', 'Learn feature preparation and baseline model building.', 'Improve results with evaluation, iteration, and clear reporting.'], ar: ['تدرّب على التحليل الاستكشافي لبيانات صغيرة.', 'تعلّم إعداد الخصائص وبناء نموذج خط أساس.', 'حسّن النتائج بالتقييم والتكرار وكتابة تقارير واضحة.'] },
    miniProject: { en: 'Analyze study habit data and build a simple predictor for likely performance bands.', ar: 'حلّل بيانات عادات الدراسة وابنِ متنبئًا بسيطًا لفئات الأداء المتوقعة.' },
    starterTopics: { en: ['Train/test split', 'Bias and data leakage awareness', 'Notebook storytelling for non-technical audiences'], ar: ['تقسيم البيانات إلى Train/Test', 'الوعي بالتحيز وتسرب البيانات', 'سرد النتائج في Notebook لجمهور غير تقني'] }
  },
  cybersecurity: {
    id: 'cybersecurity',
    title: { en: 'Cybersecurity Specialist', ar: 'مختص Cybersecurity' },
    shortDescription: { en: 'Reduce risk by finding weaknesses and strengthening defenses.', ar: 'يقلّل المخاطر عبر اكتشاف الثغرات وتعزيز وسائل الحماية.' },
    whyItFits: { en: 'Your response pattern suggests you naturally consider failure modes, threat scenarios, and safe system behavior.', ar: 'نمط إجاباتك يوحي بأنك تفكر تلقائيًا في أنماط الفشل وسيناريوهات التهديد وسلوك النظام الآمن.' },
    strengths: { en: ['Spotting risky assumptions early', 'Thinking like both attacker and defender', 'Documenting controls and mitigations clearly'], ar: ['اكتشاف الافتراضات الخطرة مبكرًا', 'التفكير بعقلية المهاجم والمدافع معًا', 'توثيق الضوابط وإجراءات التخفيف بوضوح'] },
    watchOut: { en: ['Security is never “finished”—it is continuous practice.', 'Overly strict controls can block usability, so balance is important.'], ar: ['الأمن السيبراني لا يصل إلى حالة “انتهاء”؛ بل هو ممارسة مستمرة.', 'قد تعيق الضوابط الصارمة جدًا قابلية الاستخدام، لذلك التوازن مهم.'] },
    firstSkills: { en: ['Networking and protocols basics', 'OWASP Top 10 fundamentals', 'Secure coding practices', 'Intro security tooling (scanners/log analysis)'], ar: ['أساسيات الشبكات والبروتوكولات', 'مبادئ OWASP Top 10', 'ممارسات البرمجة الآمنة', 'مقدمة لأدوات الأمن (الماسحات وتحليل السجلات)'] },
    learningPath: { en: ['Learn core security principles and common attack patterns.', 'Practice threat modeling on simple apps.', 'Run controlled audits and report practical fixes.'], ar: ['تعلّم مبادئ الأمن الأساسية وأنماط الهجوم الشائعة.', 'تدرّب على نمذجة التهديدات لتطبيقات بسيطة.', 'نفّذ مراجعات أمنية مضبوطة وقدّم حلولًا عملية مرتبة بالأولوية.'] },
    miniProject: { en: 'Perform a basic security review of a demo web app and propose prioritized remediation steps.', ar: 'نفّذ مراجعة أمنية أساسية لتطبيق ويب تجريبي واقترح خطوات معالجة مرتبة حسب الأولوية.' },
    starterTopics: { en: ['Principle of least privilege', 'Incident response basics', 'Security logging and alert triage'], ar: ['مبدأ أقل صلاحية ممكنة', 'أساسيات الاستجابة للحوادث', 'سجلات الأمن وفرز التنبيهات'] }
  },
  devops_cloud: {
    id: 'devops_cloud',
    title: { en: 'DevOps / Cloud Engineer', ar: 'مهندس DevOps/Cloud' },
    shortDescription: { en: 'Automate delivery and operations so software stays reliable in production.', ar: 'يؤتمت التسليم والتشغيل لضمان بقاء البرمجيات موثوقة في بيئة الإنتاج.' },
    whyItFits: { en: 'Your answers lean toward system-level thinking, automation, and reducing manual operational errors.', ar: 'إجاباتك تميل إلى التفكير على مستوى الأنظمة والأتمتة وتقليل الأخطاء التشغيلية اليدوية.' },
    strengths: { en: ['Improving repeatability with automation', 'Connecting development and operations needs', 'Monitoring reliability and acting on signals'], ar: ['تحسين قابلية التكرار عبر الأتمتة', 'الربط بين احتياجات التطوير والتشغيل', 'مراقبة الاعتمادية واتخاذ إجراء بناءً على المؤشرات'] },
    watchOut: { en: ['Tooling can get complex quickly—focus on core principles first.', 'Automation without safeguards can spread mistakes very fast.'], ar: ['قد تصبح الأدوات معقدة بسرعة؛ ركّز أولًا على المبادئ الأساسية.', 'الأتمتة دون ضوابط قد تنشر الأخطاء بسرعة كبيرة.'] },
    firstSkills: { en: ['Linux command line fluency', 'Git and CI/CD basics', 'Container fundamentals', 'Cloud service essentials (compute/network/storage)'], ar: ['إتقان سطر أوامر Linux', 'أساسيات Git وCI/CD', 'مبادئ الحاويات Container', 'أساسيات خدمات Cloud (حوسبة/شبكات/تخزين)'] },
    learningPath: { en: ['Deploy a simple app manually to understand the full flow.', 'Automate build/test/deploy with a pipeline.', 'Add monitoring, alerting, and rollback strategy.'], ar: ['انشر تطبيقًا بسيطًا يدويًا لفهم دورة العمل كاملة.', 'أتمت عمليات البناء والاختبار والنشر عبر Pipeline.', 'أضف المراقبة والتنبيهات وخطة التراجع عند الفشل.'] },
    miniProject: { en: 'Containerize a web app, deploy it to a cloud VM, and automate release using a CI workflow.', ar: 'حوّل تطبيق ويب إلى Container وانشره على VM سحابية ثم أتمت الإصدار عبر سير عمل CI.' },
    starterTopics: { en: ['Infrastructure as Code basics', 'Secrets management', 'Service health checks and SLO thinking'], ar: ['أساسيات Infrastructure as Code', 'إدارة الأسرار', 'فحوصات صحة الخدمات والتفكير بمنطق SLO'] }
  },
  ui_ux: {
    id: 'ui_ux',
    title: { en: 'UI/UX Designer', ar: 'مصمم UI/UX' },
    shortDescription: { en: 'Design product experiences that are useful, clear, and enjoyable.', ar: 'يصمم تجارب منتجات مفيدة وواضحة وممتعة.' },
    whyItFits: { en: 'Your choices suggest you care about user perspective, clear flows, and reducing friction in everyday tasks.', ar: 'اختياراتك توضح اهتمامك بمنظور المستخدم وسلاسة التدفقات وتقليل العوائق في المهام اليومية.' },
    strengths: { en: ['Translating user needs into concrete flows', 'Prioritizing clarity over unnecessary complexity', 'Testing and refining design decisions with feedback'], ar: ['ترجمة احتياجات المستخدم إلى تدفقات عملية واضحة', 'تقديم الوضوح على التعقيد غير الضروري', 'اختبار قرارات التصميم وتحسينها بناءً على التغذية الراجعة'] },
    watchOut: { en: ['Great visuals are not enough—validate with real users.', 'Handoffs can fail without clear rationale and documentation.'], ar: ['المرئيات الجميلة وحدها لا تكفي؛ تحقّق عبر مستخدمين حقيقيين.', 'قد تفشل عملية التسليم دون مبررات واضحة وتوثيق جيد.'] },
    firstSkills: { en: ['Figma and component libraries', 'User interview basics', 'Wireframing and interaction design', 'Usability testing fundamentals'], ar: ['أساسيات Figma ومكتبات المكونات', 'أساسيات مقابلات المستخدمين', 'تصميم Wireframes وتصميم التفاعل', 'مبادئ اختبار قابلية الاستخدام'] },
    learningPath: { en: ['Map problems and user journeys before jumping to screens.', 'Create low-fidelity prototypes and test early.', 'Iterate visual polish and document handoff details for developers.'], ar: ['حدّد المشكلات ورحلة المستخدم قبل الانتقال إلى الشاشات.', 'أنشئ نماذج أولية منخفضة الدقة واختبر مبكرًا.', 'حسّن التفاصيل البصرية تدريجيًا ووثّق متطلبات التسليم للمطورين.'] },
    miniProject: { en: 'Design a mobile onboarding and weekly planner flow for students, then run 3 quick usability tests.', ar: 'صمّم تدفق تهيئة على الهاتف ومخططًا أسبوعيًا للطلاب ثم نفّذ 3 اختبارات سريعة لقابلية الاستخدام.' },
    starterTopics: { en: ['Information architecture', 'Accessibility in design', 'Design critique and decision logs'], ar: ['هندسة المعلومات', 'إمكانية الوصول في التصميم', 'نقد التصميم وسجلات القرارات'] }
  }
};
