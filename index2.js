"use strict";
import nodemailer from "nodemailer";

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: 'iliakhlyzov.sixhands@gmail.com', // generated ethereal user
      pass: 'Hlyzov123', // generated ethereal password
    },
  });


  const html = `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<head>
    <base href="<?php echo JURI::root();?>" target="_blank" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
<style type="text/css">
/* Mobile-specific Styles */
@media only screen and (max-device-width: 480px) {
table[class=w0], td[class=w0] { width: 0 !important; }
table[class=w10], td[class=w10], img[class=w10] { width:10px !important; }
table[class=w15], td[class=w15], img[class=w15] { width:5px !important; }
table[class=w30], td[class=w30], img[class=w30] { width:10px !important; }
table[class=w60], td[class=w60], img[class=w60] { width:10px !important; }
table[class=w125], td[class=w125], img[class=w125] { width:80px !important; }
table[class=w130], td[class=w130], img[class=w130] { width:55px !important; }
table[class=w140], td[class=w140], img[class=w140] { width:90px !important; }
table[class=w160], td[class=w160], img[class=w160] { width:180px !important; }
table[class=w170], td[class=w170], img[class=w170] { width:100px !important; }
table[class=w180], td[class=w180], img[class=w180] { width:80px !important; }
table[class=w195], td[class=w195], img[class=w195] { width:80px !important; }
table[class=w220], td[class=w220], img[class=w220] { width:80px !important; }
table[class=w240], td[class=w240], img[class=w240] { width:180px !important; }
table[class=w255], td[class=w255], img[class=w255] { width:185px !important; }
table[class=w275], td[class=w275], img[class=w275] { width:135px !important; }
table[class=w280], td[class=w280], img[class=w280] { width:135px !important; }
table[class=w300], td[class=w300], img[class=w300] { width:140px !important; }
table[class=w325], td[class=w325], img[class=w325] { width:95px !important; }
table[class=w360], td[class=w360], img[class=w360] { width:140px !important; }
table[class=w410], td[class=w410], img[class=w410] { width:180px !important; }
table[class=w470], td[class=w470], img[class=w470] { width:200px !important; }
table[class=w580], td[class=w580], img[class=w580] { width:280px !important; }
table[class=w640], td[class=w640], img[class=w640] { width:300px !important; }
table[class*=hide], td[class*=hide], img[class*=hide], p[class*=hide], span[class*=hide] { display:none !important; }
table[class=h0], td[class=h0] { height: 0 !important; }
p[class=footer-content-left] { text-align: center !important; }
#headline { font-size: 12px !important; padding: 5px; }
.article-content, #left-sidebar{ -webkit-text-size-adjust: 90% !important; -ms-text-size-adjust: 90% !important; }
.article-content {margin-left: 15px; margin-right: 15px;}
.header-content, .footer-content-left {-webkit-text-size-adjust: 80% !important; -ms-text-size-adjust: 80% !important;}
img { height: auto; line-height: 100%;}
 }
/* Client-specific Styles */
#outlook a { padding: 0; }  /* Force Outlook to provide a "view in browser" button. */
body { width: 100% !important; }
.ReadMsgBody { width: 100%; }
.ExternalClass { width: 100%; display:block !important; } /* Force Hotmail to display emails at full width */
/* Reset Styles */
/* Add 100px so mobile switch bar doesn't cover street address. */
body { background-color: #ececec; margin: 0; padding: 0; }
img { outline: none; text-decoration: none; display: block;}
br, strong br, b br, em br, i br { line-height:100%; }
h1, h2, h3, h4, h5, h6 { line-height: 100% !important; -webkit-font-smoothing: antialiased; }
h1 a, h2 a, h3 a, h4 a, h5 a, h6 a { color: blue !important; }
h1 a:active, h2 a:active,  h3 a:active, h4 a:active, h5 a:active, h6 a:active { color: red !important; }
/* Preferably not the same color as the normal header link color.  There is limited support for psuedo classes in email clients, this was added just for good measure. */
h1 a:visited, h2 a:visited,  h3 a:visited, h4 a:visited, h5 a:visited, h6 a:visited { color: purple !important; }
/* Preferably not the same color as the normal header link color. There is limited support for psuedo classes in email clients, this was added just for good measure. */
table td, table tr { border-collapse: collapse; }
.yshortcuts, .yshortcuts a, .yshortcuts a:link,.yshortcuts a:visited, .yshortcuts a:hover, .yshortcuts a span {
color: black; text-decoration: none !important; border-bottom: none !important; background: none !important;
}   /* Body text color for the New Yahoo.  This example sets the font of Yahoo's Shortcuts to black. */
/* This most probably won't work in all email clients. Don't include <code _tmplitem="477" > blocks in email. */
code {
  white-space: normal;
  word-break: break-all;
}
#background-table { background-color: #ececec; }
/* Webkit Elements */
#top-bar { border-radius:6px 6px 0px 0px; -moz-border-radius: 6px 6px 0px 0px; -webkit-border-radius:6px 6px 0px 0px; -webkit-font-smoothing: antialiased; background-color: #406A80; color: #e7cba3; }
#top-bar a { font-weight: bold; color: #e7cba3; text-decoration: none;}
#footer { border-radius:0px 0px 6px 6px; -moz-border-radius: 0px 0px 6px 6px; -webkit-border-radius:0px 0px 6px 6px; -webkit-font-smoothing: antialiased; }
/* Fonts and Content */
body, td { font-family: 'Helvetica Neue', Arial, Helvetica, Geneva, sans-serif; }
.header-content, .footer-content-left, .footer-content-right { -webkit-text-size-adjust: none; -ms-text-size-adjust: none; }
/* Prevent Webkit and Windows Mobile platforms from changing default font sizes on header and footer. */
.header-content { font-size: 12px; color: #fff; }
.header-content a { font-weight: bold; color: #fff; text-decoration: none; }
#headline p {color: #ffffff; font-family: 'Helvetica Neue', Arial, Helvetica, Geneva, sans-serif; font-size: 12px; text-align: center; margin-top: 15px; margin-bottom: 15px;}
#headline p a { color: #fff; text-decoration: none; }
.article-title { font-size: 18px; line-height:24px; color: #406A80; font-weight:bold; margin-top:0px; margin-bottom:18px; font-family: 'Helvetica Neue', Arial, Helvetica, Geneva, sans-serif; }
.article-title a { color: #9a9661; text-decoration: none; }
.article-title.with-meta {margin-bottom: 0;}
.article-meta { font-size: 13px; line-height: 20px; color: #ccc; font-weight: bold; margin-top: 0;}
.article-content { font-size: 13px; line-height: 18px; color: #444444; margin-top: 0px; margin-bottom: 18px; font-family: 'Helvetica Neue', Arial, Helvetica, Geneva, sans-serif; }
.article-content a { color: #73BFE6; font-weight:bold; text-decoration:none; }
.article-content img { max-width: 100% }
.article-content ol, .article-content ul { margin-top:0px; margin-bottom:18px; margin-left:19px; padding:0; }
.article-content li { font-size: 13px; line-height: 18px; color: #444444; }
.article-content li a { color: #73BFE6; text-decoration:underline; }
.article-content p {margin-bottom: 15px;}
.footer-content-left { font-size: 12px; line-height: 15px; color: #e2e2e2; margin-top: 0px; margin-bottom: 15px; }
.footer-content-left a { color: #e7cba3; font-weight: bold; text-decoration: none; }
.footer-content-right { font-size: 11px; line-height: 16px; color: #e2e2e2; margin-top: 0px; margin-bottom: 15px; }
.footer-content-right a { color: #e7cba3; font-weight: bold; text-decoration: none; }
#footer { background-color: #406A80; color: #e2e2e2; }
#footer a { color: #e7cba3; text-decoration: none; font-weight: bold; }
#permission-reminder { white-space: normal; }
#street-address { color: #73BFE6; white-space: normal; }
.breaks {
    overflow-wrap: break-word;
    word-wrap: break-word;
    -ms-word-break: break-all;
    word-break: break-all;
    word-break: break-word;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
}
.gobutton { display: inline-block;background: #73BFE6 !important;color: #fff !important;padding: 8px 10px !important;-webkit-border-radius: 4px;  -moz-border-radius: 4px;  border-radius: 4px;}
</style>
<!--[if gte mso 9]>
<style _tmplitem="477" >
.article-content ol, .article-content ul {
   margin: 0 0 0 24px;
   padding: 0;
   list-style-position: inside;
}
</style>
<![endif]--></head><body><table id="background-table" border="0" cellpadding="0" cellspacing="0" width="100%">
    <tbody><tr>
        <td align="center" bgcolor="#ececec">
            <table class="w640" style="margin: 0 10%; max-width: 640px;" border="0" cellpadding="0" cellspacing="0"  >
                <tbody><tr><td class="w640" height="20"  >&nbsp;</td></tr>

                <tr>
                <td id="header" class="w640" align="center" bgcolor="#73BFE6" style="padding: 10px; border-radius: 6px 6px 0px 0px; -moz-border-radius: 6px 6px 0px 0px; -webkit-border-radius: 6px 6px 0px 0px; -webkit-font-smoothing: antialiased;" >

    <table class="w640" border="0" cellpadding="0" cellspacing="0"  >
        <tbody>
        <tr>
            <td class="w30" width="30">&nbsp;</td>
            <td class="w580"  >
                <div id="headline" align="center" >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
        </td>
            <td class="w30" width="30">&nbsp;</td>
    </tr>
    </tbody></table>


</td>
                </tr>

                <tr><td class="w640" height="15" bgcolor="#ffffff"  >&nbsp;</td></tr>
                <tr id="simple-content-row"><td class="w640" bgcolor="#ffffff"  >
    <table class="w640" border="0" cellpadding="0" cellspacing="0"  >
        <tbody><tr>
            <td class="w30" width="30">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td class="w640"  >
                <repeater>

                    <layout label="Text only">
                        <table class="w640" border="0" cellpadding="0" cellspacing="0"  >
                            <tbody><tr>
                                <td class="w640"  >

                                    <div class="article-content" align="left" style="font-size: 13px;    line-height: 18px;    color: #667780;    margin-top: 0px;    margin-bottom: 10px;    font-family: 'Helvetica Neue', Arial, Helvetica, Geneva, sans-serif;">
                                        <table class="w640" border="0" cellpadding="0" cellspacing="0">
                                        <tr><td>
                                            {{icon}}
                                        
                                        <!-- Уважаемый коллега!<br/>Наша компания проводит исследование (опрос) персонала. Вы приглашены принять в нем участие.<br/>Опрос проводится анонимно.<br/>Нам очень важно ваше мнение! Благодарим вас за участие.<p></p> -->
                                        {{mainText}}
                                        <br/>
                                        
                                        {{password}}
                                        <br/>

                                            <strong>Чтобы перейти на страницу опроса, нажмите эту кнопку:</strong></p>
                                            <p>
                                            <a href="http://www.yandex.ru" class="gobutton">Перейти к опросу</a>
                                        </p><p>Если кнопка не сработает, скопируйте эту ссылку и откройте ее в вашем браузере:</p>
                                        <p><a href="http://www.yandex.ru">http://www.yandex.ru</a></p>
                                            <p>При использовании смартфона или планшета можно перейти к опросу с помощью этого QR-кода:</p>
                                            <p align="center">
                                                <img src='{{QRCode}}' />
                                            </p>
                                        
                                        </p></td></tr>
                                        </table>
<p><center><small>Письмо создано автоматической системой оповещения. Отвечать на него не нужно.</small></center></p>
                                    </div>
                                </td>
                            </tr>
                        </tbody></table>
                    </layout>

                </repeater>
            </td>
            <td class="w30" width="30">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
        </tr>
    </tbody></table>
</td></tr>
                <tr><td class="w640" height="15" bgcolor="#ffffff"  >&nbsp;</td></tr>
<tr>
    <td id="header" class="w640" align="center" bgcolor="#406A80" border="0" cellpadding="0" cellspacing="0"   style="border-radius: 0px 0px 6px 6px;    -moz-border-radius: 0px 0px 6px 6px;    -webkit-border-radius: 0px 0px 6px 6px;    -webkit-font-smoothing: antialiased;">
        <table class="w640" border="0" cellpadding="0" cellspacing="0"  >
            <tbody>
                <tr>
                    <td class="w30" width="30">&nbsp;</td>
                    <td class="w640"  >
                        <div id="headline" align="center" >

                        </div>
                    </td>
                    <td class="w30" width="30">&nbsp;</td>
        </tr>
            </tbody>
        </table>
        </td>
</tr>
                <tr><td class="w640" height="60"  >&nbsp;</td></tr>

</tbody></table>
</body>
</html>

  `
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Военком опрос 👻" <iliakhlyzov@gmail.com>', // sender address
    to: "khlyzoff@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    html, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);