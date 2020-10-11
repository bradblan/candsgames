<%
	Set Mailer = Server.CreateObject("SMTPsvg.Mailer")
	Mailer.FromName = "C & S Games"
	Mailer.FromAddress= "webmaster@candsgames.com"
	Mailer.RemoteHost = "mail.candsgames.com"
	Mailer.AddRecipient "Sales", "sales@candsgames.com"
	Mailer.AddExtraHeader "X-MimeOLE:Produced candsgames.com"
	Mailer.Subject = "Quote Request"
	
	strMsgHeader = "Form Information Follows: " & vbCrLf
	for i = 1 to Request.Form.Count
	  strMsgInfo = strMsgInfo & Request.Form.Key(i) & " - " & Request.Form.Item(i) & vbCrLf
	next
	strMsgFooter = vbCrLf & "End of form information"
	Mailer.BodyText = strMsgHeader & strMsgInfo & strMsgFooter
	if Mailer.SendMail then
	  Response.Write "Thank you for your quote request!  Someone will be contacting you shortly."
	else
	  Response.Write "Mail send failure. Error was " & Mailer.Response
	end if
	set Mailer = Nothing
%>