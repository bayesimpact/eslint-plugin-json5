
const PREFIX = 'module.exports = '
const PREFIX_LENGTH = PREFIX.length

module.exports = {
    processors: {
        '.json5': {
            preprocess: function(text, filename) {
                return [{
                    text: PREFIX + text,
                    filename: filename + '.js',
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
