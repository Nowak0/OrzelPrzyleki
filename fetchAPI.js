const printItems=document.getElementById('printFetch')
const source = 'test.txt'
const disableMessage = document.getElementById('JSnotworking')
async function getData() {
    disableMessage.style.display='none'
    try {
        const response = await fetch(source)
        const data = await response.text()
        if(response.status === 200) {
            printItems.innerHTML=data
        }
        else {
            printItems.innerHTML='Server Error ' + data.error.message
        }
    }
    catch(error) {
        printItems.innerHTML='Fetch Error ' + error.message
    }
}

getData()