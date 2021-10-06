export const checker = function (messagebody: string, messagearray: any) {
    messagearray.map((data: any) => {
        let filtered: any = [];
        for (let i = 0; i < data.messagearray.length; i++) {
            if (data.message[i].messagebody.toLowerCase().search(messagebody.toLowerCase()) != -1) {
                filtered.push(data.message[i])
                //console.log(filtered, new RegExp(message))
            }
        }
        data.messagearray = filtered;
    })
    return messagearray.filter((elem: any) => {
        return elem.messagearray.length != 0
    })
}