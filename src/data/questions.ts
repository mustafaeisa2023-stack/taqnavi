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

  { id: 'q25', category: 'learning_style', prompt: { en: 'Which learning resource helps you improve fastest?', ar: 'أي مورد تعلّم يساعدك على التطور بأسرع شكل؟' }, options: [
    { id: 'q25a', label: { en: 'Interactive UI teardown videos and design critiques.', ar: 'فيديوهات تفكيك UI بشكل تفاعلي مع نقد للتصميم.' }, weights: { frontend: 2, ui_ux: 2 } },
    { id: 'q25b', label: { en: 'Backend system design walkthroughs with code labs.', ar: 'شروحات معمارية Backend مع تمارين عملية على الكود.' }, weights: { backend: 3 } },
    { id: 'q25c', label: { en: 'Notebook-based tutorials with information sets and metrics.', ar: 'دروس عبر Notebooks تتضمن information sets ومقاييس تقييم.' }, weights: { ai_data: 3 } },
    { id: 'q25d', label: { en: 'Capture-the-flag labs and security case studies.', ar: 'مختبرات Capture-the-Flag ودراسات حالات أمنية.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q26', category: 'learning_style', prompt: { en: 'When practicing, you prefer to start by:', ar: 'عند التدرّب، تفضّل أن تبدأ بـ:' }, options: [
    { id: 'q26a', label: { en: 'Building a visible demo and refining details.', ar: 'بناء Demo واضح ثم صقل التفاصيل.' }, weights: { frontend: 3, ui_ux: 1 } },
    { id: 'q26b', label: { en: 'Creating robust service logic and tests.', ar: 'إنشاء منطق خدمات قوي مع اختبارات.' }, weights: { backend: 3 } },
    { id: 'q26c', label: { en: 'Running experiments and comparing outcomes.', ar: 'تنفيذ تجارب ومقارنة النتائج.' }, weights: { ai_data: 3 } },
    { id: 'q26d', label: { en: 'Configuring secure app runtime setup in a sandbox.', ar: 'إعداد بنية تحتية آمنة داخل بيئة Sandbox.' }, weights: { devops_cloud: 2, cybersecurity: 2 } }
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
    { id: 'q30d', label: { en: 'I model threats and defend against them.', ar: 'أُجري التفكير في طرق إساءة الاستخدام وأبني وسائل دفاع ضدها.' }, weights: { cybersecurity: 3 } }
  ]},

  { id: 'q31', category: 'real_world_scenario', prompt: { en: 'A school portal update accidentally exposes private data. What would you lead first?', ar: 'تحديث في بوابة مدرسية كشف بيانات خاصة بالخطأ. ما الذي ستقوده أولًا؟' }, options: [
    { id: 'q31a', label: { en: 'User-facing messaging so affected users understand next steps.', ar: 'رسائل واضحة للمستخدمين المتأثرين ليفهموا الخطوات التالية.' }, weights: { ui_ux: 2, frontend: 1 } },
    { id: 'q31b', label: { en: 'Service-side rollback and data access patching.', ar: 'التراجع على مستوى الخدمة مع إصلاح صلاحيات الوصول للبيانات.' }, weights: { backend: 2, devops_cloud: 1 } },
    { id: 'q31c', label: { en: 'Forensic analysis to map affected records quickly.', ar: 'تحليل جنائي رقمي لتحديد السجلات المتأثرة بسرعة.' }, weights: { ai_data: 2, cybersecurity: 1 } },
    { id: 'q31d', label: { en: 'Containment plan, credential resets, and audit controls.', ar: 'خطة احتواء مع إعادة تعيين بيانات الاعتماد وضوابط تدقيق.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q32', category: 'real_world_scenario', prompt: { en: 'Your app launches tomorrow and last-minute failures appear. You focus on:', ar: 'تطبيقك سيُطلق غدًا وظهرت أعطال في اللحظة الأخيرة. على ماذا تركّز؟' }, options: [
    { id: 'q32a', label: { en: 'Clear fallback UI and communication for users.', ar: 'واجهة UI بديلة واضحة مع تواصل مباشر للمستخدمين.' }, weights: { frontend: 2, ui_ux: 1 } },
    { id: 'q32b', label: { en: 'Critical hidden-logic fixes with safe steps before making the app available.', ar: 'إصلاحات أساسية في المنطق الخفي مع خطوات آمنة لإتاحة التطبيق.' }, weights: { backend: 3 } },
    { id: 'q32c', label: { en: 'Release health checks and rollback automation.', ar: 'فحوصات صحة الإصدار وأتمتة التراجع (Rollback).' }, weights: { devops_cloud: 3 } },
    { id: 'q32d', label: { en: 'Security verification of hotfixes before release.', ar: 'التحقق أمنيًا من الإصلاحات السريعة قبل الإطلاق.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q33', category: 'real_world_scenario', prompt: { en: 'A nonprofit asks for a low-budget tech solution. You suggest:', ar: 'منظمة غير ربحية طلبت حلًا تقنيًا منخفض التكلفة. ماذا تقترح؟' }, options: [
    { id: 'q33a', label: { en: 'Simple mobile-friendly interface with clear workflows.', ar: 'واجهة بسيطة مناسبة للجوال مع مسارات عمل واضحة.' }, weights: { frontend: 2, ui_ux: 2 } },
    { id: 'q33b', label: { en: 'Lean backend with maintainable core features.', ar: 'منطق خلفي بسيط بميزات أساسية يسهل تطويرها لاحقًا.' }, weights: { backend: 3 } },
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
    { id: 'q35c', label: { en: 'Adjust app runtime setup and monitor recovery metrics.', ar: 'تعديل البنية التحتية ومراقبة مؤشرات التعافي.' }, weights: { devops_cloud: 3 } },
    { id: 'q35d', label: { en: 'Ensure offline behavior does not bypass protections.', ar: 'ضمان أن وضع Offline لا يتجاوز ضوابط الحماية.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q36', category: 'real_world_scenario', prompt: { en: 'A student startup asks you to choose one quality bar before scaling. You pick:', ar: 'شركة ناشئة طلابية طلبت منك اختيار معيار جودة واحد قبل التوسع. ماذا تختار؟' }, options: [
    { id: 'q36a', label: { en: 'Consistent experience across devices and abilities.', ar: 'تجربة متسقة عبر الأجهزة ولمختلف قدرات المستخدمين.' }, weights: { ui_ux: 2, frontend: 2 } },
    { id: 'q36b', label: { en: 'Stable service contracts and clear data ownership.', ar: 'عقود خدمات مستقرة وملكية بيانات واضحة.' }, weights: { backend: 3 } },
    { id: 'q36c', label: { en: 'Reliable monitoring with alert-driven operations.', ar: 'مراقبة موثوقة مع عمليات تشغيل مبنية على التنبيهات.' }, weights: { devops_cloud: 3 } },
    { id: 'q36d', label: { en: 'Security-by-default configurations and review gates.', ar: 'إعدادات آمنة افتراضيًا مع بوابات مراجعة أمنية.' }, weights: { cybersecurity: 3 } }
  ]}
];
