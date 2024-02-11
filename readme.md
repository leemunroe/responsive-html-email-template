# Responsive HTML Email Template

Note: this is a fork of the [Free Responsive HTML Email Template](https://github.com/leemunroe/responsive-html-email-template) repository by [Lee Munroe](https://github.com/leemunroe).

Example preview:

<img src="example-preview.png?v=a1" alt="Simple HTML Email Template" width="700">

## Inline your CSS before sending

Email is notorious for inconsistent CSS support. You should always inline your CSS and send a test to yourself before using this template in your system.

### Sending emails directly from your codebase or using a developer service?

For an API service (like Mailgun, SendGrid, Postmark) **you need to inline the CSS before sending**. See `email-inlined.html` for an example.

You can use this [Email CSS Inliner](https://htmlemail.io/inline/) and then [send a test email to yourself](https://postdrop.io) to verify it works as expected.

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

Tested on mobile, desktop and web. For full compatibility overview please visit the [original repository](https://github.com/leemunroe/responsive-html-email-template).
