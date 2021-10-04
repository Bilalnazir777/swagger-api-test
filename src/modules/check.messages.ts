export const checker = function (message: string, messages: any) {
    messages.map((data: any) => {
        let filtered: any = [];
        for (let i = 0; i < data.message.length; i++) {
            if (data.message[i].message.search(new RegExp(message)) != -1) {
                filtered.push(data.message[i])
                //console.log(filtered, new RegExp(message))
            }
        }
        data.message = filtered;
    })
    return messages.filter((elem: any) => {
        return elem.message.length != 0
    })
}