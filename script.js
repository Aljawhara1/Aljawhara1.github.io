console.log('Hello we are thunder team ⚡');

$a('img').forEach(img=>{
    img.setAttribute('loading','lazy')
})

import { $, $a , component , scrollTo ,copyToClipboard} from './cocktail.js';
//https://yousofsayed.github.io/cocktail.js/cocktail.js
/******************@Start_header *********************/
const routesContainer = $('#routes'),routes = $a('header .container #routes a');

routes.forEach((e) => {
    e.on('click', (ev) => {
        routes.forEach(e => e.classList.remove('click'))
        e.classList.add('click')
        routesContainer.classList.remove('show')//in mobile deivces
        $('#brg-menue').textContent = 'menu'
    })
})
/******************@End_header *********************/



/******************@Start_menu *********************/

$('.menu').on('click', () => {
    $('#brg-menue').textContent = $('#brg-menue').textContent.trim() == 'menu' ? 'close' : 'menu';
    $('#routes').classList.toggle('show');
})
/******************@End_menu *********************/



/******************@Start_services *********************/   

const opt1 = `على الأثاث . المحافظة على سلامة الأثاث و تأمينه من الأضرار التى يمكن أن تحدث له . نقوم في البداية بالقيام بعملية حصر و فحص لجميع قطع الأثاث شاملة جميع محتويات المنزل ثم تبدأ عملية الفك من قبل محترفين و متخصصون “نجارين” على أعلى مستوى من التخصصية و الإحترافية في أعمال الفك حتى لا يحدث أي خطأ ولو بسيط يؤدي إلى تلف بعض أثاث المنزل . بعد عملية الفك نبدأ في تجميع قطع الأثاث داخل صناديق تم إعداها خصيصاً لتلك العمليات مع التدوين على الصندوق بما يحتويه من قطع و ماهيتها و عددها حتى يسهل بعد ذلك في عملية التركيب ولا تكون عملية التركيب فوضوية للغاية . يتم لف و وضع أوراقاً خاصة بين القطع التي يسهل كسرها و لضمان سلامتها , بالإضافة إلى ذلك وضع شرائط لاصقة عالية الجودة فوق الصناديق حتى تغلق بإحكام و بقوة ولا يمكن فتحها بسهولة إلا عن طريقنا , و الهدف الأساسي هو الحفاظ على جميع القطع المتواجدة داخل الصندوق . يتم وضع البطانيات و السجاد و المناشف بين قطع الأثاث و محتويات المطبخ و القطع الزجاجية حتى لا تكون عرضاً للكسر , و هذا يزيد من سلامة قطع أثاث بيتك . بالإضافة إلى أهم إجراء نقوم به و هو ما يجعلنا أفضل شركة نقل عفش بجدة , هل تعرف ماهو الإجراء ؟! لإننا نتطور و نتعلم من أخطاء الماضي و الجميع , فعندما تقوم بفك جميع قطع أثاث منزلك مرة واحدة فهذا يتطلب جهداً كبيراً للغاية و يؤدى ذلك الأمر لضياع و فقدان لمحتوياتك و أغراض منزلك , لذلك نقوم بعملية الفك بمنتهى الإحترافية و فك غرفة ثم نقلها و يكون متخصصون “نجارين” في المكان الأخر ينتظروا إحضارها و يبدأوا في تركيبها , ثم تأتي لهم الغرفة الثانية , لإننا نمتلك عدد كبير من الفنيون و المتخصصون و الشاحنات لنقل الأثاث بجدة مما يسهل عملية النقل ولا يجعلها معقدة , و أثناء إنزال الغرفة الأولى يبدأ النجارين في فك الغرفة الثانية و هكذا , لذلك هذا الإجراء بعد تجارب كبيرة في عمليات النقل إثبات جدارة على الإطلاق . لإنه بسيط ولا يعقد الأمور ولا يسبب أي غلط أو ضرر بالأثاث . و لكن لا يستطيع الجميع تنفيذ هذا الإجراء لإنه يحتاج إلى عدد كبير من العمال و المعدات و الشاحنات وها نحن نمتلك هذه المميزات لذلك شركتنا هي الأفضل في نقل الأثاث بجدة.`
const opt2 = `طلب عامل أو أكثر من أجل
مساعدتك و معاونتك في عملية التحميل و التفريغ فنحن نوفر لك ايضاً هذه الخدمات بمنتهى السهولة , لإننا شركة
نقل عفش بجدة متعاونة و متجاوبة و مرنة في تعاملاتها لا نشترط خدمة معينة , نقدم جميع الخدمات , أيضاً نقدم
لك خدمة الفك فقط إذا كنت تريد و ترغب في فك أثاث منزلك في الوقت و تريد الإنتقال في موعداً قادم .
بالإضافة نقدم لك خدمات التغليف Packaging and labeling بمنتهى الإحترافية و الإنضباط و نحافظ على الأثاث
و قطع منزلك من التلف و الضرر , نستخدم مجموعة من الأدوات و المعدات العالمية ذات الجودة القياسية المتعارف
عليها في عمليات التخزين و التغليف , ولا تستطيع القوارض العبور من خلالها نهائياً لذلك تعيش مطمئن على
أثاث منزلك من الهلاك و الضياع . نقدم لك هذه الخدمة فقط إذا قمت بشراء أثاث منزل جديد و ترغب في المحافظة
على أثاث منزلك القديم . بالطبع أنت تتساءل الآن لماذا هذا الإهتمام المبالغ و الشديد في عملية التغليف
و التي ربما سوف تستغرق المزيد من الوقت و خاصة إن الأثاث سوف يتم نقله في مكان أخر ويتم تركيبه من
جديد ؟!

نجيب لك أخي الكريم ؛ في حالة عدم تغليف الأثاث بطريقة جيدة و محكمة للغاية ماذا سوف يحدث لقطع الأثاث ,
إحدى الأمور التالية , تخطب للأثاث , أو كسر الأثاث , وخدشه , أو وصول الحشرات و القوارض للأثاث , أو ربما
نتيجة لأشعة الشمس الحارقة و المعروفة في المملكة و بالتالي حدوث حرق , أو تسرب المياه , نتيجة لسقوط الأمطار
أو سقوط الأثاث أثناء عمليات التحميل و التفريغ .

لذلك الإهتمام بمرحلة التغليف يشكل أهم أولوياتنا لإننا نقدر المحافظة على الأثاث و بالتالي عميلنا
الكريم سوف تكون مطمئن في حالة الإستعانة بنا لعملية نقل أثاث منزلك و شحنه إلى منطقة أخرى بجدة
`
const opt3 = `يتم ترتيب الأثاث بشكل متناسق و رائع للغاية و يتم تنظيفه وتلميعه حتى يدخل
البهجة و السعادة ولا تقوم بإستجلاب عمال ليتم تنظيفه وتهدر المزيد من الوقت في طلب شركة متخصصة .
`
const opt5 = `بتخزينها كبيرة للغاية مئات الصناديق أو عدد قليل للغاية فنحن نوفر لك هذا
بمنتهى السهولة . عليك فقط الإتصال بأقوى شركة نقل عفش بجدة الآن من أجل الحصول على جميع خدماتنا من فك
و تغليف و تخزين و تركيب من خلال مجموعة من العمال المهرة و المتخصصون سواء كانوا النجارين أو الموظفين أو
السائقين فجميعهم بدون إستثناء تم إختيارهم بعد إجتياز الإختبارات التي تؤكد أنهم يتمتعوا بالخبرة
و الكفاءة العالية لإننا نعرف أن قيمة أثاث بيتك غالية للغاية و إن وقتك ثمين فبالتالي نسعى لتوفير الوقت
و الإلتزام بما ترغبه .`



