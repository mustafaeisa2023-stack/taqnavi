import type { Question } from '../types/quiz';

export const QUESTIONS: Question[] = [
  { id: 'q1', category: 'interest', prompt: { en: 'A student app has unclear navigation. What part would you most want to improve first?', ar: 'تطبيق طلابي فيه تنقّل غير واضح. أي جزء ترغب بتحسينه أولًا؟' }, options: [
    { id: 'q1a', label: { en: 'The screen flow so key actions feel obvious.', ar: 'انسيابية الشاشات بحيث تصبح الإجراءات الأساسية واضحة فورًا.' }, weights: { ui_ux: 3, frontend: 1 } },
    { id: 'q1b', label: { en: 'The API structure so each screen gets cleaner data.', ar: 'هيكلة الـ API حتى تحصل كل شاشة على بيانات أوضح وأنظف.' }, weights: { backend: 3 } },
    { id: 'q1c', label: { en: 'The analytics events so we can measure user confusion.', ar: 'أحداث التحليلات (Analytics Events) حتى نقيس مواضع ارتباك المستخدم.' }, weights: { ai_data: 3, frontend: 1 } },
    { id: 'q1d', label: { en: 'The access rules so only trusted users can reach sensitive pages.', ar: 'قواعد الوصول بحيث لا يصل للصفحات الحساسة إلا المستخدمون الموثوقون.' }, weights: { cybersecurity: 3, backend: 1 } }
  ]},
  { id: 'q2', category: 'interest', prompt: { en: 'Your club website crashes during registrations. Which task sounds most exciting?', ar: 'موقع النادي يتعطّل أثناء التسجيل. أي مهمة تبدو لك الأكثر حماسًا؟' }, options: [
    { id: 'q2a', label: { en: 'Build responsive status pages to keep students informed.', ar: 'بناء صفحات حالة متجاوبة لإبقاء الطلاب على اطلاع دائم.' }, weights: { frontend: 3, ui_ux: 1 } },
    { id: 'q2b', label: { en: 'Fix slow queries and refactor signup endpoints.', ar: 'إصلاح الاستعلامات البطيئة وإعادة هيكلة نقاط تسجيل الاشتراك.' }, weights: { backend: 3, devops_cloud: 1 } },
    { id: 'q2c', label: { en: 'Set autoscaling and alerts so traffic spikes are handled.', ar: 'إعداد Autoscaling والتنبيهات للتعامل مع ارتفاع الزيارات.' }, weights: { devops_cloud: 3, backend: 1 } },
    { id: 'q2d', label: { en: 'Review rate limits and abuse patterns.', ar: 'مراجعة حدود المعدّل (Rate Limits) وأنماط إساءة الاستخدام.' }, weights: { cybersecurity: 3, devops_cloud: 1 } }
  ]},
  { id: 'q3', category: 'interest', prompt: { en: 'A teacher offers four mini-project choices. Which do you pick?', ar: 'مدرّس طرح أربعة مشاريع صغيرة. أي مشروع تختار؟' }, options: [
    { id: 'q3a', label: { en: 'Interactive dashboard with clear visuals.', ar: 'لوحة تفاعلية برسوم واضحة وسهلة الفهم.' }, weights: { frontend: 2, ui_ux: 2 } },
    { id: 'q3b', label: { en: 'Recommendation model from open student data.', ar: 'نموذج توصية مبني على بيانات طلابية مفتوحة.' }, weights: { ai_data: 3, backend: 1 } },
    { id: 'q3c', label: { en: 'Secure login monitor that detects anomalies.', ar: 'مراقب تسجيل دخول آمن يكتشف السلوك الشاذ.' }, weights: { cybersecurity: 3, ai_data: 1 } },
    { id: 'q3d', label: { en: 'Cloud deployment pipeline with automatic rollback.', ar: 'خطّ نشر على Cloud مع تراجع تلقائي (Automatic Rollback).' }, weights: { devops_cloud: 3, backend: 1 } }
  ]},
  { id: 'q4', category: 'interest', prompt: { en: 'You join a hackathon team late. Where do you naturally contribute first?', ar: 'انضممت متأخرًا لفريق هاكاثون. أين تبدأ بالمساهمة بشكل طبيعي؟' }, options: [
    { id: 'q4a', label: { en: 'Polish the interface and clarify button labels.', ar: 'صقل الواجهة وتوضيح تسميات الأزرار.' }, weights: { frontend: 3, ui_ux: 1 } },
    { id: 'q4b', label: { en: 'Stabilize server logic and data flow.', ar: 'تثبيت منطق الخادم وتدفق البيانات.' }, weights: { backend: 3 } },
    { id: 'q4c', label: { en: 'Create experiments to compare feature outcomes.', ar: 'تصميم تجارب لمقارنة نتائج الميزات.' }, weights: { ai_data: 3 } },
    { id: 'q4d', label: { en: 'Harden secrets, permissions, and deployment settings.', ar: 'تعزيز إدارة الأسرار والصلاحيات وإعدادات النشر.' }, weights: { devops_cloud: 2, cybersecurity: 2 } }
  ]},
  { id: 'q5', category: 'interest', prompt: { en: 'When a product succeeds, which outcome feels most rewarding to you?', ar: 'عندما ينجح المنتج، أي نتيجة تشعرك بأكبر قدر من الرضا؟' }, options: [
    { id: 'q5a', label: { en: 'Users say the app is easy and pleasant to use.', ar: 'أن يقول المستخدمون إن التطبيق سهل وممتع في الاستخدام.' }, weights: { ui_ux: 3, frontend: 1 } },
    { id: 'q5b', label: { en: 'The service handles heavy use without breaking.', ar: 'أن تتحمل الخدمة ضغط الاستخدام العالي دون تعطل.' }, weights: { backend: 2, devops_cloud: 2 } },
    { id: 'q5c', label: { en: 'The data reveals insights that guide better decisions.', ar: 'أن تكشف البيانات عن رؤى تقود لقرارات أفضل.' }, weights: { ai_data: 3 } },
    { id: 'q5d', label: { en: 'The system stays trustworthy against common attacks.', ar: 'أن يبقى النظام موثوقًا أمام الهجمات الشائعة.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q6', category: 'interest', prompt: { en: 'You have two free evenings to explore tech. What do you choose?', ar: 'لديك أمسيتان فارغتان لاستكشاف التقنية. ماذا تختار؟' }, options: [
    { id: 'q6a', label: { en: 'Rebuild a favorite app screen with accessibility improvements.', ar: 'إعادة بناء شاشة مفضلة مع تحسينات في سهولة الوصول.' }, weights: { frontend: 3, ui_ux: 1 } },
    { id: 'q6b', label: { en: 'Build a REST API and test edge cases.', ar: 'بناء REST API واختبار الحالات الطرفية.' }, weights: { backend: 3 } },
    { id: 'q6c', label: { en: 'Clean a dataset and compare simple prediction models.', ar: 'تنظيف مجموعة بيانات ومقارنة نماذج تنبؤ بسيطة.' }, weights: { ai_data: 3 } },
    { id: 'q6d', label: { en: 'Practice threat modeling and secure configurations.', ar: 'التدرّب على Threat Modeling وإعدادات الأمان الآمنة.' }, weights: { cybersecurity: 2, devops_cloud: 1 } }
  ]},

  { id: 'q7', category: 'thinking_style', prompt: { en: 'When a project is ambiguous, your first move is usually:', ar: 'عندما يكون المشروع غامضًا، ما أول خطوة تتخذها عادة؟' }, options: [
    { id: 'q7a', label: { en: 'Sketch user journeys before picking implementation details.', ar: 'رسم رحلات المستخدم قبل اختيار تفاصيل التنفيذ.' }, weights: { ui_ux: 3, frontend: 1 } },
    { id: 'q7b', label: { en: 'Define interfaces and contracts between components.', ar: 'تعريف الواجهات والعقود بين المكونات.' }, weights: { backend: 3 } },
    { id: 'q7c', label: { en: 'List measurable goals and test assumptions quickly.', ar: 'تحديد أهداف قابلة للقياس واختبار الفرضيات بسرعة.' }, weights: { ai_data: 3, devops_cloud: 1 } },
    { id: 'q7d', label: { en: 'Map trust boundaries and possible misuse paths.', ar: 'رسم حدود الثقة ومسارات إساءة الاستخدام المحتملة.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q8', category: 'thinking_style', prompt: { en: 'A teammate suggests a fast fix with unknown side effects. You think:', ar: 'زميل يقترح إصلاحًا سريعًا بآثار جانبية غير معروفة. ما أول ما تفكر فيه؟' }, options: [
    { id: 'q8a', label: { en: 'How might this affect user clarity and consistency?', ar: 'كيف سيؤثر ذلك على وضوح التجربة واتساقها للمستخدم؟' }, weights: { ui_ux: 2, frontend: 1 } },
    { id: 'q8b', label: { en: 'What technical debt and maintenance cost does this add?', ar: 'ما الدين التقني وتكلفة الصيانة التي سيضيفها هذا الحل؟' }, weights: { backend: 3 } },
    { id: 'q8c', label: { en: 'Can we validate this with a quick experiment first?', ar: 'هل يمكن التحقق منه أولًا بتجربة سريعة؟' }, weights: { ai_data: 3 } },
    { id: 'q8d', label: { en: 'Could this open a security gap or compliance risk?', ar: 'هل قد يفتح هذا ثغرة أمنية أو مخاطرة امتثال؟' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q9', category: 'thinking_style', prompt: { en: 'You are reviewing a new feature proposal. What stands out most?', ar: 'أنت تراجع مقترح ميزة جديدة. ما الجانب الذي يلفت انتباهك أكثر؟' }, options: [
    { id: 'q9a', label: { en: 'Whether the interactions match user expectations.', ar: 'هل تتوافق التفاعلات مع توقعات المستخدمين؟' }, weights: { frontend: 2, ui_ux: 2 } },
    { id: 'q9b', label: { en: 'Whether data models and APIs are future-proof.', ar: 'هل نماذج البيانات وواجهات API قابلة للتوسع مستقبلًا؟' }, weights: { backend: 3, devops_cloud: 1 } },
    { id: 'q9c', label: { en: 'Whether success metrics are defined clearly.', ar: 'هل مقاييس النجاح محددة بوضوح؟' }, weights: { ai_data: 3 } },
    { id: 'q9d', label: { en: 'Whether permissions and auditability are covered.', ar: 'هل تمت تغطية الصلاحيات وإمكانية التدقيق (Auditability)؟' }, weights: { cybersecurity: 3, backend: 1 } }
  ]},
  { id: 'q10', category: 'thinking_style', prompt: { en: 'In a debate, you often win people over by:', ar: 'في النقاش، غالبًا ما تقنع الآخرين من خلال:' }, options: [
    { id: 'q10a', label: { en: 'Showing a concrete mockup or prototype.', ar: 'عرض Mockup أو Prototype ملموس.' }, weights: { frontend: 2, ui_ux: 2 } },
    { id: 'q10b', label: { en: 'Explaining architecture trade-offs clearly.', ar: 'شرح مفاضلات المعمارية التقنية بوضوح.' }, weights: { backend: 3 } },
    { id: 'q10c', label: { en: 'Presenting data trends and measured outcomes.', ar: 'عرض اتجاهات البيانات والنتائج المقاسة.' }, weights: { ai_data: 3 } },
    { id: 'q10d', label: { en: 'Highlighting risk scenarios and mitigation plans.', ar: 'تسليط الضوء على سيناريوهات المخاطر وخطط التخفيف.' }, weights: { cybersecurity: 3, devops_cloud: 1 } }
  ]},
  { id: 'q11', category: 'thinking_style', prompt: { en: 'A bug keeps returning. Your instinct is to:', ar: 'خطأ برمجي يتكرر باستمرار. غريزتك الأولى هي:' }, options: [
    { id: 'q11a', label: { en: 'Recheck the user flow where confusion starts.', ar: 'إعادة فحص مسار المستخدم الذي يبدأ عنده الالتباس.' }, weights: { ui_ux: 2, frontend: 1 } },
    { id: 'q11b', label: { en: 'Trace service dependencies and shared state.', ar: 'تتبّع اعتماديات الخدمات والحالة المشتركة.' }, weights: { backend: 3 } },
    { id: 'q11c', label: { en: 'Analyze logs for patterns across incidents.', ar: 'تحليل السجلات لاكتشاف أنماط متكررة عبر الحوادث.' }, weights: { ai_data: 2, devops_cloud: 1 } },
    { id: 'q11d', label: { en: 'Assess whether the bug can be exploited.', ar: 'تقييم ما إذا كان يمكن استغلال هذا الخطأ.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q12', category: 'thinking_style', prompt: { en: 'When learning a new tool, what matters most to you?', ar: 'عند تعلّم أداة جديدة، ما الأمر الأكثر أهمية بالنسبة لك؟' }, options: [
    { id: 'q12a', label: { en: 'Seeing how it improves real user interactions.', ar: 'رؤية كيف تُحسّن تفاعلات المستخدم الفعلية.' }, weights: { frontend: 2, ui_ux: 2 } },
    { id: 'q12b', label: { en: 'Understanding how it scales and integrates.', ar: 'فهم طريقة التوسع والتكامل مع الأنظمة الأخرى.' }, weights: { backend: 2, devops_cloud: 1 } },
    { id: 'q12c', label: { en: 'Knowing what data it produces and how to evaluate it.', ar: 'معرفة نوع البيانات التي تنتجها وكيفية تقييمها.' }, weights: { ai_data: 3 } },
    { id: 'q12d', label: { en: 'Knowing how safely it handles credentials and access.', ar: 'معرفة مدى أمان تعاملها مع بيانات الاعتماد والصلاحيات.' }, weights: { cybersecurity: 3 } }
  ]},

  { id: 'q13', category: 'problem_solving', prompt: { en: 'An API call intermittently fails in production. What do you do first?', ar: 'يفشل استدعاء API بشكل متقطع في بيئة الإنتاج. ما أول خطوة تقوم بها؟' }, options: [
    { id: 'q13a', label: { en: 'Show a graceful fallback on the page and report context.', ar: 'عرض بديل سلس في الصفحة مع إرسال سياق الخطأ.' }, weights: { frontend: 2, ui_ux: 1 } },
    { id: 'q13b', label: { en: 'Reproduce with logs and isolate backend failure points.', ar: 'إعادة إنتاج المشكلة عبر السجلات وتحديد نقاط فشل الـ Backend.' }, weights: { backend: 3 } },
    { id: 'q13c', label: { en: 'Correlate failures with traffic and infrastructure metrics.', ar: 'ربط حالات الفشل بمعدلات الزيارات ومؤشرات البنية التحتية.' }, weights: { devops_cloud: 3, ai_data: 1 } },
    { id: 'q13d', label: { en: 'Check for abuse patterns or injection attempts.', ar: 'التحقق من أنماط الإساءة أو محاولات الحقن.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q14', category: 'problem_solving', prompt: { en: 'Users report slow page loads. Your strongest move is:', ar: 'المستخدمون يشتكون من بطء تحميل الصفحات. ما أقوى خطوة تبدأ بها؟' }, options: [
    { id: 'q14a', label: { en: 'Optimize render paths and simplify heavy UI blocks.', ar: 'تحسين مسارات العرض وتبسيط عناصر UI الثقيلة.' }, weights: { frontend: 3 } },
    { id: 'q14b', label: { en: 'Reduce payload sizes and improve endpoint efficiency.', ar: 'تقليل حجم البيانات المرسلة وتحسين كفاءة نقاط الخدمة.' }, weights: { backend: 3 } },
    { id: 'q14c', label: { en: 'Benchmark bottlenecks with performance data.', ar: 'قياس الاختناقات باستخدام بيانات الأداء.' }, weights: { ai_data: 2, devops_cloud: 1 } },
    { id: 'q14d', label: { en: 'Verify CDN/security rules are not throttling legitimate users.', ar: 'التحقق من أن قواعد CDN/الأمان لا تخنق المستخدمين الشرعيين.' }, weights: { cybersecurity: 2, devops_cloud: 1 } }
  ]},
  { id: 'q15', category: 'problem_solving', prompt: { en: 'You inherit unclear database tables. You begin by:', ar: 'استلمت جداول قاعدة بيانات غير واضحة. كيف تبدأ؟' }, options: [
    { id: 'q15a', label: { en: 'Mapping fields to what users actually see and do.', ar: 'ربط الحقول بما يراه المستخدم فعليًا وبما ينفذه.' }, weights: { ui_ux: 2, frontend: 1 } },
    { id: 'q15b', label: { en: 'Documenting schema relationships and constraints.', ar: 'توثيق علاقات المخطط والقيود بين الجداول.' }, weights: { backend: 3 } },
    { id: 'q15c', label: { en: 'Profiling data quality issues and missing values.', ar: 'تحليل مشكلات جودة البيانات والقيم المفقودة.' }, weights: { ai_data: 3 } },
    { id: 'q15d', label: { en: 'Reviewing access controls and data exposure risks.', ar: 'مراجعة ضوابط الوصول ومخاطر كشف البيانات.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q16', category: 'problem_solving', prompt: { en: 'A deployment breaks after a dependency update. You prioritize:', ar: 'تعطّل النشر بعد تحديث إحدى الاعتماديات. ما أولوية تعاملك؟' }, options: [
    { id: 'q16a', label: { en: 'Communicating impact clearly to users in the interface.', ar: 'توضيح أثر المشكلة للمستخدمين بوضوح داخل الواجهة.' }, weights: { frontend: 2, ui_ux: 1 } },
    { id: 'q16b', label: { en: 'Pinning versions and validating service compatibility.', ar: 'تثبيت الإصدارات والتحقق من توافق الخدمات.' }, weights: { backend: 2, devops_cloud: 1 } },
    { id: 'q16c', label: { en: 'Improving CI checks to catch this earlier next time.', ar: 'تحسين فحوصات CI لاكتشاف هذا الخلل مبكرًا لاحقًا.' }, weights: { devops_cloud: 3 } },
    { id: 'q16d', label: { en: 'Scanning for vulnerable packages before redeploying.', ar: 'فحص الحزم الضعيفة أمنيًا قبل إعادة النشر.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q17', category: 'problem_solving', prompt: { en: 'Team members disagree on feature priority. You help by:', ar: 'أعضاء الفريق مختلفون حول أولوية الميزات. كيف تساعد في الحسم؟' }, options: [
    { id: 'q17a', label: { en: 'Running quick user interviews to clarify pain points.', ar: 'إجراء مقابلات مستخدمين سريعة لتوضيح نقاط الألم.' }, weights: { ui_ux: 3 } },
    { id: 'q17b', label: { en: 'Estimating engineering complexity and dependencies.', ar: 'تقدير التعقيد الهندسي والاعتماديات بين المهام.' }, weights: { backend: 3 } },
    { id: 'q17c', label: { en: 'Using usage data to rank likely impact.', ar: 'استخدام بيانات الاستخدام لترتيب الأثر المتوقع.' }, weights: { ai_data: 3 } },
    { id: 'q17d', label: { en: 'Flagging choices that increase security exposure.', ar: 'التنبيه إلى الخيارات التي تزيد سطح التعرض الأمني.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q18', category: 'problem_solving', prompt: { en: 'A feature works but fails under high load. Your fix strategy:', ar: 'الميزة تعمل، لكنها تفشل تحت ضغط عالٍ. ما استراتيجية الإصلاح لديك؟' }, options: [
    { id: 'q18a', label: { en: 'Simplify expensive client-side interactions.', ar: 'تبسيط التفاعلات المكلفة على جهة العميل.' }, weights: { frontend: 2 } },
    { id: 'q18b', label: { en: 'Refactor bottleneck services and queue heavy tasks.', ar: 'إعادة هيكلة الخدمات المختنقة ووضع المهام الثقيلة في طابور.' }, weights: { backend: 3 } },
    { id: 'q18c', label: { en: 'Tune autoscaling, caching, and observability.', ar: 'ضبط Autoscaling وCaching وقابلية المراقبة.' }, weights: { devops_cloud: 3 } },
    { id: 'q18d', label: { en: 'Check denial-of-service protections and throttling.', ar: 'فحص حماية حجب الخدمة (DoS) وآليات التقييد.' }, weights: { cybersecurity: 2, devops_cloud: 1 } }
  ]},

  { id: 'q19', category: 'work_preference', prompt: { en: 'Which team role feels most natural in a group project?', ar: 'أي دور في الفريق يبدو لك الأكثر طبيعية في مشروع جماعي؟' }, options: [
    { id: 'q19a', label: { en: 'Crafting intuitive screens and interaction polish.', ar: 'تصميم شاشات بديهية وصقل تفاصيل التفاعل.' }, weights: { frontend: 2, ui_ux: 2 } },
    { id: 'q19b', label: { en: 'Owning core services and technical foundations.', ar: 'تولي الخدمات الأساسية والأساس التقني للنظام.' }, weights: { backend: 3 } },
    { id: 'q19c', label: { en: 'Maintaining deployment pipelines and reliability.', ar: 'إدارة خطوط النشر والحفاظ على الاعتمادية.' }, weights: { devops_cloud: 3 } },
    { id: 'q19d', label: { en: 'Leading threat reviews and secure coding checks.', ar: 'قيادة مراجعات التهديدات وفحوصات البرمجة الآمنة.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q20', category: 'work_preference', prompt: { en: 'What kind of project meetings do you enjoy most?', ar: 'ما نوع اجتماعات المشروع الذي تستمتع به أكثر؟' }, options: [
    { id: 'q20a', label: { en: 'Sessions where we test flows from a user perspective.', ar: 'جلسات نختبر فيها المسارات من منظور المستخدم.' }, weights: { ui_ux: 3, frontend: 1 } },
    { id: 'q20b', label: { en: 'Architecture reviews with technical trade-offs.', ar: 'مراجعات معمارية تناقش المفاضلات التقنية.' }, weights: { backend: 3 } },
    { id: 'q20c', label: { en: 'Metric reviews focused on outcomes and experiments.', ar: 'مراجعات مؤشرات تركز على النتائج والتجارب.' }, weights: { ai_data: 3 } },
    { id: 'q20d', label: { en: 'Risk reviews covering security and incident readiness.', ar: 'مراجعات مخاطر تغطي الأمان وجاهزية التعامل مع الحوادث.' }, weights: { cybersecurity: 3, devops_cloud: 1 } }
  ]},
  { id: 'q21', category: 'work_preference', prompt: { en: 'Given ownership of one area, which would you choose?', ar: 'إذا مُنحت ملكية مجال واحد، فأي مجال تختار؟' }, options: [
    { id: 'q21a', label: { en: 'Design system consistency and frontend quality.', ar: 'اتساق نظام التصميم وجودة الـ Frontend.' }, weights: { frontend: 3, ui_ux: 1 } },
    { id: 'q21b', label: { en: 'API reliability and backend maintainability.', ar: 'اعتمادية API وقابلية صيانة الـ Backend.' }, weights: { backend: 3 } },
    { id: 'q21c', label: { en: 'Model performance and data pipeline quality.', ar: 'أداء النماذج وجودة مسار البيانات.' }, weights: { ai_data: 3 } },
    { id: 'q21d', label: { en: 'Platform resilience and deployment confidence.', ar: 'مرونة المنصة والثقة في عمليات النشر.' }, weights: { devops_cloud: 3 } }
  ]},
  { id: 'q22', category: 'work_preference', prompt: { en: 'You feel most productive when you can:', ar: 'تشعر بأعلى إنتاجية عندما تستطيع:' }, options: [
    { id: 'q22a', label: { en: 'Iterate quickly on visual feedback.', ar: 'التكرار بسرعة بناءً على الملاحظات البصرية.' }, weights: { frontend: 2, ui_ux: 2 } },
    { id: 'q22b', label: { en: 'Solve deep logic and edge cases.', ar: 'حل المنطق العميق والحالات الطرفية.' }, weights: { backend: 3 } },
    { id: 'q22c', label: { en: 'Investigate patterns and validate hypotheses.', ar: 'استقصاء الأنماط والتحقق من الفرضيات.' }, weights: { ai_data: 3 } },
    { id: 'q22d', label: { en: 'Reduce operational risks and improve trust.', ar: 'تقليل المخاطر التشغيلية وتعزيز الثقة.' }, weights: { cybersecurity: 2, devops_cloud: 1 } }
  ]},
  { id: 'q23', category: 'work_preference', prompt: { en: 'Which project milestone excites you most?', ar: 'أي محطة إنجاز في المشروع تثير حماسك أكثر؟' }, options: [
    { id: 'q23a', label: { en: 'First polished prototype users can click through.', ar: 'أول نموذج أولي مصقول يمكن للمستخدمين تجربته بالنقر.' }, weights: { ui_ux: 2, frontend: 2 } },
    { id: 'q23b', label: { en: 'Stable backend API ready for multiple clients.', ar: 'واجهة Backend API مستقرة وجاهزة لعدة عملاء.' }, weights: { backend: 3 } },
    { id: 'q23c', label: { en: 'Dashboard showing model or product performance gains.', ar: 'لوحة تعرض تحسن أداء النموذج أو المنتج.' }, weights: { ai_data: 3 } },
    { id: 'q23d', label: { en: 'Zero-downtime release with automated checks.', ar: 'إصدار بلا توقف خدمة مع فحوصات آلية.' }, weights: { devops_cloud: 3 } }
  ]},
  { id: 'q24', category: 'work_preference', prompt: { en: 'In cross-functional work, you usually advocate for:', ar: 'في العمل متعدد التخصصات، ما الذي تدافع عنه غالبًا؟' }, options: [
    { id: 'q24a', label: { en: 'Clarity, accessibility, and smooth interaction.', ar: 'الوضوح، وسهولة الوصول، وتفاعل سلس.' }, weights: { ui_ux: 3, frontend: 1 } },
    { id: 'q24b', label: { en: 'System simplicity and maintainable architecture.', ar: 'بساطة النظام ومعمارية قابلة للصيانة.' }, weights: { backend: 3 } },
    { id: 'q24c', label: { en: 'Evidence-based decisions using data.', ar: 'قرارات مبنية على الأدلة باستخدام البيانات.' }, weights: { ai_data: 3 } },
    { id: 'q24d', label: { en: 'Secure defaults and least-privilege access.', ar: 'إعدادات آمنة افتراضيًا ووصول بأقل الصلاحيات.' }, weights: { cybersecurity: 3 } }
  ]},

  { id: 'q25', category: 'learning_style', prompt: { en: 'Which learning resource helps you improve fastest?', ar: 'أي مورد تعلّم يساعدك على التطور بأسرع شكل؟' }, options: [
    { id: 'q25a', label: { en: 'Interactive UI teardown videos and design critiques.', ar: 'فيديوهات تفكيك UI بشكل تفاعلي مع نقد للتصميم.' }, weights: { frontend: 2, ui_ux: 2 } },
    { id: 'q25b', label: { en: 'Backend architecture walkthroughs with code labs.', ar: 'شروحات معمارية Backend مع تمارين عملية على الكود.' }, weights: { backend: 3 } },
    { id: 'q25c', label: { en: 'Notebook-based tutorials with datasets and metrics.', ar: 'دروس عبر Notebooks تتضمن datasets ومقاييس تقييم.' }, weights: { ai_data: 3 } },
    { id: 'q25d', label: { en: 'Capture-the-flag labs and security case studies.', ar: 'مختبرات Capture-the-Flag ودراسات حالات أمنية.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q26', category: 'learning_style', prompt: { en: 'When practicing, you prefer to start by:', ar: 'عند التدرّب، تفضّل أن تبدأ بـ:' }, options: [
    { id: 'q26a', label: { en: 'Building a visible demo and refining details.', ar: 'بناء Demo واضح ثم صقل التفاصيل.' }, weights: { frontend: 3, ui_ux: 1 } },
    { id: 'q26b', label: { en: 'Creating robust service logic and tests.', ar: 'إنشاء منطق خدمات قوي مع اختبارات.' }, weights: { backend: 3 } },
    { id: 'q26c', label: { en: 'Running experiments and comparing outcomes.', ar: 'تنفيذ تجارب ومقارنة النتائج.' }, weights: { ai_data: 3 } },
    { id: 'q26d', label: { en: 'Configuring secure infrastructure in a sandbox.', ar: 'إعداد بنية تحتية آمنة داخل بيئة Sandbox.' }, weights: { devops_cloud: 2, cybersecurity: 2 } }
  ]},
  { id: 'q27', category: 'learning_style', prompt: { en: 'How do you know you truly learned a topic?', ar: 'كيف تعرف أنك تعلّمت موضوعًا بشكل حقيقي؟' }, options: [
    { id: 'q27a', label: { en: 'I can make it simple and usable for others.', ar: 'عندما أستطيع تبسيطه وجعله قابلًا للاستخدام للآخرين.' }, weights: { ui_ux: 2, frontend: 2 } },
    { id: 'q27b', label: { en: 'I can explain internal trade-offs and constraints.', ar: 'عندما أستطيع شرح المفاضلات الداخلية والقيود.' }, weights: { backend: 3 } },
    { id: 'q27c', label: { en: 'I can measure improvement with reliable metrics.', ar: 'عندما أستطيع قياس التحسّن بمقاييس موثوقة.' }, weights: { ai_data: 3 } },
    { id: 'q27d', label: { en: 'I can spot risks and prevent common failures.', ar: 'عندما أستطيع رصد المخاطر ومنع الأعطال الشائعة.' }, weights: { cybersecurity: 3, devops_cloud: 1 } }
  ]},
  { id: 'q28', category: 'learning_style', prompt: { en: 'Which assignment format motivates you most?', ar: 'أي نوع من الواجبات يحفّزك أكثر؟' }, options: [
    { id: 'q28a', label: { en: 'Prototype challenge with user feedback.', ar: 'تحدّي Prototype يتضمن ملاحظات مستخدمين.' }, weights: { ui_ux: 3, frontend: 1 } },
    { id: 'q28b', label: { en: 'Service implementation with strict test cases.', ar: 'تنفيذ خدمة مع حالات اختبار صارمة.' }, weights: { backend: 3 } },
    { id: 'q28c', label: { en: 'Data challenge with prediction and evaluation.', ar: 'تحدّي بيانات يشمل التنبؤ والتقييم.' }, weights: { ai_data: 3 } },
    { id: 'q28d', label: { en: 'Incident simulation and recovery drill.', ar: 'محاكاة Incident وتمرين على التعافي.' }, weights: { devops_cloud: 2, cybersecurity: 2 } }
  ]},
  { id: 'q29', category: 'learning_style', prompt: { en: 'When stuck, you are most likely to:', ar: 'عندما تتعثر، ما الذي تُرجّح أن تفعله؟' }, options: [
    { id: 'q29a', label: { en: 'Replay the user flow and simplify interactions.', ar: 'إعادة تتبّع مسار المستخدم وتبسيط التفاعلات.' }, weights: { frontend: 2, ui_ux: 1 } },
    { id: 'q29b', label: { en: 'Read docs and inspect low-level implementation details.', ar: 'قراءة التوثيق وفحص تفاصيل التنفيذ منخفضة المستوى.' }, weights: { backend: 3 } },
    { id: 'q29c', label: { en: 'Collect evidence from logs and performance traces.', ar: 'جمع أدلة من السجلات ومسارات الأداء.' }, weights: { ai_data: 2, devops_cloud: 1 } },
    { id: 'q29d', label: { en: 'Review security assumptions and permissions.', ar: 'مراجعة افتراضات الأمان والصلاحيات.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q30', category: 'learning_style', prompt: { en: 'You retain knowledge best when:', ar: 'تحتفظ بالمعرفة بشكل أفضل عندما:' }, options: [
    { id: 'q30a', label: { en: 'I iterate on visuals and interaction details.', ar: 'أكرّر التحسين على العناصر البصرية وتفاصيل التفاعل.' }, weights: { frontend: 2, ui_ux: 2 } },
    { id: 'q30b', label: { en: 'I build systems end-to-end and test them.', ar: 'أبني أنظمة كاملة من البداية للنهاية وأختبرها.' }, weights: { backend: 2, devops_cloud: 1 } },
    { id: 'q30c', label: { en: 'I compare approaches with data-backed results.', ar: 'أقارن بين الأساليب اعتمادًا على نتائج مدعومة بالبيانات.' }, weights: { ai_data: 3 } },
    { id: 'q30d', label: { en: 'I model threats and defend against them.', ar: 'أُجري Threat Modeling وأبني وسائل دفاع ضدها.' }, weights: { cybersecurity: 3 } }
  ]},

  { id: 'q31', category: 'real_world_scenario', prompt: { en: 'A school portal update accidentally exposes private data. What would you lead first?', ar: 'تحديث في بوابة مدرسية كشف بيانات خاصة بالخطأ. ما الذي ستقوده أولًا؟' }, options: [
    { id: 'q31a', label: { en: 'User-facing messaging so affected users understand next steps.', ar: 'رسائل واضحة للمستخدمين المتأثرين ليفهموا الخطوات التالية.' }, weights: { ui_ux: 2, frontend: 1 } },
    { id: 'q31b', label: { en: 'Service-side rollback and data access patching.', ar: 'التراجع على مستوى الخدمة مع إصلاح صلاحيات الوصول للبيانات.' }, weights: { backend: 2, devops_cloud: 1 } },
    { id: 'q31c', label: { en: 'Forensic analysis to map affected records quickly.', ar: 'تحليل جنائي رقمي لتحديد السجلات المتأثرة بسرعة.' }, weights: { ai_data: 2, cybersecurity: 1 } },
    { id: 'q31d', label: { en: 'Containment plan, credential resets, and audit controls.', ar: 'خطة احتواء مع إعادة تعيين بيانات الاعتماد وضوابط تدقيق.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q32', category: 'real_world_scenario', prompt: { en: 'Your app launches tomorrow and last-minute failures appear. You focus on:', ar: 'تطبيقك سيُطلق غدًا وظهرت أعطال في اللحظة الأخيرة. على ماذا تركّز؟' }, options: [
    { id: 'q32a', label: { en: 'Clear fallback UI and communication for users.', ar: 'واجهة UI بديلة واضحة مع تواصل مباشر للمستخدمين.' }, weights: { frontend: 2, ui_ux: 1 } },
    { id: 'q32b', label: { en: 'Critical backend fixes with safe deployment steps.', ar: 'إصلاحات Backend الحرجة مع خطوات deployment آمنة.' }, weights: { backend: 3 } },
    { id: 'q32c', label: { en: 'Release health checks and rollback automation.', ar: 'فحوصات صحة الإصدار وأتمتة التراجع (Rollback).' }, weights: { devops_cloud: 3 } },
    { id: 'q32d', label: { en: 'Security verification of hotfixes before release.', ar: 'التحقق أمنيًا من الإصلاحات السريعة قبل الإطلاق.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q33', category: 'real_world_scenario', prompt: { en: 'A nonprofit asks for a low-budget tech solution. You suggest:', ar: 'منظمة غير ربحية طلبت حلًا تقنيًا منخفض التكلفة. ماذا تقترح؟' }, options: [
    { id: 'q33a', label: { en: 'Simple mobile-friendly interface with clear workflows.', ar: 'واجهة بسيطة مناسبة للجوال مع مسارات عمل واضحة.' }, weights: { frontend: 2, ui_ux: 2 } },
    { id: 'q33b', label: { en: 'Lean backend with maintainable core features.', ar: 'Backend خفيف بميزات أساسية قابلة للصيانة.' }, weights: { backend: 3 } },
    { id: 'q33c', label: { en: 'Basic analytics to monitor impact and improve over time.', ar: 'تحليلات أساسية لمتابعة الأثر والتحسين مع الوقت.' }, weights: { ai_data: 3 } },
    { id: 'q33d', label: { en: 'Secure hosting and least-privilege permissions from day one.', ar: 'استضافة آمنة وصلاحيات بأقل امتياز منذ اليوم الأول.' }, weights: { devops_cloud: 1, cybersecurity: 2 } }
  ]},
  { id: 'q34', category: 'real_world_scenario', prompt: { en: 'You must present project outcomes to school leaders. You lead with:', ar: 'عليك عرض نتائج المشروع على قيادات المدرسة. بماذا تبدأ؟' }, options: [
    { id: 'q34a', label: { en: 'Before/after user journey improvements.', ar: 'تحسينات رحلة المستخدم قبل التنفيذ وبعده.' }, weights: { ui_ux: 3, frontend: 1 } },
    { id: 'q34b', label: { en: 'System reliability and response-time improvements.', ar: 'تحسّن اعتمادية النظام وزمن الاستجابة.' }, weights: { backend: 2, devops_cloud: 1 } },
    { id: 'q34c', label: { en: 'Data evidence showing measurable impact.', ar: 'أدلة من البيانات تُظهر أثرًا قابلًا للقياس.' }, weights: { ai_data: 3 } },
    { id: 'q34d', label: { en: 'Risk reduction and security hardening outcomes.', ar: 'نتائج خفض المخاطر وتعزيز التحصين الأمني.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q35', category: 'real_world_scenario', prompt: { en: 'A mobile network outage affects many users. Your first plan is:', ar: 'انقطاع شبكة الجوال أثّر على عدد كبير من المستخدمين. ما خطتك الأولى؟' }, options: [
    { id: 'q35a', label: { en: 'Design lightweight screens that degrade gracefully.', ar: 'تصميم شاشات خفيفة تحافظ على تجربة مقبولة عند ضعف الاتصال.' }, weights: { frontend: 3, ui_ux: 1 } },
    { id: 'q35b', label: { en: 'Queue writes and sync once connection returns.', ar: 'وضع عمليات الكتابة في طابور ثم مزامنتها عند عودة الاتصال.' }, weights: { backend: 3 } },
    { id: 'q35c', label: { en: 'Adjust infrastructure and monitor recovery metrics.', ar: 'تعديل البنية التحتية ومراقبة مؤشرات التعافي.' }, weights: { devops_cloud: 3 } },
    { id: 'q35d', label: { en: 'Ensure offline behavior does not bypass protections.', ar: 'ضمان أن وضع Offline لا يتجاوز ضوابط الحماية.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q36', category: 'real_world_scenario', prompt: { en: 'A student startup asks you to choose one quality bar before scaling. You pick:', ar: 'شركة ناشئة طلابية طلبت منك اختيار معيار جودة واحد قبل التوسع. ماذا تختار؟' }, options: [
    { id: 'q36a', label: { en: 'Consistent experience across devices and abilities.', ar: 'تجربة متسقة عبر الأجهزة ولمختلف قدرات المستخدمين.' }, weights: { ui_ux: 2, frontend: 2 } },
    { id: 'q36b', label: { en: 'Stable service contracts and clear data ownership.', ar: 'عقود خدمات مستقرة وملكية بيانات واضحة.' }, weights: { backend: 3 } },
    { id: 'q36c', label: { en: 'Reliable monitoring with alert-driven operations.', ar: 'مراقبة موثوقة مع عمليات تشغيل مبنية على التنبيهات.' }, weights: { devops_cloud: 3 } },
    { id: 'q36d', label: { en: 'Security-by-default configurations and review gates.', ar: 'إعدادات آمنة افتراضيًا مع بوابات مراجعة أمنية.' }, weights: { cybersecurity: 3 } }
  ]}
];
