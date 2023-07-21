/* ************************************************************************

SQville

   Authors:
     * Chris Eskew (sqville) sqville@gmail.com

************************************************************************ */

 qx.Class.define("ville.embed.fluent.AirTickets2",
 {
   extend : ville.embed.fluent.Abstract2,

   construct ()
   {
    super();
    var pathd = "M2048 640v1152H0V640h440q1 0 33-10t87-29 126-42 154-51 169-57 172-58 161-54 139-46 103-35 56-19l134 401h274zm-1206 0h797l-79-239-718 239zm1078 128H128v896h1792V768zm-256 128v128h-128V896h128zm0 256v128h-128v-128h128zm0 384h-128v-128h128v128zm128-384h-128v-128h128v128zm0 256h-128v-128h128v128zM469 1280l-85-256h128l64 128h277l-85-256h128l128 256h256q26 0 45 19t19 45q0 26-19 45t-45 19h-256l-128 256H768l85-256H469z";
    this.setHtml(this.svgit(this.pathit(pathd)));
  }
 });