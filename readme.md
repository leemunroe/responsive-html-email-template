# Really Simple Free Responsive HTML Email Template

Sometimes all you want is a really simple responsive HTML email template. Here it is.

[See live preview](http://leemunroe.github.io/responsive-html-email-template/email.html).

<img src="https://user-images.githubusercontent.com/15963/29055956-8dcca38e-7bb4-11e7-8a86-7b056ebf673d.png" alt="Simple HTML Email" width="500">

## Sending emails directly from your codebase or using a developer service?

For an API service (like Mailgun) **you need to inline the CSS before sending**. See `email-inlined.html` for an example.

You can use CSS inliner tools like [Responsive CSS Inliner](https://htmlemail.io/inline/) or [Juice](https://github.com/Automattic/juice) to do this automatically.

* Copy all of email.html
* Paste the HTML as the source into the inliner
* Copy the HTML output and use this as the email template you send

## Sending emails using a marketing service like Mailchimp?

Use the template `email.html` as is. They'll put the CSS inline for you when you put together your campaign.

## Tried and tested on all major email clients

Tested on mobile, desktop and web.

![Templates Tested on Email Clients](https://cloud.githubusercontent.com/assets/15963/17391543/bc289abe-59cb-11e6-9946-605a85f8c522.jpg)

[See the Litmus test results](https://litmus.com/checklist/emails/public/bd7912f).

## More HTML email resources

* [More Responsive HTML Email Templates](http://htmlemail.io)
* [An Introduction To Building And Sending HTML Email For Web Developers](https://www.smashingmagazine.com/2017/01/introduction-building-sending-html-email-for-web-developers/)
* [Grunt Email Design Workflow](https://github.com/leemunroe/grunt-email-design)
