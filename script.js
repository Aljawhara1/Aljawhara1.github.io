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

const opt1 = `على الاثاث. المحافظة على سلامة الأثاث وتأمينه اضراراً يمكن أن تحدث لهً. نقوم في البداية بالقيام بعملية حصر وفحص لجميع قطع الأثاث شاملة جميع محتويات المنزل ثم تبدأ عملية الفك من قبل محترفين ومتخصصون “نجارين” على أعلى مستوى من التخصصية والإحترافية في أعمال الفك حتى لا يحدث أي خطأ ولو بسيط يؤدي إلى تلف بعض أثاث المنزل. بعد عملية الفك نبدأ في تجميع قطع الأثاث داخل صناديق تم إعداها خصيصاً لتلك العمليات مع التدوين على الصندوق بما يحتويه من قطع وماهيتها وعددها حتى يسهل بعد ذلك في عملية التركيب ولا تكون عملية التركيب فوضوية للغاية. يتم لف ووضع أوراقاً خاصة بين القطع التي يسهل كسرها ولضمان سلامتها, بالإضافة وضع شرائط لاصقة عالية الجودة فوق الصناديق حتى تغلق بإحكام وبقوة ولا يمكن فتحها بسهولة إلا عن طريقنا, والهدف الأساسي هو الحفاظ على جميع القطع المتواجدة داخل الصندوق. يتم وضع البطانيات والسجاد والمناشف بين قطع الأثاث ومحتويات المطبخ والقطع الزجاجية حتى لا تكون عرضاً للكسر, وهذا يزيد من سلامة قطع أثاث بيتك. بالإضافة إلى أهم إجراء نقوم بهِ وهو ما يجعلنا افضل شركة نقل عفش بجدة, هل تعرف ماهو الإجراء ؟! لإننا نتطور ونتعلم من أخطاء الماضي والجميع, فعندما تقوم بفك جميع قطع أثاث منزلك مرة واحدة فهذا يتطلب جهداً كبيرة للغاية ويؤدي ذلك الأمر لضياع وفقدان لمحتوياتك وأغراض منزلك, لذلك نقوم بعملية الفك بمنتهى الإحترافية وفك غرفة ثم نقلها ويكون متخصصون “نجارين” في المكان الأخر يتنظروا إحضارهاً ويبدأوا في تركيبها, ثم تأتي لهم الغرفة الثانية, لإننا نمتلك عدد كبيراً من الفنيون والمتخصصون والشاحنات لنقل الأثاث والعفش بجدة مما يسهل عملية النقل ولا يجعلها معقدة, وأثناء إنزال الغرفة الأولى يبدأ النجارين في فك الغرفة الثانية وهكذا, لذلك هذا الإجراء بعد تجارب كبيرة في عمليات النقل والعفش أثبات جدارتهُ على الإطلاق. لإنه بسيط ولا يعقد الأمور ولا يسبب أي لغط أو ضرر بالأثاث. ولكن لا يستطيع الجميع تنفيذ هذا الإجراء لإنه يحتاج إلى عدد كبير من العمال والمعدات والشاحنات وها نحن نمتلك هذه المميزات لذلك شركتنا هي الأفضل في نقل العفش والأثاث بجدة.`
const opt2 = `طلب عامل أو أكثر من أجل
مساعدتك ومعاونتك في عملية التحميل والتفريغ فنحن نوفر لك ايضاً هذه الخدمات بمنتهى السهولة, لإننا شركة
نقل عفش بجدة متعاونة ومتجاوبة ومرنة في تعاملاتنا لا نشترط خدمة معينة, نقدم جميع الخدمات, ايضاً نقدم
لك خدمة الفك فقط إذا كنت تُريد وترغب في فك اثاث منزلك في الوقت وتريد الإنتقال في موعداً قادم.
بالإضافة نقدم لك خدمات التغليف Packaging and labeling بمنتهى الإحترافية والإنضباط ونحافظ على أثاث
وقطع منزلك من التلف والضرر, نستخدم مجموعة من الأدوات والمعدات العالمية ذات الجودة القياسية المتعارف
عليها في عمليات التخزين والتغليف, ولا تستطيع القوارض العبور من خلالها نهائياً لذلك تعيش مطمئن على
اثاث منزلك من الهلاك والضياع. نقدم لك هذه الخدمة فقط إذا قومت بشراء أثاث منزل جديد وترغب في المحافظة
على اثاث منزلك القديم. بالطبع أنت تتساءل الآن لماذا هذا الإهتمام المبالغ والشديد في عملية التغليف
والتي ربما سوف تستغرق المزيد من الوقت وخاصة إن الاثاث سوف يتم نقله في مكان أخر ويتم تركيبهً من
جديد؟!

نجيب لك أخي الكريم؛ في حالة عدم تغليف الأثاث بطريقة جيدة ومحكمة للغاية ماذا سوف يحدث لقطع الأثاث,
إحدى الأمور التالية, تخطب الأثاث, أو كسر الأثاث , وخدشهِ, أو صول الحشرات والقوارض للأثاث, أو ربما
نتيجة لأشعة الشمس الحرقة والمعروفة في المملكة وبالتالي حدوث حرق, أو تسرب المياه, نتيجة لسقوط الأمطار
أو سقوط الأثاث أثناء عمليات التحميل والتفريغ.

لذلك الإهتمام بمرحلة التغليف يشكل أهم أولوياتنا لإننا نقدر المحافظة على الأثاث وبالتالي عميلنا
الكريم سوف تكون مطمئن في حالة الإستعانة بنا لعملية نقل أثاث منزلك وشحنهٌ إلى منطقة أخرى بجدة
`
const opt3 = `يتم ترتيب الأثاث بشكل متناسق ورائع للغاية ويتم تنظيفهُ وتلميعهُ حتى يدخل
البهجة والسعادة ولا تقوم بإستجلاب عمال ليتم تنظيفهُ وتهدر المزيد من الوقت في طلب شركة متخصصة.
`
const opt5 = `بتخزينها كبيرة للغاية مئات الصناديق أو عدد قليل للغاية فنحن نوفر لك هذا
بمنتهى السهولة. عليك فقط الإتصال بأقوى شركة نقل عفش بجدة الآن من أجل الحصول على جميع خدماتنا من فك
وتغليف وتخزين وتركيب من خلال مجموعة من العمال المهرة والمتخصصون سواء كانوا النجارين أو الموظفين أو
السائقين فجميعهم بدون إستثناء تم إختيارهم بعد إجتياز الإختبارات التي تؤكد إنهم يتمتعوا بالخبرة
والكفاءة العالية لإننا نعرف أن قيمة اثاثك بيتك غالية للغاية وإن وقتك ثمين فبالتالي نسعى لتوفير الوقت
والإلتزام بما ترغبهُ.`



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

