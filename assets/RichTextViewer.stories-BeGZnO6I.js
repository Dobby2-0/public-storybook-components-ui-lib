import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{n as t,t as n}from"./RichTextViewer-C-hsmCVa.js";var r,i,a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{t(),r={component:n},i={args:{value:`<p style="margin: 0px;">test</p><p style="margin: 0px;"><br></p><p style="margin: 0px;"><br></p>`}},a={args:{value:`<body style="margin:0;padding:0;">\r
  <section style="width:210mm;padding:16mm 20mm 8mm 20mm;margin:0px auto;background:#fff;display:flex;flex-direction:column;gap:16px; color:#111;font:14px/1.3 sans-serif;">\r
    <div style="display:flex;flex-direction:column;gap:14px;">\r
      <div style="display:grid;grid-template-columns: fit-content(180px) 1fr;gap:2px 12px;align-items:start;margin-top:6px;">\r
        <div style="font-weight:600;">Building</div>\r
        <div style="word-break:break-word;"><tag-node label="Building name" value="Data.Building.Name"></tag-node></div>\r
        <div style="font-weight:600;">Time</div>\r
        <div style="word-break:break-word;"><tag-node label="formatDateTime Data.Meeting.Date" value="formatDateTime Data.Meeting.Date"></tag-node></div>\r
        <div style="font-weight:600;">Attending</div>\r
        <div style="word-break:break-word;"><tag-node label="Attending quota" value="Data.Meeting.QuotaAttending"></tag-node>/<tag-node label="Total quota distributionkey meeting" value="Data.DistributionKey.TotalQuota"></tag-node> (<tag-node label="formatDecimal Data.Meeting.PercentageAttendingQuota N2 nl-BE" value="formatDecimal Data.Meeting.PercentageAttendingQuota N2 nl-BE"></tag-node>%) Quotas <br/> <tag-node label="Amount of present owners" value="Data.Meeting.OwnersAttending"></tag-node>/<tag-node label="Data.Meeting.NumberOfOwners" value="Data.Meeting.NumberOfOwners"></tag-node> (<tag-node label="formatDecimal Data.Meeting.PercentageAttendingOwners N2 nl-BE" value="formatDecimal Data.Meeting.PercentageAttendingOwners N2 nl-BE"></tag-node>%) People</div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section style="width:210mm;padding:0 20mm;margin:0px auto;background:#fff;display:flex;flex-direction:column;gap:24px; color:#111;font:14px/1.3 sans-serif;">\r
    <div style="display:flex;flex-direction:column;gap:14px;">\r
      <tag-node label="#each Data.MeetingItems" value="#each Data.MeetingItems"></tag-node>\r
      <tag-node label="#with this as |meetingItem|" value="#with this as |meetingItem|"></tag-node>\r
      <tag-node label="#with (localizedMeetingItem meetingItem @root.CurrentLanguage) as |localizedItem|" value="#with (localizedMeetingItem meetingItem @root.CurrentLanguage) as |localizedItem|"></tag-node>\r
      <div style="display:flex;flex-direction:column;margin-bottom: 12px;">\r
        <h2 style="margin:0;font-size:14px;font-weight:600;margin:0 0 4px;text-decoration:underline;"><tag-node label="meetingItem.ItemNumber" value="meetingItem.ItemNumber"></tag-node>: <tag-node label="localizedItem.Title" value="localizedItem.Title"></tag-node></h2>\r
\r
        <section style="white-space:pre-wrap;font-size:13px!important;margin:0;"><div style="margin:0;padding:0;"><tag-node label="renderTags localizedItem.Minutes @root" value="renderTags localizedItem.Minutes @root"></tag-node></div></section>\r
        <tag-node label="#unless (eq meetingItem.MinimumRequired 1)" value="#unless (eq meetingItem.MinimumRequired 1)"></tag-node>\r
        <section style="margin:0;">\r
          <div style="display:grid;grid-template-columns: 200px 1fr;gap:2px 16px;align-items:start;margin-top:4px; line-height: 1.1;">\r
            <div style="font-weight:600;margin: 0;">Distribution Key</div>\r
            <div style="word-break:break-word;margin: 0;"><tag-node label="meetingItem.DistributionKey.Name" value="meetingItem.DistributionKey.Name"></tag-node> - : TOTAL (<tag-node label="meetingItem.DistributionKey.TotalQuota" value="meetingItem.DistributionKey.TotalQuota"></tag-node> Q)</div>\r
            <div style="font-weight:600;margin: 0;">Required Majority</div>\r
            <div style="word-break:break-word;margin: 0;"><tag-node label="minimumRequiredText meetingItem.MinimumRequired" value="minimumRequiredText meetingItem.MinimumRequired"></tag-node></div>\r
            <div style="font-weight:600;margin: 0;">Results</div>\r
            <div style="word-break:break-word;margin: 0;">\r
              <ul style="list-style:disc;margin:0;padding-left:20px;line-height:1;">\r
                <li style="margin:0;padding:0;white-space:normal;line-height:1.05;display:list-item;"> <span &lt;tag-node label=&quot;#if (gt meetingItem.YesPercentage 50)&quot; value=&quot;#if (gt meetingItem.YesPercentage 50)&quot;&gt;&lt;/tag-node&gt; style="color:green;font-weight:600;text-decoration:underline;" &lt;tag-node label=&quot;/if&quot; value=&quot;/if&quot;&gt;&lt;/tag-node&gt;>Yes: <tag-node label="formatDecimal meetingItem.YesPercentage N2 nl-BE" value="formatDecimal meetingItem.YesPercentage N2 nl-BE"></tag-node>% (<tag-node label="meetingItem.YesQuota" value="meetingItem.YesQuota"></tag-node>)</span></li>\r
                <li style="margin:0;padding:0;white-space:normal;line-height:1.05;display:list-item;">\r
                    <span &lt;tag-node label=&quot;#unless (gt meetingItem.YesPercentage 50)&quot; value=&quot;#unless (gt meetingItem.YesPercentage 50)&quot;&gt;&lt;/tag-node&gt; style="color:green;font-weight:600;text-decoration:underline;" &lt;tag-node label=&quot;/unless&quot; value=&quot;/unless&quot;&gt;&lt;/tag-node&gt;>No: <tag-node label="formatDecimal meetingItem.NoPercentage N2 nl-BE" value="formatDecimal meetingItem.NoPercentage N2 nl-BE"></tag-node>% (<tag-node label="meetingItem.NoQuota" value="meetingItem.NoQuota"></tag-node>)</span>\r
                    <tag-node label="#if (hasItems meetingItem.NoParticipants)" value="#if (hasItems meetingItem.NoParticipants)"></tag-node>\r
                    <div style="margin:1px 0 0 20px;line-height:1;">\r
                        <tag-node label="#each meetingItem.NoParticipants" value="#each meetingItem.NoParticipants"></tag-node><tag-node label="this.Name" value="this.Name"></tag-node> <tag-node label="this.FirstName" value="this.FirstName"></tag-node>: <tag-node label="this.OriginalQuota" value="this.OriginalQuota"></tag-node><tag-node label="#unless (eq this.ScaledQuota this.OriginalQuota)" value="#unless (eq this.ScaledQuota this.OriginalQuota)"></tag-node> (<tag-node label="this.ScaledQuota" value="this.ScaledQuota"></tag-node>)<tag-node label="/unless" value="/unless"></tag-node><tag-node label="#unless @last" value="#unless @last"></tag-node>, <tag-node label="/unless" value="/unless"></tag-node><tag-node label="/each" value="/each"></tag-node>\r
                    </div>\r
                    <tag-node label="/if" value="/if"></tag-node>\r
                </li>\r
                <li style="margin:0;padding:0;white-space:normal;line-height:1.05;display:list-item;">\r
                    Abstention: (<tag-node label="meetingItem.AbstainQuota" value="meetingItem.AbstainQuota"></tag-node>)\r
                    <tag-node label="#if (hasItems meetingItem.AbstainParticipants)" value="#if (hasItems meetingItem.AbstainParticipants)"></tag-node>\r
                    <div style="margin:1px 0 0 20px;line-height:1;">\r
                        <tag-node label="#each meetingItem.AbstainParticipants" value="#each meetingItem.AbstainParticipants"></tag-node><tag-node label="this.Name" value="this.Name"></tag-node> <tag-node label="this.FirstName" value="this.FirstName"></tag-node>: <tag-node label="this.OriginalQuota" value="this.OriginalQuota"></tag-node><tag-node label="#unless (eq this.ScaledQuota this.OriginalQuota)" value="#unless (eq this.ScaledQuota this.OriginalQuota)"></tag-node> (<tag-node label="this.ScaledQuota" value="this.ScaledQuota"></tag-node>)<tag-node label="/unless" value="/unless"></tag-node><tag-node label="#unless @last" value="#unless @last"></tag-node>, <tag-node label="/unless" value="/unless"></tag-node><tag-node label="/each" value="/each"></tag-node>\r
                    </div>\r
                    <tag-node label="/if" value="/if"></tag-node>\r
                </li>\r
                <li style="margin:0;padding:0;white-space:normal;line-height:1.05;display:list-item;">\r
                    Blank: (<tag-node label="meetingItem.BlankQuota" value="meetingItem.BlankQuota"></tag-node>)\r
                    <tag-node label="#if (hasItems meetingItem.BlankParticipants)" value="#if (hasItems meetingItem.BlankParticipants)"></tag-node>\r
                    <div style="margin:1px 0 0 20px;line-height:1;">\r
                        <tag-node label="#each meetingItem.BlankParticipants" value="#each meetingItem.BlankParticipants"></tag-node><tag-node label="this.Name" value="this.Name"></tag-node> <tag-node label="this.FirstName" value="this.FirstName"></tag-node>: <tag-node label="this.OriginalQuota" value="this.OriginalQuota"></tag-node><tag-node label="#unless (eq this.ScaledQuota this.OriginalQuota)" value="#unless (eq this.ScaledQuota this.OriginalQuota)"></tag-node> (<tag-node label="this.ScaledQuota" value="this.ScaledQuota"></tag-node>)<tag-node label="/unless" value="/unless"></tag-node><tag-node label="#unless @last" value="#unless @last"></tag-node>, <tag-node label="/unless" value="/unless"></tag-node><tag-node label="/each" value="/each"></tag-node>\r
                    </div>\r
                    <tag-node label="/if" value="/if"></tag-node>\r
                </li>\r
              </ul>\r
            </div>\r
          </div>\r
        </section>\r
        <tag-node label="/unless" value="/unless"></tag-node>\r
      </div>\r
      <tag-node label="/with" value="/with"></tag-node>\r
      <tag-node label="/with" value="/with"></tag-node>\r
      <tag-node label="/each" value="/each"></tag-node>\r
    </div>\r
  </section>\r
\r
  <section style="width:210mm;padding:20mm;margin:0px auto;background:#fff;display:flex;flex-direction:column;gap:24px; color:#111;font:14px/1.45 sans-serif;">\r
    <div style="display:flex;flex-direction:column;gap:14px;">\r
        <h2 style="margin:0;font-size:14px;font-weight:600;margin:0 0 4px;">Details</h2>\r
        <div style="display:grid;grid-template-columns: fit-content(10px) 1fr;gap:2px 16px;align-items:start;">\r
        <div style="font-weight:600;">Present:</div>\r
        <div style="word-break:break-word;">\r
                    <tag-node label="#each Data.PresentParticipants" value="#each Data.PresentParticipants"></tag-node>\r
                    <tag-node label="this.Name" value="this.Name"></tag-node> <tag-node label="this.FirstName" value="this.FirstName"></tag-node><tag-node label="#if this.SentProxy" value="#if this.SentProxy"></tag-node> (vertegenwoordigd door <tag-node label="this.SentProxy.FirstName" value="this.SentProxy.FirstName"></tag-node> <tag-node label="this.SentProxy.Name" value="this.SentProxy.Name"></tag-node><tag-node label="#if this.SentProxy.IsExternal" value="#if this.SentProxy.IsExternal"></tag-node> - <tag-node label="this.SentProxy.ExternalName" value="this.SentProxy.ExternalName"></tag-node><tag-node label="/if" value="/if"></tag-node>)<tag-node label="/if" value="/if"></tag-node> (<tag-node label="this.Quota" value="this.Quota"></tag-node>)<tag-node label="#unless @last" value="#unless @last"></tag-node>,<tag-node label="/unless" value="/unless"></tag-node>\r
                    <tag-node label="/each" value="/each"></tag-node>\r
        </div>\r
        <div style="font-weight:600;">Absent:</div>\r
        <div style="word-break:break-word;">\r
                    <tag-node label="#each Data.AbsentParticipants" value="#each Data.AbsentParticipants"></tag-node>\r
                    <tag-node label="this.Name" value="this.Name"></tag-node> <tag-node label="this.FirstName" value="this.FirstName"></tag-node> (<tag-node label="this.Quota" value="this.Quota"></tag-node>)<tag-node label="#unless @last" value="#unless @last"></tag-node>,<tag-node label="/unless" value="/unless"></tag-node>\r
                    <tag-node label="/each" value="/each"></tag-node>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
</body>`}},o={args:{value:`<tag-node label="Alpha" value="a"></tag-node> <tag-node label="Beta" value="b"></tag-node>`}},s={args:{value:`<p>Just plain text, no tags here.</p>`}},c={args:{value:`<p>This is a paragraph with <strong>bold</strong> text and a <span class="tag-node">tag node</span>.</p>`,contentStyle:`p { color: red; font-weight: bold; } .tag-node { background-color: yellow; padding: 2px 4px; border-radius: 4px; }`}},l=(e,t)=>`<tag-node label="${e}" value="${t}" hidden="true"></tag-node>`,u=(e,t)=>`<tag-node label="${e}" value="${t}"></tag-node>`,d=`<h3>Assignment details</h3><ul style="list-style-type: disc; padding-left: 20px; margin: 0;"><li>Work order number: ${u(`Task work order number`,`Data.Task.WorkOrderNumber`)}</li>${l(`If construction year available`,`#if Data.Building.ConstructionYear`)}<li>Construction year: ${u(`Construction year building`,`Data.Building.ConstructionYear`)}</li>${l(`end if `,`/if`)}${l(`If task contact available`,`#if Data.ContactPerson`)}<li>Contact person on site: ${u(`Contact person name`,`Data.ContactPerson.Name`)}${l(`If contact person phone number available`,`#if Data.ContactPerson.PhoneNumber`)}, ${u(`Contact person phone number`,`Data.ContactPerson.PhoneNumber`)}${l(`end if `,`/if`)}</li>${l(`end if `,`/if`)}</ul><ol style="list-style-type: decimal; padding-left: 20px; margin: 0;"><li>Check in at the building</li>${l(`If task deadline available`,`#if Data.Task.Deadline`)}<li>Finish before ${u(`Task deadline`,`Data.Task.Deadline`)}</li>${l(`end if `,`/if`)}<li>Hand in the report</li></ol>${l(`Unless the office address block is used`,`#unless DisplayOptions.OfficeTemplatesV2`)}<div id="address-block"><p>${u(`Receiver first name`,`ReceiverData.FirstName`)} ${u(`Receiver name`,`ReceiverData.Name`)}</p><p>${u(`Receiver street`,`ReceiverData.Street`)}<br>${u(`Receiver city`,`ReceiverData.City`)}</p></div>${l(`end unless`,`/unless`)}${l(`If there is a contact e-mail`,`#if Data.Task.Contact.Mail`)}<p>Send your questions to the contact e-mail.</p>${l(`Else`,`else`)}<p>There is no contact e-mail: call the office instead.</p>${l(`end if `,`/if`)}`,f={args:{structuralTags:!0,value:d}},p=[`Default`,`WithMultipleTags`,`OnlyTags`,`NoTags`,`WithCustomStyles`,`WithStructuralTags`]})))()}m();export{i as Default,s as NoTags,o as OnlyTags,c as WithCustomStyles,a as WithMultipleTags,f as WithStructuralTags,p as __namedExportsOrder,r as default};