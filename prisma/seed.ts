import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
    await Promise.all(
        getUsers().map(user => {
            return db.user.create({ data: user })
        })
    )
    await Promise.all(
        getBlogs().map((blog) => {
            return db.blog.create({ data: blog });
        })
    )
}

seed();

function getUsers() {
    return [
        {
            username: 'himanshu76200',
            password: 'password',
            name: 'Himanshu Bhardwaz'
        }
    ]
}

function getBlogs() {
    return [
        {
            user_id: 1,
            user_name: 'Himanshu Bhardwaz',
            title: 'React Introduction',
            content: "--- title: 'React Introduction' date: 'May 8, 2021' excerpt: 'Crash course to learn the React JavaScript library.We will look at components, hooks and more' cover_image: '/images/posts / img5.jpg' category: 'JavaScript' author: 'Jane Doe' author_image: 'https://randomuser.me/api/portraits/women/11.jpg' ---  <!-- Markdow generator - https://jaspervdj.be/lorem-markdownum/ -->  Lorem markdownum fine incustoditam unda factura versum occuluere Aeneas, iuvat haec praepes [partes epulae](http://cui.com/), in egisse de. Caecisque ter manus. Munere in exhalat, ferre sed [habe quaeque saepe](http://ne.org/fretum) verba caput ferarum _nubila_? Patriam Cyparisse tamen, **saxum** fide postponere pavida ne omnes etiam, atque. Sonuit omina sed sine haerebat illic fit a mora in.  1. Serrae enim Etruscam aquis 2. Et premis et flumine frontem minatur oppressos 3. Inquam rector Icarus possum vim tumulo propiusque 4. Vulnus se Latreus 5. Aptumque bis  ## Turpius Aegides membris colat volentes fallere  Ille fida formosus, et addunt viscera perdidit ad pondere quia tellus consequitur et quoque scinditque in. Ratis laborum instabat quaedam partem Phoebus, manus _partibus poenas_. Sola armos adhuc; chaos agit ora manifesta procul fugitque corpora iugales!      var ethics_font_drive = cycleSystemProgram + deprecatedTransferIp.ide(3) /             rgb + nybbleBaseband;     permalinkCertificateMacintosh(ergonomicsIsdnDns);     boot = bridgeDaemonActive;  ## O contra diu  Descendit _auras cum misi_ contactu tenax lacus, **quaerensque invitum premuntur** patria. Puris ille pictis spiritus placent vestigia et noctis sceleratos laudis egere retroque. Patrem contenta magni margine satis inprudens nymphae invito verba saepe: genus sed numinis pugnat meum iterumque attonitas rursus utve. Constituit praestet liceat opprobria Medusae huius, excutiuntque nam nil, pariter.  Coma **laudes manet** ausus hortaturque matrisque Veneris proximus tu iamque aptius claudit. Tmolus tetigere iussos animumque quid poplite Hippotaden? Quod sibi Spartana sidera, lupum Nereusque quoque ramum, vertuntur Peleus Amuli oscula: tamen. Surgere Epidaurius movit crede soceri Euboicam quoque.  Unde stabant, acuta, percussit denique; hoc illic et herbis minimas parvum? Quid _gemino profectus et_ dici postquam tot; aquarum quod relanguit est si quodcumque. Ossaque protinus, quod somno est, repetit, hoc passu est. Qui devia; respice humum vobis oscula, in Lotis nymphae.  Dolet certamina velle dexteriore mutatus saepe, tellure ubi unguibus, gestu. Illis cuius finem Sirenes adsueta stridore, pictas quo edidit, nec utque et capillos ego rapi Bootes, sculpsit. Protinus sibi denique sibi primum Acheloides ante exspectant gaudeat Calydonius cernit, duxit pariterque dolet epulis? Nostri visae nisi aeripedes stant quem saepibus cannis protectus candens praestet: porrigar **patriam** Alcmene: attonitas."
        },
        {
            user_id: 1,
            user_name: 'Himanshu Bhardwaz',
            title: 'Tailwind vs. Bootstrap',
            content: "--- title: 'Tailwind vs. Bootstrap' date: 'May 5, 2021' excerpt: 'Both Tailwind and Bootstrap are very popular CSS frameworks. In this article, we will compare them' cover_image: '/images/posts/img2.jpg' category: 'CSS' author: 'Jane Doe' author_image: 'https://randomuser.me/api/portraits/women/11.jpg' ---  <!-- Markdow generator - https://jaspervdj.be/lorem-markdownum/ -->  Lorem markdownum fine incustoditam unda factura versum occuluere Aeneas, iuvat haec praepes [partes epulae](http://cui.com/), in egisse de. Caecisque ter manus. Munere in exhalat, ferre sed [habe quaeque saepe](http://ne.org/fretum) verba caput ferarum _nubila_? Patriam Cyparisse tamen, **saxum** fide postponere pavida ne omnes etiam, atque. Sonuit omina sed sine haerebat illic fit a mora in.  1. Serrae enim Etruscam aquis 2. Et premis et flumine frontem minatur oppressos 3. Inquam rector Icarus possum vim tumulo propiusque 4. Vulnus se Latreus 5. Aptumque bis  ## Turpius Aegides membris colat volentes fallere  Ille fida formosus, et addunt viscera perdidit ad pondere quia tellus consequitur et quoque scinditque in. Ratis laborum instabat quaedam partem Phoebus, manus _partibus poenas_. Sola armos adhuc; chaos agit ora manifesta procul fugitque corpora iugales!      var ethics_font_drive = cycleSystemProgram + deprecatedTransferIp.ide(3) /             rgb + nybbleBaseband;     permalinkCertificateMacintosh(ergonomicsIsdnDns);     boot = bridgeDaemonActive;  ## O contra diu  Descendit _auras cum misi_ contactu tenax lacus, **quaerensque invitum premuntur** patria. Puris ille pictis spiritus placent vestigia et noctis sceleratos laudis egere retroque. Patrem contenta magni margine satis inprudens nymphae invito verba saepe: genus sed numinis pugnat meum iterumque attonitas rursus utve. Constituit praestet liceat opprobria Medusae huius, excutiuntque nam nil, pariter.  Coma **laudes manet** ausus hortaturque matrisque Veneris proximus tu iamque aptius claudit. Tmolus tetigere iussos animumque quid poplite Hippotaden? Quod sibi Spartana sidera, lupum Nereusque quoque ramum, vertuntur Peleus Amuli oscula: tamen. Surgere Epidaurius movit crede soceri Euboicam quoque.  Unde stabant, acuta, percussit denique; hoc illic et herbis minimas parvum? Quid _gemino profectus et_ dici postquam tot; aquarum quod relanguit est si quodcumque. Ossaque protinus, quod somno est, repetit, hoc passu est. Qui devia; respice humum vobis oscula, in Lotis nymphae.  Dolet certamina velle dexteriore mutatus saepe, tellure ubi unguibus, gestu. Illis cuius finem Sirenes adsueta stridore, pictas quo edidit, nec utque et capillos ego rapi Bootes, sculpsit. Protinus sibi denique sibi primum Acheloides ante exspectant gaudeat Calydonius cernit, duxit pariterque dolet epulis? Nostri visae nisi aeripedes stant quem saepibus cannis protectus candens praestet: porrigar **patriam** Alcmene: attonitas."
        }
    ]
}