class GroupMailer < ApplicationMailer
  default from: "no-reply@example.com"

  def notice_event(user, group, title, content)
    @user = user
    @group = group
    @content = content

    mail(to: @user.email_address, subject: title)
  end
end
