import type { Question } from '../types/quiz';

export const QUESTIONS: Question[] = [
  { id: 'q1', category: 'interest', prompt: { en: 'Your team is building a simple app for a student club. Which part do you naturally want to handle first?', ar: 'فريقك يبني تطبيقًا بسيطًا لنادٍ طلابي. أي جزء تميل أن تبدأ به؟' }, options: [
    { id: 'q1a', label: { en: 'Arrange the screens so new students can finish quickly without asking for help.', ar: 'ترتيب الشاشات بحيث ينهي الطالب الجديد الخطوات بسهولة وبدون سؤال.' }, weights: { ui_ux: 3, frontend: 1 } },
    { id: 'q1b', label: { en: 'Build the hidden steps that save the form and return the right info to each screen.', ar: 'بناء الخطوات الخلفية التي تحفظ البيانات وترجع المعلومات الصحيحة لكل شاشة.' }, weights: { backend: 2, software_engineer: 1 } },
    { id: 'q1c', label: { en: 'Check where students stop, then use that pattern to suggest a better flow.', ar: 'معرفة أين يتوقف الطلاب ثم استخدام النمط لتحسين المسار.' }, weights: { ai_data: 3 } },
    { id: 'q1d', label: { en: 'Review who can open private pages and where accidental access could happen.', ar: 'مراجعة من يستطيع فتح الصفحات الخاصة وأين قد يحدث وصول غير مقصود.' }, weights: { cybersecurity: 2, backend: 1 } }
  ]},
  { id: 'q2', category: 'interest', prompt: { en: 'Event registration opens, and many students join at once. What would you work on first?', ar: 'فتح تسجيل فعالية، ودخل طلاب كثيرون في نفس الوقت. على ماذا تعمل أولًا؟' }, options: [
    { id: 'q2a', label: { en: 'Make a clear page that tells students what is working and what to try next.', ar: 'إنشاء صفحة واضحة تخبر الطلاب بما يعمل الآن وما الخطوة التالية.' }, weights: { frontend: 2, ui_ux: 1 } },
    { id: 'q2b', label: { en: 'Fix the main signup logic so requests are handled in the right order.', ar: 'إصلاح منطق التسجيل الأساسي حتى تُعالج الطلبات بالترتيب الصحيح.' }, weights: { backend: 2, software_engineer: 1 } },
    { id: 'q2c', label: { en: 'Keep the app stable during peak time so it stays available for everyone.', ar: 'الحفاظ على ثبات التطبيق وقت الضغط حتى يبقى متاحًا للجميع.' }, weights: { devops_cloud: 3 } },
    { id: 'q2d', label: { en: 'Check for repeated suspicious attempts that could block real students.', ar: 'التحقق من محاولات متكررة ومريبة قد تمنع الطلاب الحقيقيين من الدخول.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q3', category: 'interest', prompt: { en: 'In a class project, which type of task sounds most fun to you?', ar: 'في مشروع مادة، أي نوع من المهام يبدو ممتعًا لك أكثر؟' }, options: [
    { id: 'q3a', label: { en: 'Turn a rough screen into something clear, friendly, and easy to click through.', ar: 'تحويل شاشة غير واضحة إلى تجربة سهلة ومريحة للتنقل.' }, weights: { frontend: 2, ui_ux: 2 } },
    { id: 'q3b', label: { en: 'Use student activity data to predict what content should appear first.', ar: 'استخدام بيانات نشاط الطلاب للتنبؤ بما يجب أن يظهر أولًا.' }, weights: { ai_data: 3 } },
    { id: 'q3c', label: { en: 'Find weak points where private info could be seen by the wrong person.', ar: 'اكتشاف النقاط الضعيفة التي قد تكشف معلومات خاصة لغير المصرح لهم.' }, weights: { cybersecurity: 3 } },
    { id: 'q3d', label: { en: 'Set up the app so updates are smooth and the app quickly recovers from errors.', ar: 'إعداد التطبيق بحيث تكون التحديثات سلسة ويعود بسرعة عند حدوث خطأ.' }, weights: { devops_cloud: 3 } }
  ]},
  { id: 'q4', category: 'interest', prompt: { en: 'You join a group project late. Where do you usually help first?', ar: 'انضممت متأخرًا لمشروع جماعي. أين تساعد عادةً أولًا؟' }, options: [
    { id: 'q4a', label: { en: 'Clean up the interface so buttons, messages, and steps are easier to understand.', ar: 'تنظيم الواجهة بحيث تكون الأزرار والرسائل والخطوات أسهل للفهم.' }, weights: { frontend: 2, ui_ux: 1 } },
    { id: 'q4b', label: { en: 'Connect the screens, logic, and saved info so the feature works end-to-end.', ar: 'ربط الشاشات والمنطق والمعلومات المحفوظة حتى تعمل الميزة كاملة.' }, weights: { software_engineer: 3 } },
    { id: 'q4c', label: { en: 'Compare results from two ideas and keep the one that helps students more.', ar: 'مقارنة نتائج فكرتين واختيار ما يفيد الطلاب أكثر.' }, weights: { ai_data: 3 } },
    { id: 'q4d', label: { en: 'Review settings and permissions so the app stays reliable and safe.', ar: 'مراجعة الإعدادات والصلاحيات ليبقى التطبيق ثابتًا وآمنًا.' }, weights: { devops_cloud: 2, cybersecurity: 1 } }
  ]},
  { id: 'q5', category: 'interest', prompt: { en: 'When your team demo goes well, which result makes you happiest?', ar: 'عندما ينجح عرض فريقك، أي نتيجة تسعدك أكثر؟' }, options: [
    { id: 'q5a', label: { en: 'Users say the app is easy and pleasant to use.', ar: 'أن يقول المستخدمون إن التطبيق سهل وممتع في الاستخدام.' }, weights: { ui_ux: 3, frontend: 1 } },
    { id: 'q5b', label: { en: 'Everything works together smoothly, even when many students use it.', ar: 'أن تعمل كل الأجزاء معًا بسلاسة حتى مع استخدام عدد كبير من الطلاب.' }, weights: { software_engineer: 2, backend: 1 } },
    { id: 'q5c', label: { en: 'The numbers show clear patterns that help improve the next version.', ar: 'أن تُظهر الأرقام أنماطًا واضحة تساعد على تحسين النسخة التالية.' }, weights: { ai_data: 3 } },
    { id: 'q5d', label: { en: 'Private info stays protected and no one gets access by mistake.', ar: 'أن تبقى المعلومات الخاصة محمية ولا يصل إليها أحد بالخطأ.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q6', category: 'interest', prompt: { en: 'You have two free evenings before exams. What mini project would you build?', ar: 'لديك أمسيتان قبل الاختبارات. ما المشروع الصغير الذي تبنيه؟' }, options: [
    { id: 'q6a', label: { en: 'Rebuild a favorite app screen with accessibility improvements.', ar: 'إعادة بناء شاشة مفضلة مع تحسينات في سهولة الوصول.' }, weights: { frontend: 3, ui_ux: 1 } },
    { id: 'q6b', label: { en: 'Build the core logic for a feature and split it into clear, testable steps.', ar: 'بناء منطق ميزة أساسية وتقسيمه إلى خطوات واضحة يمكن اختبارها.' }, weights: { software_engineer: 2, backend: 1 } },
    { id: 'q6c', label: { en: 'Clean student survey data and test a simple way to predict outcomes.', ar: 'تنظيف بيانات استبيان طلابي وتجربة طريقة بسيطة للتنبؤ بالنتائج.' }, weights: { ai_data: 3 } },
    { id: 'q6d', label: { en: 'Review where mistakes could expose private data, then close those gaps.', ar: 'مراجعة الأماكن التي قد تكشف بيانات خاصة ثم إغلاق هذه الثغرات.' }, weights: { cybersecurity: 3 } }
  ]},

  { id: 'q7', category: 'thinking_style', prompt: { en: 'When a class assignment is unclear, what do you do first?', ar: 'عندما يكون واجب المادة غير واضح، ماذا تفعل أولًا؟' }, options: [
    { id: 'q7a', label: { en: 'Sketch user journeys before picking implementation details.', ar: 'رسم رحلات المستخدم قبل اختيار تفاصيل التنفيذ.' }, weights: { ui_ux: 3, frontend: 1 } },
    { id: 'q7b', label: { en: 'Break the problem into small parts and map how each part connects.', ar: 'تقسيم المشكلة إلى أجزاء صغيرة وتحديد كيف يرتبط كل جزء بالآخر.' }, weights: { software_engineer: 3 } },
    { id: 'q7c', label: { en: 'List measurable goals and test assumptions quickly.', ar: 'تحديد أهداف قابلة للقياس واختبار الفرضيات بسرعة.' }, weights: { ai_data: 3, devops_cloud: 1 } },
    { id: 'q7d', label: { en: 'Ask who should access what, and where misuse could happen.', ar: 'سؤال: من يحق له الوصول؟ وأين قد يحدث استخدام خاطئ؟' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q8', category: 'thinking_style', prompt: { en: 'A teammate suggests a quick fix, but no one knows its side effects. Your first thought is:', ar: 'زميل يقترح إصلاحًا سريعًا، لكن لا أحد يعرف نتائجه الجانبية. ما أول فكرة عندك؟' }, options: [
    { id: 'q8a', label: { en: 'How might this affect user clarity and consistency?', ar: 'كيف سيؤثر ذلك على وضوح التجربة واتساقها للمستخدم؟' }, weights: { ui_ux: 2, frontend: 1 } },
    { id: 'q8b', label: { en: 'What could break later, and how can we solve this in a cleaner way?', ar: 'ما الذي قد يتعطل لاحقًا؟ وكيف نحل المشكلة بطريقة أنظف؟' }, weights: { software_engineer: 2, backend: 1 } },
    { id: 'q8c', label: { en: 'Can we validate this with a quick experiment first?', ar: 'هل يمكن التحقق منه أولًا بتجربة سريعة؟' }, weights: { ai_data: 3 } },
    { id: 'q8d', label: { en: 'Could this accidentally expose private information or open a risky shortcut?', ar: 'هل قد يكشف معلومات خاصة أو يفتح طريقًا خطرًا بالخطأ؟' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q9', category: 'thinking_style', prompt: { en: 'You are reviewing an idea for a new feature. What do you pay attention to most?', ar: 'أنت تراجع فكرة لميزة جديدة. ما الذي تركز عليه أكثر؟' }, options: [
    { id: 'q9a', label: { en: 'Whether the interactions match user expectations.', ar: 'هل تتوافق التفاعلات مع توقعات المستخدمين؟' }, weights: { frontend: 2, ui_ux: 2 } },
    { id: 'q9b', label: { en: 'Whether the plan is complete: screens, logic, and saved info all fit together.', ar: 'هل الخطة متكاملة: الشاشات والمنطق والمعلومات المحفوظة تعمل معًا.' }, weights: { software_engineer: 3 } },
    { id: 'q9c', label: { en: 'Whether success metrics are defined clearly.', ar: 'هل مقاييس النجاح محددة بوضوح؟' }, weights: { ai_data: 3 } },
    { id: 'q9d', label: { en: 'Whether access is limited correctly, especially for private student details.', ar: 'هل الوصول مضبوط بشكل صحيح خصوصًا لبيانات الطلاب الخاصة؟' }, weights: { cybersecurity: 2, backend: 1 } }
  ]},
  { id: 'q10', category: 'thinking_style', prompt: { en: 'In team discussions, how do you usually convince others?', ar: 'في نقاشات الفريق، كيف تقنع الآخرين غالبًا؟' }, options: [
    { id: 'q10a', label: { en: 'By showing a simple clickable version people can try right away.', ar: 'بعرض نسخة بسيطة قابلة للتجربة فورًا.' }, weights: { frontend: 2, ui_ux: 2 } },
    { id: 'q10b', label: { en: 'By explaining a step-by-step plan that the team can build and test.', ar: 'بشرح خطة خطوة بخطوة يمكن للفريق تنفيذها واختبارها.' }, weights: { software_engineer: 3 } },
    { id: 'q10c', label: { en: 'Presenting data trends and measured outcomes.', ar: 'عرض اتجاهات البيانات والنتائج المقاسة.' }, weights: { ai_data: 3 } },
    { id: 'q10d', label: { en: 'By pointing out risky situations early and how to avoid them.', ar: 'بتوضيح المواقف الخطرة مبكرًا وكيفية تجنبها.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q11', category: 'thinking_style', prompt: { en: 'The same bug keeps coming back in your student project. What is your first move?', ar: 'نفس الخطأ يعود في مشروعك الطلابي. ما أول خطوة تقوم بها؟' }, options: [
    { id: 'q11a', label: { en: 'Recheck the user flow where confusion starts.', ar: 'إعادة فحص مسار المستخدم الذي يبدأ عنده الالتباس.' }, weights: { ui_ux: 2, frontend: 1 } },
    { id: 'q11b', label: { en: 'Trace the full path of the bug and fix the root cause, not just the symptom.', ar: 'تتبّع المسار الكامل للخطأ وإصلاح السبب الجذري لا العرض فقط.' }, weights: { software_engineer: 2, backend: 1 } },
    { id: 'q11c', label: { en: 'Look at repeated patterns in reports to see when and why it appears.', ar: 'البحث عن أنماط متكررة في التقارير لمعرفة متى ولماذا يظهر.' }, weights: { ai_data: 3 } },
    { id: 'q11d', label: { en: 'Assess whether the bug can be exploited.', ar: 'تقييم ما إذا كان يمكن استغلال هذا الخطأ.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q12', category: 'thinking_style', prompt: { en: 'When learning a new tool for class, what matters most to you?', ar: 'عند تعلم أداة جديدة للمادة، ما الذي يهمك أكثر؟' }, options: [
    { id: 'q12a', label: { en: 'Seeing how it improves real user interactions.', ar: 'رؤية كيف تُحسّن تفاعلات المستخدم الفعلية.' }, weights: { frontend: 2, ui_ux: 2 } },
    { id: 'q12b', label: { en: 'Understanding how to use it in a complete feature from start to finish.', ar: 'فهم كيفية استخدامها في ميزة كاملة من البداية للنهاية.' }, weights: { software_engineer: 2, backend: 1 } },
    { id: 'q12c', label: { en: 'Knowing what data it produces and how to evaluate it.', ar: 'معرفة نوع البيانات التي تنتجها وكيفية تقييمها.' }, weights: { ai_data: 3 } },
    { id: 'q12d', label: { en: 'Knowing how safely it handles student accounts and private information.', ar: 'معرفة مدى أمان تعاملها مع حسابات الطلاب والمعلومات الخاصة.' }, weights: { cybersecurity: 3 } }
  ]},

  { id: 'q13', category: 'problem_solving', prompt: { en: 'Your team’s app sometimes shows the wrong saved student info. What would you check first?', ar: 'تطبيق فريقك يعرض أحيانًا معلومات طلاب محفوظة بشكل خاطئ. ماذا تفحص أولًا؟' }, options: [
    { id: 'q13a', label: { en: 'Follow the steps from page to page until the wrong info first appears.', ar: 'أتبع الخطوات بين الصفحات حتى أجد أين تبدأ المعلومة الخاطئة.' }, weights: { software_engineer: 2, backend: 1 } },
    { id: 'q13b', label: { en: 'Check if the save rules behind the page are mixing up student records.', ar: 'أفحص هل قواعد الحفظ خلف الصفحة تخلط بين سجلات الطلاب.' }, weights: { backend: 3 } },
    { id: 'q13c', label: { en: 'Compare when this happens to see if it appears in a clear pattern.', ar: 'أقارن متى تحدث المشكلة لأرى هل تظهر بنمط واضح.' }, weights: { ai_data: 3 } },
    { id: 'q13d', label: { en: 'Make sure no one can open or change another student’s details by mistake.', ar: 'أتأكد أن لا أحد يستطيع فتح أو تعديل بيانات طالب آخر بالخطأ.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q14', category: 'problem_solving', prompt: { en: 'Students say a club website feels very slow. What is your first move?', ar: 'الطلاب يقولون إن موقع النادي بطيء جدًا. ما أول خطوة لك؟' }, options: [
    { id: 'q14a', label: { en: 'Lighten the page so buttons and sections appear faster.', ar: 'أخفف الصفحة حتى تظهر الأزرار والأقسام بسرعة أكبر.' }, weights: { frontend: 3 } },
    { id: 'q14b', label: { en: 'Check if the hidden logic is taking too long before sending results.', ar: 'أفحص هل المنطق الخفي يأخذ وقتًا طويلًا قبل إرسال النتائج.' }, weights: { backend: 3 } },
    { id: 'q14c', label: { en: 'Measure where students wait the most, then fix that part first.', ar: 'أقيس أين ينتظر الطلاب أكثر ثم أصلح هذا الجزء أولًا.' }, weights: { ai_data: 2, software_engineer: 1 } },
    { id: 'q14d', label: { en: 'Keep the site stable during busy times so it does not slow down for everyone.', ar: 'أجعل الموقع ثابتًا وقت الازدحام حتى لا يبطؤ على الجميع.' }, weights: { devops_cloud: 3 } }
  ]},
  { id: 'q15', category: 'problem_solving', prompt: { en: 'You join a project and the saved data part is confusing. How do you start?', ar: 'انضممت لمشروع وجزء البيانات المحفوظة فيه غير واضح. كيف تبدأ؟' }, options: [
    { id: 'q15a', label: { en: 'Link each saved item to the screen where students actually use it.', ar: 'أربط كل معلومة محفوظة بالشاشة التي يستخدمها الطلاب فعلًا.' }, weights: { software_engineer: 2, ui_ux: 1 } },
    { id: 'q15b', label: { en: 'Write a clear map of what is saved and when it changes.', ar: 'أكتب خريطة واضحة لما يتم حفظه ومتى يتغير.' }, weights: { backend: 3 } },
    { id: 'q15c', label: { en: 'Check for repeated errors, missing values, or strange patterns.', ar: 'أفحص الأخطاء المتكررة أو القيم الناقصة أو الأنماط الغريبة.' }, weights: { ai_data: 3 } },
    { id: 'q15d', label: { en: 'Review who can view or edit student details, and who should not.', ar: 'أراجع من يستطيع رؤية أو تعديل بيانات الطلاب ومن لا يجب أن يفعل.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q16', category: 'problem_solving', prompt: { en: 'After a new update, students cannot open the app. What would you do first?', ar: 'بعد تحديث جديد، الطلاب لا يستطيعون فتح التطبيق. ماذا تفعل أولًا؟' }, options: [
    { id: 'q16a', label: { en: 'Share a clear message in the app so students know what is happening.', ar: 'أعرض رسالة واضحة داخل التطبيق حتى يعرف الطلاب ماذا يحدث.' }, weights: { ui_ux: 2, frontend: 1 } },
    { id: 'q16b', label: { en: 'Check the recent changes step by step and undo the one that broke things.', ar: 'أراجع التغييرات الأخيرة خطوة بخطوة وألغي ما سبب المشكلة.' }, weights: { software_engineer: 2, backend: 1 } },
    { id: 'q16c', label: { en: 'Bring the app back to a stable version quickly so it works again for everyone.', ar: 'أعيد التطبيق سريعًا إلى نسخة ثابتة حتى يعمل مجددًا للجميع.' }, weights: { devops_cloud: 3 } },
    { id: 'q16d', label: { en: 'Confirm the new update did not open an unsafe way into student accounts.', ar: 'أتأكد أن التحديث الجديد لم يفتح طريقة غير آمنة للدخول إلى حسابات الطلاب.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q17', category: 'problem_solving', prompt: { en: 'Your team disagrees on what to fix before demo day. How do you help decide?', ar: 'فريقك مختلف على ما يجب إصلاحه قبل يوم العرض. كيف تساعد في القرار؟' }, options: [
    { id: 'q17a', label: { en: 'Pick the issue that makes the app easiest to understand for new students.', ar: 'أختار المشكلة التي تجعل التطبيق أسهل للفهم للطلاب الجدد.' }, weights: { ui_ux: 3 } },
    { id: 'q17b', label: { en: 'Choose the fix that connects the whole feature and removes confusion end to end.', ar: 'أختار إصلاحًا يربط الميزة كاملة ويزيل الالتباس من البداية للنهاية.' }, weights: { software_engineer: 3 } },
    { id: 'q17c', label: { en: 'Use student usage results to pick the change with biggest effect.', ar: 'أستخدم نتائج استخدام الطلاب لاختيار التعديل ذي الأثر الأكبر.' }, weights: { ai_data: 3 } },
    { id: 'q17d', label: { en: 'Prioritize the issue that could expose private information if left unfixed.', ar: 'أعطي أولوية للمشكلة التي قد تكشف معلومات خاصة إذا بقيت.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q18', category: 'problem_solving', prompt: { en: 'A registration feature works with 10 students but breaks with 200. Your plan is:', ar: 'ميزة التسجيل تعمل مع 10 طلاب لكنها تتعطل مع 200. ما خطتك؟' }, options: [
    { id: 'q18a', label: { en: 'Simplify the page steps so each action needs less loading time.', ar: 'أبسط خطوات الصفحة حتى تحتاج كل عملية وقت تحميل أقل.' }, weights: { frontend: 3 } },
    { id: 'q18b', label: { en: 'Split the heavy hidden work into smaller parts that run more smoothly.', ar: 'أقسم العمل الخفي الثقيل إلى أجزاء أصغر تعمل بسلاسة أكبر.' }, weights: { backend: 3 } },
    { id: 'q18c', label: { en: 'Keep the app steady during busy hours so students can still use it.', ar: 'أحافظ على ثبات التطبيق وقت الازدحام حتى يظل الطلاب قادرين على استخدامه.' }, weights: { devops_cloud: 3 } },
    { id: 'q18d', label: { en: 'Check if unusual repeated requests are causing the feature to stop.', ar: 'أفحص إذا كانت الطلبات المتكررة بشكل غير طبيعي تسبب توقف الميزة.' }, weights: { cybersecurity: 2, devops_cloud: 1 } }
  ]},

  { id: 'q19', category: 'work_preference', prompt: { en: 'In a class app project, which role feels most like you?', ar: 'في مشروع تطبيق للمادة، أي دور يشبهك أكثر؟' }, options: [
    { id: 'q19a', label: { en: 'Building the screens students click every day and improving small interactions.', ar: 'بناء الشاشات التي يضغط عليها الطلاب يوميًا وتحسين التفاعلات الصغيرة.' }, weights: { frontend: 2, ui_ux: 1 } },
    { id: 'q19b', label: { en: 'Turning a rough idea into a working feature from screen to saved data.', ar: 'تحويل فكرة أولية إلى ميزة تعمل من الشاشة حتى حفظ البيانات.' }, weights: { software_engineer: 2, backend: 1 } },
    { id: 'q19c', label: { en: 'Keeping the app running smoothly when many students open it at once.', ar: 'الحفاظ على عمل التطبيق بسلاسة عندما يفتحه طلاب كثيرون في نفس الوقت.' }, weights: { devops_cloud: 3 } },
    { id: 'q19d', label: { en: 'Protecting accounts and private details so only the right person can access them.', ar: 'حماية الحسابات والبيانات الخاصة حتى يصل إليها الشخص الصحيح فقط.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q20', category: 'work_preference', prompt: { en: 'Which team discussion do you enjoy most?', ar: 'أي نقاش داخل الفريق تستمتع به أكثر؟' }, options: [
    { id: 'q20a', label: { en: 'Talking about what confuses students on a page and how to make it clearer.', ar: 'النقاش حول ما يربك الطلاب في الصفحة وكيف نجعله أوضح.' }, weights: { ui_ux: 3 } },
    { id: 'q20b', label: { en: 'Planning the full feature in small steps so everyone knows what to build.', ar: 'تخطيط الميزة كاملة على خطوات صغيرة حتى يعرف كل شخص ماذا يبني.' }, weights: { software_engineer: 3 } },
    { id: 'q20c', label: { en: 'Comparing student results to decide which idea actually worked better.', ar: 'مقارنة نتائج الطلاب لمعرفة أي فكرة نجحت أكثر فعليًا.' }, weights: { ai_data: 3 } },
    { id: 'q20d', label: { en: 'Reviewing how to keep accounts and private info safe from mistakes.', ar: 'مراجعة كيفية حماية الحسابات والمعلومات الخاصة من الأخطاء.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q21', category: 'work_preference', prompt: { en: 'If you could own one part of a student app, what would you pick?', ar: 'إذا كان يمكنك تولّي جزء واحد من تطبيق طلابي، ماذا تختار؟' }, options: [
    { id: 'q21a', label: { en: 'The look and feel of the pages so students can use them without help.', ar: 'شكل الصفحات وطريقة استخدامها حتى يعمل الطلاب عليها بدون مساعدة.' }, weights: { frontend: 2, ui_ux: 1 } },
    { id: 'q21b', label: { en: 'The logic that connects forms, rules, and saved information correctly.', ar: 'المنطق الذي يربط النماذج والقواعد والبيانات المحفوظة بشكل صحيح.' }, weights: { backend: 2, software_engineer: 1 } },
    { id: 'q21c', label: { en: 'The reports that show patterns and help decide what to improve next.', ar: 'التقارير التي تُظهر الأنماط وتساعد على تحديد ما نطوره بعد ذلك.' }, weights: { ai_data: 3 } },
    { id: 'q21d', label: { en: 'The setup that keeps the app available and stable during busy days.', ar: 'الإعداد الذي يحافظ على توفر التطبيق وثباته في الأيام المزدحمة.' }, weights: { devops_cloud: 3 } }
  ]},
  { id: 'q22', category: 'work_preference', prompt: { en: 'You feel most productive when you can:', ar: 'تشعر بأعلى إنتاجية عندما تستطيع:' }, options: [
    { id: 'q22a', label: { en: 'Try small screen changes quickly and see which one feels easier to use.', ar: 'تجربة تغييرات صغيرة في الشاشة بسرعة ومعرفة أيها أسهل في الاستخدام.' }, weights: { frontend: 2, ui_ux: 1 } },
    { id: 'q22b', label: { en: 'Break a messy idea into clear tasks and build it into a complete feature.', ar: 'تقسيم فكرة غير واضحة إلى مهام واضحة وبناؤها كميزة كاملة.' }, weights: { software_engineer: 3 } },
    { id: 'q22c', label: { en: 'Look at student behavior and test which change gives better results.', ar: 'أتابع سلوك الطلاب وأختبر أي تغيير يعطي نتائج أفضل.' }, weights: { ai_data: 3 } },
    { id: 'q22d', label: { en: 'Close risky gaps before they become real problems for users.', ar: 'أغلق الثغرات الخطرة قبل أن تصبح مشكلة حقيقية للمستخدمين.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q23', category: 'work_preference', prompt: { en: 'Which project moment gives you the biggest sense of achievement?', ar: 'أي لحظة في المشروع تعطيك أكبر إحساس بالإنجاز؟' }, options: [
    { id: 'q23a', label: { en: 'When students try the page and finish tasks with less confusion.', ar: 'عندما يجرب الطلاب الصفحة وينهون المهام بدون ارتباك كبير.' }, weights: { ui_ux: 2, frontend: 1 } },
    { id: 'q23b', label: { en: 'When one new feature works fully from button click to saved result.', ar: 'عندما تعمل ميزة جديدة كاملة من ضغط الزر حتى حفظ النتيجة.' }, weights: { software_engineer: 2, backend: 1 } },
    { id: 'q23c', label: { en: 'When the numbers clearly show the update helped students.', ar: 'عندما تُظهر الأرقام بوضوح أن التحديث أفاد الطلاب.' }, weights: { ai_data: 3 } },
    { id: 'q23d', label: { en: 'When the app stays up and usable even during heavy student traffic.', ar: 'عندما يبقى التطبيق متاحًا وقابلًا للاستخدام حتى مع ضغط كبير من الطلاب.' }, weights: { devops_cloud: 3 } }
  ]},
  { id: 'q24', category: 'work_preference', prompt: { en: 'When different teammates want different things, what do you usually push for?', ar: 'عندما يريد كل عضو في الفريق شيئًا مختلفًا، ماذا تدافع عنه غالبًا؟' }, options: [
    { id: 'q24a', label: { en: 'A simple path that helps students finish without getting lost.', ar: 'مسار بسيط يساعد الطلاب على الإنهاء بدون ضياع.' }, weights: { ui_ux: 3 } },
    { id: 'q24b', label: { en: 'A practical plan that balances student needs with what the team can build now.', ar: 'خطة عملية توازن بين حاجة الطلاب وما يستطيع الفريق بناؤه الآن.' }, weights: { software_engineer: 3 } },
    { id: 'q24c', label: { en: 'Decisions based on what student results actually show, not guesses.', ar: 'قرارات مبنية على ما تظهره نتائج الطلاب فعلًا وليس التخمين.' }, weights: { ai_data: 3 } },
    { id: 'q24d', label: { en: 'Rules that keep private student details protected from the start.', ar: 'قواعد تحمي بيانات الطلاب الخاصة من البداية.' }, weights: { cybersecurity: 3 } }
  ]},

  { id: 'q25', category: 'learning_style', prompt: { en: 'After a small class app, what would you review first to learn faster?', ar: 'بعد إنهاء تطبيق صغير للمادة، ما أول شيء تراجعه لتتعلّم أسرع؟' }, options: [
    { id: 'q25a', label: { en: 'How the screens looked and where classmates got confused.', ar: 'شكل الشاشات وأين ارتبك الزملاء أثناء الاستخدام.' }, weights: { ui_ux: 2, frontend: 1 } },
    { id: 'q25b', label: { en: 'How click, logic, and saved data worked together as one feature.', ar: 'كيف عملت الضغطة والمنطق والحفظ معًا كميزة واحدة.' }, weights: { software_engineer: 3 } },
    { id: 'q25c', label: { en: 'Which usage patterns appeared and what they suggest improving next.', ar: 'ما الأنماط التي ظهرت في الاستخدام وماذا تقترح للتحسين التالي.' }, weights: { ai_data: 3 } },
    { id: 'q25d', label: { en: 'Which private details were exposed and how to block that early.', ar: 'ما البيانات الخاصة التي قد تنكشف وكيف نمنع ذلك مبكرًا.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q26', category: 'learning_style', prompt: { en: 'When you start practicing a new idea, what do you build first?', ar: 'عندما تبدأ التدرّب على فكرة جديدة، ماذا تبني أولًا؟' }, options: [
    { id: 'q26a', label: { en: 'A quick page people can click through right away.', ar: 'صفحة سريعة يمكن للناس التجربة عليها مباشرة.' }, weights: { frontend: 3 } },
    { id: 'q26b', label: { en: 'The hidden steps that receive input and return the right result.', ar: 'الخطوات الخفية التي تستقبل الطلب وتُرجع النتيجة الصحيحة.' }, weights: { backend: 3 } },
    { id: 'q26c', label: { en: 'A simple full flow from idea to working feature, even if basic.', ar: 'مسار كامل بسيط من الفكرة إلى ميزة تعمل، حتى لو كانت أساسية.' }, weights: { software_engineer: 3 } },
    { id: 'q26d', label: { en: 'A setup that keeps the app running smoothly during busy times.', ar: 'إعداد يجعل التطبيق يعمل بثبات وقت ضغط الاستخدام.' }, weights: { devops_cloud: 3 } }
  ]},
  { id: 'q27', category: 'learning_style', prompt: { en: 'How do you know you really understood a topic?', ar: 'كيف تعرف أنك فهمت موضوعًا فعلًا؟' }, options: [
    { id: 'q27a', label: { en: 'I can make it clearer so a new student uses it without help.', ar: 'أقدر أجعله أوضح حتى يستخدمه طالب جديد بدون مساعدة.' }, weights: { ui_ux: 3 } },
    { id: 'q27b', label: { en: 'I can trace what happens behind the screen step by step.', ar: 'أقدر أتبع ما يحدث خلف الشاشة خطوة بخطوة.' }, weights: { backend: 2, software_engineer: 1 } },
    { id: 'q27c', label: { en: 'I can compare two ideas and show which one worked better.', ar: 'أقدر أقارن فكرتين وأوضح أيهما أعطت نتيجة أفضل.' }, weights: { ai_data: 3 } },
    { id: 'q27d', label: { en: 'I can point out weak spots that may expose user accounts or data.', ar: 'أقدر أحدد النقاط الضعيفة التي قد تكشف حسابات أو بيانات المستخدمين.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q28', category: 'learning_style', prompt: { en: 'Which class task would make you most excited to work late on it?', ar: 'أي مهمة دراسية تجعلك متحمسًا حتى لو احتجت وقتًا أطول؟' }, options: [
    { id: 'q28a', label: { en: 'Improve a confusing page until classmates finish it easily.', ar: 'تحسين صفحة مربكة حتى يتمكن الزملاء من إنهائها بسهولة.' }, weights: { ui_ux: 2, frontend: 1 } },
    { id: 'q28b', label: { en: 'Build the hidden rules that keep student records accurate.', ar: 'بناء القواعد الخفية التي تحفظ سجلات الطلاب بشكل صحيح.' }, weights: { backend: 3 } },
    { id: 'q28c', label: { en: 'Study club activity data and suggest what to improve next.', ar: 'دراسة بيانات نشاط النادي واقتراح ما يجب تحسينه لاحقًا.' }, weights: { ai_data: 3 } },
    { id: 'q28d', label: { en: 'Turn a vague request into a small complete feature for the team.', ar: 'تحويل طلب غير واضح إلى ميزة صغيرة مكتملة للفريق.' }, weights: { software_engineer: 3 } }
  ]},
  { id: 'q29', category: 'learning_style', prompt: { en: 'When your app behaves strangely, what do you do first?', ar: 'عندما يتصرف تطبيقك بشكل غريب، ما أول خطوة تقوم بها؟' }, options: [
    { id: 'q29a', label: { en: 'Replay the clicks and fix what looks confusing on screen.', ar: 'أعيد خطوات الضغط وأصلح ما يبدو مربكًا على الشاشة.' }, weights: { frontend: 2, ui_ux: 1 } },
    { id: 'q29b', label: { en: 'Check the hidden logic path to find exactly where it broke.', ar: 'أفحص مسار المنطق الخفي لأعرف أين حدث الخلل بالضبط.' }, weights: { backend: 3 } },
    { id: 'q29c', label: { en: 'Break the issue into smaller parts and test each part in order.', ar: 'أقسم المشكلة إلى أجزاء صغيرة وأختبر كل جزء بالترتيب.' }, weights: { software_engineer: 3 } },
    { id: 'q29d', label: { en: 'Review who can open or edit data to prevent unsafe access.', ar: 'أراجع من يمكنه فتح البيانات أو تعديلها لمنع الوصول غير الآمن.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q30', category: 'learning_style', prompt: { en: 'You remember lessons best when you:', ar: 'تتذكر ما تعلمته بشكل أفضل عندما:' }, options: [
    { id: 'q30a', label: { en: 'Build a clean screen and watch real users try it.', ar: 'تبني شاشة واضحة وتشاهد مستخدمين حقيقيين وهم يجربونها.' }, weights: { frontend: 2, ui_ux: 1 } },
    { id: 'q30b', label: { en: 'Connect the screen to saved data and make the full flow work.', ar: 'تربط الشاشة بالبيانات المحفوظة وتجعل المسار كاملًا يعمل.' }, weights: { software_engineer: 2, backend: 1 } },
    { id: 'q30c', label: { en: 'Collect results from classmates and compare before and after.', ar: 'تجمع نتائج الزملاء وتقارن قبل التعديل وبعده.' }, weights: { ai_data: 3 } },
    { id: 'q30d', label: { en: 'Prepare the app to stay available even when many students open it.', ar: 'تجهّز التطبيق ليبقى متاحًا حتى عند دخول عدد كبير من الطلاب.' }, weights: { devops_cloud: 3 } }
  ]},

  { id: 'q31', category: 'real_world_scenario', prompt: { en: 'Before showing your project demo, you notice some student details are visible to everyone. What do you handle first?', ar: 'قبل عرض المشروع تكتشف أن بعض بيانات الطلاب ظاهرة للجميع. ما أول شيء تتعامل معه؟' }, options: [
    { id: 'q31a', label: { en: 'Make a clear message so users know what happened and what to do.', ar: 'أكتب رسالة واضحة للمستخدمين تشرح ما حدث وما المطلوب منهم.' }, weights: { ui_ux: 2, frontend: 1 } },
    { id: 'q31b', label: { en: 'Close the wrong data path and verify only the right people can view records.', ar: 'أغلق المسار الخاطئ للبيانات وأتأكد أن العرض للمخولين فقط.' }, weights: { backend: 2, cybersecurity: 1 } },
    { id: 'q31c', label: { en: 'List exactly which records were affected to guide the next fixes.', ar: 'أحدد بالضبط السجلات المتأثرة حتى نعرف خطوات الإصلاح التالية.' }, weights: { ai_data: 3 } },
    { id: 'q31d', label: { en: 'Coordinate quick steps across screens, logic, and data so the issue is fully fixed.', ar: 'أنسق خطوات سريعة عبر الشاشات والمنطق والبيانات حتى يُحلّ الخلل كاملًا.' }, weights: { software_engineer: 3 } }
  ]},
  { id: 'q32', category: 'real_world_scenario', prompt: { en: 'Your team will demo tomorrow, but the app suddenly fails on some phones. You focus on:', ar: 'فريقك سيعرض غدًا، لكن التطبيق تعطل فجأة على بعض الهواتف. على ماذا تركّز؟' }, options: [
    { id: 'q32a', label: { en: 'A simple backup screen so classmates can still finish key steps.', ar: 'شاشة بديلة بسيطة حتى يكمل الزملاء الخطوات الأساسية.' }, weights: { frontend: 2, ui_ux: 1 } },
    { id: 'q32b', label: { en: 'Fixing the hidden step causing wrong results before the demo.', ar: 'إصلاح الخطوة الخفية التي تسبب نتائج خاطئة قبل العرض.' }, weights: { backend: 3 } },
    { id: 'q32c', label: { en: 'Keeping the app stable for everyone during demo time.', ar: 'الحفاظ على ثبات التطبيق للجميع وقت العرض.' }, weights: { devops_cloud: 3 } },
    { id: 'q32d', label: { en: 'Checking that quick fixes did not open unsafe access.', ar: 'التأكد أن الإصلاحات السريعة لم تفتح وصولًا غير آمن.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q33', category: 'real_world_scenario', prompt: { en: 'A student club asks for a simple tool to organize events. What would you suggest first?', ar: 'نادي طلابي يطلب أداة بسيطة لتنظيم الفعاليات. ماذا تقترح أولًا؟' }, options: [
    { id: 'q33a', label: { en: 'Start with an easy page where members can add and find events quickly.', ar: 'البدء بصفحة سهلة يضيف فيها الأعضاء الفعاليات ويجدونها بسرعة.' }, weights: { ui_ux: 2, frontend: 1 } },
    { id: 'q33b', label: { en: 'Start with clear rules for saving event details without mistakes.', ar: 'البدء بقواعد واضحة لحفظ تفاصيل الفعاليات بدون أخطاء.' }, weights: { backend: 3 } },
    { id: 'q33c', label: { en: 'Track attendance patterns to learn what events students prefer.', ar: 'متابعة أنماط الحضور لمعرفة الفعاليات التي يفضلها الطلاب.' }, weights: { ai_data: 3 } },
    { id: 'q33d', label: { en: 'Plan a small complete version the team can build and use this week.', ar: 'تخطيط نسخة صغيرة مكتملة يستطيع الفريق بناءها واستخدامها هذا الأسبوع.' }, weights: { software_engineer: 3 } }
  ]},
  { id: 'q34', category: 'real_world_scenario', prompt: { en: 'When presenting your project to instructors, what do you like to show first?', ar: 'عند عرض مشروعك على الأساتذة، ماذا تحب أن تعرض أولًا؟' }, options: [
    { id: 'q34a', label: { en: 'How the new screens made tasks faster and less confusing.', ar: 'كيف جعلت الشاشات الجديدة المهام أسرع وأقل إرباكًا.' }, weights: { frontend: 2, ui_ux: 1 } },
    { id: 'q34b', label: { en: 'How the app rules now give correct results more consistently.', ar: 'كيف أصبحت قواعد التطبيق تعطي نتائج صحيحة بشكل أكثر ثباتًا.' }, weights: { backend: 3 } },
    { id: 'q34c', label: { en: 'Numbers that compare student results before and after your update.', ar: 'أرقام تقارن نتائج الطلاب قبل التحديث وبعده.' }, weights: { ai_data: 3 } },
    { id: 'q34d', label: { en: 'How you balanced user needs and build effort to deliver one solid feature.', ar: 'كيف وازنت بين احتياج المستخدم وجهد البناء لتقديم ميزة قوية واحدة.' }, weights: { software_engineer: 3 } }
  ]},
  { id: 'q35', category: 'real_world_scenario', prompt: { en: 'Many students open your tool at once during registration hour. What do you fix first?', ar: 'عدد كبير من الطلاب فتحوا أداتك في وقت التسجيل. ما أول شيء تصلحه؟' }, options: [
    { id: 'q35a', label: { en: 'Simplify heavy screens so they load and respond faster.', ar: 'تبسيط الشاشات الثقيلة لتفتح وتستجيب بشكل أسرع.' }, weights: { frontend: 3 } },
    { id: 'q35b', label: { en: 'Organize save requests so no student input is lost.', ar: 'تنظيم طلبات الحفظ حتى لا تضيع مدخلات أي طالب.' }, weights: { backend: 3 } },
    { id: 'q35c', label: { en: 'Keep the app available and steady while traffic stays high.', ar: 'الحفاظ على بقاء التطبيق متاحًا وثابتًا مع استمرار الضغط.' }, weights: { devops_cloud: 3 } },
    { id: 'q35d', label: { en: 'Make sure quick traffic fixes do not weaken account safety.', ar: 'التأكد أن حلول الضغط السريعة لا تضعف أمان الحسابات.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q36', category: 'real_world_scenario', prompt: { en: 'After finishing a team project, what quality check matters most to you before sharing it campus-wide?', ar: 'بعد إنهاء مشروع جماعي، ما فحص الجودة الأهم لديك قبل نشره على نطاق الجامعة؟' }, options: [
    { id: 'q36a', label: { en: 'Students can use it easily from first click without extra explanation.', ar: 'يستطيع الطلاب استخدامه بسهولة من أول ضغطة بدون شرح إضافي.' }, weights: { ui_ux: 3 } },
    { id: 'q36b', label: { en: 'The full path works: input, processing, and correct saved output.', ar: 'المسار الكامل يعمل: إدخال، معالجة، ثم حفظ صحيح للنتيجة.' }, weights: { software_engineer: 2, backend: 1 } },
    { id: 'q36c', label: { en: 'It keeps working smoothly even when many students use it together.', ar: 'يبقى يعمل بسلاسة حتى عند استخدامه من عدد كبير من الطلاب معًا.' }, weights: { devops_cloud: 3 } },
    { id: 'q36d', label: { en: 'Private data stays protected and only the right users can see it.', ar: 'تبقى البيانات الخاصة محمية ولا يراها إلا المستخدم المناسب.' }, weights: { cybersecurity: 3 } }
  ]}
];
