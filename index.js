
const PREFIX = 'module.exports = '
const PREFIX_LENGTH = PREFIX.length

module.exports = {
    processors: {
        '.json5': {
            preprocess: function(text, filename) {
                console.log("It's me babe")
                console.log(text.slice(0, PREFIX_LENGTH * 2))
                console.log(filename)
                return [{
                    text: text.startsWith(PREFIX) ? text : PREFIX + text,
                    filename: filename,
                }]
            },
            postprocess: function(messages, filename) {
                return messages[0].map(function(message) {
                    if (message.line > 1) {
                        return message
                    }
                    var updatedMessage = Object.assign(message, {})
                    updatedMessage.column = message.column - PREFIX_LENGTH
                    return updatedMessage
                })
            }
        }
    }
}