const servicesSec = $('#services'),
    readMoreBtns = $a('.readMore'),
    boxs = Array.from($a('#services ul .box p')).remove(-2),
    optArr = [opt1, opt2, opt3, opt5],
    shortContent = [boxs[0].textContent, boxs[1].textContent, boxs[2].textContent, boxs[3].textContent]
readMoreBtns.forEach((e, i) => {
    readMoreBtns[i].setAttribute('num', i);
    e.on('click', (ev) => {
        boxs.forEach((e, i) => { e.textContent = shortContent[i]; })

        if (e.textContent == 'اقرأ المزيد') {
            readMoreBtns.forEach(e => { e.classList.remove('click'); e.textContent = 'اقرأ المزيد' });
            e.textContent = 'اقرأ اقل'

            e.classList.add('click')
            boxs[+e.getAttribute('num')].textContent = boxs[+e.getAttribute('num')].textContent.replace('.....', ' ') + optArr[+e.getAttribute('num')]
            scrollTo(boxs[+e.getAttribute('num')])

        } else {
            boxs[+e.getAttribute('num')].textContent = shortContent[+e.getAttribute('num')];
            e.textContent = 'اقرأ المزيد';
        }
    })
})
/******************@End_services *********************/


const copyBtn = $('.call-us-div'), content = '0500406056', successMsg = $('#successMsg');
copyBtn.on('click', () => {
    copyToClipboard(content);
    successMsg.classList.add('show');
    setTimeout(() => { successMsg.classList.remove('show') }, 1000)
})


