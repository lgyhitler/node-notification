'use strict';
module.exports = {
  senders: {
    mailer: require('./lib/senders/mail'),
    sms: require('./lib/senders/sms')
  },

  parse: function(data) {

    var mailer = this.senders.mailer;
    if (!data.from) {
      data.from = data.email;
    }
    var smtpOption = mailer.smtp.parse(data);
    console.log(smtpOption);
    var mailOption = mailer.content.parse(data);
    console.log(mailOption);

    return {
      smtp: smtpOption,
      mail: mailOption
    };
  }

};