console.log('Hello we are thunder team ⚡');

import { $, $a } from 'https://yousofsayed.github.io/cocktail.js/cocktail.js';

/******************@Start_header *********************/
const routs = $a('header .container #routes a');

routs.forEach((e) => {
    e.on('click', (ev) => {
        routs.forEach(e => e.classList.remove('click'))
        e.classList.add('click')
    })
})
/******************@End_header *********************/

Array.prototype.remove = function (...num) {
    for (let i = 0; i < num.length; i++) {
        if (num[i] > 0) {
            this[num[i] - 1] = null;
        } else {
            this[this.length + num[i]] = null;
        }
    }
    return this.filter(e => e != null)
}

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
function scrollTo(element) {
    localStorage.setItem('i', 0);
    let i = +localStorage.getItem('i');
    if (element.id) {
        // let a = document.createElement('a');
        location.href = `#${element.id}`
    } else {
        element.id = `scrollTo-function`;
        location.href = `#${element.id}`;
        localStorage.setItem('i', i++);
        element.removeAttribute('id');
    }
}

Element.prototype.animation = function (type, isObserver = true) {
    window.addEventListener('scroll', (ev) => {
        console.log(ev);
    })


    const anime = (opacity = '1', transform = 'translate(0);', transition = '1.9', display = 'none') => `opacity:${opacity}; transform : ${transform}; transition:${transition}s;`,
        reset = anime(1, 'translate(0,0)', 1.9);
    const width = this.offsetWidth;

    if (type == 'f-left') {
        this.style.cssText = anime(0, 'translate(-100%,0)', 1.9);
        setTimeout(() => {

            this.style.cssText = reset
        }, 1800);
        // observer.disconnect()

    } else if (type == 'f-right') {
        this.style.cssText = anime(0, 'translate(100%,0)', 1.9)
        this.style.cssText = reset

    } else if (type == 'show') {
        this.style.cssText = anime(0)
        this.style.cssText = reset
        // observer.disconnect()

    } else if (type == 'm-show') {
        this.style.cssText = anime(1,) + 'width:15px !important;height:15px;border-raduis:50%;position:relative;'
        this.style.cssText = reset + 'width:100% !important;height:100%;border-raduis:unset;position:relative;'
        // observer.disconnect()

    }


}

// servicesSec.animation('m-show')

const sections = Array.from($('body').children).remove(1, -1), sectionsTarge = Array.from(sections).remove(1, -1);

// console.log(sections);
// sections[0].animation('f-left', false);
// sections[1].animation('f-right', false);

// sectionsTarge.forEach((e, i) => {
//     i % 2 == 0 ? e.animation('f-left') : e.animation('f-right');
// })

function copyToClipboard(text) {
    return navigator.clipboard.writeText(text)
}

const copyBtn = $('.call-us-div'), content = '0500406056', successMsg = $('#successMsg');
copyBtn.on('click', () => {
    copyToClipboard(content);
    successMsg.classList.add('show');
    setTimeout(()=>{successMsg.classList.remove('show')},1000)
})

