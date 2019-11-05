[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=8N47UXGWGZUY4)

# Free Responsive Simple HTML Email Template

Sometimes all you want is a really simple responsive HTML email template with a clear call-to-action button. Here it is.

[See live preview](http://leemunroe.github.io/responsive-html-email-template/email.html).

<img src="https://user-images.githubusercontent.com/15963/29055956-8dcca38e-7bb4-11e7-8a86-7b056ebf673d.png" alt="Simple HTML Email" width="500">

## Inline your CSS before sending

Email is notorious for inconsistent CSS support. Therefore you should always inline your CSS before sending.

### Sending emails directly from your codebase or using a developer service?

For an API service (like Mailgun, SendGrid, Postmark) **you need to inline the CSS before sending**. See `email-inlined.html` for an example.

You can use this [Email CSS Inliner](https://htmlemail.io/inline/) or a module like [Juice](https://github.com/Automattic/juice) to do this automatically.

* Copy all of email.html
* Paste the HTML as the source into the inliner
* Copy the HTML output and use this as the email template you send

### Sending emails using a marketing service like Mailchimp?

Use the template `email.html` as is. They'll put the CSS inline for you when you put together your campaign.

## Images in email

When inserting images remember to include the following attributes or risk them breaking in different clients:

* `src`
* `alt`
* `width`
* `height`
* `border`

Example:

`<img src="https://absolute-path-to-image.jpg" alt="Useful alt text" width="500" height="300" border="0" style="border:0; outline:none; text-decoration:none; display:block;">`

[More information here](https://www.smashingmagazine.com/2017/01/introduction-building-sending-html-email-for-web-developers/)

## Tried and tested on all major email clients

Tested on mobile, desktop and web.

![Templates Tested on Email Clients](https://cloud.githubusercontent.com/assets/15963/17391543/bc289abe-59cb-11e6-9946-605a85f8c522.jpg)

[See the Litmus test results](https://litmus.com/checklist/emails/public/233ded7).

## More HTML email resources

* [10 HTML Email Templates for Developers](https://htmlemail.io)
* [An Introduction To Building And Sending HTML Email](https://www.smashingmagazine.com/2017/01/introduction-building-sending-html-email-for-web-developers/)
* [Grunt Email Design Workflow](https://github.com/leemunroe/grunt-email-design)
* [Everything Web Developers Need To Know About Transactional Email](https://webdesign.tutsplus.com/articles/everything-developers-need-to-know-about-sending-transactional-email--cms-31759)

This free template is part of a pack of responsive email templates for developers and startups available on [HTML Email](https://htmlemail.io).
[![image](https://user-images.githubusercontent.com/15963/49354042-c0bcb800-f675-11e8-92ef-7e9987b85bf6.png)](https://htmlemail.io)
