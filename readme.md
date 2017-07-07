# Really Simple Responsive HTML Email Template

Sometimes all you want is a really simple responsive HTML email template. Here it is. 

[See live preview](http://leemunroe.github.io/responsive-html-email-template/email.html).

<img src="https://cloud.githubusercontent.com/assets/15963/26765586/c6484a96-4933-11e7-80e0-2f7509d24280.png" alt="Simple HTML Email" width="500">


## Sending emails using a marketing service like Campaign Monitor or Mailchimp?

Use the template `email.html` as is. They'll put the CSS inline for you when you put together your campaign.


## Sending emails directly from your app or using a developer service?

For an API like [Mailgun](http://www.mailgun.com) **you need to inline the CSS before sending**. See `email-inlined.html` for an example. 

You can use inliner tools like [Responsive CSS Inliner](https://htmlemail.io/inline/) or [Juice](https://github.com/Automattic/juice) to do this automatically.

* Copy all of email.html
* Paste the HTML as the source into Putsmail
* Copy the HTML results and use them in your email template

## Tried and tested on all major email clients

Tested on mobile, desktop and web. 

![Templates Tested on Email Clients](https://cloud.githubusercontent.com/assets/15963/17391543/bc289abe-59cb-11e6-9946-605a85f8c522.jpg)


[See the Litmus test results](https://litmus.com/checklist/emails/public/d432046).

## More HTML email resources

* [More Responsive HTML Email Templates](http://htmlemail.io)
* [Things I've Learned About Building HTML Emails](http://www.leemunroe.com/building-html-email/)
* [Grunt Email Design Workflow](https://github.com/leemunroe/grunt-email-design)
