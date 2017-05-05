# Really Simple Responsive HTML Email Template

[![NPM version][npm-image]][npm-url] 

[npm-image]: https://badge.fury.io/js/responsive-html-email-template.svg
[npm-url]: https://npmjs.org/package/responsive-html-email-template

Sometimes all you want is a really simple responsive HTML email template. Here it is.

Preview: http://leemunroe.github.io/responsive-html-email-template/email.html

## Sending emails using a marketing service like Campaign Monitor or Mailchimp?

Use the template as is. They'll put the CSS inline for you when you put together your campaign.


## Sending emails directly from your app or using a developer service

For an API like [Mailgun](http://www.mailgun.com)  you need to put the CSS inline. You can use inliner tools like [Putsmail](https://putsmail.com/inliner) or [Juice](https://github.com/Automattic/juice) to do this automatically.

* Copy all of email.html
* Paste the HTML as the source into Putsmail
* Copy the HTML results and use them in your email view/template

## Tried and tested on all major email clients

Tested on mobile, desktop and web. 

![Templates](https://cloud.githubusercontent.com/assets/15963/17391543/bc289abe-59cb-11e6-9946-605a85f8c522.jpg)


[Here are the Litmus test results](https://litmus.com/checklist/emails/public/d432046).

## More HTML email resources

* [More Responsive HTML Email Templates](http://htmlemail.io)
* [Things I've Learned About Building HTML Emails](http://www.leemunroe.com/building-html-email/)
* [Grunt Email Design Workflow](https://github.com/leemunroe/grunt-email-design)

## Npm package

You can use the npm package to install responsive-html-email-template and introduce it to your project's workflow:

    npm install responsive-html-email-template

## Gulp

Under the `src` folder you can find the the used styles into a separate `email.sass` file.
You can include that file in your build setup or override.

In order to build the final html file you need to use `gulp-inline-css`. 
You can find a sample source html file in `src/email.html` as well as a sample gulpfile. 