//start key words section
const keywords = `شركه نقل اثاث بجده
شركة نقل اثاث
شركة نقل اثاث بجدة مع الفك والتركيب والتغليف
شركه نقل عفش بجده مع الفك والتركيب
شركة نقل اثاث من جدة للرياض
شركة نقل عفش جدة مكة
شركة نقل عفش من جدة الى الرياض
شركة نقل عفش من جدة الى المدينة المنورة
شركة نقل عفش من جدة الى الدمام
شركة نقل عفش من جدة للمدينة
شركة نقل عفش من جدة للرياض
شركات نقل عفش من جدة للرياض
شركات نقل العفش من جدة للرياض
شركة نقل عفش
شركه نقل اثاث في جده
شركة نقل اثاث بجدة عمالة فلبينية
شركات نقل اثاث في جدة
شركة نقل الاثاث في جدة
شركات نقل عفش في جده
شركات نقل الاثاث في جده
شركات نقل العفش بجدة عمالة فلبينية
افضل شركة نقل عفش بجدة عمالة فلبينية
شركة نقل عفش داخل جده
شركات نقل الاثاث داخل جدة
نقل عفش بجده
شاحنات نقل عفش بجده
الجوهرة نقل عفش بجده
ارخص نقل عفش بجده
شركات نقل عفش بجده رخيصه
رقم نقل عفش بجده
ارخص شركة نقل عفش بجده
شركة نقل عفش بجده جدة
شركه نقل عفش بجده مع الفك والتركيب
ارقام نقل عفش بجده
دليل شركات نقل عفش بجده
نقل عفش في جده
نقل عفش بجدة عمالة فلبينية
نقل عفش بجده ومكه
نقل عفش بجدة جدة
نقل عفش واثاث بجدة
نقل عفش وتركيب في جده
الجوهرة عفش داخل جده وخارجها
الجوهرة نقل عفش وبضايع بجدة
افضل شركة نقل عفش بجدة عمالة فلبينية
افضل شركة نقل عفش بجدة الجوهرة
الجوهرة نقل عفش بجدة
افضل شركات نقل عفش بجدة
شركة نقل عفش بجدة الجوهرة
شركة نقل عفش جدة الرياض
افضل شركة نقل عفش بجدة شركات
شركة نقل عفش بجدة جدة
نقل عفش السعودية
نقل عفش نقل عفش بجدة
نقل اثاث
نقل عفش جدة الجوهرة
نقل عفش من جدة
نقل عفش من جدة الى المدينة المنورة
نقل عفش من جدة الى اليمن
نقل عفش من جدة الى الاردن
نقل عفش من جده الى ابها
نقل عفش من جده الى الرياض الجوهرة
نقل عفش من جدة للرياض
نقل عفش من جده لليمن
نقل عفش من جدة للمدينة
نقل عفش من جدة لمكة
نقل عفش من جده للطائف
نقل عفش من جده للقصيم
نقل عفش من جده لمصر
نقل عفش من جده للخرطوم
شركة نقل عفش
نقل عفش في جده الجوهرة
نقل العفش في جده
نقل اثاث بجدة عماله فلبينيه
شركات نقل عفش في جده
نقل عفش بجده عماله فلبينيه
شركات نقل العفش بجدة عمالة فلبينية
شركة نقل اثاث بجدة عمالة فلبينية
نقل عفش جدة شركات
الجوهرة نقل عفش شمال جده
شركة نقل عفش بجدة
شركه نقل عفش بجده رخيصه
ارقام شركات نقل عفش بجده
سيارات نقل عفش بجدة
نقل العفش
نقل عفش الرياض جدة
نقل عفش جدة الجوهرة
نقل عفش الجوهرة بجده
نقل عفش داخل جده
نقل اثاث داخل جده
نقل العفش داخل جدة
شركة نقل عفش داخل جده
الجوهرة لنقل عفش داخل جده
الجوهرة لنقل عفش بجده
خدمات نقل عفش بجدة
نقل عفش جدة الجوهرة
نقل عفش جدة الجوهرة
الجوهرة لنقل عفش بجده
نقل عفش بجده جدة
نقل عفش جدة جده
جده نقل عفش بجده
نقل عفش جدة الجوهرة
نقل عفش بالدمام جده
نقل عفش الجوهرة جدة
نقل عفش بالدمام بجده
نقل عفش بجده ابحر الشماليه
نقل عفش جدة ابحر الشمالية
نقل عفش جدة مكة
نقل عفش جده الجوهرة
نقل عفش جدة إلى المدينة
نقل عفش جدة الجوهرة
افضل شركة نقل عفش بجده
افضل شركة نقل اثاث
افضل شركة نقل عفش في جده
ماهي افضل شركة نقل عفش بجدة
افضل نقل عفش جدة
افضل شركة نقل عفش بجدة عمالة فلبينية
افضل شركة نقل عفش بجدة الجوهرة
افضل شركة نقل عفش بجدة الجوهرة الصور
افضل شركة نقل عفش بجدة شركات
اسعار افضل وارخص شركة نقل عفش واثاث بجدة
شركة نقل عفش
افضل شركات نقل عفش في جده
احسن شركة نقل عفش في جدة
شركات نقل العفش
افضل شركات نقل عفش بجدة
افضل شركات نقل عفش جدة
افضل شركات نقل اثاث بجدة`.split('\n').map((e)=>{
  return  e = `<li title="${e}"><h1 title ="${e}"><a title="${e}" href="https://aljawhara1.github.io">${e}</a></h1></li>`
}).join('');
const klist= component({contentNode:keywords})
$('#keywords-list').append(klist);
//127 key words

