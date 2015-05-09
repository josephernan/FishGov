(function() {
  'use strict';

  angular
    .module('app.widgets')
    .directive('decodeHtml', decodeHtml);

    /* @ngInject */
    function decodeHtml() {
      var directive = {
        restrict: 'C',
        link: link
      };

      return directive;

      function link(scope, element, attrs) {
        scope.$on('decode_html', function(err, response) {
          console.log(response);
          // console.log(response[0].data[0].highlight.description[0]);
          // var str = '&amp;nbsp;\r\n&lt;p&gt;This is a presolicitation notice.&lt;span style=&quot;mso-spacerun: yes&quot;&gt;&amp;nbsp;' +
          //           '&lt;/span&gt;ACC AMIC, on behalf of the Joint Warfare Analysis Center, intends to compete on a brand name basis a ' +
          //           'purchase order among authorized resellers for the commercial purchase of HP Tipping Point Annual Software Maintenance ' +
          //           'Renewal.&lt;span style=&quot;mso-spacerun: yes&quot;&gt;&amp;nbsp; &lt;/span&gt;The period of performance for this order ' +
          //           'will be 1 Nov 2013 through 31 Oct 2014.&lt;span style=&quot;mso-spacerun: yes&quot;&gt;&amp;nbsp; &lt;/span&gt;The North' +
          //           'American Industry Classification System Code (NAICS) for this requirement is 541519: Other Computer Related Services with ' +
          //           'a size standard of $25.5M. Hewlett Packard Company is the parent company of HP Tipping Point products.&lt;span style=&quot;' +
          //           'mso-spacerun: yes&quot;&gt;&amp;nbsp; &lt;/span&gt;&lt;/p&gt;\r\n&lt;p&gt;Lack of maintenance service, or use of a different ' +
          //           'software package, would result in a loss of business and analytical applications for the organization.&lt;span style=&quot;' +
          //           'mso-spacerun: yes&quot;&gt;&amp;nbsp; &lt;/span&gt;A purchase order is anticipated on 22 November 2013.&lt;/p&gt;\r\n&lt;p&gt;' +
          //           'The Government plans to use the Internet and email as the primary means of disseminating and exchanging any information concerning ' +
          //           'this requirement. All responsible sources may submit a capability statement, proposal, or quotation which shall be considered by the ' +
          //           'agency.&lt;span style=&quot;mso-spacerun: yes&quot;&gt;&amp;nbsp; &lt;/span&gt;Interested offerors should provide their company name, ' +
          //           'address, point of contact, Cage Code, phone and fax number, email address, and business size to&amp;nbsp;cbreen@jwac.mil. To be eligible ' +
          //           'for contract award, offerors must be registered in the System for Award Management (www.sam.gov) under NAICS 541519: Other Computer Related Services. Additionally, offerors responding to this notice as a Small Business concern must be certified and qualified as a Small Business and registered in the System for Award Management (www.sam.gov) under NAICS 541519. Interested parties are to submit all correspondence in writing via email to the following POC:&amp;nbsp; Crystal Breen, (540) 653-5747, email: cbreen@jwac.mil&lt;/p&gt;\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;';
          //
          // // var res = '&amp;nbsp;\r\n&lt;p&gt;This is a presolicitation notice.&lt;span style=&quot;mso-spacerun: yes&quot;&gt;&amp;nbsp; &lt;/span&gt;ACC AMIC, on behalf of the Joint Warfare Analysis Center, intends to compete on a brand name basis a purchase order among authorized resellers for the commercial purchase of HP Tipping Point Annual Software Maintenance Renewal.&lt;span style=&quot;mso-spacerun: yes&quot;&gt;&amp;nbsp; &lt;/span&gt;The period of performance for this order will be 1 Nov 2013 through 31 Oct 2014.&lt;span style=&quot;mso-spacerun: yes&quot;&gt;&amp;nbsp; &lt;/span&gt;The North American Industry Classification System Code (NAICS) for this requirement is 541519: Other Computer Related Services with a size standard of $25.5M. Hewlett Packard Company is the parent company of HP Tipping Point products.&lt;span style=&quot;mso-spacerun: yes&quot;&gt;&amp;nbsp; &lt;/span&gt;&lt;/p&gt;\r\n&lt;p&gt;Lack of maintenance service, or use of a different software package, would result in a loss of business and analytical applications for the organization.&lt;span style=&quot;mso-spacerun: yes&quot;&gt;&amp;nbsp; &lt;/span&gt;A purchase order is anticipated on 22 November 2013.&lt;/p&gt;\r\n&lt;p&gt;The Government plans to use the Internet and email as the primary means of disseminating and exchanging any information concerning this requirement. All responsible sources may submit a capability statement, proposal, or quotation which shall be considered by the agency.&lt;span style=&quot;mso-spacerun: yes&quot;&gt;&amp;nbsp; &lt;/span&gt;Interested offerors should provide their company name, address, point of contact, Cage Code, phone and fax number, email address, and business size to&amp;nbsp;cbreen@jwac.mil. To be eligible for contract award, offerors must be registered in the System for Award Management (www.sam.gov) under NAICS 541519: Other Computer Related Services. Additionally, offerors responding to this notice as a Small Business concern must be certified and qualified as a Small Business and registered in the System for Award Management (www.sam.gov) under NAICS 541519. Interested parties are to submit all correspondence in writing via email to the following POC:&amp;nbsp; Crystal Breen, (540) 653-5747, email: cbreen@jwac.mil&lt;/p&gt;\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;\r\n&lt;p&gt;&amp;nbsp;&lt;/p&gt;';
          // var smp = response[0].data[0].highlight.description[0]
          // // // Small Business
          // var div = document.createElement("div");
          // div.innerHTML = smp;
          // //
          // div.innerHTML = div.textContent;
          // // alert(div.innerHTML);
          // // document.body.appendChild(div);
          // element.append(div);
        });

      }
    }
}());
