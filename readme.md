# Really Simple Responsive HTML Email Template

Sometimes all you want is a really simple HTML email template. Here it is.

Preview: http://leemunroe.github.io/responsive-html-email-template/email.html

### Sending emails using a marketing service like Campaign Monitor or Mailchimp?

Use the template as is. They'll put the CSS inline for you when you put together your campaign.


### Sending emails directly from your app or using a developer service like Mailgun?

For an API like [Mailgun](http://www.mailgun.com)  you need to put the CSS inline. You can use [Premailer](http://premailer.dialect.ca/) to do this automatically.

* Copy all of email.html
* Paste the HTML as the source into Premailer
* Copy the HTML results and use them in your email view/template

Note that some services may allow you to opt into CSS inlining, such as
[Mandrill](http://help.mandrill.com/entries/24460141-Does-Mandrill-inline-CSS-automatically-).

### Tried and tested

Tested on all major email clients. Mobile, desktop and web. 

<img src="http://i.imgur.com/TtYvCTr.jpg" alt="Email preview" width="800">

Hat tip to Zurb's [Ink](http://zurb.com/ink/) for their awesome collection of email templates, which this was adapted from.

### More HTML email resources

I've open-sourced a few other resources you might find useful:

* [Transactional HTML Email Templates](https://github.com/mailgun/transactional-email-templates)
* [Grunt.js Email Design Workflow](https://github.com/leemunroe/grunt-email-design)
