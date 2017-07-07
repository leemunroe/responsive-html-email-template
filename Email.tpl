package Document.templates
style {
    include unescaped: 'Engine/Email.css'
}

html {
    head {
        meta(name: "viewport", content: "width=device-width")
        title("Simple Transactional Email")
        style(type: "text/css") {

        }
    }
    body(class: "", style: "background-color:#f6f6f6;font-family:sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;line-height:1.4;margin:0;padding:0;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;")
    table(border: "0", cellpadding: "0", cellspacing: "0", class: "body", style: "border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;background-color:#f6f6f6;width:100%;") {
        tr {
            td(style: "font-family:sans-serif;font-size:14px;vertical-align:top;") { }
            td(class: "container", style: "font-family:sans-serif;font-size:14px;vertical-align:top;display:block;max-width:580px;padding:10px;width:580px;Margin:0 auto !important;") {
                div(class: "content", style: "box-sizing:border-box;display:block;Margin:0 auto;max-width:580px;padding:10px;") {
                    table(class: "main", style: "border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;background:#fff;border-radius:3px;width:100%;") {
                        tr {
                            td(class: "wrapper", style: "font-family:sans-serif;font-size:14px;vertical-align:top;box-sizing:border-box;padding:20px;") {
                                table(border: "0", cellpadding: "0", cellspacing: "0", style: "border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;") {
                                    tr {
                                        td(style: "font-family:sans-serif;font-size:14px;vertical-align:top;") {
                                            p(style: "font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;"){
                                                "Hi there, "
                                            }
                                            h2(style: "font-family:sans-serif;font-size:18px;font-weight:bold;margin:0;Margin-bottom:30px;" ){
                                                $subject
                                            }
                                            p(style: "font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;"){
                                                $content
                                            }
                                            table(border: "0", cellpadding: "0", cellspacing: "0", class: "btn btn-primary", style: "border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;box-sizing:border-box;width:100%;") {
                                                tbody {
                                                    tr {
                                                        td(align: "left", style: "font-family:sans-serif;font-size:14px;vertical-align:top;padding-bottom:15px;") {
                                                            table(border: "0", cellpadding: "0", cellspacing: "0", style: "border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;width:auto;") {
                                                                tbody {
                                                                    tr {
                                                                        td(style: "font-family:sans-serif;font-size:14px;vertical-align:top;background-color:#ffffff;border-radius:5px;text-align:center;background-color:#3498db;") {
                                                                            a(href: "http://sua.inaya.io/edms", target: "_blank", style: "text-decoration:underline;background-color:#ffffff;border:solid 1px #3498db;border-radius:5px;box-sizing:border-box;color:#3498db;cursor:pointer;display:inline-block;font-size:14px;font-weight:bold;margin:0;padding:12px 25px;text-decoration:none;text-transform:capitalize;background-color:#3498db;border-color:#3498db;color:#ffffff;", "Open inaya EDMS")
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    div(class: "footer", style: "clear:both;padding-top:10px;text-align:center;width:100%;") {
                        table(border: "0", cellpadding: "0", cellspacing: "0", style: "border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;") {
                            tr {
                                td(class: "content-block", style: "font-family:sans-serif;font-size:14px;vertical-align:top;color:#999999;font-size:12px;text-align:center;") {
                                    span(class: "apple-link", style: "color:#999999;font-size:12px;text-align:center;", "Sokoine University of Agriculture")
                                    br()
                                    yield("Public university in Morogoro, Tanzania")
                                }
                            }

                            tr {
                                td(class: "content-block powered-by", style: "font-family:sans-serif;font-size:14px;vertical-align:top;color:#999999;font-size:12px;text-align:center;") {
                                    yield("Powered by") a(href: "http://inaya.io", style: "color:#3498db;text-decoration:underline;color:#999999;font-size:12px;text-align:center;text-decoration:none;", "inaya EDMS");
                                }
                            }
                        }
                    }

                }


            }

            td(style: "font-family:sans-serif;font-size:14px;vertical-align:top;") {

            }
        }
    }

}