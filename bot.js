const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loaders = document.getElementById("loaders")
const container = document.getElementById("container")

let init = 0

const botSay = (data) => {
    return [
        "Hallo, perkenalkan saya Ferdybot. Kalo kamu siapa?",
        `Haii ${data?.nama}, Berapa usia kamu?`,
        `Ohhh ${data?.usia}, Hobi kamu apa yaa?`,
        `waww sama dong aku juga hobi ${data?.hobi},  btw punya pacar gak?`,
        `ohhh ${data?.pacar}, yaudah kalo gitu. Udahan yaa?`
]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart() {
    init++
    if (jawaban.value.length <1) return alert(`diisi woyy`)
    if (init === 1) {
        botDelay({ nama: jawaban.value})
    } else if (init === 2) {
        botDelay({ usia: jawaban.value})
    } else if (init === 3) {
        botDelay({ hobi: jawaban.value})
    } else if (init === 4) {
        botDelay({ pacar: jawaban.value})
    } else if (init === 5) {
        loaders.style.display = "block"
        container.style.filter ="blur(8px)"
        setTimeout(() => {
            finishing()
            loaders.style.display = "none"
            container.style.filter = "none"
        }, [800])
    } else {
        loaders.style.display = "block"
    container.style.filter ="blur(8px)"
    setTimeout(() => {
        botEnd()
        loaders.style.display = "none"
        container.style.filter = "none"
    }, [800])
    }
}

function botDelay(jawabanUser) {
    loaders.style.display = "block"
    container.style.filter = "blur(8px)"
    console.log({ usersData: usersData})
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
        loaders.style.display = "none"
        container.style.filter = "none"
    }, [800])
    usersData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
        pertanyaan.innerHTML = `Makasi yaa ${usersData[0]}, udah nemenin Ferdybot yang gabutt:)
        lain kali kita ${usersData[2]} bareng yaa wkwk.`
        jawaban.value = "Makasih kembali Ferdybot"

    }

function botEnd() {
    alert (`Terimakasih ${usersData[0]} telah menemani Ferdybot`)
    window.location.reload()
}