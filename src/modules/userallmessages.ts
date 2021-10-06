export const userallmessages = function (messagebody: string, userid: string, messagearray: any) {
    messagearray.map((data: any) => {
        let usermessages: any = [];
        for (let i = 0; i < data.messagearray.length; i++) {

            if (data.messagearray[i].userid.toString() == userid) {
                usermessages.push(data.messagearray[i])

            }
        }
        data.messagearray = usermessages;

    })
    console.log(messagearray)
    return messagearray.filter((elem: any) => {
        return elem.messagearray.length != 0
    })
}