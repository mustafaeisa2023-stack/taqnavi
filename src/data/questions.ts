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
      { id: 'q1a', label: { en: 'I make the plan easy to understand so no one feels lost.', ar: 'أجعل الخطة سهلة الفهم حتى لا يشعر أحد بالضياع.' }, weights: { ui_ux: 3 } },
      { id: 'q1b', label: { en: 'I turn the ideas into clear steps from start to finish.', ar: 'أحوّل الأفكار إلى خطوات واضحة من البداية للنهاية.' }, weights: { software_engineer: 3 } },
      { id: 'q1c', label: { en: 'I compare what people prefer and look for the strongest pattern.', ar: 'أقارن تفضيلاتهم وأبحث عن النمط الأقوى.' }, weights: { ai_data: 3 } },
      { id: 'q1d', label: { en: 'I think about what could go wrong and prepare a backup plan.', ar: 'أفكر بما قد يسبب مشكلة وأجهز خطة بديلة.' }, weights: { devops_cloud: 2, cybersecurity: 1 } },
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
      { id: 'q2a', label: { en: 'I fix what people will notice first so the place feels better quickly.', ar: 'أرتب ما يلاحظه الناس أولًا حتى يصبح المكان أفضل بسرعة.' }, weights: { frontend: 3 } },
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
      { id: 'q3c', label: { en: 'I compare possible reasons and choose the most likely one.', ar: 'أقارن الأسباب المحتملة وأختار الأكثر احتمالًا.' }, weights: { ai_data: 3 } },
      { id: 'q3d', label: { en: 'I think about the hidden cause that people may be missing.', ar: 'أفكر بالسبب الخفي الذي قد لا ينتبه له الناس.' }, weights: { backend: 2, cybersecurity: 1 } },
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
      { id: 'q4a', label: { en: 'I rewrite the difficult parts in a simpler way.', ar: 'أعيد شرح الأجزاء الصعبة بطريقة أبسط.' }, weights: { ui_ux: 3 } },
      { id: 'q4b', label: { en: 'I make a clear schedule and move through it step by step.', ar: 'أبني جدولًا واضحًا وأمشي عليه خطوة خطوة.' }, weights: { software_engineer: 3 } },
      { id: 'q4c', label: { en: 'I solve quick questions and focus on the mistakes I repeat.', ar: 'أحل أسئلة سريعة وأركز على الأخطاء التي أكررها.' }, weights: { ai_data: 3 } },
      { id: 'q4d', label: { en: 'I create a routine that keeps me steady until exam day.', ar: 'أجهز روتينًا يساعدني أن أبقى ثابتًا حتى يوم الامتحان.' }, weights: { devops_cloud: 3 } },
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
      { id: 'q5b', label: { en: 'I split the line into smaller groups to keep things moving.', ar: 'أقسم الطابور إلى مجموعات أصغر حتى تستمر الحركة.' }, weights: { software_engineer: 2, devops_cloud: 1 } },
      { id: 'q5c', label: { en: 'I watch where the delay repeats and start from that point.', ar: 'أراقب أين يتكرر التأخير وأبدأ من تلك النقطة.' }, weights: { ai_data: 3 } },
      { id: 'q5d', label: { en: 'I set fair boundaries so nobody skips or causes trouble.', ar: 'أضع حدودًا عادلة حتى لا يتجاوز أحد أو يسبب مشكلة.' }, weights: { cybersecurity: 3 } },
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
      { id: 'q6a', label: { en: 'Making the instructions easier for everyone to understand.', ar: 'جعل التعليمات أسهل حتى يفهمها الجميع.' }, weights: { ui_ux: 3 } },
      { id: 'q6b', label: { en: 'Turning the unclear idea into a small complete plan.', ar: 'تحويل الفكرة الغامضة إلى خطة صغيرة مكتملة.' }, weights: { software_engineer: 3 } },
      { id: 'q6c', label: { en: 'Organizing the details so nothing conflicts later.', ar: 'ترتيب التفاصيل حتى لا تتعارض لاحقًا.' }, weights: { backend: 3 } },
      { id: 'q6d', label: { en: 'Preparing another path if the first plan fails.', ar: 'تجهيز مسار بديل إذا فشلت الخطة الأولى.' }, weights: { devops_cloud: 3 } },
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
      { id: 'q7c', label: { en: 'Can we try it quickly before trusting it?', ar: 'هل نستطيع تجربته بسرعة قبل اعتماده؟' }, weights: { ai_data: 3 } },
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
      { id: 'q9b', label: { en: 'I turn them into a path from first idea to final answer.', ar: 'أحولها إلى مسار من الفكرة الأولى حتى الجواب النهائي.' }, weights: { software_engineer: 3 } },
      { id: 'q9c', label: { en: 'I group related details so each thing belongs somewhere.', ar: 'أجمع التفاصيل المتشابهة حتى يكون لكل شيء مكان.' }, weights: { backend: 3 } },
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
      { id: 'q15a', label: { en: 'I connect each piece to the person who needs it.', ar: 'أربط كل جزء بالشخص الذي يحتاجه.' }, weights: { ui_ux: 2, software_engineer: 1 } },
      { id: 'q15b', label: { en: 'I build a clean path so the team knows what comes next.', ar: 'أبني مسارًا واضحًا حتى يعرف الفريق ما الخطوة التالية.' }, weights: { software_engineer: 3 } },
      { id: 'q15c', label: { en: 'I create a clear structure for the important details.', ar: 'أبني هيكلًا واضحًا للتفاصيل المهمة.' }, weights: { backend: 3 } },
      { id: 'q15d', label: { en: 'I look for repeated mistakes before changing anything.', ar: 'أبحث عن الأخطاء المتكررة قبل أن أغير أي شيء.' }, weights: { ai_data: 3 } },
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
      { id: 'q18b', label: { en: 'Create a clear flow so the routine can grow without falling apart.', ar: 'أبني مسارًا واضحًا حتى يكبر الروتين بدون أن ينهار.' }, weights: { software_engineer: 3 } },
      { id: 'q18c', label: { en: 'Organize the order so requests do not get mixed.', ar: 'أنظم الترتيب حتى لا تختلط الطلبات.' }, weights: { backend: 3 } },
      { id: 'q18d', label: { en: 'Prepare the routine to handle pressure without stopping.', ar: 'أجهز الروتين ليتحمل الضغط بدون توقف.' }, weights: { devops_cloud: 3 } },
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
      { id: 'q21b', label: { en: 'The path that connects everyone’s work into one result.', ar: 'المسار الذي يربط عمل الجميع بنتيجة واحدة.' }, weights: { software_engineer: 3 } },
      { id: 'q21c', label: { en: 'The rules that keep the work accurate and orderly.', ar: 'القواعد التي تجعل العمل دقيقًا ومنظمًا.' }, weights: { backend: 3 } },
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
      en: 'When you learn something new, what helps it stick in your mind?',
      ar: 'عندما تتعلم شيئًا جديدًا، ما أكثر شيء يثبت المعلومة في ذهنك؟',
    },
    options: [
      { id: 'q25a', label: { en: 'Seeing it explained in a simple clear example.', ar: 'رؤيته مشروحًا بمثال بسيط وواضح.' }, weights: { ui_ux: 3 } },
      { id: 'q25b', label: { en: 'Using it inside a complete small practice.', ar: 'استخدامه داخل تدريب صغير مكتمل.' }, weights: { software_engineer: 3 } },
      { id: 'q25c', label: { en: 'Comparing before and after to see what changed.', ar: 'مقارنة قبل وبعد لمعرفة ما الذي تغير.' }, weights: { ai_data: 3 } },
      { id: 'q25d', label: { en: 'Repeating it through a routine until it becomes easy.', ar: 'تكراره من خلال روتين حتى يصبح سهلًا.' }, weights: { devops_cloud: 3 } },
    ],
  },
  {
    id: 'q26',
    category: 'learning_style',
    prompt: {
      en: 'You want to build a new habit. What makes you more likely to continue?',
      ar: 'تريد بناء عادة جديدة. ما الذي يجعلك أكثر قدرة على الاستمرار؟',
    },
    options: [
      { id: 'q26a', label: { en: 'A simple start that does not feel heavy.', ar: 'بداية بسيطة لا تبدو ثقيلة.' }, weights: { ui_ux: 3 } },
      { id: 'q26b', label: { en: 'A full path that tells me exactly what to do next.', ar: 'مسار كامل يخبرني بالضبط ماذا أفعل بعدها.' }, weights: { software_engineer: 3 } },
      { id: 'q26c', label: { en: 'Clear signs that I am improving over time.', ar: 'علامات واضحة أنني أتحسن مع الوقت.' }, weights: { ai_data: 3 } },
      { id: 'q26d', label: { en: 'A backup plan for days when I am tired or busy.', ar: 'خطة بديلة للأيام التي أكون فيها متعبًا أو مشغولًا.' }, weights: { devops_cloud: 3 } },
    ],
  },
  {
    id: 'q27',
    category: 'learning_style',
    prompt: {
      en: 'When you receive feedback, what do you usually do first?',
      ar: 'عندما تصلك ملاحظة أو نقد، ماذا تفعل عادةً أولًا؟',
    },
    options: [
      { id: 'q27a', label: { en: 'I ask what was unclear so I can make it easier next time.', ar: 'أسأل ما الذي لم يكن واضحًا حتى أجعله أسهل في المرة القادمة.' }, weights: { ui_ux: 3 } },
      { id: 'q27b', label: { en: 'I connect the feedback to the full work path.', ar: 'أربط الملاحظة بمسار العمل كاملًا.' }, weights: { software_engineer: 3 } },
      { id: 'q27c', label: { en: 'I look for repeated comments before deciding what to change.', ar: 'أبحث عن الملاحظات المتكررة قبل أن أقرر ماذا أغير.' }, weights: { ai_data: 3 } },
      { id: 'q27d', label: { en: 'I check whether the feedback reveals a weak point.', ar: 'أفحص هل تكشف الملاحظة نقطة ضعف.' }, weights: { cybersecurity: 2, backend: 1 } },
    ],
  },
  {
    id: 'q28',
    category: 'learning_style',
    prompt: {
      en: 'You have one free evening for self-improvement. What would you choose?',
      ar: 'لديك مساء واحد لتطوير نفسك. ماذا تختار؟',
    },
    options: [
      { id: 'q28a', label: { en: 'Make something look cleaner and easier to use.', ar: 'أجعل شيئًا ما أوضح وأسهل للاستخدام.' }, weights: { frontend: 2, ui_ux: 1 } },
      { id: 'q28b', label: { en: 'Finish one small thing from beginning to end.', ar: 'أنهي شيئًا صغيرًا من البداية للنهاية.' }, weights: { software_engineer: 3 } },
      { id: 'q28c', label: { en: 'Review my progress and find what repeats.', ar: 'أراجع تقدمي وأبحث عما يتكرر.' }, weights: { ai_data: 3 } },
      { id: 'q28d', label: { en: 'Organize my routine so tomorrow is easier.', ar: 'أنظم روتيني حتى يكون الغد أسهل.' }, weights: { devops_cloud: 3 } },
    ],
  },
  {
    id: 'q29',
    category: 'learning_style',
    prompt: {
      en: 'When you make a mistake, what helps you improve fastest?',
      ar: 'عندما تخطئ، ما الذي يساعدك على التحسن أسرع؟',
    },
    options: [
      { id: 'q29a', label: { en: 'Understanding how the mistake looked to other people.', ar: 'فهم كيف بدا الخطأ للآخرين.' }, weights: { ui_ux: 2, frontend: 1 } },
      { id: 'q29b', label: { en: 'Tracing the steps that led to it.', ar: 'تتبع الخطوات التي أدت إليه.' }, weights: { software_engineer: 3 } },
      { id: 'q29c', label: { en: 'Finding whether I repeat the same kind of mistake.', ar: 'معرفة هل أكرر نفس نوع الخطأ.' }, weights: { ai_data: 3 } },
      { id: 'q29d', label: { en: 'Putting a boundary so it does not happen again easily.', ar: 'وضع حد يمنع تكراره بسهولة.' }, weights: { cybersecurity: 2, backend: 1 } },
    ],
  },
  {
    id: 'q30',
    category: 'learning_style',
    prompt: {
      en: 'When practicing a skill, what do you enjoy most?',
      ar: 'عندما تتدرب على مهارة، ما أكثر شيء تستمتع به؟',
    },
    options: [
      { id: 'q30a', label: { en: 'Seeing visible improvement quickly.', ar: 'رؤية تحسن واضح بسرعة.' }, weights: { frontend: 3 } },
      { id: 'q30b', label: { en: 'Building a complete routine around it.', ar: 'بناء روتين مكتمل حولها.' }, weights: { software_engineer: 3 } },
      { id: 'q30c', label: { en: 'Tracking progress and comparing results.', ar: 'تتبع التقدم ومقارنة النتائج.' }, weights: { ai_data: 3 } },
      { id: 'q30d', label: { en: 'Making the practice repeatable even on busy days.', ar: 'جعل التدريب قابلًا للتكرار حتى في الأيام المزدحمة.' }, weights: { devops_cloud: 3 } },
    ],
  },

  {
    id: 'q31',
    category: 'real_world_scenario',
    prompt: {
      en: 'You are preparing a small activity for classmates, but the instructions are too long. What do you do first?',
      ar: 'تحضر نشاطًا صغيرًا لزملائك، لكن التعليمات طويلة جدًا. ماذا تفعل أولًا؟',
    },
    options: [
      { id: 'q31a', label: { en: 'Rewrite the instructions in shorter clearer words.', ar: 'أعيد كتابة التعليمات بكلمات أقصر وأوضح.' }, weights: { ui_ux: 3 } },
      { id: 'q31b', label: { en: 'Divide the activity into clear stages.', ar: 'أقسم النشاط إلى مراحل واضحة.' }, weights: { software_engineer: 3 } },
      { id: 'q31c', label: { en: 'Check which parts people misunderstand most.', ar: 'أفحص أكثر الأجزاء التي يسيء الناس فهمها.' }, weights: { ai_data: 3 } },
      { id: 'q31d', label: { en: 'Remove anything that might cause unfair behavior.', ar: 'أزيل أي شيء قد يسبب تصرفًا غير عادل.' }, weights: { cybersecurity: 2, ui_ux: 1 } },
    ],
  },
  {
    id: 'q32',
    category: 'real_world_scenario',
    prompt: {
      en: 'A family gathering is about to start, and something important is not ready. What do you focus on?',
      ar: 'تجمع عائلي على وشك أن يبدأ، وشيء مهم غير جاهز. على ماذا تركز؟',
    },
    options: [
      { id: 'q32a', label: { en: 'Make the visible setup look acceptable quickly.', ar: 'أجعل الترتيب الظاهر مقبولًا بسرعة.' }, weights: { frontend: 3 } },
      { id: 'q32b', label: { en: 'Create a simple order so everyone knows their role.', ar: 'أضع ترتيبًا بسيطًا حتى يعرف كل شخص دوره.' }, weights: { software_engineer: 3 } },
      { id: 'q32c', label: { en: 'Prepare a backup option if the first choice fails.', ar: 'أجهز خيارًا بديلًا إذا فشل الخيار الأول.' }, weights: { devops_cloud: 3 } },
      { id: 'q32d', label: { en: 'Check what could cause embarrassment or conflict.', ar: 'أفحص ما قد يسبب إحراجًا أو خلافًا.' }, weights: { cybersecurity: 2, ui_ux: 1 } },
    ],
  },
  {
    id: 'q33',
    category: 'real_world_scenario',
    prompt: {
      en: 'You are helping a friend choose between several options. How do you guide them?',
      ar: 'تساعد صديقًا على الاختيار بين عدة خيارات. كيف توجهه؟',
    },
    options: [
      { id: 'q33a', label: { en: 'I simplify the choices so the decision feels less stressful.', ar: 'أبسط الخيارات حتى يصبح القرار أقل توترًا.' }, weights: { ui_ux: 3 } },
      { id: 'q33b', label: { en: 'I build a small decision path from need to final choice.', ar: 'أبني مسار قرار صغيرًا من الحاجة حتى الاختيار النهائي.' }, weights: { software_engineer: 3 } },
      { id: 'q33c', label: { en: 'I compare the pros and cons using real examples.', ar: 'أقارن الإيجابيات والسلبيات باستخدام أمثلة واقعية.' }, weights: { ai_data: 3 } },
      { id: 'q33d', label: { en: 'I point out the hidden risks in each option.', ar: 'أوضح المخاطر الخفية في كل خيار.' }, weights: { cybersecurity: 3 } },
    ],
  },
  {
    id: 'q34',
    category: 'real_world_scenario',
    prompt: {
      en: 'You need to explain a hard idea to younger students. What do you show first?',
      ar: 'تحتاج أن تشرح فكرة صعبة لطلاب أصغر منك. ماذا تعرض أولًا؟',
    },
    options: [
      { id: 'q34a', label: { en: 'A simple picture or example that makes the idea visible.', ar: 'صورة أو مثال بسيط يجعل الفكرة واضحة.' }, weights: { frontend: 2, ui_ux: 1 } },
      { id: 'q34b', label: { en: 'A clear path from the basic idea to the final answer.', ar: 'مسار واضح من الفكرة الأساسية إلى الجواب النهائي.' }, weights: { software_engineer: 3 } },
      { id: 'q34c', label: { en: 'A comparison that shows why one answer works better.', ar: 'مقارنة توضح لماذا جواب أفضل من آخر.' }, weights: { ai_data: 3 } },
      { id: 'q34d', label: { en: 'A warning about the mistake beginners usually make.', ar: 'تنبيه عن الخطأ الذي يقع فيه المبتدئون عادةً.' }, weights: { cybersecurity: 2, ui_ux: 1 } },
    ],
  },
  {
    id: 'q35',
    category: 'real_world_scenario',
    prompt: {
      en: 'Many people are depending on you during a busy moment. What matters most?',
      ar: 'كثير من الناس يعتمدون عليك في لحظة مزدحمة. ما الأهم بالنسبة لك؟',
    },
    options: [
      { id: 'q35a', label: { en: 'Keeping communication clear and calm.', ar: 'إبقاء التواصل واضحًا وهادئًا.' }, weights: { ui_ux: 3 } },
      { id: 'q35b', label: { en: 'Keeping the full process moving in the right order.', ar: 'إبقاء العملية كاملة تتحرك بالترتيب الصحيح.' }, weights: { software_engineer: 3 } },
      { id: 'q35c', label: { en: 'Keeping the routine steady under pressure.', ar: 'الحفاظ على ثبات الروتين تحت الضغط.' }, weights: { devops_cloud: 3 } },
      { id: 'q35d', label: { en: 'Watching for unusual behavior that could cause trouble.', ar: 'مراقبة أي سلوك غير طبيعي قد يسبب مشكلة.' }, weights: { cybersecurity: 2, ai_data: 1 } },
    ],
  },
  {
    id: 'q36',
    category: 'real_world_scenario',
    prompt: {
      en: 'Before sharing your work with a large group, which final check matters most?',
      ar: 'قبل مشاركة عملك مع مجموعة كبيرة، أي فحص أخير يهمك أكثر؟',
    },
    options: [
      { id: 'q36a', label: { en: 'A new person can understand it without extra explanation.', ar: 'شخص جديد يستطيع فهمه بدون شرح إضافي.' }, weights: { ui_ux: 3 } },
      { id: 'q36b', label: { en: 'The main path works from first step to final result.', ar: 'المسار الأساسي يعمل من أول خطوة حتى النتيجة النهائية.' }, weights: { software_engineer: 3 } },
      { id: 'q36c', label: { en: 'It stays steady even when many people use it together.', ar: 'يبقى ثابتًا حتى عندما يستخدمه عدد كبير من الناس معًا.' }, weights: { devops_cloud: 3 } },
      { id: 'q36d', label: { en: 'Important information appears only where it belongs.', ar: 'المعلومات المهمة تظهر فقط في مكانها المناسب.' }, weights: { cybersecurity: 3 } },
    ],
  },
];
