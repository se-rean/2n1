import React from 'react'
import HeaderText from '../components/HeaderText'

export default function TermsAndService() {
  return (
    <div className='content-container flex justify-center items-center bg-secBG pb-10'>
      <div id="1" className='mt-10 lg:w-[900px] flex flex-col blogpost gap-10 py-10'>
        <HeaderText line-height="3rem" font-size="50px" text="Terms of Service"/>
        <p> 
            <ul className='lg:ml-10 number-bullet  text-secondaryText gap-3 flex flex-col'>
              <li>
                <span className='text-primaryText'>Acceptance of Terms</span> 
                <p className='text-[16px] font-[600] tracking-wide leading-7 text-secondaryText'>By accessing or using our services, you agree to comply with these Terms of Service. If you do not agree with any part of these terms, you may not use our services.
                </p> 
              </li>
              <li>
              <span className='text-primaryText'>User Responsibilities
</span> 
                
                <p className='text-[16px] font-[600] tracking-wide leading-7 text-secondaryText'>Users are responsible for maintaining the confidentiality of their account information and agree not to share login credentials. Any activities conducted through your account are your responsibility.

                </p> 
              </li>
              <li>
              <span className='text-primaryText'>Content Usage
</span> 
            
                <p className='text-[16px] font-[600] tracking-wide leading-7 text-secondaryText'>Users must not upload, share, or engage in any content that violates copyright, trademarks, or any applicable laws. We reserve the right to remove any content that breaches these terms.

                </p> 
              </li>
              <li>
              <span className='text-primaryText'>Service Modifications
</span> 
              
                <p className='text-[16px] font-[600] tracking-wide leading-7 text-secondaryText'>We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice. We are not liable for any consequences arising from such actions.
                </p> 
              </li>
              <li>
              <span className='text-primaryText'>User Conduct</span> 
              
                <p className='text-[16px] font-[600] tracking-wide leading-7 text-secondaryText'>Users agree not to engage in any activities that may disrupt the services, harm other users, or violate any laws. Any abusive or inappropriate behavior may result in the termination of your account.

                </p> 
              </li> 
            </ul>
          </p>
      </div>

      <div id="1" className='mt-10 lg:w-[900px] flex flex-col blogpost gap-10 py-10'>
        <HeaderText line-height="3rem" font-size="50px" text="Privacy Policy"/>
        <p> 
            <ul className='lg:ml-10 number-bullet  text-secondaryText gap-3 flex flex-col'>
              <li>
                <span className='text-primaryText'>Information Collection
</span> 
                <p className='text-[16px] font-[600] tracking-wide leading-7 text-secondaryText'>We collect user information, such as email addresses and usage data, to provide and improve our services. We do not sell or share this information with third parties without user consent.

                </p> 
              </li>
              <li>
              <span className='text-primaryText'>Cookies and Tracking
</span> 
                
                <p className='text-[16px] font-[600] tracking-wide leading-7 text-secondaryText'>We use cookies and similar technologies to enhance user experience and track usage patterns. Users can manage cookie preferences through their browser settings.

                </p> 
              </li>
              <li>
              <span className='text-primaryText'> Data Security

</span> 
            
                <p className='text-[16px] font-[600] tracking-wide leading-7 text-secondaryText'>We implement security measures to protect user data from unauthorized access or disclosure. However, no method of transmission over the Internet is entirely secure, and we cannot guarantee absolute security.


                </p> 
              </li>
              <li>
              <span className='text-primaryText'>Third-Party Links

</span> 
              
                <p className='text-[16px] font-[600] tracking-wide leading-7 text-secondaryText'>Our services may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. Users should review the privacy policies of third-party sites.

                </p> 
              </li>
              <li>
              <span className='text-primaryText'>Updates to the Privacy Policy
</span>  
                <p className='text-[16px] font-[600] tracking-wide leading-7 text-secondaryText'>We may update our Privacy Policy periodically. Users will be notified of any significant changes. Continued use of our services after changes implies acceptance of the updated Privacy Policy.


                </p> 
              </li> 
              <li>
              <span className='text-primaryText'>Contact Information

</span>  
                <p className='text-[16px] font-[600] tracking-wide leading-7 text-secondaryText'>For any questions or concerns regarding these Terms of Service or Privacy Policy, please contact us at vic@2in1.com.au



                </p> 
              </li> 
            </ul>
          </p>
      </div>
    </div>
  )
}
