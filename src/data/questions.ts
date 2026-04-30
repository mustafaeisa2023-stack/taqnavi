import type { Question } from '../types/quiz';

export const QUESTIONS: Question[] = [
  { id: 'q1', category: 'interest', prompt: { en: 'Your friends are planning a trip, and everyone suggests something different. What do you naturally do first?', ar: 'فريقك يبني تطبيقًا بسيطًا لنادٍ طلابي. أي جزء تميل أن تبدأ به؟' }, options: [
    { id: 'q1a', label: { en: 'I make the steps simple so people can finish without asking for help.', ar: 'ترتيب الشاشات بحيث ينهي الطالب الجديد الخطوات بسهولة وبدون سؤال.' }, weights: { ui_ux: 3, frontend: 1 } },
    { id: 'q1b', label: { en: 'I organize the details so nothing important gets lost between steps.', ar: 'بناء الخطوات الخلفية التي تحفظ البيانات وترجع المعلومات الصحيحة لكل شاشة.' }, weights: { backend: 2, software_engineer: 1 } },
    { id: 'q1c', label: { en: 'I notice where people stop, then use that pattern to improve the flow.', ar: 'معرفة أين يتوقف الطلاب ثم استخدام النمط لتحسين المسار.' }, weights: { ai_data: 3 } },
    { id: 'q1d', label: { en: 'I think about risky access points and set clear boundaries early.', ar: 'مراجعة من يستطيع فتح الصفحات الخاصة وأين قد يحدث وصول غير مقصود.' }, weights: { cybersecurity: 2, backend: 1 } }
  ]},
  { id: 'q2', category: 'interest', prompt: { en: 'At a crowded university event, things suddenly become chaotic. What do you handle first?', ar: 'فتح تسجيل فعالية، ودخل طلاب كثيرون في نفس الوقت. على ماذا تعمل أولًا؟' }, options: [
    { id: 'q2a', label: { en: 'I give everyone a clear update so they know what to do next.', ar: 'إنشاء صفحة واضحة تخبر الطلاب بما يعمل الآن وما الخطوة التالية.' }, weights: { frontend: 2, ui_ux: 1 } },
    { id: 'q2b', label: { en: 'I reorder the core steps so things are handled in the right order.', ar: 'إصلاح منطق التسجيل الأساسي حتى تُعالج الطلبات بالترتيب الصحيح.' }, weights: { backend: 2, software_engineer: 1 } },
    { id: 'q2c', label: { en: 'I prepare a backup plan so things keep running under pressure.', ar: 'الحفاظ على ثبات التطبيق وقت الضغط حتى يبقى متاحًا للجميع.' }, weights: { devops_cloud: 3 } },
    { id: 'q2d', label: { en: 'I watch for unusual behavior that could block normal participants.', ar: 'التحقق من محاولات متكررة ومريبة قد تمنع الطلاب الحقيقيين من الدخول.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q3', category: 'interest', prompt: { en: 'Your group starts a new assignment and everyone is unsure where to begin. What do you naturally do first?', ar: 'فريق المادة بدأ فكرة تطبيق جديدة وسألك: أين تحب أن تبدأ المساعدة؟' }, options: [
    { id: 'q3a', label: { en: 'I turn a messy idea into something clear and easy to follow.', ar: 'تحويل شاشة غير واضحة إلى تجربة سهلة ومريحة للتنقل.' }, weights: { frontend: 2, ui_ux: 2 } },
    { id: 'q3b', label: { en: 'I compare previous results to decide what should come first.', ar: 'استخدام بيانات نشاط الطلاب للتنبؤ بما يجب أن يظهر أولًا.' }, weights: { ai_data: 3 } },
    { id: 'q3c', label: { en: 'I spot weak points where personal details could reach the wrong person.', ar: 'اكتشاف النقاط الضعيفة التي قد تكشف معلومات خاصة لغير المصرح لهم.' }, weights: { cybersecurity: 3 } },
    { id: 'q3d', label: { en: 'I set simple repeatable steps so the activity recovers quickly from problems.', ar: 'إعداد التطبيق بحيث تكون التحديثات سلسة ويعود بسرعة عند حدوث خطأ.' }, weights: { devops_cloud: 3 } }
  ]},
  { id: 'q4', category: 'interest', prompt: { en: 'You join a group assignment late and everyone is stressed. Where do you start helping first?', ar: 'انضممت متأخرًا لمشروع جماعي. أين تساعد عادةً أولًا؟' }, options: [
    { id: 'q4a', label: { en: 'Clean up the interface so buttons, messages, and steps are easier to understand.', ar: 'تنظيم الخطوات الظاهرة بحيث تكون الأزرار والرسائل والخطوات أسهل للفهم.' }, weights: { frontend: 2, ui_ux: 1 } },
    { id: 'q4b', label: { en: 'Connect the step views, steps, and details so the task works end-to-end.', ar: 'ربط الشاشات والمنطق والمعلومات المحفوظة حتى تعمل الميزة كاملة.' }, weights: { software_engineer: 3 } },
    { id: 'q4c', label: { en: 'Compare results from two ideas and keep the one that helps students more.', ar: 'مقارنة نتائج فكرتين واختيار ما يفيد الطلاب أكثر.' }, weights: { ai_data: 3 } },
    { id: 'q4d', label: { en: 'Review settings and boundaries so the activity stays reliable and safe.', ar: 'مراجعة الإعدادات وحدود الاستخدام ليبقى التطبيق ثابتًا وآمنًا.' }, weights: { devops_cloud: 2, cybersecurity: 1 } }
  ]},
  { id: 'q5', category: 'interest', prompt: { en: 'After a team effort, which result makes you feel most proud?', ar: 'بعد عرض فريقك، أي نتيجة تجعلك أكثر فخرًا؟' }, options: [
    { id: 'q5a', label: { en: 'Users say the activity is easy and pleasant to use.', ar: 'أن يقول المستخدمون إن التطبيق سهل وممتع في الاستخدام.' }, weights: { ui_ux: 3, frontend: 1 } },
    { id: 'q5b', label: { en: 'Everything works together smoothly, even when many students use it.', ar: 'أن تعمل كل الأجزاء معًا بسلاسة حتى مع استخدام عدد كبير من الطلاب.' }, weights: { software_engineer: 2, backend: 1 } },
    { id: 'q5c', label: { en: 'The numbers show clear patterns that help improve the next version.', ar: 'أن تُظهر الأرقام أنماطًا واضحة تساعد على تحسين النسخة التالية.' }, weights: { ai_data: 3 } },
    { id: 'q5d', label: { en: 'Private info stays protected and no one gets access by mistake.', ar: 'أن تبقى المعلومات الخاصة محمية ولا يصل إليها أحد بالخطأ.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q6', category: 'interest', prompt: { en: 'You have two free evenings before exams. Which mini challenge would you choose?', ar: 'لديك أمسيتان قبل الاختبارات. ما المشروع الصغير الذي تبنيه؟' }, options: [
    { id: 'q6a', label: { en: 'Rebuild a favorite activity step view with accessibility improvements.', ar: 'إعادة بناء شاشة مفضلة مع تحسينات في سهولة الدخول.' }, weights: { frontend: 3, ui_ux: 1 } },
    { id: 'q6b', label: { en: 'Build the core steps for a task and split it into clear, testable steps.', ar: 'بناء منطق ميزة أساسية وتقسيمه إلى خطوات واضحة يمكن اختبارها.' }, weights: { software_engineer: 2, backend: 1 } },
    { id: 'q6c', label: { en: 'Clean student survey details and test a simple way to predict outcomes.', ar: 'تنظيف بيانات استبيان طلابي وتجربة طريقة بسيطة للتنبؤ بالنتائج.' }, weights: { ai_data: 3 } },
    { id: 'q6d', label: { en: 'Review where mistakes could expose personal details, then close those gaps.', ar: 'مراجعة الأماكن التي قد تكشف بيانات خاصة ثم إغلاق هذه الثغرات.' }, weights: { cybersecurity: 3 } }
  ]},

  { id: 'q7', category: 'thinking_style', prompt: { en: 'Your instructor gives unclear instructions and your group is confused. What do you do first?', ar: 'عندما يكون واجب المادة غير واضح، ماذا تفعل أولًا؟' }, options: [
    { id: 'q7a', label: { en: 'Sketch user journeys before picking implementation details.', ar: 'رسم رحلات المستخدم قبل اختيار تفاصيل التنفيذ.' }, weights: { ui_ux: 3, frontend: 1 } },
    { id: 'q7b', label: { en: 'Break the problem into small parts and map how each part connects.', ar: 'تقسيم المشكلة إلى أجزاء صغيرة وتحديد كيف يرتبط كل جزء بالآخر.' }, weights: { software_engineer: 3 } },
    { id: 'q7c', label: { en: 'List measurable goals and test assumptions quickly.', ar: 'تحديد أهداف قابلة للقياس واختبار الفرضيات بسرعة.' }, weights: { ai_data: 3, devops_cloud: 1 } },
    { id: 'q7d', label: { en: 'Ask who should access what, and where misuse could hactivityen.', ar: 'سؤال: من يحق له الدخول؟ وأين قد يحدث استخدام خاطئ؟' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q8', category: 'thinking_style', prompt: { en: 'A plan seems to work, but someone suggests a quick last-minute change. Your first thought is:', ar: 'زميل يقترح إصلاحًا سريعًا، لكن لا أحد يعرف نتائجه الجانبية. ما أول فكرة عندك؟' }, options: [
    { id: 'q8a', label: { en: 'How might this affect user clarity and consistency?', ar: 'كيف سيؤثر ذلك على وضوح التجربة واتساقها للمستخدم؟' }, weights: { ui_ux: 2, frontend: 1 } },
    { id: 'q8b', label: { en: 'What could break later, and how can we solve this in a cleaner way?', ar: 'ما الذي قد يتعطل لاحقًا؟ وكيف نحل المشكلة بطريقة أنظف؟' }, weights: { software_engineer: 2, backend: 1 } },
    { id: 'q8c', label: { en: 'Can we validate this with a quick experiment first?', ar: 'هل يمكن التحقق منه أولًا بتجربة سريعة؟' }, weights: { ai_data: 3 } },
    { id: 'q8d', label: { en: 'Could this accidentally expose personal information or open a risky shortcut?', ar: 'هل قد يكشف معلومات خاصة أو يفتح طريقًا خطرًا بالخطأ؟' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q9', category: 'thinking_style', prompt: { en: 'Your group has several ideas and time is short. What do you check first?', ar: 'أنت تراجع فكرة لميزة جديدة. ما الذي تركز عليه أكثر؟' }, options: [
    { id: 'q9a', label: { en: 'Whether the interactions match user expectations.', ar: 'هل تتوافق التفاعلات مع توقعات المستخدمين؟' }, weights: { frontend: 2, ui_ux: 2 } },
    { id: 'q9b', label: { en: 'Whether the plan is complete: step views, steps, and details all fit together.', ar: 'هل الخطة متكاملة: الشاشات والمنطق والمعلومات المحفوظة تعمل معًا.' }, weights: { software_engineer: 3 } },
    { id: 'q9c', label: { en: 'Whether success metrics are defined clearly.', ar: 'هل علامات النجاح محددة بوضوح؟' }, weights: { ai_data: 3 } },
    { id: 'q9d', label: { en: 'Whether access is limited correctly, especially for personal student details.', ar: 'هل الدخول مضبوط بشكل صحيح خصوصًا لبيانات الطلاب الخاصة؟' }, weights: { cybersecurity: 2, backend: 1 } }
  ]},
  { id: 'q10', category: 'thinking_style', prompt: { en: 'In a team discussion, how do you usually convince others your idea makes sense?', ar: 'خلال اجتماع المشروع، كيف تقنع زملاءك عادةً أن فكرتك قوية؟' }, options: [
    { id: 'q10a', label: { en: 'By showing a simple clickable version people can try right away.', ar: 'بعرض نسخة بسيطة قابلة للتجربة فورًا.' }, weights: { frontend: 2, ui_ux: 2 } },
    { id: 'q10b', label: { en: 'By explaining a step-by-step plan that the team can build and test.', ar: 'بشرح خطة خطوة بخطوة يمكن للفريق تنفيذها واختبارها.' }, weights: { software_engineer: 3 } },
    { id: 'q10c', label: { en: 'Presenting details trends and measured outcomes.', ar: 'عرض اتجاهات البيانات والنتائج المقاسة.' }, weights: { ai_data: 3 } },
    { id: 'q10d', label: { en: 'By pointing out risky situations early and how to avoid them.', ar: 'بتوضيح المواقف الخطرة مبكرًا وكيفية تجنبها.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q11', category: 'thinking_style', prompt: { en: 'You solve a repeated problem, but it comes back next week. What is your first move?', ar: 'نفس الخطأ يعود في مشروعك الطلابي. ما أول خطوة تقوم بها؟' }, options: [
    { id: 'q11a', label: { en: 'Recheck the user flow where confusion starts.', ar: 'إعادة فحص مسار المستخدم الذي يبدأ عنده الالتباس.' }, weights: { ui_ux: 2, frontend: 1 } },
    { id: 'q11b', label: { en: 'Trace the full path of the bug and fix the root cause, not just the symptom.', ar: 'تتبّع المسار الكامل للخطأ وإصلاح السبب الجذري لا العرض فقط.' }, weights: { software_engineer: 2, backend: 1 } },
    { id: 'q11c', label: { en: 'Look at repeated patterns in reports to see when and why it activityears.', ar: 'البحث عن أنماط متكررة في التقارير لمعرفة متى ولماذا يظهر.' }, weights: { ai_data: 3 } },
    { id: 'q11d', label: { en: 'Check whether this bug could be misused and harm student profiles.', ar: 'تقييم ما إذا كان يمكن استغلال هذا الخطأ.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q12', category: 'thinking_style', prompt: { en: 'You are asked to try a new method this week. What matters most to you first?', ar: 'طلب منكم الدكتور تجربة أداة جديدة هذا الأسبوع. ما أول شيء تهتم به؟' }, options: [
    { id: 'q12a', label: { en: 'Seeing how it improves real user interactions.', ar: 'رؤية كيف تُحسّن تفاعلات المستخدم الفعلية.' }, weights: { frontend: 2, ui_ux: 2 } },
    { id: 'q12b', label: { en: 'Understanding how to use it in a complete task from start to finish.', ar: 'فهم كيفية استخدامها في ميزة كاملة من البداية للنهاية.' }, weights: { software_engineer: 2, backend: 1 } },
    { id: 'q12c', label: { en: 'Knowing what details it produces and how to evaluate it.', ar: 'معرفة نوع البيانات التي تنتجها وكيفية تقييمها.' }, weights: { ai_data: 3 } },
    { id: 'q12d', label: { en: 'Knowing how safely it handles student profiles and personal information.', ar: 'معرفة مدى أمان تعاملها مع حسابات الطلاب والمعلومات الخاصة.' }, weights: { cybersecurity: 3 } }
  ]},

  { id: 'q13', category: 'problem_solving', prompt: { en: 'Students say some details activityear wrong in a shared tool. What would you check first?', ar: 'تطبيق فريقك يعرض أحيانًا معلومات طلاب محفوظة بشكل خاطئ. ماذا تفحص أولًا؟' }, options: [
    { id: 'q13a', label: { en: 'Follow the steps from step to step until the wrong info first activityears.', ar: 'أتبع الخطوات بين الصفحات حتى أجد أين تبدأ المعلومة الخاطئة.' }, weights: { software_engineer: 2, backend: 1 } },
    { id: 'q13b', label: { en: 'Check if the save rules behind the step are mixing up student details.', ar: 'أفحص هل قواعد الحفظ خلف الصفحة تخلط بين سجلات الطلاب.' }, weights: { backend: 3 } },
    { id: 'q13c', label: { en: 'Compare when this hactivityens to see if it activityears in a clear pattern.', ar: 'أقارن متى تحدث المشكلة لأرى هل تظهر بنمط واضح.' }, weights: { ai_data: 3 } },
    { id: 'q13d', label: { en: 'Make sure no one can open or change another student’s details by mistake.', ar: 'أتأكد أن لا أحد يستطيع فتح أو تعديل بيانات طالب آخر بالخطأ.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q14', category: 'problem_solving', prompt: { en: 'Students complain that a club step feels slow. What is your first move?', ar: 'الطلاب يقولون إن موقع النادي بطيء جدًا. ما أول خطوة لك؟' }, options: [
    { id: 'q14a', label: { en: 'Lighten the step so buttons and sections activityear faster.', ar: 'أخفف الصفحة حتى تظهر الأزرار والأقسام بسرعة أكبر.' }, weights: { frontend: 3 } },
    { id: 'q14b', label: { en: 'Check if the behind-the-scenes steps are taking too long before sending results.', ar: 'أفحص هل الخطوات غير الواضحة يأخذ وقتًا طويلًا قبل إرسال النتائج.' }, weights: { backend: 3 } },
    { id: 'q14c', label: { en: 'Measure where students wait the most, then fix that part first.', ar: 'أقيس أين ينتظر الطلاب أكثر ثم أصلح هذا الجزء أولًا.' }, weights: { ai_data: 2, software_engineer: 1 } },
    { id: 'q14d', label: { en: 'Keep the site stable during busy times so it does not slow down for everyone.', ar: 'أجعل الموقع ثابتًا وقت الازدحام حتى لا يبطؤ على الجميع.' }, weights: { devops_cloud: 3 } }
  ]},
  { id: 'q15', category: 'problem_solving', prompt: { en: 'You join the project late, and the details part feels messy. How do you start?', ar: 'انضممت لمشروع وجزء البيانات المحفوظة فيه غير واضح. كيف تبدأ؟' }, options: [
    { id: 'q15a', label: { en: 'Link each saved item to the step view where students actually use it.', ar: 'أربط كل معلومة محفوظة بالشاشة التي يستخدمها الطلاب فعلًا.' }, weights: { software_engineer: 2, ui_ux: 1 } },
    { id: 'q15b', label: { en: 'Write a clear map of what is saved and when it changes.', ar: 'أكتب خريطة واضحة لما يتم حفظه ومتى يتغير.' }, weights: { backend: 3 } },
    { id: 'q15c', label: { en: 'Check for repeated errors, missing values, or strange patterns.', ar: 'أفحص الأخطاء المتكررة أو القيم الناقصة أو الأنماط الغريبة.' }, weights: { ai_data: 3 } },
    { id: 'q15d', label: { en: 'Review who can view or edit student details, and who should not.', ar: 'أراجع من يستطيع رؤية أو تعديل بيانات الطلاب ومن لا يجب أن يفعل.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q16', category: 'problem_solving', prompt: { en: 'Your team is almost ready, but after a change students cannot open the tool. What do you do first?', ar: 'بعد تحديث جديد، الطلاب لا يستطيعون فتح التطبيق. ماذا تفعل أولًا؟' }, options: [
    { id: 'q16a', label: { en: 'Share a clear message in the activity so students know what is hactivityening.', ar: 'أعرض رسالة واضحة داخل التطبيق حتى يعرف الطلاب ماذا يحدث.' }, weights: { ui_ux: 2, frontend: 1 } },
    { id: 'q16b', label: { en: 'Check the recent changes step by step and undo the one that broke things.', ar: 'أراجع التغييرات الأخيرة خطوة بخطوة وألغي ما سبب المشكلة.' }, weights: { software_engineer: 2, backend: 1 } },
    { id: 'q16c', label: { en: 'Bring the activity back to a stable version quickly so it works again for everyone.', ar: 'أعيد التطبيق سريعًا إلى نسخة ثابتة حتى يعمل مجددًا للجميع.' }, weights: { devops_cloud: 3 } },
    { id: 'q16d', label: { en: 'Confirm the new update did not open an unsafe way into student profiles.', ar: 'أتأكد أن التحديث الجديد لم يفتح طريقة غير آمنة للدخول إلى حسابات الطلاب.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q17', category: 'problem_solving', prompt: { en: 'Before presentation day, teammates disagree on what to fix first. How do you help decide?', ar: 'فريقك مختلف على ما يجب إصلاحه قبل يوم العرض. كيف تساعد في القرار؟' }, options: [
    { id: 'q17a', label: { en: 'Pick the issue that makes the activity easiest to understand for new students.', ar: 'أختار المشكلة التي تجعل التطبيق أسهل للفهم للطلاب الجدد.' }, weights: { ui_ux: 3 } },
    { id: 'q17b', label: { en: 'Choose the fix that connects the whole task and removes confusion end to end.', ar: 'أختار إصلاحًا يربط الميزة كاملة ويزيل الالتباس من البداية للنهاية.' }, weights: { software_engineer: 3 } },
    { id: 'q17c', label: { en: 'Use student usage results to pick the change with biggest effect.', ar: 'أستخدم نتائج استخدام الطلاب لاختيار التعديل ذي الأثر الأكبر.' }, weights: { ai_data: 3 } },
    { id: 'q17d', label: { en: 'Prioritize the issue that could expose personal information if left unfixed.', ar: 'أعطي أولوية للمشكلة التي قد تكشف معلومات خاصة إذا بقيت.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q18', category: 'problem_solving', prompt: { en: 'A joining process works with a few students but fails with a crowd. Your plan is:', ar: 'ميزة التسجيل تعمل مع 10 طلاب لكنها تتعطل مع 200. ما خطتك؟' }, options: [
    { id: 'q18a', label: { en: 'Simplify the step steps so each action needs less loading time.', ar: 'أبسط خطوات الصفحة حتى تحتاج كل عملية وقت تحميل أقل.' }, weights: { frontend: 3 } },
    { id: 'q18b', label: { en: 'Split the heavy hidden work into smaller parts that run more smoothly.', ar: 'أقسم العمل الخفي الثقيل إلى أجزاء أصغر تعمل بسلاسة أكبر.' }, weights: { backend: 3 } },
    { id: 'q18c', label: { en: 'Keep the activity steady during busy hours so students can still use it.', ar: 'أحافظ على ثبات التطبيق وقت الازدحام حتى يظل الطلاب قادرين على استخدامه.' }, weights: { devops_cloud: 3 } },
    { id: 'q18d', label: { en: 'Check if unusual repeated requests are causing the task to stop.', ar: 'أفحص إذا كانت الطلبات المتكررة بشكل غير طبيعي تسبب توقف الميزة.' }, weights: { cybersecurity: 2, devops_cloud: 1 } }
  ]},

  { id: 'q19', category: 'work_preference', prompt: { en: 'Your class starts a shared project. Which contribution feels most natural to you?', ar: 'في مشروع تطبيق للمادة، أي دور يشبهك أكثر؟' }, options: [
    { id: 'q19a', label: { en: 'Building the step views students click every day and improving small interactions.', ar: 'بناء الشاشات التي يضغط عليها الطلاب يوميًا وتحسين التفاعلات الصغيرة.' }, weights: { frontend: 2, ui_ux: 1 } },
    { id: 'q19b', label: { en: 'Turning a rough idea into a working task from step view to details.', ar: 'تحويل فكرة أولية إلى ميزة تعمل من الشاشة حتى حفظ البيانات.' }, weights: { software_engineer: 2, backend: 1 } },
    { id: 'q19c', label: { en: 'Keeping the activity running smoothly when many students open it at once.', ar: 'الحفاظ على عمل التطبيق بسلاسة عندما يفتحه طلاب كثيرون في نفس الوقت.' }, weights: { devops_cloud: 3 } },
    { id: 'q19d', label: { en: 'Protecting profiles and personal details so only the right person can access them.', ar: 'حماية الحسابات والمعلومات الشخصية حتى يصل إليها الشخص الصحيح فقط.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q20', category: 'work_preference', prompt: { en: 'In group work, which type of discussion gives you energy?', ar: 'أي نقاش داخل الفريق تستمتع به أكثر؟' }, options: [
    { id: 'q20a', label: { en: 'Talking about what confuses students on a step and how to make it clearer.', ar: 'النقاش حول ما يربك الطلاب في الصفحة وكيف نجعله أوضح.' }, weights: { ui_ux: 3 } },
    { id: 'q20b', label: { en: 'Planning the full task in small steps so everyone knows what to build.', ar: 'تخطيط الميزة كاملة على خطوات صغيرة حتى يعرف كل شخص ماذا يبني.' }, weights: { software_engineer: 3 } },
    { id: 'q20c', label: { en: 'Comparing student results to decide which idea actually worked better.', ar: 'مقارنة نتائج الطلاب لمعرفة أي فكرة نجحت أكثر فعليًا.' }, weights: { ai_data: 3 } },
    { id: 'q20d', label: { en: 'Set clear access limits so profiles and personal information stay safe.', ar: 'مراجعة كيفية حماية الحسابات والمعلومات الخاصة من الأخطاء.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q21', category: 'work_preference', prompt: { en: 'Your team asks you to own one part of a shared student task this month. Which part do you take?', ar: 'طلب منك الفريق أن تتولى جزءًا واحدًا من تطبيق طلابي هذا الشهر. ماذا تختار؟' }, options: [
    { id: 'q21a', label: { en: 'The look and feel of the steps so students can use them without help.', ar: 'شكل الصفحات وطريقة استخدامها حتى يعمل الطلاب عليها بدون مساعدة.' }, weights: { frontend: 2, ui_ux: 1 } },
    { id: 'q21b', label: { en: 'The steps that connects forms, rules, and details correctly.', ar: 'المنطق الذي يربط النماذج والقواعد والبيانات المحفوظة بشكل صحيح.' }, weights: { backend: 2, software_engineer: 1 } },
    { id: 'q21c', label: { en: 'The reports that show patterns and help decide what to improve next.', ar: 'التقارير التي تُظهر الأنماط وتساعد على تحديد ما نطوره بعد ذلك.' }, weights: { ai_data: 3 } },
    { id: 'q21d', label: { en: 'The setup that keeps the activity available and steady on busy student days.', ar: 'الإعداد الذي يحافظ على توفر التطبيق وثباته في الأيام المزدحمة.' }, weights: { devops_cloud: 3 } }
  ]},
  { id: 'q22', category: 'work_preference', prompt: { en: 'In a busy university week, you do your best work when you can:', ar: 'في أسبوع مشروع مزدحم، تعمل بأفضل شكل عندما تستطيع:' }, options: [
    { id: 'q22a', label: { en: 'Try small step view changes quickly and see which one feels easier to use.', ar: 'تجربة تغييرات صغيرة في الشاشة بسرعة ومعرفة أيها أسهل في الاستخدام.' }, weights: { frontend: 2, ui_ux: 1 } },
    { id: 'q22b', label: { en: 'Break a messy idea into clear tasks and build it into a complete task.', ar: 'تقسيم فكرة غير واضحة إلى مهام واضحة وبناؤها كميزة كاملة.' }, weights: { software_engineer: 3 } },
    { id: 'q22c', label: { en: 'Look at student behavior and test which change gives better results.', ar: 'أتابع سلوك الطلاب وأختبر أي تغيير يعطي نتائج أفضل.' }, weights: { ai_data: 3 } },
    { id: 'q22d', label: { en: 'Close risky gaps before they become real problems for people.', ar: 'أغلق الثغرات الخطرة قبل أن تصبح مشكلة حقيقية للمستخدمين.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q23', category: 'work_preference', prompt: { en: 'In teamwork, which moment gives you the biggest sense of achievement?', ar: 'أي لحظة في المشروع تعطيك أكبر إحساس بالإنجاز؟' }, options: [
    { id: 'q23a', label: { en: 'When students try the step and finish tasks with less confusion.', ar: 'عندما يجرب الطلاب الصفحة وينهون المهام بدون ارتباك كبير.' }, weights: { ui_ux: 2, frontend: 1 } },
    { id: 'q23b', label: { en: 'When one new task works fully from button click to saved result.', ar: 'عندما تعمل ميزة جديدة كاملة من ضغط الزر حتى حفظ النتيجة.' }, weights: { software_engineer: 2, backend: 1 } },
    { id: 'q23c', label: { en: 'When the numbers clearly show the update helped students.', ar: 'عندما تُظهر الأرقام بوضوح أن التحديث أفاد الطلاب.' }, weights: { ai_data: 3 } },
    { id: 'q23d', label: { en: 'When the activity stays up and usable even during heavy student crowd.', ar: 'عندما يبقى التطبيق متاحًا وقابلًا للاستخدام حتى مع ضغط كبير من الطلاب.' }, weights: { devops_cloud: 3 } }
  ]},
  { id: 'q24', category: 'work_preference', prompt: { en: 'Friends and teammates want different things. What do you usually push for?', ar: 'عندما يريد كل عضو في الفريق شيئًا مختلفًا، ماذا تدافع عنه غالبًا؟' }, options: [
    { id: 'q24a', label: { en: 'A simple path that helps students finish without getting lost.', ar: 'مسار بسيط يساعد الطلاب على الإنهاء بدون ضياع.' }, weights: { ui_ux: 3 } },
    { id: 'q24b', label: { en: 'A practical plan that balances student needs with what the team can build now.', ar: 'خطة عملية توازن بين حاجة الطلاب وما يستطيع الفريق بناؤه الآن.' }, weights: { software_engineer: 3 } },
    { id: 'q24c', label: { en: 'Decisions based on what student results actually show, not guesses.', ar: 'قرارات مبنية على ما تظهره نتائج الطلاب فعلًا وليس التخمين.' }, weights: { ai_data: 3 } },
    { id: 'q24d', label: { en: 'Rules that keep personal student details protected from the start.', ar: 'قواعد تحمي بيانات الطلاب الخاصة من البداية.' }, weights: { cybersecurity: 3 } }
  ]},

  { id: 'q25', category: 'learning_style', prompt: { en: 'After finishing a small class task, what would you review first to learn faster next time?', ar: 'بعد إنهاء تطبيق صغير للمادة، ما أول شيء تراجعه لتتعلّم أسرع؟' }, options: [
    { id: 'q25a', label: { en: 'How the screens looked and where classmates got confused.', ar: 'شكل الشاشات وأين ارتبك الزملاء أثناء الاستخدام.' }, weights: { ui_ux: 2, frontend: 1 } },
    { id: 'q25b', label: { en: 'How click, steps, and saved information worked together as one feature.', ar: 'كيف عملت الضغطة والمنطق والحفظ معًا كميزة واحدة.' }, weights: { software_engineer: 3 } },
    { id: 'q25c', label: { en: 'Which usage patterns appeared and what they suggest improving next.', ar: 'ما الأنماط التي ظهرت في الاستخدام وماذا تقترح للتحسين التالي.' }, weights: { ai_data: 3 } },
    { id: 'q25d', label: { en: 'Which private details were exposed and how to block that early.', ar: 'ما البيانات الخاصة التي قد تنكشف وكيف نمنع ذلك مبكرًا.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q26', category: 'learning_style', prompt: { en: 'When practicing a new idea, what do you set up first?', ar: 'عندما تبدأ التدرّب على فكرة جديدة، ماذا تبني أولًا؟' }, options: [
    { id: 'q26a', label: { en: 'A quick page people can click through right away.', ar: 'صفحة سريعة يمكن للناس التجربة عليها مباشرة.' }, weights: { frontend: 3 } },
    { id: 'q26b', label: { en: 'The hidden steps that receive input and return the right result.', ar: 'الخطوات الخفية التي تستقبل الطلب وتُرجع النتيجة الصحيحة.' }, weights: { backend: 3 } },
    { id: 'q26c', label: { en: 'A simple full flow from idea to working feature, even if basic.', ar: 'مسار كامل بسيط من الفكرة إلى ميزة تعمل، حتى لو كانت أساسية.' }, weights: { software_engineer: 3 } },
    { id: 'q26d', label: { en: 'A setup that keeps the app running smoothly during busy times.', ar: 'إعداد يجعل التطبيق يعمل بثبات وقت ضغط الاستخدام.' }, weights: { devops_cloud: 3 } }
  ]},
  { id: 'q27', category: 'learning_style', prompt: { en: 'After learning something new, how do you know you really understood it?', ar: 'كيف تعرف أنك فهمت موضوعًا فعلًا؟' }, options: [
    { id: 'q27a', label: { en: 'I can make it clearer so a new student uses it without help.', ar: 'أقدر أجعله أوضح حتى يستخدمه طالب جديد بدون مساعدة.' }, weights: { ui_ux: 3 } },
    { id: 'q27b', label: { en: 'I can trace what happens behind the screen step by step.', ar: 'أقدر أتبع ما يحدث خلف الشاشة خطوة بخطوة.' }, weights: { backend: 2, software_engineer: 1 } },
    { id: 'q27c', label: { en: 'I can compare two ideas and show which one worked better.', ar: 'أقدر أقارن فكرتين وأوضح أيهما أعطت نتيجة أفضل.' }, weights: { ai_data: 3 } },
    { id: 'q27d', label: { en: 'I can point out weak spots that may expose user accounts or data.', ar: 'أقدر أحدد النقاط الضعيفة التي قد تكشف حسابات أو بيانات المستخدمين.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q28', category: 'learning_style', prompt: { en: 'Your team has one optional task before the deadline. Which task would you volunteer for, even late at night?', ar: 'فريقك لديه مهمة اختيارية قبل الموعد النهائي. أي مهمة تتطوع لها حتى لو ليلًا؟' }, options: [
    { id: 'q28a', label: { en: 'Improve a confusing page until classmates finish it easily.', ar: 'تحسين صفحة مربكة حتى يتمكن الزملاء من إنهائها بسهولة.' }, weights: { ui_ux: 2, frontend: 1 } },
    { id: 'q28b', label: { en: 'Build the hidden rules that keep student details accurate.', ar: 'بناء القواعد الخفية التي تحفظ سجلات الطلاب بشكل صحيح.' }, weights: { backend: 3 } },
    { id: 'q28c', label: { en: 'Study club activity data and suggest what to improve next.', ar: 'دراسة بيانات نشاط النادي واقتراح ما يجب تحسينه لاحقًا.' }, weights: { ai_data: 3 } },
    { id: 'q28d', label: { en: 'Turn a vague request into a small complete feature for the team.', ar: 'تحويل طلب غير واضح إلى ميزة صغيرة مكتملة للفريق.' }, weights: { software_engineer: 3 } }
  ]},
  { id: 'q29', category: 'learning_style', prompt: { en: 'Something behaves strangely during student testing. What do you do first?', ar: 'عندما يتصرف تطبيقك بشكل غريب، ما أول خطوة تقوم بها؟' }, options: [
    { id: 'q29a', label: { en: 'Replay the clicks and fix what looks confusing on screen.', ar: 'أعيد خطوات الضغط وأصلح ما يبدو مربكًا على الشاشة.' }, weights: { frontend: 2, ui_ux: 1 } },
    { id: 'q29b', label: { en: 'Check the behind-the-scenes steps path to find exactly where it broke.', ar: 'أفحص مسار المنطق الخفي لأعرف أين حدث الخلل بالضبط.' }, weights: { backend: 3 } },
    { id: 'q29c', label: { en: 'Break the issue into smaller parts and test each part in order.', ar: 'أقسم المشكلة إلى أجزاء صغيرة وأختبر كل جزء بالترتيب.' }, weights: { software_engineer: 3 } },
    { id: 'q29d', label: { en: 'Review who can open or edit data to prevent unsafe access.', ar: 'أراجع من يمكنه فتح البيانات أو تعديلها لمنع الوصول غير الآمن.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q30', category: 'learning_style', prompt: { en: 'In university courses, you remember lessons best when you:', ar: 'تتذكر ما تعلمته بشكل أفضل عندما:' }, options: [
    { id: 'q30a', label: { en: 'Build a clean screen and watch real users try it.', ar: 'تبني شاشة واضحة وتشاهد مستخدمين حقيقيين وهم يجربونها.' }, weights: { frontend: 2, ui_ux: 1 } },
    { id: 'q30b', label: { en: 'Connect the screen to saved information and make the full flow work.', ar: 'تربط الشاشة بالبيانات المحفوظة وتجعل المسار كاملًا يعمل.' }, weights: { software_engineer: 2, backend: 1 } },
    { id: 'q30c', label: { en: 'Collect results from classmates and compare before and after.', ar: 'تجمع نتائج الزملاء وتقارن قبل التعديل وبعده.' }, weights: { ai_data: 3 } },
    { id: 'q30d', label: { en: 'Prepare the app to stay available even when many students open it.', ar: 'تجهّز التطبيق ليبقى متاحًا حتى عند دخول عدد كبير من الطلاب.' }, weights: { devops_cloud: 3 } }
  ]},

  { id: 'q31', category: 'real_world_scenario', prompt: { en: 'Before presenting your work, you notice some student details are visible to everyone. What do you handle first?', ar: 'قبل عرض المشروع تكتشف أن بعض بيانات الطلاب ظاهرة للجميع. ما أول شيء تتعامل معه؟' }, options: [
    { id: 'q31a', label: { en: 'Make a clear message so users know what happened and what to do.', ar: 'أكتب رسالة واضحة للمستخدمين تشرح ما حدث وما المطلوب منهم.' }, weights: { ui_ux: 2, frontend: 1 } },
    { id: 'q31b', label: { en: 'Close the wrong data path and verify only the right people can view records.', ar: 'أغلق المسار الخاطئ للبيانات وأتأكد أن العرض للمخولين فقط.' }, weights: { backend: 2, cybersecurity: 1 } },
    { id: 'q31c', label: { en: 'List exactly which records were affected to guide the next fixes.', ar: 'أحدد بالضبط السجلات المتأثرة حتى نعرف خطوات الإصلاح التالية.' }, weights: { ai_data: 3 } },
    { id: 'q31d', label: { en: 'Coordinate quick steps across screens, steps, and data so the issue is fully fixed.', ar: 'أنسق خطوات سريعة عبر الشاشات والمنطق والبيانات حتى يُحلّ الخلل كاملًا.' }, weights: { software_engineer: 3 } }
  ]},
  { id: 'q32', category: 'real_world_scenario', prompt: { en: 'Your team presents tomorrow, but the tool suddenly fails on some phones. You focus on:', ar: 'فريقك سيعرض غدًا، لكن التطبيق تعطل فجأة على بعض الهواتف. على ماذا تركّز؟' }, options: [
    { id: 'q32a', label: { en: 'A simple backup screen so classmates can still finish key steps.', ar: 'شاشة بديلة بسيطة حتى يكمل الزملاء الخطوات الأساسية.' }, weights: { frontend: 2, ui_ux: 1 } },
    { id: 'q32b', label: { en: 'Fixing the hidden step causing wrong results before the demo.', ar: 'إصلاح الخطوة الخفية التي تسبب نتائج خاطئة قبل العرض.' }, weights: { backend: 3 } },
    { id: 'q32c', label: { en: 'Keeping the app stable for everyone during demo time.', ar: 'الحفاظ على ثبات التطبيق للجميع وقت العرض.' }, weights: { devops_cloud: 3 } },
    { id: 'q32d', label: { en: 'Checking that quick fixes did not allow the wrong people to access data.', ar: 'التأكد أن الإصلاحات السريعة لم تفتح وصولًا غير آمن.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q33', category: 'real_world_scenario', prompt: { en: 'A student club asks your team for a simple event helper. What would you suggest first?', ar: 'نادي طلابي يطلب أداة بسيطة لتنظيم الفعاليات. ماذا تقترح أولًا؟' }, options: [
    { id: 'q33a', label: { en: 'Start with an easy page where members can add and find events quickly.', ar: 'البدء بصفحة سهلة يضيف فيها الأعضاء الفعاليات ويجدونها بسرعة.' }, weights: { ui_ux: 2, frontend: 1 } },
    { id: 'q33b', label: { en: 'Start with clear rules for saving event details without mistakes.', ar: 'البدء بقواعد واضحة لحفظ تفاصيل الفعاليات بدون أخطاء.' }, weights: { backend: 3 } },
    { id: 'q33c', label: { en: 'Track attendance patterns to learn what events students prefer.', ar: 'متابعة أنماط الحضور لمعرفة الفعاليات التي يفضلها الطلاب.' }, weights: { ai_data: 3 } },
    { id: 'q33d', label: { en: 'Plan a small complete version the team can build and use this week.', ar: 'تخطيط نسخة صغيرة مكتملة يستطيع الفريق بناءها واستخدامها هذا الأسبوع.' }, weights: { software_engineer: 3 } }
  ]},
  { id: 'q34', category: 'real_world_scenario', prompt: { en: 'When presenting to instructors, what do you choose to show first?', ar: 'عند عرض مشروعك على الأساتذة، ماذا تختار أن تعرض أولًا؟' }, options: [
    { id: 'q34a', label: { en: 'How the new screens made tasks faster and less confusing.', ar: 'كيف جعلت الشاشات الجديدة المهام أسرع وأقل إرباكًا.' }, weights: { frontend: 2, ui_ux: 1 } },
    { id: 'q34b', label: { en: 'How the app rules now give correct results more consistently.', ar: 'كيف أصبحت قواعد التطبيق تعطي نتائج صحيحة بشكل أكثر ثباتًا.' }, weights: { backend: 3 } },
    { id: 'q34c', label: { en: 'Numbers that compare student results before and after your update.', ar: 'أرقام تقارن نتائج الطلاب قبل التحديث وبعده.' }, weights: { ai_data: 3 } },
    { id: 'q34d', label: { en: 'How you balanced user needs and build effort to deliver one solid feature.', ar: 'كيف وازنت بين احتياج المستخدم وجهد البناء لتقديم ميزة قوية واحدة.' }, weights: { software_engineer: 3 } }
  ]},
  { id: 'q35', category: 'real_world_scenario', prompt: { en: 'During registration hour, many students use your tool at once. What do you fix first?', ar: 'عدد كبير من الطلاب فتحوا أداتك في وقت التسجيل. ما أول شيء تصلحه؟' }, options: [
    { id: 'q35a', label: { en: 'Simplify heavy screens so they load and respond faster.', ar: 'تبسيط الشاشات الثقيلة لتفتح وتستجيب بشكل أسرع.' }, weights: { frontend: 3 } },
    { id: 'q35b', label: { en: 'Organize saving steps so no student input is lost when traffic is high.', ar: 'تنظيم طلبات الحفظ حتى لا تضيع مدخلات أي طالب.' }, weights: { backend: 3 } },
    { id: 'q35c', label: { en: 'Keep the app available and steady while traffic stays high.', ar: 'الحفاظ على بقاء التطبيق متاحًا وثابتًا مع استمرار الضغط.' }, weights: { devops_cloud: 3 } },
    { id: 'q35d', label: { en: 'Make sure quick traffic fixes do not weaken account safety.', ar: 'التأكد أن حلول الضغط السريعة لا تضعف أمان الحسابات.' }, weights: { cybersecurity: 3 } }
  ]},
  { id: 'q36', category: 'real_world_scenario', prompt: { en: 'Before sharing a team project campus-wide, which quality check matters most to you?', ar: 'بعد إنهاء مشروع جماعي، ما فحص الجودة الأهم لديك قبل نشره على نطاق الجامعة؟' }, options: [
    { id: 'q36a', label: { en: 'Students can use it easily from first click without extra explanation.', ar: 'يستطيع الطلاب استخدامه بسهولة من أول ضغطة بدون شرح إضافي.' }, weights: { ui_ux: 3 } },
    { id: 'q36b', label: { en: 'The full path works: input, processing, and correct saved output.', ar: 'المسار الكامل يعمل: إدخال، معالجة، ثم حفظ صحيح للنتيجة.' }, weights: { software_engineer: 2, backend: 1 } },
    { id: 'q36c', label: { en: 'It keeps working smoothly even when many students use it together.', ar: 'يبقى يعمل بسلاسة حتى عند استخدامه من عدد كبير من الطلاب معًا.' }, weights: { devops_cloud: 3 } },
    { id: 'q36d', label: { en: 'Private data stays protected and only the right users can see it.', ar: 'تبقى البيانات الخاصة محمية ولا يراها إلا المستخدم المناسب.' }, weights: { cybersecurity: 3 } }
  ]}
];
