/* ************************************************************************

   Ville Software (SQville)

   Copyright: 2021 sqville

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Chris Eskew (sqville) chris.eskew@sqville.com

************************************************************************ */

/**
 * NOTE: Instances of this class must be disposed of after use
 *
 */
 qx.Class.define("ville.embed.fluent.AirTickets2",
 {
   extend : qx.ui.embed.Html,
 
   /*
   *****************************************************************************
      CONSTRUCTOR
   *****************************************************************************
   */
 
   construct ()
   {
    super();

    var pathd = "M2048 640v1152H0V640h440q1 0 33-10t87-29 126-42 154-51 169-57 172-58 161-54 139-46 103-35 56-19l134 401h274zm-1206 0h797l-79-239-718 239zm1078 128H128v896h1792V768zm-256 128v128h-128V896h128zm0 256v128h-128v-128h128zm0 384h-128v-128h128v128zm128-384h-128v-128h128v128zm0 256h-128v-128h128v128zM469 1280l-85-256h128l64 128h277l-85-256h128l128 256h256q26 0 45 19t19 45q0 26-19 45t-45 19h-256l-128 256H768l85-256H469z";

    var svghtml = '<path d="M0 0h24v24H0z" fill="none"></path>';
    svghtml += '<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>';
    
    //var html = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    //   <path d="${pathd}"></path>
    //  </svg>`;

    var html = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor">${svghtml}</svg>`;

    //this.setRich(true);
    //this.setValue(html);
    this.setHtml(html);
  }
 });