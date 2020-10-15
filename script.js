const {renderToStaticMarkup, PropTypes} = React;

const Html = ({title, children}) => (
  <html>
    <head>
      <title>{title}</title>
    </head>
    <body>
      {children}
    </body>
  </html>
);

const Button = ({
  href,
  backgroundColor,
  color,
  height,
  fontSize,
  borderRadius,
  children,
}) => (
  <table style={{
    backgroundColor,
    color,
    fontSize,
    fontWeight: 700,
    width: 200,
    height,
    borderRadius
  }}>
    <tr>
      <td>
        <a href={href} style={{
          color,
          display: 'block',
          lineHeight: '30px',
          textDecoration: 'none',
          textAlign: 'center'
        }}>{children}</a>
      </td>
    </tr>
  </table>
)

Button.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number,
  fontSize: PropTypes.number,
  borderRadius: PropTypes.number
}

Button.defaultProps = {
  backgroundColor: 'steelblue',
  color: '#fff',
  height: 30,
  fontSize: 16,
  borderRadius: 3
}

const Email = () => (
  <Html title="React HTML Email Builder">
    <h1>Some email</h1>
    <Button href="https://codepen.io">Check out codepen!</Button>
  </Html>
)

const markup = renderToStaticMarkup(<Email />);
                                          
document.getElementById('output').innerHTML = '<!doctype html>' + markup;

React.render(<Email />, document.getElementById('render'));
