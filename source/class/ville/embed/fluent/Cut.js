/* ************************************************************************

SQville

   Authors:
     * Chris Eskew (sqville) sqville@gmail.com

************************************************************************ */

 qx.Class.define("ville.embed.fluent.Cut",
 {
   extend : ville.embed.fluent.Abstract,

   construct (iconstyle)
   {
    super();

    if (iconstyle != null)
      this.setIconStyle(iconstyle);

    var pathdregular = "M5.92 2.23a.5.5 0 0 0-.84.54L9.4 9.43l-1.92 2.96a3 3 0 1 0 .78.64L10 10.35l1.74 2.68a3 3 0 1 0 .78-.64L5.92 2.23ZM14 17a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM4 15a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm7.2-6.49-.6-.92 3.48-5.36a.5.5 0 0 1 .84.54l-3.73 5.74Z";
    var pathdfilled =  "m14.88 3.16-3.1 4.77-.9-1.38 2.74-4.2a.75.75 0 0 1 1.26.8Zm-2.38 8.6a3.24 3.24 0 0 1 4.5 2.99 3.25 3.25 0 1 1-5.72-2.11L10 10.66l-1.28 1.98a3.25 3.25 0 1 1-1.21-.88l1.6-2.47-3.99-6.13a.75.75 0 0 1 1.26-.82l6.12 9.41Zm.2 1.6a1.75 1.75 0 1 0 .01-.02l-.02.02ZM6.24 13a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Z";
    
    //prep regular
    this._htmlregular = this.svgit(this.pathit(pathdregular));

    //prep filled
    this._htmlfilled = this.svgit(this.pathit(pathdfilled));
    
    if (this.getIconStyle() == "filled")
      this.setHtml(this._htmlfilled);
    else 
      this.setHtml(this._htmlregular);

  }
 });