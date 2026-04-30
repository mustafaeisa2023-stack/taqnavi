import type { Question } from '../types/quiz';

export const QUESTIONS: Question[] = [
  {
    id: 'q1',
    category: 'interest',
    prompt: {
      en: 'Your friends are planning a trip, but everyone suggests something different. What do you naturally do first?',
      ar: 'أصحابك يخططون لرحلة، وكل شخص يقترح شيئًا مختلفًا. ما أول شيء تميل لفعله؟',
    },
    options: [
      { id: 'q1a', label: { en: 'I turn the ideas into simple steps everyone can follow.', ar: 'أحوّل الأفكار إلى خطوات بسيطة يستطيع الجميع اتباعها.' }, weights: { software_engineer: 3 } },
      { id: 'q1b', label: { en: 'I make the plan easy to read so nobody gets confused.', ar: 'أجعل الخطة سهلة القراءة حتى لا يحتار أحد.' }, weights: { ui_ux: 3 } },
      { id: 'q1c', label: { en: 'I compare what people prefer and look for the strongest pattern.', ar: 'أقارن تفضيلاتهم وأبحث عن النمط الأقوى.' }, weights: { ai_data: 3 } },
      { id: 'q1d', label: { en: 'I think about what could go wrong and prepare a backup.', ar: 'أفكر بما قد يسبب مشكلة وأجهز خطة بديلة.' }, weights: { devops_cloud: 2, cybersecurity: 1 } },
    ],
  },
  {
    id: 'q2',
    category: 'interest',
    prompt: {
      en: 'Your room is messy and someone is visiting soon. How do you start?',
      ar: 'غرفتك فوضوية وشخص سيزورك قريبًا. كيف تبدأ؟',
    },
    options: [
      { id: 'q2a', label: { en: 'I fix what people notice first so the place feels better quickly.', ar: 'أرتب ما يلاحظه الناس أولًا حتى يصبح المكان أفضل بسرعة.' }, weights: { frontend: 3 } },
      { id: 'q2b', label: { en: 'I sort things by type so every item has a clear place.', ar: 'أفرز الأشياء حسب نوعها حتى يكون لكل شيء مكان واضح.' }, weights: { backend: 3 } },
      { id: 'q2c', label: { en: 'I divide the room into areas and finish one area at a time.', ar: 'أقسم الغرفة إلى مناطق وأنهي كل منطقة بالترتيب.' }, weights: { software_engineer: 3 } },
      { id: 'q2d', label: { en: 'I look for the main source of the mess so it does not return.', ar: 'أبحث عن سبب الفوضى الأساسي حتى لا تعود بسرعة.' }, weights: { ai_data: 2, backend: 1 } },
    ],
  },
  {
    id: 'q3',
    category: 'interest',
    prompt: {
      en: 'A friend is confused and cannot explain the problem clearly. How do you help?',
      ar: 'صديقك محتار ولا يستطيع شرح مشكلته بوضوح. كيف تساعده؟',
    },
    options: [
      { id: 'q3a', label: { en: 'I ask simple questions until the problem becomes clear.', ar: 'أسأله أسئلة بسيطة حتى تصبح المشكلة واضحة.' }, weights: { ui_ux: 3 } },
      { id: 'q3b', label: { en: 'I organize what they said into a step-by-step picture.', ar: 'أرتب كلامه على شكل خطوات واضحة.' }, weights: { software_engineer: 3 } },
      { id: 'q3c', label: { en: 'I compare possible reasons and pick the most likely one.', ar: 'أقارن الأسباب المحتملة وأختار الأكثر احتمالًا.' }, weights: { ai_data: 3 } },
      { id: 'q3d', label: { en: 'I think about the hidden issue that may be causing the trouble.', ar: 'أفكر بالسبب الخفي الذي قد يكون وراء المشكلة.' }, weights: { backend: 2, cybersecurity: 1 } },
    ],
  },
  {
    id: 'q4',
    category: 'interest',
    prompt: {
      en: 'You have a lot to study before an exam. What feels most natural?',
      ar: 'عندك مواد كثيرة قبل الامتحان. ما الأسلوب الأقرب لك؟',
    },
    options: [
      { id: 'q4a', label: { en: 'I make a clear schedule and move through it step by step.', ar: 'أبني جدولًا واضحًا وأمشي عليه خطوة خطوة.' }, weights: { software_engineer: 3 } },
      { id: 'q4b', label: { en: 'I rewrite the difficult parts in a simpler way.', ar: 'أعيد شرح الأجزاء الصعبة بطريقة أبسط.' }, weights: { ui_ux: 3 } },
      { id: 'q4c', label: { en: 'I solve quick questions and focus on the parts I keep missing.', ar: 'أحل أسئلة سريعة وأركز على الأجزاء التي أكرر الخطأ فيها.' }, weights: { ai_data: 3 } },
      { id: 'q4d', label: { en: 'I prepare a routine that keeps me steady until exam day.', ar: 'أجهز روتينًا يساعدني أن أبقى ثابتًا حتى يوم الامتحان.' }, weights: { devops_cloud: 3 } },
    ],
  },
  {
    id: 'q5',
    category: 'interest',
    prompt: {
      en: 'During a university event, the line becomes crowded and people are annoyed. What do you do first?',
      ar: 'أثناء فعالية جامعية، صار الطابور مزدحمًا والناس منزعجة. ماذا تفعل أولًا؟',
    },
    options: [
      { id: 'q5a', label: { en: 'I explain the next steps clearly so people calm down.', ar: 'أشرح الخطوات التالية بوضوح حتى يهدأ الناس.' }, weights: { ui_ux: 3 } },
      { id: 'q5b', label: { en: 'I split the line into smaller groups to keep things moving.', ar: 'أقسم الطابور إلى مجموعات أصغر حتى تستمر الحركة.' }, weights: { devops_cloud: 2, software_engineer: 1 } },
      { id: 'q5c', label: { en: 'I watch where the delay repeats and start from that point.', ar: 'أراقب أين يتكرر التأخير وأبدأ من تلك النقطة.' }, weights: { ai_data: 3 } },
      { id: 'q5d', label: { en: 'I set simple boundaries so nobody skips or causes trouble.', ar: 'أضع حدودًا بسيطة حتى لا يتجاوز أحد أو يسبب مشكلة.' }, weights: { cybersecurity: 3 } },
    ],
  },
  {
    id: 'q6',
    category: 'interest',
    prompt: {
      en: 'Your group assignment is vague and everyone is waiting. What attracts you most?',
      ar: 'واجب المجموعة غير واضح والجميع ينتظر. ما الذي يجذبك أكثر؟',
    },
    options: [
      { id: 'q6a', label: { en: 'Turning the unclear idea into a small complete plan.', ar: 'تحويل الفكرة الغامضة إلى خطة صغيرة مكتملة.' }, weights: { software_engineer: 3 } },
      { id: 'q6b', label: { en: 'Making the instructions easier for everyone to understand.', ar: 'جعل التعليمات أسهل حتى يفهمها الجميع.' }, weights: { ui_ux: 3 } },
      { id: 'q6c', label: { en: 'Organizing the details so nothing conflicts later.', ar: 'ترتيب التفاصيل حتى لا تتعارض لاحقًا.' }, weights: { backend: 3 } },
      { id: 'q6d', label: { en: 'Preparing a backup path if the first plan fails.', ar: 'تجهيز مسار بديل إذا فشلت الخطة الأولى.' }, weights: { devops_cloud: 3 } },
    ],
  },
  {
    id: 'q7',
    category: 'thinking_style',
    prompt: {
      en: 'Someone suggests a last-minute change to a group plan. What do you think about first?',
      ar: 'شخص يقترح تغييرًا في آخر لحظة لخطة جماعية. ما أول شيء تفكر فيه؟',
    },
    options: [
      { id: 'q7a', label: { en: 'Will this make the plan easier or harder for people?', ar: 'هل سيجعل هذا الخطة أسهل أم أصعب على الناس؟' }, weights: { ui_ux: 3 } },
      { id: 'q7b', label: { en: 'Which parts of the plan will be affected by the change?', ar: 'أي أجزاء من الخطة ستتأثر بهذا التغيير؟' }, weights: { software_engineer: 3 } },
      { id: 'q7c', label: { en: 'Can we test the idea quickly before trusting it?', ar: 'هل نستطيع تجربة الفكرة بسرعة قبل اعتمادها؟' }, weights: { ai_data: 3 } },
      { id: 'q7d', label: { en: 'Could this create a problem nobody is noticing yet?', ar: 'هل قد يسبب هذا مشكلة لا ينتبه لها أحد الآن؟' }, weights: { cybersecurity: 2, devops_cloud: 1 } },
    ],
  },
  {
    id: 'q8',
    category: 'thinking_style',
    prompt: {
      en: 'Your team disagrees and the discussion is going in circles. How do you help?',
      ar: 'فريقك مختلف والنقاش يدور في حلقة. كيف تساعد؟',
    },
    options: [
      { id: 'q8a', label: { en: 'I restate the problem in simple words so everyone aligns.', ar: 'أعيد صياغة المشكلة بكلمات بسيطة حتى يتفق الجميع.' }, weights: { ui_ux: 3 } },
      { id: 'q8b', label: { en: 'I divide the decision into smaller choices.', ar: 'أقسم القرار إلى اختيارات أصغر.' }, weights: { software_engineer: 3 } },
      { id: 'q8c', label: { en: 'I compare the options using examples instead of opinions.', ar: 'أقارن الخيارات باستخدام أمثلة بدل الآراء فقط.' }, weights: { ai_data: 3 } },
      { id: 'q8d', label: { en: 'I point out which choice could create the biggest risk.', ar: 'أوضح أي خيار قد يصنع أكبر مشكلة لاحقًا.' }, weights: { cybersecurity: 3 } },
    ],
  },
  {
    id: 'q9',
    category: 'thinking_style',
    prompt: {
      en: 'Your notes are scattered before a deadline. What do you naturally do?',
      ar: 'ملاحظاتك مبعثرة قبل موعد تسليم. ماذا تفعل عادةً؟',
    },
    options: [
      { id: 'q9a', label: { en: 'I make them visually clear so I can scan them quickly.', ar: 'أجعلها واضحة بصريًا حتى أراجعها بسرعة.' }, weights: { frontend: 2, ui_ux: 1 } },
      { id: 'q9b', label: { en: 'I group related details so each thing belongs somewhere.', ar: 'أجمع التفاصيل المتشابهة حتى يكون لكل شيء مكان.' }, weights: { backend: 3 } },
      { id: 'q9c', label: { en: 'I turn them into a path from first idea to final answer.', ar: 'أحولها إلى مسار من الفكرة الأولى حتى الجواب النهائي.' }, weights: { software_engineer: 3 } },
      { id: 'q9d', label: { en: 'I mark repeated points because they probably matter most.', ar: 'أحدد النقاط المتكررة لأنها غالبًا الأهم.' }, weights: { ai_data: 3 } },
    ],
  },
  {
    id: 'q10',
    category: 'thinking_style',
    prompt: {
      en: 'You need to convince classmates of an idea. What works best for you?',
      ar: 'تحتاج أن تقنع زملاءك بفكرة. ما الطريقة التي تناسبك أكثر؟',
    },
    options: [
      { id: 'q10a', label: { en: 'I show a simple example they can understand immediately.', ar: 'أعرض مثالًا بسيطًا يمكنهم فهمه فورًا.' }, weights: { frontend: 2, ui_ux: 1 } },
      { id: 'q10b', label: { en: 'I explain the path from problem to outcome.', ar: 'أشرح الطريق من المشكلة إلى النتيجة.' }, weights: { software_engineer: 3 } },
      { id: 'q10c', label: { en: 'I compare choices with evidence.', ar: 'أقارن الخيارات بناءً على دليل.' }, weights: { ai_data: 3 } },
      { id: 'q10d', label: { en: 'I explain the possible downside if we ignore a weak point.', ar: 'أشرح الجانب الخطر إذا تجاهلنا نقطة ضعف.' }, weights: { cybersecurity: 3 } },
    ],
  },
  {
    id: 'q11',
    category: 'thinking_style',
    prompt: {
      en: 'A repeated problem keeps coming back after people say it is solved. What is your first move?',
      ar: 'مشكلة متكررة تعود بعد أن يقول الناس إنها انتهت. ما أول خطوة؟',
    },
    options: [
      { id: 'q11a', label: { en: 'I look for the moment where people start misunderstanding.', ar: 'أبحث عن اللحظة التي يبدأ فيها سوء الفهم.' }, weights: { ui_ux: 3 } },
      { id: 'q11b', label: { en: 'I trace the whole chain until I find the real cause.', ar: 'أتتبع السلسلة كاملة حتى أجد السبب الحقيقي.' }, weights: { software_engineer: 2, backend: 1 } },
      { id: 'q11c', label: { en: 'I compare when it happens and when it does not.', ar: 'أقارن متى تحدث المشكلة ومتى لا تحدث.' }, weights: { ai_data: 3 } },
      { id: 'q11d', label: { en: 'I check whether someone could take advantage of the weak spot.', ar: 'أفحص هل يمكن لأحد استغلال نقطة الضعف.' }, weights: { cybersecurity: 3 } },
    ],
  },
  {
    id: 'q12',
    category: 'thinking_style',
    prompt: {
      en: 'You try a new habit for one week. What do you care about most?',
      ar: 'تجرب عادة جديدة لمدة أسبوع. ما أكثر شيء تهتم به؟',
    },
    options: [
      { id: 'q12a', label: { en: 'Whether it feels easy enough to keep using.', ar: 'هل تبدو سهلة بما يكفي للاستمرار عليها؟' }, weights: { ui_ux: 3 } },
      { id: 'q12b', label: { en: 'Whether it fits into my full daily routine.', ar: 'هل تناسب روتيني اليومي كاملًا؟' }, weights: { software_engineer: 3 } },
      { id: 'q12c', label: { en: 'Whether I can notice progress from real results.', ar: 'هل أستطيع ملاحظة تقدم من نتائج حقيقية؟' }, weights: { ai_data: 3 } },
      { id: 'q12d', label: { en: 'Whether I can keep it going even on busy days.', ar: 'هل أستطيع الحفاظ عليها حتى في الأيام المزدحمة؟' }, weights: { devops_cloud: 3 } },
    ],
  },
  {
    id: 'q13',
    category: 'problem_solving',
    prompt: {
      en: 'A group plan suddenly starts going wrong. What do you check first?',
      ar: 'خطة جماعية بدأت تتعطل فجأة. ماذا تفحص أولًا؟',
    },
    options: [
      { id: 'q13a', label: { en: 'Where people stopped understanding what to do.', ar: 'أين توقف الناس عن فهم ما يجب فعله.' }, weights: { ui_ux: 3 } },
      { id: 'q13b', label: { en: 'Which step broke the chain.', ar: 'أي خطوة كسرت السلسلة.' }, weights: { software_engineer: 2, backend: 1 } },
      { id: 'q13c', label: { en: 'Whether the same problem appears in similar situations.', ar: 'هل تظهر المشكلة نفسها في مواقف مشابهة؟' }, weights: { ai_data: 3 } },
      { id: 'q13d', label: { en: 'Whether a boundary was unclear and caused the issue.', ar: 'هل كان هناك حد غير واضح سبب المشكلة؟' }, weights: { cybersecurity: 2, backend: 1 } },
    ],
  },
  {
    id: 'q14',
    category: 'problem_solving',
    prompt: {
      en: 'A task feels slow and tiring for everyone. What do you improve first?',
      ar: 'مهمة تبدو بطيئة ومتعبة للجميع. ما أول شيء تحسنه؟',
    },
    options: [
      { id: 'q14a', label: { en: 'I remove the visible clutter so it feels lighter.', ar: 'أزيل الفوضى الظاهرة حتى تصبح أخف.' }, weights: { frontend: 3 } },
      { id: 'q14b', label: { en: 'I reorganize the steps that happen in the background.', ar: 'أعيد ترتيب الخطوات التي تحدث خلف الكواليس.' }, weights: { backend: 3 } },
      { id: 'q14c', label: { en: 'I measure where people lose the most time.', ar: 'أقيس أين يضيع الناس أكثر وقت.' }, weights: { ai_data: 3 } },
      { id: 'q14d', label: { en: 'I make the routine easier to repeat without breaking.', ar: 'أجعل الروتين أسهل للتكرار بدون أن يتعطل.' }, weights: { devops_cloud: 3 } },
    ],
  },
  {
    id: 'q15',
    category: 'problem_solving',
    prompt: {
      en: 'You join a team late and their work is messy. How do you start?',
      ar: 'انضممت لفريق متأخرًا وكان عملهم فوضويًا. كيف تبدأ؟',
    },
    options: [
      { id: 'q15a', label: { en: 'I connect each piece to the person who needs it.', ar: 'أربط كل جزء بالشخص الذي يحتاجه.' }, weights: { software_engineer: 2, ui_ux: 1 } },
      { id: 'q15b', label: { en: 'I create a clear structure for the important details.', ar: 'أبني هيكلًا واضحًا للتفاصيل المهمة.' }, weights: { backend: 3 } },
      { id: 'q15c', label: { en: 'I look for repeated mistakes before changing anything.', ar: 'أبحث عن الأخطاء المتكررة قبل أن أغير أي شيء.' }, weights: { ai_data: 3 } },
      { id: 'q15d', label: { en: 'I check who should handle what so mistakes do not spread.', ar: 'أفحص من يجب أن يتعامل مع ماذا حتى لا تنتشر الأخطاء.' }, weights: { cybersecurity: 2, software_engineer: 1 } },
    ],
  },
  {
    id: 'q16',
    category: 'problem_solving',
    prompt: {
      en: 'A plan worked yesterday, but today it fails. What do you do first?',
      ar: 'خطة نجحت أمس لكنها فشلت اليوم. ماذا تفعل أولًا؟',
    },
    options: [
      { id: 'q16a', label: { en: 'I explain the issue clearly so people know what changed.', ar: 'أشرح المشكلة بوضوح حتى يعرف الناس ما الذي تغير.' }, weights: { ui_ux: 2, frontend: 1 } },
      { id: 'q16b', label: { en: 'I compare yesterday and today step by step.', ar: 'أقارن بين أمس واليوم خطوة بخطوة.' }, weights: { software_engineer: 3 } },
      { id: 'q16c', label: { en: 'I return to the last reliable version of the plan.', ar: 'أعود إلى آخر نسخة موثوقة من الخطة.' }, weights: { devops_cloud: 3 } },
      { id: 'q16d', label: { en: 'I check if the change created a new weak point.', ar: 'أفحص هل صنع التغيير نقطة ضعف جديدة.' }, weights: { cybersecurity: 3 } },
    ],
  },
  {
    id: 'q17',
    category: 'problem_solving',
    prompt: {
      en: 'Your group has only one hour left. Which issue do you fix first?',
      ar: 'بقي لفريقك ساعة واحدة فقط. أي مشكلة تصلح أولًا؟',
    },
    options: [
      { id: 'q17a', label: { en: 'The issue that makes people most confused.', ar: 'المشكلة التي تجعل الناس أكثر حيرة.' }, weights: { ui_ux: 3 } },
      { id: 'q17b', label: { en: 'The issue that stops the full plan from working.', ar: 'المشكلة التي تمنع الخطة كاملة من العمل.' }, weights: { software_engineer: 3 } },
      { id: 'q17c', label: { en: 'The issue that appears most often.', ar: 'المشكلة التي تتكرر أكثر.' }, weights: { ai_data: 3 } },
      { id: 'q17d', label: { en: 'The issue that could create the biggest trouble if ignored.', ar: 'المشكلة التي قد تصنع أكبر ضرر إذا تجاهلناها.' }, weights: { cybersecurity: 3 } },
    ],
  },
  {
    id: 'q18',
    category: 'problem_solving',
    prompt: {
      en: 'A simple routine works with a few people but fails when the group grows. What is your plan?',
      ar: 'روتين بسيط يعمل مع عدد قليل لكنه يفشل عندما تكبر المجموعة. ما خطتك؟',
    },
    options: [
      { id: 'q18a', label: { en: 'Make each visible step lighter and quicker.', ar: 'أجعل كل خطوة ظاهرة أخف وأسرع.' }, weights: { frontend: 3 } },
      { id: 'q18b', label: { en: 'Organize the order so requests do not get mixed.', ar: 'أنظم الترتيب حتى لا تختلط الطلبات.' }, weights: { backend: 3 } },
      { id: 'q18c', label: { en: 'Prepare the routine to handle pressure without stopping.', ar: 'أجهز الروتين ليتحمل الضغط بدون توقف.' }, weights: { devops_cloud: 3 } },
      { id: 'q18d', label: { en: 'Watch for unusual repeated actions that cause the failure.', ar: 'أراقب الأفعال المتكررة غير الطبيعية التي تسبب الفشل.' }, weights: { cybersecurity: 2, ai_data: 1 } },
    ],
  },
  {
    id: 'q19',
    category: 'work_preference',
    prompt: {
      en: 'In teamwork, which contribution feels most natural to you?',
      ar: 'في العمل الجماعي، أي مساهمة تبدو طبيعية لك أكثر؟',
    },
    options: [
      { id: 'q19a', label: { en: 'Making the shared work look clear and pleasant.', ar: 'جعل العمل المشترك واضحًا ومريحًا للنظر.' }, weights: { frontend: 3 } },
      { id: 'q19b', label: { en: 'Turning a rough idea into a finished path.', ar: 'تحويل فكرة أولية إلى مسار مكتمل.' }, weights: { software_engineer: 3 } },
      { id: 'q19c', label: { en: 'Keeping the important details organized and consistent.', ar: 'الحفاظ على التفاصيل المهمة منظمة ومتناسقة.' }, weights: { backend: 3 } },
      { id: 'q19d', label: { en: 'Thinking ahead about where things might go wrong.', ar: 'التفكير مسبقًا في الأماكن التي قد تسوء فيها الأمور.' }, weights: { cybersecurity: 3 } },
    ],
  },
  {
    id: 'q20',
    category: 'work_preference',
    prompt: {
      en: 'Which conversation pulls you in the fastest?',
      ar: 'أي نوع من النقاش يشدك بسرعة أكثر؟',
    },
    options: [
      { id: 'q20a', label: { en: 'How to make something easier for people to understand.', ar: 'كيف نجعل شيئًا أسهل للفهم على الناس.' }, weights: { ui_ux: 3 } },
      { id: 'q20b', label: { en: 'How to divide a big goal into practical steps.', ar: 'كيف نقسم هدفًا كبيرًا إلى خطوات عملية.' }, weights: { software_engineer: 3 } },
      { id: 'q20c', label: { en: 'How to choose based on patterns, not guesses.', ar: 'كيف نختار بناءً على الأنماط لا التخمين.' }, weights: { ai_data: 3 } },
      { id: 'q20d', label: { en: 'How to prevent small mistakes from becoming serious.', ar: 'كيف نمنع الأخطاء الصغيرة من أن تصبح خطيرة.' }, weights: { cybersecurity: 3 } },
    ],
  },
  {
    id: 'q21',
    category: 'work_preference',
    prompt: {
      en: 'If you could own one responsibility in a group effort, what would you choose?',
      ar: 'لو أخذت مسؤولية واحدة داخل جهد جماعي، ماذا تختار؟',
    },
    options: [
      { id: 'q21a', label: { en: 'The part people see and react to directly.', ar: 'الجزء الذي يراه الناس ويتفاعلون معه مباشرة.' }, weights: { frontend: 3 } },
      { id: 'q21b', label: { en: 'The rules that keep the work accurate and orderly.', ar: 'القواعد التي تجعل العمل دقيقًا ومنظمًا.' }, weights: { backend: 3 } },
      { id: 'q21c', label: { en: 'The comparison that shows what should improve next.', ar: 'المقارنة التي توضح ما يجب تحسينه بعد ذلك.' }, weights: { ai_data: 3 } },
      { id: 'q21d', label: { en: 'The setup that keeps everyone moving when things get busy.', ar: 'الإعداد الذي يحافظ على حركة الفريق وقت الضغط.' }, weights: { devops_cloud: 3 } },
    ],
  },
  {
    id: 'q22',
    category: 'work_preference',
    prompt: {
      en: 'What bothers you most in group work?',
      ar: 'ما أكثر شيء يزعجك في العمل الجماعي؟',
    },
    options: [
      { id: 'q22a', label: { en: 'People do not understand what to do next.', ar: 'الناس لا يفهمون ما الخطوة التالية.' }, weights: { ui_ux: 3 } },
      { id: 'q22b', label: { en: 'The goal is big, but nobody turns it into clear tasks.', ar: 'الهدف كبير لكن لا أحد يحوله إلى مهام واضحة.' }, weights: { software_engineer: 3 } },
      { id: 'q22c', label: { en: 'Decisions are made by guessing instead of checking.', ar: 'القرارات تُتخذ بالتخمين بدل الفحص.' }, weights: { ai_data: 3 } },
      { id: 'q22d', label: { en: 'People ignore weak points until they become problems.', ar: 'الناس يتجاهلون نقاط الضعف حتى تصبح مشكلة.' }, weights: { cybersecurity: 3 } },
    ],
  },
  {
    id: 'q23',
    category: 'work_preference',
    prompt: {
      en: 'Which moment gives you the biggest sense of achievement?',
      ar: 'أي لحظة تعطيك أكبر إحساس بالإنجاز؟',
    },
    options: [
      { id: 'q23a', label: { en: 'When people use something smoothly without asking for help.', ar: 'عندما يستخدم الناس شيئًا بسلاسة بدون طلب مساعدة.' }, weights: { ui_ux: 3 } },
      { id: 'q23b', label: { en: 'When all pieces finally work together as one path.', ar: 'عندما تعمل كل الأجزاء معًا كمسار واحد.' }, weights: { software_engineer: 3 } },
      { id: 'q23c', label: { en: 'When the results reveal something nobody noticed.', ar: 'عندما تكشف النتائج شيئًا لم ينتبه له أحد.' }, weights: { ai_data: 3 } },
      { id: 'q23d', label: { en: 'When things keep working calmly during pressure.', ar: 'عندما تبقى الأمور تعمل بهدوء تحت الضغط.' }, weights: { devops_cloud: 3 } },
    ],
  },
  {
    id: 'q24',
    category: 'work_preference',
    prompt: {
      en: 'When people want different things, what do you usually push for?',
      ar: 'عندما يريد الناس أشياء مختلفة، ماذا تدافع عنه عادةً؟',
    },
    options: [
      { id: 'q24a', label: { en: 'The clearest path for the people involved.', ar: 'المسار الأوضح للأشخاص المعنيين.' }, weights: { ui_ux: 3 } },
      { id: 'q24b', label: { en: 'The practical plan that can actually be finished now.', ar: 'الخطة العملية التي يمكن إنجازها الآن فعلًا.' }, weights: { software_engineer: 3 } },
      { id: 'q24c', label: { en: 'The choice supported by what we can observe.', ar: 'الخيار المدعوم بما يمكننا ملاحظته.' }, weights: { ai_data: 3 } },
      { id: 'q24d', label: { en: 'The option that reduces future risk.', ar: 'الخيار الذي يقلل المخاطر لاحقًا.' }, weights: { cybersecurity: 3 } },
    ],
  },
  {
    id: 'q25',
    category: 'learning_style',
    prompt: {
      en: 'Your team is making a small booth quiz. What would you improve first?',
      ar: 'فريقك يصمم اختبارًا صغيرًا للجناح. ما أول شيء تحسنه؟',
    },
    options: [
      { id: 'q25a', label: { en: 'Make the questions easier to understand quickly.', ar: 'أجعل الأسئلة أسهل للفهم بسرعة.' }, weights: { ui_ux: 3 } },
      { id: 'q25b', label: { en: 'Make the full flow work from start to result.', ar: 'أجعل المسار كاملًا يعمل من البداية حتى النتيجة.' }, weights: { software_engineer: 3 } },
      { id: 'q25c', label: { en: 'Check which answers create useful result patterns.', ar: 'أفحص أي الإجابات تصنع أنماطًا مفيدة للنتائج.' }, weights: { ai_data: 3 } },
      { id: 'q25d', label: { en: 'Prepare it so many visitors can try it without trouble.', ar: 'أجهزه حتى يستطيع زوار كثيرون تجربته بدون مشاكل.' }, weights: { devops_cloud: 3 } },
    ],
  },
  {
    id: 'q26',
    category: 'learning_style',
    prompt: {
      en: 'A club asks for a simple sign-up tool. What do you focus on first?',
      ar: 'نادي طلابي طلب أداة تسجيل بسيطة. على ماذا تركز أولًا؟',
    },
    options: [
      { id: 'q26a', label: { en: 'Make the form easy and pleasant to fill.', ar: 'أجعل النموذج سهلًا ومريحًا للتعبئة.' }, weights: { frontend: 2, ui_ux: 1 } },
      { id: 'q26b', label: { en: 'Make sure entries are saved in the right order.', ar: 'أتأكد أن المدخلات تُحفظ بالترتيب الصحيح.' }, weights: { backend: 3 } },
      { id: 'q26c', label: { en: 'Connect sign-up, confirmation, and result into one flow.', ar: 'أربط التسجيل والتأكيد والنتيجة في مسار واحد.' }, weights: { software_engineer: 3 } },
      { id: 'q26d', label: { en: 'Check that student information is not shown where it should not be.', ar: 'أتأكد أن معلومات الطلاب لا تظهر في مكان غير مناسب.' }, weights: { cybersecurity: 3 } },
    ],
  },
  {
    id: 'q27',
    category: 'learning_style',
    prompt: {
      en: 'A scoreboard at the booth is confusing visitors. What do you fix first?',
      ar: 'لوحة النتائج في الجناح تربك الزوار. ما أول شيء تصلحه؟',
    },
    options: [
      { id: 'q27a', label: { en: 'Make the ranking and labels clearer.', ar: 'أجعل الترتيب والعناوين أوضح.' }, weights: { ui_ux: 3 } },
      { id: 'q27b', label: { en: 'Make the visual changes easier to notice.', ar: 'أجعل التغييرات البصرية أسهل للملاحظة.' }, weights: { frontend: 3 } },
      { id: 'q27c', label: { en: 'Check that points are counted correctly.', ar: 'أتأكد أن النقاط تُحسب بشكل صحيح.' }, weights: { backend: 3 } },
      { id: 'q27d', label: { en: 'Look for score patterns that show how visitors play.', ar: 'أبحث عن أنماط في النتائج توضح كيف يلعب الزوار.' }, weights: { ai_data: 3 } },
    ],
  },
  {
    id: 'q28',
    category: 'learning_style',
    prompt: {
      en: 'Before showing a class demo, what do you test first?',
      ar: 'قبل عرض مشروع للمادة، ما أول شيء تختبره؟',
    },
    options: [
      { id: 'q28a', label: { en: 'Can someone understand it without explanation?', ar: 'هل يستطيع شخص فهمه بدون شرح؟' }, weights: { ui_ux: 3 } },
      { id: 'q28b', label: { en: 'Does the main path work from first action to final result?', ar: 'هل يعمل المسار الأساسي من أول فعل حتى النتيجة؟' }, weights: { software_engineer: 3 } },
      { id: 'q28c', label: { en: 'Are the important details handled correctly?', ar: 'هل يتم التعامل مع التفاصيل المهمة بشكل صحيح؟' }, weights: { backend: 3 } },
      { id: 'q28d', label: { en: 'Can it recover if something goes wrong during the demo?', ar: 'هل يستطيع التعافي إذا حدث خطأ أثناء العرض؟' }, weights: { devops_cloud: 3 } },
    ],
  },
  {
    id: 'q29',
    category: 'learning_style',
    prompt: {
      en: 'A small student tool behaves strangely during testing. What do you do first?',
      ar: 'أداة طلابية صغيرة تتصرف بشكل غريب أثناء التجربة. ماذا تفعل أولًا؟',
    },
    options: [
      { id: 'q29a', label: { en: 'Replay what the student did and watch the confusing moment.', ar: 'أعيد ما فعله الطالب وأراقب لحظة الارتباك.' }, weights: { ui_ux: 2, frontend: 1 } },
      { id: 'q29b', label: { en: 'Trace the steps behind the result until the issue appears.', ar: 'أتتبع الخطوات خلف النتيجة حتى يظهر الخلل.' }, weights: { backend: 3 } },
      { id: 'q29c', label: { en: 'Split the issue into smaller tests.', ar: 'أقسم المشكلة إلى اختبارات أصغر.' }, weights: { software_engineer: 3 } },
      { id: 'q29d', label: { en: 'Check whether the strange behavior could be misused.', ar: 'أفحص هل يمكن إساءة استخدام هذا السلوك الغريب.' }, weights: { cybersecurity: 3 } },
    ],
  },
  {
    id: 'q30',
    category: 'learning_style',
    prompt: {
      en: 'When learning by building, what helps you remember most?',
      ar: 'عندما تتعلم بالبناء، ما أكثر شيء يساعدك على التذكر؟',
    },
    options: [
      { id: 'q30a', label: { en: 'Seeing people interact with what I made.', ar: 'رؤية الناس يتفاعلون مع ما صنعته.' }, weights: { frontend: 3 } },
      { id: 'q30b', label: { en: 'Making a full small version that actually works.', ar: 'بناء نسخة صغيرة كاملة تعمل فعلًا.' }, weights: { software_engineer: 3 } },
      { id: 'q30c', label: { en: 'Comparing results before and after changes.', ar: 'مقارنة النتائج قبل التعديل وبعده.' }, weights: { ai_data: 3 } },
      { id: 'q30d', label: { en: 'Setting it up so repeating the work becomes easier.', ar: 'تجهيزه بحيث يصبح تكرار العمل أسهل.' }, weights: { devops_cloud: 3 } },
    ],
  },
  {
    id: 'q31',
    category: 'real_world_scenario',
    prompt: {
      en: 'Before sharing a booth tool, you notice it shows more details than needed. What do you handle first?',
      ar: 'قبل مشاركة أداة الجناح، لاحظت أنها تعرض تفاصيل أكثر من اللازم. ماذا تفعل أولًا؟',
    },
    options: [
      { id: 'q31a', label: { en: 'Rewrite the message so visitors understand what they see.', ar: 'أعيد صياغة الرسالة حتى يفهم الزائر ما يراه.' }, weights: { ui_ux: 3 } },
      { id: 'q31b', label: { en: 'Limit what appears to only what is needed.', ar: 'أحصر ما يظهر على المعلومات الضرورية فقط.' }, weights: { backend: 2, cybersecurity: 1 } },
      { id: 'q31c', label: { en: 'List which cases are affected before changing anything.', ar: 'أحدد الحالات المتأثرة قبل تغيير أي شيء.' }, weights: { ai_data: 3 } },
      { id: 'q31d', label: { en: 'Coordinate the message, rules, and final result together.', ar: 'أنسق الرسالة والقواعد والنتيجة النهائية معًا.' }, weights: { software_engineer: 3 } },
    ],
  },
  {
    id: 'q32',
    category: 'real_world_scenario',
    prompt: {
      en: 'Your booth activity fails on some phones before opening. What do you focus on?',
      ar: 'نشاط الجناح لا يعمل على بعض الهواتف قبل الافتتاح. على ماذا تركز؟',
    },
    options: [
      { id: 'q32a', label: { en: 'Create a simpler display that still lets visitors finish.', ar: 'أجهز عرضًا أبسط يسمح للزوار بالإكمال.' }, weights: { frontend: 2, ui_ux: 1 } },
      { id: 'q32b', label: { en: 'Find which step gives the wrong result.', ar: 'أحدد أي خطوة تعطي النتيجة الخاطئة.' }, weights: { backend: 2, software_engineer: 1 } },
      { id: 'q32c', label: { en: 'Prepare a backup version for the booth.', ar: 'أجهز نسخة احتياطية للجناح.' }, weights: { devops_cloud: 3 } },
      { id: 'q32d', label: { en: 'Check that the quick fix does not create a new risk.', ar: 'أتأكد أن الحل السريع لا يخلق خطرًا جديدًا.' }, weights: { cybersecurity: 3 } },
    ],
  },
  {
    id: 'q33',
    category: 'real_world_scenario',
    prompt: {
      en: 'A student club asks for a simple event helper. What would you suggest first?',
      ar: 'نادي طلابي يطلب أداة بسيطة لتنظيم فعالية. ماذا تقترح أولًا؟',
    },
    options: [
      { id: 'q33a', label: { en: 'A clear place where members can find the next event quickly.', ar: 'مكان واضح يجد فيه الأعضاء الفعالية القادمة بسرعة.' }, weights: { ui_ux: 2, frontend: 1 } },
      { id: 'q33b', label: { en: 'A simple structure for event details so nothing gets mixed.', ar: 'هيكل بسيط لتفاصيل الفعالية حتى لا تختلط الأمور.' }, weights: { backend: 3 } },
      { id: 'q33c', label: { en: 'A way to learn which events students prefer.', ar: 'طريقة لمعرفة أي الفعاليات يفضلها الطلاب.' }, weights: { ai_data: 3 } },
      { id: 'q33d', label: { en: 'A small complete version the club can use this week.', ar: 'نسخة صغيرة مكتملة يستطيع النادي استخدامها هذا الأسبوع.' }, weights: { software_engineer: 3 } },
    ],
  },
  {
    id: 'q34',
    category: 'real_world_scenario',
    prompt: {
      en: 'When presenting a small project, what do you prefer to show first?',
      ar: 'عند عرض مشروع صغير، ماذا تفضل أن تعرض أولًا؟',
    },
    options: [
      { id: 'q34a', label: { en: 'How people can use it with fewer steps.', ar: 'كيف يستطيع الناس استخدامه بخطوات أقل.' }, weights: { ui_ux: 2, frontend: 1 } },
      { id: 'q34b', label: { en: 'How the important rules now give correct results.', ar: 'كيف أصبحت القواعد المهمة تعطي نتائج صحيحة.' }, weights: { backend: 3 } },
      { id: 'q34c', label: { en: 'What changed in the results after the improvement.', ar: 'ما الذي تغير في النتائج بعد التحسين.' }, weights: { ai_data: 3 } },
      { id: 'q34d', label: { en: 'How the idea became one solid working feature.', ar: 'كيف تحولت الفكرة إلى ميزة واحدة تعمل بشكل قوي.' }, weights: { software_engineer: 3 } },
    ],
  },
  {
    id: 'q35',
    category: 'real_world_scenario',
    prompt: {
      en: 'Many visitors try your booth activity at once. What do you improve first?',
      ar: 'عدد كبير من الزوار يجربون نشاط الجناح معًا. ما أول شيء تحسنه؟',
    },
    options: [
      { id: 'q35a', label: { en: 'Make the visible parts load and respond faster.', ar: 'أجعل الأجزاء الظاهرة تظهر وتستجيب أسرع.' }, weights: { frontend: 3 } },
      { id: 'q35b', label: { en: 'Organize the incoming answers so none get lost.', ar: 'أنظم الإجابات القادمة حتى لا تضيع أي إجابة.' }, weights: { backend: 3 } },
      { id: 'q35c', label: { en: 'Keep the activity available while the crowd is high.', ar: 'أحافظ على توفر النشاط أثناء الزحام.' }, weights: { devops_cloud: 3 } },
      { id: 'q35d', label: { en: 'Watch for unusual behavior that could affect the activity.', ar: 'أراقب أي سلوك غير طبيعي قد يؤثر على النشاط.' }, weights: { cybersecurity: 2, ai_data: 1 } },
    ],
  },
  {
    id: 'q36',
    category: 'real_world_scenario',
    prompt: {
      en: 'Before sharing your team project campus-wide, which final check matters most to you?',
      ar: 'قبل مشاركة مشروع فريقك على مستوى الجامعة، أي فحص أخير يهمك أكثر؟',
    },
    options: [
      { id: 'q36a', label: { en: 'A new student can use it without extra explanation.', ar: 'طالب جديد يستطيع استخدامه بدون شرح إضافي.' }, weights: { ui_ux: 3 } },
      { id: 'q36b', label: { en: 'The main path works from input to final result.', ar: 'المسار الأساسي يعمل من الإدخال حتى النتيجة النهائية.' }, weights: { software_engineer: 3 } },
      { id: 'q36c', label: { en: 'It stays steady when many students use it together.', ar: 'يبقى ثابتًا عندما يستخدمه عدد كبير من الطلاب معًا.' }, weights: { devops_cloud: 3 } },
      { id: 'q36d', label: { en: 'Important information appears only where it should.', ar: 'المعلومات المهمة تظهر فقط في مكانها المناسب.' }, weights: { cybersecurity: 3 } },
    ],
  },
];
