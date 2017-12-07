const log4js = require('log4js')

log4js.configure({
  appenders: {cheese: {type: 'file', filename: 'cheese.log'}},
  categories: {default: {appenders: ['cheese'], level: 'error'}}
})

const logger = log4js.getLogger('cheese')
logger.trace('日志记录')
logger.debug('调试模式日志记录')
logger.info('日志状态**输入信息**')
logger.warn('日志状态**警告**')
logger.error('日志状态**报错**')
logger.fatal('日志状态**fatal**')
