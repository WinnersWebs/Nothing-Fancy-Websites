exports.corsEnabledFunction = (req, res) => {
    //allow CORS
    res.set('Access-Control-Allow-Origin', 'https://nothingfancywebsites.com');
    if (req.method === 'OPTIONS') {
      res.set('Access-Control-Allow-Methods', 'POST');
      res.set('Access-Control-Allow-Headers', 'Content-Type');
      res.set('Access-Control-Max-Age', '3600');
      res.status(204).send('');
    }
    else {
      res.send('Hello World!');
    }
    //get params from XMLHttpRequest
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const phone=req.body.phone;
    const email=req.body.email;
    const message=req.body.message;
    //const grecaptchaToken=req.body.grecaptchaToken;
    // //validate Google Recaptcha Enterprise
    // let siteKey = "";
    // let assessmentName = new Date().toString();
    // let parentPath = "projects/prod";
    // //let recaptchaAction = "formSubmit";
    // const {RecaptchaEnterpriseServiceClient} =
    //     require('@google-cloud/recaptcha-enterprise');
    // const client = new RecaptchaEnterpriseServiceClient();
    // const event = ({
    //     token: grecaptchaToken,
    //     siteKey: siteKey,
    //     protectedAction: recaptchaAction
    // });
    // const assessment = ({
    //     event: event,
    //     name: assessmentName
    // });
    // const request = ({
    //     assessment: assessment,
    //     parent: parentPath
    // });
    // client.createAssessment(request, function(err, response) {
    //     //console.log('x');
    //     //console.log('captchaRequest is ',request);
    //     console.log('captchaResponse is ',response);
    //     if (response.tokenProperties.valid == false) {
    //         console.log("The CreateAssessment() call failed because "+response.tokenProperties.invalidReason);
    //     }
    //     else {
    //         if (response.event.expectedAction == protectedAction) {
    //             console.log("The reCAPTCHA score is: " +
    //                 response.riskAnalysis.score);
    //              //captcha validated, now send email
                const mailgun = require("mailgun-js");
                const DOMAIN = 'mail.nothingfancywebsites.com';
                const mg = mailgun({apiKey: '', domain: DOMAIN});
                const data = {
                  from: 'NFW.com <website@mail.nothingfancywebsites.com>',
                  to: 'nothingfancy@winnerswebs.com',
                  subject: 'Message from '+firstName,
                  html: '<span style="font-size: 1.75rem; margin: 0 auto .5rem 0;">First Name: '+firstName+'</span><br>'+
                          '<span style="font-size: 1.75rem; margin: .5rem auto .5rem 0;">Last Name: '+lastName+'</span><br>'+
                          '<span style="font-size: 1.75rem; margin: .5rem auto .5rem 0;">Email: '+email+'</span><br>'+
                          '<span style="font-size: 1.75rem; margin: .5rem auto .5rem 0;">Phone: '+phone+'</span><br>'+
                          '<span style="font-size: 1.75rem; margin: .5rem auto 0 0;">Message: '+message+'</span>'
                };
                mg.messages().send(data, function (error, body) {
                  if(error){console.log('mg.messages().send error is ',error);}
                  else{console.log('mg.messages().send body is ',body);}
                });
    //         }
    //         else {
    //             console.log("The action attribute in your reCAPTCHA tag does " +
    //                 "not match the action you are expecting to score");
    //         }
    //     }
    // });
};
